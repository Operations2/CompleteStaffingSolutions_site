import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Wellness Staffing Solutions | Complete Staffing Solutions",
  description:
    "Fitness centers, spas, and retreats. Certified expertise, empathy, motivation, and client accountability.",
};

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Wellness & Fitness" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
