import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Finance Staffing"
      description="Sourcing experts for banking, investment, and insurance who prioritize trust, reliability, and compliance."
      features={[
        "Integrity & Ethics",
        "Risk Management",
        "Financial Accuracy",
      ]}
      imageSrc="/industries/cards/office finance.webp"
      imageAlt="Finance workers"
    />
  );
}
