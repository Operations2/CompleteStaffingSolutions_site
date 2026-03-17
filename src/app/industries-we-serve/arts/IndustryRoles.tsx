import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏛️", title: "Museum Curator", description: "Oversight of collections, exhibitions, and educational programming for cultural institutions.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/arts cards/1.jpg" },
  { icon: "🎨", title: "Fine Arts Administrator", description: "Managing the daily operations, budgeting, and marketing for galleries and art organizations.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/arts cards/2.jpg" },
  { icon: "🎭", title: "Performing Arts Coordinator", description: "Planning and logistics for theatrical productions, concerts, and live performances.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/arts cards/3.jpg" },
  { icon: "🎬", title: "Creative Director", description: "Leading the creative vision and design strategy for large scale artistic initiatives.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/arts cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
