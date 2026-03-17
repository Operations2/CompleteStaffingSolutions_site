import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Manufacturing Staffing"
      description="Supporting automotive, aerospace, and equipement sectors with quality-focused engineering and production staff."
      features={[
        "Quality & Efficiency",
        "Operational Safety",
        "Skilled Industrial Labor",
      ]}
      imageSrc="/industries/cards/transportation.webp"
      imageAlt="Manufacturing workers"
    />
  );
}
