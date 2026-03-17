import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏬", title: "Store Manager", description: "Directing all on-site operations, staff management, and sales targets for retail outlets.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries/retail/manager.jpg" },
  { icon: "🌐", title: "E-commerce Director", description: "Leading the digital storefront strategy to drive online sales and user experience.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/retail/ecommerce.jpg" },
  { icon: "📦", title: "Merchandising Lead", description: "Optimizing product placement and inventory levels to maximize profitability.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/retail/merch.jpg" },
  { icon: "🎧", title: "Customer Success Rep", description: "Providing exceptional support to ensure a positive and consistent shopping experience.", buttonText: "Learn More", buttonColor: "blue", image: "/industries/retail/success.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
