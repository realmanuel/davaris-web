import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // // Log so you can see exactly what's being sent in your terminal
    // console.log("Attempting to send email...");
    // console.log("RESEND_API_KEY present:", !!process.env.RESEND_API_KEY);
    // console.log("CONTACT_EMAIL:", process.env.CONTACT_EMAIL);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",         // ← must stay this until domain verified
      to: process.env.CONTACT_EMAIL!,        // ← must be the email that owns your Resend account
      replyTo: email,
      subject: `New Enquiry from ${name} — ${service || "General"}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;">
          <h2 style="color:#C8A96E;margin-bottom:24px;">New Project Enquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#666;width:140px;">Name</td><td style="padding:10px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:10px 0;color:#666;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#C8A96E;">${email}</a></td></tr>
            <tr><td style="padding:10px 0;color:#666;">Service</td><td style="padding:10px 0;">${service || "Not specified"}</td></tr>
            <tr><td style="padding:10px 0;color:#666;">Budget</td><td style="padding:10px 0;">${budget || "Not specified"}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#fff;border-left:3px solid #d1a148;">
            <p style="color:#666;margin-bottom:8px;">Message</p>
            <p style="line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top:24px;color:#999;font-size:12px;">Sent via Davaris contact form</p>
        </div>
      `,
    });

    // Log the full Resend response
    console.log("Resend response — data:", data);
    console.log("Resend response — error:", error);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Auto-reply — only attempt if main email succeeded
    const { error: replyError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We received your message — Davaris",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#080808;color:#f5f4f0;">
          <h2 style="color:#C8A96E;">Thanks, ${name}.</h2>
          <p style="color:rgba(245,244,240,0.6);line-height:1.8;margin-top:16px;">
            We've received your message and will get back to you within 24–48 hours.
          </p>
          <p style="color:rgba(245,244,240,0.6);line-height:1.8;margin-top:12px;">
            In the meantime, feel free to check out our work or connect with us on social media.
          </p>
          <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.1);color:rgba(245,244,240,0.3);font-size:12px;">
            Davaris · Building Digital Futures
          </div>
        </div>
      `,
    });

    if (replyError) {
      // Don't fail the whole request if only the auto-reply fails
      console.warn("Auto-reply failed:", replyError);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}