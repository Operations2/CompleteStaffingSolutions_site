import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Financial Services Staffing"
      description="We connect top-tier financial institutions with experts in wealth management, private banking, and compliance. Our tailored recruitment approach ensures that you have the integrity and expertise needed to manage complex portfolios."
      features={[
        "Regulatory compliance experts",
        "Certified financial advisors",
        "Scalable staffing for investment firms",
      ]}
      imageSrc="/industries/cards/agriculture.webp"
      imageAlt="Financial services workers"
    />
  );
}
