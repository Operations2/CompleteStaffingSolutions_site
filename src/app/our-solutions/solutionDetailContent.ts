export type SolutionId = "retained" | "executive" | "contract" | "direct";

export interface SolutionDetailSection {
  title: string;
  body: string;
}

export interface SolutionDetailContent {
  title: string;
  subtitle: string;
  image: string;
  ourFocus: string;
  sections: SolutionDetailSection[];
  ourEdge: string;
}

export const SOLUTION_DETAIL_CONTENT: Record<SolutionId, SolutionDetailContent> = {
  retained: {
    title: "Retained Search",
    subtitle: "Dedicated, strategic recruitment for critical leadership roles",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    ourFocus:
      "Our retained search model is designed for critical leadership and highly specialized roles that require a dedicated, strategic recruitment approach. Through a retained partnership, we commit focused resources to delivering exceptional candidates for pivotal positions.",
    sections: [
      {
        title: "Strategic Partnership",
        body: "Working closely with client leadership, we develop a comprehensive search strategy that includes market mapping, targeted outreach, and structured candidate evaluation. This collaborative approach ensures alignment with both immediate hiring goals and broader organizational objectives.",
      },
      {
        title: "Confidential Search Process",
        body: "Retained engagements allow for a discreet and methodical search process, particularly valuable when hiring for senior leadership roles or replacing key personnel.",
      },
    ],
    ourEdge:
      "By dedicating a specialized team and leveraging deep industry networks, we provide a highly focused search experience that consistently delivers exceptional talent for mission-critical roles.",
  },
  executive: {
    title: "Executive Search",
    subtitle: "C-suite and senior leadership placement with global reach",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    ourFocus: "Our Premium Retained Search model is designed for organizations that refuse to compromise — C-suite, VP, Director and Board-level leaders whose impact will define the trajectory of your business. When the cost of a wrong hire is significant, the process needs to match the stakes.",
    sections: [
      {
        title: "Strategic Partnership",
        body: "We don't fill vacancies; we solve leadership problems. From day one, a fully dedicated CSS search team works shoulder-to-shoulder with your leadership to build a comprehensive strategy: rigorous market mapping, passive candidate outreach, and a structured evaluation process using Topgrading interviews and McQuaig psychometric assessments. Every search is calibrated to your immediate goals and your broader organizational direction and validated through regular calibration check-ins to ensure complete alignment throughout.",
      },
      {
        title: "Confidential Search Process",
        body: "Some of the most important hires are the ones that can't be made publicly. Whether you're filling a senior leadership role, navigating a sensitive succession, or replacing a key person without disruption, our retained model is built for discretion. We manage the entire process including finalist candidate profiles and presentations and full due diligence with the professionalism those situations demand.",
      },
    ],
    ourEdge: "Retained search with CSS means a dedicated specialist team, deep industry networks across North America, EMEA, and APAC, and an unwavering commitment to the outcome. We bring Topgrading methodology and McQuaig psychometrics to every search — tools that consistently deliver A-Players over 90% of the time and cut mis-hire rates by more than half. We don't walk away at the offer; we support onboarding through the first 90 days, backed by our 12-Month Placement Guarantee. When the hire is critical, the process should be too.",
  },
  contract: {
    title: "Contract Search",
    subtitle: "Flexible talent for project-based work and interim leadership",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    ourFocus:
      "We help organizations quickly access highly skilled professionals who can step in, contribute immediately, and support critical business initiatives. Our contract search services provide flexible talent solutions for project-based work, interim leadership, and specialized skill requirements.",
    sections: [
      {
        title: "Rapid Talent Deployment",
        body: "Our recruiting team maintains an active network of experienced professionals who are available to engage on short-term and long-term contract assignments. This allows us to move quickly when our clients need skilled talent to address immediate operational demands.",
      },
      {
        title: "Specialized Expertise",
        body: "Whether supporting seasonal workload fluctuations, transformation initiatives, or temporary coverage for key roles, our contract professionals bring targeted expertise and the ability to deliver results in dynamic environments.",
      },
    ],
    ourEdge:
      "We combine speed, precision, and relationship-driven recruiting to ensure our clients receive dependable professionals who integrate quickly, add immediate value, and help keep business operations moving forward.",
  },
  direct: {
    title: "Direct-Hire Search",
    subtitle: "Full-time professionals who fit your culture and goals",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
    ourFocus:
      "Our direct-hire search services help organizations secure full-time professionals who bring both technical expertise and cultural alignment. We work closely with clients to understand the strategic needs behind every hire, ensuring candidates are positioned to succeed from day one.",
    sections: [
      {
        title: "Candidate Evaluation",
        body: "Each candidate undergoes a comprehensive screening process that includes in-depth interviews, skills evaluation, and reference verification. This process ensures that every candidate presented meets the highest standards of capability and professionalism.",
      },
      {
        title: "Efficient Hiring Process",
        body: "We streamline the recruitment lifecycle by managing sourcing, screening, interview coordination, and offer facilitation—allowing hiring teams to focus on selecting the best talent rather than managing the search process.",
      },
    ],
    ourEdge:
      "Our consultative approach balances efficiency with thoroughness, delivering candidates who are not only qualified but well-suited to contribute to the long-term success of the organization.",
  },
};

export const SOLUTION_IDS: SolutionId[] = ["retained", "executive", "contract", "direct"];

export function isSolutionId(id: string): id is SolutionId {
  return SOLUTION_IDS.includes(id as SolutionId);
}
