import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";

export const metadata = {
  title: "Healthcare Staffing Solutions",
  description:
    "Healthcare staffing agency serving CT, RI, MA, and FL. We place nurses, allied health, and clinical staff quickly with local recruiting expertise.",

  alternates: {
    canonical:
      "https://www.completestaffingsolutions.com/industries-we-serve/healthcare",
  },

  openGraph: {
    type: "website",
    url: "https://www.completestaffingsolutions.com/industries-we-serve/healthcare",
    title: "Healthcare Staffing Solutions",
    description:
      "Healthcare staffing services for hospitals, clinics, and medical facilities hiring nurses, allied health, and clinical support staff.",
    images: [
      {
        url: "https://www.completestaffingsolutions.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Healthcare Staffing Solutions",
    description:
      "Healthcare staffing services for hospitals, clinics, and medical facilities hiring nurses, allied health, and clinical support staff.",
    images: ["https://www.completestaffingsolutions.com/og-image.jpg"],
  },
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustryDetailPageHero />
      <IndustryWelcome />
      <IndustryChallenges industryName="Healthcare" />
      <IndustryRoles />
      <JobRequestSection />
    </main>
  );
}
