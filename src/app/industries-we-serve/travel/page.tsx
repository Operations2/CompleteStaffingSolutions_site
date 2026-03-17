import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Travel Staffing Solutions | Complete Staffing Solutions",
  description:
    "Hotels, resorts, and tour operators. Customer service excellence, safety, and passion for travel.",
};

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Recreation & Travel" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
