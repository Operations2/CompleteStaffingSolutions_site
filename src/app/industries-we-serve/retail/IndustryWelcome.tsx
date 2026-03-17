import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Retail Staffing"
      description="Supporting fashion, tech, and specialty stores with managers and merchandisers who drive customer loyalty."
      features={[
        "Product Knowledge",
        "Adaptability",
        "Sales Growth",
      ]}
      imageSrc="/industries/cards/corporate services.webp"
      imageAlt="Retail workers"
    />
  );
}
