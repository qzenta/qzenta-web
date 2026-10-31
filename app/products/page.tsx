import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  Rocket,
  GitBranch,
  ShieldAlert,
  ArrowRight,
  Code2,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Innovation — R&D, Roadmaps & Technology Lab",
  description:
    "Explore Qzenta's software engineering roadmap, internal R&D milestones, and pre-release platforms for African enterprises.",
  openGraph: { url: "https://www.qzenta.com/products" },
};

const roadmapPhases = [
  {
    phase: "Phase 01",
    status: "Private Alpha / In Development",
    title: "Qzenta Accounting Core Engine",
    desc: "AI-native financial ledger, automated bank feed reconciliation, and South African VAT201 preparation engine undergoing private technical validation.",
    badgeClass: "bg-spring-500/10 text-spring-400 border-spring-500/30",
  },
  {
    phase: "Phase 02",
    status: "Active Engineering",
    title: "Qzenta Payroll & Statutory Compliance",
    desc: "Automated monthly payroll, EMP201 computation, digital employee record management, and direct integration with Qzenta Accounting.",
    badgeClass: "bg-spring-500/10 text-spring-400 border-spring-500/30",
  },
  {
    phase: "Phase 03",
    status: "Architecture & Specification",
    title: "Unified African SME Management Suite",
    desc: "Integrated operations, CRM sync, workflow automations, and consolidated executive reporting into a cohesive business operating platform.",
    badgeClass: "bg-onyx-700/50 text-onyx-300 border-onyx-600",
  },
];

const labInitiatives = [
  {
    Icon: Cpu,
    title: "Autonomous Agent Guardrails",
    desc: "Engineering deterministic boundaries and human-in-the-loop review mechanisms for LLM agents operating within financial and legal workflows.",
  },
  {
    Icon: GitBranch,
    title: "Resilient n8n Workflow Pipelines",
    desc: "Designing hardened queue architectures and idempotent event processing for automated business operations without service interruption.",
  },
  {
    Icon: Code2,
    title: "Qzenta Group Incubations",
    desc: "Internal technology incubation for Qzenta group projects, delivering unified digital infrastructure, shared services, and modern software foundations.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="R&D, Roadmaps & Technology Lab"
        title="Products & Innovation"
        sub="A transparent look at Qzenta's software engineering lifecycle, internal R&D milestones, and upcoming platforms for African enterprises."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Modern high-tech workspace and software engineering lab"
        overlay="from-[#0C2228]/92 via-[#0C2228]/75 to-[#0C2228]/45"
      />

      {/* Engineering Notice */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-4 max-w-7xl mx-auto">
        <div className="bg-onyx-800/80 border border-onyx-700 rounded-xl p-6 sm:p-8 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-spring-500/10 border border-spring-500/30 flex items-center justify-center text-spring-400 shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-spring-500 text-onyx-950 px-2 py-0.5 rounded">
                Development Disclosure
              </span>
              <span className="text-xs text-onyx-300">Truth in Advertising &amp; Transparency</span>
            </div>
            <p className="text-sm text-onyx-200 leading-relaxed">
              Qzenta upholds an unambiguous boundary between live operational services and products in development. All software platforms detailed on this roadmap are currently in engineering and private development within our lab. They are not yet commercially released or operational in market.
            </p>
          </div>
        </div>
      </section>

      {/* Product Roadmap Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
            Engineering Milestones
          </p>
          <h2 className="text-3xl font-bold text-onyx-950 dark:text-onyx-50">
            Software Release Roadmap
          </h2>
          <p className="mt-3 text-sm sm:text-base text-onyx-500 dark:text-onyx-300 leading-relaxed">
            Our multi-year engineering commitment to building modern, robust, and compliance-forward business technology for growing African enterprises.
          </p>
        </div>

        <div className="space-y-6">
          {roadmapPhases.map((item) => (
            <div
              key={item.phase}
              className="bg-white dark:bg-onyx-800 rounded-xl p-8 border border-onyx-100 dark:border-onyx-700 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-spring-400 uppercase tracking-widest">
                    {item.phase}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeClass}`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-onyx-950 dark:text-onyx-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border border-spring-500/40 text-spring-400 hover:bg-spring-500/10 transition-colors"
                >
                  Register for Updates
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* R&D & Incubation Lab */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-50 dark:bg-onyx-900 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
              Technology Lab
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-onyx-950 dark:text-onyx-50">
              Active R&amp;D Initiatives
            </h2>
            <p className="mt-3 text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed">
              We continually explore emerging architectures, workflow patterns, and system reliability techniques before deploying them into production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {labInitiatives.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-onyx-800 rounded-xl p-7 border border-onyx-100 dark:border-onyx-700"
              >
                <div className="w-10 h-10 rounded-lg bg-spring-500/10 flex items-center justify-center text-spring-500 mb-4">
                  <item.Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-onyx-950 dark:text-onyx-50 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-onyx-500 dark:text-onyx-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Partner Program */}
      <section id="partners" className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-950 border-t border-onyx-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-spring-500/10 border border-spring-500/30 text-spring-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Rocket className="w-3.5 h-3.5" />
            Design Partner Program
          </div>
          <h2 className="text-3xl font-bold text-onyx-50 mb-4">
            Shape the future of African business software
          </h2>
          <p className="text-onyx-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            We are partnering with select South African accounting firms, payroll administrators, and SME leaders to test early alpha builds and provide feedback directly to our engineering team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
            >
              Apply as a Design Partner
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/business-software"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-onyx-700 hover:border-spring-500/40 text-onyx-200 font-semibold text-sm transition-colors"
            >
              Explore Business Software Suite
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
