"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Collaborative Harmony", description: "Recruiting individuals who can work seamlessly across different creative and technical departments." },
  { icon: <ChallengeIcons.Skills />, title: "Technical Innovation", description: "Finding talent expert in modern production tech, from VR/AR to advanced digital editing." },
  { icon: <ChallengeIcons.Safety />, title: "Tight Production Deadlines", description: "Managing rapid staff scaling to meet strict project release or live event dates." },
];

export default function IndustryChallenges({
  industryName = "Entertainment",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
