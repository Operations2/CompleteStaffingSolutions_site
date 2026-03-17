import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Legal Staffing"
      description="Providing law firms and legal departments with paralegals, attorneys, and administrators who excel in ethics."
      features={[
        "Legal Expertise",
        "Ethical Standards",
        "Professionalism",
      ]}
      imageSrc="/industries/cards/legal.webp"
      imageAlt="Legal workers"
    />
  );
}
