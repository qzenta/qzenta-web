import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Live projects built and maintained by Qzenta — from professional services and property to SaaS and NGO platforms.",
};

const projects = [
  {
    name: "Sikatrix Business Accountants",
    tag: "Professional Services",
    url: "https://www.sikatrix.com",
    desc: "Full marketing site for a South African tax and accounting practice. 13 blog posts, 8 location pages, MailerLite newsletter integration, and Brevo transactional email.",
    stack: ["Next.js", "Vercel", "Cloudflare", "Brevo", "MailerLite"],
    // Black professional reviewing financial documents
    cover: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Erga Properties",
    tag: "Property",
    url: "https://www.erga.co.za",
    desc: "Property services platform for a South African estate agency. Clean, professional design with contact form integration and Cloudflare DNS.",
    stack: ["Next.js", "Vercel", "Cloudflare", "Brevo"],
    // South African residential architecture
    cover: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "TiqBooks",
    tag: "SaaS",
    url: "https://www.tiqbooks.com",
    desc: "Marketing and onboarding site for a bookkeeping SaaS platform. Full Cloudflare DNS setup, Brevo authentication email, and SQL database integration.",
    stack: ["Next.js", "Vercel", "Cloudflare", "Brevo", "PostgreSQL"],
    // African entrepreneur working on laptop with data
    cover: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ghana Diaspora SA",
    tag: "NGO",
    url: "https://www.ghanadiasporasa.org",
    desc: "Platform for the Ghana Diaspora South Africa NGO. Live with Brevo email integration and Salesforce membership management (in progress).",
    stack: ["Next.js", "Vercel", "Cloudflare", "Brevo", "Salesforce"],
    // African community gathering
    cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-emerald-500 text-xs font-semibold tracking-widest uppercase mb-4">
          Our work
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-100">Portfolio</h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl">
          Live projects built and managed under the Qzenta infrastructure umbrella.
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-emerald-500/40 transition-colors"
            >
              {/* Cover image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={p.cover}
                  alt={`${p.name} — ${p.tag}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gray-900/40" />
                <span className="absolute top-4 left-4 text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-gray-900/70 px-2.5 py-1 rounded">
                  {p.tag}
                </span>
              </div>
              <div className="p-8">
                <h2 className="text-xl font-semibold text-slate-100">{p.name}</h2>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-medium bg-gray-900 text-slate-400 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  Visit site
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-100">Want your project here?</h2>
          <p className="mt-3 text-slate-400 max-w-md mx-auto">
            Get in touch and let&apos;s talk about what you&apos;re building.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-8 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
