import type { Metadata } from "next";
import Link from "next/link";
import {
  UserMinus,
  Clock,
  Database,
  MessageSquare,
  Globe,
  Server,
  Zap,
  Bot,
  Sparkles,
  Check,
  ArrowRight,
  Shield,
  Code2,
  GitBranch,
} from "lucide-react";
import AssessmentForm from "@/components/AssessmentForm";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Qzenta — AI-Native Business Technology, Software & Automation",
  description:
    "We build digital infrastructure, deploy intelligent automation workflows, and develop next-generation business software for ambitious enterprises.",
  openGraph: { url: "https://www.qzenta.com" },
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const foundations = [
  {
    Icon: Code2,
    title: "Direct Builder Access",
    desc: "Work directly with experienced software and infrastructure engineers. No account managers, no junior handoffs.",
  },
  {
    Icon: Shield,
    title: "Enterprise Cloud Foundations",
    desc: "Standardised on Next.js, Vercel edge infrastructure, and enterprise Cloudflare security across every deployment.",
  },
  {
    Icon: GitBranch,
    title: "Intelligent Automation",
    desc: "Autonomous AI agents and n8n orchestration pipelines engineered with deterministic fallbacks and human-in-the-loop oversight.",
  },
  {
    Icon: Sparkles,
    title: "Full Code & Data Ownership",
    desc: "Complete administrative custody of repositories, DNS, and credentials. Managed by us, owned always by you.",
  },
];

const productOverview = [
  {
    Icon: Globe,
    name: "Website Engineering",
    desc: "High-performance Next.js web applications built for speed, SEO, and enterprise reliability.",
    price: "Starting at R8,500",
    href: "/solutions#web",
  },
  {
    Icon: Server,
    name: "Hosting & Domains",
    desc: "Managed Vercel edge deployment, domain lifecycle oversight, SSL, and DNS handled end-to-end.",
    price: "Starting at R750/mo",
    href: "/solutions#domains",
  },
  {
    Icon: Zap,
    name: "Workflow Automation",
    desc: "Resilient n8n workflow pipelines connecting CRMs, email, WhatsApp, and internal business logic.",
    price: "Starting at R18,000",
    href: "/ai-automation#workflows",
  },
  {
    Icon: Bot,
    name: "Autonomous AI Agents",
    desc: "Specialized agents for reception, lead triage, proposal generation, and statutory monitoring.",
    price: "Starting at R35,000",
    href: "/ai-automation#agents",
  },
  {
    Icon: Sparkles,
    name: "Business Software",
    desc: "Cloud-native accounting and payroll software (Qzenta Accounting & Payroll) currently in active development.",
    price: "In Development",
    href: "/business-software",
  },
];

const sectors = [
  "Professional Services",
  "Commercial Property",
  "Technology & SaaS",
  "Non-Profit & NGOs",
  "Legal Practices",
];

const painPoints = [
  {
    Icon: UserMinus,
    title: "Lost leads from slow follow-up",
    desc: "Enquiries go cold while your team is busy delivering client work.",
  },
  {
    Icon: Clock,
    title: "Hours wasted on manual admin",
    desc: "Repetitive data entry, scheduling, and invoice reconciliation consume valuable hours.",
  },
  {
    Icon: Database,
    title: "Disconnected business software",
    desc: "Fragmented tools cause pipeline blind spots, sync errors, and compliance risks.",
  },
  {
    Icon: MessageSquare,
    title: "Slow client response times",
    desc: "Prospective clients wait hours for answers that intelligent systems could provide immediately.",
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
      "AI receptionist or triage agent",
      "Automated lead follow-up",
      "WhatsApp & Brevo integration",
      "Priority technical support",
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
      "Multiple autonomous AI agents",
      "Custom system integrations",
      "Dedicated engineering lead",
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
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Foundational Qualitative Pillars Strip */}
      <section className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundations.map((f) => (
              <div key={f.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                  <f.Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Operational Friction
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Sound familiar?
          </h2>
          <p className="text-center text-sm text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Most growing businesses struggle with disconnected tools, manual admin, and delayed client responses. We solve these challenges with engineered systems.
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

      {/* Three Capabilities & Product Overview */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Core Capabilities
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Three pillars of modern business capability
          </h2>
          <p className="text-center text-sm text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
            From production web infrastructure and autonomous AI workflows to integrated enterprise software, we provide the technical architecture growing businesses depend on.
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
                  Explore
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator Banner */}
      <section
        className="relative bg-slate-900 px-4 sm:px-6 lg:px-8 py-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(16,185,129,0.18) 0%, transparent 65%), #0f172a",
        }}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.25em] mb-3">
            The Qzenta Difference
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tight">
            Direct access to the engineers building your systems.
            <br className="hidden sm:block" /> No account managers, no junior handoffs, no administrative translation.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              "Boutique & direct access",
              "Radical stack consistency",
              "Structured milestone delivery",
              "Total client ownership",
            ].map((badge) => (
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

      {/* Packages & Engagement Models */}
      <section id="how-it-works" className="bg-slate-50 border-y border-slate-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            Engagement Packages
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Transparent pricing for defined project scopes
          </h2>
          <p className="text-center text-sm text-slate-500 mb-10">
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
            Tell us about your business and we&apos;ll identify where AI and automation
            can save you time and grow your revenue.
          </p>
          <AssessmentForm />
        </div>
      </section>

      {/* Direct Engagement CTA Strip */}
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
            Ready to build a quiet, reliable technology foundation?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed text-base sm:text-lg">
            Whether you need high-performance web infrastructure, custom workflow automation, or want to discuss our business software roadmap, we welcome a direct conversation.
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
