"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const differentiators = [
  {
    title: "Insured & Reliable",
    description:
      "Facility managers trust our fully insured, background-checked teams who operate discreetly and uphold strict security and confidentiality protocols.",
    icon: "🛡️"
  },
  {
    title: "Consistent Quality Standard",
    description:
      "Documented site playbooks, QA checklists, and dedicated account leads ensure every clean meets your site standards across suites and storefronts.",
    icon: "📋"
  },
  {
    title: "Flexible Scheduling",
    description:
      "From predawn resets to overnight turnovers, we align to your operating hours and adapt frequency as your business evolves.",
    icon: "🗓️"
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear statements of work, upfront proposals, and proactive communication mean no surprises for your finance team.",
    icon: "💡"
  }
];

export function WhyChooseUsSection() {
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
      id="benefits"
      className="mx-auto mt-12 max-w-6xl px-6 py-16 sm:py-20 lg:py-24 md:px-8 lg:max-w-7xl xl:max-w-[1400px] bg-gradient-to-br from-green-50/40 via-emerald-50/30 to-teal-50/40"
    >
      <div className="grid gap-8 rounded-[36px] border border-white/50 bg-white/90 p-8 shadow-[0_45px_120px_-65px_rgba(94,104,188,0.6)] backdrop-blur-lg lg:grid-cols-[1.1fr_1fr] lg:p-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Why choose us
          </div>
          <h2
            id="benefits-title"
            className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Trusted by Austin's Leading Offices & Workspaces
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            We uphold executive-level polish at scale—coordinating seamlessly
            with your operations team, tracking site preferences, and auditing
            every visit so your workplace stays guest-ready.
          </p>
        </div>
        <div className="grid gap-5">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: isMobile ? 0.1 : 0.05,
                margin: isMobile ? "0px" : "-30px"
              }}
              transition={{ duration: 0.3, delay: index * 0.02, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex gap-5 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-inner transition hover:border-green-200 hover:shadow-pastel"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-200 via-emerald-200 to-teal-200 text-xl">
                {item.icon}
              </div>
              <div className="space-y-1.5 text-left">
                <h3 className="font-display text-lg font-semibold text-slate-900">
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
    </SectionWrapper>
  );
}

