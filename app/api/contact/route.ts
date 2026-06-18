import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, subject, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY is not set");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  // TODO: update sender to a Brevo-verified Qzenta domain once info@qzenta.com is set up
  // TODO: update recipient to info@qzenta.com once that mailbox is live
  const payload = {
    sender: { email: "noreply@sikatrix.com", name: "Qzenta Contact Form" },
    to: [{ email: "daniel@sikatrix.com", name: "Daniel" }],
    replyTo: { email: email.trim(), name: name.trim() },
    subject: subject?.trim()
      ? `[Qzenta] ${subject.trim()}`
      : `[Qzenta] New enquiry from ${name.trim()}`,
    htmlContent: `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#02F5A1">New contact form submission — Qzenta</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;width:100px">Name</td><td style="padding:8px 0;color:#111">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0;color:#111">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Subject</td><td style="padding:8px 0;color:#111">${escapeHtml(subject || "—")}</td></tr>
        </table>
        <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb"/>
        <p style="color:#6b7280;margin:0 0 8px">Message:</p>
        <p style="color:#111;white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `,
  };

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "Unknown error");
    console.error("Brevo API error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
