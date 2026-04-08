import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { US_AREA_CODES } from "../../../constants/usAreaCodes";

const resend = new Resend(process.env.RESEND_API_KEY);
const US_AREA_CODE_SET = new Set(US_AREA_CODES);

type JobRequestBody = {
  email?: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  companyName?: string;
  contactTitle?: string;
  jobId?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  linkedInUrl?: string;
  hearAbout?: string;
  comments?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as JobRequestBody;

    const {
      email,
      firstName,
      lastName,
      jobTitle,
      companyName,
      contactTitle,
      jobId,
      street,
      city,
      state,
      zip,
      phone: phoneRaw,
      linkedInUrl,
      hearAbout,
      comments,
    } = body;

    const phone = (phoneRaw ?? "").trim();

    if (!email || !firstName || !lastName || !phone) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
      return NextResponse.json(
        { error: "Phone number must be in the format (xxx) xxx-xxxx." },
        { status: 400 },
      );
    }

    const phoneDigits = phone.replace(/\D/g, "");
    const areaCode = phoneDigits.slice(0, 3);
    if (!US_AREA_CODE_SET.has(areaCode)) {
      return NextResponse.json(
        { error: "Please enter a phone number with a valid US area code." },
        { status: 400 },
      );
    }

    const zipTrimmed = (zip ?? "").trim();
    if (!/^\d{5}$/.test(zipTrimmed)) {
      return NextResponse.json(
        { error: "Zip code must be exactly 5 digits." },
        { status: 400 },
      );
    }

    const toRecipients = [
      "marketing@completestaffingsolutions.com",
      "amartin@completestaffingsolutions.com",
    ];

    const html = `
      <h2>New Job Request (Employer)</h2>
      <p>A new job request has been submitted via the website.</p>
      <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>First Name</strong></td><td>${firstName}</td></tr>
        <tr><td><strong>Last Name</strong></td><td>${lastName}</td></tr>
        <tr><td><strong>Position / Job Title</strong></td><td>${jobTitle || "-"}</td></tr>
        <tr><td><strong>Job ID / Reference</strong></td><td>${jobId || "-"}</td></tr>
        <tr><td><strong>Company Name</strong></td><td>${companyName || "-"}</td></tr>
        <tr><td><strong>Title</strong></td><td>${contactTitle || "-"}</td></tr>
        <tr><td><strong>Phone</strong></td><td><a href="tel:${phone.replace(/\D/g, "")}">${phone}</a></td></tr>
        <tr><td><strong>Street Address</strong></td><td>${street || "-"}</td></tr>
        <tr><td><strong>City</strong></td><td>${city || "-"}</td></tr>
        <tr><td><strong>State</strong></td><td>${state || "-"}</td></tr>
        <tr><td><strong>Zip Code</strong></td><td>${zipTrimmed}</td></tr>
        <tr><td><strong>LinkedIn URL</strong></td><td>${linkedInUrl || "-"}</td></tr>
        <tr><td><strong>How did you hear about us?</strong></td><td>${hearAbout || "-"}</td></tr>
        <tr><td><strong>Comments</strong></td><td>${comments ? comments.replace(/\n/g, "<br/>") : "-"}</td></tr>
      </table>
    `;

    const from =
      process.env.RESEND_FROM_EMAIL ||
      "no-reply@send.completestaffingsolutions.com";

    await resend.emails.send({
      from,
      to: toRecipients,
      subject: `New Job Request: ${companyName || "Employer inquiry"}`,
      html,
      replyTo: email,
    });

    const baseUrl = process.env.CMS_LEAD_API_BASE_URL?.replace(/\/$/, "");
    const leadSecret = process.env.LEAD_EXTERNAL_FORM_SECRET;

    if (baseUrl && leadSecret) {
      const crmPayload = {
        Field_14: email,
        Field_1: firstName,
        Field_2: lastName,
        published_job_title: jobTitle || "",
        Field_23: jobId || "",
        Field_6: companyName || "",
        Field_3: contactTitle || "",
        Field_7: street || "",
        Field_9: city || "",
        Field_10: state || "",
        Field_11: zipTrimmed,
        Field_16: phone,
        Field_18: linkedInUrl || "",
        Field_25: hearAbout || "",
        Field_26: comments || "",
      };

      const cmsRes = await fetch(
        `${baseUrl}/api/leads/public/import-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Lead-Import-Secret": leadSecret,
          },
          body: JSON.stringify(crmPayload),
        },
      );

      if (!cmsRes.ok) {
        const text = await cmsRes.text().catch(() => "");
        console.error("CMS lead import failed:", cmsRes.status, text);
        return NextResponse.json(
          { error: "Your request was saved, but we could not sync to our CRM. Please try again later." },
          { status: 502 },
        );
      }
    } else if (baseUrl && !leadSecret) {
      console.error(
        "CMS_LEAD_API_BASE_URL is set but LEAD_EXTERNAL_FORM_SECRET is missing.",
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing job request:", error);
    return NextResponse.json(
      { error: "Failed to submit request." },
      { status: 500 },
    );
  }
}
