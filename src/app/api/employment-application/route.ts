import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      email,
      fullName,
      phone,
      street,
      city,
      state,
      zip,
      salary,
      position,
      hearAbout,
      employmentTypes,
      resume,
    } = body as {
      email?: string;
      fullName?: string;
      phone?: string;
      street?: string;
      city?: string;
      state?: string;
      zip?: string;
      salary?: string;
      position?: string;
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
      "marketing@completestaffingsolutions.com",
      "amartin@completestaffingsolutions.com",
    ];

    const html = `
      <h2>New Employment Application</h2>
      <p>A new employment application has been submitted via the website.</p>
      <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Full Name</strong></td><td>${fullName}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Street Address</strong></td><td>${street || "-"}</td></tr>
        <tr><td><strong>City</strong></td><td>${city || "-"}</td></tr>
        <tr><td><strong>State</strong></td><td>${state || "-"}</td></tr>
        <tr><td><strong>Zip Code</strong></td><td>${zip || "-"}</td></tr>
        <tr><td><strong>Desired Salary Range</strong></td><td>${salary || "-"}</td></tr>
        <tr><td><strong>Position Interested In</strong></td><td>${position || "-"}</td></tr>
        <tr><td><strong>How did you hear about us?</strong></td><td>${hearAbout || "-"}</td></tr>
        <tr><td><strong>Type of Employment Desired</strong></td><td>${(employmentTypes && employmentTypes.length > 0 ? employmentTypes.join(", ") : "-")}</td></tr>
      </table>
    `;

    const from =
      process.env.RESEND_FROM_EMAIL || "no-reply@send.completestaffingsolutions.com";

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

    // #region agent log
    fetch('http://127.0.0.1:7570/ingest/7981dddb-5043-41b5-b056-f02d8ae9367c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': 'e0ba7e',
      },
      body: JSON.stringify({
        sessionId: 'e0ba7e',
        runId: 'initial',
        hypothesisId: 'B',
        location: 'api/employment-application/route.ts:67',
        message: 'About to send email via Resend',
        data: {
          toCount: toRecipients.length,
          hasApiKey: !!process.env.RESEND_API_KEY,
          fromValueSet: !!from,
          hasAttachments: Array.isArray(attachments) && attachments.length > 0,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion agent log

    await resend.emails.send({
      from: from,
      to: toRecipients,
      subject: `New Employment Application from ${fullName}`,
      html,
      replyTo: email,
      attachments,
    });

    // #region agent log
    fetch('http://127.0.0.1:7570/ingest/7981dddb-5043-41b5-b056-f02d8ae9367c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': 'e0ba7e',
      },
      body: JSON.stringify({
        sessionId: 'e0ba7e',
        runId: 'initial',
        hypothesisId: 'C',
        location: 'api/employment-application/route.ts:70',
        message: 'Resend email send completed without throwing',
        data: {},
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion agent log

    return NextResponse.json({ success: true });
  } catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7570/ingest/7981dddb-5043-41b5-b056-f02d8ae9367c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': 'e0ba7e',
      },
      body: JSON.stringify({
        sessionId: 'e0ba7e',
        runId: 'initial',
        hypothesisId: 'D',
        location: 'api/employment-application/route.ts:79',
        message: 'Error in employment-application route catch',
        data: {
          errorMessage: error instanceof Error ? error.message : String(error),
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion agent log

    console.error("Error sending employment application email:", error);
    return NextResponse.json(
      { error: "Failed to send application." },
      { status: 500 },
    );
  }
}

