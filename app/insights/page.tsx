import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Insights — Technical Guides, Architecture & Business Automation",
  description:
    "Guides, articles, and architectural insights on digital infrastructure, AI automation workflows, and business software for South African enterprises.",
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
        eyebrow="Practical Guides & Perspectives"
        title="Technical Insights"
        sub="Practical guides on web infrastructure, IT management, automation pipelines, and building a reliable digital presence in South Africa."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Laptop on desk with coffee"
        overlay="from-[#0C2228]/92 via-[#0C2228]/75 to-[#0C2228]/45"
      />

      {/* Posts grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group block bg-white dark:bg-onyx-800 rounded-xl border border-onyx-100 dark:border-onyx-700 hover:border-spring-500/40 hover:shadow-[0_0_24px_rgba(2,245,161,0.08)] transition-all overflow-hidden flex flex-col justify-between"
            >
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs text-onyx-500 dark:text-onyx-300 mb-4">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-bold text-lg text-onyx-950 dark:text-onyx-50 group-hover:text-spring-500 dark:group-hover:text-spring-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-7 pb-6 pt-2 border-t border-onyx-100 dark:border-onyx-700">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-spring-500 dark:text-spring-400 group-hover:gap-2 transition-all">
                  Read article
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
