"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Claims Processing Speed", description: "Scaling a workforce quickly to handle surges in claims during natural disasters or peak periods." },
  { icon: <ChallengeIcons.Skills />, title: "Actuarial Talent Gap", description: "Sourcing highly specialized analysts who can accurately predict and price complex risk factors." },
  { icon: <ChallengeIcons.Safety />, title: "Digital Transformation", description: "Finding talent that can merge traditional insurance knowledge with modern InsurTech platforms and AI tools." },
];

export default function IndustryChallenges({
  industryName = "Insurance",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
