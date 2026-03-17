import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Consumer Goods Staffing Solutions | Complete Staffing Solutions",
  description:
    "Top talent for product development, marketing, and distribution. Agility, customer-centric professionals, and supply chain expertise.",
};

export default function ConsumerGoodsPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Consumer Goods" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
