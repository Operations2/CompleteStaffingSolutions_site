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
      'Everything Connecticut employers need to know about sourcing, credentialing, and hiring travel nurses fast — including what agencies won’t tell you.',
    content: [
      'Connecticut hospitals and outpatient practices have been running lean for a while now. The nurse shortage isn’t new — but the competition for qualified travel nurses has gotten sharper.',

      "If you've tried to fill a travel nurse position recently, you already know that posting and waiting doesn’t work. Speed and clarity win.",

      '## What “Travel Nurse” Means',
      'A travel nurse is a licensed RN or LPN working short-term assignments, typically 13 weeks, by choice for flexibility and pay.',

      '## Connecticut Licensure',
      'Connecticut is not part of the Nurse Licensure Compact. Out-of-state nurses must obtain a CT license, which takes 4–8 weeks.',

      '## What to Include in a Job Order',
      'The more specific your job order, the faster you get candidates.',
      '• Unit or specialty',
      '• Shift and float expectations',
      '• EMR system',
      '• Start date and duration',
      '• Extension potential',
      '• Housing or parking details',
      '• Patient-to-nurse ratios',

      '## Pay Packages Explained',
      'Travel nurse pay includes hourly wages plus tax-free stipends. Connecticut rates typically range $65–$90/hour.',

      '## Evaluating a Staffing Agency',
      'Not all agencies are equal. Screening quality and speed matter.',
      '• Pre-screens for CT licensure',
      '• Joint Commission certified',
      '• Provides liability coverage',
      '• Responds within 24 hours',

      '## When Assignments Go Sideways',
      'Strong agencies resolve issues early and protect continuity of care.',

      '## The Bottom Line',
      'Move fast, verify licensure early, be specific, and work with agencies that pre-vet.',

      'CTA: Complete Staffing Solutions places travel nurses across Connecticut.',
    ],
  },

  {
    title: 'Controller Salary Boston 2026: What Employers Should Expect',
    slug: 'controller-salary-boston-2026',
    description:
      'Current salary ranges for Controllers in Boston and how to compete for talent.',
    content: [
      'Boston remains one of the tightest finance hiring markets in the country. Controller compensation pressure has increased significantly.',

      '## Salary Ranges in Boston (2026)',
      'Compensation varies by company size and scope.',
      '• Small business: $95K–$120K',
      '• Mid-market: $120K–$160K',
      '• Large/public: $155K–$200K+',

      '## What’s Driving Compensation',
      'CPA pipeline decline, cost of living, and increased technical expectations are all pushing salaries higher.',

      '## What Candidates Want',
      'Salary is only part of the equation.',
      '• Decision-making authority',
      '• Clean financials',
      '• Fast interview process',
      '• Hybrid flexibility',

      '## Competitive Offer Structure',
      'Typical competitive package:',
      '• $135K–$155K base',
      '• 10–15% bonus',
      '• Hybrid schedule',
      '• Strong benefits + 401k',

      '## Recruiting Reality',
      'Top candidates are not applying—they respond to targeted outreach.',

      'CTA: Complete Staffing Solutions places Controllers across Boston.',
    ],
  },

  {
    title: 'Staffing Agency Hartford CT: How to Choose the Right Recruiting Partner',
    slug: 'staffing-agency-hartford-ct',
    description:
      'How Hartford employers should evaluate staffing agencies before committing.',
    content: [
      'Hartford hiring is driven by insurance, healthcare, and manufacturing sectors.',

      '## Biggest Hiring Mistake',
      'Working with generalist firms that lack deep networks.',

      '## What to Ask an Agency',
      '• Placement history in Hartford',
      '• Recruiter specialization',
      '• Sourcing process',
      '• Guarantee terms',

      '## Hartford Market Reality',
      '• Finance and insurance dominate',
      '• Healthcare hiring is constant',
      '• Engineering demand exceeds supply',

      '## Direct Hire vs Temp-to-Hire',
      'Direct hire fits permanent roles. Temp-to-hire reduces risk and speeds onboarding.',

      '## Why Specialization Matters',
      'Recruiting is relationship-driven. Specialists outperform generalists every time.',

      'CTA: Contact our Hartford-area recruiting team.',
    ],
  },

  {
    title: 'Direct Hire vs. Temp-to-Hire: What’s Right for Your Company',
    slug: 'direct-hire-vs-temp-to-hire',
    description:
      'Understand the real difference between direct hire and temp-to-hire.',
    content: [
      'Choosing between direct hire and temp-to-hire impacts speed, risk, and long-term success.',

      '## What Direct Hire Means',
      'Permanent placement from day one.',
      '• Best for senior roles',
      '• Faster long-term stability',
      '• Higher upfront risk',

      '## What Temp-to-Hire Means',
      'Trial period before permanent conversion.',
      '• Evaluate real performance',
      '• Lower hiring risk',
      '• Faster onboarding',

      '## Risk Comparison',
      'Direct hire = upfront risk. Temp-to-hire = distributed risk.',

      '## When to Use Each',
      '• Controller → Direct hire',
      '• Admin team → Temp-to-hire',
      '• Engineers → Direct hire',
      '• Production roles → Temp-to-hire',

      '## Key Insight',
      'Temp-to-hire often shortens time-to-productivity, not lengthens it.',

      'CTA: Talk to a recruiter about the right hiring model.',
    ],
  },
];

function renderContent(content: string[]) {
  const elements = [];
  let i = 0;

  while (i < content.length) {
    const block = content[i];

    if (block.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-semibold mt-10 mb-3">
          {block.replace('## ', '')}
        </h2>
      );
      i++;
      continue;
    }

    if (block.startsWith('• ')) {
      const bullets = [];
      while (i < content.length && content[i].startsWith('• ')) {
        bullets.push(content[i].replace('• ', ''));
        i++;
      }

      elements.push(
        <ul key={i} className="list-disc pl-6 space-y-2">
          {bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (block.startsWith('CTA: ')) {
      elements.push(
        <div key={i} className="mt-10 p-5 bg-[#EEF0F5] rounded-lg">
          <p className="mb-2">{block.replace('CTA: ', '')}</p>
          <a
            href="https://www.completestaffingsolutions.com/contact"
            className="text-blue-600 font-semibold underline"
          >
            Get in touch →
          </a>
        </div>
      );
      i++;
      continue;
    }

    elements.push(<p key={i}>{block}</p>);
    i++;
  }

  return elements;
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  return {
    title: post
      ? `${post.title} | Complete Staffing Solutions`
      : 'Blog Post Not Found',
    description: post?.description,
  };
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: any) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <a href="/blog" className="text-blue-600 underline">
        ← Back to Blog
      </a>

      <article className="mt-6">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-10">{post.description}</p>

        <div className="space-y-6 text-lg leading-8">
          {renderContent(post.content)}
        </div>
      </article>
    </main>
  );
}
