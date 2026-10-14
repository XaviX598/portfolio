"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Process from "./Process";
import Certificates from "./Certificates";
import Contact from "./Contact";
import type { PortfolioLang } from "./HomeClient";
import { navigateToSection } from "@/lib/navigation";

interface EpicPageProps {
  lang: PortfolioLang;
}

const sectionConfigs = [
  { id: "hero", component: Hero, label: "Hero" },
  { id: "services", component: Services, label: "Services" },
  { id: "projects", component: Projects, label: "Projects" },
  { id: "process", component: Process, label: "Process" },
  { id: "certificates", component: Certificates, label: "Certificates" },
  { id: "contact", component: Contact, label: "Contact" },
];

// Todas las secciones se renderizan y el scroll es nativo:
// funciona con touch, trackpad y teclado, y Google ve todo el contenido.
export default function EpicPage({ lang }: EpicPageProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = sectionConfigs.findIndex((section) => section.id === entry.target.id);
          if (index >= 0) setActiveSection(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sectionConfigs.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full">
      <nav className="epic-nav" aria-label="Secciones">
        {sectionConfigs.map((section, index) => (
          <button
            key={section.id}
            type="button"
            onClick={() => navigateToSection(section.id)}
            data-label={section.label}
            className={`epic-nav-dot ${index === activeSection ? "active" : ""}`}
            aria-label={`Go to ${section.label}`}
          />
        ))}
      </nav>

      {sectionConfigs.map(({ id, component: Component }) => (
        <div key={id} id={id} className="epic-section">
          <Component lang={lang} />
        </div>
      ))}
    </div>
  );
}
