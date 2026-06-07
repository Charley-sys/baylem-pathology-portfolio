import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import StatsStrip from "./components/sections/StatsStrip";
import ColdChain from "./components/sections/ColdChain";
import Pathology from "./components/sections/Pathology";
import Projects from "./components/sections/Projects";
import Partners from "./components/sections/Partners";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <ColdChain />
        <Pathology />
        <Projects />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
