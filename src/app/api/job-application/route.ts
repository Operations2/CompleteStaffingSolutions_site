import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      jobTitle,
      jobId,
      email,
      fullName,
      phone,
      street,
      city,
      state,
      zip,
      salary,
      hearAbout,
      employmentTypes,
      resume,
    } = body as {
      jobTitle?: string;
      jobId?: string;
      email?: string;
      fullName?: string;
      phone?: string;
      street?: string;
      city?: string;
      state?: string;
      zip?: string;
      salary?: string;
      hearAbout?: string;
      employmentTypes?: string[];
      resume?: {
        fileName?: string;
        mimeType?: string;
        content?: string;
      } | null;
    };

    if (!email || !fullName || !phone) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const toRecipients = [
<<<<<<< HEAD
      "marketing@completestaffingnsolutions.com",
      "amartin@completestaffongsolutions.com",
      "noumandev1221@gmail.com",
=======
      "marketing@completestaffingsolutions.com",
      "amartin@completestaffingsolutions.com",
>>>>>>> 5849efd626eec4588c8d393b63dac78d19fcb48a
    ];

    const html = `
      <h2>New Job Application</h2>
      <p>A new job-specific application has been submitted via the website.</p>
      <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr><td><strong>Job Title</strong></td><td>${jobTitle || "-"}</td></tr>
        <tr><td><strong>Job ID / Reference</strong></td><td>${jobId || "-"}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Full Name</strong></td><td>${fullName}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Street Address</strong></td><td>${street || "-"}</td></tr>
        <tr><td><strong>City</strong></td><td>${city || "-"}</td></tr>
        <tr><td><strong>State</strong></td><td>${state || "-"}</td></tr>
        <tr><td><strong>Zip Code</strong></td><td>${zip || "-"}</td></tr>
        <tr><td><strong>Desired Salary Range</strong></td><td>${salary || "-"}</td></tr>
        <tr><td><strong>How did you hear about us?</strong></td><td>${hearAbout || "-"}</td></tr>
        <tr><td><strong>Type of Employment Desired</strong></td><td>${(employmentTypes && employmentTypes.length > 0 ? employmentTypes.join(", ") : "-")}</td></tr>
      </table>
    `;

    const from =
      process.env.RESEND_FROM_EMAIL ||
      "no-reply@send.completestaffingsolutions.com";

    const attachments =
      resume && resume.content
        ? [
            {
              filename: resume.fileName || "resume",
              content: resume.content,
              contentType: resume.mimeType || "application/octet-stream",
            },
          ]
        : undefined;

    await resend.emails.send({
      from,
      to: toRecipients,
      subject: `New Job Application: ${jobTitle || "Unknown Position"}`,
      html,
      replyTo: email,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending job application email:", error);
    return NextResponse.json(
      { error: "Failed to send application." },
      { status: 500 },
    );
  }
}

