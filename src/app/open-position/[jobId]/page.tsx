"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Job } from "@/lib/jobs";
import JobApplicationForm from "@/components/Openposition/JobApplicationForm";

function normalizeJobId(value: string) {
  return value.replace(/^#/, "").trim();
}

function formatPublishedDate(raw?: string) {
  if (!raw) return "";
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return raw;

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function JobDetailPage() {
  const params = useParams<{ jobId: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const rawJobId = params?.jobId ?? "";
  const normalizedParamId = normalizeJobId(decodeURIComponent(rawJobId));

  useEffect(() => {
    let isMounted = true;

    async function loadJob() {
      try {
        const url = new URL("/api/jobs", window.location.origin);
        url.searchParams.set("id", normalizedParamId);
        url.searchParams.set("page", "1");
        url.searchParams.set("limit", "1");

        const res = await fetch(url.toString());
        if (!res.ok) throw new Error(`Failed to load job: ${res.status}`);

        const data = (await res.json()) as { jobs?: Job[] };
        const found = data.jobs?.[0] ?? null;

        if (!isMounted) return;

        if (found) {
          setJob(found);
          setHasError(false);
        } else {
          setJob(null);
          setHasError(true);
        }
      } catch {
        if (!isMounted) return;
        setJob(null);
        setHasError(true);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    if (normalizedParamId) {
      loadJob();
    } else {
      setIsLoading(false);
      setHasError(true);
    }

    return () => {
      isMounted = false;
    };
  }, [normalizedParamId]);

  const publishedLabel = job ? formatPublishedDate(job.publishedDateRaw) : "";

  return (
    <main className="min-h-screen bg-[#f5f7fb] py-10 sm:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <section className="mb-10 sm:mb-12">
          {isLoading && (
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 text-center text-neutral-600">
              Loading job details...
            </div>
          )}

          {!isLoading && hasError && (
            <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-6 sm:p-8">
              <h1 className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(20px,2.6vw,26px)] text-neutral-900 mb-2">
                Job not found
              </h1>
              <p className="font-[var(--font-inter)] text-sm text-neutral-600">
                We could not locate this job posting. It may have expired or
                been removed. Please return to the open positions page to view
                current opportunities.
              </p>
            </div>
          )}

          {!isLoading && !hasError && job && (
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <h1 className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(22px,3vw,30px)] text-[#17468e] mb-2 text-2xl">
                  {job.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-[var(--font-inter)] text-neutral-600">
                  {publishedLabel && <span>Published {publishedLabel}</span>}

                  {job.location && (
                    <span className="inline-flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-neutral-300" />
                      <span>{job.location}</span>
                    </span>
                  )}

                  {job.id && (
                    <span className="inline-flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-neutral-300" />
                      <span>Job ID: {normalizeJobId(job.id)}</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="border-t border-neutral-100 pt-6">
                <h2 className="font-[var(--font-plus-jakarta)] font-semibold text-[clamp(16px,2vw,20px)] text-neutral-900 mb-4">
                  Key Responsibilities & Details
                </h2>

                <div
                  className="description-content text-black"
                  dangerouslySetInnerHTML={{
                    __html:
                      job.descriptionHtml &&
                      job.descriptionHtml.trim().length > 0
                        ? job.descriptionHtml
                        : "<p>Description coming soon. Please contact our team for more details about this opportunity.</p>",
                  }}
                />
              </div>
            </div>
          )}
        </section>

        {!isLoading && !hasError && job && (
          <section>
            <JobApplicationForm
              jobTitle={job.title}
              jobId={normalizeJobId(job.id)}
            />
          </section>
        )}
      </div>
    </main>
  );
}