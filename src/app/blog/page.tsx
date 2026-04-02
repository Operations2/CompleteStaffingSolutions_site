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
      title: "How Travel Nurses and Contract Staff Help Small Hospitals Stay Open",
      slug: "travel-nurses-and-contract-staff-for-small-hospitals",
      excerpt:
        "How travel nurses and contract healthcare professionals help small hospitals maintain care, control labor costs, and fill urgent staffing gaps.",
      date: "April 2, 2026",
      category: "Healthcare",
    },
    {
      title: "How to Hire a Travel Nurse in Connecticut (2026 Guide)",
      slug: "hire-travel-nurse-connecticut",
      excerpt:
        "Everything employers need to know about sourcing, screening, and hiring travel nurses in Connecticut.",
      date: "March 28, 2026",
      category: "Healthcare",
    },
    {
      title: "Controller Salary Boston 2026: What Employers Should Expect",
      slug: "controller-salary-boston-2026",
      excerpt:
        "Current salary ranges for Controllers in Boston and how to attract strong candidates.",
      date: "March 25, 2026",
      category: "Finance",
    },
    {
      title: "Staffing Agency Hartford CT: How to Choose the Right Recruiting Partner",
      slug: "staffing-agency-hartford-ct",
      excerpt:
        "What Hartford employers should actually evaluate before choosing a staffing agency.",
      date: "March 20, 2026",
      category: "Hiring Strategy",
    },
    {
      title: "Direct Hire vs. Temp-to-Hire: What's the Difference and Which Is Right for Your Company",
      slug: "direct-hire-vs-temp-to-hire",
      excerpt:
        "The real difference between direct hire and temp-to-hire — risk, speed, and decision-making.",
      date: "March 15, 2026",
      category: "Hiring Strategy",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F3] px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        Staffing Insights & Hiring Guides
      </h1>

      <p className="mb-12 text-lg text-gray-600 max-w-2xl">
        Practical hiring insight, salary data, and recruiting strategy across healthcare, finance, and engineering.
      </p>

      {/* Featured Post */}
      <div className="mb-14 p-8 bg-white rounded-2xl shadow-sm border">
        <p className="text-sm text-gray-500 mb-2">
          {posts[0].category} • {posts[0].date}
        </p>

        <h2 className="text-3xl font-bold mb-3">
          <Link href={`/blog/${posts[0].slug}`} className="hover:underline">
            {posts[0].title}
          </Link>
        </h2>

        <p className="text-gray-600 text-lg">{posts[0].excerpt}</p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {posts.slice(1).map((post) => (
          <div
            key={post.slug}
            className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500 mb-2">
              {post.category} • {post.date}
            </p>

            <h3 className="text-xl font-semibold mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline"
              >
                {post.title}
              </Link>
            </h3>

            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}