import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Non-profit Staffing Solutions | Complete Staffing Solutions",
  description:
    "Social services, education, and conservation groups. Mission alignment, community engagement, and transparent operations.",
};

export default function NonProfitPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Non-profit" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
