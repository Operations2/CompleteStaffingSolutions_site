import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Legal Staffing Solutions | Complete Staffing Solutions",
  description:
    "Paralegals, attorneys, and administrators for law firms and legal departments. Legal expertise, ethical standards, and professionalism.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Legal" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
