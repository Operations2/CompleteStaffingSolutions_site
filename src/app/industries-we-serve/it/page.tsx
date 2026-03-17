import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Software & IT Services Staffing Solutions | Complete Staffing Solutions",
  description:
    "Cloud, software engineering, and data analysis talent. Problem-solving skills, technical expertise, and collaborative development.",
};

export default function ITPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Software & IT Services" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
