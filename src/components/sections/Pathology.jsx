import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Microscope } from "lucide-react";
import { pathologySolutions } from "../../data/content";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import AnimatedSection from "../ui/AnimatedSection";
import Badge from "../ui/Badge";

const categories = ["All", "Histopathology", "Mortuary", "Anatomical Pathology"];

export default function Pathology() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    activeCategory === "All"
      ? pathologySolutions
      : pathologySolutions.filter((s) => s.category === activeCategory);

  return (
    <section id="pathology" className="bg-white section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <AnimatedSection variant="fadeUp">
              <span className="eyebrow mb-4 block tracking-widest text-xs uppercase font-semibold">
                Pathology Solutions
              </span>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.12]">
                Pathology &{" "}
                <em className="text-[#1b0ddc] not-italic">Mortuary</em>
                <br />
                Infrastructure
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeUp" delay={0.2}>
            <p className="text-charcoal-500 text-[0.95rem] leading-[1.85]">
              Complete histopathology laboratory setup, mortuary body storage
              systems, and anatomical pathology equipment — from concept to
              commissioning.
            </p>
          </AnimatedSection>
        </div>

        {/* Category Filter */}
        <AnimatedSection
          variant="fadeUp"
          delay={0.15}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[12.5px] font-bold tracking-wide border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#1b0ddc] text-white border-[#1b0ddc] shadow-md shadow-[#1b0ddc]/20"
                  : "bg-white text-charcoal-500 border-charcoal-200 hover:border-[#1b0ddc] hover:text-[#1b0ddc]"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((sol, i) => (
              <motion.div
                key={sol.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="relative bg-charcoal-50 border border-charcoal-200 rounded-2xl overflow-hidden group card-lift flex flex-col"
                onMouseEnter={() => setHoveredId(sol.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Area */}
                <div
                  className="relative w-full bg-charcoal-100 flex items-center justify-center overflow-hidden"
                  style={{ minHeight: 240 }}
                >
                  {sol.image ? (
                    <>
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full"
                        style={{
                          display: "block",
                          objectFit: "contain",
                          objectPosition: "center",
                          maxHeight: 300,
                          width: "100%",
                          imageRendering: "high-quality",
                        }}
                        loading="lazy"
                        decoding="async"
                      />

                      <div
                        className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(248,249,250,0.9) 0%, transparent 100%)",
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
                      style={{
                        objectFit: "contain",
                        maxHeight: 300,
                      }}
                    />
                  )}

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-[#1b0ddc]/30 pointer-events-none"
                    animate={{
                      opacity: hoveredId === sol.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="dark">{sol.category}</Badge>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-[1.1rem] text-charcoal-900 mb-2 leading-snug group-hover:text-[#1b0ddc] transition-colors duration-200">
                    {sol.title}
                  </h3>

                  <p className="text-charcoal-500 text-[13px] leading-[1.75] mb-4">
                    {sol.description}
                  </p>

                  {sol.brand && (
                    <p className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-charcoal-400 mt-auto">
                      <span className="text-[#1b0ddc]">Brand:</span>{" "}
                      {sol.brand}
                    </p>
                  )}
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-4 right-4 z-10 w-8 h-8 rounded-full bg-[#1b0ddc] flex items-center justify-center shadow-md"
                  animate={{
                    scale: hoveredId === sol.id ? 1 : 0,
                    opacity: hoveredId === sol.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={14} className="text-white" />
                </motion.div>

                {/* Bottom Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#1b0ddc] to-[#4c42ff]"
                  animate={{
                    scaleX: hoveredId === sol.id ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  style={{
                    transformOrigin: "left",
                    width: "100%",
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Callout Strip */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="mt-12">
          <div className="relative overflow-hidden bg-charcoal-950 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1b0ddc]/20 border border-[#1b0ddc]/30 flex items-center justify-center">
                  <Microscope
                    size={18}
                    className="text-[#6b63ff]"
                  />
                </div>

                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6b63ff]">
                  Full Lifecycle Support
                </span>
              </div>

              <h3 className="font-display text-2xl text-white mb-2">
                IQ/OQ/PQ Validation & Regulatory Compliance
              </h3>

              <p className="text-white/50 text-sm leading-relaxed max-w-lg">
                All pathology and mortuary systems include full Installation,
                Operational, and Performance Qualification validation with
                Kenya health authority compliance documentation.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03, x: 3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative z-10 flex-shrink-0 flex items-center gap-2.5 bg-[#1b0ddc] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#160ab5] transition-colors shadow-lg shadow-[#1b0ddc]/30"
            >
              Request Validation Package
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}