"use client";

import { useState, FormEvent } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/siteConfig";
import { CallActionButton } from "@/components/CallActionButton";

type ContactSectionProps = {
  id?: string;
  className?: string;
};

export function ContactSection({
  id = "contact",
  className = "mx-auto mt-16 max-w-6xl px-6 py-16 sm:py-20 lg:py-24 md:px-8 lg:max-w-7xl xl:max-w-[1400px] bg-white"
}: ContactSectionProps = {}) {
  const headingId = `${id}-title`;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      squareFootage: formData.get("squareFootage") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you! We'll be in touch within one business day.");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setSubmitMessage(result.error || "Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id={id}
      className={className}
    >
      <div className="rounded-[32px] border border-white/60 bg-gradient-to-br from-white/95 via-blossom-50/40 to-lavender-50/40 p-8 shadow-[0_45px_140px_-75px_rgba(71,85,105,0.45)] backdrop-blur-xl md:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Schedule a consultation
            </div>
            <h2
              id={headingId}
              className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
            >
              Ready to Elevate Your Workspace or Property?
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Share your facility or vacation rental details and our scheduling concierge will
              connect within one business day to design a program around your
              operations and turnover schedule. Prefer immediate support? Call us—we&apos;re ready to
              learn about your business or property management needs.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <CallActionButton className="cleaning-effect inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lavender-400 via-blossom-400 to-mint-400 px-6 py-3 text-base font-semibold text-white shadow-pastel transition hover:-translate-y-0.5 hover:shadow-glow">
                📞 Call {siteConfig.phoneDisplay}
              </CallActionButton>
              <a
                href={`mailto:${siteConfig.email}`}
                className="cleaning-effect inline-flex items-center gap-2 rounded-full border-2 border-lavender-200 bg-white/90 px-5 py-2.5 text-sm font-semibold text-lavender-700 shadow-sm transition hover:-translate-y-0.5 hover:border-lavender-300 hover:bg-white"
              >
                ✉️ {siteConfig.email}
              </a>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-inner">
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-lavender-500 mt-0.5">✓</span>
                  <span>We respond within one business day.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lavender-500 mt-0.5">✓</span>
                  <span>No obligation – proposals are tailored, not generic templates.</span>
                </li>
              </ul>
            </div>
          </div>
          <form
            className="space-y-5 rounded-[28px] border border-white/80 bg-white/90 p-8 shadow-lg"
            aria-label="Contact form"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name (e.g. Jordan, Priya, Emily…)"
                  className="h-12 rounded-xl border border-white/70 bg-white/80 px-4 text-sm text-slate-600 shadow-inner focus:border-lavender-300 focus:outline-none focus:ring-4 focus:ring-lavender-200/60"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 rounded-xl border border-white/70 bg-white/80 px-4 text-sm text-slate-600 shadow-inner focus:border-lavender-300 focus:outline-none focus:ring-4 focus:ring-lavender-200/60"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="423-716-0930"
                  className="h-12 rounded-xl border border-white/70 bg-white/80 px-4 text-sm text-slate-600 shadow-inner focus:border-lavender-300 focus:outline-none focus:ring-4 focus:ring-lavender-200/60"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="squareFootage" className="text-sm font-semibold text-slate-700">
                  Approx. Square Footage
                </label>
                <input
                  id="squareFootage"
                  name="squareFootage"
                  type="text"
                  placeholder="e.g. 3,500 sq ft office, 4 Airbnb units"
                  className="h-12 rounded-xl border border-white/70 bg-white/80 px-4 text-sm text-slate-600 shadow-inner focus:border-lavender-300 focus:outline-none focus:ring-4 focus:ring-lavender-200/60"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                Tell us about your space
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your offices, storefront, or rentals…"
                className="rounded-xl border border-white/70 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-inner focus:border-lavender-300 focus:outline-none focus:ring-4 focus:ring-lavender-200/60"
              />
            </div>
            {submitStatus && (
              <div
                className={`rounded-xl p-4 ${
                  submitStatus === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                <p className="text-sm font-medium">{submitMessage}</p>
              </div>
            )}
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cleaning-effect w-full rounded-full bg-gradient-to-r from-lavender-400 via-blossom-400 to-mint-400 px-6 py-3.5 text-base font-semibold text-white shadow-pastel transition hover:-translate-y-0.5 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
              <CallActionButton className="cleaning-effect w-full rounded-full border-2 border-lavender-200 bg-white/90 px-6 py-3.5 text-base font-semibold text-lavender-700 shadow-sm transition hover:-translate-y-0.5 hover:border-lavender-300 hover:bg-white text-center">
                Call {siteConfig.phoneDisplay}
              </CallActionButton>
            </div>
            <p className="text-xs text-slate-500">
              By submitting this form, you agree to be contacted via phone or
              email. We respect your privacy and never share personal details.
            </p>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}

