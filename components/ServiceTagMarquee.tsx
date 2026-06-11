const tags = [
  "Web Development",
  "Domain Management",
  "DNS & Cloudflare",
  "Email Infrastructure",
  "SSL Certificates",
  "CI/CD Pipelines",
  "Vercel Deployment",
  "GitHub Setup",
  "Tech Support",
  "SEO Foundations",
  "Performance Audits",
  "Security Monitoring",
  "Next.js",
  "Brevo Integration",
  "MailerLite",
  "Monthly Maintenance",
];

export default function ServiceTagMarquee() {
  const doubled = [...tags, ...tags];

  return (
    <div className="relative overflow-hidden py-6 border-y border-slate-200 dark:border-[#2d4060]">
      <div
        className="service-tag-scroll flex gap-4 items-center whitespace-nowrap"
        style={{ animation: "service-tag-marquee 28s linear infinite" }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full border border-slate-300 dark:border-[#2d4060] text-slate-500 dark:text-[#64748b] bg-transparent hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
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
        @media (prefers-reduced-motion: reduce) {
          .service-tag-scroll { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
