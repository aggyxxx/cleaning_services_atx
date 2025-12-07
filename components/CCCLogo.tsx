import React from "react";
import Image from "next/image";

type CCCLogoProps = {
  className?: string;
  size?: number;
};

export function CCCLogo({ className = "", size = 40 }: CCCLogoProps) {
  return (
    <Image
      src="/COM.png"
      alt="CCC Logo"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}

