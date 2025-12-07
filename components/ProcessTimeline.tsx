"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We learn your footprint, schedule, traffic patterns, and priorities.",
    icon: "📞"
  },
  {
    step: 2,
    title: "Custom Proposal",
    description: "You receive a detailed scope, cadence options, and transparent pricing.",
    icon: "📋"
  },
  {
    step: 3,
    title: "Onboarding & Site Playbook",
    description: "We document access, preferences, and site standards for your location.",
    icon: "📖"
  },
  {
    step: 4,
    title: "Consistent, Audited Service",
    description: "Dedicated crews, QA checklists, and proactive communication after each visit.",
    icon: "✨"
  }
];

export function ProcessTimeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <SectionWrapper
      id="process"
      className="mx-auto mt-12 max-w-6xl px-6 py-16 sm:py-20 lg:py-24 md:px-8 lg:max-w-7xl xl:max-w-[1400px] bg-white"
    >
      <div className="space-y-8">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
            How we onboard
          </div>
          <h2
            id="process-title"
            className="mt-6 font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            How We Onboard Your Space
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-slate-600 lg:mx-0 lg:max-w-3xl">
            From first call to consistent service, we document everything so your cleaning program runs seamlessly.
          </p>
        </div>
        <div className="relative">
          {/* Desktop horizontal timeline */}
          <div className="relative hidden pt-16 lg:block">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 z-0" />
            <div className="relative mt-8 grid lg:grid-cols-4 lg:gap-8">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: isMobile ? 0.1 : 0.05,
                    margin: isMobile ? "0px" : "-30px"
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.02,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="relative flex flex-col items-center gap-6"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-0.5 bg-gradient-to-b from-green-200 via-emerald-200 to-teal-200" />
                    <div className="z-10 h-4 w-4 rounded-full border-2 border-white bg-green-300 shadow-sm" />
                  </div>
                  <div className="relative w-full rounded-3xl border border-white/70 bg-white/80 p-6 text-center shadow-[0_20px_60px_-30px_rgba(145,102,255,0.3)] transition hover:-translate-y-1 hover:shadow-pastel">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 text-2xl shadow-sm">
                      {item.icon}
                    </div>
                    <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-700">
                      {item.step}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px" }}
                transition={{ duration: 0.3, delay: index * 0.02, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-12"
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-emerald-200 to-teal-200" />
                )}
                <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 text-xl shadow-sm z-10">
                  {item.icon}
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_-30px_rgba(34,197,94,0.3)]">
                  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-200 text-xs font-bold text-green-700 mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

