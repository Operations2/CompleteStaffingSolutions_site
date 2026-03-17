import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Insurance Staffing Solutions | Complete Staffing Solutions",
  description:
    "Underwriters, claims specialists, and risk consultants. Risk management, claims adjusters, and licensed insurance professionals.",
};

export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Insurance" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
