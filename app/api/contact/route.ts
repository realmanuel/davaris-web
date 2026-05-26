import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {

  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email to Davaris team — notification of new inquiry
    const { error: notifyError } = await resend.emails.send({
      from:    'Davaris Contact <onboarding@resend.dev>', // replace with your verified domain e.g. no-reply@davaris.com
      to:      ['immanuelfaniyi11@gmail.com'],                     // replace with real receiving email
      replyTo: email,
      subject: `New Inquiry from ${name}${service ? ` — ${service}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>New Davaris Inquiry</title>
        </head>
        <body style="margin:0;padding:0;background:#0a0a0a;font-family:'DM Sans',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
            <tr>
              <td>
                <table width="600" cellpadding="0" cellspacing="0" align="center"
                  style="background:#111111;border:1px solid #1e1e1e;max-width:600px;width:100%;">

                  <!-- Header -->
                  <tr>
                    <td style="padding:40px 40px 32px;border-bottom:1px solid #1e1e1e;">
                      <p style="margin:0;font-family:Georgia,serif;font-size:22px;font-weight:300;
                                 letter-spacing:0.1em;text-transform:uppercase;color:#f5f0e8;">
                        Davaris
                      </p>
                      <p style="margin:6px 0 0;font-size:11px;letter-spacing:0.16em;
                                 text-transform:uppercase;color:#4a4540;">
                        New Project Inquiry
                      </p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:40px;">

                      <p style="margin:0 0 32px;font-size:13px;letter-spacing:0.16em;
                                 text-transform:uppercase;color:#4a4540;">
                        Inquiry Details
                      </p>

                      <!-- Name -->
                      <table width="100%" cellpadding="0" cellspacing="0"
                        style="border-bottom:1px solid #1e1e1e;padding-bottom:20px;margin-bottom:20px;">
                        <tr>
                          <td width="140" style="font-size:11px;letter-spacing:0.14em;
                                                   text-transform:uppercase;color:#4a4540;
                                                   padding-right:20px;vertical-align:top;
                                                   padding-top:2px;">
                            Name
                          </td>
                          <td style="font-size:15px;font-weight:300;color:#f5f0e8;line-height:1.5;">
                            ${name}
                          </td>
                        </tr>
                      </table>

                      <!-- Email -->
                      <table width="100%" cellpadding="0" cellspacing="0"
                        style="border-bottom:1px solid #1e1e1e;padding-bottom:20px;margin-bottom:20px;">
                        <tr>
                          <td width="140" style="font-size:11px;letter-spacing:0.14em;
                                                   text-transform:uppercase;color:#4a4540;
                                                   padding-right:20px;vertical-align:top;
                                                   padding-top:2px;">
                            Email
                          </td>
                          <td style="font-size:15px;font-weight:300;color:#f5f0e8;line-height:1.5;">
                            <a href="mailto:${email}"
                               style="color:#f5f0e8;text-decoration:none;">
                              ${email}
                            </a>
                          </td>
                        </tr>
                      </table>

                      <!-- Phone (conditional) -->
                      ${phone ? `
                      <table width="100%" cellpadding="0" cellspacing="0"
                        style="border-bottom:1px solid #1e1e1e;padding-bottom:20px;margin-bottom:20px;">
                        <tr>
                          <td width="140" style="font-size:11px;letter-spacing:0.14em;
                                                   text-transform:uppercase;color:#4a4540;
                                                   padding-right:20px;vertical-align:top;
                                                   padding-top:2px;">
                            Phone
                          </td>
                          <td style="font-size:15px;font-weight:300;color:#f5f0e8;line-height:1.5;">
                            ${phone}
                          </td>
                        </tr>
                      </table>
                      ` : ''}

                      <!-- Service (conditional) -->
                      ${service ? `
                      <table width="100%" cellpadding="0" cellspacing="0"
                        style="border-bottom:1px solid #1e1e1e;padding-bottom:20px;margin-bottom:20px;">
                        <tr>
                          <td width="140" style="font-size:11px;letter-spacing:0.14em;
                                                   text-transform:uppercase;color:#4a4540;
                                                   padding-right:20px;vertical-align:top;
                                                   padding-top:2px;">
                            Service
                          </td>
                          <td style="font-size:15px;font-weight:300;color:#f5f0e8;line-height:1.5;">
                            ${service}
                          </td>
                        </tr>
                      </table>
                      ` : ''}

                      <!-- Budget (conditional) -->
                      ${budget ? `
                      <table width="100%" cellpadding="0" cellspacing="0"
                        style="border-bottom:1px solid #1e1e1e;padding-bottom:20px;margin-bottom:20px;">
                        <tr>
                          <td width="140" style="font-size:11px;letter-spacing:0.14em;
                                                   text-transform:uppercase;color:#4a4540;
                                                   padding-right:20px;vertical-align:top;
                                                   padding-top:2px;">
                            Budget
                          </td>
                          <td style="font-size:15px;font-weight:300;color:#f5f0e8;line-height:1.5;">
                            ${budget}
                          </td>
                        </tr>
                      </table>
                      ` : ''}

                      <!-- Message -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="140" style="font-size:11px;letter-spacing:0.14em;
                                                   text-transform:uppercase;color:#4a4540;
                                                   padding-right:20px;vertical-align:top;
                                                   padding-top:2px;">
                            Message
                          </td>
                          <td style="font-size:15px;font-weight:300;color:#a89f92;
                                     line-height:1.8;">
                            ${message.replace(/\n/g, '<br/>')}
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Reply CTA -->
                  <tr>
                    <td style="padding:0 40px 40px;">
                      <a href="mailto:${email}?subject=Re: Your Davaris Inquiry"
                         style="display:inline-block;padding:12px 28px;
                                background:#f5f0e8;color:#0a0a0a;
                                font-size:12px;font-weight:500;
                                letter-spacing:0.08em;text-decoration:none;">
                        Reply to ${name} →
                      </a>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:24px 40px;border-top:1px solid #1e1e1e;">
                      <p style="margin:0;font-size:11px;letter-spacing:0.1em;color:#4a4540;">
                        © 2026 Davaris · This message was sent via davaris.com
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (notifyError) {
      console.error('[Resend] Notification email error:', notifyError);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    // Auto-reply to the person who submitted
    const { error: autoReplyError } = await resend.emails.send({
      from:    'Davaris <onboarding@resend.dev>', // replace with your verified domain
      to:      [email],
      subject: "We've received your message — Davaris",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Message Received</title>
        </head>
        <body style="margin:0;padding:0;background:#0a0a0a;font-family:'DM Sans',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
            <tr>
              <td>
                <table width="600" cellpadding="0" cellspacing="0" align="center"
                  style="background:#111111;border:1px solid #1e1e1e;max-width:600px;width:100%;">

                  <!-- Header -->
                  <tr>
                    <td style="padding:40px 40px 32px;border-bottom:1px solid #1e1e1e;">
                      <p style="margin:0;font-family:Georgia,serif;font-size:22px;font-weight:300;
                                 letter-spacing:0.1em;text-transform:uppercase;color:#f5f0e8;">
                        Davaris
                      </p>
                      <p style="margin:6px 0 0;font-size:11px;letter-spacing:0.16em;
                                 text-transform:uppercase;color:#4a4540;">
                        Building Digital Futures
                      </p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:40px;">
                      <p style="margin:0 0 16px;font-family:Georgia,serif;font-size:26px;
                                 font-weight:300;font-style:italic;color:#f5f0e8;line-height:1.3;">
                        Message received, ${name}.
                      </p>

                      <p style="margin:0 0 20px;font-size:15px;font-weight:300;
                                 color:#a89f92;line-height:1.8;">
                        Thank you for reaching out to Davaris. We've received your message
                        and will get back to you within 24 hours.
                      </p>

                      <p style="margin:0 0 32px;font-size:15px;font-weight:300;
                                 color:#a89f92;line-height:1.8;">
                        In the meantime, feel free to explore our work or follow us on
                        social media.
                      </p>

                      <!-- What you sent summary -->
                      <table width="100%" cellpadding="0" cellspacing="0"
                        style="background:#0a0a0a;border:1px solid #1e1e1e;
                               padding:24px;margin-bottom:32px;">
                        <tr>
                          <td>
                            <p style="margin:0 0 16px;font-size:11px;letter-spacing:0.16em;
                                       text-transform:uppercase;color:#4a4540;">
                              Your Submission
                            </p>
                            ${service ? `
                            <p style="margin:0 0 8px;font-size:13px;font-weight:300;color:#a89f92;">
                              <span style="color:#4a4540;">Service:</span>&nbsp;&nbsp;${service}
                            </p>
                            ` : ''}
                            ${budget ? `
                            <p style="margin:0 0 8px;font-size:13px;font-weight:300;color:#a89f92;">
                              <span style="color:#4a4540;">Budget:</span>&nbsp;&nbsp;${budget}
                            </p>
                            ` : ''}
                            <p style="margin:0;font-size:13px;font-weight:300;
                                       color:#a89f92;line-height:1.7;">
                              <span style="color:#4a4540;">Message:</span>&nbsp;&nbsp;
                              ${message.replace(/\n/g, '<br/>')}
                            </p>
                          </td>
                        </tr>
                      </table>

                      <a href="https://davaris.com/portfolio"
                         style="display:inline-block;padding:12px 28px;
                                background:#f5f0e8;color:#0a0a0a;
                                font-size:12px;font-weight:500;
                                letter-spacing:0.08em;text-decoration:none;">
                        View Our Work →
                      </a>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:24px 40px;border-top:1px solid #1e1e1e;">
                      <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.1em;color:#4a4540;">
                        © ${new Date().getFullYear()} Davaris. All rights reserved.
                      </p>
                      <p style="margin:0;font-size:11px;color:#4a4540;">
                        hello@davaris.com
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (autoReplyError) {
      // Auto-reply failing is non-critical — log it but don't fail the request
      console.warn('[Resend] Auto-reply email error:', autoReplyError);
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('[Contact API] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}