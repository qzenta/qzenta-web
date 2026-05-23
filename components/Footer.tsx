import Link from "next/link";

const pageLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="text-xl font-bold text-slate-100">
              <span className="text-emerald-500">Q</span>zenta
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              IT infrastructure and web services for ambitious South African businesses.
              Family-operated. Boutique. Professional.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-100 uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-100 uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@qzenta.com"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
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
            </ul>
            <div className="mt-6 flex gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-slate-500 hover:text-slate-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-slate-500">
          &copy; 2026 Qzenta (Pty) Ltd. All rights reserved. South Africa.
        </div>
      </div>
    </footer>
  );
}
