import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Wellness & Fitness Staffing"
      description="Staffing for fitness centers, spas, and retreats with professionals who prioritize motivation and accountability."
      features={[
        "Certified Expertise",
        "Empathy & Motivation",
        "Client Accountability",
      ]}
      imageSrc="/industries/healthcare.jpg"
      imageAlt="Wellness workers"
    />
  );
}
