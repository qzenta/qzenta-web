import Link from "next/link";
import Image from "next/image";

const capabilityLinks = [
  { href: "/solutions", label: "Digital Infrastructure" },
  { href: "/ai-automation#agents", label: "Autonomous AI Agents" },
  { href: "/ai-automation#workflows", label: "n8n Workflow Pipelines" },
  { href: "/solutions#domains", label: "Managed Hosting & Vercel" },
  { href: "/solutions#infrastructure", label: "Cloud Integrations" },
];

const softwareDevLinks = [
  { href: "/business-software#accounting", label: "Qzenta Accounting (In Dev)" },
  { href: "/business-software#payroll", label: "Qzenta Payroll (In Dev)" },
  { href: "/business-software", label: "SME Application Suite" },
  { href: "/products", label: "Product Roadmap" },
  { href: "/contact", label: "Register interest in early access" },
];

const companyLinks = [
  { href: "/about", label: "About Qzenta" },
  { href: "/portfolio", label: "Projects & Architecture" },
  { href: "/about#stack", label: "Standard Tech Stack" },
  { href: "/about#values", label: "Operating Values" },
  { href: "/contact", label: "Direct Contact" },
];

const insightLinks = [
  { href: "/insights", label: "All Technical Guides" },
  { href: "/insights/sme-dedicated-it-partner", label: "SME IT Partner Guide" },
  { href: "/insights/cloudflare-free-website-security", label: "Cloudflare Security Guide" },
  { href: "/insights/registration-to-go-live-south-africa", label: "Registration to Go-Live" },
];

const legalLinks = [
  { href: "/popia", label: "POPIA Notice" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top brand header */}
        <div className="pb-10 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/brand/logo-wordmark.svg"
                alt="Qzenta, quietly excellent"
                width={110}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-2 text-sm text-slate-500 max-w-md leading-relaxed">
              AI-native business technology, software and automation. Built for ambitious enterprises.
            </p>
            <p className="mt-1 text-xs font-semibold text-emerald-600 uppercase tracking-widest">
              quietly excellent.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-xs font-semibold px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
            >
              Initiate Project Inquiry &rarr;
            </Link>
            <a
              href="mailto:info@qzenta.com"
              className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              info@qzenta.com
            </a>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12">
          {/* Col 1 -- Capabilities */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5">
              {capabilityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 -- Software in Dev */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
              Software in Dev
            </h3>
            <ul className="space-y-2.5">
              {softwareDevLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 -- Company & Proof */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
              Company &amp; Proof
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 -- Insights & Guides */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
              Insights &amp; Guides
            </h3>
            <ul className="space-y-2.5">
              {insightLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 -- Legal & Governance */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
              Legal &amp; Governance
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-500">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-100 text-slate-400">
                Information Officer: <span className="text-slate-600 font-medium">Daniel Amoah</span>
              </li>
              <li className="text-slate-400">
                CIPC Registered: <span className="text-slate-600 font-medium">22 May 2026</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 Qzenta (Pty) Ltd. Registered in the Republic of South Africa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/qzenta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-600 transition-colors"
            >
              GitHub: @qzenta
            </a>
            <span>&middot;</span>
            <span>Johannesburg, Gauteng</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
