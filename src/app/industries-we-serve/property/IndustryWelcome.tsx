import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Property Management Staffing"
      description="Robust staffing plans tailored to property size and location to ensure profitability and compliance."
      features={[
        "Tenant Satisfaction focus",
        "Strategic Staffing Plans",
        "Regulatory Compliance",
      ]}
      imageSrc="/industries/cards/real estate.webp"
      imageAlt="Property management workers"
    />
  );
}
