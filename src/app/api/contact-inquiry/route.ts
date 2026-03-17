import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      howHeard,
      subject,
      message,
      topic,
    } = body as {
      fullName?: string;
      email?: string;
      phone?: string;
      howHeard?: string;
      subject?: string;
      message?: string;
      topic?: string;
    };

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const toRecipients = [
      "marketing@completestaffingnsolutions.com",
      "amartin@completestaffongsolutions.com",
    ];

    const safe = (value?: string) => (value && value.trim().length > 0 ? value : "-");

    const html = `
      <h2>New Website Contact Inquiry</h2>
      <p>A new contact form has been submitted from the website.</p>
      <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr><td><strong>Topic</strong></td><td>${safe(topic)}</td></tr>
        <tr><td><strong>Full Name</strong></td><td>${safe(fullName)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${safe(email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${safe(phone)}</td></tr>
        <tr><td><strong>How did you hear about us?</strong></td><td>${safe(howHeard)}</td></tr>
        <tr><td><strong>Subject</strong></td><td>${safe(subject)}</td></tr>
      </table>
      <h3>Message</h3>
      <p>${(message || "").replace(/\n/g, "<br />")}</p>
    `;

    const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    await resend.emails.send({
      from,
      to: toRecipients,
      subject: subject && subject.trim().length > 0
        ? subject
        : `New contact inquiry from ${fullName}`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact inquiry email:", error);
    return NextResponse.json(
      { error: "Failed to send contact inquiry." },
      { status: 500 },
    );
  }
}

