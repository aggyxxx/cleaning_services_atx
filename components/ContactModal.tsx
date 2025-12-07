"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { useContactModal } from "@/lib/useContactModal";

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleCall = () => {
    window.location.href = `tel:${siteConfig.phoneHref}`;
    closeModal();
  };

  const handleText = () => {
    window.location.href = `sms:${siteConfig.phoneHref}`;
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={closeModal}
    >
      <div
        className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl"
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
            onClick={closeModal}
            className="w-full rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

