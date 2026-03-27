'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  try {
    const emailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f9f7f4;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #d4af37 0%, #a68c3e 100%);
              padding: 40px 20px;
              text-align: center;
              border-bottom: 4px solid #2d5016;
            }
            .logo {
              width: 100px;
              height: auto;
              margin-bottom: 15px;
            }
            .header h1 {
              margin: 0;
              color: #ffffff;
              font-size: 24px;
              font-weight: 700;
              letter-spacing: 1px;
            }
            .header p {
              margin: 5px 0 0 0;
              color: #f0f0f0;
              font-size: 13px;
              font-weight: 500;
            }
            .content {
              padding: 40px 30px;
            }
            .greeting {
              color: #2d5016;
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 25px;
            }
            .form-section {
              background-color: #f9f7f4;
              padding: 25px;
              border-radius: 8px;
              margin-bottom: 25px;
              border-left: 5px solid #d4af37;
            }
            .form-row {
              margin-bottom: 20px;
            }
            .form-row:last-child {
              margin-bottom: 0;
            }
            .label {
              display: block;
              font-weight: 700;
              color: #2d5016;
              font-size: 14px;
              margin-bottom: 8px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .value {
              color: #555;
              font-size: 15px;
              line-height: 1.6;
              word-break: break-word;
            }
            .message-value {
              background-color: #ffffff;
              padding: 15px;
              border-radius: 6px;
              border: 1px solid #e0d5c7;
              margin-top: 8px;
              white-space: pre-wrap;
            }
            .footer {
              background-color: #f9f7f4;
              padding: 30px;
              text-align: center;
              border-top: 2px solid #d4af37;
            }
            .footer-text {
              color: #666;
              font-size: 13px;
              margin: 10px 0;
            }
            .organization-name {
              color: #2d5016;
              font-weight: 700;
              font-size: 16px;
              margin: 15px 0;
            }
            .contact-info {
              color: #2d5016;
              font-size: 12px;
              margin: 5px 0;
            }
            .divider {
              height: 1px;
              background-color: #d4af37;
              margin: 20px 0;
            }
            a {
              color: #d4af37;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            .highlight {
              color: #d4af37;
              font-weight: 600;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.PNG-dg1OWIjox83UjneIk09gYKIEQ5C5XG.png" alt="Shiphrah and Puah's Ministry" class="logo">
              <h1>Shiphrah & Puah's Ministry</h1>
              <p>Reminding couples that God does Child Creation, Child Spacing & Child Control</p>
            </div>

            <!-- Content -->
            <div class="content">
              <div class="greeting">
                New Inquiry Received
              </div>

              <p style="color: #555; font-size: 15px; margin-bottom: 25px;">
                A new message has been submitted through your contact form. Please find the details below:
              </p>

              <div class="form-section">
                <div class="form-row">
                  <span class="label">Sender Name</span>
                  <span class="value">${formData.name}</span>
                </div>

                <div class="form-row">
                  <span class="label">Email Address</span>
                  <span class="value"><a href="mailto:${formData.email}">${formData.email}</a></span>
                </div>

                <div class="form-row">
                  <span class="label">Phone Number</span>
                  <span class="value"><a href="tel:${formData.phone}">${formData.phone}</a></span>
                </div>

                <div class="form-row">
                  <span class="label">Subject</span>
                  <span class="value"><span class="highlight">${formData.subject}</span></span>
                </div>

                <div class="form-row">
                  <span class="label">Message</span>
                  <div class="message-value">${formData.message}</div>
                </div>
              </div>

              <p style="color: #666; font-size: 14px; font-style: italic; margin-top: 20px;">
                Please respond to this inquiry at your earliest convenience to maintain strong community engagement.
              </p>
            </div>

            <!-- Footer -->
            <div class="footer">
              <div class="organization-name">Shiphrah & Puah's Ministry</div>
              <div class="footer-text">Supporting Pregnant Women with Prayer & Counsel</div>
              
              <div class="divider"></div>

              <div class="contact-info">
                Email: <a href="mailto:shiphrahandpuahministry@gmail.com">shiphrahandpuahministry@gmail.com</a>
              </div>
              <div class="contact-info">
                Phone: <a href="tel:+256782358125">+256 782 358 125</a> | <a href="tel:+256757308680">+256 757 308 680</a>
              </div>

              <div style="margin-top: 20px; color: #999; font-size: 12px;">
                <p style="margin: 5px 0;">© 2026 Shiphrah & Puah's Ministry. All rights reserved.</p>
                <p style="margin: 5px 0;">This is an automated email. Please do not reply directly to this message.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Shiphrah & Puah\'s Ministry <noreply@shiphrahandpuahministry.org>',
      to: ['shiphrahandpuahministry@gmail.com'],
      subject: `New Message: ${formData.subject}`,
      html: emailTemplate,
    });

    if (error) {
      console.error(error);
      return { success: false };
    }

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}
