"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Policy Implementation", description: "Finding administrative talent capable of navigating complex bureaucracy to execute policies." },
  { icon: <ChallengeIcons.Skills />, title: "Public Trust", description: "Recruiting accountable professionals who prioritize transparency and community service." },
  { icon: <ChallengeIcons.Safety />, title: "Budget Restrictions", description: "Sourcing high-quality staff within the constraints of public sector financial frameworks." },
];

export default function IndustryChallenges({
  industryName = "Public Administration",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
