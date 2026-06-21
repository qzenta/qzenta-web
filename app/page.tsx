import type { Metadata } from "next";
import Link from "next/link";
import {
  UserMinus, Clock, Database, MessageSquare,
  Globe, Users, Zap, Bot,
  PhoneIncoming, TrendingUp, FileText, MessageCircle, Shield,
  Briefcase, Layers, Rocket,
} from "lucide-react";
import AssessmentForm from "@/components/AssessmentForm";

export const metadata: Metadata = {
  title: "Qzenta -- AI, Automation & Digital Transformation for Growing Businesses",
  description:
    "We build your digital presence, automate your workflows, and deploy AI agents that help your business scale without growing your headcount.",
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

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
    includes: "Website + hosting + domain setup + GBP",
    featured: false,
    badge: null,
  },
  {
    name: "Growth",
    setup: "R18,000",
    monthly: "R1,500",
    setupLabel: "once-off",
    monthlyLabel: "/mo",
    includes: "Website + CRM + 3 automation workflows",
    featured: false,
    badge: null,
  },
  {
    name: "AI Business",
    setup: "R35,000",
    monthly: "R3,000",
    setupLabel: "once-off",
    monthlyLabel: "/mo",
    includes: "Website + CRM + AI chatbot/receptionist",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "AI Workforce",
    setup: "Custom",
    monthly: "From R6,000",
    setupLabel: "quote",
    monthlyLabel: "/mo",
    includes: "Multiple AI agents, full transformation",
    featured: false,
    badge: "Enterprise",
  },
];

const agents = [
  {
    Icon: PhoneIncoming,
    name: "AI Receptionist",
    desc: "Receives, classifies and routes every enquiry automatically",
  },
  {
    Icon: TrendingUp,
    name: "AI Sales Agent",
    desc: "Qualifies leads and nurtures them to conversion",
  },
  {
    Icon: FileText,
    name: "AI Proposal Agent",
    desc: "Generates professional proposals from lead data",
  },
  {
    Icon: MessageCircle,
    name: "AI Support Agent",
    desc: "Answers client questions 24/7",
  },
  {
    Icon: Shield,
    name: "AI Compliance Agent",
    desc: "Keeps SA businesses on top of VAT, PAYE and CIPC deadlines",
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
      {/* ── Hero ── */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8 border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            AI-powered digital transformation for South African SMEs
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight">
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
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="bg-slate-50 border-y border-slate-100 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            The Problem
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-900 mb-12">
            Sound familiar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                  <p.Icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-2">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transformation Framework ── */}
      <section id="how-it-works" className="bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            The Framework
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-900 mb-14">
            How we transform your business
          </h2>

          <div className="flex flex-col md:flex-row gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex-1 relative md:pl-0 pl-10 pb-10 md:pb-0">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <>
                    <span className="absolute left-4 top-10 bottom-0 w-px bg-emerald-100 md:hidden" />
                    <span className="hidden md:block absolute top-5 left-1/2 right-0 h-px bg-emerald-100" />
                  </>
                )}

                <div className="md:text-center">
                  <div className="inline-flex md:flex md:justify-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 border-2 border-emerald-400 flex items-center justify-center relative z-10">
                      <step.Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">
                    Step {step.number}
                  </p>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed md:px-3">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="bg-slate-50 border-y border-slate-100 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Packages
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Choose your transformation path
          </h2>
          <p className="text-center text-sm text-slate-500 mb-12">
            All prices exclude VAT. Johannesburg market rates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-xl p-6 border flex flex-col transition-all ${
                  pkg.featured
                    ? "border-emerald-400 shadow-md shadow-emerald-500/10"
                    : "border-slate-100 hover:border-emerald-200 hover:shadow-sm"
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
                <div className="mb-5 pb-5 border-b border-slate-100">
                  <span className="text-xl font-bold text-emerald-600">{pkg.monthly}</span>
                  <span className="text-xs text-slate-400">{pkg.monthlyLabel}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed flex-1">{pkg.includes}</p>

                <Link
                  href="/contact"
                  className={`mt-5 block text-center text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors ${
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

      {/* ── AI Agent Showcase ── */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            AI Workforce
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Your AI agents, working around the clock
          </h2>
          <p className="text-center text-sm text-slate-500 mb-12 max-w-xl mx-auto">
            Each agent handles a specific business function -- autonomously, accurately, and at scale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="flex items-start gap-4 bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                  <agent.Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{agent.name}</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">{agent.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free AI Business Assessment ── */}
      <section id="assessment" className="bg-emerald-50 border-y border-emerald-100 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Free Assessment
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Get Your Free AI Business Assessment
          </h2>
          <p className="text-sm text-slate-500 mb-10 leading-relaxed">
            Tell us about your business and we&apos;ll identify exactly where AI and automation
            can save you time and grow your revenue -- no obligation.
          </p>
          <AssessmentForm />
        </div>
      </section>

      {/* ── Why Qzenta ── */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Why Qzenta
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-900 mb-12">
            Different by design
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div key={d.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                  <d.Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 leading-snug">{d.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="bg-slate-50 border-t border-slate-100 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Most clients are live within 5 working days. Get in touch today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
            <a
              href="#assessment"
              className="px-8 py-3.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-sm transition-colors"
            >
              Free Assessment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
