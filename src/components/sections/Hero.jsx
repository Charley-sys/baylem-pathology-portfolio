import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Thermometer, Microscope } from "lucide-react";
import Button from "../ui/Button";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const heroRef = useRef(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.4 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mouse parallax — desktop only
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Fade-up load effect
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.opacity = "0";
    hero.style.transform = "translateY(20px)";
    const timer = setTimeout(() => {
      hero.style.transition = "all 0.8s ease-out";
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-charcoal-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-charcoal-950 to-charcoal-950" />
      <div className="absolute inset-0 grid-pattern opacity-100 pointer-events-none" />
      <div className="absolute top-[-15%] right-[20%] w-[600px] h-[600px] rounded-full bg-blue-800/10 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-blue-700/8 blur-[80px]" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center min-h-screen pt-24 pb-16 lg:py-28 gap-10 lg:gap-16"
      >
        {/* ── LEFT: Text ─────────────────────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 max-w-2xl w-full text-center lg:text-left"
        >
          <motion.h1
            variants={item}
            className="font-display text-[clamp(2rem,5vw,4.4rem)] text-white leading-[1.08] mb-6"
          >
            Advanced Cold Chain Storage, Pathology, and Morgue Infrastructure Solutions{" "}
            <em className="text-[#1b0ddc]">Engineered</em>
            <br className="hidden lg:block" />
            {" "}for Performance
          </motion.h1>

          <motion.p
            variants={item}
            className="text-white/55 text-[0.95rem] lg:text-[1.05rem] leading-[1.85] mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Baylem Ltd delivers end-to-end medical & non-medical cold chain, pathology, and
            mortuary solutions across East Africa, backed by expert installations, preventive
            maintenance, repairs, service contracts, and dependable after-sales technical support.
            Our solutions are engineered to ensure reliability, compliance, precision and
            uninterrupted technical performance.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"
          >
            <Button
              variant="primary"
              icon={<Thermometer size={15} />}
              className="text-[#1b0ddc] w-full sm:w-auto"
              onClick={() =>
                document.getElementById("cold-chain")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Cold Chain Storage Solutions
            </Button>

            <Button
              variant="ghost"
              icon={<Microscope size={15} />}
              className="text-[#1b0ddc] w-full sm:w-auto"
              onClick={() =>
                document.getElementById("pathology")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Pathology & Mortuary Systems
            </Button>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Hero image ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 flex justify-center items-center w-full"
        >
          <div
            ref={imageRef}
            className="relative w-full"
            style={{
              maxWidth: isMobile ? "100%" : "560px",
              transform: isMobile
                ? "none"
                : `perspective(1000px) rotateY(${pos.x * 0.6}deg) rotateX(${-pos.y * 0.6}deg)`,
              transition: "transform 0.12s ease-out",
            }}
          >
            {/* Glow — desktop only */}
            {!isMobile && (
              <div
                className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl opacity-60 pointer-events-none"
                style={{
                  transform: `translate(${pos.x * 0.5}px, ${pos.y * 0.5}px)`,
                }}
              />
            )}

            <img
              src={require("../../assets/images/hero/baylem-hero.png")}
              alt="Baylem cold chain installation"
              className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
              style={{
                // Full image visible on all screens — no cropping
                objectFit: "contain",
                objectPosition: "center",
                // On mobile: natural height; on desktop: cap at 560px
                maxHeight: isMobile ? "none" : "560px",
                display: "block",
                imageRendering: "high-quality",
              }}
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}