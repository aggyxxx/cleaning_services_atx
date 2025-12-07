"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/siteConfig";
import { CallActionButton } from "@/components/CallActionButton";

const faqs = [
  {
    question: "Do you clean during business hours or after hours?",
    answer:
      "Both. We coordinate with your operations team to schedule early mornings, midday tidies, or overnight turnovers so your workplace stays undisturbed."
  },
  {
    question: "Do you provide supplies and equipment?",
    answer:
      "Yes. Our crews arrive with professional-grade, eco-conscious products and HEPA-filter equipment. We can integrate any specialty products you require."
  },
  {
    question: "Can you handle recurring weekly or nightly cleanings?",
    answer:
      "Absolutely. Many clients choose nightly or multi-times-per-week service. We assign a dedicated team and maintain detailed site playbooks."
  },
  {
    question: "Which types of businesses do you work with in Austin?",
    answer:
      "From tech hubs and medical practices to retail boutiques, hospitality spaces, and Airbnb properties, we service a wide range of commercial environments and vacation rentals across the metro area."
  },
  {
    question: "Do you offer Airbnb and vacation rental cleaning?",
    answer:
      "Yes! We specialize in fast, reliable turnover cleaning for Airbnb and vacation rental properties. Our teams ensure every guest arrives to a spotless space with fresh linens, stocked amenities, and immaculate presentation. We work with property managers to coordinate same-day turnovers and maintain consistent quality standards."
  },
  {
    question: "How quickly can service begin?",
    answer:
      "Typically, we can schedule your first cleaning within 3-5 business days after your consultation and proposal approval."
  }
];

export function PricingSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionWrapper
      id="pricing"
      className="mx-auto mt-12 max-w-6xl px-6 py-16 sm:py-20 lg:py-24 md:px-8 lg:max-w-7xl xl:max-w-[1400px] bg-gradient-to-br from-white via-green-50/20 to-emerald-50/20"
    >
      <div className="space-y-8">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-green-600">
            Pricing & booking
          </div>
          <h2
            id="pricing-title"
            className="mt-6 font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Transparent Rates, Personalized Care
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-slate-600 lg:mx-0 lg:max-w-3xl">
            Every commercial space and vacation rental is unique. Contact us for a personalized quote based on your square footage, scope, traffic, turnover frequency, and cleaning requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 rounded-[32px] border border-white/60 bg-white/85 p-8 shadow-[0_40px_120px_-70px_rgba(122,66,255,0.55)] backdrop-blur-lg lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-12">
          <div className="space-y-6">
            <div className="grid gap-6">
              <div className="rounded-3xl border border-green-100 bg-green-50/70 p-8 text-left text-slate-700 shadow-inner">
                <h3 className="font-display text-2xl font-semibold text-green-700">
                  One-Time Commercial Cleaning
                </h3>
                <p className="mt-4 text-sm leading-relaxed">
                  Ideal for openings, corporate events, post-construction, vacation rental deep cleans, or
                  quarterly deep refreshes. We review your scope, tailor the crew,
                  and deliver a white-glove finish in a single service window.
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-500">•</span>
                    <span>Detailed walkthrough and customized scope of work.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-500">•</span>
                    <span>Dedicated project lead on-site during service.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-500">•</span>
                    <span>
                      Custom pricing based on your specific needs and space requirements.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/85 p-8 text-left text-slate-700 shadow-glow">
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  Recurring Scheduled Cleaning
                </h3>
                <p className="mt-4 text-sm leading-relaxed">
                  Weekly, nightly, or hybrid cadences crafted for your operations.
                  Perfect for Airbnb turnovers, office maintenance, and retail upkeep.
                  We assign a consistent crew, document preferences, and
                  report after each visit.
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-500">•</span>
                    <span>
                      Structured service playbooks with ongoing quality audits.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-500">•</span>
                    <span>
                      Flexible scheduling for after-hours, alternating shifts, or
                      day porter support.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-500">•</span>
                    <span>
                      Custom proposals based on square footage, traffic levels, and
                      specialty requests.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-white/60 bg-white/90 p-6 text-left text-slate-700 shadow-inner">
              <h3 className="font-display text-xl font-semibold text-slate-900">
                Booking Essentials
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-500">•</span>
                  <span>
                    Consultation and proposal provided within one business day.
                  </span>
                </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-500">•</span>
                  <span>
                    Detailed proposal and schedule confirmation within one business
                    day of consultation.
                  </span>
                </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-500">•</span>
                  <span>
                    Ongoing support from your account concierge for adjustments
                    and special projects.
                  </span>
                </li>
              </ul>
              <CallActionButton className="cleaning-effect mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 px-6 py-3 text-sm font-semibold text-white shadow-pastel transition hover:-translate-y-0.5 hover:shadow-glow">
                Call to Discuss Your Space
              </CallActionButton>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-slate-900">
              Frequently Asked
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-white/60 bg-white/75 shadow-sm transition hover:border-green-200"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === index ? -1 : index
                        )
                      }
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-slate-700">
                        {faq.question}
                      </span>
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-lg text-green-500 shadow-inner"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

