import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/resources/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage(props: PageProps<"/resources/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);

  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-8 max-w-7xl mx-auto">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100 transition-colors mb-8"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          All resources
        </Link>

        <div className="flex items-center gap-3 text-xs text-slate-500 mb-5">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>&middot;</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 leading-tight max-w-3xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg text-slate-400 max-w-2xl leading-relaxed">{post.excerpt}</p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-3xl mx-auto">
        <div className="border-t border-[#2d4060] pt-10 space-y-5">
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2 key={i} className="text-xl font-semibold text-slate-100 pt-4">
                  {para.replace("## ", "")}
                </h2>
              );
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-slate-400 leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-[#2d4060]">
          <p className="text-sm text-slate-400">
            Questions about any of this?{" "}
            <Link href="/contact" className="text-emerald-500 hover:text-emerald-400 transition-colors">
              Get in touch
            </Link>{" "}
            and we&apos;ll help.
          </p>
        </div>
      </section>
    </>
  );
}
