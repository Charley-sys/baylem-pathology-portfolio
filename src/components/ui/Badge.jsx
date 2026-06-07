import React from "react";
import { clsx } from "clsx";

export default function Badge({ children, variant = "blue", className = "" }) {
  const variants = {
    blue: "bg-blue-800/10 text-blue-800 border border-blue-800/20",
    white: "bg-white/10 text-white border border-white/20 backdrop-blur-sm",
    dark: "bg-charcoal-900/80 text-white/80 border border-white/10 backdrop-blur-sm",
    outline: "bg-transparent text-charcoal-500 border border-charcoal-200",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full font-bold tracking-widest uppercase",
        "text-[10px]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
