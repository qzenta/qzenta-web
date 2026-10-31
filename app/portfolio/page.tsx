import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { ArrowRight, Code2, Layers, Cpu, Server, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Portfolio — Technical Implementations & Architecture",
  description:
    "Explore Qzenta's technical implementations, system architectures, and group infrastructure deployments across South African business sectors.",
  openGraph: { url: "https://www.qzenta.com/portfolio" },
};

const deployments = [
  {
    title: "Multi-Practice Web & Communications Infrastructure",
    category: "Professional Services Architecture",
    desc: "Engineered a high-performance web platform on Next.js and Vercel edge infrastructure, backed by Cloudflare DNS and DDoS mitigation. Integrated Brevo transactional email routing and automated contact triage pipelines.",
    outcomes: "Sub-second edge asset delivery, zero-leak secrets handling, and automated branch previews for frictionless content updates.",
    stack: ["Next.js", "TypeScript", "Vercel", "Cloudflare", "Brevo API"],
    cover: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?auto=format&fit=crop&w=800&q=80",
    Icon: Server,
  },
  {
    title: "Commercial Property Platform & Lead Ingestion",
    category: "Property Sector Deployment",
    desc: "Migrated a commercial real estate platform to serverless edge architecture with zero-downtime DNS cutover. Configured SSL/TLS certificates and automated inquiry ingestion connecting web forms to CRM endpoints.",
    outcomes: "Eliminated legacy hosting bottlenecks, secured the perimeter against scraping bots, and engineered optimized lead delivery reliability.",
    stack: ["Next.js", "Vercel", "Cloudflare DNS", "Brevo", "Tailwind CSS"],
    cover: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
    Icon: Shield,
  },
  {
    title: "Autonomous Workflow Orchestration & Data Pipeline",
    category: "Intelligent Automation Deployment",
    desc: "Designed and deployed custom n8n orchestration pipelines to automate incoming inquiry triage, lead qualification, and dynamic proposal generation. Configured deterministic fallback rules and staff review gates.",
    outcomes: "Replaced manual data re-entry with idempotent webhook events, cutting proposal drafting turnaround and eliminating lost leads.",
    stack: ["n8n", "Webhooks", "PostgreSQL", "WhatsApp API", "LLM Workflows"],
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    Icon: Cpu,
  },
  {
    title: "Community Portal & Stakeholder Communications",
    category: "Non-Profit & NGO Architecture",
    desc: "Architected an accessibility-first community portal for a non-profit organisation. Built POPIA-compliant newsletter workflows, member registration forms, and reliable transactional messaging.",
    outcomes: "Provided a trustworthy digital presence with encrypted member correspondence and compliant subscriber consent management.",
    stack: ["Next.js", "Cloudflare", "Brevo", "MailerLite", "POPIA Guardrails"],
    cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    Icon: Layers,
  },
  {
    title: "Qzenta Group Incubations & Internal R&D Platforms",
    category: "Group Technology Infrastructure",
    desc: "Provisioned and managed core digital infrastructure, shared CI/CD pipelines, and domain architecture for internal Qzenta group projects (including TiqBooks, held as a technology incubation project). Houses pre-release testing for Qzenta Accounting and Qzenta Payroll, both currently in active engineering.",
    outcomes: "Unified development standards, shared security policies, and continuous validation of proprietary business software modules.",
    stack: ["Next.js", "Vercel", "Cloudflare", "n8n", "GitHub Enterprise"],
    cover: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    Icon: Code2,
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical Implementations & Systems"
        title="Projects & Portfolio"
        sub="Production architectures, digital infrastructure, and workflow automations deployed under the Qzenta engineering umbrella."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Modern city architecture and illuminated office buildings"
        overlay="from-[#0C2228]/92 via-[#0C2228]/75 to-[#0C2228]/45"
      />

      {/* Deployments Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
            Production Architectures
          </p>
          <h2 className="text-3xl font-bold text-onyx-950 dark:text-onyx-50">
            Systems built to operate quietly and reliably
          </h2>
          <p className="mt-3 text-sm sm:text-base text-onyx-500 dark:text-onyx-300 leading-relaxed">
            Every deployment reflects our commitment to radical stack consistency, direct builder engagement, and disciplined infrastructure stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {deployments.map((d) => (
            <div
              key={d.title}
              className="bg-white dark:bg-onyx-800 rounded-2xl border border-onyx-100 dark:border-onyx-700 overflow-hidden hover:border-spring-500/40 hover:shadow-[0_0_24px_rgba(2,245,161,0.08)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={d.cover}
                    alt={d.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#0C2228]/60" />
                  <span className="absolute top-4 left-4 text-xs font-semibold text-spring-400 uppercase tracking-wider bg-onyx-950/85 px-3 py-1 rounded-full border border-spring-500/30">
                    {d.category}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-onyx-950 dark:text-onyx-50 mb-3">
                    {d.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed mb-4">
                    {d.desc}
                  </p>

                  <div className="p-3.5 bg-onyx-50 dark:bg-onyx-900 rounded-lg border border-onyx-100 dark:border-onyx-700 mb-5">
                    <p className="text-[11px] font-semibold text-onyx-900 dark:text-onyx-200 uppercase tracking-wider mb-1">
                      Operational Outcome
                    </p>
                    <p className="text-xs text-onyx-500 dark:text-onyx-300 leading-relaxed">
                      {d.outcomes}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {d.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-[11px] font-medium bg-spring-500/10 text-spring-500 dark:text-spring-400 border border-spring-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-7 pb-6 pt-2 border-t border-onyx-100 dark:border-onyx-700">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-spring-500 dark:text-spring-400 hover:text-spring-600 transition-colors"
                >
                  Discuss similar architecture
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-950 border-t border-onyx-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-onyx-50 mb-4">
            Have a project requiring disciplined architecture?
          </h2>
          <p className="text-onyx-300 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Direct access to the engineers who design and maintain your infrastructure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
          >
            Initiate Project Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
