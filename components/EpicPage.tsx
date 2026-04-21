"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Stats from "./Stats";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import type { PortfolioLang } from "./HomeClient";

interface EpicPageProps {
  lang: PortfolioLang;
}

const sectionConfigs = [
  { id: "hero", component: Hero, label: "Hero" },
  { id: "stats", component: Stats, label: "Stats" },
  { id: "services", component: Services, label: "Services" },
  { id: "projects", component: Projects, label: "Projects" },
  { id: "about", component: About, label: "About" },
  { id: "experience", component: Experience, label: "Experience" },
  { id: "contact", component: Contact, label: "Contact" },
];

export default function EpicPage({ lang }: EpicPageProps) {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Prevenir scroll del browser
  useEffect(() => {
    const originalStyle = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";
    return () => {
      window.document.body.style.overflow = originalStyle;
    };
  }, []);

  // Mouse wheel para navegar
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.deltaY > 50 && activeSection < sectionConfigs.length - 1) {
          setActiveSection((prev) => Math.min(prev + 1, sectionConfigs.length - 1));
        } else if (e.deltaY < -50 && activeSection > 0) {
          setActiveSection((prev) => Math.max(prev - 1, 0));
        }
      }, 50);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeout);
    };
  }, [activeSection]);

  return (
    <div ref={containerRef} className="epic-page relative w-full h-screen overflow-hidden">
      {/* Navegación lateral con labels */}
      <nav className="epic-nav">
        {sectionConfigs.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(index)}
            data-label={section.label}
            className={`epic-nav-dot ${index === activeSection ? "active" : ""}`}
            aria-label={`Go to ${section.label}`}
          />
        ))}
      </nav>

      {/* UNA SOLA sección visible a la vez - FULLSCREEN CENTERED */}
      <div className="w-full h-full relative">
        {sectionConfigs.map((section, index) => {
          const Component = section.component;
          const isActive = index === activeSection;

          if (!isActive) return null;

          return (
            <motion.div
              key={section.id}
              className="absolute inset-0 w-full h-full flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* El componente ocupa toda la pantalla sin padding extra - maneja su propio layout interno */}
              <div className="w-full h-full">
                <Component lang={lang} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}