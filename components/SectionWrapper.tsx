"use client";

import type { JSX, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { useEffect, useState } from "react";

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function SectionWrapper({
  id,
  children,
  className,
  as: Component = "section"
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
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
    <Component
      id={id}
      className={clsx("relative scroll-mt-24 lg:scroll-mt-32", className)}
      aria-labelledby={`${id}-title`}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: isMobile ? 0.1 : 0.05,
          margin: isMobile ? "0px" : "-30px"
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative"
      >
        {children}
      </motion.div>
    </Component>
  );
}

