import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { partners } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";

const brandBlue = "#1b0ddc";

export default function Partners() {
  const tripled = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="bg-charcoal-900 section-pad overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <AnimatedSection variant="fadeUp">
              <span className="eyebrow text-white/35 mb-4 block">
                Technology Partners
              </span>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] text-white leading-[1.12]">
                Global Brands.{" "}
                <em style={{ color: brandBlue }} className="not-italic">
                  Local Delivery.
                </em>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeUp" delay={0.2} className="max-w-sm">
            <p className="text-white/40 text-sm leading-relaxed">
              We distribute, install, and service equipment from the world's
              leading cold chain and pathology technology manufacturers —
              supported by local aftersales teams.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Marquee rows */}
      <MarqueeRow items={tripled} direction="forward" className="mb-3" />
      <MarqueeRow items={tripled} direction="reverse" dim />

      {/* Bottom note */}
      <AnimatedSection
        variant="fadeUp"
        delay={0.3}
        className="max-w-7xl mx-auto px-6 lg:px-10 mt-14"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10 border-t border-white/10">
          <p className="text-white/30 text-[12.5px]">
            Authorised distributor and service partner across Kenya and East Africa.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="text-[13px] font-bold tracking-wide underline-link transition-colors"
            style={{ color: brandBlue }}
            onMouseOver={(e) => (e.target.style.color = "#3b35ff")}
            onMouseOut={(e) => (e.target.style.color = brandBlue)}
          >
            Enquire about a specific brand →
          </motion.button>
        </div>
      </AnimatedSection>
    </section>
  );
}

/* ───────────────────────────── Marquee ───────────────────────────── */

function MarqueeRow({ items, direction = "forward", dim = false, className = "" }) {
  const trackRef = useRef(null);
  const [singleWidth, setSingleWidth] = useState(0);

  useEffect(() => {
    function measure() {
      if (!trackRef.current) return;

      const children = trackRef.current.children;
      if (!children.length) return;

      const count = items.length;
      const gap = 12;

      let w = 0;
      for (let i = 0; i < count && i < children.length; i++) {
        w += children[i].getBoundingClientRect().width + gap;
      }

      setSingleWidth(w);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  const SPEED_PX_PER_S = 120;
  const duration = singleWidth > 0 ? singleWidth / SPEED_PX_PER_S : 20;

  const animate =
    direction === "forward"
      ? { x: [0, -singleWidth] }
      : { x: [-singleWidth, 0] };

  return (
    <div className={`relative ${className}`} style={{ overflow: "hidden" }}>
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-charcoal-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-charcoal-900 to-transparent z-10 pointer-events-none" />

      <motion.div
        ref={trackRef}
        className="flex gap-3"
        style={{ width: "max-content", willChange: "transform" }}
        animate={singleWidth > 0 ? animate : {}}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {items.map((p, i) => (
          <PartnerTile key={`${direction}-${p.id}-${i}`} partner={p} dim={dim} />
        ))}
      </motion.div>
    </div>
  );
}

/* ───────────────────────────── Tile ───────────────────────────── */

function PartnerTile({ partner, dim = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3 }}
      className={`
        flex-shrink-0
        bg-white/60
        backdrop-blur-sm
        border border-white/20
        rounded-xl
        px-7 py-5
        flex items-center justify-center
        cursor-default
        min-w-[180px] sm:min-w-[220px]
        h-[90px] sm:h-[110px]
        hover:bg-white/65
        transition-all duration-300
        ${dim ? "opacity-70" : ""}
      `}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-10 sm:max-h-14 max-w-[130px] sm:max-w-[160px] object-contain"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}