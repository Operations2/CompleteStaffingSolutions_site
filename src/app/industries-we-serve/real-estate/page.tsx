import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Real Estate Staffing Solutions | Complete Staffing Solutions",
  description:
    "Expert real estate staffing for residential and commercial firms—sales, leasing, and property management talent.",
};

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Real Estate" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
