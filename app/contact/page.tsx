import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Qzenta. Whether you need a new website, IT infrastructure, or ongoing support — we'd love to hear from you.",
  openGraph: { url: "https://www.qzenta.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Say hello
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f1f5f9] tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-[#94a3b8] max-w-xl leading-relaxed">
          Tell us about your project or enquiry and we&apos;ll get back to you promptly.
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact details */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-semibold text-[#f1f5f9] uppercase tracking-[0.2em] mb-3">
                  Email
                </h3>
                <a
                  href="mailto:info@qzenta.com"
                  className="text-[#94a3b8] hover:text-emerald-400 transition-colors text-sm"
                >
                  info@qzenta.com
                </a>
              </div>

              {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
                <div>
                  <h3 className="text-xs font-semibold text-[#f1f5f9] uppercase tracking-[0.2em] mb-3">
                    WhatsApp
                  </h3>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              )}

              <div>
                <h3 className="text-xs font-semibold text-[#f1f5f9] uppercase tracking-[0.2em] mb-3">
                  Location
                </h3>
                <p className="text-sm text-[#94a3b8]">South Africa</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#f1f5f9] uppercase tracking-[0.2em] mb-3">
                  GitHub
                </h3>
                <a
                  href="https://github.com/qzenta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
                >
                  github.com/qzenta
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-[#1e2d45] rounded-lg border border-[#2d4060] p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
