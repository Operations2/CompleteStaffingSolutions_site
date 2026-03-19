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
      {/* <Hero />
      <IndustriesGridSection />
      <section className="w-full bg-[#c8eaff] border-y border-neutral-100">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 text-center">
          <p className="font-[var(--font-inter)] italic text-[#343134] text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold leading-relaxed">
            "{VIDEO_SYNOPSIS}"
          </p>
        </div>
      </section>
      <LandingVideoSection />
      <JobRequestSection /> */}
      <HomePage />
    </main>
  );
}
