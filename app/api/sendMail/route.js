import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import { createTransport } from "nodemailer";
// const resend = new Resend("re_DtRNSsNq_L8pHzuJTrHTFRKWhA3WoNe9m");
import { Resend } from "resend";
const resend = new Resend("re_123456789");
export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Your Name <you@yourdomain.com>", // Must be a verified sender
      to: "your-email@domain.com", // Your destination email
      subject: `New Contact Form Message from ${name}`,
      html: `
              <strong>Name:</strong> ${name}<br />
              <strong>Email:</strong> ${email}<br />
              <strong>Message:</strong><br /> ${message}
            `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
