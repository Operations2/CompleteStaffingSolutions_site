import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Property Management Staffing Solutions | Complete Staffing Solutions",
  description:
    "Strategic staffing for property oversight and tenant satisfaction. Tenant focus, strategic plans, and regulatory compliance.",
};

export default function PropertyPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Property Management" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
