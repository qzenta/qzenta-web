"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (state === "success") {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-8 text-center">
        <svg className="w-10 h-10 text-emerald-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-lg font-semibold text-slate-100">Message sent</h3>
        <p className="mt-2 text-sm text-slate-400">
          Thanks for reaching out. We&apos;ll get back to you at {form.email || "your email"} shortly.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-5 text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#1a2236] border border-[#2d4060] rounded-md px-4 py-3 text-sm text-[#f1f5f9] placeholder:text-[#475569] focus:outline-none focus:border-emerald-500 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
            Name <span className="text-emerald-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
            Email <span className="text-emerald-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="What can we help with?"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
          Message <span className="text-emerald-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project or enquiry..."
          className={inputClass + " resize-none"}
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full sm:w-auto px-8 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium transition-colors text-sm"
      >
        {state === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
