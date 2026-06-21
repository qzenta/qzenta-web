import type { Metadata } from "next";
import Link from "next/link";
import {
  UserMinus, Clock, Database, MessageSquare,
  Globe, Users, Zap, Bot,
  PhoneIncoming, TrendingUp, FileText, MessageCircle, Shield,
  Briefcase, Layers, Rocket, Check,
} from "lucide-react";
import AssessmentForm from "@/components/AssessmentForm";

export const metadata: Metadata = {
  title: "Qzenta -- AI, Automation & Digital Transformation for Growing Businesses",
  description:
    "We build your digital presence, automate your workflows, and deploy AI agents that help your business scale without growing your headcount.",
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const stats = [
  { value: "5-day", label: "Average delivery to live" },
  { value: "6+",    label: "Industries served" },
  { value: "10+",   label: "Domains under management" },
  { value: "24/7",  label: "AI agents uptime" },
];

const painPoints = [
  {
    Icon: UserMinus,
    title: "Lost leads from slow follow-up",
    desc: "Enquiries go cold while you are busy with client work.",
  },
  {
    Icon: Clock,
    title: "Hours wasted on manual admin",
    desc: "Data entry, scheduling and chasing documents eat your day.",
  },
  {
    Icon: Database,
    title: "Missed sales due to no CRM",
    desc: "No system means no pipeline visibility and no follow-up.",
  },
  {
    Icon: MessageSquare,
    title: "Poor customer response times",
    desc: "Clients wait hours for answers they could get instantly.",
  },
];

const steps = [
  {
    number: "01",
    Icon: Globe,
    title: "Digital Presence",
    desc: "Professional website, hosting, domain and Google Business Profile",
  },
  {
    number: "02",
    Icon: Users,
    title: "CRM & Lead Capture",
    desc: "Contact management, lead forms and pipeline tracking",
  },
  {
    number: "03",
    Icon: Zap,
    title: "Workflow Automation",
    desc: "Automated follow-ups, admin tasks and system integrations",
  },
  {
    number: "04",
    Icon: Bot,
    title: "AI Agents & Workforce",
    desc: "AI agents that handle enquiries, proposals and compliance 24/7",
  },
];

const packages = [
  {
    name: "Starter",
    setup: "R8,500",
    monthly: "R750",
    setupLabel: "once-off",
    monthlyLabel: "/mo",
    features: [
      "Professional Next.js website",
      "Domain registration & setup",
      "Cloudflare CDN + SSL",
      "Google Business Profile",
      "Monthly hosting & support",
    ],
    featured: false,
    badge: null,
  },
  {
    name: "Growth",
    setup: "R18,000",
    monthly: "R1,500",
    setupLabel: "once-off",
    monthlyLabel: "/mo",
    features: [
      "Everything in Starter",
      "CRM setup & configuration",
      "3 automation workflows",
      "Lead capture forms",
      "Pipeline reporting",
    ],
    featured: false,
    badge: null,
  },
  {
    name: "AI Business",
    setup: "R35,000",
    monthly: "R3,000",
    setupLabel: "once-off",
    monthlyLabel: "/mo",
    features: [
      "Everything in Growth",
      "AI receptionist or chatbot",
      "Automated lead follow-up",
      "WhatsApp integration",
      "Priority support",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "AI Workforce",
    setup: "Custom",
    monthly: "From R6,000",
    setupLabel: "quote",
    monthlyLabel: "/mo",
    features: [
      "Everything in AI Business",
      "Multiple AI agents deployed",
      "Custom system integrations",
      "Dedicated account manager",
      "Full transformation roadmap",
    ],
    featured: false,
    badge: "Enterprise",
  },
];

const agents = [
  {
    Icon: PhoneIncoming,
    name: "AI Receptionist",
    desc: "Receives, classifies and routes every enquiry automatically -- no human needed for triage.",
  },
  {
    Icon: TrendingUp,
    name: "AI Sales Agent",
    desc: "Qualifies leads, sends follow-ups and nurtures prospects to conversion around the clock.",
  },
  {
    Icon: FileText,
    name: "AI Proposal Agent",
    desc: "Generates professional, branded proposals from lead data in minutes, not hours.",
  },
  {
    Icon: MessageCircle,
    name: "AI Support Agent",
    desc: "Answers client questions 24/7 using your knowledge base -- accurate, instant, consistent.",
  },
  {
    Icon: Shield,
    name: "AI Compliance Agent",
    desc: "Keeps SA businesses on top of VAT, PAYE and CIPC deadlines so nothing slips through.",
  },
];

const differentiators = [
  {
    Icon: Briefcase,
    title: "We understand business, not just technology",
    desc: "Accounting, compliance and ops background means we solve real business problems -- not just technical ones.",
  },
  {
    Icon: Layers,
    title: "We build on your existing stack",
    desc: "No expensive new software. We integrate with what you already have and extend it intelligently.",
  },
  {
    Icon: Rocket,
    title: "We deliver in 1-5 working days, not months",
    desc: "Fast deployment without cutting corners. Most clients are live within the week.",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-white px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-28 sm:pb-36 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(16,185,129,0.07) 0%, transparent 65%), #ffffff",
        }}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8 border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            AI-powered digital transformation for South African SMEs
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-slate-900 leading-[1.07] tracking-tight">
            AI, Automation &amp; Digital Transformation{" "}
            <span className="text-emerald-500">for Growing Businesses</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            We build your digital presence, automate your workflows, and deploy AI agents that help
            your business scale -- without growing your headcount.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#assessment"
              className="px-7 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              Get Your Free AI Business Assessment
            </a>
            <a
              href="#how-it-works"
              className="px-7 py-3.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-colors"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-400 tracking-wide">
            Trusted by businesses in accounting, legal, property &amp; education &nbsp;&middot;&nbsp; 100% South African
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-slate-900 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="text-3xl font-extrabold text-emerald-400 tracking-tight">{s.value}</p>
                <p className="mt-1 text-xs text-slate-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            The Problem
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Sound familiar?
          </h2>
          <p className="text-center text-sm text-slate-500 mb-14 max-w-xl mx-auto leading-relaxed">
            Most growing South African businesses face the same four challenges. We solve all of them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-7 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-5">
                  <p.Icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-2">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Framework */}
      <section id="how-it-works" className="bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            The Framework
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            How we transform your business
          </h2>
          <p className="text-center text-sm text-slate-500 mb-16 max-w-xl mx-auto leading-relaxed">
            Four layers that build on each other -- from digital foundation to full AI workforce.
          </p>

          <div className="flex flex-col md:flex-row gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex-1 relative md:pl-0 pl-12 pb-12 md:pb-0">
                {i < steps.length - 1 && (
                  <>
                    <span className="absolute left-5 top-12 bottom-0 w-px bg-emerald-100 md:hidden" />
                    <span className="hidden md:block absolute top-6 left-1/2 right-0 h-px bg-emerald-100" />
                  </>
                )}

                <div className="md:text-center">
                  <div className="inline-flex md:flex md:justify-center mb-5">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-400 flex items-center justify-center relative z-10">
                      <step.Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1.5">
                    Step {step.number}
                  </p>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed md:px-4">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-slate-50 border-y border-slate-100 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Packages
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Choose your transformation path
          </h2>
          <p className="text-center text-sm text-slate-500 mb-14">
            All prices exclude VAT. Johannesburg market rates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-xl p-7 border flex flex-col transition-all duration-200 ${
                  pkg.featured
                    ? "border-emerald-400 shadow-lg shadow-emerald-500/10"
                    : "border-slate-100 hover:border-emerald-200 hover:shadow-md"
                }`}
              >
                {pkg.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-0.5 rounded-full border ${
                      pkg.featured
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : "bg-slate-900 text-white border-slate-900"
                    }`}
                  >
                    {pkg.badge}
                  </div>
                )}

                <h3 className="font-bold text-slate-900 text-lg mb-4">{pkg.name}</h3>

                <div className="mb-1">
                  <span className="text-2xl font-extrabold text-slate-900">{pkg.setup}</span>
                  <span className="text-xs text-slate-400 ml-1">{pkg.setupLabel}</span>
                </div>
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="text-xl font-bold text-emerald-600">{pkg.monthly}</span>
                  <span className="text-xs text-slate-400">{pkg.monthlyLabel}</span>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors ${
                    pkg.featured
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-600"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Showcase */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            AI Workforce
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Your AI agents, working around the clock
          </h2>
          <p className="text-center text-sm text-slate-500 mb-14 max-w-xl mx-auto leading-relaxed">
            Each agent handles a specific business function -- autonomously, accurately, and at scale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="flex items-start gap-4 bg-white rounded-xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-emerald-200 shadow-sm flex items-center justify-center">
                  <agent.Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{agent.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{agent.desc}</p>
                </div>
              </div>
            ))}
            <div className="sm:col-span-2 sm:max-w-md sm:mx-auto w-full">
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-emerald-200 shadow-sm flex items-center justify-center">
                  <Bot className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1.5">Custom AI Agent</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Need something specific? We design, train and deploy bespoke agents for your
                    exact business workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free AI Business Assessment */}
      <section id="assessment" className="bg-emerald-50 border-y border-emerald-100 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Free Assessment
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Get Your Free AI Business Assessment
          </h2>
          <p className="text-sm text-slate-500 mb-10 leading-relaxed max-w-lg mx-auto">
            Tell us about your business and we&apos;ll identify exactly where AI and automation
            can save you time and grow your revenue -- no obligation.
          </p>
          <AssessmentForm />
        </div>
      </section>

      {/* Why Qzenta */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Why Qzenta
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Different by design
          </h2>
          <p className="text-center text-sm text-slate-500 mb-16 max-w-xl mx-auto leading-relaxed">
            We are boutique by choice. Every client gets direct access to the person doing the work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {differentiators.map((d) => (
              <div key={d.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
                  <d.Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 leading-snug">{d.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-slate-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight">
            Ready to transform your business?
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed text-lg">
            Most clients are live within 5 working days. Get in touch today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
            <a
              href="#assessment"
              className="px-8 py-4 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold text-sm transition-colors"
            >
              Free Assessment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
