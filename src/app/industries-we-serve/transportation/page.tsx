import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Transportation & Logistics Staffing Solutions | Complete Staffing Solutions",
  description:
    "Shipping and warehousing talent. Efficiency, supply chain optimization, and skilled logistics.",
};

export default function TransportationPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Transportation & Logistics" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
