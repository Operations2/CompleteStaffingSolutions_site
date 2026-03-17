import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Non-profit Staffing"
      description="Supporting social services, education, and conservation groups with talent focused on transparency and impact."
      features={[
        "Mission Alignment",
        "Community Engagement",
        "Transparent Operations",
      ]}
      imageSrc="/industries/cards/non profit.webp"
      imageAlt="Non-profit workers"
    />
  );
}
