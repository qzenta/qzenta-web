"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const slides = [
  {
    headline: "Your digital foundation, built correctly from day one",
    sub: "Next.js websites, deployed on Vercel, protected by Cloudflare — fast, secure, and production-ready.",
    cta: { label: "Explore Solutions", href: "/solutions" },
    ctaSecondary: { label: "View Portfolio", href: "/portfolio" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
    alt: "Modern glass office building",
    tint: "from-[#0C2228]/70 via-[#0C2228]/40 to-transparent",
  },
  {
    headline: "Never worry about your tech stack again",
    sub: "Domains, email, DNS, SSL, and performance monitoring — all managed under one roof, month to month.",
    cta: { label: "What We Manage", href: "/solutions#support" },
    ctaSecondary: { label: "Get in Touch", href: "/contact" },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80",
    alt: "Server infrastructure in a data centre",
    tint: "from-[#0C2228]/80 via-[#0C2228]/50 to-[#0C2228]/20",
  },
  {
    headline: "5 live projects. 5 sectors. 11 domains managed.",
    sub: "From accounting practices to law firms to NGOs — Qzenta infrastructure is already running businesses like yours.",
    cta: { label: "Our Portfolio", href: "/portfolio" },
    ctaSecondary: { label: "Which sectors?", href: "/industries" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80",
    alt: "Network of connected nodes over city skyline",
    tint: "from-[#0C2228]/75 via-[#0C2228]/45 to-transparent",
  },
];

const stats = [
  { value: 11, suffix: "+", label: "Domains" },
  { value: 5,  suffix: "+", label: "Projects" },
  { value: 5,  suffix: "+", label: "Sectors" },
  { value: 24, suffix: "h", label: "Response" },
];

function StatItem({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const count = useCountUp(value, 1400, inView);
  return (
    <div>
      <p className="text-2xl font-extrabold text-spring-400 leading-none tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-xs text-onyx-500 uppercase tracking-[0.15em] mt-1">{label}</p>
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
      className="relative overflow-hidden min-h-[88vh] flex flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images — crossfade between slides */}
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
          <div className={`absolute inset-0 bg-gradient-to-l ${s.tint}`} />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0C2228] to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-spring-900/20 to-transparent" />
        </div>
      ))}

      {/* Content — right-aligned */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 sm:px-10 lg:px-20 pt-24 pb-12 text-right ml-auto max-w-3xl w-full">
        <p className="text-spring-400 text-xs font-semibold tracking-[0.3em] uppercase mb-8">
          Quietly Excellent &nbsp;·&nbsp; IT Infrastructure &nbsp;·&nbsp; Africa
        </p>

        <h1
          key={`h-${current}`}
          className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-onyx-50 leading-[1.08] tracking-tight"
          style={{ animation: "fadeSlideIn 0.6s ease both" }}
        >
          {slide.headline}
        </h1>

        <p
          key={`p-${current}`}
          className="mt-6 text-lg text-onyx-300 leading-relaxed ml-auto max-w-xl"
          style={{ animation: "fadeSlideIn 0.6s 0.1s ease both" }}
        >
          {slide.sub}
        </p>

        {/* Two CTAs: primary filled + secondary ghost */}
        <div className="mt-10 flex items-center justify-end gap-3 flex-wrap">
          <Link
            href={slide.cta.href}
            className="px-7 py-3.5 rounded-md bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors inline-block"
          >
            {slide.cta.label} →
          </Link>
          <Link
            href={slide.ctaSecondary.href}
            className="px-7 py-3.5 rounded-md border border-white/25 hover:border-spring-400/60 text-white/80 hover:text-spring-300 font-semibold text-sm transition-colors inline-block backdrop-blur-sm"
          >
            {slide.ctaSecondary.label}
          </Link>
        </div>

        {/* Dot navigation */}
        <div className="mt-10 flex items-center justify-end gap-3">
          <button
            onClick={() => go((current - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
            className="w-8 h-8 rounded-full border border-white/20 hover:border-spring-500/60 flex items-center justify-center text-white/40 hover:text-spring-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            aria-label="Next slide"
            className="w-8 h-8 rounded-full border border-white/20 hover:border-spring-500/60 flex items-center justify-center text-white/40 hover:text-spring-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats bar with animated counters */}
      <div
        ref={statsRef}
        className="relative z-10 border-t border-white/10 bg-[#0C2228]/60 backdrop-blur-sm px-6 sm:px-10 lg:px-20 py-5 flex flex-wrap items-center gap-x-0 gap-y-4"
      >
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center">
            {i > 0 && <div className="hidden sm:block w-px h-8 bg-white/10 mx-8" />}
            <div className={i > 0 ? "sm:ml-0 ml-8" : ""}>
              <StatItem value={s.value} suffix={s.suffix} label={s.label} inView={statsInView} />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
