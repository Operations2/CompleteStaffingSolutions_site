import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Design Staffing Solutions | Complete Staffing Solutions",
  description:
    "Creative design talent with technical mastery and collaborative mindsets. Portfolio-verified designers.",
  alternates: {
    canonical: "/industries-we-serve/design",
  },
  };

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Design" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
