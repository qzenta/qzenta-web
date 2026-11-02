"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { Globe, GitBranch, Bot, ShieldCheck } from "lucide-react";

const slides = [
  {
    title: "Digital Infrastructure",
    eyebrow: "PILLAR 01 · DIGITAL INFRASTRUCTURE",
    sub: "Qzenta engineers and operates the foundational web, hosting, and cloud infrastructure required for reliable, high-performance business operations. We build modern, search-optimized web applications with Next.js, provision edge deployment and continuous delivery pipelines via Vercel, and secure every environment with enterprise Cloudflare DNS, SSL, and DDoS mitigation.",
    cta: { label: "Explore Solutions", href: "/solutions" },
    ctaSecondary: { label: "View Portfolio", href: "/portfolio" },
    svgType: "infrastructure",
  },
  {
    title: "Intelligent Automation",
    eyebrow: "PILLAR 02 · INTELLIGENT AUTOMATION",
    sub: "Qzenta designs and deploys autonomous AI agents and intelligent process automations that eliminate administrative drag and scale operational throughput without expanding headcount, utilizing robust orchestration engines including n8n alongside modern LLM architectures.",
    cta: { label: "Explore AI & Automation", href: "/ai-automation" },
    ctaSecondary: { label: "Free Assessment", href: "/#assessment" },
    svgType: "automation",
  },
  {
    title: "Business Software",
    eyebrow: "PILLAR 03 · BUSINESS SOFTWARE [ IN DEVELOPMENT ]",
    sub: "Qzenta develops next-generation business applications engineered specifically for growing enterprises. Our flagship software products — Qzenta Accounting and Qzenta Payroll — are currently in active engineering and private development.",
    cta: { label: "View Software Roadmap", href: "/business-software" },
    ctaSecondary: { label: "Register for Updates", href: "/business-software" },
    svgType: "software",
  },
];

