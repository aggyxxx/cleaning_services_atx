"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Start as true to avoid flash

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();

    // If not mobile, show cursor after a brief delay
    if (window.innerWidth > 768) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Use event delegation for hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cleaning-effect") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setIsVisible(false);
      } else {
        setIsMobile(false);
        setIsVisible(true);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile]);

  // Don't show cursor on mobile
  if (isMobile || !isVisible) {
    return null;
  }

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.3 : 1})`,
        }}
      >
        {/* Cleaning bottle cursor */}
        <div className="relative w-8 h-10">
          <svg
            width="32"
            height="40"
            viewBox="0 0 32 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Bottle body */}
            <rect
              x="8"
              y="12"
              width="16"
              height="24"
              rx="2"
              fill="url(#bottleGradient)"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="1.5"
            />
            {/* Bottle neck */}
            <rect
              x="12"
              y="8"
              width="8"
              height="6"
              rx="1"
              fill="url(#bottleGradient)"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="1.5"
            />
            {/* Spray head */}
            <circle
              cx="16"
              cy="6"
              r="3"
              fill="rgba(255, 255, 255, 0.9)"
              stroke="rgba(118, 213, 188, 0.6)"
              strokeWidth="1.5"
            />
            {/* Liquid inside */}
            <rect
              x="10"
              y="20"
              width="12"
              height="12"
              rx="1"
              fill="rgba(118, 213, 188, 0.4)"
            />
            {/* Sparkles when hovering */}
            {isHovering && (
              <>
                <circle cx="20" cy="14" r="1.5" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="12" cy="18" r="1" fill="rgba(255, 255, 255, 0.7)" />
                <circle cx="22" cy="22" r="1.2" fill="rgba(255, 255, 255, 0.8)" />
              </>
            )}
            <defs>
              <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(118, 213, 188, 0.9)" />
                <stop offset="100%" stopColor="rgba(145, 102, 255, 0.8)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* Bubble trail effect when hovering */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="absolute -top-4 -left-4 w-3 h-3 bg-white/60 rounded-full animate-bubble-1" />
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-white/50 rounded-full animate-bubble-2" />
          <div className="absolute -bottom-3 -left-2 w-2.5 h-2.5 bg-white/40 rounded-full animate-bubble-3" />
        </div>
      )}
    </>
  );
}
