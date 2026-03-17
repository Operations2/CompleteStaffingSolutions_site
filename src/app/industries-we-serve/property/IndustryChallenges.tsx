"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Market Volatility", description: "Adapting recruitment to handle sudden shifts in commercial and residential property demands." },
  { icon: <ChallengeIcons.Skills />, title: "Tenant Retention", description: "Finding property managers with the empathy and negotiation skills to keep occupancy rates high." },
  { icon: <ChallengeIcons.Safety />, title: "Legal & Compliance", description: "Ensuring all staff are well-versed in tenant laws, fair housing, and safety regulations." },
];

export default function IndustryChallenges({
  industryName = "Property Management",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
