import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Media Staffing Solutions | Complete Staffing Solutions",
  description:
    "Digital media, PR, and journalism talent. Storytelling excellence, digital media innovators, and audience engagement specialists.",
};

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Media" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
