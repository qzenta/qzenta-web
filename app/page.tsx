import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Qzenta — IT Infrastructure for South African Businesses",
  description:
    "Qzenta builds and manages web infrastructure for ambitious South African businesses. Web development, domain management, hosting, and ongoing support.",
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
    name: "Payroll Solutions Provider",
    desc: "Website and email infrastructure for a South African payroll outsourcing firm. POPIA-compliant.",
    tag: "Payroll · HR",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed with background image */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1800&q=80"
            alt="African business professionals collaborating in a modern office"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Left-heavy dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/88 to-gray-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-7xl mx-auto">
            <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              Quietly Excellent &nbsp;·&nbsp; IT Services &nbsp;·&nbsp; South Africa
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-3xl">
              Digital infrastructure for{" "}
              <span className="text-emerald-400">ambitious</span> African businesses
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
              We build, deploy, and manage the digital foundations growing businesses depend on
              — from domains and hosting to full web development. Managed service, not DIY.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-colors text-sm"
              >
                Our Services
              </Link>
              <Link
                href="/portfolio"
                className="px-7 py-3.5 rounded-md border border-white/25 hover:border-white/50 text-white font-semibold transition-colors text-sm"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-gray-800 border-b border-gray-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-4">
            {[
              { value: "11+", label: "Domains managed" },
              { value: "5+", label: "Projects delivered" },
              { value: "4+", label: "Sectors served" },
              { value: "24h", label: "Response commitment" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-emerald-400">{s.value}</p>
                <p className="text-xs text-slate-400 mt-0.5 tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-100 mb-3">What we do</h2>
          <p className="text-slate-400 mb-10 max-w-xl">
            End-to-end IT support for businesses that want to move fast without breaking things.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.number}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <span className="text-3xl font-bold text-emerald-500/25 select-none">
                  {s.number}
                </span>
                <h3 className="mt-4 font-semibold text-slate-100">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="text-sm text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
            >
              All services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-100 mb-3">Recent work</h2>
          <p className="text-slate-400 mb-10 max-w-xl">
            Live projects built and maintained under the Qzenta infrastructure umbrella.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((p) => (
              <div
                key={p.name}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-semibold text-slate-100">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/portfolio"
              className="text-sm text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
            >
              Full portfolio &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Ready to build something?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto leading-relaxed">
            Whether you need a new website, help with your infrastructure, or ongoing technical
            support — we&apos;re here for it.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-8 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
