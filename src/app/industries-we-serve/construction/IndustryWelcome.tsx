import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Construction Staffing"
      description="We provide tailored recruitment for timely completion and quality execution, from construction managers to specialized tradespeople."
      features={[
        "Skilled trades & management",
        "Safety-first approach",
        "Scalable labor solutions",
      ]}
      imageSrc="/industries/cards/construction.jpg"
      imageAlt="Construction professionals"
    />
  );
}
