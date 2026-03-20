import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Engineering / Supply Chain Staffing Solutions | Complete Staffing Solutions",
  description:
    "Skilled professionals for engineering operations, sourcing, logistics, and supply continuity. Staffing solutions built for reliability and speed.",
};

export default function EngineeringSupplyChainPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Engineering / Supply Chain" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}