import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  {
    icon: "🩺",
    title: "Registered Nurse",
    description:
      "Providing direct patient care and collaborating with doctors to execute treatment plans.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/healthcare cards/1.jpg",
  },
  {
    icon: "🏥",
    title: "Medical Assistant",
    description:
      "Assisting with clinical tasks, patient intake, and vital sign monitoring.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/healthcare cards/2.jpg",
  },
  {
    icon: "👩‍⚕️",
    title: "Nurse Practitioner",
    description:
      "Advanced clinical practice including diagnosis, treatment, and patient management.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/healthcare cards/3.jpg",
  },
  {
    icon: "🧪",
    title: "Medical Researcher",
    description:
      "Leading clinical trials and laboratory studies to advance medical science.",
    buttonText: "Learn More",
    buttonColor: "blue",
    image: "/industries detail pages/cards/healthcare cards/4.jpg",
  },
  {
    icon: "🧑‍⚕️",
    title: "CNA",
    description:
      "Supporting nurses with daily patient care, mobility, and comfort needs.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/healthcare cards/1.jpg",
  },
  {
    icon: "🩻",
    title: "X-Ray Technician",
    description:
      "Operating imaging equipment and working with physicians to capture diagnostic images.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/healthcare cards/2.jpg",
  },
  {
    icon: "💉",
    title: "Vaccine Prepper",
    description:
      "Preparing vaccines, managing supplies, and supporting immunization clinics.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/healthcare cards/3.jpg",
  },
  {
    icon: "🩺",
    title: "Ultrasound Technician",
    description:
      "Performing diagnostic ultrasounds and collaborating with providers on imaging needs.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/healthcare cards/4.jpg",
  },
  {
    icon: "🧠",
    title: "Therapist",
    description:
      "Delivering mental health and counseling services across inpatient and outpatient settings.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/healthcare cards/1.jpg",
  },
  {
    icon: "💊",
    title: "Pharmacist",
    description:
      "Managing medication therapy, patient counseling, and pharmacy operations.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/healthcare cards/2.jpg",
  },
  {
    icon: "🤝",
    title: "Social Worker",
    description:
      "Coordinating resources, discharge planning, and social support for patients and families.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/healthcare cards/3.jpg",
  },
  {
    icon: "🏥",
    title: "LPN",
    description:
      "Providing bedside care, monitoring, and clinical support under RN and provider supervision.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/healthcare cards/4.jpg",
  },
  {
    icon: "🗂️",
    title: "Office Staff",
    description:
      "Coordinating scheduling, front desk operations, and administrative support for practices.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/healthcare cards/1.jpg",
  },
  {
    icon: "⚙️",
    title: "Operations",
    description:
      "Overseeing clinic and hospital workflows, staffing coordination, and day-to-day efficiency.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/healthcare cards/2.jpg",
  },
  {
    icon: "📋",
    title: "Practice Manager",
    description:
      "Leading the business operations of medical practices, from staffing to revenue cycles.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/healthcare cards/3.jpg",
  },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}