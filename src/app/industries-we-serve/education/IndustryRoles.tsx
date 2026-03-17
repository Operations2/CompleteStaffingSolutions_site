import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏫", title: "Academic Administrator", description: "Directing the strategic goals, budgeting, and daily operations of K-12 schools or higher education institutions.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/education cards/1.jpg" },
  { icon: "🎓", title: "Instructional Designer", description: "Developing innovative curriculum frameworks and learning materials for digital and physical learning environments.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/education cards/2.jpg" },
  { icon: "🤝", title: "School Counselor", description: "Providing social, emotional, and academic guidance to support student well-being and long-term career development.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/education cards/3.jpg" },
  { icon: "📝", title: "Curriculum Lead", description: "Overseeing educational standards and syllabus planning to ensure compliance with state and federal academic guidelines.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/education cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
