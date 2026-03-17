import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Transportation & Logistics Staffing"
      description="Supporting shipping and warehousing firms with coordinators and managers dedicated to reliability."
      features={[
        "Efficiency & Reliability",
        "Supply Chain Optimization",
        "Skilled Logistics",
      ]}
      imageSrc="/industries/cards/transportation.webp"
      imageAlt="Transportation workers"
    />
  );
}
