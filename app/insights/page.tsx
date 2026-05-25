import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Guides, articles, and practical insights on web infrastructure, IT management, and digital presence for South African businesses.",
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
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-emerald-500 text-xs font-semibold tracking-widest uppercase mb-4">
          Learn
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-100">Insights</h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl">
          Practical guides on web infrastructure, IT management, and building a reliable digital
          presence in South Africa.
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group block bg-gray-800 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-colors overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-500 group-hover:text-emerald-400 transition-colors">
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
