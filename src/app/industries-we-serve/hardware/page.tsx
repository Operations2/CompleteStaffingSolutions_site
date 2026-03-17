import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Hardware & Networking Staffing Solutions | Complete Staffing Solutions",
  description:
    "IT services, telecomm, and networking infrastructure talent. Technical innovation, system scalability, and cybersecurity focus.",
};

export default function HardwarePage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Hardware & Networking" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
