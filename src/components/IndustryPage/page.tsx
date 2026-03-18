import StaaffingIndustryHero from "@/components/StaffingIndustry/StaffingIndustryHero";
import ChallengesSection from "@/components/StaffingIndustry/ChallengeSection";
import DataCenterSection from "@/components/StaffingIndustry/DataCenterSection";
import ExecutiveSearchSection from "@/components/StaffingIndustry/ExecutiveSearchSection";
import FinancialServicesSection from "@/components/StaffingIndustry/FinancialServicesSection";
import IndustryExplorer from "@/components/StaffingIndustry/IndustryExplorer";
import Welcomesection from "@/components/StaffingIndustry/Welcomesection";

export default function industryPage() {
  return (
    <main>
      <StaaffingIndustryHero />
      <Welcomesection />
      <ChallengesSection />
      <ExecutiveSearchSection />
      <DataCenterSection />
      <FinancialServicesSection />
      <IndustryExplorer />
    </main>
  );
}
