"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "System Scalability", description: "Recruiting engineers who can build and maintain infrastructures that grow with the business." },
  { icon: <ChallengeIcons.Skills />, title: "24/7 Uptime Demands", description: "Finding reliable on-call technicians who can manage mission-critical network issues instantly." },
  { icon: <ChallengeIcons.Safety />, title: "Cybersecurity Risks", description: "Sourcing hardware and network experts who prioritize data security and threat prevention." },
];

export default function IndustryChallenges({
  industryName = "Hardware & Networking",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
