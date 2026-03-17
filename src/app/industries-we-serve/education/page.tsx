import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Education Staffing Solutions | Complete Staffing Solutions",
  description:
    "Tailored recruitment for K-12, higher ed, and nonprofits. Instructional excellence, diversity, and administrative expertise.",
};

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Education" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
