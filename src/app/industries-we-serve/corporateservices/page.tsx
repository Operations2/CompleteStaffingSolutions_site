import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Corporate Services Staffing Solutions | Complete Staffing Solutions",
  description:
    "HR, Finance, and leadership talent for your organization. Professionalism, comprehensive support, and organizational fit.",
};

export default function CorporateServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Corporate Services" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
