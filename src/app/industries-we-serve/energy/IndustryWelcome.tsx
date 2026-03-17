import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Energy Staffing"
      description="Recruitment solutions for renewable energy, utilities, and oil & gas sectors focused on innovation and safety."
      features={[
        "Sustainability Focus",
        "Regulatory Compliance",
        "Engineering Expertise",
      ]}
      imageSrc="/industries/cards/energy.webp"
      imageAlt="Energy workers"
    />
  );
}
