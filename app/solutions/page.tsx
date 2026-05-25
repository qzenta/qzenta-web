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
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-emerald-500 text-xs font-semibold tracking-widest uppercase mb-4">
          What we offer
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-100">Solutions</h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl">
          End-to-end IT support for businesses that want to move fast without breaking things.
        </p>
      </section>

      {/* Service cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.number}
              className="bg-gray-800 rounded-lg p-8 border border-gray-700"
            >
              <span className="text-4xl font-bold text-emerald-500/20 select-none">
                {s.number}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-slate-100">{s.title}</h2>
              <p className="mt-2 text-slate-400">{s.summary}</p>
              <ul className="mt-5 space-y-2">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
            <div>
              <h2 className="text-2xl font-bold text-slate-100 mb-3">How we work</h2>
              <p className="text-slate-400 max-w-xl">
                A consistent process across every engagement — no surprises.
              </p>
            </div>
            <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                alt="African business team collaborating with technology"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-emerald-900/30" />
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
                    <span className="absolute left-3 top-7 bottom-0 w-px bg-gray-700 md:hidden" />
                    <span className="hidden md:block absolute top-3 left-1/2 right-0 h-px bg-gray-700" />
                  </>
                )}
                <span className="absolute left-0 top-1 md:left-auto md:top-0 md:relative md:block w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 block" />
                </span>
                <div className="md:mt-4 ml-0">
                  <h3 className="font-semibold text-slate-100 text-sm">{p.step}</h3>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-100">Ready to get started?</h2>
        <p className="mt-3 text-slate-400 max-w-md mx-auto">
          Tell us what you need and we&apos;ll put together a plan.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block px-8 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
