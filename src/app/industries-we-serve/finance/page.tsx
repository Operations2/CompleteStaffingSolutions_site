import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Finance Staffing Solutions | Complete Staffing Solutions",
  description:
    "Finance and accounting staffing in all 50 states. Controllers, CFOs, and Staff Accountants placed in 5–10 days by experienced recruiters.",
  alternates: {
    canonical: "/industries-we-serve/finance",
  },
  };

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Finance" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
