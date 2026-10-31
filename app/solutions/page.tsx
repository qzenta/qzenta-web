import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Digital Infrastructure & Managed Tech Services",
  description:
    "Qzenta delivers production web development, domain and hosting management, tech infrastructure setup, and ongoing stewardship for South African enterprises.",
  openGraph: { url: "https://www.qzenta.com/solutions" },
};

const services = [
  {
    number: "01",
    id: "web",
    title: "Web Development & Edge Deployment",
    summary: "Modern, performant web applications built for speed and long-term stability.",
    details: [
      "Next.js with TypeScript — fast, SEO-optimized, and maintainable",
      "Deployed on Vercel with automatic branch previews and instant rollback",
      "Cloudflare CDN caching and DDoS mitigation on every deployment",
      "Mobile-first, responsive engineering with high Core Web Vitals",
      "Complete deployment documentation and repository ownership",
    ],
  },
  {
    number: "02",
    id: "domains",
    title: "Domain & Hosting Management",
    summary: "Your domain portfolio, DNS routing, and hosting handled end-to-end.",
    details: [
      "Domain lifecycle management (.com, .co.za, and specialist TLDs)",
      "DNS configuration and enterprise Cloudflare perimeter migration",
      "SSL/TLS certificate automation and renewal monitoring",
      "Subdomain routing and permanent HTTP redirect architecture",
      "Zero-downtime DNS cutover and registrar migration management",
    ],
  },
  {
    number: "03",
    id: "infrastructure",
    title: "Digital Infrastructure for Growing Businesses",
    summary: "The foundational technology stack, engineered correctly from day one.",
    details: [
      "GitHub organisation architecture and repository structure",
      "Brevo transactional email routing and form submission pipelines",
      "MailerLite newsletter and subscriber segmentation infrastructure",
      "Environment variable management and zero-leak secrets handling",
      "Automated CI/CD delivery pipelines with Vercel and GitHub Actions",
    ],
  },
  {
    number: "04",
    id: "support",
    title: "Ongoing Maintenance & Stewardship",
    summary: "Your digital perimeter monitored and maintained month to month.",
    details: [
      "Dependency auditing, framework upgrades, and security patch management",
      "Automated infrastructure monitoring and rapid incident mitigation",
      "Performance benchmarking and Core Web Vitals optimization",
      "Technical copy, content updates, and schema maintenance",
      "Monthly infrastructure health reporting and DNS oversight",
    ],
  },
];

