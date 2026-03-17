import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Software & IT Services Staffing"
      description="Sourcing technical expertise in cloud, software engineering, and data analysis to solve complex business problems."
      features={[
        "Problem-solving Skills",
        "Technical Expertise",
        "Collaborative Development",
      ]}
      imageSrc="/industries/cards/safety.webp"
      imageAlt="IT workers"
    />
  );
}
