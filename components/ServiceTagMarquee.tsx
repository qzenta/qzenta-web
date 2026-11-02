const tags = [
  "Websites",
  "Hosting",
  "Domains",
  "AI agents",
  "n8n workflows",
  "Integrations",
  "Business automation",
  "Accounting technology (in development)",
  "Payroll technology (in development)",
];

export default function ServiceTagMarquee() {
  const doubled = [...tags, ...tags];

  return (
    <div
      className="relative overflow-hidden w-full max-w-full py-5 bg-slate-900 border-b border-slate-800"
      aria-hidden="true"
    >
      <div
        className="service-tag-scroll flex gap-6 items-center whitespace-nowrap w-max"
        style={{ animation: "service-tag-marquee 35s linear infinite" }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full border border-slate-700/80 text-slate-300 bg-white/5 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes service-tag-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .service-tag-scroll:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .service-tag-scroll {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
