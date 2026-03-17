import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Agriculture Staffing"
      description="We specialize in providing dedicated staffing services to address the unique labor requirements of organic farms, nurseries, and agribusinesses. Our focus is on sourcing talent that ensures the success of your operations."
      features={[
        "Experienced agricultural workers",
        "Flexible and scalable staffing solutions",
        "Commitment to safety and efficiency",
      ]}
      imageSrc="/industries/cards/agriculture.webp"
      imageAlt="Agriculture workers"
    />
  );
}
