import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Work built and managed by Qzenta — web infrastructure, deployments, and digital operations across multiple sectors.",
};

const projects = [
  {
    name: "South African Accounting Practice",
    tag: "Professional Services",
    desc: "Full marketing site for a tax and accounting practice. Multi-location SEO pages, integrated blog, MailerLite newsletter, and Brevo transactional email — all on a single Next.js deployment.",
    stack: ["Next.js", "Vercel", "Cloudflare", "Brevo", "MailerLite"],
    cover: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Property Services Agency",
    tag: "Property",
    desc: "Clean, professional platform for a South African estate agency. Contact form integration, Brevo email, and full Cloudflare DNS management with zero-downtime cutover.",
    stack: ["Next.js", "Vercel", "Cloudflare", "Brevo"],
    cover: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bookkeeping SaaS Platform",
    tag: "SaaS",
    desc: "Marketing and onboarding site for a bookkeeping SaaS product. Brevo authentication email flows, PostgreSQL database integration, and full Cloudflare DNS setup.",
    stack: ["Next.js", "Vercel", "Cloudflare", "Brevo", "PostgreSQL"],
    cover: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Diaspora Community NGO",
    tag: "NGO",
    desc: "Platform for an African diaspora organisation in South Africa. Brevo email integration, Salesforce membership management, and a community-first design built for accessibility.",
    stack: ["Next.js", "Vercel", "Cloudflare", "Brevo", "Salesforce"],
    cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Legal Services Organisation",
    tag: "Legal · Faith",
    desc: "Website and professional infrastructure for a legal services and faith organisation. Domain configuration, Cloudflare DNS, Brevo email, and POPIA-compliant, accessible copy.",
    stack: ["Web Development", "Email Setup", "Domain Management", "POPIA"],
    cover: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Our work
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f1f5f9] tracking-tight">
          Portfolio
        </h1>
        <p className="mt-4 text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
          Live projects built and managed under the Qzenta infrastructure umbrella.
        </p>
      </section>

      {/* Project grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-[#1e2d45] rounded-lg border border-[#2d4060] overflow-hidden hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.08)] transition-all"
            >
              {/* Cover image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={p.cover}
                  alt={`${p.name} — ${p.tag}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#0d1829]/60" />
                <span className="absolute top-4 left-4 text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-[#1a2236]/80 px-2.5 py-1 rounded border border-emerald-500/30">
                  {p.tag}
                </span>
              </div>

              <div className="p-8">
                <h2 className="text-xl font-semibold text-[#f1f5f9]">{p.name}</h2>
                <p className="mt-3 text-sm text-[#94a3b8] leading-relaxed">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-xs text-[#64748b] italic">
                  Live project — details shared with client permission.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#111827] border-t border-[#2d4060]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#f1f5f9]">Want your project here?</h2>
          <p className="mt-3 text-[#94a3b8] max-w-md mx-auto">
            Get in touch and let&apos;s talk about what you&apos;re building.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-8 py-3.5 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
