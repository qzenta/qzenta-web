"use client";

import Link from "next/link";

const stats = [
  { value: "11+", label: "Domains" },
  { value: "5+",  label: "Projects" },
  { value: "4+",  label: "Sectors" },
  { value: "24h", label: "Response" },
];

function GeometricQ() {
  return (
    <svg
      viewBox="0 0 400 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[380px] mx-auto"
      aria-hidden="true"
    >
      {/* Grid dot texture */}
      {Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 48 + 16}
            cy={row * 48 + 16}
            r={1.5}
            fill="#2d4060"
          />
        ))
      )}

      {/* Subtle inner glow */}
      <rect x="80" y="60" width="220" height="220" rx="8" fill="#10b981" fillOpacity="0.04" />

      {/* Q outer frame */}
      <rect x="80" y="60" width="220" height="220" rx="8" stroke="#10b981" strokeWidth="14" />

      {/* Corner bracket accent — top-left */}
      <path d="M38 108 L38 60 L86 60" stroke="#10b981" strokeWidth="4" strokeLinecap="square" opacity="0.35" />

      {/* Corner bracket accent — bottom-right */}
      <path d="M302 232 L302 278 L256 278" stroke="#10b981" strokeWidth="4" strokeLinecap="square" opacity="0.35" />

      {/* Internal dashed cross — infrastructure grid feel */}
      <line x1="80"  y1="170" x2="300" y2="170" stroke="#10b981" strokeWidth="1" strokeDasharray="4 8" opacity="0.18" />
      <line x1="190" y1="60"  x2="190" y2="280" stroke="#10b981" strokeWidth="1" strokeDasharray="4 8" opacity="0.18" />

      {/* Q tail — bold diagonal strike */}
      <line x1="272" y1="252" x2="344" y2="336" stroke="#10b981" strokeWidth="14" strokeLinecap="square" />

      {/* Speed lines — right */}
      <line x1="318" y1="148" x2="390" y2="148" stroke="#10b981" strokeWidth="3"   strokeLinecap="square" />
      <line x1="328" y1="168" x2="380" y2="168" stroke="#10b981" strokeWidth="2"   strokeLinecap="square" opacity="0.55" />
      <line x1="338" y1="188" x2="368" y2="188" stroke="#10b981" strokeWidth="1.5" strokeLinecap="square" opacity="0.28" />

      {/* Speed lines — top */}
      <line x1="222" y1="18" x2="288" y2="18" stroke="#10b981" strokeWidth="2.5" strokeLinecap="square" opacity="0.45" />
      <line x1="244" y1="34" x2="294" y2="34" stroke="#10b981" strokeWidth="1.5" strokeLinecap="square" opacity="0.25" />

      {/* Diagonal accent — bottom-left */}
      <line x1="26" y1="316" x2="78" y2="262" stroke="#10b981" strokeWidth="2" strokeLinecap="square" opacity="0.2" />
    </svg>
  );
}

export default function HeroPanels() {
  return (
    <section className="relative flex items-center bg-[#1a2236] overflow-hidden">

      {/* Grid-dot background texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2d4060 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Emerald ambient glow — bottom right */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      {/* Emerald ambient glow — top left */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-500/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 lg:pt-28 lg:pb-16">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-4 items-center">

          {/* LEFT: copy */}
          <div>
            {/* Eyebrow label */}
            <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-8">
              Quietly Excellent &nbsp;·&nbsp; IT Services &nbsp;·&nbsp; South Africa
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-[#f1f5f9] leading-[1.08] tracking-tight max-w-2xl">
              Digital infrastructure for{" "}
              <span className="text-emerald-400">ambitious</span> African businesses
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg text-[#94a3b8] leading-relaxed max-w-xl">
              We build, deploy, and manage the tech foundations growing businesses depend on —
              managed service, not DIY.
            </p>

            {/* CTAs */}
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

            {/* Stats row */}
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

          {/* RIGHT: Geometric Q — desktop only */}
          <div className="hidden lg:flex items-center justify-center min-h-[400px]">
            <GeometricQ />
          </div>
        </div>
      </div>

      {/* Bottom edge fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none" />
    </section>
  );
}
