import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Communications Staffing"
      description="Empowering traditional and digital media outlets with creative talent that understands audience engagement. We bridge the gap between technical production skills and visionary storytelling."
      features={[
        "Creative storytelling experts",
        "Digital media innovators",
        "Audience engagement specialists",
      ]}
      imageSrc="/industries/cards/arts.webp"
      imageAlt="Communications workers"
    />
  );
}
