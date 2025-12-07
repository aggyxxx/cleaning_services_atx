"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Office & Coworking Space Cleaning",
    description:
      "Executive suites, open work areas, and shared amenities receive meticulous attention for a polished, productivity-ready environment every visit.",
    icon: "🏢"
  },
  {
    title: "Retail & Boutique Cleaning",
    description:
      "We stage your sales floor, fitting rooms, and storefront glass to perfection so your customers experience a work-ready space from door to checkout.",
    icon: "🛍️"
  },
  {
    title: "Salon & Spa Cleaning",
    description:
      "From treatment rooms to reception lounges, we deliver serene, hygienic atmospheres that reflect the premium care your clients expect.",
    icon: "💆"
  },
  {
    title: "Restaurant Front-of-House Detailing",
    description:
      "Lobby, dining rooms, and restrooms sparkle with discreet overnight crews who prepare your venue for impeccable guest impressions.",
    icon: "🍽️"
  },
  {
    title: "Medical & Professional Office Cleaning",
    description:
      "Clinics, law firms, and financial practices rely on our HIPAA-conscious, confidentiality-first teams to protect professionalism and trust.",
    icon: "⚕️"
  },
  {
    title: "Post-Construction & Turnover Polish",
    description:
      "We remove dust, debris, and renovation residue across commercial sites so your build-outs launch spotless and photo-ready.",
    icon: "🛠️"
  },
  {
    title: "Airbnb & Vacation Rental Cleaning",
    description:
      "Fast, reliable turnover cleaning for Airbnb and vacation rental properties. We ensure every guest arrives to a spotless, welcoming space with fresh linens, stocked amenities, and immaculate presentation.",
    icon: "🏠"
  }
];


export function ServicesSection() {
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
      id="services"
      className="mx-auto mt-12 max-w-6xl px-6 py-16 sm:py-20 lg:py-24 md:px-8 lg:max-w-7xl xl:max-w-[1400px] bg-white"
    >
      <div className="space-y-8 text-center lg:text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-lavender-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-lavender-600">
            Services that sparkle
          </div>
          <h2
            id="services-title"
            className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Impeccable Care for Every Type of Space
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 lg:mx-0 lg:max-w-3xl">
            We partner with Chattanooga businesses and property managers to uphold elevated workplace
            standards, discreet operations, and consistent sparkle across every
            workspace, guest-facing area, and vacation rental.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: isMobile ? 0.1 : 0.05,
                margin: isMobile ? "0px" : "-30px"
              }}
              transition={{ duration: 0.3, delay: index * 0.02, ease: [0.25, 0.1, 0.25, 1] }}
              className="cleaning-effect group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 text-left shadow-[0_30px_80px_-60px_rgba(118,213,188,0.75)] transition transform hover:-translate-y-2 hover:shadow-pastel"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blossom-100/40 via-lavender-100/40 to-mint-100/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-lavender-100/80 via-blossom-100/80 to-mint-100/80 px-4 py-3 text-3xl shadow-sm">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

