import { XMLParser } from "fast-xml-parser";

export type Job = {
  title: string;
  id: string;
  location: string;
  department: string;
  type: string;
  status?: string;
  descriptionHtml?: string;
  publishedDateRaw?: string;
  applyUrl?: string;
};

export type CategoryKey =
  | "healthcare"
  | "financeAccounting"
  | "informationTechnology"
  | "manufacturing"
  | "customerService"
  | "administrative";

export const FALLBACK_JOBS: Job[] = [
  {
    title: "Licensed Practical Nurse (LPN)",
    id: "#84238",
    location: "Bridgeport, CT",
    department: "Healthcare",
    type: "Full-Time",
    status: "Urgent",
    applyUrl: "/employment-form",
  },
  {
    title: "CNC Machinist",
    id: "#83912",
    location: "Stamford, CT",
    department: "Manufacturing",
    type: "Full-Time",
    status: "",
    applyUrl: "/employment-form",
  },
  {
    title: "Financial Analyst",
    id: "#84567",
    location: "New Haven, CT",
    department: "Finance",
    type: "Full-Time",
    status: "New",
    applyUrl: "/employment-form",
  },
  {
    title: "Customer Service Representative",
    id: "#84101",
    location: "Remote / USA",
    department: "Customer Service",
    type: "Part-Time",
    status: "",
    applyUrl: "/employment-form",
  },
  {
    title: "Radiology Technician",
    id: "#84325",
    location: "Danbury, CT",
    department: "Healthcare",
    type: "Full-Time",
    status: "",
    applyUrl: "/employment-form",
  },
];

export function normalizeJobId(value: string) {
  return value.replace(/^#/, "").trim();
}

function toArray<T>(value: T | T[] | undefined | null): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function cleanXmlText(xmlText: string) {
  let cleaned = (xmlText || "").trim();
  const firstTagIndex = cleaned.indexOf("<");
  if (firstTagIndex > 0) cleaned = cleaned.slice(firstTagIndex);
  return cleaned;
}

function pickText(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (typeof value === "object") {
    const obj = value as Record<string, unknown>;

    const cdata = obj["__cdata"];
    if (typeof cdata === "string") return cdata.trim();

    const maybeText = obj["#text"];
    if (typeof maybeText === "string") return maybeText.trim();
  }
  return "";
}

function getField(obj: Record<string, unknown>, ...keys: string[]) {
  for (const key of keys) {
    const v = obj[key];
    const text = pickText(v);
    if (text) return text;
  }
  return "";
}

function hasWholeWord(value: string, word: string) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\b${escaped}\\b`, "i").test(value);
}

function isInformationTechnologyDepartment(departmentRaw: string) {
  const department = (departmentRaw || "").toLowerCase();

  return (
    hasWholeWord(department, "it") ||
    department.includes("information technology") ||
    department.includes("technology") ||
    department.includes("software")
  );
}

function isManufacturingDepartment(departmentRaw: string) {
  const department = (departmentRaw || "").toLowerCase();

  return (
    department.includes("manufactur") ||
    department.includes("operations") ||
    department.includes("production") ||
    department.includes("facility services")
  );
}

export function parseJobsFromXmlServer(xmlText: string): Job[] {
  if (!xmlText) return [];

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
    cdataPropName: "__cdata",
    trimValues: true,
    parseTagValue: false,
    parseAttributeValue: false,
  });

  const cleaned = cleanXmlText(xmlText);
  const parsed = parser.parse(cleaned) as unknown;
  if (!parsed || typeof parsed !== "object") return [];

  const root = parsed as Record<string, unknown>;

  try {
    console.log("[parseJobsFromXmlServer] Root keys:", Object.keys(root));
    const sourceNode = root["source"] as any;
    if (sourceNode && typeof sourceNode === "object") {
      const jobsFromSource = (sourceNode as any)["job"];
      if (Array.isArray(jobsFromSource)) {
        console.log(
          "[parseJobsFromXmlServer] source.job is array, length:",
          jobsFromSource.length,
        );
      } else if (jobsFromSource) {
        console.log(
          "[parseJobsFromXmlServer] source.job is single object of type:",
          typeof jobsFromSource,
        );
      } else {
        console.log("[parseJobsFromXmlServer] source.job is missing");
      }
    }
  } catch {
    // Ignore logging failures so parsing still proceeds.
  }

  let jobNodes: any[] = [];

  jobNodes = toArray((root["jobs"] as any)?.["job"]);
  if (jobNodes.length === 0) {
    jobNodes = toArray((root["source"] as any)?.["job"]);
  }
  if (jobNodes.length === 0) {
    jobNodes = toArray((root["feed"] as any)?.["job"]);
  }
  if (jobNodes.length === 0) {
    jobNodes = toArray(root["job"] as any);
  }

  if (jobNodes.length === 0) return [];

  return jobNodes.map((node: any, index: number): Job => {
    const rec: Record<string, unknown> =
      node && typeof node === "object" ? (node as Record<string, unknown>) : {};

    const title = getField(rec, "jobtitle", "title") || `Job ${index + 1}`;
    const id =
      getField(rec, "referencenumber", "jobid", "id") || `#${index + 1}`;

    const city = getField(rec, "city");
    const state = getField(rec, "state");
    const location =
      (city && state ? `${city}, ${state}` : city || state) ||
      getField(rec, "location") ||
      "Location not specified";

    const department = getField(rec, "category", "department") || "General";
    const type = getField(rec, "jobtype", "type") || "Full-Time";
    const status =
      getField(rec, "status") ||
      (getField(rec, "hot_job") === "true" ? "Urgent" : "");

    const descriptionHtml =
      pickText(rec["description"]) ||
      pickText((rec["description"] as any)?.["__cdata"]) ||
      getField(rec, "jobdescription") ||
      "";

    const publishedDateRaw = getField(rec, "date");
    const applyUrl = getField(rec, "url");

    return {
      title,
      id,
      location,
      department,
      type,
      status,
      descriptionHtml,
      publishedDateRaw,
      applyUrl,
    };
  });
}

