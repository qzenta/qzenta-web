"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SubItem = { href: string; label: string };
type NavItem = { href: string; label: string; submenu?: SubItem[] };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/solutions",
    label: "Solutions",
    submenu: [
      { href: "/solutions#web", label: "Web Development & Deployment" },
      { href: "/solutions#domains", label: "Domain & Hosting Management" },
      { href: "/solutions#infrastructure", label: "Tech Infrastructure" },
      { href: "/solutions#support", label: "Ongoing Support" },
    ],
  },
  {
    href: "/industries",
    label: "Industries",
    submenu: [
      { href: "/industries#professional", label: "Professional Services" },
      { href: "/industries#property", label: "Property & Real Estate" },
      { href: "/industries#saas", label: "SaaS & Startups" },
      { href: "/industries#ngo", label: "NGOs & Non-Profits" },
      { href: "/industries#payroll", label: "Payroll & HR" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  {
    href: "/insights",
    label: "Insights",
    submenu: [
      { href: "/insights", label: "All Articles" },
      { href: "/insights/sme-dedicated-it-partner", label: "IT for SMEs" },
      { href: "/insights/cloudflare-free-website-security", label: "Free Website Security" },
      { href: "/insights/registration-to-go-live-south-africa", label: "Registration to Go-Live" },
    ],
  },
  {
    href: "/about",
    label: "About",
    submenu: [
      { href: "/about#story", label: "Our Story" },
      { href: "/about#values", label: "What We Believe" },
      { href: "/about#stack", label: "Our Stack" },
    ],
  },
  {
    href: "/contact",
    label: "Contact",
    submenu: [
      { href: "/contact", label: "Get in Touch" },
      { href: "mailto:info@qzenta.com", label: "info@qzenta.com" },
    ],
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">

      {/* ── White logo strip ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 lg:h-20">
          <Link href="/" className="shrink-0 flex flex-col leading-none">
            <span className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              <span className="text-emerald-500">Q</span>
              <span className="text-[#0f172a]">zenta</span>
            </span>
            <span className="text-[10px] font-semibold tracking-[0.25em] text-gray-400 uppercase mt-0.5">
              Quietly Excellent
            </span>
          </Link>
        </div>
      </div>

      {/* ── Dark nav strip ── */}
      <div className="bg-[#1a2236] backdrop-blur-sm border-b border-[#2d4060]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14">

            {/* Mobile: wordmark on left */}
            <Link href="/" className="md:hidden shrink-0">
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-emerald-400">Q</span>
                <span className="text-white">zenta</span>
              </span>
            </Link>

            {/* Desktop nav — centred in the strip */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-0">
              {navItems.map((item) => (
                <div key={item.href} className="relative group flex items-center">
                  <Link
                    href={item.href}
                    className={`text-sm font-medium px-3 py-2 transition-colors whitespace-nowrap ${
                      isActive(item.href) && item.href !== "/"
                        ? "text-white"
                        : item.href === "/" && isActive("/")
                        ? "text-white"
                        : "text-[#94a3b8] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.submenu && (
                    <div
                      className={`
                        absolute top-full left-0
                        min-w-[230px]
                        bg-[#1a2236]
                        border-t-2 border-t-emerald-500
                        border-l border-r border-b border-[#2d4060]
                        shadow-2xl z-50 py-2
                        opacity-0 pointer-events-none
                        group-hover:opacity-100 group-hover:pointer-events-auto
                        transition-opacity duration-200
                      `}
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-5 py-2.5 text-sm text-[#94a3b8] hover:text-emerald-400 hover:bg-[#1e2d45] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/contact"
                className="ml-3 self-center text-sm font-medium px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white transition-colors whitespace-nowrap"
              >
                Get in Touch
              </Link>
            </nav>

            {/* Mobile: hamburger on right */}
            <button
              className="md:hidden ml-auto text-[#94a3b8] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile dropdown */}
          {mobileOpen && (
            <div className="md:hidden border-t border-[#2d4060] pt-4 pb-4">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-2 px-2 rounded transition-colors ${
                      isActive(item.href)
                        ? "text-white bg-[#1e2d45]"
                        : "text-[#94a3b8] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 text-sm font-medium px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-center transition-colors"
                >
                  Get in Touch
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>

    </header>
  );
}
