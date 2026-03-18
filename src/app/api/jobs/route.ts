import { NextRequest, NextResponse } from "next/server";
import {
  FALLBACK_JOBS,
  filterJobs,
  normalizeJobId,
  parseJobsFromXmlServer,
} from "@/lib/jobs";
import { error } from "console";

type JobsResponse = {
  jobs: typeof FALLBACK_JOBS;
  total: number;
  page: number;
  hasMore: boolean;
};

const CACHE_TTL_MS = 5 * 60 * 1000;

let cached: {
  feedUrl: string;
  fetchedAt: number;
  jobs: typeof FALLBACK_JOBS;
} | null = null;

function clampInt(value: unknown, fallback: number, min: number, max: number) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  const i = Math.trunc(n);
  return Math.min(max, Math.max(min, i));
}

function resolveFeedUrl(req: NextRequest) {
  const configured = process.env.NEXT_PUBLIC_JOBS_FEED_URL?.trim();
  console.log('configured:', configured);
  const candidate = configured && configured.length > 0 ? configured : "/jobs.xml";
  console.log('candidate:', candidate);

  // If it's already absolute, keep it. If it's relative, resolve from request origin.
  try {
    return new URL(candidate).toString();
  } catch {
    return new URL(candidate, req.nextUrl.origin).toString();
  }
}

async function getAllJobs(req: NextRequest) {
  const feedUrl = resolveFeedUrl(req);
  const now = Date.now();

  console.log('feedUrl:', feedUrl);

  // if (cached && cached.feedUrl === feedUrl && now - cached.fetchedAt < CACHE_TTL_MS) {
  //   return cached.jobs;
  // }

  try {
    console.log('fetching...');
    const res = await fetch(feedUrl);

    console.log('res:', res);

    if (!res.ok) throw new Error(`Failed to fetch jobs XML: ${res.status}`);

    const xmlText = await res.text();
    console.log("[/api/jobs] Fetched configured feed:", {
      feedUrl,
      status: res.status,
      contentType: res.headers.get("content-type"),
      length: xmlText.length,
      hasSource: xmlText.includes("<source"),
      hasJobTag: xmlText.includes("<job"),
      first200: xmlText.slice(0, 200),
    });
    let parsed = parseJobsFromXmlServer(xmlText);
    console.log("[/api/jobs] Parsed jobs from configured feed:", {
      feedUrl,
      count: parsed.length,
    });

    // If the configured URL returns no jobs (e.g., format mismatch or network issue),
    // fall back to the local /jobs.xml file before using hard-coded fallback data.
    if (parsed.length === 0) {
      try {
        const localUrl = new URL("/jobs.xml", req.nextUrl.origin).toString();
        const localRes = await fetch(localUrl, {
          cache: "no-store",
          headers: {
            Accept:
              "application/xml,text/xml,application/xhtml+xml,text/html;q=0.9,*/*;q=0.8",
          },
        });

        if (localRes.ok) {
          const localXml = await localRes.text();
          const localParsed = parseJobsFromXmlServer(localXml);
          console.log("[/api/jobs] Parsed jobs from local /jobs.xml:", {
            localUrl,
            count: localParsed.length,
          });
          if (localParsed.length > 0) {
            parsed = localParsed;
          }
        }
      } catch {
        // Ignore and fall through to using hard-coded fallback jobs.
      }
    }

    const jobs = parsed;
    console.log("[/api/jobs] Final jobs count (no fallback):", {
      count: jobs.length,
    });

    cached = { feedUrl, fetchedAt: now, jobs };
    return jobs;
  } catch (error) {
    console.error("Error in /api/jobs (configured feed):", error);

    // Testing/dev behavior: if the external feed can't be fetched (e.g., TLS cert expired),
    // fall back to local /jobs.xml so the UI can still work.
    try {
      const localUrl = new URL("/jobs.xml", req.nextUrl.origin).toString();
      const localRes = await fetch(localUrl, {
        cache: "no-store",
        headers: {
          Accept: "application/xml,text/xml,application/xhtml+xml,text/html;q=0.9,*/*;q=0.8",
        },
      });

      if (!localRes.ok) throw new Error(`Local /jobs.xml fetch failed: ${localRes.status}`);
      const localXml = await localRes.text();
      const localParsed = parseJobsFromXmlServer(localXml);
      console.log("[/api/jobs] Parsed jobs from local /jobs.xml (catch):", {
        localUrl,
        count: localParsed.length,
      });
      cached = { feedUrl, fetchedAt: now, jobs: localParsed };
      return localParsed;
    } catch (localError) {
      console.error("[/api/jobs] Failed to parse local /jobs.xml:", localError);
      return [] as typeof FALLBACK_JOBS;
    }
  }
}
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = clampInt(searchParams.get("page"), 1, 1, 10_000);
    const limit = clampInt(searchParams.get("limit"), 20, 1, 100);
    const id = searchParams.get("id") || "";
    const search = searchParams.get("search") || "";
    const location = searchParams.get("location") || "";
    const category = searchParams.get("category") || "";
    const all = await getAllJobs(req);
    const idNormalized = normalizeJobId(id);
    const filteredById =
      idNormalized.length > 0
        ? all.filter((job) => normalizeJobId(job.id) === idNormalized)
        : all;

    const filtered = filterJobs(filteredById, { search, location, category });

    const start = (page - 1) * limit;
    const jobs = filtered.slice(start, start + limit);
    const total = filtered.length;
    const hasMore = start + limit < total;

    const body: JobsResponse = { jobs, total, page, hasMore };
    return NextResponse.json(body, {
      status: 200,
      headers: {
        // CDN/browser can cache API response briefly; in-memory cache is the main win.
        "Cache-Control": "public, max-age=30, s-maxage=30",
      },
    });
  } catch (error) {
    console.error("Error in /api/jobs:", error);
    return NextResponse.json(
      { error: "Failed to load jobs." },
      { status: 500 },
    );
  }
}

