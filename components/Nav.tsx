"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  Globe, Server, Cpu, Wrench,
  Briefcase, Building2, Rocket, Heart, Users,
  BookOpen, Laptop, Shield, Flag,
  Sparkles, Star, Layers,
  X, Menu,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

type SubItem = { href: string; label: string; description: string; Icon: React.ElementType };
type NavItem = { href: string; label: string; submenu?: SubItem[] };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/solutions",
    label: "Solutions",
    submenu: [
      { href: "/solutions#web",            label: "Web Development",   description: "Next.js sites on Vercel with Cloudflare CDN protection",          Icon: Globe    },
      { href: "/solutions#domains",        label: "Domain Management", description: "Register, configure, and maintain your domains end-to-end",         Icon: Server   },
      { href: "/solutions#infrastructure", label: "Tech Infrastructure",description: "GitHub, email, DNS, SSL, and CI/CD pipelines — set up right",     Icon: Cpu      },
      { href: "/solutions#support",        label: "Ongoing Support",   description: "Monthly maintenance, monitoring, and security patches",             Icon: Wrench   },
    ],
  },
  {
    href: "/industries",
    label: "Industries",
    submenu: [
      { href: "/industries#professional", label: "Professional Services", description: "Accountants, tax practitioners, and consultants",               Icon: Briefcase  },
      { href: "/industries#property",     label: "Property & Real Estate",description: "Estate agencies and property management firms",                 Icon: Building2  },
      { href: "/industries#saas",         label: "SaaS & Startups",       description: "Early-stage products that need to move fast",                  Icon: Rocket     },
      { href: "/industries#ngo",          label: "NGOs & Non-Profits",    description: "Community platforms with accessibility-first design",           Icon: Heart      },
      { href: "/industries#payroll",      label: "Payroll & HR",          description: "POPIA-compliant infrastructure for HR services",                Icon: Users      },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  {
    href: "/insights",
    label: "Insights",
    submenu: [
      { href: "/insights",                                          label: "All Articles",          description: "Guides on IT infrastructure, web, and digital presence",    Icon: BookOpen },
      { href: "/insights/sme-dedicated-it-partner",                label: "IT for SMEs",           description: "Why small businesses need a dedicated IT partner",           Icon: Laptop   },
      { href: "/insights/cloudflare-free-website-security",        label: "Free Website Security", description: "Protect your site with Cloudflare at no cost",               Icon: Shield   },
      { href: "/insights/registration-to-go-live-south-africa",    label: "Registration to Go-Live",description: "From CIPC registration to production deployment",           Icon: Flag     },
    ],
  },
  {
    href: "/about",
    label: "About",
    submenu: [
      { href: "/about#story",  label: "Our Story",       description: "How Qzenta was founded and what drives us",             Icon: Sparkles },
      { href: "/about#values", label: "What We Believe", description: "The principles behind every project we take on",        Icon: Star     },
      { href: "/about#stack",  label: "Our Stack",       description: "The standard tooling across every Qzenta project",      Icon: Layers   },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu]   = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close megamenu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on route change
  useEffect(() => { setOpenMenu(null); setMobileOpen(false); }, [pathname]);

  const toggleMenu = (label: string) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  const activeItem = openMenu ? navItems.find((n) => n.label === openMenu) : null;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white dark:bg-onyx-900 border-b border-onyx-100 dark:border-onyx-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2.5 leading-none" onClick={() => setOpenMenu(null)}>
            <Image src="/qzenta-icon.svg" alt="" width={32} height={32} className="h-8 w-8" aria-hidden />
            <span className="text-2xl lg:text-3xl font-extrabold tracking-tight">
              <span className="text-spring-500">Q</span>
              <span className="text-onyx-950 dark:text-onyx-50">zenta</span>
            </span>
            <span className="hidden lg:block text-[9px] font-semibold tracking-[0.22em] text-onyx-300 uppercase mt-0.5 self-end mb-0.5">
              Quietly Excellent
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-stretch gap-0">
            {navItems.map((item) =>
              item.submenu ? (
                <button
                  key={item.href}
                  onClick={() => toggleMenu(item.label)}
                  className={`text-sm font-medium px-3 py-2 transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isActive(item.href) || openMenu === item.label
                      ? "text-spring-700 dark:text-spring-400"
                      : "text-onyx-500 dark:text-onyx-300 hover:text-onyx-950 dark:hover:text-onyx-50"
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
                      ? "text-spring-700 dark:text-spring-400"
                      : item.href === "/" && isActive("/")
                      ? "text-spring-700 dark:text-spring-400"
                      : "text-onyx-500 dark:text-onyx-300 hover:text-onyx-950 dark:hover:text-onyx-50"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <ThemeToggle />
            <Link
              href="/contact"
              onClick={() => setOpenMenu(null)}
              className="ml-2 self-center text-sm font-medium px-4 py-2 rounded-md bg-spring-500 hover:bg-spring-600 text-onyx-950 transition-colors whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="p-1 text-onyx-500 dark:text-onyx-300 hover:text-onyx-950 dark:hover:text-onyx-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-width megamenu panel */}
      {openMenu && activeItem?.submenu && (
        <div className="hidden md:block border-t border-onyx-100 dark:border-onyx-700 bg-white dark:bg-onyx-900 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div
              className={`grid gap-2 ${
                activeItem.submenu.length === 3 ? "grid-cols-3" :
                activeItem.submenu.length === 5 ? "grid-cols-5" :
                "grid-cols-4"
              }`}
            >
              {activeItem.submenu.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => setOpenMenu(null)}
                  className="group flex items-start gap-3 p-4 rounded-xl hover:bg-onyx-50 dark:hover:bg-onyx-800 transition-colors"
                >
                  <span className="shrink-0 w-9 h-9 rounded-lg bg-spring-500/10 border border-spring-500/20 flex items-center justify-center text-spring-600 dark:text-spring-500 group-hover:bg-spring-500/20 transition-colors">
                    <sub.Icon className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-onyx-950 dark:text-onyx-50 group-hover:text-spring-700 dark:group-hover:text-spring-400 transition-colors leading-snug">
                      {sub.label}
                    </p>
                    <p className="mt-0.5 text-xs text-onyx-500 dark:text-onyx-300 leading-relaxed">
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
        <div className="md:hidden border-t border-onyx-100 dark:border-onyx-700 pb-4">
          <nav className="flex flex-col gap-1 px-4 sm:px-6 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 px-2 rounded transition-colors ${
                  isActive(item.href)
                    ? "text-spring-700 dark:text-spring-400 bg-spring-500/10"
                    : "text-onyx-500 dark:text-onyx-300 hover:text-onyx-950 dark:hover:text-onyx-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-sm font-medium px-4 py-2 rounded-md bg-spring-500 hover:bg-spring-600 text-onyx-950 text-center transition-colors"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