const capabilities = [
  {
    Icon: Globe,
    title: "Edge Infrastructure",
    detail: "Next.js & Vercel with Cloudflare perimeter security",
  },
  {
    Icon: GitBranch,
    title: "Process Automation",
    detail: "Resilient n8n workflow orchestration pipelines",
  },
  {
    Icon: Bot,
    title: "Autonomous Agents",
    detail: "Specialized AI agents for enquiry triage and operations",
  },
  {
    Icon: ShieldCheck,
    title: "Continuous Stewardship",
    detail: "Proactive maintenance, dependency audits & health reports",
  },
];

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 7000);
  };

  useEffect(() => {
    if (reducedMotion || paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reducedMotion, paused]);

  const go = (i: number) => {
    setCurrent(i);
    if (!reducedMotion) startTimer();
  };

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden flex flex-col hero-height bg-slate-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        // Only unpause if focus leaves the carousel entirely
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
      tabIndex={0}
      aria-label="Qzenta Capability Carousel"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(16,185,129,0.2) 0%, transparent 70%), linear-gradient(135deg, #0f172a 0%, #111827 55%, #1e293b 100%)",
        }}
      />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      {/* Main Content Area with aria-live polite */}
      <div
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between flex-1 px-6 sm:px-10 lg:px-20 pt-16 pb-6 max-w-7xl mx-auto w-full gap-8"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Left column: text content */}
        <div className="max-w-2xl text-left">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            {slide.eyebrow}
          </p>

          <h1
            key={`title-${current}`}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ animation: reducedMotion ? "none" : "fadeInSlide 0.5s ease both" }}
          >
            {slide.title}
          </h1>

          <p
            key={`sub-${current}`}
            className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl"
            style={{ animation: reducedMotion ? "none" : "fadeInSlide 0.6s ease both" }}
          >
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <Link
              href={slide.cta.href}
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-950/30 inline-block focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {slide.cta.label} &rarr;
            </Link>
            <Link
              href={slide.ctaSecondary.href}
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-emerald-400/50 text-white hover:text-emerald-300 font-semibold text-sm transition-colors inline-block backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {slide.ctaSecondary.label}
            </Link>
          </div>

          {/* Controls: Prev, Dots, Next */}
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={() => go((current - 1 + slides.length) % slides.length)}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full border border-white/20 hover:border-emerald-400 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}: ${slides[i].title}`}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                    i === current ? "w-8 h-2.5 bg-emerald-400" : "w-2.5 h-2.5 bg-white/30 hover:bg-emerald-400/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go((current + 1) % slides.length)}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full border border-white/20 hover:border-emerald-400 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <span className="text-xs text-slate-400 ml-2 font-mono">
              {current + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* Right column: Inline SVG Illustration with slow float animation (transform & opacity only) */}
        <div
          key={`svg-${current}`}
          className="w-full max-w-sm lg:max-w-md flex items-center justify-center"
          style={{
            animation: reducedMotion ? "none" : "floatSVG 6s ease-in-out infinite",
          }}
        >
          {slide.svgType === "infrastructure" && (
            <svg
              viewBox="0 0 400 320"
              className="w-full h-auto drop-shadow-[0_15px_30px_rgba(16,185,129,0.25)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="40" y="40" width="320" height="240" rx="16" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
              <rect x="60" y="70" width="280" height="40" rx="8" fill="#1e293b" />
              <circle cx="85" cy="90" r="6" fill="#10b981" />
              <circle cx="105" cy="90" r="6" fill="#38bdf8" />
              <rect x="130" y="84" width="120" height="12" rx="4" fill="#64748b" />
              <rect x="60" y="130" width="280" height="40" rx="8" fill="#1e293b" />
              <circle cx="85" cy="150" r="6" fill="#10b981" />
              <circle cx="105" cy="150" r="6" fill="#38bdf8" />
              <rect x="130" y="144" width="160" height="12" rx="4" fill="#64748b" />
              <rect x="60" y="190" width="280" height="40" rx="8" fill="#1e293b" />
              <circle cx="85" cy="210" r="6" fill="#10b981" />
              <circle cx="105" cy="210" r="6" fill="#38bdf8" />
              <rect x="130" y="204" width="90" height="12" rx="4" fill="#64748b" />
            </svg>
          )}

          {slide.svgType === "automation" && (
            <svg
              viewBox="0 0 400 320"
              className="w-full h-auto drop-shadow-[0_15px_30px_rgba(56,189,248,0.25)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="40" y="40" width="320" height="240" rx="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="100" cy="160" r="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="100" cy="160" r="12" fill="#38bdf8" />
              <path d="M135 160H220" stroke="#10b981" strokeWidth="3" strokeDasharray="6 6" />
              <circle cx="255" cy="160" r="45" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
              <path d="M240 160l10 10 20-20" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="80" y="70" width="240" height="24" rx="6" fill="#1e293b" />
              <text x="100" y="87" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold">n8n workflow pipeline</text>
            </svg>
          )}

          {slide.svgType === "software" && (
            <svg
              viewBox="0 0 400 320"
              className="w-full h-auto drop-shadow-[0_15px_30px_rgba(16,185,129,0.25)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="40" y="40" width="320" height="240" rx="16" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
              <rect x="60" y="65" width="280" height="30" rx="6" fill="#1e293b" />
              <circle cx="78" cy="80" r="4" fill="#ef4444" />
              <circle cx="92" cy="80" r="4" fill="#f59e0b" />
              <circle cx="106" cy="80" r="4" fill="#10b981" />
              <rect x="130" y="74" width="100" height="12" rx="4" fill="#64748b" />
              <rect x="60" y="110" width="130" height="70" rx="8" fill="#1e293b" />
              <text x="75" y="135" fill="#10b981" fontSize="11" fontWeight="bold">Qzenta Accounting</text>
              <text x="75" y="155" fill="#94a3b8" fontSize="10">[ In Development ]</text>
              <rect x="210" y="110" width="130" height="70" rx="8" fill="#1e293b" />
              <text x="225" y="135" fill="#38bdf8" fontSize="11" fontWeight="bold">Qzenta Payroll</text>
              <text x="225" y="155" fill="#94a3b8" fontSize="10">[ In Development ]</text>
              <rect x="60" y="200" width="280" height="50" rx="8" fill="#1e293b" />
              <text x="75" y="230" fill="#cbd5e1" fontSize="11">Cloud-native South African SME suite</text>
            </svg>
          )}
        </div>
      </div>

      {/* Qualitative Capability Strip at bottom */}
      <div className="relative z-10 border-t border-white/10 bg-slate-900/90 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
          {capabilities.map((c) => (
            <div key={c.title} className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-left">
              <div className="flex items-center gap-2 mb-1">
                <c.Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                <p className="text-xs font-bold text-white leading-tight">{c.title}</p>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-height {
          min-height: 520px;
        }
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSVG {
          0%, 100% { transform: translateY(0px); opacity: 0.92; }
          50%      { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
