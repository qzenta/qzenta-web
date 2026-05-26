"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const stats = [
  { value: "11+", label: "Domains" },
  { value: "5+",  label: "Projects" },
  { value: "4+",  label: "Sectors" },
  { value: "24h", label: "Response" },
];

const panels = [
  {
    number: "01",
    title: "Web Development & Deployment",
    desc: "Next.js + Vercel + Cloudflare. Fast, modern websites built to last and deployed correctly from day one.",
    href: "/solutions#web",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "02",
    title: "Domain & Hosting Management",
    desc: "We register, configure, and maintain your domains — no downtime, no missed renewals.",
    href: "/solutions#domains",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "03",
    title: "Tech Infrastructure for SMEs",
    desc: "GitHub, email, DNS, SSL, and CI/CD pipelines — set up correctly, once. The foundation everything else runs on.",
    href: "/solutions#infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "04",
    title: "Ongoing Maintenance & Support",
    desc: "Your tech stack managed month to month. Updates, monitoring, and rapid incident response.",
    href: "/solutions#support",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HeroPanels() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {/* ── Split Hero ── */}
      <section className="relative bg-[#1a2236] overflow-hidden">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #2d4060 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 grid lg:grid-cols-2 min-h-[78vh]">

          {/* Left: copy */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-28 pb-16 lg:py-0">
            <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-8">
              Quietly Excellent &nbsp;·&nbsp; IT Services &nbsp;·&nbsp; South Africa
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#f1f5f9] leading-[1.08] tracking-tight max-w-xl">
              Digital infrastructure for{" "}
              <span className="text-emerald-400">ambitious</span> African businesses
            </h1>
            <p className="mt-6 text-lg text-[#94a3b8] leading-relaxed max-w-lg">
              We build, deploy, and manage the tech foundations growing businesses depend on —
              managed service, not DIY.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="px-7 py-3.5 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors"
              >
                Our Solutions
              </Link>
              <Link
                href="/portfolio"
                className="px-7 py-3.5 rounded-md border border-emerald-500/60 hover:border-emerald-400 hover:bg-emerald-500/10 text-emerald-400 font-semibold text-sm transition-colors"
              >
                View Portfolio
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-0 gap-y-6">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center">
                  {i > 0 && (
                    <div className="hidden sm:block w-px h-10 bg-[#2d4060] mx-8" />
                  )}
                  <div className={i > 0 ? "sm:ml-0 ml-8" : ""}>
                    <p className="text-3xl font-extrabold text-emerald-400 leading-none">{s.value}</p>
                    <p className="text-xs text-[#64748b] uppercase tracking-[0.15em] mt-1">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image — desktop only */}
          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Glass office building"
              fill
              className="object-cover object-center"
              sizes="50vw"
              priority
            />
            {/* Dark base — keeps the navy feel */}
            <div className="absolute inset-0 bg-[#0d1829]/65" />
            {/* Left fade into text column */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a2236] via-[#1a2236]/50 to-transparent" />
            {/* Subtle emerald tint at bottom */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-emerald-900/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── BCX-style expanding service panels ── */}
      <div
        className="hidden lg:flex overflow-hidden border-t border-[#2d4060]"
        style={{ height: "clamp(300px, 38vw, 500px)" }}
        onMouseLeave={() => setActive(null)}
      >
        {panels.map((panel, i) => (
          <Link
            key={i}
            href={panel.href}
            className="relative overflow-hidden block"
            style={{
              flex: active === null ? 1 : active === i ? 4 : 0.65,
              transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              minWidth: 0,
            }}
            onMouseEnter={() => setActive(i)}
          >
            <Image
              src={panel.image}
              alt={panel.title}
              fill
              className="object-cover"
              sizes="25vw"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: "linear-gradient(to top, #0d1829 0%, rgba(13,24,41,0.7) 50%, rgba(13,24,41,0.25) 100%)",
                opacity: active === i ? 0.85 : 0.92,
              }}
            />

            {/* Emerald left border strip */}
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-500 transition-opacity duration-300"
              style={{ opacity: active === i ? 1 : 0 }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
              <span className="text-4xl font-extrabold text-white/12 select-none leading-none mb-3 block">
                {panel.number}
              </span>

              {/* Title: always visible, truncated when contracted */}
              <h3
                className="font-bold text-[#f1f5f9] text-base lg:text-lg leading-tight overflow-hidden transition-all duration-300"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: active === i ? 2 : 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  opacity: active !== null && active !== i ? 0.5 : 1,
                }}
              >
                {panel.title}
              </h3>

              {/* Description + CTA: only when active */}
              <div
                style={{
                  maxHeight: active === i ? "120px" : "0px",
                  opacity: active === i ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
                }}
              >
                <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed line-clamp-2">
                  {panel.desc}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile: 2×2 grid panels */}
      <div className="lg:hidden border-t border-[#2d4060]">
        <div className="grid grid-cols-2">
          {panels.map((panel, i) => (
            <Link
              key={i}
              href={panel.href}
              className="relative h-48 overflow-hidden block"
            >
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1829] via-[#0d1829]/60 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-2xl font-extrabold text-white/15 select-none leading-none mb-1 block">
                  {panel.number}
                </span>
                <h3 className="font-semibold text-[#f1f5f9] text-xs leading-tight">{panel.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
