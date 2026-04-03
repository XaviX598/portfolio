"use client";

import { useEffect, useMemo, useState } from "react";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";

type NavbarProps = {
  lang: PortfolioLang;
  onLangChange: (lang: PortfolioLang) => void;
};

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const labels = useMemo(
    () => ({
      role: lang === "en" ? "Full Stack Engineer" : "Ingeniero Full Stack",
      letsTalk: lang === "en" ? "Let's Talk" : "Hablemos",
      nav: {
        projects: lang === "en" ? "Projects" : "Proyectos",
        services: lang === "en" ? "Services" : "Servicios",
        experience: lang === "en" ? "Experience" : "Experiencia",
        certificates: lang === "en" ? "Certificates" : "Certificados",
        about: lang === "en" ? "About" : "Sobre mi",
        contact: lang === "en" ? "Contact" : "Contacto",
      },
    }),
    [lang]
  );

  const navItems = [
    { href: "#projects", label: labels.nav.projects },
    { href: "#services", label: labels.nav.services },
    { href: "#experience", label: labels.nav.experience },
    { href: "#certificates", label: labels.nav.certificates },
    { href: "#about", label: labels.nav.about },
    { href: "#contact", label: labels.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/92 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        <a href="#home" className="leading-tight">
          <p className="text-zinc-100 font-semibold tracking-wide text-sm sm:text-base">
            Kevin Xavier Aguilar Velasco
          </p>
          <p className="text-xs text-zinc-400 uppercase tracking-[0.14em]">
            {labels.role}
          </p>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-teal-300 hover:bg-teal-500/10 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <div className="flex border border-white/10 rounded-lg overflow-hidden bg-zinc-900/70">
            <button
              type="button"
              onClick={() => onLangChange("es")}
              className={`px-2.5 py-1.5 text-xs transition-colors ${
                lang === "es"
                  ? "bg-teal-500 text-zinc-950 font-semibold"
                  : "text-zinc-400 hover:text-teal-300"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onLangChange("en")}
              className={`px-2.5 py-1.5 text-xs transition-colors ${
                lang === "en"
                  ? "bg-teal-500 text-zinc-950 font-semibold"
                  : "text-zinc-400 hover:text-teal-300"
              }`}
            >
              EN
            </button>
          </div>

          <MotionButton
            href="#contact"
            label={labels.letsTalk}
            size="md"
            variant="primary"
            className="text-sm"
          />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-700 text-zinc-300 hover:text-teal-300 hover:border-teal-400 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-lg">{menuOpen ? "X" : "≡"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-3 px-4">
          <div className="rounded-xl border border-white/10 bg-zinc-900/95 backdrop-blur p-3 flex flex-col gap-1">
            <div className="flex border border-white/10 rounded-lg overflow-hidden mb-2">
              <button
                type="button"
                onClick={() => onLangChange("es")}
                className={`px-2.5 py-1.5 text-xs flex-1 ${
                  lang === "es"
                    ? "bg-teal-500 text-zinc-950 font-semibold"
                    : "text-zinc-400"
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => onLangChange("en")}
                className={`px-2.5 py-1.5 text-xs flex-1 ${
                  lang === "en"
                    ? "bg-teal-500 text-zinc-950 font-semibold"
                    : "text-zinc-400"
                }`}
              >
                EN
              </button>
            </div>

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-zinc-300 hover:text-teal-300 hover:bg-teal-500/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <MotionButton
              href="#contact"
              label={labels.letsTalk}
              size="md"
              variant="primary"
              className="mt-2 text-sm justify-center"
              onClick={() => setMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

