import React from "react";

type CozyCleanLogoProps = {
  className?: string;
  size?: number;
};

export function CozyCleanLogo({ className = "", size = 120 }: CozyCleanLogoProps) {
  const iconSize = size * 0.4;
  const textSize = size * 0.6;
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Soft sparkle icon */}
      <div className="relative flex-shrink-0" style={{ width: iconSize, height: iconSize }}>
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-sage-500"
        >
          {/* Main circle */}
          <circle cx="20" cy="20" r="12" fill="currentColor" opacity="0.15"/>
          <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.3"/>
          <circle cx="20" cy="20" r="3" fill="currentColor"/>
          
          {/* Sparkle points */}
          <path
            d="M20 8 L20 12 M20 28 L20 32 M8 20 L12 20 M28 20 L32 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M14 14 L16 16 M26 24 L28 26 M14 26 L16 24 M26 14 L28 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span
          className="font-display font-semibold text-slate-800 leading-tight"
          style={{ fontSize: `${textSize * 0.3}px` }}
        >
          Cozy Clean
        </span>
        <span
          className="font-sans font-medium text-sage-600 tracking-wider leading-tight"
          style={{ fontSize: `${textSize * 0.2}px` }}
        >
          ATX
        </span>
      </div>
    </div>
  );
}

