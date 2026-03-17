import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Communications Staffing"
      description="Empowering traditional and digital media outlets with creative talent that understands audience engagement. We bridge the gap between technical production skills and visionary storytelling."
      features={[
        "Storytelling Excellence",
        "Digital media innovators",
        "Audience engagement specialists",
      ]}
      imageSrc="/industries/cards/media.webp"
      imageAlt="Media workers"
    />
  );
}
