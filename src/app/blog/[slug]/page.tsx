type BlogPost = {
  title: string;
  slug: string;
  description: string;
  content: string[];
};

const posts: BlogPost[] = [
  {
    title: 'How to Hire a Travel Nurse in Connecticut (2026 Guide)',
    slug: 'hire-travel-nurse-connecticut',
    description:
      'A practical guide for employers hiring travel nurses in Connecticut, including demand, screening, compliance, and speed-to-fill.',
    content: [
      'Hiring a travel nurse in Connecticut takes more than posting a job and waiting. Hospitals, clinics, and healthcare groups are competing for a limited pool of qualified professionals, and speed matters.',
      'The strongest hiring teams start with clarity. Define whether the role is short-term coverage, seasonal demand, census-related support, or a bridge while recruiting a permanent nurse. That decision affects pay, urgency, and candidate availability.',
      'Licensure and compliance should be handled early. Employers need to confirm Connecticut licensing requirements, credential status, shift expectations, and onboarding timelines before extending an offer.',
      'It also helps to work with a staffing partner that already has access to pre-screened talent. In a competitive market, the difference between filling a role in days versus weeks usually comes down to network depth and response time.',
      'For Connecticut employers, the best approach is simple: move quickly, screen thoroughly, and present a clear offer. The organizations that do those three things well consistently hire better travel nurses.',
    ],
  },
  {
    title: 'Controller Salary Boston 2026: What Employers Should Expect',
    slug: 'controller-salary-boston-2026',
    description:
      'Boston controller salary expectations in 2026, plus hiring pressure, market competition, and what employers can do to attract stronger finance candidates.',
    content: [
      'Boston remains one of the most competitive finance hiring markets in the Northeast, and Controller compensation reflects that. Employers should expect salary pressure from both cost of living and ongoing demand for experienced accounting leadership.',
      'A strong Controller candidate is usually being evaluated on more than technical accounting. Companies increasingly want leadership ability, process improvement experience, systems knowledge, and the ability to partner with ownership or executive teams.',
      'That means compensation is only one part of the equation. Employers that win top Controller talent usually combine strong base salary with clear responsibilities, decision-making authority, and a realistic hiring process.',
      'If your interview cycle drags, your best candidates will disappear. In Boston especially, experienced finance professionals often have multiple conversations happening at once.',
      'The lesson for employers is straightforward: know the market, make decisions quickly, and position the role as a business-critical leadership seat rather than a back-office accounting job.',
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Complete Staffing Solutions',
    };
  }

  return {
    title: `${post.title} | Complete Staffing Solutions`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-white px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <p className="text-gray-600">The article you requested does not exist.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-4xl mx-auto">
      <a href="/blog" className="text-sm text-blue-600 hover:underline">
        ← Back to Blog
      </a>

      <article className="mt-6">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-gray-600 mb-10">{post.description}</p>

        <div className="space-y-6 text-lg leading-8 text-gray-800">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
