"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
};

export function CleaningParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = (e: MouseEvent) => {
      // Only create particles on interactive elements
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cleaning-effect")
      ) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          delay: Math.random() * 0.3,
          size: Math.random() * 8 + 4,
        };

        setParticles((prev) => [...prev, newParticle]);

        // Remove particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 1000);
      }
    };

    window.addEventListener("click", createParticle);
    return () => window.removeEventListener("click", createParticle);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9997]">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/70"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              x: [
                0,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 100,
              ],
              y: [
                0,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 100,
              ],
            }}
            transition={{
              duration: 1,
              delay: particle.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

