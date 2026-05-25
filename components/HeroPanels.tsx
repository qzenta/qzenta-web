"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const panels = [
  {
    title: "Web Infrastructure",
    desc: "Modern, fast websites deployed on Vercel with Cloudflare protection — built to last.",
  },
  {
    title: "Domain Management",
    desc: "DNS, SSL, and registrar management handled end-to-end with zero downtime.",
  },
  {
    title: "SME Infrastructure",
    desc: "GitHub, email, CI/CD pipelines — the complete digital foundation, set up right from day one.",
  },
  {
    title: "Ongoing Support",
    desc: "Your tech stack, managed. Updates, security patches, and performance monitoring included.",
  },
];

// Sharp glass-and-steel office building — horizontal architecture, works well at 4:1 aspect ratio
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=90";

export default function HeroPanels() {
  const [active, setActive] = useState(1);

  return (
    <>
      {/* ── Desktop: 4-panel accordion over ONE shared building image ── */}
      <section className="hidden lg:block relative h-[70vh] min-h-[480px] overflow-hidden">
        {/* Shared background — ONE image behind all panels */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Modern glass office building"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            quality={90}
          />
          {/* Subtle base tint so text is readable on any panel */}
          <div className="absolute inset-0 bg-gray-900/40" />
        </div>

        {/* Brand tag — top left, above panels */}
        <div className="absolute top-8 left-10 z-20">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase">
            Quietly Excellent &nbsp;·&nbsp; IT Services &nbsp;·&nbsp; South Africa
          </p>
        </div>

        {/* 4 transparent overlay panels — background image shows through */}
        <div className="absolute inset-0 flex z-10">
          {panels.map((panel, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-end cursor-pointer"
              style={{
                flex: active === i ? 2.5 : 1,
                transition: "flex 500ms cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={() => setActive(i)}
            >
              {/* Per-panel overlay — lighter on active, darker on inactive */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background:
                    active === i
                      ? "rgba(17,24,39,0.15)"
                      : "rgba(17,24,39,0.55)",
                }}
              />

              {/* Emerald accent line between panels */}
              {i > 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-500 z-10" />
              )}

              {/* Panel content */}
              <div className="relative z-10 p-8 pb-10">
                <span className="text-xs font-semibold text-emerald-400 tracking-[0.3em] uppercase mb-3 block">
                  0{i + 1}
                </span>

                <h2
                  className={`font-bold text-white leading-tight transition-all duration-500 ${
                    active === i ? "text-3xl" : "text-xl"
                  }`}
                >
                  {panel.title}
                </h2>

                {/* Revealed only when this panel is active */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: active === i ? "140px" : "0px",
                    opacity: active === i ? 1 : 0,
                  }}
                >
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed max-w-xs">
                    {panel.desc}
                  </p>
                  <Link
                    href="/insights"
                    className="mt-5 inline-block border border-white text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 hover:bg-white hover:text-gray-900 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    EXPLORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mobile: full-bleed hero ── */}
      <section className="lg:hidden relative min-h-[88vh] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Qzenta — IT Infrastructure"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={90}
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
          <p className="mt-6 text-lg text-slate-200 max-w-sm leading-relaxed">
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
              className="px-7 py-3.5 rounded-md border border-white/30 hover:border-white/60 text-white font-semibold transition-colors text-sm"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
