import EmploymentpositionHero from "@/components/employment-positionForm/EmploymentpositionHero";
import EmploymentForm from "@/components/employment-positionForm/EmploymentForm";

export const metadata = {
  title: "Employment Application | Complete Staffing Solutions",
  description:
    "Submit your employment application with Complete Staffing Solutions. Find your next career opportunity with our professional staffing services.",
  alternates: {
    canonical: "/employment-form",
  },
  };

export default function EmploymentFormPage() {
  return (
    <main className="min-h-screen bg-white">
      <EmploymentpositionHero />
      <EmploymentForm />
    </main>
  );
}