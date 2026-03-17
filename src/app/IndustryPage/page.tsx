import StaaffingIndustryHero from "@/components/StaffingIndustry/StaffingIndustryHero";
import ChallengesSection from "@/components/StaffingIndustry/ChallengeSection";
// import IndustryGrid from "@/components/StaffingIndustry/IndustriesGridSection";
// import IndustryStats from "@/components/StaffingIndustry/IndustryStats";
// import NewFocusAreas from "@/components/StaffingIndustry/NewFocusAreas";
import DataCenterSection from "@/components/StaffingIndustry/DataCenterSection";
import ExecutiveSearchSection from "@/components/StaffingIndustry/ExecutiveSearchSection";
import FinancialServicesSection from "@/components/StaffingIndustry/FinancialServicesSection";
// import RolesSection from "@/components/StaffingIndustry/RoleSection";
import IndustryExplorer from "@/components/StaffingIndustry/IndustryExplorer";

// import WelcomeSection from "@/components/StaffingIndustry/WelcomeSection";
import Welcomesection from "@/components/StaffingIndustry/Welcomesection";
export default function industryPage() {
    return (
        <main >
            <StaaffingIndustryHero />
            {/* <WelcomeSection/> */}
            <Welcomesection />
            <ChallengesSection />
            <ExecutiveSearchSection/>
                        <DataCenterSection/>

                                    <FinancialServicesSection/>

            {/* <IndustryGrid /> */}
            {/* < IndustryStats/> */}
            {/* <NewFocusAreas /> */}

            <IndustryExplorer />

        </main>
    );
}
