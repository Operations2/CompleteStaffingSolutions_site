import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Communications Staffing Solutions | Complete Staffing Solutions",
  description:
    "Staffing for digital media, PR, and journalism. Creative storytelling, digital media innovators, and audience engagement specialists.",
};

export default function CommunicationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Communications" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
