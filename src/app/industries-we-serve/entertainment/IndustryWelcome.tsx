import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Entertainment Staffing"
      description="Supporting film, music, gaming, and theater with professionals who embody creativity and adaptability."
      features={[
        "Creative Vision Alignment",
        "Fast-paced Adaptability",
        "Talent Management",
      ]}
      imageSrc="/industries/cards/media.webp"
      imageAlt="Entertainment workers"
    />
  );
}
