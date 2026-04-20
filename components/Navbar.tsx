"use client";

import { useState, useRef, useEffect } from "react";
import type { PortfolioLang } from "./HomeClient";

type NavbarProps = {
  lang: PortfolioLang;
  onLangChange: (lang: PortfolioLang) => void;
};

const navItems = [
  { id: "home", label: { en: "Home", es: "Inicio" } },
  { id: "projects", label: { en: "Projects", es: "Proyectos" } },
  { id: "services", label: { en: "Services", es: "Servicios" } },
  { id: "experience", label: { en: "Experience", es: "Experiencia" } },
  { id: "about", label: { en: "About", es: "Sobre mi" } },
  { id: "contact", label: { en: "Contact", es: "Contacto" } },
];

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors"
          >
<img 
              src="/nuevo-logo.svg" 
              alt="Xpress" 
              className="h-10 w-10"
            />
            <svg 
              className={`w-4 h-4 transition-transform ${menuOpen ? "rotate-180" : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 py-2 rounded-xl border border-white/10 bg-zinc-900/95 backdrop-blur shadow-xl">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.label[lang]}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex border border-white/10 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => onLangChange("es")}
              className={`px-3 py-1.5 text-xs transition-colors ${
                lang === "es"
                  ? "bg-white text-black font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onLangChange("en")}
              className={`px-3 py-1.5 text-xs transition-colors ${
                lang === "en"
                  ? "bg-white text-black font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}