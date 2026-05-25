"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const panels = [
  {
    title: "Web Infrastructure",
    desc: "Modern, fast websites deployed on Vercel with Cloudflare protection — built to last.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Domain Management",
    desc: "DNS, SSL, and registrar management handled end-to-end with zero downtime.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SME Infrastructure",
    desc: "GitHub, email, CI/CD pipelines — the complete digital foundation, set up right from day one.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Ongoing Support",
    desc: "Your tech stack, managed. Updates, security patches, and performance monitoring included.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HeroPanels() {
  const [active, setActive] = useState(1);

  return (
    <>
      {/* Desktop: 4-panel accordion */}
      <section className="hidden lg:flex h-screen min-h-[600px] max-h-[900px]">
        {panels.map((panel, i) => (
          <div
            key={i}
            className="relative overflow-hidden cursor-pointer"
            style={{
              flex: active === i ? 2.5 : 1,
              transition: "flex 500ms cubic-bezier(0.4,0,0.2,1)",
            }}
            onMouseEnter={() => setActive(i)}
          >
            {/* Background image */}
            <Image
              src={panel.image}
              alt={panel.title}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 25vw, 100vw"
              priority={i < 2}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gray-900/70" />

            {/* Emerald accent line — left edge of each panel except the first */}
            {i > 0 && (
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-500 z-10" />
            )}

            {/* Content — bottom aligned */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-14 z-10">
              <span className="text-xs font-semibold text-emerald-400 tracking-[0.3em] uppercase mb-3">
                0{i + 1}
              </span>

              <h2
                className={`font-bold text-white leading-tight transition-all duration-500 ${
                  active === i ? "text-3xl" : "text-xl"
                }`}
              >
                {panel.title}
              </h2>

              {/* Description + EXPLORE — visible on active panel */}
              <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: active === i ? "160px" : "0px",
                  opacity: active === i ? 1 : 0,
                }}
              >
                <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xs">
                  {panel.desc}
                </p>
                <Link
                  href="/insights"
                  className="mt-6 inline-block border border-white text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 hover:bg-white hover:text-gray-900 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Mobile: full-bleed hero */}
      <section className="lg:hidden relative min-h-[88vh] flex items-center overflow-hidden">
        <Image
          src={panels[1].image}
          alt="Qzenta IT Infrastructure"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/88 to-gray-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/20" />
        <div className="relative z-10 w-full px-6 py-28">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-6">
            Quietly Excellent &nbsp;·&nbsp; IT Services &nbsp;·&nbsp; South Africa
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-sm">
            Digital infrastructure for{" "}
            <span className="text-emerald-400">ambitious</span> African businesses
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-sm leading-relaxed">
            We build, deploy, and manage the digital foundations growing businesses depend on —
            managed service, not DIY.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/solutions"
              className="px-7 py-3.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-colors text-sm"
            >
              Our Solutions
            </Link>
            <Link
              href="/portfolio"
              className="px-7 py-3.5 rounded-md border border-white/25 hover:border-white/50 text-white font-semibold transition-colors text-sm"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
