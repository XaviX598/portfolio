"use client";

import { useEffect, useMemo, useState } from "react";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";

type NavbarProps = {
  lang: PortfolioLang;
  onLangChange: (lang: PortfolioLang) => void;
};

const sectionIds = [
  "home",
  "projects",
  "services",
  "experience",
  "certificates",
  "about",
  "contact",
] as const;

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-42% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const labels = useMemo(
    () => ({
      role: lang === "en" ? "Full Stack Engineer" : "Ingeniero Full Stack",
      letsTalk: lang === "en" ? "Let's Talk" : "Hablemos",
      nav: {
        home: lang === "en" ? "Home" : "Inicio",
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
    { href: "#home", label: labels.nav.home },
    { href: "#projects", label: labels.nav.projects },
    { href: "#services", label: labels.nav.services },
    { href: "#experience", label: labels.nav.experience },
    { href: "#certificates", label: labels.nav.certificates },
    { href: "#about", label: labels.nav.about },
    { href: "#contact", label: labels.nav.contact },
  ];

  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-4 sm:px-6">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-teal-300/35 bg-zinc-950/86 backdrop-blur-xl shadow-[0_16px_42px_rgba(0,0,0,0.42)]"
            : "border-white/15 bg-zinc-950/55 backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-3 sm:px-4 py-2.5">
          <a href="#home" className="flex items-center gap-3 min-w-0">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-300 to-cyan-400 text-zinc-950 text-sm font-bold shadow-lg shadow-teal-500/25">
              KA
            </span>
            <span className="min-w-0">
              <span className="block text-zinc-100 font-semibold tracking-wide text-sm sm:text-base truncate">
                Kevin Xavier Aguilar Velasco
              </span>
              <span className="block text-[11px] text-zinc-400 uppercase tracking-[0.14em] truncate">
                {labels.role}
              </span>
            </span>
          </a>

          <div className="hidden xl:flex items-center gap-1 rounded-xl border border-white/10 bg-zinc-900/55 p-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-all duration-250 ${
                  activeSection === item.href
                    ? "text-teal-200 border-teal-300/45 bg-teal-500/15"
                    : "text-zinc-300 border-transparent hover:text-teal-200 hover:border-teal-300/25 hover:bg-teal-500/10"
                }`}
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
                    : "text-zinc-400 hover:text-teal-200"
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
                    : "text-zinc-400 hover:text-teal-200"
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
            <span className="text-lg">{menuOpen ? "✕" : "≡"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="sm:hidden px-3 pb-3">
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
                  onClick={() => {
                    setActiveSection(item.href);
                    setMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === item.href
                      ? "text-teal-200 bg-teal-500/12 border border-teal-300/30"
                      : "text-zinc-300 hover:text-teal-300 hover:bg-teal-500/10"
                  }`}
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
      </div>
    </nav>
  );
}

