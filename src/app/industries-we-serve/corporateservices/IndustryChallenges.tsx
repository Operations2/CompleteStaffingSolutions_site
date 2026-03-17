"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Diverse Learning Needs", description: "Recruiting educators who are trained in modern, inclusive teaching methodologies." },
  { icon: <ChallengeIcons.Skills />, title: "Staff Retention", description: "Combating high turnover in the education sector by finding truly passionate and resilient talent." },
  { icon: <ChallengeIcons.Safety />, title: "Regulatory Compliance", description: "Ensuring all staff meet strict background checks and state-mandated educational certifications." },
];

export default function IndustryChallenges({
  industryName = "Corporate Services",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
