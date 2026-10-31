import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AssessmentForm from "@/components/AssessmentForm";
import {
  PhoneIncoming,
  FileText,
  Shield,
  Bot,
  Check,
  ArrowRight,
  GitBranch,
  Lock,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Automation — Intelligent Agents & Business Workflows",
  description:
    "Autonomous AI agents and orchestrated n8n workflows that eliminate operational bottlenecks, capture every lead, and automate administrative tasks.",
  openGraph: { url: "https://www.qzenta.com/ai-automation" },
};

const agents = [
  {
    Icon: PhoneIncoming,
    name: "AI Reception & Lead Triage",
    desc: "Ingests incoming enquiries from web forms and WhatsApp, categorises intent, qualifies prospective clients, and routes directly to the right team member.",
    badge: "Operational Agent",
  },
  {
    Icon: FileText,
    name: "Automated Proposal Generation",
    desc: "Compiles enquiry data into branded, accurate project scopes, estimates, and proposal drafts within minutes of initial contact.",
    badge: "Workflow Pipeline",
  },
  {
    Icon: Shield,
    name: "Compliance & Statutory Monitoring",
    desc: "Autonomous monitoring workflows that verify submission milestones for VAT, PAYE, and CIPC deadlines, flagging compliance gaps before penalties arise.",
    badge: "Risk & Governance",
  },
  {
    Icon: Headphones,
    name: "AI Support & Knowledge Base",
    desc: "Answers customer enquiries around the clock using your verified documentation and product manuals — accurate, instant, and consistent.",
    badge: "24/7 Availability",
  },
  {
    Icon: Bot,
    name: "Bespoke Custom Agents",
    desc: "Engineered around your existing software and operational logic. Designed, tested, and deployed for your exact operational requirements.",
    badge: "Custom Architecture",
  },
];

const workflowPillars = [
  {
    Icon: GitBranch,
    title: "n8n Orchestration Pipelines",
    desc: "Self-hosted or cloud-managed workflow engines that guarantee data delivery, logging, and error alerting across all operational tools.",
    points: [
      "Multi-system synchronization (CRMs, databases, email, WhatsApp)",
      "Webhook-driven triggers and idempotent data queues",
      "Deterministic execution paths with zero unmonitored scripts",
    ],
  },
  {
    Icon: Lock,
    title: "Enterprise Guardrails & Human-in-the-Loop",
    desc: "Every automation is engineered with strict boundaries, data privacy protections, and manual review checkpoints where required.",
    points: [
      "No uncontrolled LLM outputs sent directly to clients without rules",
      "POPIA-aligned data handling with encrypted credential storage",
      "Instant manual override and fallback procedures",
    ],
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="Intelligent Automation"
        title="Autonomous AI Agents & Business Workflows"
        sub="Qzenta designs and deploys autonomous AI agents and intelligent process automations that eliminate administrative drag and scale operational throughput without expanding headcount."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Microchip circuit board and automated technology"
        overlay="from-[#0C2228]/92 via-[#0C2228]/75 to-[#0C2228]/45"
      />

      {/* Narrative Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-3">
            Operational Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-onyx-950 dark:text-onyx-50 tracking-tight leading-tight">
            Systems that handle the work between your applications.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-onyx-500 dark:text-onyx-300 leading-relaxed">
            Automation fails when it is built on brittle point-to-point scripts. Qzenta architects resilient workflow pipelines that connect your existing applications. Utilizing robust orchestration engines including n8n alongside modern LLM architectures, we build production workflows for automated lead qualification, intelligent enquiry routing, dynamic proposal generation, and cross-system data synchronization.
          </p>
        </div>
      </section>

      {/* Specialized Agents Catalog */}
      <section id="agents" className="px-4 sm:px-6 lg:px-8 py-16 bg-onyx-50 dark:bg-onyx-900 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
                Specialized Agents
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-onyx-950 dark:text-onyx-50">
                AI agents built for specific business functions
              </h2>
            </div>
            <p className="mt-3 md:mt-0 text-sm font-semibold text-spring-500 dark:text-spring-400">
              Starting from R35,000 once-off
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="bg-white dark:bg-onyx-800 rounded-xl p-7 border border-onyx-100 dark:border-onyx-700 hover:border-spring-500/40 hover:shadow-[0_0_24px_rgba(2,245,161,0.08)] transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-spring-500/10 border border-spring-500/25 flex items-center justify-center text-spring-500 dark:text-spring-400">
                    <agent.Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-onyx-400 dark:text-onyx-300 bg-onyx-100/50 dark:bg-onyx-900 px-2.5 py-1 rounded">
                    {agent.badge}
                  </span>
                </div>
                <h3 className="font-bold text-onyx-950 dark:text-onyx-50 text-base mb-2">
                  {agent.name}
                </h3>
                <p className="text-xs text-onyx-500 dark:text-onyx-300 leading-relaxed flex-1">
                  {agent.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-onyx-100 dark:border-onyx-700 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-spring-500 dark:text-spring-400 hover:text-spring-600 transition-colors"
                  >
                    Deploy this agent
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows & Orchestration */}
      <section id="workflows" className="px-4 sm:px-6 lg:px-8 py-20 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
              Workflow Architecture
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-onyx-950 dark:text-onyx-50">
              n8n orchestration pipelines &amp; secure integration
            </h2>
            <p className="mt-3 text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed">
              Workflow pipelines starting from R18,000. Custom multi-agent systems and high-throughput enterprise pipelines scoped on request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflowPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white dark:bg-onyx-800 rounded-xl p-8 border border-onyx-100 dark:border-onyx-700"
              >
                <div className="w-12 h-12 rounded-xl bg-spring-500/10 border border-spring-500/30 flex items-center justify-center text-spring-500 mb-6">
                  <pillar.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-onyx-950 dark:text-onyx-50 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed mb-6">
                  {pillar.desc}
                </p>
                <ul className="space-y-3">
                  {pillar.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-xs text-onyx-500 dark:text-onyx-300">
                      <Check className="w-4 h-4 text-spring-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Assessment Funnel */}
      <section id="assessment" className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-50 dark:bg-onyx-900 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-3">
            Automation Audit
          </p>
          <h2 className="text-3xl font-bold text-onyx-950 dark:text-onyx-50 mb-3">
            Identify your automation opportunities
          </h2>
          <p className="text-sm text-onyx-500 dark:text-onyx-300 mb-8 leading-relaxed max-w-lg mx-auto">
            Tell us about your business and we&apos;ll identify where AI agents and n8n workflows can eliminate manual bottlenecks and scale throughput.
          </p>
          <AssessmentForm />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-onyx-950 border-t border-onyx-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-onyx-50 mb-4">
            Ready to deploy intelligent automation?
          </h2>
          <p className="text-onyx-300 text-sm sm:text-base mb-8 leading-relaxed">
            Direct access to the engineers building your systems. No account managers, no junior handoffs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
          >
            Initiate Technical Inquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
