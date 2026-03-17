import IndustryWelcomeShared from "../_components/IndustryWelcome";

export default function IndustryWelcome() {
  return (
    <IndustryWelcomeShared
      title="Welcome to Hardware & Networking Staffing"
      description="Specialized recruitment for IT services, telecomm, and networking infrastructure to ensure scalability and security."
      features={[
        "Technical Innovation",
        "System Scalability",
        "Cybersecurity Focus",
      ]}
      imageSrc="/industries/cards/hardware.webp"
      imageAlt="Hardware and networking workers"
    />
  );
}
