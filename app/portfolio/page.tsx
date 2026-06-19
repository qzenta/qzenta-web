import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Work built and managed by Qzenta — web infrastructure, deployments, and digital operations across multiple sectors.",
  openGraph: { url: "https://www.qzenta.com/portfolio" },
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
      <PageHero
        eyebrow="Our work"
        title="Portfolio"
        sub="Live projects built and managed under the Qzenta infrastructure umbrella."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
        imageAlt="City buildings at dusk"
        overlay="from-[#0C2228]/85 via-[#0C2228]/65 to-[#0C2228]/35"
      />

      {/* Project grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-onyx-800 rounded-lg border border-onyx-700 overflow-hidden hover:border-spring-500/40 hover:shadow-[0_0_24px_rgba(2,245,161,0.08)] transition-all"
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
                <div className="absolute inset-0 bg-[#0C2228]/60" />
                <span className="absolute top-4 left-4 text-xs font-semibold text-spring-400 uppercase tracking-wider bg-onyx-950/80 px-2.5 py-1 rounded border border-spring-500/30">
                  {p.tag}
                </span>
              </div>

              <div className="p-8">
                <h2 className="text-xl font-semibold text-onyx-50">{p.name}</h2>
                <p className="mt-3 text-sm text-onyx-300 leading-relaxed">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-medium bg-spring-500/10 text-spring-400 border border-spring-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-xs text-onyx-300 italic">
                  Live project — details shared with client permission.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-900 border-t border-onyx-700">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-onyx-50">Want your project here?</h2>
          <p className="mt-3 text-onyx-300 max-w-md mx-auto">
            Get in touch and let&apos;s talk about what you&apos;re building.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-8 py-3.5 rounded-md bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
