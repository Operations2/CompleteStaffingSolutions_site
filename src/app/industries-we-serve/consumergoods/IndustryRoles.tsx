import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏷️", title: "Brand Manager", description: "Developing and executing strategies to build brand equity and market share.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/consumer goods cards/1.jpg" },
  { icon: "📦", title: "Supply Chain Analyst", description: "Optimizing the flow of goods from production to the end consumer.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/consumer goods cards/2.jpg" },
  { icon: "🛍️", title: "Retail Merchandiser", description: "Ensuring products are displayed effectively to maximize sales performance.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/consumer goods cards/3.jpg" },
  { icon: "🧪", title: "Product Developer", description: "Leading the creation of new consumer products from concept to launch.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/consumer goods cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
