import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Finance Staffing Solutions | Complete Staffing Solutions",
  description:
    "Experts for banking, investment, and insurance. Integrity, risk management, and financial accuracy.",
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
