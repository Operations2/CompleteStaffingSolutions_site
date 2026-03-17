import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Financial Services Staffing Solutions | Complete Staffing Solutions",
  description:
    "Wealth management, private banking, and compliance talent. Regulatory experts, certified advisors, scalable staffing.",
};

export default function FinancialServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Financial Services" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
