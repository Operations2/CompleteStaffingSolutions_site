import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Energy Staffing Solutions | Complete Staffing Solutions",
  description:
    "Recruitment for renewable energy, utilities, and oil & gas. Sustainability focus, regulatory compliance, and engineering expertise.",
};

export default function EnergyPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Energy" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