const industries = [
  {
    id: "professional",
    number: "01",
    title: "Professional Services",
    tag: "Accountants · Tax Practitioners · Consultants",
    desc: "Accounting practices, tax consultancies, and professional firms need digital infrastructure that reflects technical credibility. We engineer fast, search-optimized platforms with transactional communications and document inquiry workflows.",
    cover: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "property",
    number: "02",
    title: "Property & Real Estate",
    tag: "Estate Agencies · Property Managers",
    desc: "Commercial and residential property businesses depend on fast, high-trust digital platforms. We deploy reliable lead routing, Cloudflare DDoS defense, and domain management so your perimeter remains secure during high-traffic campaigns.",
    cover: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "saas",
    number: "03",
    title: "Technology & SaaS",
    tag: "Early-Stage Products · Software Teams",
    desc: "Software companies need deployment pipelines that can move fast without breaking production. We configure GitHub organisations, CI/CD pipelines, authentication email flows, database connections, and staging environments.",
    cover: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ngo",
    number: "04",
    title: "NGOs & Non-Profits",
    tag: "Community Organisations · Advocacy Groups",
    desc: "Mission-driven organisations require accessible, high-reliability infrastructure. We build community portals with transactional email integrations, member onboarding flows, and accessibility-first design.",
    cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "payroll",
    number: "05",
    title: "Payroll & HR Services",
    tag: "Payroll Outsourcing · HR Consultancies",
    desc: "Firms handling sensitive employee data need POPIA-compliant, tamper-evident digital systems. We architect secure web applications with encrypted data handling, professional email, and audit-ready records.",
    cover: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
];

const processSteps = [
  {
    step: "Discovery & Audit",
    desc: "We analyze your existing domains, DNS, hosting, and application requirements to define an exact architectural brief.",
  },
  {
    step: "Infrastructure Provisioning",
    desc: "Repositories, edge environments, and security perimeters are provisioned before application code is deployed.",
  },
  {
    step: "Engineering & Staging",
    desc: "Development with continuous preview deployments. You verify functionality in a staging environment prior to cutover.",
  },
  {
    step: "Zero-Downtime Launch",
    desc: "Cloudflare DNS cutover, automated SSL provisioning, and live verification across all endpoints.",
  },
  {
    step: "Continuous Stewardship",
    desc: "Routine dependency updates, monthly health reviews, and proactive infrastructure maintenance.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Infrastructure"
        title="Solutions"
        sub="Production web development, domain lifecycle management, and cloud infrastructure engineered to run quietly and reliably."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Server infrastructure and modern data network"
        overlay="from-[#0C2228]/92 via-[#0C2228]/75 to-[#0C2228]/45"
      />

      {/* Core Infrastructure Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
            Pillar 01: Digital Infrastructure
          </p>
          <h2 className="text-3xl font-bold text-onyx-950 dark:text-onyx-50">
            Web and hosting infrastructure you never have to think about
          </h2>
          <p className="mt-3 text-sm sm:text-base text-onyx-500 dark:text-onyx-300 leading-relaxed">
            Good technology infrastructure operates quietly in the background. We build clean, maintainable systems on world-class platforms so your team can focus entirely on business execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              id={s.id}
              key={s.number}
              className="relative bg-white dark:bg-white/5 dark:backdrop-blur-sm rounded-xl p-8 border border-onyx-100 dark:border-white/10 hover:border-spring-500/40 dark:hover:border-spring-500/30 hover:shadow-[0_0_24px_rgba(2,245,161,0.08)] transition-all overflow-hidden group"
            >
              <span
                aria-hidden
                className="absolute -top-4 -right-2 text-[8rem] font-black text-spring-500/8 dark:text-spring-500/6 select-none leading-none group-hover:text-spring-500/12 transition-colors"
              >
                {s.number}
              </span>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-spring-500/10 border border-spring-500/30 text-sm font-bold text-spring-500 dark:text-spring-400 select-none">
                {s.number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-onyx-950 dark:text-onyx-50">{s.title}</h3>
              <p className="mt-2 text-sm text-onyx-500 dark:text-onyx-300">{s.summary}</p>
              <ul className="mt-6 space-y-3">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-xs sm:text-sm text-onyx-500 dark:text-onyx-300">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-spring-500" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Link Banner to AI & Automation */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="bg-onyx-800 rounded-2xl p-8 sm:p-10 border border-onyx-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-spring-400 bg-spring-500/10 border border-spring-500/25 px-2.5 py-1 rounded">
              Pillar 02: Intelligent Automation
            </span>
            <h3 className="text-xl font-bold text-onyx-50 mt-3 mb-2">
              Looking for autonomous AI agents &amp; n8n workflow pipelines?
            </h3>
            <p className="text-xs sm:text-sm text-onyx-300 max-w-2xl leading-relaxed">
              Explore our dedicated automation suite for lead triage, document generation, statutory compliance monitoring, and custom AI agents starting from R18,000.
            </p>
          </div>
          <Link
            href="/ai-automation"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
          >
            Explore AI &amp; Automation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Sector Solutions (Consolidated from /industries) */}
      <section id="industries" className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-50 dark:bg-onyx-900 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
              Sector Solutions
            </p>
            <h2 className="text-3xl font-bold text-onyx-950 dark:text-onyx-50">
              Infrastructure tailored to your sector
            </h2>
            <p className="mt-3 text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed">
              Reliable, security-conscious digital foundations engineered for South African commercial sectors.
            </p>
          </div>

          <div className="space-y-6">
            {industries.map((ind) => (
              <div
                key={ind.id}
                id={ind.id}
                className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white dark:bg-onyx-800 rounded-xl border border-onyx-100 dark:border-onyx-700 overflow-hidden hover:border-spring-500/40 transition-all"
              >
                <div className="relative h-44 lg:h-auto lg:col-span-2">
                  <Image
                    src={ind.cover}
                    alt={ind.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-[#0C2228]/55" />
                  <span className="absolute top-4 left-4 text-3xl font-extrabold text-white/20 select-none">
                    {ind.number}
                  </span>
                </div>

                <div className="lg:col-span-3 p-8">
                  <span className="inline-block text-xs font-semibold text-spring-400 bg-spring-500/10 px-3 py-1 rounded uppercase tracking-wide border border-spring-500/20">
                    {ind.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-onyx-950 dark:text-onyx-50">{ind.title}</h3>
                  <p className="mt-3 text-xs sm:text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed">{ind.desc}</p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-spring-500 dark:text-spring-400 hover:text-spring-600 transition-colors"
                  >
                    Discuss your sector requirements
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
              Our Process
            </p>
            <h2 className="text-3xl font-bold text-onyx-950 dark:text-onyx-50">
              Disciplined delivery from brief to cutover
            </h2>
            <p className="mt-3 text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed">
              Every project follows structured milestones with staging verification before production cutover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((p, i) => (
              <div
                key={p.step}
                className="bg-white dark:bg-onyx-800 p-6 rounded-xl border border-onyx-100 dark:border-onyx-700"
              >
                <span className="w-8 h-8 rounded-full bg-spring-500/10 border border-spring-500/30 flex items-center justify-center text-xs font-bold text-spring-400 mb-4">
                  0{i + 1}
                </span>
                <h3 className="font-bold text-onyx-950 dark:text-onyx-50 text-sm mb-2">{p.step}</h3>
                <p className="text-xs text-onyx-500 dark:text-onyx-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Engagement Baseline (Legacy R3,000 and R200-R300 deleted) */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-onyx-50 dark:bg-onyx-900 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
              Commercial Baseline
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-onyx-950 dark:text-onyx-50">
              Transparent service rates
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-onyx-500 dark:text-onyx-300">
              Standardized baseline rates. Custom scopes quoted after technical discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-onyx-800 rounded-xl p-8 border border-onyx-100 dark:border-onyx-700">
              <span className="text-xs font-bold uppercase tracking-wider text-spring-400 bg-spring-500/10 px-2.5 py-1 rounded">
                Website Engineering
              </span>
              <p className="text-3xl font-extrabold text-onyx-950 dark:text-onyx-50 mt-4">
                Starting at R8,500
              </p>
              <p className="mt-2 text-xs text-onyx-500 dark:text-onyx-300 leading-relaxed">
                Full Next.js web application build, Cloudflare CDN integration, domain configuration, and Brevo contact form handling.
              </p>
            </div>

            <div className="bg-white dark:bg-onyx-800 rounded-xl p-8 border border-spring-500/40 shadow-[0_0_24px_rgba(2,245,161,0.08)]">
              <span className="text-xs font-bold uppercase tracking-wider text-spring-400 bg-spring-500/10 px-2.5 py-1 rounded">
                Managed Hosting &amp; Stewardship
              </span>
              <p className="text-3xl font-extrabold text-onyx-950 dark:text-onyx-50 mt-4">
                Starting at R750<span className="text-base font-normal text-onyx-400">/mo</span>
              </p>
              <p className="mt-2 text-xs text-onyx-500 dark:text-onyx-300 leading-relaxed">
                Vercel edge hosting, uptime monitoring, automated SSL renewal, dependency auditing, and monthly infrastructure health reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-950 border-t border-onyx-800 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-onyx-50">Ready to build on a solid foundation?</h2>
          <p className="mt-3 text-onyx-300 text-sm sm:text-base max-w-md mx-auto">
            Tell us about your digital infrastructure needs and we&apos;ll prepare an architectural recommendation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-8 py-3.5 rounded-lg bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
          >
            Initiate Technical Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
