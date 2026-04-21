"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";

type NavbarProps = {
  lang: PortfolioLang;
  onLangChange: (lang: PortfolioLang) => void;
};

const navItems = [
  { id: "hero", label: { en: "Home", es: "Inicio" }, icon: "⌂" },
  { id: "stats", label: { en: "Statistics", es: "Estadísticas" }, icon: "📊" },
  { id: "services", label: { en: "Services", es: "Servicios" }, icon: "⚡" },
  { id: "projects", label: { en: "Projects", es: "Proyectos" }, icon: "💼" },
  { id: "about", label: { en: "About", es: "Sobre Mí" }, icon: "👤" },
  { id: "experience", label: { en: "Experience", es: "Experiencia" }, icon: "💫" },
  { id: "contact", label: { en: "Contact", es: "Contacto" }, icon: "✉" },
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
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
      <div className="w-full flex items-center justify-between">
        <div 
          className="relative" 
          ref={dropdownRef}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <button
            type="button"
            className="flex items-center gap-3 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group cursor-pointer"
          >
            <img 
              src="/logo-image.png" 
              alt="Xpress" 
              className="h-8"
            />
            <motion.span
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-zinc-400 group-hover:text-white text-xs"
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-3 w-64 py-3 rounded-2xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl shadow-2xl overflow-hidden"
              >
                <div className="px-3">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                    >
                      <span className="text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                      <span className="font-medium">
                        {item.label[lang]}
                      </span>
                      <motion.span
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        →
                      </motion.span>
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-3 pt-3 border-t border-white/10 mx-3">
                  <div className="px-4 py-2 text-xs text-zinc-500">
                    Portfolio v1.0 • Xpress
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-md">
            <button
              type="button"
              onClick={() => onLangChange("es")}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                lang === "es"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onLangChange("en")}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                lang === "en"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
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