"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Process from "./Process";
import type { PortfolioLang } from "./HomeClient";

interface EpicPageProps {
  lang: PortfolioLang;
}

const sectionConfigs = [
  { id: "hero", component: Hero, label: "Hero" },
  { id: "services", component: Services, label: "Services" },
  { id: "projects", component: Projects, label: "Projects" },
  { id: "process", component: Process, label: "Process" },
];

export default function EpicPage({ lang }: EpicPageProps) {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);

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
      // Si estamos en projects (2) o process (3), permitir scroll pequeño para navegar proyectos/timeline
      if (activeSection === 2 || activeSection === 3) {
        return;
      }
      
      e.preventDefault();
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      
      if (timeSinceLastScroll > 800) {
        lastScrollTime.current = now;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (e.deltaY > 30 && activeSection < sectionConfigs.length - 1) {
            setActiveSection((prev) => Math.min(prev + 1, sectionConfigs.length - 1));
          } else if (e.deltaY < -30 && activeSection > 0) {
            setActiveSection((prev) => Math.max(prev - 1, 0));
          }
        }, 50);
      }
    };

    // Listener para navegación desde Projects
    const handleEpicNavigate = (e: CustomEvent) => {
      e.preventDefault();
      if (e.detail.direction === 'prev' && activeSection > 0) {
        setActiveSection(prev => prev - 1);
      } else if (e.detail.direction === 'next' && activeSection < sectionConfigs.length - 1) {
        setActiveSection(prev => prev + 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("epicNavigate", handleEpicNavigate as EventListener);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("epicNavigate", handleEpicNavigate as EventListener);
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

{/* UNA SOLA sección visible a la vez - FULLSCREEN con animaciones */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sectionConfigs[activeSection].id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="w-full h-full">
            {(() => {
              const Component = sectionConfigs[activeSection].component;
              return <Component lang={lang} />;
            })()}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}