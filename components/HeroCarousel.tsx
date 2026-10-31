"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { Globe, GitBranch, Bot, ShieldCheck } from "lucide-react";

const slides = [
  {
    sub: "Next.js web applications on Vercel edge infrastructure, secured by Cloudflare — fast, reliable, and production-grade.",
    cta: { label: "Explore Solutions", href: "/solutions" },
    ctaSecondary: { label: "View Portfolio", href: "/portfolio" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
    alt: "Modern glass office building",
  },
  {
    sub: "Domains, DNS, SSL, transactional email, and performance monitoring — managed end-to-end under one roof.",
    cta: { label: "Digital Infrastructure", href: "/solutions#domains" },
    ctaSecondary: { label: "Get in Touch", href: "/contact" },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
    alt: "Modern open-plan office workspace",
  },
  {
    sub: "Production digital infrastructure, intelligent autonomous workflows, and modern business applications for ambitious enterprises.",
    cta: { label: "AI & Automation", href: "/ai-automation" },
    ctaSecondary: { label: "Business Software", href: "/business-software" },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80",
    alt: "Glass-fronted server rack in a modern data network facility",
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
    }, 5000);
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
      className="relative overflow-hidden flex flex-col hero-height"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images — crossfade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-onyx-950/40" />

      {/* Radial spring glow — centered accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(2,245,161,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-onyx-950 to-transparent" />

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center flex-1 px-6 sm:px-10 lg:px-20 pt-20 pb-6 max-w-4xl mx-auto w-full">
        <p className="text-spring-400 text-xs font-semibold tracking-[0.3em] uppercase mb-5">
          Quietly Excellent &nbsp;&middot;&nbsp; Business Technology &nbsp;&middot;&nbsp; South Africa
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-onyx-50 leading-[1.08] tracking-tight">
          Modern Business Technology,{" "}
          <span className="text-spring-400">engineered</span> to run quietly
        </h1>

        <p
          key={`sub-${current}`}
          className="mt-5 text-base sm:text-lg text-onyx-200 leading-relaxed max-w-2xl"
          style={{ animation: "subFadeIn 0.5s ease both" }}
        >
          {slide.sub}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <Link
            href={slide.cta.href}
            className="px-6 py-3 rounded-md bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors inline-block"
          >
            {slide.cta.label} &rarr;
          </Link>
          <Link
            href={slide.ctaSecondary.href}
            className="px-6 py-3 rounded-md border border-white/20 hover:border-spring-400/50 text-white hover:text-spring-300 font-semibold text-sm transition-colors inline-block backdrop-blur-sm"
          >
            {slide.ctaSecondary.label}
          </Link>
        </div>

        {/* Dot navigation */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => go((current - 1 + slides.length) % slides.length)}
            aria-label="Previous"
            className="w-7 h-7 rounded-full border border-white/20 hover:border-spring-500/60 flex items-center justify-center text-white/50 hover:text-spring-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-6 h-2 bg-spring-400" : "w-2 h-2 bg-white/30 hover:bg-spring-400/60"
              }`}
            />
          ))}
          <button
            onClick={() => go((current + 1) % slides.length)}
            aria-label="Next"
            className="w-7 h-7 rounded-full border border-white/20 hover:border-spring-500/60 flex items-center justify-center text-white/50 hover:text-spring-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Qualitative Capability Strip (Replacing numeric stat counters) */}
      <div className="relative z-10 border-t border-white/10 bg-onyx-950/75 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <c.Icon className="w-4 h-4 text-spring-400 shrink-0" />
                <p className="text-xs font-bold text-onyx-50 leading-tight">{c.title}</p>
              </div>
              <p className="text-[11px] text-onyx-300 leading-snug">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-height {
          height: 70dvh;
          min-height: 440px;
        }
        @media (min-width: 1024px) {
          .hero-height { height: 70dvh; }
        }
        @keyframes subFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
