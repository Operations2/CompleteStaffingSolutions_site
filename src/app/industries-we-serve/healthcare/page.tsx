import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Healthcare Staffing Solutions | Complete Staffing Solutions",
  description:
    "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Healthcare" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
