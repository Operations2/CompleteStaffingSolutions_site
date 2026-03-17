// import JobHero from "@/components/OpenPosition/Jobhero";
// import FeaturedJobs from "@/components/OpenPosition/Featuredjobs";
// import LatestJobsTable from "@/components/OpenPosition/Latestjobstable";
// import JobRequestSection from "@/components/JobRequestSection";
// export const metadata = {
//   title: "Open Positions | Complete Staffing Solutions",
//   description: "Browse current job openings and apply today. Find your next opportunity with Complete Staffing Solutions.",
// };

// export default function OpenPositionPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <JobHero />
//       <FeaturedJobs />
//       <LatestJobsTable />
//       <JobRequestSection/>
//     </main>
//   );
// }
// src/app/open-position/page.tsx

import LatestJobsTable from "@/components/Openposition/Latestjobstable";
import JobRequestSection from "@/components/JobRequestSection";

type OpenPositionPageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
};

export default async function OpenPositionPage({
  searchParams,
}: OpenPositionPageProps) {
  const resolvedSearchParams = await searchParams;

  const initialSearch = resolvedSearchParams?.search ?? "";
  const initialCategory = resolvedSearchParams?.category ?? "";

  return (
    <main className="min-h-screen bg-white">
      <LatestJobsTable
        initialSearch={initialSearch}
        initialCategory={initialCategory}
      />
      <JobRequestSection />
    </main>
  );
}
