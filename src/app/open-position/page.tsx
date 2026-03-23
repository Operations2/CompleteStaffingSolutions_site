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
