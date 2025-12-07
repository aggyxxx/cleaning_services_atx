"use client";

import { useState, FormEvent } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCallBar } from "@/components/StickyMobileCallBar";
import { SectionWrapper } from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/siteConfig";
import { CallActionButton } from "@/components/CallActionButton";

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFileType = (file: File | null): boolean => {
    if (!file) return false;
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const fileName = file.name.toLowerCase();
    const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
    const hasValidType = allowedTypes.includes(file.type);
    return hasValidExtension || hasValidType;
  };

  const validateFileSize = (file: File | null): string | null => {
    if (!file) return null;
    const maxSize = 4 * 1024 * 1024; // 4MB (Vercel serverless limit is 4.5MB)
    if (file.size > maxSize) {
      const fileSizeMB = (file.size / 1024 / 1024).toFixed(2);
      return `File size (${fileSizeMB}MB) exceeds 4MB limit. Please compress your file or use a smaller version.`;
    }
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const bestTime = (formData.get("bestTime") as string)?.trim() || "";
    const resumeFile = formData.get("resume") as File | null;

    // Validation
    const newErrors: Record<string, string> = {};
    if (!name) {
      newErrors.name = "Full name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!phone) {
      newErrors.phone = "Phone number is required";
    }
    if (!resumeFile || resumeFile.size === 0) {
      newErrors.resume = "Resume file is required";
    } else {
      if (!validateFileType(resumeFile)) {
        newErrors.resume = "Please upload a PDF, DOC, or DOCX file";
      } else {
        const sizeError = validateFileSize(resumeFile);
        if (sizeError) {
          newErrors.resume = sizeError;
        }
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Create FormData for file upload
      const uploadData = new FormData();
      uploadData.append("name", name);
      uploadData.append("email", email);
      uploadData.append("phone", phone);
      uploadData.append("bestTime", bestTime);
      uploadData.append("resume", resumeFile!);

      const response = await fetch("/api/apply", {
        method: "POST",
        body: uploadData,
      });

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        // If response is not JSON (might be a 413 error)
        if (response.status === 413) {
          setSubmitStatus("error");
          setSubmitMessage("File is too large. Please ensure your file is under 4MB and try again.");
          setIsSubmitting(false);
          return;
        }
        throw jsonError;
      }

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you! Your application has been received.");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        if (response.status === 413) {
          setSubmitMessage("File is too large. Please ensure your file is under 4MB and try again.");
        } else {
          setSubmitMessage(result.error || "Upload failed — please try again or call us directly.");
        }
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Upload failed — please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col pb-20 lg:pb-0">
      <Navbar />
      <SectionWrapper
        id="apply"
        className="mx-auto mt-12 max-w-5xl px-6 py-16 sm:py-20 lg:py-24 md:px-8 lg:max-w-6xl xl:max-w-[1400px]"
      >
        <div className="space-y-12">
          {/* Intro Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Join Our Team
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
              Apply to Work With Us
            </h1>
            <p className="mt-5 mx-auto max-w-3xl text-base leading-relaxed text-slate-600 lg:text-lg">
              Austin Commercial Cleaning is hiring reliable, detail-oriented cleaners for commercial spaces and Airbnb turnovers in the Austin area. We value professionalism, reliability, and offer flexible scheduling to fit your lifestyle.
            </p>
          </div>

          {/* Form Section */}
          <div className="rounded-[32px] border border-white/60 bg-gradient-to-br from-white/95 via-green-50/40 to-emerald-50/40 p-8 shadow-[0_45px_140px_-75px_rgba(71,85,105,0.45)] backdrop-blur-xl md:p-12">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">
                  Application Submitted Successfully
                </h2>
                <p className="text-base text-slate-600 mb-8 max-w-2xl mx-auto">
                  {submitMessage}
                </p>
                <a
                  href="/"
                  className="cleaning-effect inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 px-7 py-3.5 text-base font-semibold text-white shadow-pastel transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Return to Home
                </a>
              </div>
            ) : (
              <form
                className="space-y-6"
                aria-label="Job application form"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className={`h-12 rounded-xl border ${
                        errors.name ? "border-red-300" : "border-white/70"
                      } bg-white/80 px-4 text-sm text-slate-600 shadow-inner focus:border-green-300 focus:outline-none focus:ring-4 focus:ring-green-200/60`}
                      required
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className={`h-12 rounded-xl border ${
                        errors.email ? "border-red-300" : "border-white/70"
                      } bg-white/80 px-4 text-sm text-slate-600 shadow-inner focus:border-green-300 focus:outline-none focus:ring-4 focus:ring-green-200/60`}
                      required
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="423-716-0930"
                      className={`h-12 rounded-xl border ${
                        errors.phone ? "border-red-300" : "border-white/70"
                      } bg-white/80 px-4 text-sm text-slate-600 shadow-inner focus:border-green-300 focus:outline-none focus:ring-4 focus:ring-green-200/60`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="bestTime" className="text-sm font-semibold text-slate-700">
                      Best Time to Reach You
                    </label>
                    <select
                      id="bestTime"
                      name="bestTime"
                      className="h-12 rounded-xl border border-white/70 bg-white/80 px-4 text-sm text-slate-600 shadow-inner focus:border-green-300 focus:outline-none focus:ring-4 focus:ring-green-200/60"
                    >
                      <option value="">Select a time</option>
                      <option value="Mornings (8am-12pm)">Mornings (8am-12pm)</option>
                      <option value="Afternoons (12pm-5pm)">Afternoons (12pm-5pm)</option>
                      <option value="Evenings (5pm-8pm)">Evenings (5pm-8pm)</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="resume" className="text-sm font-semibold text-slate-700">
                    Resume / Work History <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className={`rounded-xl border ${
                      errors.resume ? "border-red-300" : "border-white/70"
                    } bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-inner focus:border-green-300 focus:outline-none focus:ring-4 focus:ring-green-200/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200 file:cursor-pointer`}
                    required
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max file size: 4MB)
                  </p>
                  {errors.resume && (
                    <p className="text-xs text-red-600">{errors.resume}</p>
                  )}
                </div>
                {submitStatus === "error" && (
                  <div className="rounded-xl p-4 bg-red-50 border border-red-200 text-red-800">
                    <p className="text-sm font-medium">{submitMessage}</p>
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cleaning-effect w-full rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 px-6 py-3.5 text-base font-semibold text-white shadow-pastel transition hover:-translate-y-0.5 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                  <CallActionButton className="cleaning-effect w-full rounded-full border-2 border-green-200 bg-white/90 px-6 py-3.5 text-base font-semibold text-green-700 shadow-sm transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-white text-center">
                    Call {siteConfig.phoneDisplay}
                  </CallActionButton>
                </div>
                <p className="text-xs text-slate-500">
                  By submitting this form, you agree to be contacted via phone or
                  email. We respect your privacy and never share personal details.
                </p>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>
      <Footer />
      <StickyMobileCallBar />
    </main>
  );
}

