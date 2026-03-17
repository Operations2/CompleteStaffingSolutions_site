import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Public Administration Staffing Solutions | Complete Staffing Solutions",
  description:
    "Government agencies and public utilities. Accountable talent, public service mission, and leadership.",
};

export default function PublicPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Public Administration" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
