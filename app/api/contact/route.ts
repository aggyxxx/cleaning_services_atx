import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, squareFootage, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    // Initialize Resend lazily (only when needed)
    const resend = new Resend(apiKey);

    // Send email using Resend
    // Using your verified domain - sends form submissions to your email
    const { data, error } = await resend.emails.send({
      from: `Contact Form <contact@${siteConfig.domain}>`,
      to: siteConfig.email, // Sending to YOUR email (Jonathaneckelberry@gmail.com) with customer info
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #4f46e5;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #4f46e5;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong style="color: #4f46e5;">Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
            ${squareFootage ? `<p style="margin: 10px 0;"><strong style="color: #4f46e5;">Square Footage:</strong> ${squareFootage}</p>` : ""}
          </div>
          ${message ? `
            <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #4f46e5; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
            </div>
          ` : ""}
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 12px; font-style: italic;">
            Submitted from ${siteConfig.businessName} contact form<br>
            <strong>Reply to:</strong> <a href="mailto:${email}">${email}</a>
          </p>
        </div>
      `,
      replyTo: email, // So you can reply directly to the customer
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Form submitted successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

