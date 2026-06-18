import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Qzenta (Pty) Ltd.",
};

export default function PrivacyPage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-onyx-500 hover:text-onyx-50 transition-colors mb-8"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to home
      </Link>

      <h1 className="text-3xl font-bold text-onyx-50 mb-2">Privacy Policy</h1>
      <p className="text-sm text-onyx-500 mb-8">Last updated: May 2026</p>

      <div className="space-y-6 text-onyx-500 text-sm leading-relaxed">
        <p>
          This Privacy Policy describes how Qzenta (Pty) Ltd (&quot;Qzenta&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses,
          and protects information when you use our website at www.qzenta.com.
        </p>

        <div>
          <h2 className="text-onyx-50 font-semibold mb-2">Information we collect</h2>
          <p>
            When you submit the contact form on this website, we collect your name, email address,
            and any information you include in your message. We do not collect any data automatically
            beyond standard server logs.
          </p>
        </div>

        <div>
          <h2 className="text-onyx-50 font-semibold mb-2">How we use your information</h2>
          <p>
            Information submitted through our contact form is used solely to respond to your enquiry.
            We do not sell, share, or transfer your personal information to third parties, except as
            required to deliver our services (e.g., email delivery via Brevo).
          </p>
        </div>

        <div>
          <h2 className="text-onyx-50 font-semibold mb-2">Data retention</h2>
          <p>
            Contact form submissions are retained only as long as necessary to respond to and resolve
            your enquiry.
          </p>
        </div>

        <div>
          <h2 className="text-onyx-50 font-semibold mb-2">Your rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of any personal
            information we hold about you. Contact us at{" "}
            <a href="mailto:info@qzenta.com" className="text-spring-400 hover:text-spring-300">
              info@qzenta.com
            </a>{" "}
            to exercise these rights.
          </p>
        </div>

        <div>
          <h2 className="text-onyx-50 font-semibold mb-2">Contact</h2>
          <p>
            Questions about this policy can be directed to{" "}
            <a href="mailto:info@qzenta.com" className="text-spring-400 hover:text-spring-300">
              info@qzenta.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
