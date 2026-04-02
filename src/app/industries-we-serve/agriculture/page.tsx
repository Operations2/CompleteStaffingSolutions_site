import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Agricultural Staffing Solutions | Complete Staffing Solutions",
  description:
    "Expert Agricultural staffing services for Agricultural Facilities.",
  alternates: {
    canonical: "/industries-we-serve/Agriculture",
  },
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
