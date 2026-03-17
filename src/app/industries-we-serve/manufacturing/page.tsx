import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Manufacturing Staffing Solutions | Complete Staffing Solutions",
  description:
    "Automotive, aerospace, and equipment sectors. Quality, operational safety, and skilled industrial labor.",
};

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Manufacturing" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
