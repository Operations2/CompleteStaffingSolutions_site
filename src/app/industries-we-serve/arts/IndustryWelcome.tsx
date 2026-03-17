import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Arts Staffing"
      description="Supporting the arts with specialized solutions for museums, galleries, and performing arts centers."
      features={[
        "Creative & Passionate talent",
        "Creative & Passionate talent",
        "Niche administrative support.",
      ]}
      imageSrc="/industries/cards/arts.webp"
      imageAlt="Arts workers"
    />
  );
}
