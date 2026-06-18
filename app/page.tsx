import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import TrustBar from "@/components/TrustBar";
import ServiceTagMarquee from "@/components/ServiceTagMarquee";

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

      {/* ── Services — image-backed section ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-28 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1800&q=60"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-onyx-900/90" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-spring-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-onyx-50 mb-3">
            End-to-end digital infrastructure
          </h2>
          <p className="text-onyx-500 mb-8 max-w-xl leading-relaxed">
            Everything a growing business needs to build and maintain a credible digital presence —
            without the DIY headaches.
          </p>

          <ServiceTagMarquee />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.number}
                className="relative bg-onyx-800/80 backdrop-blur-sm rounded-lg p-6 border border-onyx-700 hover:border-spring-500/50 hover:shadow-[0_0_24px_rgba(2,245,161,0.1)] transition-all overflow-hidden group"
              >
                {/* Editorial number watermark */}
                <span
                  aria-hidden
                  className="absolute -top-3 -right-2 text-[7rem] font-black text-spring-500/8 select-none leading-none group-hover:text-spring-500/12 transition-colors"
                >
                  {s.number}
                </span>
                {/* Visible number pill */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-spring-500/10 border border-spring-500/30 text-xs font-bold text-spring-400 select-none">
                  {s.number}
                </span>
                <h3 className="mt-4 font-semibold text-onyx-50">{s.title}</h3>
                <p className="mt-2 text-sm text-onyx-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/solutions"
              className="text-sm text-spring-400 hover:text-spring-300 font-medium transition-colors"
            >
              All solutions →
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ── Portfolio — lighter background for contrast ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=60"
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-onyx-950/88" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-spring-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Recent Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-onyx-50 mb-3">
            Live projects. Real infrastructure.
          </h2>
          <p className="text-onyx-500 mb-12 max-w-xl leading-relaxed">
            Built and maintained under the Qzenta infrastructure umbrella — anonymised until public maturity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((p) => (
              <div
                key={p.name}
                className="bg-onyx-800/70 backdrop-blur-sm rounded-lg p-6 border border-onyx-700 hover:border-spring-500/40 transition-all"
              >
                <span className="inline-block text-xs font-semibold text-spring-400 bg-spring-500/10 px-3 py-1 rounded uppercase tracking-wide">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-semibold text-onyx-50">{p.name}</h3>
                <p className="mt-2 text-sm text-onyx-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/portfolio"
              className="text-sm text-spring-400 hover:text-spring-300 font-medium transition-colors"
            >
              Full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA — strong image with spring gradient ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1800&q=70"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
        {/* Deep spring-tinted overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C2228]/95 via-spring-950/80 to-[#0C2228]/90" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-spring-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Start a Project
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-onyx-50 tracking-tight">
            Ready to build something?
          </h2>
          <p className="mt-4 text-onyx-500 max-w-xl mx-auto leading-relaxed">
            Most clients are live within 5 working days. Get in touch today.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-md bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-3.5 rounded-md border border-white/20 hover:border-spring-500/50 text-onyx-500 hover:text-spring-400 font-semibold text-sm transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
