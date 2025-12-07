"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

type CallActionButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "mobile";
};

export function CallActionButton({
  children,
  className = "",
  variant = "primary"
}: CallActionButtonProps) {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowOptions(true);
  };

  const handleCall = () => {
    window.location.href = `tel:${siteConfig.phoneHref}`;
    setShowOptions(false);
  };

  const handleText = () => {
    window.location.href = `sms:${siteConfig.phoneHref}`;
    setShowOptions(false);
  };

  const handleClose = () => {
    setShowOptions(false);
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>

      {showOptions && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="mx-4 w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-center">
              <h3 className="text-lg font-semibold text-slate-900">
                How would you like to contact us?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {siteConfig.phoneDisplay}
              </p>
            </div>
            <div className="space-y-3">
              <button
                onClick={handleCall}
                className="w-full rounded-full bg-sage-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-sage-600 hover:-translate-y-0.5"
              >
                📞 Call Now
              </button>
              <button
                onClick={handleText}
                className="w-full rounded-full border-2 border-sage-200 bg-white px-6 py-3.5 text-base font-semibold text-sage-700 transition hover:-translate-y-0.5 hover:border-sage-300 hover:bg-sage-50"
              >
                💬 Send a Text
              </button>
              <button
                onClick={handleClose}
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

