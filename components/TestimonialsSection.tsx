"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Jordan L.",
    role: "Operations Manager, Riverfront Tech Hub",
    quote:
      "Their overnight crew keeps our coworking floors guest-ready. Every morning the whiteboards are pristine, glass is fingerprint-free, and clients notice the polish.",
    rating: 5
  },
  {
    name: "Priya S.",
    role: "Owner, Blossom Boutique",
    quote:
      "Displays and fitting rooms look photo-ready after every service. They even take notes on weekly floor sets so nothing is out of place when we open.",
    rating: 5
  },
  {
    name: "Marcus H.",
    role: "General Manager, Walnut Street Brasserie",
    quote:
      "Front-of-house shines—banquettes, host stand, restrooms, everything. They coordinate perfectly with our closing team without missing a beat.",
    rating: 5
  },
  {
    name: "Emily R.",
    role: "Practice Administrator, Scenic Health Group",
    quote:
      "Confidentiality and consistency matter in our clinic. Their team follows compliance protocols, documents every visit, and keeps patient spaces immaculate.",
    rating: 5
  },
  {
    name: "Alex T.",
    role: "Property Manager, Downtown Austin Rentals",
    quote:
      "Their turnaround cleaning for our Airbnb properties is flawless. Every guest arrives to a spotless space with fresh linens and stocked amenities. They coordinate seamlessly with our check-in schedule.",
    rating: 5
  }
];

export function TestimonialsSection() {
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
      id="testimonials"
      className="mx-auto mt-12 max-w-6xl px-6 py-16 sm:py-20 lg:py-24 md:px-8 lg:max-w-7xl xl:max-w-[1400px] bg-stone-50/40"
    >
      <div className="space-y-8 text-center lg:text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Loved locally
          </div>
          <h2
            id="testimonials-title"
            className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Austin Businesses Who Trust Our Service
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 lg:mx-0 lg:max-w-3xl">
            From boutique retailers to medical practices and Airbnb properties, we become an extension
            of your team—protecting the guest experience with every clean.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: isMobile ? 0.1 : 0.05,
                margin: isMobile ? "0px" : "-30px"
              }}
              transition={{ duration: 0.3, delay: index * 0.02, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 text-left shadow-[0_35px_100px_-60px_rgba(93,122,93,0.15)] transition hover:-translate-y-2 hover:shadow-soft"
            >
              <div className="absolute inset-0 bg-sage-50/40 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-sage-500">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span key={index} aria-hidden="true">
                      ★
                    </span>
                  ))}
                  <span className="sr-only">
                    {testimonial.rating} out of 5 stars
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {testimonial.quote}
                </p>
                <div className="text-sm font-semibold text-slate-900">
                  {testimonial.name}
                </div>
                <div className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                  {testimonial.role}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

