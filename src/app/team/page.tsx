import CompleteStaffingsAnnualBBQJuly2023 from "./CompleteStaffingsAnnualBBQJuly2023";
import CompanyEvents from "./CompanyEvents";
import BBQJuly2021 from "./BBQJuly2021";

export const metadata = {
  title: "Team | Complete Staffing Solutions",
  description:
    "Meet the Complete Staffing Solutions team and see our culture in action.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <CompleteStaffingsAnnualBBQJuly2023 />
      <CompanyEvents />
      <BBQJuly2021 />
    </main>
  );
}
