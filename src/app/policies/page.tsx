import PoliciesHero from "@/components/Policies/Policieshero";
import PoliciesSidebar from "@/components/Policies/Policiessidebar";
import PoliciesContent from "@/components/Policies/Policiescontent";
export const metadata = {
  title: "Policies and Disclosures | Complete Staffing Solutions",
  description:
    "Read our privacy policies, terms of service, and important disclosures.",
};

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PoliciesHero />

      <section className="py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
            <div>
              <PoliciesSidebar />
            </div>
            <PoliciesContent />
          </div>
        </div>
      </section>
    </main>
  );
}
