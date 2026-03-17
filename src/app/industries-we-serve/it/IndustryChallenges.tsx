"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Rapid Tech Evolution", description: "Keeping pace with new programming languages, frameworks, and security threats." },
  { icon: <ChallengeIcons.Skills />, title: "Global Talent War", description: "Competitive landscape makes it difficult to retain high-level developers and architects." },
  { icon: <ChallengeIcons.Safety />, title: "Cybersecurity Risks", description: "Recruiting specialists who can safeguard infrastructure against sophisticated cyber-attacks." },
];

export default function IndustryChallenges({
  industryName = "Software & IT Services",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
