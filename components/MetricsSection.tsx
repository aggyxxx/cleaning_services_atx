"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const metrics = [
  {
    number: "10,000+",
    label: "sq ft cleaned weekly",
    icon: "📐"
  },
  {
    number: "95%",
    label: "recurring commercial clients",
    icon: "🔄"
  },
  {
    number: "<24 hr",
    label: "proposal turnaround",
    icon: "⏱️"
  },
  {
    number: "100%",
    label: "insured & background-checked teams",
    icon: "🛡️"
  }
];

const industries = [
  "Offices & Coworking",
  "Retail & Boutiques",
  "Salons & Spas",
  "Clinics & Professional Practices",
  "Airbnb & Vacation Rentals",
  "Apartment Communities"
];

export function MetricsSection() {
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
      id="metrics"
      className="mx-auto mt-12 max-w-6xl px-6 py-16 sm:py-20 lg:py-24 md:px-8 lg:max-w-7xl xl:max-w-[1400px] bg-gradient-to-br from-blossom-50/20 via-lavender-50/15 to-mint-50/20"
    >
      <h2 id="metrics-title" className="sr-only">
        Performance highlights
      </h2>
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: isMobile ? 0.1 : 0.05,
                margin: isMobile ? "0px" : "-30px"
              }}
              transition={{ duration: 0.3, delay: index * 0.02, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 text-center shadow-[0_20px_60px_-30px_rgba(118,213,188,0.4)] transition hover:-translate-y-1 hover:shadow-pastel"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lavender-100/30 via-blossom-100/30 to-mint-100/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <div className="text-3xl">{metric.icon}</div>
                <div className="font-display text-3xl font-bold text-slate-900 lg:text-4xl">
                  {metric.number}
                </div>
                <p className="text-sm font-medium text-slate-600">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="text-center font-display text-xl font-semibold text-slate-900 lg:text-left">
            Industries We Support
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-lavender-200 bg-gradient-to-r from-lavender-50/90 to-blossom-50/90 px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-lavender-300 hover:shadow-md"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

