import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Construction Staffing Solutions | Complete Staffing Solutions",
  description:
    "Expert construction staffing for skilled trades and project management.",
};

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Construction" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
