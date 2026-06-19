import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Qzenta serves businesses across professional services, property, SaaS, NGOs, and payroll — delivering reliable IT infrastructure tailored to each sector.",
  openGraph: { url: "https://www.qzenta.com/industries" },
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
    tag: "SaaS Products · Startups · Tech Companies",
    desc: "Early-stage products need infrastructure that can move fast without breaking things. We set up your GitHub structure, CI/CD pipelines, authentication email, database connections, and deployment environments — so you can ship.",
    cover: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ngo",
    number: "04",
    title: "NGOs & Non-Profits",
    tag: "NGOs · Non-Profits · Community Organisations",
    desc: "Community organisations deserve the same quality infrastructure as commercial businesses. We work with NGOs on community platforms, email integration, Salesforce connectivity, and accessibility-first web design.",
    cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "payroll",
    number: "05",
    title: "Payroll & HR",
    tag: "Payroll Outsourcing · HR Services",
    desc: "Payroll and HR firms handle sensitive employee data and need POPIA-compliant, trustworthy digital infrastructure. We build websites with compliance-forward copy, professional email, and secure domain configuration.",
    cover: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors we serve"
        title="Industries"
        sub="Reliable IT infrastructure for South African businesses — whatever your sector."
        image="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1800&q=80"
        imageAlt="South African business district"
        overlay="from-[#0C2228]/88 via-[#0C2228]/65 to-[#0C2228]/30"
      />

      {/* Industry rows */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="space-y-6">
          {industries.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white dark:bg-white/5 dark:backdrop-blur-sm rounded-xl border border-onyx-100 dark:border-white/10 overflow-hidden hover:border-spring-500/40 dark:hover:border-spring-500/30 hover:shadow-[0_0_24px_rgba(2,245,161,0.06)] transition-all"
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
                <div className="absolute inset-0 bg-[#0C2228]/55" />
                <span className="absolute top-4 left-4 text-3xl font-extrabold text-white/15 select-none">
                  {ind.number}
                </span>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8">
                <span className="inline-block text-xs font-semibold text-spring-400 bg-spring-500/10 px-3 py-1 rounded uppercase tracking-wide border border-spring-500/20">
                  {ind.tag}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-onyx-950 dark:text-onyx-50">{ind.title}</h2>
                <p className="mt-4 text-onyx-300 dark:text-onyx-500 leading-relaxed">{ind.desc}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-spring-400 hover:text-spring-300 transition-colors"
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

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-50 dark:bg-onyx-900 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-onyx-950 dark:text-onyx-50">Don&apos;t see your industry?</h2>
          <p className="mt-3 text-onyx-300 dark:text-onyx-500 max-w-md mx-auto">
            Good IT infrastructure is industry-agnostic. If you need a reliable digital
            foundation, get in touch — we&apos;ll make it work.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-8 py-3.5 rounded-md bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
