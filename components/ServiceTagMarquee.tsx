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
    <div className="relative overflow-hidden py-6 border-y border-onyx-100 dark:border-onyx-700">
      <div
        className="service-tag-scroll flex gap-4 items-center whitespace-nowrap"
        style={{ animation: "service-tag-marquee 28s linear infinite" }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full border border-onyx-100 dark:border-onyx-700 text-onyx-300 bg-transparent hover:border-spring-500/50 hover:text-spring-700 dark:hover:text-spring-400 transition-colors"
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
