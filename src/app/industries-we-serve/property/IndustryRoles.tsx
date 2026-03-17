import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏢", title: "Property Manager", description: "Directing the daily operations and maintenance of residential or commercial sites.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/property cards/1.jpg" },
  { icon: "🏠", title: "Real Estate Broker", description: "Facilitating property transactions and building high-value client relationships.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/property cards/2.jpg" },
  { icon: "🔑", title: "Leasing Consultant", description: "Managing property showings and coordinating new lease agreements with tenants.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/property cards/3.jpg" },
  { icon: "🛠️", title: "Maintenance Lead", description: "Overseeing repairs and facility upgrades to ensure property value and safety.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/property cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
