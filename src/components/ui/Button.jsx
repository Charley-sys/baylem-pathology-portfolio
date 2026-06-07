import React from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  external = false,
  icon,
}) {
  const base =
    "inline-flex items-center gap-2 font-bold rounded-lg transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-800 text-white px-7 py-3.5 text-sm tracking-wide hover:bg-blue-900 active:scale-95 shadow-lg shadow-blue-800/20",
    secondary:
      "bg-transparent text-charcoal-900 px-7 py-3.5 text-sm tracking-wide border-2 border-charcoal-200 hover:border-blue-800 hover:text-blue-800 active:scale-95",
    ghost:
      "bg-white/10 text-white px-7 py-3.5 text-sm tracking-wide border border-white/20 hover:bg-white/20 active:scale-95 backdrop-blur-sm",
    link: "text-blue-800 text-sm px-0 py-0 underline-link",
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: variant !== "link" ? 1.02 : 1 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(base, variants[variant], className)}
    >
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </Tag>
  );
}
