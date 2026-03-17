"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Regulatory Changes", description: "Staying compliant with ever-changing financial laws and international accounting standards." },
  { icon: <ChallengeIcons.Skills />, title: "Data Security", description: "The need for professionals who can handle sensitive data with high integrity and technical security." },
  { icon: <ChallengeIcons.Safety />, title: "Risk Management", description: "Recruiting experts who can accurately forecast and mitigate financial risks for the organization." },
];

export default function IndustryChallenges({
  industryName = "Finance",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
