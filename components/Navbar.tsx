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
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
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
      pin: lang === "en" ? "Pin" : "Fijar",
      unpin: lang === "en" ? "Unpin" : "Soltar",
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
    { href: "#home", label: labels.nav.home, icon: "H" },
    { href: "#projects", label: labels.nav.projects, icon: "P" },
    { href: "#services", label: labels.nav.services, icon: "S" },
    { href: "#experience", label: labels.nav.experience, icon: "E" },
    { href: "#certificates", label: labels.nav.certificates, icon: "C" },
    { href: "#about", label: labels.nav.about, icon: "A" },
    { href: "#contact", label: labels.nav.contact, icon: "@" },
  ];

  const isExpanded = isPinned || isHoverExpanded;

  return (
    <>
      <aside
        className="hidden md:block fixed left-4 top-4 bottom-4 z-50"
        onMouseEnter={() => setIsHoverExpanded(true)}
        onMouseLeave={() => setIsHoverExpanded(false)}
      >
        <div
          className={`h-full rounded-2xl border overflow-hidden transition-all duration-350 ease-out ${
            isExpanded ? "w-[312px]" : "w-[82px]"
          } ${
            scrolled
              ? "border-teal-300/40 bg-zinc-950/86 backdrop-blur-xl shadow-[0_16px_42px_rgba(0,0,0,0.45)]"
              : "border-white/15 bg-zinc-950/60 backdrop-blur-lg"
          }`}
        >
          <div className="h-full flex flex-col px-2 py-3">
            <div className="flex items-center gap-3 px-2 mb-3">
              <a href="#home" className="flex items-center gap-3 min-w-0 flex-1">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-300 to-cyan-400 text-zinc-950 text-sm font-bold shadow-lg shadow-teal-500/25">
                  KA
                </span>
                <span
                  className={`min-w-0 overflow-hidden transition-all duration-250 ${
                    isExpanded
                      ? "max-w-[210px] opacity-100 translate-x-0"
                      : "max-w-0 opacity-0 -translate-x-2"
                  }`}
                >
                  <span className="block text-zinc-100 font-semibold tracking-wide text-sm truncate">
                    Kevin Xavier
                  </span>
                  <span className="block text-[11px] text-zinc-400 uppercase tracking-[0.14em] truncate">
                    {labels.role}
                  </span>
                </span>
              </a>

              <button
                type="button"
                onClick={() => setIsPinned((prev) => !prev)}
                className={`hidden lg:inline-flex shrink-0 h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                  isPinned
                    ? "border-teal-300/45 bg-teal-500/20 text-teal-100"
                    : "border-white/15 text-zinc-400 hover:text-teal-200 hover:border-teal-300/35"
                }`}
                aria-label={isPinned ? labels.unpin : labels.pin}
                title={isPinned ? labels.unpin : labels.pin}
              >
                {isPinned ? "•" : "○"}
              </button>
            </div>

            <nav className="mt-1 flex-1 overflow-y-auto pr-1">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveSection(item.href)}
                    className={`group flex items-center gap-3 rounded-xl border px-2 py-2 transition-all duration-250 ${
                      activeSection === item.href
                        ? "border-teal-300/45 bg-teal-500/14 text-teal-100"
                        : "border-transparent text-zinc-300 hover:border-teal-300/25 hover:bg-teal-500/8 hover:text-teal-200"
                    }`}
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-zinc-900/65 text-sm font-semibold">
                      {item.icon}
                    </span>
                    <span
                      className={`overflow-hidden whitespace-nowrap transition-all duration-250 ${
                        isExpanded
                          ? "max-w-[190px] opacity-100 translate-x-0"
                          : "max-w-0 opacity-0 -translate-x-2"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </nav>

            <div className="mt-3 border-t border-white/10 pt-3">
              <div className={`flex items-center ${isExpanded ? "gap-2 px-1" : "justify-center"}`}>
                {isExpanded ? (
                  <>
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
                  </>
                ) : (
                  <a
                    href="#contact"
                    aria-label={labels.letsTalk}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-zinc-900/70 text-teal-200 hover:border-teal-300/40 hover:bg-teal-500/15 transition-colors"
                  >
                    @
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </aside>

      <nav className="md:hidden fixed inset-x-0 top-3 z-50 px-4 sm:px-6">
        <div
          className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-teal-300/35 bg-zinc-950/86 backdrop-blur-xl shadow-[0_16px_42px_rgba(0,0,0,0.42)]"
              : "border-white/15 bg-zinc-950/55 backdrop-blur-lg"
          }`}
        >
          <div className="flex items-center justify-between gap-3 px-3 py-2.5">
            <a href="#home" className="flex items-center gap-2 min-w-0">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-300 to-cyan-400 text-zinc-950 text-sm font-bold">
                KA
              </span>
              <span className="text-zinc-100 font-semibold tracking-wide text-sm truncate">
                Kevin Xavier
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-700 text-zinc-300 hover:text-teal-300 hover:border-teal-400 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="text-lg">{menuOpen ? "X" : "≡"}</span>
            </button>
          </div>

          {menuOpen && (
            <div className="px-3 pb-3">
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
    </>
  );
}

