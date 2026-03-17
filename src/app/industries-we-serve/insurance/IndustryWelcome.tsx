import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Insurance Staffing"
      description="Navigating the evolving insurance landscape requires a blend of technical expertise and customer empathy. We provide experienced underwriters, claims specialists, and risk consultants to strengthen your firm."
      features={[
        "Risk management specialists",
        "Experienced claims adjusters",
        "Licensed insurance professionals",
      ]}
      imageSrc="/industries/cards/insurance.webp"
      imageAlt="Insurance workers"
    />
  );
}
