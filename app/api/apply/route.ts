import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";

// Configure route for larger file uploads
export const runtime = "nodejs";
export const maxDuration = 30; // Allow up to 30 seconds for file processing

export async function POST(request: NextRequest) {
  try {
    // Parse FormData (for file upload)
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch (error: any) {
      console.error("FormData parsing error:", error);
      // Check if it's a size-related error
      if (error.message?.includes("413") || error.message?.includes("too large") || error.message?.includes("Payload")) {
        return NextResponse.json(
          { error: "File is too large. Please ensure your file is under 10MB and try again." },
          { status: 413 }
        );
      }
      throw error;
    }

    const name = (formData.get("name") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const bestTime = (formData.get("bestTime") as string)?.trim() || "";
    const resumeFile = formData.get("resume") as File | null;

    // Validate required fields
    if (!name || !email || !phone || !resumeFile || resumeFile.size === 0) {
      return NextResponse.json(
        { error: "Name, email, phone, and resume file are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf", 
      "application/msword", 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const fileName = resumeFile.name.toLowerCase();
    const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
    // Some browsers may not set MIME type correctly, so we rely on extension if type is empty or generic
    const hasValidType = resumeFile.type ? allowedTypes.includes(resumeFile.type) : false;
    
    // Log for debugging
    console.log(`File validation - name: ${fileName}, type: ${resumeFile.type}, size: ${resumeFile.size}, hasExtension: ${hasValidExtension}, hasType: ${hasValidType}`);
    
    if (!hasValidExtension && !hasValidType) {
      return NextResponse.json(
        { error: `Invalid file type. Detected type: ${resumeFile.type || "unknown"}. Please upload a PDF, DOC, or DOCX file.` },
        { status: 400 }
      );
    }

    // Validate file size (10MB max, but Vercel limit is 4.5MB for serverless)
    // So we'll use 4MB to be safe
    const maxSize = 4 * 1024 * 1024; // 4MB in bytes (Vercel serverless limit is 4.5MB)
    if (resumeFile.size > maxSize) {
      return NextResponse.json(
        { error: `File size (${(resumeFile.size / 1024 / 1024).toFixed(2)}MB) exceeds 4MB limit. Please compress your PDF or use a smaller file.` },
        { status: 400 }
      );
    }

    // Log file info for debugging
    console.log(`Processing file: ${resumeFile.name}, size: ${(resumeFile.size / 1024 / 1024).toFixed(2)}MB, type: ${resumeFile.type}`);

    // Check if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    // Convert file to Buffer for Resend attachment
    const fileBuffer = Buffer.from(await resumeFile.arrayBuffer());
    const fileExtension = fileName.substring(fileName.lastIndexOf("."));
    const attachmentFileName = `resume_${name.replace(/\s+/g, "_")}_${Date.now()}${fileExtension}`;

    // Initialize Resend lazily (only when needed)
    const resend = new Resend(apiKey);

    // Send email using Resend with file attachment
    // Using your verified domain - sends job applications to your email
    const { data, error } = await resend.emails.send({
      from: `Job Applications <contact@${siteConfig.domain}>`,
      to: siteConfig.email, // Sending to YOUR email with applicant info
      subject: `New Job Application – Austin Commercial Cleaning`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Job Application
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #4f46e5;">Full Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #4f46e5;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #4f46e5;">Phone Number:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${bestTime ? `<p style="margin: 10px 0;"><strong style="color: #4f46e5;">Best Time to Reach You:</strong> ${bestTime}</p>` : ""}
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #4f46e5; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Resume Attachment:</h3>
            <p style="color: #666; line-height: 1.6;">
              The applicant's resume has been attached to this email as: <strong>${resumeFile.name}</strong>
            </p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 12px; font-style: italic;">
            Submitted from ${siteConfig.businessName} job application form<br>
            <strong>Reply to:</strong> <a href="mailto:${email}">${email}</a>
          </p>
        </div>
      `,
      attachments: [
        {
          filename: attachmentFileName,
          content: fileBuffer,
        },
      ],
      replyTo: email, // So you can reply directly to the applicant
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Application submitted successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

