import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🚛", title: "Logistics Coordinator", description: "Managing the complex scheduling and routing of goods across networks.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/transportation cards/1.jpg" },
  { icon: "📦", title: "Warehouse Manager", description: "Directing all on-site facility operations, safety, and inventory control.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/transportation cards/2.jpg" },
  { icon: "📊", title: "Inventory Controller", description: "Monitoring stock levels and forecasting needs to minimize waste and delays.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/transportation cards/3.jpg" },
  { icon: "🚢", title: "Supply Chain Lead", description: "Optimizing the end-to-end flow of raw materials to finished products.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/transportation cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
