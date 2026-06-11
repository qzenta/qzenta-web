"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    headline: "Your digital foundation, built correctly from day one",
    sub: "Next.js websites, deployed on Vercel, protected by Cloudflare — fast, secure, and production-ready.",
    cta: { label: "Explore Solutions →", href: "/solutions" },
    bg: (
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        aria-hidden
      >
        <defs>
          <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M10 30 H50 M30 10 V50 M10 10 L50 50 M50 10 L10 50" stroke="#10b981" strokeWidth="0.5" fill="none" />
            <circle cx="10" cy="30" r="2" fill="#10b981" />
            <circle cx="50" cy="30" r="2" fill="#10b981" />
            <circle cx="30" cy="10" r="2" fill="#10b981" />
            <circle cx="30" cy="50" r="2" fill="#10b981" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    ),
  },
  {
    headline: "Never worry about your tech stack again",
    sub: "Domains, email, DNS, SSL, and performance monitoring — all managed under one roof, month to month.",
    cta: { label: "See What We Manage →", href: "/solutions#support" },
    bg: (
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        aria-hidden
      >
        <defs>
          <pattern id="server" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect x="10" y="10" width="60" height="12" rx="2" stroke="#10b981" strokeWidth="0.6" fill="none" />
            <rect x="10" y="30" width="60" height="12" rx="2" stroke="#10b981" strokeWidth="0.6" fill="none" />
            <rect x="10" y="50" width="60" height="12" rx="2" stroke="#10b981" strokeWidth="0.6" fill="none" />
            <circle cx="62" cy="16" r="2" fill="#10b981" />
            <circle cx="62" cy="36" r="2" fill="#10b981" />
            <circle cx="62" cy="56" r="2" fill="#10b981" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#server)" />
      </svg>
    ),
  },
  {
    headline: "5 live projects. 4 sectors. 11 domains managed.",
    sub: "From accounting practices to law firms to NGOs — Qzenta infrastructure is already running businesses like yours.",
    cta: { label: "View Our Portfolio →", href: "/portfolio" },
    bg: (
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        aria-hidden
      >
        <defs>
          <pattern id="nodes" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="3" fill="#10b981" />
            <circle cx="80" cy="20" r="3" fill="#10b981" />
            <circle cx="50" cy="50" r="4" fill="#10b981" />
            <circle cx="20" cy="80" r="3" fill="#10b981" />
            <circle cx="80" cy="80" r="3" fill="#10b981" />
            <line x1="20" y1="20" x2="50" y2="50" stroke="#10b981" strokeWidth="0.5" />
            <line x1="80" y1="20" x2="50" y2="50" stroke="#10b981" strokeWidth="0.5" />
            <line x1="20" y1="80" x2="50" y2="50" stroke="#10b981" strokeWidth="0.5" />
            <line x1="80" y1="80" x2="50" y2="50" stroke="#10b981" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nodes)" />
      </svg>
    ),
  },
];

const stats = [
  { value: "11+", label: "Domains" },
  { value: "5+", label: "Projects" },
  { value: "5+", label: "Sectors" },
  { value: "24h", label: "Response" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [reducedMotion, paused]);

  const go = (i: number) => {
    setCurrent(i);
    if (timerRef.current) clearInterval(timerRef.current);
    if (!reducedMotion) {
      timerRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % slides.length);
      }, 5000);
    }
  };

  const slide = slides[current];

  return (
    <section
      className="relative bg-[#1a2236] overflow-hidden min-h-[82vh] flex flex-col justify-between"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background pattern */}
      {slide.bg}

      {/* Slide content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 sm:px-10 lg:px-20 pt-24 pb-12">
        <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-8">
          Quietly Excellent &nbsp;·&nbsp; IT Infrastructure &nbsp;·&nbsp; Africa
        </p>
        <h1
          key={current}
          className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-[#f1f5f9] leading-[1.08] tracking-tight max-w-2xl animate-fade-in"
        >
          {slide.headline}
        </h1>
        <p
          key={`sub-${current}`}
          className="mt-6 text-lg text-[#94a3b8] leading-relaxed max-w-xl animate-fade-in"
        >
          {slide.sub}
        </p>
        <div className="mt-10">
          <Link
            href={slide.cta.href}
            className="px-7 py-3.5 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors inline-block"
          >
            {slide.cta.label}
          </Link>
        </div>

        {/* Dot navigation */}
        <div className="mt-10 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all ${
                i === current
                  ? "w-6 h-2 bg-emerald-400"
                  : "w-2 h-2 bg-[#2d4060] hover:bg-emerald-500/50"
              }`}
            />
          ))}
          {/* Prev / Next */}
          <div className="ml-4 flex items-center gap-2">
            <button
              onClick={() => go((current - 1 + slides.length) % slides.length)}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full border border-[#2d4060] hover:border-emerald-500/60 flex items-center justify-center text-[#64748b] hover:text-emerald-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => go((current + 1) % slides.length)}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full border border-[#2d4060] hover:border-emerald-500/60 flex items-center justify-center text-[#64748b] hover:text-emerald-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-[#2d4060] px-6 sm:px-10 lg:px-20 py-6 flex flex-wrap items-center gap-x-0 gap-y-4">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center">
            {i > 0 && <div className="hidden sm:block w-px h-8 bg-[#2d4060] mx-8" />}
            <div className={i > 0 ? "sm:ml-0 ml-8" : ""}>
              <p className="text-2xl font-extrabold text-emerald-400 leading-none">{s.value}</p>
              <p className="text-xs text-[#64748b] uppercase tracking-[0.15em] mt-1">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
