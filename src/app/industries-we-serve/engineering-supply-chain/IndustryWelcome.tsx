import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Engineering / Supply Chain Staffing"
      description="We connect engineering and supply chain leaders with experienced professionals for sourcing, logistics, and continuity planning."
      features={[
        "Engineering Operations",
        "Strategic Sourcing",
        "Logistics & Warehousing",
        "Supply Continuity",
      ]}
      imageSrc="/industries/cards/construction.webp"
      imageAlt="Engineering and supply chain professionals"
    />
  );
}

