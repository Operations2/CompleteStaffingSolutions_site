export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  content: string[];
  date: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "How Travel Nurses and Contract Staff Help Small Hospitals Stay Open",
    slug: "travel-nurses-and-contract-staff-for-small-hospitals",
    description:
      "How travel nurses and contract healthcare professionals help small hospitals maintain care, control labor costs, and fill urgent staffing gaps.",
    date: "2026-04-02",
    category: "Healthcare",
    content: [
      // 👈 paste SAME content array you already created
    ],
  },
  {
  title: "How to Hire a Travel Nurse in Connecticut (2026 Guide)",
  slug: "hire-travel-nurse-connecticut",
  description:
    "Everything employers need to know about sourcing, screening, and hiring travel nurses in Connecticut.",
  date: "2026-03-28",
  category: "Healthcare",
  content: [
    // paste existing content array
  ],
},
  // 👇 move ALL your other posts here exactly as-is
];