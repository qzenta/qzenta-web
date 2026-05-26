import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "POPIA Notice",
  description:
    "Qzenta's POPIA (Protection of Personal Information Act) notice — how we collect, process, and protect your personal information.",
};

export default function PopiaPage() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f1f5f9] tracking-tight">POPIA Notice</h1>
        <p className="mt-4 text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
          Protection of Personal Information Act (Act 4 of 2013) — how Qzenta (Pty) Ltd
          collects, uses, and protects your personal information.
        </p>
        <p className="mt-2 text-sm text-[#64748b]">Last updated: May 2026</p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-3xl mx-auto">
        <div className="space-y-10 text-[#94a3b8] leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-[#f1f5f9] mb-3">1. Who we are</h2>
            <p>
              Qzenta (Pty) Ltd (&ldquo;Qzenta&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a South
              African private company registered with the Companies and Intellectual Property
              Commission (CIPC). We provide IT infrastructure and web services to businesses across
              South Africa and Africa. Our registered information officer is Daniel Amoah, reachable
              at{" "}
              <a href="mailto:info@qzenta.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                info@qzenta.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f1f5f9] mb-3">2. Information we collect</h2>
            <p>We may collect the following personal information when you engage with us:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Your name and contact details (email address, phone number) when you submit our contact form",
                "Business name and details when you enquire about our services",
                "Technical information about your domains, hosting, and infrastructure that you share with us in the course of service delivery",
                "Correspondence between you and Qzenta via email or WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f1f5f9] mb-3">3. Why we collect it</h2>
            <p>We collect personal information only for the following lawful purposes:</p>
            <ul className="mt-3 space-y-2">
              {[
                "To respond to your enquiry or provide a quote",
                "To deliver the IT services you have engaged us for",
                "To communicate service updates, invoices, or support information",
                "To comply with our legal obligations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f1f5f9] mb-3">4. How we protect your information</h2>
            <p>
              We take reasonable technical and organisational steps to protect personal information
              in our possession against loss, damage, or unauthorised access. All client credentials
              and secrets are stored exclusively in environment variables — never in source code or
              shared documents. Our infrastructure uses Cloudflare for DDoS protection and Vercel
              for secure deployment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f1f5f9] mb-3">5. Sharing your information</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share information
              with third-party service providers (such as Brevo for email delivery) only to the
              extent necessary to deliver our services. These providers are bound by their own
              privacy and data protection obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f1f5f9] mb-3">6. Retention</h2>
            <p>
              We retain personal information only for as long as is necessary to fulfil the purpose
              for which it was collected, or as required by law. When information is no longer
              required, we delete or destroy it securely.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f1f5f9] mb-3">7. Your rights</h2>
            <p>Under POPIA, you have the right to:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Request access to personal information we hold about you",
                "Request correction of inaccurate or incomplete personal information",
                "Request deletion of personal information (subject to our legal obligations)",
                "Object to the processing of your personal information",
                "Lodge a complaint with the Information Regulator of South Africa",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f1f5f9] mb-3">8. Contact us</h2>
            <p>
              For any POPIA-related enquiries, to exercise your rights, or to lodge a complaint,
              contact our Information Officer:
            </p>
            <div className="mt-4 bg-[#1e2d45] rounded-lg p-6 border border-[#2d4060] text-sm space-y-1">
              <p className="text-[#f1f5f9] font-medium">Qzenta (Pty) Ltd — Information Officer</p>
              <p>Email:{" "}
                <a href="mailto:info@qzenta.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  info@qzenta.com
                </a>
              </p>
              <p>Registered in South Africa (CIPC)</p>
            </div>
            <p className="mt-4 text-sm">
              You may also contact the{" "}
              <span className="text-[#94a3b8]">Information Regulator of South Africa</span> at{" "}
              <span className="text-[#94a3b8]">inforeg.org.za</span> if you believe your rights
              under POPIA have been infringed.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-[#2d4060] flex flex-wrap gap-4 text-sm">
          <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
