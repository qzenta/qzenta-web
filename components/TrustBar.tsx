const partners = [
  { name: "Next.js", icon: "▲" },
  { name: "Vercel", icon: "△" },
  { name: "Cloudflare", icon: "☁" },
  { name: "Google Workspace", icon: "✉" },
  { name: "Brevo", icon: "✉" },
  { name: "GitHub", icon: "⬡" },
];

export default function TrustBar() {
  const doubled = [...partners, ...partners];

  return (
    <section className="bg-slate-100 dark:bg-onyx-900 border-t border-b border-slate-200 dark:border-spring-500/20 py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <p className="text-slate-500 dark:text-onyx-500 text-sm leading-relaxed max-w-2xl mx-auto">
          Accounting firms, law practices, NGOs, and property agencies across Gauteng trust Qzenta to keep their digital operations running.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div
          className="trustbar-scroll flex gap-16 items-center whitespace-nowrap"
          style={{
            animation: "trustbar-marquee 30s linear infinite",
          }}
        >
          {doubled.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 shrink-0 text-slate-500 dark:text-onyx-500 hover:text-spring-500 dark:hover:text-spring-400 transition-colors"
            >
              <span className="text-spring-500/60 text-lg">{p.icon}</span>
              <span className="text-sm font-semibold tracking-wide">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes trustbar-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .trustbar-scroll { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
