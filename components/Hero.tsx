"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { CallActionButton } from "@/components/CallActionButton";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 lg:scroll-mt-32 overflow-hidden pb-20 pt-28 sm:pt-32 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50"
      aria-labelledby="home-title"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-green-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-emerald-200/25 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:max-w-7xl xl:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center"
        >
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-700 shadow-sm backdrop-blur">
                <span>Austin&apos;s Concierge Commercial Cleaning Partner</span>
              </div>
              <h1
                id="home-title"
                className="mt-6 max-w-2xl font-display text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Premium Commercial Cleaning for Austin Businesses
              </h1>
              <div className="mt-6 space-y-2 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:max-w-3xl">
                <p>
                  Concierge-level cleaning for offices, storefronts, clinics, and Airbnb properties across Austin.
                </p>
                <p className="font-medium text-slate-700">
                  Reliable crews. Work-ready spaces. Zero drama.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <CallActionButton className="cleaning-effect rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 px-7 py-3.5 text-base font-semibold text-white shadow-pastel transition hover:-translate-y-0.5 hover:shadow-glow">
                Call {siteConfig.phoneDisplay}
              </CallActionButton>
              <a
                href={`mailto:${siteConfig.email}`}
                className="cleaning-effect rounded-full border-2 border-green-200 bg-white/90 px-7 py-3.5 text-base font-semibold text-green-700 shadow-sm transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-white"
              >
                Email us for a quote
              </a>
            </div>
            <p className="text-sm text-slate-500 max-w-2xl">
              Trusted by office managers, boutique owners, and property managers across Austin.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.02, ease: "easeOut" }}
            className="relative rounded-3xl bg-hero-gradient p-1 shadow-[0_40px_90px_-45px_rgba(34,197,94,0.55)]"
          >
            <div
              className="glass-card relative rounded-[26px] overflow-hidden p-10"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 rounded-[26px]" />
              <div className="absolute -top-8 right-6 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 shadow-md z-20">
                Locally Owned
              </div>
              <div className="relative z-10 space-y-5 text-white">
                <h2 className="font-display text-3xl font-semibold leading-tight">
                  Elevate Every Workplace
                </h2>
                <p className="text-sm leading-relaxed text-white/85">
                  Boardrooms, reception areas, executive suites, retail
                  floors, and vacation rentals receive precision care with eco-conscious products and
                  white-glove protocols.
                </p>
                <div className="grid grid-cols-2 gap-4 text-left text-sm">
                  <div
                    className="relative rounded-2xl overflow-hidden bg-white/20 p-4 backdrop-blur-sm"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop)",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                    aria-label="Executive Suites commercial office space"
                  >
                    <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="text-xs uppercase tracking-[0.25em] text-white/80">
                        Specialty
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        Executive Suites
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative rounded-2xl overflow-hidden bg-white/20 p-4 backdrop-blur-sm"
                    style={{
                      backgroundImage:
                        "url(https://content.r9cdn.net/rimg/dimg/5f/e4/731806b1-city-33556-187e3069070.jpg?width=1366&height=768&xhint=1540&yhint=764&crop=true)",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                    aria-label="Austin city skyline"
                  >
                    <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="text-xs uppercase tracking-[0.25em] text-white/80">
                        Guarantee
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        Quality Standard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-8 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-600 shadow-lg">
              Trusted by Austin office managers & owners
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

