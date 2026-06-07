import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Phone, Mail, MapPin } from "lucide-react";
import BaylemLogo from "../../assets/images/baylem-logo.png";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src={BaylemLogo}
                alt="Baylem"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Baylem delivers comprehensive end-to-end solutions in medical and
              non-medical cold chain storage systems, pathology infrastructure,
              and mortuary equipment across Kenya and East Africa — engineered
              for precision, operational reliability, and mission-critical
              healthcare delivery.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/30 mb-5">
              Contact
            </h4>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone size={14} className="text-[#1b0ddc]" />
                <span>+254 726 128 040</span>
              </div>

              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={14} className="text-[#1b0ddc]" />
                <span>info@baylem.com</span>
                
              </div>

              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin size={14} className="text-[#1b0ddc]" />
                <span>Kenya & East Africa Region</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/30 mb-5">
              Solutions
            </h4>

            <div className="flex flex-col gap-3">
              {[
                "Cold Chain Storage Systems",
                "Pathology Infrastructure",
                "Mortuary Equipment",
                "Morgue Infrastructure",
                "Featured Projects",
              ].map((item) => (
                <span
                  key={item}
                  className="text-white/50 text-sm hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/25 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Baylem Ltd. All Rights Reserved.
          </p>

          <motion.a
            whileHover={{ x: 3 }}
            href="https://baylem.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/30 text-xs hover:text-white/60 transition-colors"
          >
            <ExternalLink size={11} />
            Visit Main Baylem Website
          </motion.a>
        </div>
      </div>
    </footer>
  );
}