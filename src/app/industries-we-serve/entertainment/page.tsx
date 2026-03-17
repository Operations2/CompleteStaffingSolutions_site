import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Entertainment Staffing Solutions | Complete Staffing Solutions",
  description:
    "Staffing for film, music, gaming, and theater. Creative vision alignment, fast-paced adaptability, and talent management.",
};

export default function EntertainmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Entertainment" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
