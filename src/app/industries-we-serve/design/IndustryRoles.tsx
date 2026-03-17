import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🎨", title: "UX/UI Designer", description: "Designing intuitive digital experiences and user interfaces for web and mobile platforms.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/design cards/1.jpg" },
  { icon: "🏗️", title: "Industrial Designer", description: "Developing concepts and designs for manufactured products and physical goods.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/design cards/2.jpg" },
  { icon: "🖋️", title: "Graphic Lead", description: "Overseeing visual identity and brand storytelling across print and digital media.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/design cards/3.jpg" },
  { icon: "🏠", title: "Interior Architect", description: "Creating functional and aesthetic indoor spaces for commercial and residential clients.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/design cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