export function matchesCategoryLabel(
  departmentRaw: string,
  categoryLabelRaw: string
) {
  const department = (departmentRaw || "").toLowerCase();
  const categoryLabel = (categoryLabelRaw || "").trim().toLowerCase();
  if (!categoryLabel) return true;

  if (categoryLabel === "healthcare") {
    return department.includes("health");
  }
  if (categoryLabel === "finance & accounting") {
    return department.includes("finance") || department.includes("account");
  }
  if (categoryLabel === "information technology") {
    return isInformationTechnologyDepartment(department);
  }
  if (categoryLabel === "manufacturing") {
    return isManufacturingDepartment(department);
  }
  if (categoryLabel === "customer service") {
    return (
      department.includes("customer service") ||
      department.includes("customer support") ||
      department.includes("call center")
    );
  }
  if (categoryLabel === "administrative") {
    return (
      department.includes("admin") ||
      department.includes("office") ||
      department.includes("clerical")
    );
  }

  return department.includes(categoryLabel);
}

export function filterJobs(
  jobs: Job[],
  filters: {
    search?: string;
    location?: string;
    category?: string;
  }
) {
  const keyword = (filters.search || "").trim().toLowerCase();
  const locationQuery = (filters.location || "").trim().toLowerCase();
  const categoryQuery = (filters.category || "").trim();

  if (!keyword && !locationQuery && !categoryQuery) return jobs;

  return jobs.filter((job) => {
    const title = job.title?.toLowerCase() ?? "";
    const department = job.department?.toLowerCase() ?? "";
    const location = job.location?.toLowerCase() ?? "";
    const description = job.descriptionHtml?.toLowerCase() ?? "";

    if (keyword) {
      const matchesKeyword =
        title.includes(keyword) ||
        department.includes(keyword) ||
        location.includes(keyword) ||
        description.includes(keyword);
      if (!matchesKeyword) return false;
    }

    if (locationQuery && !location.includes(locationQuery)) return false;

    if (categoryQuery && !matchesCategoryLabel(job.department, categoryQuery)) {
      return false;
    }

    return true;
  });
}

export function computeCategoryCounts(jobs: Job[]) {
  const counts: Record<CategoryKey, number> = {
    healthcare: 0,
    financeAccounting: 0,
    informationTechnology: 0,
    manufacturing: 0,
    customerService: 0,
    administrative: 0,
  };

  for (const job of jobs) {
    const dept = (job.department || "").toLowerCase();

    if (dept.includes("health")) counts.healthcare += 1;
    if (dept.includes("finance") || dept.includes("account")) counts.financeAccounting += 1;
    if (isInformationTechnologyDepartment(dept)) counts.informationTechnology += 1;
    if (isManufacturingDepartment(dept)) counts.manufacturing += 1;
    if (
      dept.includes("customer service") ||
      dept.includes("customer support") ||
      dept.includes("call center")
    ) {
      counts.customerService += 1;
    }
    if (dept.includes("admin") || dept.includes("office") || dept.includes("clerical")) {
      counts.administrative += 1;
    }
  }

  return counts;
}