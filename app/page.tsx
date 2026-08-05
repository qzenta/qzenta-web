import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  UserMinus, Clock, Database, MessageSquare,
  Globe, Server, Users, Zap, Bot, Sparkles,
  PhoneIncoming, TrendingUp, FileText, MessageCircle, Shield,
  Briefcase, Layers, Rocket, Check, ArrowRight, ChevronDown,
} from "lucide-react";
import AssessmentForm from "@/components/AssessmentForm";
import { posts } from "@/lib/posts";

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
    href: "/#ai-agents",
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1800&q=80"
            alt="African business team collaborating with technology"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/75 to-slate-900/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        <div className="relative flex items-center min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-xl lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-emerald-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                AI-powered digital transformation for South African SMEs
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.06] tracking-tight">
                AI, Automation &amp; Digital Transformation{" "}
                <span className="text-emerald-400">for Growing Businesses</span>
              </h1>

              <p className="mt-6 text-lg text-slate-200 max-w-lg leading-relaxed">
                We build your digital presence, automate your workflows, and deploy AI agents that help
                your business scale -- without growing your headcount.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#assessment"
                  className="px-7 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-950/30"
                >
                  Get Your Free AI Business Assessment
                </a>
                <a
                  href="#how-it-works"
                  className="px-7 py-3.5 rounded-lg border border-white/30 hover:border-white/60 text-white font-semibold text-sm transition-colors backdrop-blur-sm"
                >
                  See How It Works
                </a>
              </div>

              <p className="mt-8 text-xs text-slate-300 tracking-wide">
                Trusted by businesses in accounting, legal, property &amp; education &nbsp;&middot;&nbsp; 100% South African
              </p>
            </div>
          </div>
        </div>

        <a
          href="#how-it-works"
          className="hidden sm:flex absolute bottom-6 inset-x-0 flex-col items-center gap-1 text-white/70 hover:text-white transition-colors text-[10px] font-semibold uppercase tracking-[0.2em]"
        >
          Scroll
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
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

      {/* Product Overview */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            What We Offer
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Everything you need, one place to start
          </h2>
          <p className="text-center text-sm text-slate-500 mb-14 max-w-xl mx-auto leading-relaxed">
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

      {/* Differentiator Banner */}
      <section
        className="relative bg-slate-900 px-4 sm:px-6 lg:px-8 py-20 sm:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(16,185,129,0.18) 0%, transparent 65%), #0f172a",
        }}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.25em] mb-5">
            Our Difference
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
            Direct to the builder.
            <br className="hidden sm:block" /> No account managers, no outsourcing, no handoffs.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
      <section id="ai-agents" className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-24">
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

      {/* Insights Feed */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            From the Blog
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Latest insights
          </h2>
          <p className="text-center text-sm text-slate-500 mb-14 max-w-xl mx-auto leading-relaxed">
            Practical guides on IT, AI and digital presence for South African businesses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex flex-col bg-white rounded-xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-2 leading-snug group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:gap-1.5 transition-all">
                  Read more
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
            >
              View all insights
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="bg-slate-50 border-y border-slate-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.25em] mb-6">
            Trusted Across Sectors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {sectors.map((tag) => (
              <span
                key={tag}
                className="text-sm font-medium text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/portfolio"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            See our work
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
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
