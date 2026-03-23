import { Hero, HeroTagline } from "@/components/Hero";
import IndustriesGridSection from "@/components/IndustriesGridSection/WhyChooseUs";
import LandingVideoSection from "@/components/LandingVideoSection/LandingVideoSection";
import JobRequestSection from "@/components/JobRequestSection";
import HomePage from "./home/page";

const VIDEO_SYNOPSIS =
  "Complete Staffing Solutions is a full-service staffing and recruitment organization providing industry-focused hiring solutions across financial services, healthcare, and corporate sectors. Our specialized recruiters support businesses with executive search, retained search, contract staffing, and direct-hire placements to connect companies with highly qualified professionals.";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomePage />
    </main>
  );
}
