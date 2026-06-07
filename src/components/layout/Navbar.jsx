import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { navLinks } from "../../data/content";
import BaylemLogo from "../../assets/images/baylem-logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={"fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-xl shadow-sm border-b border-charcoal-200" 
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[88px]">
          <a href="/" className="flex items-center group flex-shrink-0">
     <motion.img
          src={BaylemLogo}
          alt="Baylem"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          className="h-16 lg:h-20 w-auto object-contain"
    />
         </a>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-[13.5px] font-semibold transition-all duration-200 ${
                  isActive
                   ? "text-[#1b0ddc] bg-blue-50"
                   : "text-charcoal-700 hover:text-[#1b0ddc] hover:bg-charcoal-50"
             }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1b0ddc]"
                    />
                  )}
                </button>
              );
            })}

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              className="ml-3 px-5 py-2.5 bg-[#1b0ddc] text-white text-[13px] font-bold rounded-lg shadow-lg shadow-blue-800/25 hover:bg-blue-900 transition-colors"
            >
              Get In Touch
            </motion.button>

            {/* Back to main site */}
            <a
              href="https://baylem.com"
              target="_blank"
              rel="noopener noreferrer"
               className="ml-2 flex items-center gap-1 text-[11px] font-semibold tracking-wide text-charcoal-400 hover:text-blue-800 transition-colors"
>
               <ExternalLink size={11} />
                baylem.com
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
                 className="md:hidden p-2 rounded-lg text-charcoal-900 hover:bg-charcoal-100 transition-colors"
                 onClick={() => setMobileOpen(!mobileOpen)}
                 aria-label="Toggle menu"
>
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile nav drawer */}
<AnimatePresence>
  {mobileOpen && (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.22 }}
      className="fixed top-[96px] left-0 right-0 z-40 bg-white shadow-2xl border-b border-charcoal-200 md:hidden"
    >
      {/* Mobile logo strip */}
      <div className="flex items-center gap-3 px-6 pt-5 pb-4 border-b border-charcoal-100">
        <img
          src={BaylemLogo}
          alt="Baylem"
          className="h-12 w-auto object-contain"
        />
      </div>

      <div className="p-4 flex flex-col gap-1">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-left px-4 py-3 text-[14.5px] font-semibold text-charcoal-800 hover:text-[#1b0ddc] hover:bg-blue-50 rounded-lg transition-colors"
          >
            {link.label}
          </button>
        ))}

        <button
          onClick={() => scrollTo("#contact")}
          className="mt-2 px-4 py-3 bg-[#1b0ddc] text-white font-bold rounded-lg text-center text-[14px]"
        >
          Get In Touch
        </button>

        <a
          href="https://baylem.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 mt-1 px-4 py-2 text-[12px] font-semibold text-charcoal-400 hover:text-blue-800 transition-colors"
        >
          <ExternalLink size={11} />
          Back to baylem.com
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}