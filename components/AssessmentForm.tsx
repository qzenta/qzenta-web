"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success";

const industries = [
  "Accounting & Tax",
  "Legal Services",
  "Property & Real Estate",
  "Healthcare",
  "NGO / Non-Profit",
  "SaaS & Technology",
  "Retail & E-commerce",
  "Hospitality",
  "HR & Payroll",
  "Other",
];

export default function AssessmentForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ businessName: "", websiteUrl: "", industry: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    const webhook = process.env.NEXT_PUBLIC_N8N_ASSESSMENT_WEBHOOK;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } catch {
        /* n8n will retry on its own schedule */
      }
    }
    setState("success");
  };

  const inputClass =
    "w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white transition-shadow";

  if (state === "success") {
    return (
      <div className="bg-white rounded-xl border border-emerald-100 p-8 text-center max-w-md mx-auto">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Your report is being prepared</h3>
        <p className="text-slate-500 text-sm">We&apos;ll be in touch within 1 business day.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-emerald-100 shadow-sm p-6 sm:p-8 max-w-md mx-auto space-y-4"
    >
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
          Business Name <span className="text-emerald-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Acme Accounting"
          value={form.businessName}
          onChange={(e) => setForm((p) => ({ ...p, businessName: e.target.value }))}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
          Website URL
        </label>
        <input
          type="url"
          placeholder="https://yourbusiness.co.za"
          value={form.websiteUrl}
          onChange={(e) => setForm((p) => ({ ...p, websiteUrl: e.target.value }))}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
          Industry <span className="text-emerald-500">*</span>
        </label>
        <select
          required
          value={form.industry}
          onChange={(e) => setForm((p) => ({ ...p, industry: e.target.value }))}
          className={inputClass}
        >
          <option value="">Select your industry</option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors"
      >
        {state === "loading" ? "Analysing..." : "Analyse My Business"}
      </button>
    </form>
  );
}
