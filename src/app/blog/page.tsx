import Link from "next/link";

export const metadata = {
  title:
    "Staffing Blog | Hiring Insights & Salary Guides | Complete Staffing Solutions",
  description:
    "Hiring insights, salary guides, and recruiting strategies across healthcare, finance, and engineering markets nationwide.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = [
    {
      title: "How to Hire a Travel Nurse in Connecticut (2026 Guide)",
      slug: "hire-travel-nurse-connecticut",
      excerpt:
        "Everything employers need to know about sourcing, screening, and hiring travel nurses in Connecticut.",
    },
    {
      title:
        "Controller Salary Boston 2026: What Employers Should Expect",
      slug: "controller-salary-boston-2026",
      excerpt:
        "Current salary ranges for Controllers in Boston, what's driving compensation pressure, and how to attract strong candidates before they take another offer.",
    },
    {
      title:
        "Staffing Agency Hartford CT: How to Choose the Right Recruiting Partner",
      slug: "staffing-agency-hartford-ct",
      excerpt:
        "Not all Hartford staffing agencies work the same way. Here's what employers in the Hartford market should actually be evaluating before they sign with a firm.",
    },
    {
      title:
        "Direct Hire vs. Temp-to-Hire: What's the Difference and Which Is Right for Your Company",
      slug: "direct-hire-vs-temp-to-hire",
      excerpt:
        "The difference between direct hire and temp-to-hire isn't just cost — it's about risk, speed, and what you actually know about a candidate before they're on your payroll.",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Staffing Insights & Hiring Guides
      </h1>

      <p className="mb-10 text-lg text-gray-600">
        Expert insights on hiring, salaries, and recruiting trends across healthcare, finance, and engineering.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-6">
            <h2 className="text-2xl font-semibold">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}