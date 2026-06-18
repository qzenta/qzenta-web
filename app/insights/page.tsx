import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Guides, articles, and practical insights on web infrastructure, IT management, and digital presence for South African businesses.",
  openGraph: { url: "https://www.qzenta.com/insights" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Insights"
        sub="Practical guides on web infrastructure, IT management, and building a reliable digital presence in South Africa."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Laptop on desk with coffee"
        overlay="from-[#0C2228]/88 via-[#0C2228]/65 to-[#0C2228]/30"
      />

      {/* Posts grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group block bg-white dark:bg-onyx-800 rounded-lg border border-slate-200 dark:border-onyx-700 hover:border-spring-500/50 hover:shadow-[0_0_24px_rgba(2,245,161,0.08)] transition-all overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-onyx-500 mb-4">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-semibold text-slate-900 dark:text-onyx-50 group-hover:text-spring-700 dark:group-hover:text-spring-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-onyx-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-spring-400 group-hover:text-spring-300 transition-colors">
                  Read more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
