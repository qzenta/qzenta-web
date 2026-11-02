"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  Globe,
  Server,
  Building2,
  Rocket,
  Users,
  Briefcase,
  Layers,
  Link2,
  ShieldCheck,
  Sparkles,
  Bot,
  Zap,
  X,
  Menu,
} from "lucide-react";

type SubItem = {
  href: string;
  label: string;
  description: string;
  price?: string;
  Icon: React.ElementType;
};

type NavItem = {
  href: string;
  label: string;
  submenu?: SubItem[];
};

const mainNavItems: NavItem[] = [
  {
    href: "/solutions",
    label: "Solutions",
    submenu: [
      {
        href: "/solutions#web",
        label: "Website Engineering",
        description: "Next.js sites on Vercel with Cloudflare CDN protection",
        price: "from R8,500",
        Icon: Globe,
      },
      {
        href: "/solutions#domains",
        label: "Managed Hosting & Vercel",
        description: "Serverless edge infrastructure, monitoring, and uptime",
        price: "from R750/mo",
        Icon: Server,
      },
      {
        href: "/solutions#domains",
        label: "Domain Registration & DNS",
        description: "Register, configure, and maintain your domains end-to-end",
        price: "from R150",
        Icon: Link2,
      },
      {
        href: "/solutions#domains",
        label: "SSL & Cloudflare Security",
        description: "Certificates, DDoS mitigation, and edge protection",
        price: "included",
        Icon: ShieldCheck,
      },
      {
        href: "/solutions#industries",
        label: "Sector Solutions",
        description: "Tailored infrastructure for professional services, property & NGOs",
        Icon: Building2,
      },
    ],
  },
  {
    href: "/ai-automation",
    label: "AI & Automation",
    submenu: [
      {
        href: "/ai-automation#agents",
        label: "Autonomous AI Agents",
        description: "Receptionist, sales, proposals, compliance & custom",
        price: "from R35,000",
        Icon: Bot,
      },
      {
        href: "/ai-automation#workflows",
        label: "n8n Workflow Pipelines",
        description: "Automated follow-ups, admin tasks and system integrations",
        price: "from R18,000",
        Icon: Zap,
      },
      {
        href: "/#assessment",
        label: "AI Business Assessment",
        description: "Audit where automation saves time and eliminates bottlenecks",
        price: "free",
        Icon: Sparkles,
      },
    ],
  },
  {
    href: "/business-software",
    label: "Business Software",
    submenu: [
      {
        href: "/business-software",
        label: "Business Software Overview",
        description: "Next-generation integrated business applications",
        Icon: Layers,
      },
      {
        href: "/business-software#accounting",
        label: "Qzenta Accounting",
        description: "Modern cloud ledger and compliance software [In Development]",
        Icon: Briefcase,
      },
      {
        href: "/business-software#payroll",
        label: "Qzenta Payroll & HR",
        description: "Statutory payroll, PAYE and employee management [In Development]",
        Icon: Users,
      },
      {
        href: "/products",
        label: "Products & Innovation Lab",
        description: "Architectural blueprints, R&D progress, and beta roadmaps",
        Icon: Rocket,
      },
    ],
  },
  {
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    href: "/insights",
    label: "Insights",
  },
];

const utilityLeftItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Projects" },
  { href: "/insights", label: "Insights" },
];

function gridConfig(n: number) {
  if (n <= 2) return "grid-cols-1 sm:grid-cols-2 max-w-md";
  if (n === 3) return "grid-cols-1 sm:grid-cols-3 max-w-2xl";
  if (n === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl";
  if (n === 5) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-w-5xl";
  return "grid-cols-4 max-w-4xl";
}

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  const toggleMenu = (label: string) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  const activeItem = openMenu ? mainNavItems.find((n) => n.label === openMenu) : null;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      {/* Top Utility Bar */}
      <div className="hidden md:block border-b border-slate-100 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-medium">CIPC Registered (22 May 2026)</span>
            <span className="text-slate-600">&middot;</span>
            <span>Johannesburg, South Africa</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-3">
              {utilityLeftItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-slate-200 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <span className="text-slate-600">&middot;</span>
            <a
              href="mailto:info@qzenta.com"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              info@qzenta.com
            </a>
            <span className="text-slate-600">&middot;</span>
            <a
              href="https://github.com/qzenta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              GitHub: @qzenta
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center leading-none" onClick={() => setOpenMenu(null)}>
            <Image
              src="/brand/logo-wordmark.svg"
              alt="Qzenta, quietly excellent"
              width={134}
              height={44}
              className="h-9 lg:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-stretch gap-1">
            {mainNavItems.map((item) =>
              item.submenu ? (
                <button
                  key={item.label}
                  onClick={() => toggleMenu(item.label)}
                  className={`font-medium transition-colors whitespace-nowrap flex items-center gap-1 text-sm px-3 py-2 ${
                    isActive(item.href) || openMenu === item.label
                      ? "text-emerald-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
                  className={`font-medium transition-colors whitespace-nowrap text-sm px-3 py-2 flex items-center ${
                    isActive(item.href) ? "text-emerald-600" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/contact"
              onClick={() => setOpenMenu(null)}
              className="ml-3 self-center text-sm font-semibold px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-colors whitespace-nowrap shadow-sm"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Flyout Panel */}
      {openMenu && activeItem?.submenu && (
        <div className="hidden md:block border-t border-slate-100 bg-white shadow-lg animate-in fade-in duration-150">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className={`grid gap-2 mx-auto ${gridConfig(activeItem.submenu.length)}`}>
              {activeItem.submenu.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  onClick={() => setOpenMenu(null)}
                  className="group flex items-start gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <span className="shrink-0 w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                    <sub.Icon className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                      {sub.label}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                      {sub.description}
                    </p>
                    {sub.price && (
                      <p className="mt-1 text-xs font-semibold text-emerald-600">{sub.price}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 pb-5 bg-white shadow-lg">
          <div className="px-4 pt-3 pb-2">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-2 mb-1">
              Capabilities
            </p>
            <div className="space-y-1">
              <Link
                href="/solutions"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium py-2 px-2 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                Solutions (Digital Infrastructure)
              </Link>
              <Link
                href="/ai-automation"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium py-2 px-2 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                AI &amp; Automation (Agents &amp; Workflows)
              </Link>
              <Link
                href="/business-software"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium py-2 px-2 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                Business Software <span className="text-xs text-emerald-600 font-semibold">(In Development)</span>
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium py-2 px-2 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                Products &amp; Innovation Lab
              </Link>
            </div>

            <div className="my-3 border-t border-slate-100" />
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-2 mb-1">
              Company &amp; Proof
            </p>
            <div className="space-y-1">
              <Link
                href="/portfolio"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium py-2 px-2 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                Projects &amp; Portfolio
              </Link>
              <Link
                href="/insights"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium py-2 px-2 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                Technical Insights
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium py-2 px-2 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                About Qzenta
              </Link>
            </div>

            <div className="my-3 border-t border-slate-100" />
            <div className="space-y-2 pt-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-sm font-semibold px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
              >
                Get in Touch
              </Link>
              <div className="text-center pt-2">
                <a
                  href="mailto:info@qzenta.com"
                  className="text-xs text-slate-500 hover:text-emerald-600 font-medium"
                >
                  info@qzenta.com
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <p className="text-[11px] text-slate-400">
                CIPC Registered (22 May 2026) &middot; Daniel Amoah, Director
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
