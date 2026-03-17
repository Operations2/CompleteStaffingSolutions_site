import HeroSection from "./HeroSection";
import BlueSection from "./BlueSection";
import FlexibleSection from "./FlexibleSection";
import JobRequestSection from "../JobRequestSection";

export default function WhyChooseUs() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BlueSection />
      <FlexibleSection />
      <JobRequestSection />
    </main>
  );
}