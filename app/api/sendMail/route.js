import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import { createTransport } from "nodemailer";
// const resend = new Resend("re_DtRNSsNq_L8pHzuJTrHTFRKWhA3WoNe9m");
import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);
    const { name, email, message } = body;
    const transporter = nodemailer.createTransport({
      host: "smtp.resend.com",
      port: 587,
      auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
      },
    });

    const info = await transporter.sendMail({
      from: "onboarding@resend.dev>",
      to: "mohit.sharma327043@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
                  <strong>Name:</strong> ${name}<br />
                  <strong>Email:</strong> ${email}<br />
                  <strong>Message:</strong><br /> ${message}
                `,
    });

    return new Response(JSON.stringify({ success: true, info }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
}
