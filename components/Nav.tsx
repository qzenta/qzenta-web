"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  Globe, Server, Wrench,
  Briefcase, Building2, Rocket, Heart, Users,
  BookOpen, Laptop, Shield, ShieldCheck, Flag,
  Sparkles, Star, Layers, Link2, ShoppingBag,
  X, Menu, Bot, Zap,
} from "lucide-react";

type SubItem = { href: string; label: string; description: string; price?: string; Icon: React.ElementType };
type SubGroup = { heading: string; items: SubItem[] };
type NavItem = { href: string; label: string; submenu?: SubItem[]; submenuGroups?: SubGroup[] };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/solutions",
    label: "Solutions",
    submenuGroups: [
      {
        heading: "Websites",
        items: [
          { href: "/solutions#web", label: "Website Development", description: "Next.js sites on Vercel with Cloudflare CDN protection", price: "from R8,500", Icon: Globe },
          { href: "/contact",       label: "E-commerce & Catalogue Builds", description: "Online stores and product catalogues built to convert", price: "on request", Icon: ShoppingBag },
        ],
      },
      {
        heading: "Hosting & Domains",
        items: [
          { href: "/solutions#domains", label: "Managed Hosting",         description: "Vercel hosting, monitoring, and uptime -- handled for you", price: "from R750/mo", Icon: Server },
          { href: "/solutions#domains", label: "Domain Registration & DNS", description: "Register, configure, and maintain your domains end-to-end", price: "from R150", Icon: Link2 },
          { href: "/solutions#domains", label: "SSL & Security",           description: "Certificates and Cloudflare protection on every project", price: "included", Icon: ShieldCheck },
        ],
      },
      {
        heading: "Automation",
        items: [
          { href: "/#how-it-works", label: "Workflow Automation", description: "Automated follow-ups, admin tasks and system integrations", price: "from R18,000", Icon: Zap },
          { href: "/#how-it-works", label: "CRM & Lead Capture",  description: "Contact management, lead forms and pipeline tracking",       price: "included in Growth", Icon: Users },
        ],
      },
      {
        heading: "AI Agents",
        items: [
          { href: "/#ai-agents", label: "AI Agents", description: "Receptionist, sales, proposal, support, compliance & custom", price: "from R35,000", Icon: Bot },
        ],
      },
      {
        heading: "Services",
        items: [
          { href: "/contact",     label: "Custom Solutions",         description: "Built around what you already have",                     price: "on request", Icon: Wrench },
          { href: "/#assessment", label: "AI Business Assessment",   description: "Find out where AI and automation can save you time",     price: "free", Icon: Sparkles },
        ],
      },
    ],
  },
  {
    href: "/industries",
    label: "Industries",
    submenu: [
      { href: "/industries#professional", label: "Professional Services", description: "Accountants, tax practitioners, and consultants",             Icon: Briefcase  },
      { href: "/industries#property",     label: "Property & Real Estate",description: "Estate agencies and property management firms",               Icon: Building2  },
      { href: "/industries#saas",         label: "SaaS & Startups",       description: "Early-stage products that need to move fast",                Icon: Rocket     },
      { href: "/industries#ngo",          label: "NGOs & Non-Profits",    description: "Community platforms with accessibility-first design",         Icon: Heart      },
      { href: "/industries#payroll",      label: "Payroll & HR",          description: "POPIA-compliant infrastructure for HR services",              Icon: Users      },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  {
    href: "/insights",
    label: "Insights",
    submenu: [
      { href: "/insights",                                       label: "All Articles",           description: "Guides on IT, AI, and digital presence",                Icon: BookOpen },
      { href: "/insights/sme-dedicated-it-partner",             label: "IT for SMEs",            description: "Why small businesses need a dedicated IT partner",       Icon: Laptop   },
      { href: "/insights/cloudflare-free-website-security",     label: "Free Website Security",  description: "Protect your site with Cloudflare at no cost",           Icon: Shield   },
      { href: "/insights/registration-to-go-live-south-africa", label: "Registration to Go-Live",description: "From CIPC registration to production deployment",         Icon: Flag     },
    ],
  },
  {
    href: "/about",
    label: "About",
    submenu: [
      { href: "/about#story",  label: "Our Story",       description: "How Qzenta was founded and what drives us",        Icon: Sparkles },
      { href: "/about#values", label: "What We Believe", description: "The principles behind every project we take on",   Icon: Star     },
      { href: "/about#stack",  label: "Our Stack",       description: "The standard tooling across every Qzenta project", Icon: Layers   },
    ],
  },
  { href: "/contact", label: "Contact" },
];

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

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  const toggleMenu = (label: string) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  const activeItem = openMenu ? navItems.find((n) => n.label === openMenu) : null;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2.5 leading-none" onClick={() => setOpenMenu(null)}>
            <Image src="/qzenta-icon.svg" alt="" width={32} height={32} className="h-8 w-8" aria-hidden />
            <span className="text-2xl lg:text-3xl font-extrabold tracking-tight">
              <span className="text-emerald-500">Q</span>
              <span className="text-slate-900">zenta</span>
            </span>
            <span className="hidden lg:block text-[9px] font-semibold tracking-[0.22em] text-slate-400 uppercase mt-0.5 self-end mb-0.5">
              Quietly Excellent
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-stretch gap-0">
            {navItems.map((item) =>
              item.submenu || item.submenuGroups ? (
                <button
                  key={item.href}
                  onClick={() => toggleMenu(item.label)}
                  className={`text-sm font-medium px-3 py-2 transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isActive(item.href) || openMenu === item.label
                      ? "text-emerald-600"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
                  className={`text-sm font-medium px-3 py-2 transition-colors whitespace-nowrap ${
                    isActive(item.href) && item.href !== "/"
                      ? "text-emerald-600"
                      : item.href === "/" && isActive("/")
                      ? "text-emerald-600"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/contact"
              onClick={() => setOpenMenu(null)}
              className="ml-3 self-center text-sm font-semibold px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-colors whitespace-nowrap"
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

      {/* Full-width megamenu panel */}
      {openMenu && activeItem?.submenuGroups && (
        <div className="hidden md:block border-t border-slate-100 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-5 gap-6">
              {activeItem.submenuGroups.map((group) => (
                <div key={group.heading}>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {group.heading}
                  </p>
                  <div className="flex flex-col gap-1">
                    {group.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setOpenMenu(null)}
                        className="group flex items-start gap-2.5 p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <span className="shrink-0 mt-0.5 w-7 h-7 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                          <sub.Icon className="w-3.5 h-3.5" />
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
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full-width megamenu panel (flat, non-grouped items) */}
      {openMenu && activeItem?.submenu && (
        <div className="hidden md:block border-t border-slate-100 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div
              className={`grid gap-2 ${
                activeItem.submenu.length === 3 ? "grid-cols-3" :
                activeItem.submenu.length === 5 ? "grid-cols-5" :
                activeItem.submenu.length === 6 ? "grid-cols-3" :
                "grid-cols-4"
              }`}
            >
              {activeItem.submenu.map((sub) => (
                <Link
                  key={sub.href}
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 pb-4 bg-white">
          <nav className="flex flex-col gap-1 px-4 sm:px-6 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 px-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "text-emerald-600 bg-emerald-50"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-sm font-semibold px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-center transition-colors"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
