"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Staff Retention & Burnout", description: "Finding resilient educators and administrators capable of maintaining high standards in high-stress academic environments." },
  { icon: <ChallengeIcons.Skills />, title: "Strict Credential Compliance", description: "Ensuring all candidates meet state-mandated licensing, rigorous background checks, and specific educational certifications." },
  { icon: <ChallengeIcons.Safety />, title: "Instructional Innovation", description: "Identifying talent capable of integrating modern digital learning tools and diverse teaching methodologies into the classroom." },
];

export default function IndustryChallenges({
  industryName = "Education",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
