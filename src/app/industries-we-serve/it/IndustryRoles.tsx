import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "💻", title: "Software Engineer", description: "Developing, testing, and maintaining high-performance software applications.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/it cards/1.jpg" },
  { icon: "🌐", title: "Cloud Architect", description: "Designing and managing scalable cloud infrastructure for modern business operations.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/it cards/2.jpg" },
  { icon: "🔒", title: "Cybersecurity Expert", description: "Protecting systems from threats through advanced security monitoring and planning.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/it cards/3.jpg" },
  { icon: "📊", title: "Data Scientist", description: "Extracting insights from large datasets to drive strategic technical and business growth.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/it cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
