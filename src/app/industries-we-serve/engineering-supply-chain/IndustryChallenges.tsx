"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  {
    icon: <ChallengeIcons.Demands />,
    title: "Specialized Talent Shortage",
    description:
      "Filling engineering operations and supply chain roles quickly to keep projects and production moving.",
  },
  {
    icon: <ChallengeIcons.Skills />,
    title: "Sourcing & Compliance Expertise",
    description:
      "Recruiting professionals who understand procurement standards, QA/QC expectations, and industry requirements.",
  },
  {
    icon: <ChallengeIcons.Safety />,
    title: "Disruption-Ready Staffing",
    description:
      "Building teams that can adapt when lead times change, bottlenecks appear, or continuity plans require action.",
  },
];

export default function IndustryChallenges({
  industryName = "Engineering / Supply Chain",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}

