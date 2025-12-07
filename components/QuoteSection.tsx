"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/siteConfig";
import { CallActionButton } from "@/components/CallActionButton";

export function QuoteSection() {
  return (
    <SectionWrapper
      id="quote"
      className="mx-auto mt-12 max-w-5xl px-6 py-16 sm:py-20 lg:py-24 md:px-8 lg:max-w-6xl xl:max-w-[1400px]"
    >
      <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-gradient-to-br from-green-200/80 via-emerald-200/70 to-teal-200/70 p-[1px] shadow-[0_35px_120px_-60px_rgba(34,197,94,0.6)] backdrop-blur-xl">
        <div className="rounded-[34px] bg-white/92 px-8 py-12 text-center shadow-inner md:px-16 md:py-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Custom proposals
          </div>
          <h2
            id="quote-title"
            className="mt-6 font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Get a Custom Quote for Your Business or Property
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-base leading-relaxed text-slate-600 lg:max-w-3xl xl:max-w-4xl">
            Every workspace and vacation rental is unique. Our concierge team will craft a tailored
            commercial cleaning or Airbnb turnover proposal based on your footprint, schedule, turnover frequency, and
            service standards.
          </p>
          <CallActionButton className="cleaning-effect mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 px-7 py-3.5 text-base font-semibold text-white shadow-pastel transition hover:-translate-y-0.5 hover:shadow-glow">
            Call {siteConfig.phoneDisplay}
          </CallActionButton>
          <p className="mt-5 text-xs text-slate-500">
            Contact us for a personalized quote tailored to your space. Our team will respond within one business day.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

