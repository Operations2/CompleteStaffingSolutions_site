import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Education Staffing"
      description="Tailored recruitment for K-12, higher ed, and nonprofits, focusing on instructional excellence and leadership."
      features={[
        "Diversity & Inclusion",
        "Passionate Educators",
        "Administrative Expertise",
      ]}
      imageSrc="/industries/cards/education.jpg"
      imageAlt="Education workers"
    />
  );
}
