import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Qzenta (Pty) Ltd.",
};

export default function TermsPage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100 transition-colors mb-8"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to home
      </Link>

      <h1 className="text-3xl font-bold text-slate-100 mb-2">Terms of Service</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: May 2026</p>

      <div className="space-y-6 text-slate-400 text-sm leading-relaxed">
        <p>
          By accessing or using the Qzenta website at www.qzenta.com, you agree to be bound by these
          Terms of Service. If you do not agree, please do not use this website.
        </p>

        <div>
          <h2 className="text-slate-100 font-semibold mb-2">Use of the website</h2>
          <p>
            This website is provided for informational purposes about Qzenta&apos;s services. You may not
            use this website for any unlawful purpose or in any way that could damage, disable, or
            impair the site.
          </p>
        </div>

        <div>
          <h2 className="text-slate-100 font-semibold mb-2">Intellectual property</h2>
          <p>
            All content on this website, including text, design, and code, is the property of Qzenta
            (Pty) Ltd and may not be reproduced without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="text-slate-100 font-semibold mb-2">Limitation of liability</h2>
          <p>
            Qzenta makes no warranties, expressed or implied, regarding this website or its content.
            Qzenta shall not be liable for any damages arising from the use of or inability to use
            this website.
          </p>
        </div>

        <div>
          <h2 className="text-slate-100 font-semibold mb-2">Governing law</h2>
          <p>
            These terms are governed by the laws of the Republic of South Africa. Any disputes shall
            be subject to the exclusive jurisdiction of the South African courts.
          </p>
        </div>

        <div>
          <h2 className="text-slate-100 font-semibold mb-2">Contact</h2>
          <p>
            Questions about these terms can be directed to{" "}
            <a href="mailto:info@qzenta.com" className="text-spring-500 hover:text-spring-400">
              info@qzenta.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
