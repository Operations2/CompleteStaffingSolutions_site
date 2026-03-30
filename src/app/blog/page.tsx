export const metadata = {
  title: 'Staffing Blog | Hiring Insights & Salary Guides | Complete Staffing Solutions',
  description:
    'Hiring insights, salary guides, and recruiting strategies across healthcare, finance, and engineering markets nationwide.',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'How to Hire a Travel Nurse in Connecticut (2026 Guide)',
      slug: 'hire-travel-nurse-connecticut',
      excerpt:
        'Everything employers need to know about sourcing, screening, and hiring travel nurses in Connecticut.',
    },
    {
      title: 'Controller Salary Boston 2026: What Employers Should Expect',
      slug: 'controller-salary-boston-2026',
      excerpt:
        'A breakdown of current salary ranges, hiring trends, and what it takes to attract top finance talent in Boston.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#cfe8ff] px-6 py-16 max-w-5xl mx-auto">
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
              <a href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </a>
            </h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
