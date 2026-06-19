"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const slides = [
  {
    sub: "Next.js websites on Vercel, protected by Cloudflare — fast, secure, and production-ready.",
    cta: { label: "Explore Solutions", href: "/solutions" },
    ctaSecondary: { label: "View Portfolio", href: "/portfolio" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
    alt: "Modern glass office building",
  },
  {
    sub: "Domains, email, DNS, SSL, and performance monitoring — all managed under one roof, month to month.",
    cta: { label: "What We Manage", href: "/solutions#support" },
    ctaSecondary: { label: "Get in Touch", href: "/contact" },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
    alt: "Modern open-plan office workspace",
  },
  {
    sub: "5 live projects across legal, NGO, SaaS, finance, and property — Qzenta infrastructure running right now.",
    cta: { label: "Our Portfolio", href: "/portfolio" },
    ctaSecondary: { label: "Which sectors?", href: "/industries" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80",
    alt: "Network of connected nodes over city skyline",
  },
];

const stats = [
  { value: 11, suffix: "+", label: "Domains",  detail: "Managed across multiple clients & sectors" },
  { value: 5,  suffix: "+", label: "Projects",  detail: "Live sites built & actively maintained" },
  { value: 5,  suffix: "+", label: "Sectors",   detail: "Legal, NGO, SaaS, finance & more" },
  { value: 24, suffix: "h", label: "Response",  detail: "Average support turnaround time" },
];

function StatCard({ stat, inView }: { stat: typeof stats[number]; inView: boolean }) {
  const count = useCountUp(stat.value, 1400, inView);
  return (
    <div className="stat-flip-card">
      <div className="stat-flip-inner">
        <div className="stat-flip-front">
          <p className="text-2xl font-extrabold text-spring-400 leading-none tabular-nums">{count}{stat.suffix}</p>
          <p className="text-xs text-onyx-300 uppercase tracking-[0.15em] mt-1.5">{stat.label}</p>
        </div>
        <div className="stat-flip-back">
          <p className="text-xs text-onyx-50 text-center leading-relaxed px-1">{stat.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsInView(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="absolute inset-0 bg-onyx-950/60" />

      {/* Radial spring glow — centered accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(2,245,161,0.18) 0%, transparent 70%)" }}
      />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-onyx-950 to-transparent" />

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center flex-1 px-6 sm:px-10 lg:px-20 pt-20 pb-6 max-w-4xl mx-auto w-full">
        <p className="text-spring-400 text-xs font-semibold tracking-[0.3em] uppercase mb-6">
          Quietly Excellent &nbsp;·&nbsp; IT Infrastructure &nbsp;·&nbsp; Africa
        </p>

        {/* Static H1 with spring keyword */}
        <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-onyx-50 leading-[1.08] tracking-tight">
          Your digital foundation,{" "}
          <span className="text-spring-500">built</span> correctly from day one
        </h1>

        {/* Rotating subheadline */}
        <p
          key={`sub-${current}`}
          className="mt-5 text-base sm:text-lg text-onyx-300 leading-relaxed max-w-2xl"
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
            {slide.cta.label} →
          </Link>
          <Link
            href={slide.ctaSecondary.href}
            className="px-6 py-3 rounded-md border border-white/20 hover:border-spring-400/50 text-white/80 hover:text-spring-300 font-semibold text-sm transition-colors inline-block backdrop-blur-sm"
          >
            {slide.ctaSecondary.label}
          </Link>
        </div>

        {/* Dot navigation */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => go((current - 1 + slides.length) % slides.length)}
            aria-label="Previous"
            className="w-7 h-7 rounded-full border border-white/20 hover:border-spring-500/60 flex items-center justify-center text-white/40 hover:text-spring-400 transition-colors"
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
            className="w-7 h-7 rounded-full border border-white/20 hover:border-spring-500/60 flex items-center justify-center text-white/40 hover:text-spring-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div
        ref={statsRef}
        className="relative z-10 border-t border-white/10 bg-onyx-950/70 backdrop-blur-sm px-6 sm:px-10 lg:px-20 py-4"
      >
        <div className="grid grid-cols-4 gap-3 max-w-4xl mx-auto">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} inView={statsInView} />
          ))}
        </div>
      </div>

      <style>{`
        .hero-height {
          height: calc(100dvh - 4rem);
          min-height: 560px;
        }
        @media (min-width: 1024px) {
          .hero-height { height: calc(100dvh - 5rem); }
        }
        @keyframes subFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stat-flip-card { perspective: 600px; height: 76px; }
        .stat-flip-inner {
          position: relative; width: 100%; height: 100%;
          transition: transform 0.5s ease;
          transform-style: preserve-3d;
        }
        .stat-flip-card:hover .stat-flip-inner { transform: rotateY(180deg); }
        .stat-flip-front, .stat-flip-back {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          backface-visibility: hidden; -webkit-backface-visibility: hidden;
          border-radius: 0.5rem;
        }
        .stat-flip-front {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .stat-flip-back {
          background: rgba(2,245,161,0.14);
          border: 1px solid rgba(2,245,161,0.32);
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
