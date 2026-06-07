import React from "react";
import { clsx } from "clsx";

/**
 * Renders a real image if provided, otherwise a styled gradient placeholder.
 * When you have real images, just pass: image={require("../assets/images/...")}
 */
export default function ImagePlaceholder({
  image,
  imagePlaceholderClass = "img-cold-1",
  imagePlaceholderText = "",
  alt = "",
  className = "",
  children,
}) {
  if (image) {
    return (
      <div className={clsx("relative overflow-hidden", className)}>
        <img
          src={image}
          alt={alt || imagePlaceholderText}
          className="w-full h-full object-cover"
        />
        {children}
      </div>
    );
  }

  return (
    <div className={clsx("relative overflow-hidden flex items-end", imagePlaceholderClass, className)}>
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      {/* Corner label */}
      <div className="absolute top-4 right-4 text-white/20 font-display italic text-xs tracking-widest uppercase pointer-events-none select-none">
        {imagePlaceholderText}
      </div>
      {/* Decorative circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 rounded-full border border-white/5" />
        <div className="absolute w-20 h-20 rounded-full border border-white/5" />
      </div>
      {children}
    </div>
  );
}

/**
 * Usage with real image:
 * <ImagePlaceholder image={require("../assets/images/coldchain/vaccine-cold-room.jpg")} alt="Vaccine Cold Room" />
 *
 * Usage with placeholder:
 * <ImagePlaceholder imagePlaceholderClass="img-cold-1" imagePlaceholderText="Vaccine Cold Room" />
 */
