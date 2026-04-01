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
    description:'Everything Connecticut employers need to know about sourcing, credentialing, and hiring travel nurses fast — including what agencies won't tell you.',
    content: [
  'Connecticut hospitals and outpatient practices have been running lean for a while now. The nurse shortage isn’t new — but the competition for qualified travel nurses has gotten sharper, especially in the Hartford corridor and coastal communities where census swings are hard to predict.',

  "If you've tried to fill a travel nurse position in the past year, you already know that posting a job and waiting doesn’t work. The facilities that move fast and present clear offers win. The ones with slow internal approval processes lose candidates to someone else.",

  '## What “Travel Nurse” Means',
  'A travel nurse is a licensed registered nurse (or LPN, in some settings) who takes short-term assignments — typically 13 weeks — at facilities that need temporary clinical coverage. They are experienced professionals who have deliberately chosen contract work for flexibility and higher earning potential.',

  '## Connecticut Licensure',
  'Connecticut is not part of the Nurse Licensure Compact (NLC). That means any out-of-state nurse needs a Connecticut license before working. Applications typically take 4–8 weeks, so confirming licensure status upfront is critical to avoid delays.',

  '## What to Include in a Job Order',
  'The more specific your job order, the faster you will get qualified candidates.',
  '• Unit or specialty',
  '• Shift and float expectations',
  '• EMR system',
  '• Start date and duration',
  '• Extension potential',
  '• Housing or parking details',
  '• Patient-to-nurse ratios',

  '## Pay Packages Explained',
  'Travel nurse compensation is structured differently from permanent hires. Packages include a taxable hourly rate plus non-taxed stipends for housing and meals based on GSA guidelines. In 2026, Connecticut bill rates typically range from $65–$90 per hour depending on specialty.',

  '## Evaluating a Staffing Agency',
  'Not all staffing agencies operate the same way. Employers should ask whether candidates are pre-screened for Connecticut licensure, whether the agency is Joint Commission certified, and how quickly they respond to job orders.',
  '• Pre-screens for CT licensure',
  '• Joint Commission certified',
  '• Provides liability coverage',
  '• Responds within 24 hours',

  '## When Assignments Go Sideways',
  'Occasionally, an assignment does not work out. Strong agencies communicate early, resolve issues professionally, and ensure coverage continuity instead of leaving gaps in patient care.',

  '## The Bottom Line',
  'The bottom line is simple: hire fast, verify licensure early, be specific in your job order, and work with agencies that pre-vet candidates. Those four factors consistently separate organizations that fill roles in two weeks from those still searching after six.',

  'CTA: Complete Staffing Solutions places travel nurses across Connecticut — Hartford, New Haven, Fairfield County, and beyond.',
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
      <a
        href="/blog"
        className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 hover:underline"
      >
        ← Back to Blog
      </a>

      <article className="mt-6">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-gray-600 mb-10">{post.description}</p>

        <div className="space-y-6 text-lg leading-8 text-gray-800">
  {(() => {
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < post.content.length) {
      const block = post.content[i];

      if (block.startsWith('## ')) {
        elements.push(
          <h2 key={`h-${i}`} className="text-2xl font-semibold mt-10 mb-3 text-gray-900">
            {block.replace('## ', '')}
          </h2>
        );
        i++;
        continue;
      }

      if (block.startsWith('• ')) {
        const bullets: string[] = [];
        while (i < post.content.length && post.content[i].startsWith('• ')) {
          bullets.push(post.content[i].replace('• ', ''));
          i++;
        }

        elements.push(
          <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2">
            {bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        continue;
      }

      if (block.startsWith('CTA: ')) {
        elements.push(
          <div key={`cta-${i}`} className="mt-10 p-5 bg-[#EEF0F5] rounded-lg">
            <p className="mb-2">{block.replace('CTA: ', '')}</p>
            <a
              href="https://www.completestaffingsolutions.com/job-request"
              className="text-blue-600 font-semibold underline"
            >
              Place a job request →
            </a>
          </div>
        );
        i++;
        continue;
      }

      elements.push(<p key={`p-${i}`}>{block}</p>);
      i++;
    }

    return elements;
  })()}
</div>
      );
    }

    // Default paragraph
    return <p key={index}>{paragraph}</p>;
  })}
</div>
      </article>
    </main>
  );
}
