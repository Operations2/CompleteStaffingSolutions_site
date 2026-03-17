"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Inventory Accuracy", description: "Combating loss and inefficiency by recruiting data-driven warehouse and logistics leads." },
  { icon: <ChallengeIcons.Skills />, title: "Global Logistics", description: "Sourcing managers who understand international shipping regulations and customs." },
  { icon: <ChallengeIcons.Safety />, title: "Shipping Delays", description: "Finding agile coordinators who can solve route problems and maintain delivery speeds." },
];

export default function IndustryChallenges({
  industryName = "Transportation & Logistics",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
