import Link from "next/link";

const solutionLinks = [
  { href: "/solutions#web", label: "Web Development" },
  { href: "/solutions#domains", label: "Domain Management" },
  { href: "/solutions#infrastructure", label: "Tech Infrastructure" },
  { href: "/solutions#support", label: "Ongoing Support" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/popia", label: "POPIA Notice" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-onyx-700 bg-slate-100 dark:bg-onyx-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-spring-400">Q</span>
                <span className="text-slate-900 dark:text-white">zenta</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              IT infrastructure and web services for ambitious South African businesses.
              Family-operated. Boutique. Professional.
            </p>
          </div>

          {/* Col 2 — Solutions */}
          <div>
            <h3 className="text-xs font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-widest mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-spring-700 dark:hover:text-spring-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="text-xs font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Get in Touch */}
          <div>
            <h3 className="text-xs font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-widest mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:info@qzenta.com"
                  className="text-sm text-slate-400 hover:text-spring-400 transition-colors"
                >
                  info@qzenta.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/qzenta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
                >
                  github.com/qzenta
                </a>
              </li>
              <li>
                <span className="text-sm text-slate-500 dark:text-slate-500">South Africa</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block text-xs font-semibold px-4 py-2 rounded-md border border-spring-500/50 text-spring-400 hover:bg-spring-500 hover:text-onyx-950 hover:border-spring-500 transition-colors"
            >
              Start a project →
            </Link>
          </div>

        </div>

        {/* ── Bottom bar: copyright then legal links ── */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-onyx-700">
          <p className="text-xs text-slate-500 mb-3">
            &copy; 2026 Qzenta (Pty) Ltd. All rights reserved. South Africa.
          </p>
          <div className="flex flex-wrap gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
