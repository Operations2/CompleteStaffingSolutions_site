import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  {
    icon: <ChallengeIcons.Demands />,
    title: "Staff Burnout",
    description:
      "High turnover rates due to stressful environments requiring resilient and dedicated staff.",
  },
  {
    icon: <ChallengeIcons.Skills />,
    title: "Credential Verification",
    description:
      "Ensuring all medical professionals have valid, up-to-date licenses and specialized certifications.",
  },
  {
    icon: <ChallengeIcons.Safety />,
    title: "Patient Care Standards",
    description:
      "Recruiting talent that prioritizes patient safety and adheres to strict medical ethics.",
  },
];

export default function IndustryChallenges({
  industryName = "Healthcare",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared
      industryName={industryName}
      challenges={CHALLENGES}
    />
  );
}