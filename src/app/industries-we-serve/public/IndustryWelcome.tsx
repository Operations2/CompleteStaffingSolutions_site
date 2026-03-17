import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Public Administration Staffing"
      description="Connecting government agencies and public utilities with accountable and responsive administrative talent."
      features={[
        "Accountability Strategic",
        "Public Service Mission",
        "Leadership",
      ]}
      imageSrc="/industries/office finance.jpg"
      imageAlt="Public administration workers"
    />
  );
}
