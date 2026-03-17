"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Omni-channel Shifts", description: "Recruiting staff who can provide a seamless experience across both physical and online stores." },
  { icon: <ChallengeIcons.Skills />, title: "Seasonal Hiring", description: "Efficiently managing large-scale temporary staffing for holiday peaks and sale events." },
  { icon: <ChallengeIcons.Safety />, title: "Customer Retention", description: "Finding front-line staff with the charisma and knowledge to build long-term loyalty." },
];

export default function IndustryChallenges({
  industryName = "Retail",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
