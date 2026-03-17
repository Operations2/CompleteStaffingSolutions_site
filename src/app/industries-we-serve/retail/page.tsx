import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Retail Staffing Solutions | Complete Staffing Solutions",
  description:
    "Fashion, tech, and specialty stores. Product knowledge, adaptability, and sales growth.",
};

export default function RetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Retail" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
