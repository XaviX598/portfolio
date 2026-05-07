"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Process from "./Process";
import Contact from "./Contact";
import type { PortfolioLang } from "./HomeClient";
import { EPIC_NAVIGATE_TO_EVENT } from "@/lib/navigation";

interface EpicPageProps {
  lang: PortfolioLang;
}

const sectionConfigs = [
  { id: "hero", component: Hero, label: "Hero" },
  { id: "services", component: Services, label: "Services" },
  { id: "projects", component: Projects, label: "Projects" },
  { id: "process", component: Process, label: "Process" },
  { id: "contact", component: Contact, label: "Contact" },
];

export default function EpicPage({ lang }: EpicPageProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [processLastIndex, setProcessLastIndex] = useState(0); // Guardar el Ãºltimo Ã­ndice de Process
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
      // Si estamos en projects (2) o process (3), permitir scroll pequeÃ±o para navegar proyectos/timeline
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
            // Guardar Ã­ndice de Process antes de salir
            if (activeSection === 3) {
              setProcessLastIndex(6); // Siempre guardar el Ãºltimo paso
            }
            setActiveSection((prev) => Math.min(prev + 1, sectionConfigs.length - 1));
          } else if (e.deltaY < -30 && activeSection > 0) {
            setActiveSection((prev) => Math.max(prev - 1, 0));
          }
        }, 50);
      }
    };

    // Listener para navegaciÃ³n desde Projects/Process
    const handleEpicNavigate = (e: CustomEvent) => {
      e.preventDefault();
      if (e.detail.direction === 'prev' && activeSection > 0) {
        setActiveSection(prev => prev - 1);
      } else if (e.detail.direction === 'next' && activeSection < sectionConfigs.length - 1) {
        // Guardar Ã­ndice de Process antes de ir a Contact
        if (activeSection === 3) {
          setProcessLastIndex(6);
        }
        setActiveSection(prev => prev + 1);
      }
    };

    const handleEpicNavigateTo = (event: Event) => {
      const customEvent = event as CustomEvent<{ sectionId?: string }>;
      const targetSectionId = customEvent.detail?.sectionId;
      const targetIndex = sectionConfigs.findIndex(
        (section) => section.id === targetSectionId,
      );

      if (targetIndex >= 0) {
        setActiveSection(targetIndex);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("epicNavigate", handleEpicNavigate as EventListener);
    window.addEventListener(EPIC_NAVIGATE_TO_EVENT, handleEpicNavigateTo);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("epicNavigate", handleEpicNavigate as EventListener);
      window.removeEventListener(EPIC_NAVIGATE_TO_EVENT, handleEpicNavigateTo);
      clearTimeout(timeout);
    };
  }, [activeSection]);

  return (
    <div ref={containerRef} className="epic-page relative w-full h-screen overflow-hidden">
      {/* NavegaciÃ³n lateral con labels */}
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

{/* UNA SOLA secciÃ³n visible a la vez - FULLSCREEN con animaciones */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`section-${activeSection}`}
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
              // Si es Process, pasar el Ãºltimo Ã­ndice
              if (sectionConfigs[activeSection].id === 'process') {
                const ProcessComponent = Component as React.ComponentType<{ lang: PortfolioLang; initialIndex?: number }>;
                return <ProcessComponent key="process-section" lang={lang} initialIndex={processLastIndex} />;
              }
              return <Component lang={lang} />;
            })()}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

