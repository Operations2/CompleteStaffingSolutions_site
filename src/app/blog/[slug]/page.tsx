import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

function renderContent(content: string[]) {
  const elements = [];
  let i = 0;

  while (i < content.length) {
    const block = content[i];

    if (block.startsWith("## ")) {
      elements.push(
        <h2
          key={`h-${i}`}
          className="text-2xl font-semibold mt-10 mb-3 text-gray-900"
        >
          {block.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    if (block.startsWith("• ")) {
      const bullets = [];

      while (i < content.length && content[i].startsWith("• ")) {
        bullets.push(content[i].replace("• ", ""));
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

    if (block.startsWith("CTA: ")) {
      const cta = block.replace("CTA: ", "");
      const parts = cta.split("|");
      const text = parts[0] || "";
      const href = parts[1] || "/contact";
      const label = parts[2] || "Learn more →";

      elements.push(
        <div key={`cta-${i}`} className="mt-10 rounded-lg bg-[#EEF0F5] p-5">
          <p className="mb-2">{text}</p>
          <a href={href} className="font-semibold text-blue-600 underline">
            {label}
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
}

function BlogPostJsonLd({ post }: { post: BlogPost }) {
  const postUrl = `https://www.completestaffingsolutions.com/blog/${post.slug}`;
  const publishedDate = new Date(post.date).toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    headline: post.title,
    description: post.description,
    datePublished: publishedDate,
    dateModified: publishedDate,
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: "Complete Staffing Solutions",
      url: "https://www.completestaffingsolutions.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Complete Staffing Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.completestaffingsolutions.com/logo.svg",
      },
    },
    image: ["https://www.completestaffingsolutions.com/og-image.jpg"],
    url: postUrl,
    isPartOf: {
      "@type": "Blog",
      "@id": "https://www.completestaffingsolutions.com/blog#blog",
      name: "Complete Staffing Solutions Blog",
      url: "https://www.completestaffingsolutions.com/blog",
    },
    about: [
      {
        "@type": "Thing",
        name: post.category,
      },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.completestaffingsolutions.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.completestaffingsolutions.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: postUrl,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Complete Staffing Solutions",
    };
  }

  const postUrl = `https://www.completestaffingsolutions.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Complete Staffing Solutions`,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title: post.title,
      description: post.description,
      publishedTime: new Date(post.date).toISOString(),
      images: [
        {
          url: "https://www.completestaffingsolutions.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["https://www.completestaffingsolutions.com/og-image.jpg"],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen max-w-4xl mx-auto bg-white px-6 py-16">
        <h1 className="mb-4 text-3xl font-bold">Post not found</h1>
        <p className="text-gray-600">
          The article you requested does not exist.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen max-w-4xl mx-auto bg-white px-6 py-16">
      <BlogPostJsonLd post={post} />

      <Link
        href="/blog"
        className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 hover:underline"
      >
        ← Back to Blog
      </Link>

      <article className="mt-6">
        <p className="mb-3 text-sm text-gray-500">
          {post.category} •{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        <p className="mb-10 text-lg text-gray-600">{post.description}</p>

        <div className="space-y-6 text-lg leading-8 text-gray-800">
          {renderContent(post.content)}
        </div>
      </article>
    </main>
  );
}