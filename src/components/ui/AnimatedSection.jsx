import React from "react";
import { motion } from "framer-motion";

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
};

/**
 * Wraps children with a scroll-triggered Framer Motion animation.
 *
 * @param {string} variant - "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale"
 * @param {number} delay - seconds delay (e.g. 0.1, 0.2)
 * @param {number} duration - animation duration in seconds
 * @param {string} className - extra classes
 */
export default function AnimatedSection({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  as: Tag = "div",
}) {
  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      variants={variants[variant]}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Stagger container — animates children sequentially.
 */
export function StaggerContainer({ children, className = "", stagger = 0.1, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger child — must be inside StaggerContainer.
 */
export function StaggerChild({ children, className = "", variant = "fadeUp" }) {
  return (
    <motion.div className={className} variants={variants[variant]}>
      {children}
    </motion.div>
  );
}
