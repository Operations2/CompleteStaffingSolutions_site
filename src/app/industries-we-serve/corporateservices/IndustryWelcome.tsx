import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Corporate Services Staffing"
      description="Providing HR, Finance, and leadership talent that aligns with your organizational culture and business goals."
      features={[
        "Professionalism & Integrity",
        "Comprehensive Support",
        "Organizational Fit",
      ]}
      imageSrc="/industries/cards/corporate services.webp"
      imageAlt="Corporate services workers"
    />
  );
}
