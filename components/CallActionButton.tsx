"use client";

import { useContactModal } from "@/lib/useContactModal";

type CallActionButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "mobile";
};

export function CallActionButton({
  children,
  className = "",
  variant = "primary"
}: CallActionButtonProps) {
  const { openModal } = useContactModal();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

