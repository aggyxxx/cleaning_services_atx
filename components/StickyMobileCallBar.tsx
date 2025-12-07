"use client";

import { siteConfig } from "@/lib/siteConfig";

export function StickyMobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/60 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_-5px_rgba(93,122,93,0.08)]">
      <div className="grid grid-cols-2 gap-0">
        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="flex items-center justify-center gap-2 px-4 py-4 text-sm font-semibold text-slate-800 transition active:bg-white/50 border-r border-white/60"
        >
          <span className="text-lg">📞</span>
          <span>Call</span>
        </a>
        <a
          href={`sms:${siteConfig.phoneHref}`}
          className="flex items-center justify-center gap-2 px-4 py-4 text-sm font-semibold text-slate-800 transition active:bg-white/50"
        >
          <span className="text-lg">💬</span>
          <span>Text</span>
        </a>
      </div>
    </div>
  );
}

