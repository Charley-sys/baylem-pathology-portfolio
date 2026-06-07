import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";
import { coldChainSolutions } from "../../data/content";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import AnimatedSection, {
  StaggerContainer,
  StaggerChild,
} from "../ui/AnimatedSection";
import Badge from "../ui/Badge";

const brandBlue = "#1b0ddc";

export default function ColdChain() {
  const [active, setActive] = useState(null);

  return (
    <section id="cold-chain" className="bg-charcoal-950 section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <AnimatedSection variant="fadeUp">
              <span className="eyebrow text-white/40 mb-4 block tracking-widest text-xs uppercase font-semibold">
                Cold Chain Systems
              </span>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] text-white leading-[1.12]">
                Temperature-Controlled
                <em style={{ color: brandBlue }} className="not-italic block">
                  Storage Solutions
                </em>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeUp" delay={0.2} className="max-w-sm">
            <p className="text-white/45 text-[0.95rem] leading-[1.85]">
              From WHO-compliant vaccine cold rooms to large-scale industrial
              refrigeration — engineered for reliability in the African context.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden"
          stagger={0.08}
          delay={0.2}
        >
          {coldChainSolutions.map((sol) => (
            <StaggerChild key={sol.id} variant="fadeUp">
              <ColdChainCard
                sol={sol}
                isActive={active === sol.id}
                onToggle={() => setActive(active === sol.id ? null : sol.id)}
              />
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ColdChainCard({ sol, isActive, onToggle }) {
  return (
    <motion.div
      layout
      className="relative bg-charcoal-900 overflow-hidden group cursor-pointer flex flex-col"
      onClick={onToggle}
      whileHover={{ backgroundColor: "#111827" }}
      transition={{ duration: 0.25 }}
    >
      {/* Image */}
      <div
        className="relative w-full bg-charcoal-800 flex items-center justify-center overflow-hidden"
        style={{ minHeight: 260 }}
      >
        {sol.image ? (
          <>
            <img
              src={sol.image}
              alt={sol.title}
              className="w-full h-full"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                maxHeight: 320,
                width: "100%",
              }}
            />

            <div
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(17,24,39,0.85), transparent)",
              }}
            />
          </>
        ) : (
          <ImagePlaceholder
            image={sol.image}
            imagePlaceholderClass={sol.imagePlaceholderClass}
            imagePlaceholderText={sol.imagePlaceholderText}
            alt={sol.title}
            className="w-full h-full"
          />
        )}

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: `${brandBlue}22` }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Badge */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="dark">{sol.category}</Badge>
        </div>

        {/* Expand icon */}
        <motion.div
          className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: brandBlue }}
          animate={{ rotate: isActive ? 90 : 0 }}
        >
          <ChevronRight size={14} className="text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-display text-[1.15rem] text-white mb-2 leading-snug transition-colors"
          style={{ color: isActive ? brandBlue : undefined }}
        >
          {sol.title}
        </h3>

        <p className="text-white/50 text-[13px] leading-[1.75]">
          {sol.description}
        </p>

        {/* Specs */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="specs"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-5 pt-5 border-t border-white/10">
                <p
                  className="text-[10px] font-bold tracking-[0.18em] uppercase mb-3"
                  style={{ color: brandBlue }}
                >
                  Key Specifications
                </p>

                <ul className="flex flex-col gap-2.5">
                  {sol.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-2.5 text-white/65 text-[12.5px]"
                    >
                      <Check
                        size={13}
                        style={{ color: brandBlue }}
                        className="flex-shrink-0 mt-0.5"
                      />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{
          backgroundColor: brandBlue,
          width: "100%",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  );
}