"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { CCCLogo } from "@/components/CCCLogo";
import { CallActionButton } from "@/components/CallActionButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#consultation" },
  { label: "Apply", href: "/apply" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={false}
      animate={{
        boxShadow: scrolled
          ? "0 12px 35px -20px rgba(145, 102, 255, 0.35)"
          : "0 0 0 rgba(0,0,0,0)",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)"
      }}
      className="sticky top-0 z-50"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 lg:max-w-7xl xl:max-w-[1400px]">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-slate-800 transition-transform hover:scale-[1.02] md:text-xl"
        >
          <CCCLogo size={128} />
          <span className="font-display text-lg font-semibold text-slate-900 md:text-xl">
            {siteConfig.businessName}
          </span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/70 px-3 py-1.5 shadow-glow backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blossom-100/80 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>
        <CallActionButton className="cleaning-effect hidden rounded-full bg-gradient-to-r from-lavender-400 via-blossom-400 to-mint-400 px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:shadow-pastel lg:inline-flex">
          Call Now
        </CallActionButton>
        <button
          type="button"
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/80 text-slate-700 shadow-md transition hover:shadow-lg lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span
            className="absolute h-0.5 w-6 rounded-full bg-slate-700 transition-all"
            style={{
              transform: isMenuOpen
                ? "translateY(0px) rotate(45deg)"
                : "translateY(-8px) rotate(0deg)"
            }}
          />
          <span
            className="absolute h-0.5 w-6 rounded-full bg-slate-700 transition-all"
            style={{
              opacity: isMenuOpen ? 0 : 1
            }}
          />
          <span
            className="absolute h-0.5 w-6 rounded-full bg-slate-700 transition-all"
            style={{
              transform: isMenuOpen
                ? "translateY(0px) rotate(-45deg)"
                : "translateY(8px) rotate(0deg)"
            }}
          />
        </button>
      </nav>
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
          marginBottom: isMenuOpen ? "1rem" : "0rem"
        }}
        className="mx-6 overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-lg backdrop-blur-xl lg:hidden"
      >
        <div className="space-y-3 p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-blossom-100/80 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
          <CallActionButton className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-lavender-400 via-blossom-400 to-mint-400 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-pastel">
            Call Now
          </CallActionButton>
        </div>
      </motion.div>
    </motion.header>
  );
}

