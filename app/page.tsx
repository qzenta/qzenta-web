import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Qzenta — IT Infrastructure for Ambitious African Businesses",
  description:
    "Qzenta builds and manages digital infrastructure for ambitious African businesses. Web development, domain management, hosting, and ongoing technical support.",
};

const services = [
  {
    number: "01",
    title: "Web Development & Deployment",
    desc: "Modern, fast websites built with Next.js and deployed on Vercel with Cloudflare CDN.",
  },
  {
    number: "02",
    title: "Domain & Hosting Management",
    desc: "We register, configure, and maintain your domains so you never worry about downtime or renewals.",
  },
  {
    number: "03",
    title: "Tech Infrastructure for SMEs",
    desc: "GitHub, email, DNS, SSL, and deployment pipelines — all set up correctly, once.",
  },
  {
    number: "04",
    title: "Ongoing Maintenance",
    desc: "Your tech stack, managed. Updates, security patches, and performance monitoring included.",
  },
];

const portfolio = [
  {
    name: "Accounting Practice",
    desc: "Tax and accounting firm — multi-location marketing site with newsletter and email integration.",
    tag: "Professional Services",
  },
  {
    name: "Property Agency",
    desc: "Property services platform for a South African estate agency with contact form and DNS management.",
    tag: "Property",
  },
  {
    name: "Bookkeeping SaaS",
    desc: "Marketing and onboarding site for a bookkeeping SaaS platform with auth email and database integration.",
    tag: "SaaS",
  },
  {
    name: "Community NGO",
    desc: "Platform for an African diaspora NGO — email integration and membership management.",
    tag: "NGO",
  },
  {
    name: "Legal Services",
    desc: "Website and infrastructure for a legal services and faith organisation. Professional, accessible, Africa-first.",
    tag: "Legal · Faith",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* ── Services ── */}
      <section className="bg-[#111827] px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f1f5f9] mb-3">
            End-to-end digital infrastructure
          </h2>
          <p className="text-[#94a3b8] mb-12 max-w-xl leading-relaxed">
            Everything a growing business needs to build and maintain a credible digital presence —
            without the DIY headaches.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.number}
                className="bg-[#1e2d45] rounded-lg p-6 border border-[#2d4060] hover:border-emerald-500/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.08)] transition-all"
              >
                <span className="text-3xl font-extrabold text-emerald-500/20 select-none leading-none">
                  {s.number}
                </span>
                <h3 className="mt-4 font-semibold text-[#f1f5f9]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/solutions"
              className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              All solutions →
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ── Portfolio ── */}
      <section className="bg-[#1a2236] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#2d4060]">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Recent Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f1f5f9] mb-3">
            Live projects. Real infrastructure.
          </h2>
          <p className="text-[#94a3b8] mb-12 max-w-xl leading-relaxed">
            Built and maintained under the Qzenta infrastructure umbrella — anonymised until public maturity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((p) => (
              <div
                key={p.name}
                className="bg-[#1e2d45] rounded-lg p-6 border border-[#2d4060] hover:border-emerald-500/40 transition-all"
              >
                <span className="inline-block text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded uppercase tracking-wide">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-semibold text-[#f1f5f9]">{p.name}</h3>
                <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/portfolio"
              className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              Full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="bg-[#111827] px-4 sm:px-6 lg:px-8 py-28 border-t border-[#2d4060]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Start a Project
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f1f5f9] tracking-tight">
            Ready to build something?
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Most clients are live within 5 working days. Get in touch today.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-3.5 rounded-md border border-[#2d4060] hover:border-emerald-500/50 text-[#94a3b8] hover:text-emerald-400 font-semibold text-sm transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
