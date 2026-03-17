import AboutJobRequestSection from "./AboutJobRequestSection";
import MissionServicesSection from "./MissionServicesSection";
import SpecializeSection from "./SpecializeSection";

export const metadata = {
  title: "About Us | Complete Staffing Solutions",
  description:
    "Learn about Complete Staffing Solutions - connecting businesses with the best talent.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero bar - matches site primary blue and typography */}
      <div
        className="w-full flex items-center justify-center h-24 min-h-[200px] xs:min-h-[300px] sm:min-h-[400px] px-4 sm:px-6 md:px-8 lg:px-12 relative z-10"
        style={{
          background: "url('/about us/about-us.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#19478e]/60 via-[#19478e]/50 to-[#19478e]/30" />
        <h1 className="m-0 font-[var(--font-plus-jakarta)] font-bold text-[clamp(26px,5vw,46px)] text-white relative z-11">
          About <span className="text-[var(--accent)]">Us</span>
        </h1>
      </div>

      {/* Main content container - consistent padding and width with rest of site */}
      <section className="w-full bg-white">
        <MissionServicesSection />
        <SpecializeSection />
        <AboutJobRequestSection />
      </section>
    </main>
  );
}
