import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Design Staffing"
      description="Connecting innovation with creativity to drive dynamic design solutions."
      features={[
        "Technical & Creative Mastery",
        "Collaborative Mindsets",
        "Portfolio-verified talent",
      ]}
      imageSrc="/industries/cards/design.jpg"
      imageAlt="Design workers"
    />
  );
}
