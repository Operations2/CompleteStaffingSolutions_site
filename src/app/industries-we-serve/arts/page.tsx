import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Arts Staffing Solutions | Complete Staffing Solutions",
  description:
    "Specialized staffing for museums, galleries, and performing arts. Creative talent and niche administrative support.",
};

export default function ArtsPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Arts" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
