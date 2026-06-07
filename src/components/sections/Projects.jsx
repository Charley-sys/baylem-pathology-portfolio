import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowRight, X } from "lucide-react";
import { projects } from "../../data/content";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import AnimatedSection from "../ui/AnimatedSection";
import Badge from "../ui/Badge";

const brandBlue = "#1b0ddc";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="bg-charcoal-50 section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <AnimatedSection variant="fadeUp">
              <span className="eyebrow mb-4 block tracking-widest text-xs uppercase font-semibold">
                Featured Projects
              </span>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.12]">
                Delivered at Scale.{" "}
                <em style={{ color: brandBlue }} className="not-italic">
                  Built to Last.
                </em>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeUp" delay={0.15} className="max-w-sm">
            <p className="text-charcoal-500 text-sm leading-relaxed">
              Click any project to read the full case study — challenge, solution, and measurable impact.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((proj, i) => (
            <AnimatedSection key={proj.id} variant="fadeUp" delay={i * 0.1}>
              <ProjectCard proj={proj} onOpen={() => setSelected(proj)} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal proj={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ proj, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white border border-charcoal-200 rounded-2xl overflow-hidden cursor-pointer group flex flex-col"
      whileHover={{
        y: -5,
        boxShadow: `0 24px 60px ${brandBlue}22`,
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
    >
      {/* Image */}
      <div
        className="relative w-full bg-charcoal-100 flex items-center justify-center overflow-hidden"
        style={{ minHeight: 260 }}
      >
        {proj.image ? (
          <>
            <img
              src={proj.image}
              alt={proj.name}
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
                  "linear-gradient(to top, rgba(248,249,250,0.9) 0%, transparent 100%)",
              }}
            />
          </>
        ) : (
          <ImagePlaceholder
            image={proj.image}
            imagePlaceholderClass={proj.imagePlaceholderClass}
            imagePlaceholderText={proj.name}
            alt={proj.name}
            className="w-full h-full"
          />
        )}

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/20 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
        />

        {/* Tags */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {proj.tags.map((tag) => (
            <Badge key={tag} variant="dark">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Year */}
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="dark">{proj.year}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-charcoal-400 text-[11.5px] font-semibold mb-3">
          <MapPin size={11} />
          {proj.location}
        </div>

        <h3
          className="font-display text-[1.2rem] text-charcoal-900 mb-3 transition-colors"
          style={{ color: hovered ? brandBlue : undefined }}
        >
          {proj.name}
        </h3>

        <p className="text-charcoal-500 text-[13px] leading-[1.7] line-clamp-2">
          {proj.challenge}
        </p>

        {/* Impact */}
        <div className="mt-auto pt-5 border-t border-charcoal-100 flex justify-between">
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1"
              style={{ color: brandBlue }}
            >
              Impact
            </p>
            <p className="text-[12.5px] text-charcoal-600 font-medium">
              {proj.impact}
            </p>
          </div>

          <motion.div
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
            style={{
              backgroundColor: brandBlue,
              boxShadow: `0 10px 25px ${brandBlue}33`,
            }}
            animate={{
              scale: hovered ? 1 : 0.85,
              opacity: hovered ? 1 : 0.6,
            }}
          >
            <ArrowRight size={15} className="text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ proj, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative w-full bg-charcoal-100 flex items-center justify-center overflow-hidden rounded-t-2xl">
          <img
            src={proj.image}
            alt={proj.name}
            className="w-full h-full"
            style={{ objectFit: "contain", maxHeight: 340 }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 h-20"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
            }}
          />
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white"
          style={{ backgroundColor: brandBlue }}
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="font-display text-[1.7rem] mb-6">{proj.name}</h2>

          {[
            { label: "Challenge", text: proj.challenge },
            { label: "Solution", text: proj.solution },
            { label: "Impact", text: proj.impact },
          ].map((item) => (
            <div key={item.label} className="mb-5 p-5 border rounded-xl">
              <p className="text-xs font-bold mb-2" style={{ color: brandBlue }}>
                {item.label}
              </p>
              <p className="text-charcoal-700 text-[14px] leading-[1.7]">
                {item.text}
              </p>
            </div>
          ))}

          <button
            onClick={() => {
              onClose();
              setTimeout(
                () =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" }),
                300
              );
            }}
            className="w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2"
            style={{ backgroundColor: brandBlue }}
          >
            Discuss a Similar Project
            <ArrowRight size={15} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}