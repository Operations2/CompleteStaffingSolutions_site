import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title:
    "Staffing Blog | Hiring Insights & Salary Guides | Complete Staffing Solutions",
  description:
    "Hiring insights, salary guides, and recruiting strategies across healthcare, finance, and engineering markets nationwide.",
  alternates: {
    canonical: "https://www.completestaffingsolutions.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://www.completestaffingsolutions.com/blog",
    title:
      "Staffing Blog | Hiring Insights & Salary Guides | Complete Staffing Solutions",
    description:
      "Hiring insights, salary guides, and recruiting strategies across healthcare, finance, and engineering markets nationwide.",
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
    title:
      "Staffing Blog | Hiring Insights & Salary Guides | Complete Staffing Solutions",
    description:
      "Hiring insights, salary guides, and recruiting strategies across healthcare, finance, and engineering markets nationwide.",
    images: ["https://www.completestaffingsolutions.com/og-image.jpg"],
  },
};

function BlogIndexJsonLd() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.completestaffingsolutions.com/blog#blog",
    name: "Complete Staffing Solutions Blog",
    description:
      "Hiring insights, salary guides, and recruiting strategies across healthcare, finance, and engineering markets nationwide.",
    url: "https://www.completestaffingsolutions.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Complete Staffing Solutions",
      url: "https://www.completestaffingsolutions.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.completestaffingsolutions.com/logo.svg",
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://www.completestaffingsolutions.com/blog/${post.slug}`,
      datePublished: new Date(post.date).toISOString(),
      articleSection: post.category,
      description: post.description,
      author: {
        "@type": "Organization",
        name: "Complete Staffing Solutions",
      },
    })),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.completestaffingsolutions.com/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function BlogPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-[#F7F6F3] px-6 py-16 max-w-6xl mx-auto">
      <BlogIndexJsonLd />

      <h1 className="text-4xl font-bold mb-4">
        Staffing Insights & Hiring Guides
      </h1>

      <p className="mb-12 text-lg text-gray-600 max-w-2xl">
        Practical hiring insight, salary data, and recruiting strategy across
        healthcare, finance, and engineering.
      </p>

      <div className="mb-14 p-8 bg-white rounded-2xl shadow-sm border">
        <p className="text-sm text-gray-500 mb-2">
          {posts[0].category} •{" "}
          {new Date(posts[0].date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <h2 className="text-3xl font-bold mb-3">
          <Link href={`/blog/${posts[0].slug}`} className="hover:underline">
            {posts[0].title}
          </Link>
        </h2>

        <p className="text-gray-600 text-lg">{posts[0].description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.slice(1).map((post) => (
          <div
            key={post.slug}
            className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500 mb-2">
              {post.category} •{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <h3 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h3>

            <p className="text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}