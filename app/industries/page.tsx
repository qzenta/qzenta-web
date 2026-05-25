import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Qzenta serves businesses across professional services, property, SaaS, NGOs, and payroll — delivering reliable IT infrastructure tailored to each sector.",
};

const industries = [
  {
    id: "professional",
    number: "01",
    title: "Professional Services",
    tag: "Accountants · Tax Practitioners · Consultants",
    desc: "Accounting practices, tax consultancies, and professional service firms need infrastructure that reflects their credibility. We build multi-location marketing sites, integrate newsletter and email workflows, and ensure your digital presence communicates the professionalism your clients expect.",
    cover: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "property",
    number: "02",
    title: "Property & Real Estate",
    tag: "Estate Agencies · Property Managers",
    desc: "Property businesses depend on first impressions. We build clean, fast platforms with contact form integration, Cloudflare security, and domain management so your online presence matches the quality of your listings.",
    cover: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "saas",
    number: "03",
    title: "SaaS & Startups",
    desc: "Early-stage products need infrastructure that can move fast without breaking things. We set up your GitHub structure, CI/CD pipelines, authentication email, database connections, and deployment environments — so you can ship.",
    tag: "SaaS Products · Startups · Tech Companies",
    cover: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ngo",
    number: "04",
    title: "NGOs & Non-Profits",
    desc: "Community organisations deserve the same quality infrastructure as commercial businesses. We work with NGOs on community platforms, email integration, Salesforce connectivity, and accessibility-first web design.",
    tag: "NGOs · Non-Profits · Community Organisations",
    cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "payroll",
    number: "05",
    title: "Payroll & HR",
    desc: "Payroll and HR firms handle sensitive employee data and need POPIA-compliant, trustworthy digital infrastructure. We build websites with compliance-forward copy, professional email, and secure domain configuration.",
    tag: "Payroll Outsourcing · HR Services",
    cover: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-4">
          Sectors we serve
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Industries</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Reliable IT infrastructure for South African businesses — whatever your sector.
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="space-y-10">
          {industries.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:border-emerald-400/60 hover:shadow-md transition-all"
            >
              {/* Cover image */}
              <div className="relative h-48 lg:h-auto lg:col-span-2">
                <Image
                  src={ind.cover}
                  alt={ind.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gray-900/35" />
                <span className="absolute top-4 left-4 text-3xl font-bold text-white/20 select-none">
                  {ind.number}
                </span>
              </div>
              {/* Content */}
              <div className="lg:col-span-3 p-8">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  {ind.tag}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">{ind.title}</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">{ind.desc}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Get started
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white">Don&apos;t see your industry?</h2>
          <p className="mt-3 text-gray-400 max-w-md mx-auto">
            Good IT infrastructure is industry-agnostic. If you need a reliable digital
            foundation, get in touch — we&apos;ll make it work.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-8 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
