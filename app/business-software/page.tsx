import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  Calculator,
  Users,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Software — Integrated SME Applications",
  description:
    "Next-generation business software engineered for African enterprises. Featuring Qzenta Accounting and Qzenta Payroll, currently in active development.",
  openGraph: { url: "https://www.qzenta.com/business-software" },
};

export default function BusinessSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Business Software & Innovation"
        title="Purpose-Built Business Software for the African Enterprise"
        sub="We are engineering integrated software applications that replace fragmented legacy tools with unified, AI-native management platforms."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Modern software dashboard on computer monitor"
        overlay="from-[#0C2228]/92 via-[#0C2228]/75 to-[#0C2228]/45"
      />

      {/* Engineering Notice / Transparency Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-4 max-w-7xl mx-auto">
        <div className="bg-spring-500/10 border border-spring-500/30 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="shrink-0 w-10 h-10 rounded-lg bg-spring-500/20 border border-spring-500/40 flex items-center justify-center text-spring-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-spring-500 text-onyx-950 px-2 py-0.5 rounded">
                  Engineering Notice
                </span>
                <span className="text-xs text-onyx-300 font-medium">Pre-Release Transparency</span>
              </div>
              <p className="text-sm text-onyx-200 leading-relaxed max-w-3xl">
                The software products detailed below are currently in active engineering within Qzenta&apos;s development lab. They are not yet commercially released. Prospective users may register interest in early access and roadmap updates.
              </p>
            </div>
          </div>
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border border-spring-500/40 text-spring-400 hover:bg-spring-500/20 transition-colors whitespace-nowrap"
          >
            View Product Roadmap
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Products in Development Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
            Flagship Platforms in Development
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-onyx-950 dark:text-onyx-50">
            Next-generation financial and operational technology
          </h2>
          <p className="mt-4 text-sm sm:text-base text-onyx-500 dark:text-onyx-300 leading-relaxed">
            Engineered from first principles to bridge the gap between day-to-day operations and statutory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Qzenta Accounting */}
          <div
            id="accounting"
            className="bg-white dark:bg-onyx-800 rounded-2xl p-8 sm:p-10 border border-onyx-100 dark:border-onyx-700 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-spring-500/10 border border-spring-500/30 flex items-center justify-center text-spring-500">
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-spring-400 bg-spring-500/10 border border-spring-500/30 px-3 py-1 rounded-full">
                  In Active Development
                </span>
              </div>

              <h3 className="text-2xl font-bold text-onyx-950 dark:text-onyx-50 mb-3">
                Qzenta Accounting
              </h3>
              <p className="text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed mb-6">
                Qzenta Accounting is an AI-native financial ledger and management platform currently in active engineering. Designed specifically around South African tax frameworks, multi-currency reporting, and automated reconciliation, it represents the future of SME financial technology. Currently undergoing private technical validation; not commercially available.
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-semibold text-onyx-950 dark:text-onyx-100 uppercase tracking-wide">
                  Architectural Highlights
                </h4>
                <ul className="space-y-2 text-xs text-onyx-500 dark:text-onyx-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-spring-500 mt-1.5 shrink-0" />
                    <span>Automated bank feed ingestion and invoice reconciliation engine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-spring-500 mt-1.5 shrink-0" />
                    <span>Native AI ledger auditing to surface discrepancies before tax submissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-spring-500 mt-1.5 shrink-0" />
                    <span>Built-in SARS VAT201 preparation and audit-trail logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-spring-500 mt-1.5 shrink-0" />
                    <span>Multi-tenant architecture with encrypted data isolation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-onyx-100 dark:border-onyx-700">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
              >
                Register for Accounting Updates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Qzenta Payroll */}
          <div
            id="payroll"
            className="bg-white dark:bg-onyx-800 rounded-2xl p-8 sm:p-10 border border-onyx-100 dark:border-onyx-700 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-spring-500/10 border border-spring-500/30 flex items-center justify-center text-spring-500">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-spring-400 bg-spring-500/10 border border-spring-500/30 px-3 py-1 rounded-full">
                  In Active Development
                </span>
              </div>

              <h3 className="text-2xl font-bold text-onyx-950 dark:text-onyx-50 mb-3">
                Qzenta Payroll &amp; HR
              </h3>
              <p className="text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed mb-6">
                Qzenta Payroll is a modern payroll, PAYE compliance, and employee administration system being developed to streamline statutory reporting and compensation management for African businesses. Built to natively integrate with Qzenta Accounting upon release. Currently in private development.
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-semibold text-onyx-950 dark:text-onyx-100 uppercase tracking-wide">
                  Architectural Highlights
                </h4>
                <ul className="space-y-2 text-xs text-onyx-500 dark:text-onyx-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-spring-500 mt-1.5 shrink-0" />
                    <span>Statutory EMP201 monthly calculation and automated reconciliation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-spring-500 mt-1.5 shrink-0" />
                    <span>POPIA-compliant digital employee records and payslip distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-spring-500 mt-1.5 shrink-0" />
                    <span>Direct integration with Qzenta Accounting for synchronized payroll journals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-spring-500 mt-1.5 shrink-0" />
                    <span>UIF, SDL, and ETI tracking with audit-ready reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-onyx-100 dark:border-onyx-700">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-spring-500/50 hover:bg-spring-500/10 text-spring-400 font-semibold text-sm transition-colors"
              >
                Register interest in early access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern SME Architecture Principles */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-50 dark:bg-onyx-900 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
              Engineering Principles
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-onyx-950 dark:text-onyx-50">
              Why we build proprietary business software
            </h2>
            <p className="mt-3 text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed">
              African businesses have long been forced to stitch together foreign tools that ignore local compliance and operational realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-onyx-800 rounded-xl p-7 border border-onyx-100 dark:border-onyx-700">
              <div className="w-10 h-10 rounded-lg bg-spring-500/10 flex items-center justify-center text-spring-500 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-onyx-950 dark:text-onyx-50 text-base mb-2">
                Unified Data Architecture
              </h3>
              <p className="text-xs text-onyx-500 dark:text-onyx-300 leading-relaxed">
                Operations, invoicing, payroll, and reporting exist in one synchronized environment. No manual CSV imports, no sync latency, and no duplicate data entry.
              </p>
            </div>

            <div className="bg-white dark:bg-onyx-800 rounded-xl p-7 border border-onyx-100 dark:border-onyx-700">
              <div className="w-10 h-10 rounded-lg bg-spring-500/10 flex items-center justify-center text-spring-500 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-onyx-950 dark:text-onyx-50 text-base mb-2">
                Statutory Compliance First
              </h3>
              <p className="text-xs text-onyx-500 dark:text-onyx-300 leading-relaxed">
                Purpose-built around South African regulatory frameworks: VAT, PAYE, EMP201, CIPC annual returns, and POPIA data protection guidelines.
              </p>
            </div>

            <div className="bg-white dark:bg-onyx-800 rounded-xl p-7 border border-onyx-100 dark:border-onyx-700">
              <div className="w-10 h-10 rounded-lg bg-spring-500/10 flex items-center justify-center text-spring-500 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-onyx-950 dark:text-onyx-50 text-base mb-2">
                Native AI Intelligence
              </h3>
              <p className="text-xs text-onyx-500 dark:text-onyx-300 leading-relaxed">
                AI is not bolted on as a novelty chatbot. It powers predictive cashflow modeling, automated transaction categorization, and proactive compliance warnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-onyx-950 border-t border-onyx-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-onyx-50 mb-4">
            Register interest in early access
          </h2>
          <p className="text-onyx-300 text-sm sm:text-base mb-8 leading-relaxed">
            Register interest in early access and roadmap updates for upcoming software releases.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
            >
              Register interest in early access
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-onyx-700 hover:border-spring-500/40 text-onyx-200 font-semibold text-sm transition-colors"
            >
              View Full Product Roadmap
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
