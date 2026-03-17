import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏭", title: "Production Manager", description: "Managing factory floors to meet production targets while ensuring operational efficiency.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/manufacturing cards/1.jpg" },
  { icon: "⚙️", title: "Industrial Engineer", description: "Designing systems to optimize the manufacturing process and reduce waste.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/manufacturing cards/2.jpg" },
  { icon: "🛡️", title: "Quality Control Lead", description: "Testing and verifying that every manufactured product meets technical specifications.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/manufacturing cards/3.jpg" },
  { icon: "📦", title: "Assembly Supervisor", description: "Leading assembly line teams to ensure timely and accurate product completion.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/manufacturing cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
