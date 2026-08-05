import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  UserMinus, Clock, Database, MessageSquare,
  Globe, Server, Zap, Bot, Sparkles,
  Check, ArrowRight,
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

const productOverview = [
  {
    Icon: Globe,
    name: "Website Development",
    desc: "A professional site built and live in days, not months.",
    price: "Starting at R8,500",
    href: "/solutions#web",
  },
  {
    Icon: Server,
    name: "Hosting & Domains",
    desc: "Your domain, hosting, SSL and email, handled.",
    price: "Starting at R750/mo",
    href: "/solutions#domains",
  },
  {
    Icon: Zap,
    name: "Workflow Automation",
    desc: "Stop losing leads to slow follow-up.",
    price: "Starting at R18,000",
    href: "/#how-it-works",
  },
  {
    Icon: Bot,
    name: "AI Agents",
    desc: "A receptionist, sales rep, or support agent that never sleeps.",
    price: "Starting at R35,000",
    href: "/solutions#ai-agents",
  },
  {
    Icon: Sparkles,
    name: "Custom Solutions",
    desc: "Built around what you already have.",
    price: "On request",
    href: "/contact",
  },
];

const sectors = ["Professional Services", "Property", "SaaS", "NGO", "Legal & Faith"];

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

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 65% 75% at 78% 45%, rgba(16,185,129,0.35) 0%, transparent 60%), linear-gradient(135deg, #0f172a 0%, #111827 55%, #1e293b 100%)",
        }}
      >
        <div className="relative flex items-center min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="max-w-7xl mx-auto w-full relative">
            <div className="max-w-xl lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-emerald-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-3 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                AI-powered digital transformation for South African SMEs
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] tracking-tight">
                AI, Automation &amp; Digital Transformation{" "}
                <span className="text-emerald-400">for Growing Businesses</span>
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-lg leading-relaxed">
                We build your digital presence, automate your workflows, and deploy AI agents that help
                your business scale -- without growing your headcount.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#assessment"
                  className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-950/30"
                >
                  Get Your Free AI Business Assessment
                </a>
                <a
                  href="#how-it-works"
                  className="px-6 py-3 rounded-lg border border-white/30 hover:border-white/60 text-white font-semibold text-sm transition-colors backdrop-blur-sm"
                >
                  See How It Works
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-300 tracking-wide">
                Trusted by businesses in accounting, legal, property &amp; education &nbsp;&middot;&nbsp; 100% South African
              </p>
            </div>

            {/* Floating illustration */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[200px] xl:w-[240px] pointer-events-none">
              <Image
                src="/hero-ai-illustration.png"
                alt=""
                width={860}
                height={1147}
                priority
                aria-hidden
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(16,185,129,0.25)]"
              />
            </div>
          </div>
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
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            The Problem
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Sound familiar?
          </h2>
          <p className="text-center text-sm text-slate-500 mb-8 max-w-xl mx-auto leading-relaxed">
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

      {/* Product Overview */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            What We Offer
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Everything you need, one place to start
          </h2>
          <p className="text-center text-sm text-slate-500 mb-8 max-w-xl mx-auto leading-relaxed">
            Know exactly what you need? Pick it below. Every service is priced up front -- no quote required to see where you stand.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {productOverview.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group flex flex-col bg-white rounded-xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                  <p.Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">{p.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{p.desc}</p>
                <p className="text-xs font-semibold text-slate-900 mb-3">{p.price}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:gap-1.5 transition-all">
                  Overview
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator Banner */}
      <section
        className="relative bg-slate-900 px-4 sm:px-6 lg:px-8 py-14 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(16,185,129,0.18) 0%, transparent 65%), #0f172a",
        }}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.25em] mb-3">
            Our Difference
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tight">
            Direct to the builder.
            <br className="hidden sm:block" /> No account managers, no outsourcing, no handoffs.
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {["Boutique & direct access", "Builds on your existing stack", "1-5 day delivery"].map((badge) => (
              <span
                key={badge}
                className="text-xs font-semibold text-emerald-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="how-it-works" className="bg-slate-50 border-y border-slate-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Packages
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Choose your transformation path
          </h2>
          <p className="text-center text-sm text-slate-500 mb-8">
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

      {/* Free AI Business Assessment */}
      <section id="assessment" className="bg-emerald-50 border-y border-emerald-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Free Assessment
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Get Your Free AI Business Assessment
          </h2>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed max-w-lg mx-auto">
            Tell us about your business and we&apos;ll identify exactly where AI and automation
            can save you time and grow your revenue -- no obligation.
          </p>
          <AssessmentForm />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-slate-900 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {sectors.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to transform your business?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed text-lg">
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
