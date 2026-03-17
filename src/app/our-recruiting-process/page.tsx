import HeroSection from "@/components/OurRecruitingProcess/HeroSection";
import ProcessSummarySection from "@/components/OurRecruitingProcess/ProcessSummarySection";
import ProcessSteps from "@/components/OurRecruitingProcess/Processsteps";
import RecruitingProcessCTA from "@/components/OurRecruitingProcess/RecruitingProcessCTA";

export const metadata = {
  title: "Our Recruiting Process | Complete Staffing Solutions",
  description:
    "Learn how Complete Staffing Solutions finds the right talent. Our fast, transparent, human-focused recruiting process connects people with the right opportunities.",
};

export default function OurRecruitingProcess() {
  return (
    <main className="min-h-screen scroll-smooth" style={{ background: "#F7F9FC" }}>
      <HeroSection />
      <ProcessSummarySection />
      <ProcessSteps />
      <RecruitingProcessCTA />
    </main>
  );
}
