import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Agriculture Staffing Solutions | Complete Staffing Solutions",
  description:
    "Dedicated staffing for organic farms, nurseries, and agribusinesses. Experienced agricultural workers and scalable labor solutions.",
};

export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Agriculture" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
