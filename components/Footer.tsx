"use client";

import { siteConfig } from "@/lib/siteConfig";
import { CallActionButton } from "@/components/CallActionButton";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/50 bg-white/70 pb-24 lg:pb-10 pt-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center text-sm text-slate-500 md:flex-row md:justify-between md:text-left lg:max-w-7xl xl:max-w-[1400px]">
        <div className="space-y-1">
          <div className="font-display text-base font-semibold text-slate-700">
            {siteConfig.businessName}
          </div>
          <p className="text-sm text-slate-500">
            Serving {siteConfig.location}
          </p>
          <p className="text-xs text-slate-400">
            Commercial cleaning for offices, storefronts, professional spaces, and Airbnb properties.
          </p>
          <p className="text-xs text-slate-500 mt-3">
            <a href="/apply" className="hover:text-lavender-600 transition-colors underline">
              Interested in joining our cleaning team? Apply here.
            </a>
          </p>
        </div>
        <div className="space-y-3">
          <CallActionButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lavender-400 via-blossom-400 to-mint-400 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md">
            📞 Call {siteConfig.phoneDisplay}
          </CallActionButton>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-lavender-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm transition hover:border-lavender-300 hover:bg-white"
          >
            ✉️ {siteConfig.email}
          </a>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

