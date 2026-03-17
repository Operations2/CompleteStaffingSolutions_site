import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Recreation & Travel Staffing"
      description="Staffing for hotels, resorts, and tour operators with talent focused on guest satisfaction and safety."
      features={[
        "Customer Service Excellence",
        "Safety & Sensitivity",
        "Passion for Travel",
      ]}
      imageSrc="/industries/cards/travel.webp"
      imageAlt="Travel workers"
    />
  );
}
