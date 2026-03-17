import ContactHero from "@/components/ContactUs/Contacthero";
import OfficeLocations from "@/components/ContactUs/Officelocations";

export const metadata = {
  title: "Contact Us | Complete Staffing Solutions",
  description:
    "Contact Complete Staffing Solutions. Reach our recruiting and client service teams by email, phone, or visit one of our offices.",
};

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-sky-50/80">
      <ContactHero />
      <OfficeLocations />
    </main>
  );
}
