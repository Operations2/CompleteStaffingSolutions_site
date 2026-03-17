import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Consumer Goods Staffing"
      description="Identifying top talent for product development, marketing, and distribution to keep you ahead of consumer trends."
      features={[
        "Agility and Innovation",
        "Customer-centric professionals",
        "Supply chain expertise",
      ]}
      imageSrc="/industries/cards/consumer goods.jpg"
      imageAlt="Consumer goods workers"
    />
  );
}
