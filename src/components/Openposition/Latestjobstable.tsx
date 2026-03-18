"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { computeCategoryCounts, type Job, normalizeJobId } from "@/lib/jobs";

type CategoryKey =
  | "healthcare"
  | "financeAccounting"
  | "informationTechnology"
  | "manufacturing"
  | "customerService"
  | "administrative";

const CATEGORIES: {
  key: CategoryKey;
  name: string;
  color: string;
  stroke: string;
  icon:
    | "health"
    | "finance"
    | "it"
    | "manufacturing"
    | "customer"
    | "admin";
}[] = [
  {
    key: "healthcare",
    name: "Healthcare",
    color: "from-sky-50 to-sky-100",
    stroke: "#1d4ed8",
    icon: "health",
  },
  {
    key: "financeAccounting",
    name: "Finance & Accounting",
    color: "from-emerald-50 to-emerald-100",
    stroke: "#16a34a",
    icon: "finance",
  },
  {
    key: "informationTechnology",
    name: "Information Technology",
    color: "from-indigo-50 to-indigo-100",
    stroke: "#4f46e5",
    icon: "it",
  },
  {
    key: "manufacturing",
    name: "Manufacturing",
    color: "from-amber-50 to-amber-100",
    stroke: "#ea580c",
    icon: "manufacturing",
  },
  {
    key: "customerService",
    name: "Customer Service",
    color: "from-rose-50 to-rose-100",
    stroke: "#e11d48",
    icon: "customer",
  },
  {
    key: "administrative",
    name: "Administrative",
    color: "from-cyan-50 to-cyan-100",
    stroke: "#0891b2",
    icon: "admin",
  },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1600&q=80";

type JobsApiResponse = {
  jobs: Job[];
  total: number;
  page: number;
  hasMore: boolean;
};

function buildJobsApiUrl(params: {
  page: number;
  limit: number;
  search?: string;
  location?: string;
  category?: string;
}) {
  const url = new URL("/api/jobs", window.location.origin);
  url.searchParams.set("page", String(params.page));
  url.searchParams.set("limit", String(params.limit));

  if (params.search) url.searchParams.set("search", params.search);
  if (params.location) url.searchParams.set("location", params.location);
  if (params.category) url.searchParams.set("category", params.category);

  return url.toString();
}

interface LatestJobsTableProps {
  initialSearch?: string;
  initialCategory?: string;
}

export default function LatestJobsTable({
  initialSearch = "",
  initialCategory = "",
}: LatestJobsTableProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState<string>(initialSearch);
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>(initialCategory);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const limit = 20;
  const router = useRouter();
  const fetchSeq = useRef(0);

  const categoryCounts = useMemo(() => {
    return computeCategoryCounts(jobs);
  }, [jobs]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => window.clearTimeout(t);
  }, [searchTerm]);

  const formatJobCount = (count: number) => {
    const safeCount = Number.isFinite(count) ? count : 0;
    const formatted = safeCount.toLocaleString();

    return `${formatted} Job${safeCount === 1 ? "" : "s"}`;
  };

  async function fetchJobsPage(args: {
    page: number;
    replace: boolean;
    search: string;
    location: string;
    category: string;
  }) {
    const seq = ++fetchSeq.current;
    const isFirstPage = args.page === 1;

    if (isFirstPage) {
      setIsLoading(true);
      setHasError(false);
    } else {
      setIsLoadingMore(true);
      setHasError(false);
    }

    try {
      const url = buildJobsApiUrl({
        page: args.page,
        limit,
        search: args.search,
        location: args.location,
        category: args.category,
      });

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to load jobs: ${res.status}`);

      const data = (await res.json()) as JobsApiResponse;
      if (seq !== fetchSeq.current) return;

      setTotal(Number.isFinite(data.total) ? data.total : 0);
      setHasMore(Boolean(data.hasMore));
      setPage(Number.isFinite(data.page) ? data.page : args.page);

      setJobs((prev) => (args.replace ? data.jobs : [...prev, ...data.jobs]));
    } catch {
      if (seq !== fetchSeq.current) return;
      if (args.replace) setJobs([]);
      setHasMore(false);
      setTotal(0);
      setHasError(true);
    } finally {
      if (seq !== fetchSeq.current) return;
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  }

  // Initial load + whenever filters change (search is debounced).
  useEffect(() => {
    fetchJobsPage({
      page: 1,
      replace: true,
      search: debouncedSearch,
      location: locationFilter,
      category: categoryFilter,
    });
  }, [debouncedSearch, locationFilter, categoryFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  const visibleJobs = jobs;

  const handleApplyClick = (job: Job) => {
    const normalizedId = normalizeJobId(job.id);
    if (!normalizedId) {
      router.push("/employment-form");
      return;
    }

    router.push(`/open-position/${encodeURIComponent(normalizedId)}`);
  };

  const handleDepartmentClick = (department: string) => {
    const normalized = department.toLowerCase();

    if (normalized.includes("health")) {
      setCategoryFilter("Healthcare");
      return;
    }

    if (normalized.includes("finance") || normalized.includes("account")) {
      setCategoryFilter("Finance & Accounting");
      return;
    }

    if (
      normalized === "it" ||
      normalized.includes("information technology") ||
      normalized.includes("technology") ||
      normalized.includes("software")
    ) {
      setCategoryFilter("Information Technology");
      return;
    }

    if (
      normalized.includes("manufactur") ||
      normalized.includes("operations") ||
      normalized.includes("production")
    ) {
      setCategoryFilter("Manufacturing");
      return;
    }

    if (
      normalized.includes("customer service") ||
      normalized.includes("customer support") ||
      normalized.includes("call center")
    ) {
      setCategoryFilter("Customer Service");
      return;
    }

    if (
      normalized.includes("admin") ||
      normalized.includes("office") ||
      normalized.includes("clerical")
    ) {
      setCategoryFilter("Administrative");
      return;
    }

    // Fallback: just use the raw department label.
    setCategoryFilter(department);
  };

  return (
    <>
      <section className="relative w-full bg-[#0b2547] py-10 sm:py-12 lg:py-16">
        {/* Background image on the right, softly blended into left side */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[60%]">
          <img
            src={HERO_IMAGE}
            alt="Professional smiling in modern office"
            className="h-full w-full object-cover object-center opacity-80 sm:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0b2547] via-[#0b2547]/80 to-[#0b2547]/95" />
        </div>

        <div className="relative w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Content */}
          <div className="relative z-10 flex flex-col gap-8 text-white lg:flex-row lg:items-center">
            {/* Left: label + large logo */}
            <div className="flex w-full flex-col items-start gap-3 lg:w-auto">
              <p className="text-xs sm:text-sm font-[var(--font-inter)] tracking-[0.3em] uppercase text-[#ffeb99]">
                Jobboard presented by
              </p>
              <div className="inline-flex items-center justify-center rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
                <img
                  src="/open position/top-one-hire.jpg"
                  alt="TopOneHire logo"
                  className="h-14 w-auto object-contain sm:h-16 lg:h-20"
                />
              </div>
            </div>

            {/* Right: headline, copy, and search centered in hero */}
            <div className="flex-1 max-w-2xl space-y-4 lg:ml-4">
              {/* Headline + subheadline */}
              <div className="space-y-2 text-left lg:text-left">
                <h1 className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(22px,3.2vw,32px)] leading-snug">
                  Browse Top <span className="text-[var(--accent)]">Job Opportunities.</span>
                </h1>
                <p className="font-[var(--font-inter)] text-sm sm:text-[15px] text-white/90">
                  Helping Employers &amp; Job Seekers Succeed
                </p>
              </div>

              {/* Description */}
              <p className="font-[var(--font-inter)] text-xs sm:text-[13px] text-white/85 max-w-[520px] leading-relaxed">
                We are a systematic staffing partner that works with energy, care, and insight to connect employers
                across healthcare, finance, and real estate with the talent they need. Explore current openings and
                apply in minutes.
              </p>

              {/* Search row */}
              <div className="mt-4 bg-white/0 lg:bg-white/95 rounded-full px-3 sm:px-4 py-2 flex flex-col gap-2 sm:flex-row sm:items-center shadow-xl w-full">
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="min-w-0 flex-[1_1_0] rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#19478e]/60 focus:border-[#19478e]"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="min-w-0 flex-[1_1_0] rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#19478e]/60 focus:border-[#19478e]"
                />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#19478e]/60 focus:border-[#19478e]"
                >
                  <option value="">Category</option>
                  {/* High-level groupings that match the category cards */}
                  <option>Healthcare</option>
                  <option>Finance &amp; Accounting</option>
                  <option>Information Technology</option>
                  <option>Manufacturing</option>
                  <option>Customer Service</option>
                  <option>Administrative</option>
                  <option disabled>──────────</option>
                  {/* More specific ATS-style categories */}
                  <option>Accounting</option>
                  <option>Accounts Payable</option>
                  <option>Accounts Receivable</option>
                  <option>Aerospace</option>
                  <option>Banking</option>
                  <option>Biotechnology</option>
                  <option>Communications</option>
                  <option>Construction Management</option>
                  <option>Consulting</option>
                  <option>Consumer Products</option>
                  <option>Corporate Finance</option>
                  <option>Corporate Legal</option>
                  <option>Corporate Tax</option>
                  <option>Customer Service</option>
                  <option>Customer Success</option>
                  <option>Distribution</option>
                  <option>Education</option>
                  <option>Engineering</option>
                  <option>Executive Search</option>
                  <option>Facility Management 1</option>
                  <option>Facility Services</option>
                  <option>Financial Services</option>
                  <option>Grants/Research Admin</option>
                  <option>Healthcare</option>
                  <option>Human Resources</option>
                  <option>Information Technology</option>
                  <option>Inside Sales</option>
                  <option>Insurance</option>
                  <option>Internal Audit</option>
                  <option>Lawyer (Legal)</option>
                  <option>Legal (law firm)</option>
                  <option>Manufacturing</option>
                  <option>Marketing</option>
                  <option>Medical Devices &amp; Supplies</option>
                  <option>Operations</option>
                  <option>Other Area(s)</option>
                  <option>Outside Sales</option>
                  <option>Payroll</option>
                  <option>Pharmaceutical</option>
                  <option>Property Management</option>
                  <option>Public Accounting</option>
                  <option>Purchasing</option>
                  <option>Real Estate</option>
                  <option>Recruiting</option>
                  <option>Retail</option>
                  <option>Retail Banking</option>
                  <option>SAAS</option>
                  <option>Sales</option>
                  <option>Warehouse</option>
                </select>
                <button
                  className="w-full sm:w-auto sm:flex-none whitespace-nowrap rounded-full bg-[#6CA642] px-6 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-[#5a9238] transition-colors"
                  onClick={() => {
                    setDebouncedSearch(searchTerm);
                    fetchJobsPage({
                      page: 1,
                      replace: true,
                      search: searchTerm,
                      location: locationFilter,
                      category: categoryFilter,
                    });
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f7fb] py-10 sm:py-12 lg:py-14">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Browse Jobs by Category */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-3">
              <h2 className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(18px,2.2vw,22px)] text-neutral-900">
                Browse Jobs by Category
              </h2>
            </div>
            <div className="relative">
              <div className="flex flex-wrap gap-4 pb-2">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.name}
                    onClick={() =>
                      setCategoryFilter((current) =>
                        current === cat.name ? "" : cat.name
                      )
                    }
                    className={`flex-1 min-w-[150px] sm:min-w-[170px] max-w-[190px] rounded-2xl overflow-hidden bg-white shadow-sm border border-neutral-200 flex flex-col justify-between cursor-pointer ${
                      categoryFilter === cat.name ? "ring-2 ring-[#19478e]" : ""
                    }`}
                  >
                    <div className="px-4 pt-4 pb-3 flex flex-col gap-2">
                      {/* Icon row */}
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-xl bg-neutral-50 flex items-center justify-center">
                          {/* category icon, styled like reference */}
                          {cat.icon === "health" && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-7 w-7"
                              fill="none"
                              stroke={cat.stroke}
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="8" cy="7" r="2.3" />
                              <path d="M4.5 14c.4-2 1.7-3 3.5-3s3.1 1 3.5 3" />
                              <circle cx="17" cy="7" r="2.3" />
                              <path d="M13.5 14c.4-2 1.7-3 3.5-3 1.7 0 3 1 3.4 3" />
                            </svg>
                          )}
                          {cat.icon === "finance" && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-7 w-7"
                              fill="none"
                              stroke={cat.stroke}
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="4" y="4" width="12" height="16" rx="1.5" />
                              <path d="M8 9h6M8 12h3M8 15h4" />
                            </svg>
                          )}
                          {cat.icon === "it" && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-7 w-7"
                              fill="none"
                              stroke={cat.stroke}
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="4" width="18" height="13" rx="2" />
                              <path d="M8 19h8" />
                            </svg>
                          )}
                          {cat.icon === "manufacturing" && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-7 w-7"
                              fill="none"
                              stroke={cat.stroke}
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 20V9l4 2 4-3 6 3v9H5z" />
                              <path d="M9 13v7M13 11v9M17 13v7" />
                            </svg>
                          )}
                          {cat.icon === "customer" && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-7 w-7"
                              fill="none"
                              stroke={cat.stroke}
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="7" r="3" />
                              <path d="M5 19c.6-3 3-5 7-5s6.4 2 7 5" />
                              <path d="M4 10v3a2 2 0 0 0 2 2h1" />
                              <path d="M20 10v3a2 2 0 0 1-2 2h-1" />
                            </svg>
                          )}
                          {cat.icon === "admin" && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-7 w-7"
                              fill="none"
                              stroke={cat.stroke}
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="5" y="4" width="14" height="16" rx="2" />
                              <circle cx="12" cy="9" r="2.3" />
                              <path d="M8.5 16c.5-1.5 1.8-2.5 3.5-2.5s3 1 3.5 2.5" />
                            </svg>
                          )}
                        </div>
                        <span className="text-xs text-neutral-400">→</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-[#19478e] hover:underline">
                          {cat.name}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {formatJobCount(categoryCounts[cat.key] ?? 0)}
                        </span>
                      </div>
                    </div>
                    <div className={`h-2 rounded-b-3xl bg-gradient-to-r ${cat.color}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Job Listings card */}
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
            {/* Header */}
            <div className="px-4 sm:px-6 md:px-8 pt-5 pb-4 border-b border-neutral-100 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(18px,2.3vw,22px)] text-neutral-900">
                  Featured Job Listings
                </h2>
                <p className="font-[var(--font-inter)] text-xs sm:text-sm text-neutral-600">
                  Explore some of the latest opportunities available through our network.
                </p>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 text-xs sm:text-sm font-[var(--font-inter)]">
                <thead>
                  <tr className="bg-[#eef2fb] text-left font-semibold text-neutral-600">
                    <th className="px-4 sm:px-6 py-3 border-b border-neutral-200 text-left"> #</th>
                    <th className="px-4 sm:px-6 py-3 border-b border-neutral-200 text-left"> Actions</th>
                    <th className="px-4 sm:px-6 py-3 border-b border-neutral-200">Job Title</th>
                    <th className="px-4 sm:px-6 py-3 border-b border-neutral-200">Job ID</th>
                    <th className="px-4 sm:px-6 py-3 border-b border-neutral-200">Location</th>
                    <th className="px-4 sm:px-6 py-3 border-b border-neutral-200">Department</th>
                    <th className="px-4 sm:px-6 py-3 border-b border-neutral-200">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-4 sm:px-6 py-6 text-center text-neutral-500"
                      >
                        Loading job listings...
                      </td>
                    </tr>
                  )}
                  {!isLoading && visibleJobs.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-4 sm:px-6 py-6 text-center text-neutral-500"
                      >
                        {hasError
                          ? "We couldn't load jobs right now. Please try again."
                          : "No job listings are available right now."}
                      </td>
                    </tr>
                  )}
                  {!isLoading &&
                    visibleJobs.map((job: Job, idx: number) => (
                    <tr
                      key={job.id || idx}
                      className={idx % 2 === 1 ? "bg-white" : "bg-[#f9fbff]"}
                    >
                      {/* Job ID column */}
                      <td className="px-4 sm:px-6 py-3 border-b border-neutral-100 text-neutral-700">
                        {idx + 1}
                      </td>
                      {/* Apply button as first column */}
                      <td className="px-4 sm:px-6 py-3 border-b border-neutral-100">
                        <button
                          className="inline-flex items-center justify-center rounded-full bg-[#1a458b] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#153874] transition-colors"
                          onClick={() => handleApplyClick(job)}
                        >
                          Apply Now
                        </button>
                      </td>

                      {/* Job title + status (without leading icon box) */}
                      <td className="px-4 sm:px-6 py-3 border-b border-neutral-100">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-neutral-900">{job.title}</span>
                            {job.status === "Urgent" && (
                              <span className="rounded-full bg-[#fee2e2] px-2 py-[2px] text-[10px] font-semibold text-[#b91c1c]">
                                Urgent
                              </span>
                            )}
                            {job.status === "New" && (
                              <span className="rounded-full bg-[#dcfce7] px-2 py-[2px] text-[10px] font-semibold text-[#166534]">
                                New
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Job ID column */}
                      <td className="px-4 sm:px-6 py-3 border-b border-neutral-100 text-neutral-700">
                        {normalizeJobId(job.id)}
                      </td>

                      {/* Location */}
                      <td className="px-4 sm:px-6 py-3 border-b border-neutral-100 text-neutral-700">
                        {job.location}
                      </td>

                      {/* Department */}
                      <td className="px-4 sm:px-6 py-3 border-b border-neutral-100 text-left">
                        <span
                          onClick={() => handleDepartmentClick(job.department)}
                          className="text-[#19478e] text-left font-semibold underline-offset-2 hover:underline cursor-default "
                        >
                          {job.department}
                        </span>
                      </td>

                      {/* Type — do not show "Full-Time" per request */}
                      <td className="px-4 sm:px-6 py-3 border-b border-neutral-100 text-neutral-700 whitespace-nowrap">
                        {(job?.publishedDateRaw || '').split(" ").slice(0, 4).join(" ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Load more row */}
            {!isLoading && visibleJobs.length > 0 && (
              <div className="px-4 sm:px-6 md:px-8 py-4 text-center bg-white">
                <button
                  className="text-sm font-semibold text-[#19478e] hover:underline"
                  onClick={() => {
                    if (isLoadingMore || !hasMore) return;
                    fetchJobsPage({
                      page: page + 1,
                      replace: false,
                      search: debouncedSearch,
                      location: locationFilter,
                      category: categoryFilter,
                    });
                  }}
                  disabled={!hasMore || isLoadingMore}
                  aria-disabled={!hasMore || isLoadingMore}
                >
                  {isLoadingMore ? "Loading..." : "Load More Job Listings"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}