import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Qzenta delivers web development, domain and hosting management, tech infrastructure setup, and ongoing maintenance for South African businesses.",
};

const services = [
  {
    number: "01",
    id: "web",
    title: "Web Development & Deployment",
    summary: "Modern, performant websites built for growth.",
    details: [
      "Next.js with TypeScript — fast, SEO-friendly, and maintainable",
      "Deployed on Vercel with automatic previews and rollback",
      "Cloudflare CDN and DDoS protection on every project",
      "Mobile-first, responsive design as standard",
      "Full README with deployment and handoff documentation",
    ],
  },
  {
    number: "02",
    id: "domains",
    title: "Domain & Hosting Management",
    summary: "Your domains and hosting, handled end-to-end.",
    details: [
      "Domain registration (.com, .co.za, and others)",
      "DNS configuration and Cloudflare migration",
      "SSL certificate setup and renewal monitoring",
      "Subdomain and redirect management",
      "Registrar migrations with zero-downtime DNS cutover",
    ],
  },
  {
    number: "03",
    id: "infrastructure",
    title: "Tech Infrastructure for SMEs",
    summary: "The complete digital foundation, set up right from day one.",
    details: [
      "GitHub organisation setup and repository structure",
      "Brevo transactional email and contact form integration",
      "MailerLite newsletter and marketing email setup",
      "Environment variable management and secrets handling",
      "CI/CD pipelines with Vercel and GitHub Actions",
    ],
  },
  {
    number: "04",
    id: "support",
    title: "Ongoing Maintenance & Support",
    summary: "Your tech stack, managed month to month.",
    details: [
      "Dependency updates and security patch management",
      "Uptime monitoring and incident response",
      "Performance audits and optimisation",
      "Content and copy updates on request",
      "Monthly reporting on site health and infrastructure status",
    ],
  },
];

const process = [
  {
    step: "Discovery",
    desc: "We start with a clear brief — what you have, what you need, and what success looks like.",
  },
  {
    step: "Setup",
    desc: "Infrastructure is provisioned, repositories created, and environments configured before a line of code is written.",
  },
  {
    step: "Build",
    desc: "Development with regular previews. You review in a staging environment before anything goes live.",
  },
  {
    step: "Launch",
    desc: "DNS cutover, SSL confirmation, and a live deployment verified end-to-end before handoff.",
  },
  {
    step: "Maintain",
    desc: "Ongoing support keeps your stack secure, performant, and up to date.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          What we offer
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f1f5f9] tracking-tight">
          Solutions
        </h1>
        <p className="mt-4 text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
          End-to-end IT support for businesses that want to move fast without breaking things.
        </p>
      </section>

      {/* Service cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              id={s.id}
              key={s.number}
              className="bg-[#1e2d45] rounded-lg p-8 border border-[#2d4060] hover:border-emerald-500/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.08)] transition-all"
            >
              <span className="text-4xl font-extrabold text-emerald-500/20 select-none leading-none">
                {s.number}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-[#f1f5f9]">{s.title}</h2>
              <p className="mt-2 text-[#94a3b8]">{s.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
            <div>
              <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Our Process
              </p>
              <h2 className="text-2xl font-bold text-[#f1f5f9] mb-3">How we work</h2>
              <p className="text-[#94a3b8] max-w-xl leading-relaxed">
                A consistent process across every engagement — no surprises.
              </p>
            </div>
            <div className="relative h-52 sm:h-64 rounded-xl overflow-hidden border border-[#2d4060]">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                alt="African business team collaborating with technology"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#1a2236]/50" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-0">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="flex-1 relative pl-6 md:pl-0 md:pt-6 pb-8 md:pb-0"
              >
                {i < process.length - 1 && (
                  <>
                    <span className="absolute left-3 top-7 bottom-0 w-px bg-[#2d4060] md:hidden" />
                    <span className="hidden md:block absolute top-3 left-1/2 right-0 h-px bg-[#2d4060]" />
                  </>
                )}
                <span className="absolute left-0 top-1 md:left-auto md:top-0 md:relative md:block w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 block" />
                </span>
                <div className="md:mt-4 ml-0">
                  <h3 className="font-semibold text-[#f1f5f9] text-sm">{p.step}</h3>
                  <p className="mt-1 text-sm text-[#94a3b8] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-[#2d4060]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#1e2d45] rounded-lg p-8 border border-[#2d4060]">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.2em] mb-2">Once-off</p>
            <p className="text-3xl font-extrabold text-[#f1f5f9]">R3,000</p>
            <p className="mt-2 text-sm text-[#94a3b8]">Setup, build, and deployment — domain, hosting, email, and CI/CD included.</p>
          </div>
          <div className="bg-[#1e2d45] rounded-lg p-8 border border-emerald-500/40 shadow-[0_0_24px_rgba(16,185,129,0.08)]">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.2em] mb-2">Monthly</p>
            <p className="text-3xl font-extrabold text-[#f1f5f9]">R200 – R300<span className="text-lg font-semibold text-[#94a3b8]">/mo</span></p>
            <p className="mt-2 text-sm text-[#94a3b8]">Ongoing maintenance, updates, monitoring, and support — managed service, not DIY.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#111827] border-t border-[#2d4060]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#f1f5f9]">Ready to get started?</h2>
          <p className="mt-3 text-[#94a3b8] max-w-md mx-auto">
            Tell us what you need and we&apos;ll put together a plan.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-8 py-3.5 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
