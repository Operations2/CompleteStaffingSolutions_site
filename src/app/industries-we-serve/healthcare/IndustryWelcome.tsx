import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Healthcare Staffing"
      description="Connecting hospitals and clinics with nurses, allied health, and administrators dedicated to well-being."
      features={[
        "Compassionate patient care",
        "Regulatory compliance",
        "Allied health expertise",
      ]}
      imageSrc="/industries/cards/healthcare.webp"
      imageAlt="Healthcare professionals at work"
    />
  );
}