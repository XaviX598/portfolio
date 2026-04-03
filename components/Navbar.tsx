"use client";

import { useEffect, useMemo, useState, type SVGProps } from "react";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";

type NavbarProps = {
  lang: PortfolioLang;
  onLangChange: (lang: PortfolioLang) => void;
};

type NavIconName =
  | "home"
  | "projects"
  | "services"
  | "experience"
  | "certificates"
  | "about"
  | "contact";

type NavItem = {
  href: string;
  label: string;
  icon: NavIconName;
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

const LEFT_MODE_SCROLL_Y = 120;

function NavIcon({ name, className = "" }: { name: NavIconName; className?: string }) {
  const props: SVGProps<SVGSVGElement> = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "home":
      return (
        <svg {...props}>
          <path d="M3 10.7L12 3l9 7.7" />
          <path d="M5 9.9V21h14V9.9" />
          <path d="M10 21v-6h4v6" />
        </svg>
      );
    case "projects":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="8" height="7" rx="1.5" />
          <rect x="13" y="4" width="8" height="7" rx="1.5" />
          <rect x="3" y="13" width="8" height="7" rx="1.5" />
          <rect x="13" y="13" width="8" height="7" rx="1.5" />
        </svg>
      );
    case "services":
      return (
        <svg {...props}>
          <path d="M4 15l6-6 4 4 6-6" />
          <path d="M17 7h3v3" />
          <path d="M3 21h18" />
        </svg>
      );
    case "experience":
      return (
        <svg {...props}>
          <path d="M12 3l2.2 4.4 4.8.7-3.5 3.4.8 4.8L12 14l-4.3 2.3.8-4.8L5 8.1l4.8-.7L12 3z" />
        </svg>
      );
    case "certificates":
      return (
        <svg {...props}>
          <rect x="4" y="3.5" width="16" height="13" rx="2" />
          <path d="M8 8h8M8 11h5" />
          <path d="M9 16.5l-1 4 4-2 4 2-1-4" />
        </svg>
      );
    case "about":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 20a6.5 6.5 0 0113 0" />
        </svg>
      );
    case "contact":
      return (
        <svg {...props}>
          <path d="M4 5h16v11H8l-4 4V5z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );
    default:
      return null;
  }
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 3h6l-1.6 5 3.1 3.1v1.2H7.5v-1.2L10.6 8 9 3z" />
      <path d="M12 12.3V21" />
    </svg>
  );
}

function LangIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isLeftMode, setIsLeftMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      setIsLeftMode(window.scrollY > LEFT_MODE_SCROLL_Y);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("nav-left-active", isLeftMode);
    return () => root.classList.remove("nav-left-active");
  }, [isLeftMode]);

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
      pin: lang === "en" ? "Pin sidebar" : "Fijar menu",
      unpin: lang === "en" ? "Unpin sidebar" : "Soltar menu",
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

  const navItems: NavItem[] = [
    { href: "#home", label: labels.nav.home, icon: "home" },
    { href: "#projects", label: labels.nav.projects, icon: "projects" },
    { href: "#services", label: labels.nav.services, icon: "services" },
    { href: "#experience", label: labels.nav.experience, icon: "experience" },
    { href: "#certificates", label: labels.nav.certificates, icon: "certificates" },
    { href: "#about", label: labels.nav.about, icon: "about" },
    { href: "#contact", label: labels.nav.contact, icon: "contact" },
  ];

  const isExpanded = isPinned || isHoverExpanded;

  return (
    <>
      <nav
        className={`hidden md:block fixed inset-x-0 top-3 z-50 px-4 sm:px-6 transition-all duration-500 ${
          isLeftMode
            ? "-translate-y-24 opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
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
          </div>
        </div>
      </nav>

      <aside
        className={`hidden md:block fixed left-5 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
          isLeftMode
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-24 opacity-0 pointer-events-none"
        }`}
        onMouseEnter={() => setIsHoverExpanded(true)}
        onMouseLeave={() => setIsHoverExpanded(false)}
      >
        <div
          className={`rounded-[28px] border p-3 transition-all duration-350 ease-out ${
            isExpanded ? "w-[292px]" : "w-[92px]"
          } ${
            scrolled
              ? "border-teal-300/45 bg-zinc-950/90 backdrop-blur-xl shadow-[0_22px_50px_rgba(0,0,0,0.48)]"
              : "border-white/20 bg-zinc-950/72 backdrop-blur-lg"
          }`}
        >
          <div className={`flex items-center ${isExpanded ? "gap-3" : "justify-center"}`}>
            {isExpanded ? (
              <>
                <a href="#home" className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-300 to-cyan-400 text-zinc-950 text-[15px] font-bold shadow-[0_8px_24px_rgba(34,211,238,0.32)]">
                    KA
                  </span>
                  <span className="min-w-0 overflow-hidden transition-all duration-250 max-w-[170px] opacity-100 translate-x-0">
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
                  className={`inline-flex shrink-0 h-9 w-9 items-center justify-center rounded-xl border transition-colors ${
                    isPinned
                      ? "border-teal-300/45 bg-teal-500/18 text-teal-100"
                      : "border-white/15 text-zinc-400 hover:text-teal-200 hover:border-teal-300/35"
                  }`}
                  aria-label={isPinned ? labels.unpin : labels.pin}
                  title={isPinned ? labels.unpin : labels.pin}
                >
                  <PinIcon className="h-[16px] w-[16px]" />
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsPinned((prev) => !prev)}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                  isPinned
                    ? "border-teal-300/45 bg-teal-500/18 text-teal-100"
                    : "border-white/15 text-zinc-300 hover:text-teal-200 hover:border-teal-300/35"
                }`}
                aria-label={isPinned ? labels.unpin : labels.pin}
                title={isPinned ? labels.unpin : labels.pin}
              >
                <PinIcon className="h-[16px] w-[16px]" />
              </button>
            )}
          </div>

          <div className="my-3 h-px bg-gradient-to-r from-transparent via-teal-300/35 to-transparent" />

          <nav>
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveSection(item.href)}
                    className={`group relative flex items-center gap-3 rounded-2xl border px-2.5 py-2 transition-all duration-250 ${
                      isActive
                        ? "border-teal-300/45 bg-gradient-to-r from-teal-500/20 to-transparent text-teal-100"
                        : "border-transparent text-zinc-300 hover:border-teal-300/25 hover:bg-teal-500/10 hover:text-teal-200"
                    }`}
                  >
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-250 ${
                        isActive
                          ? "border-teal-300/45 bg-teal-500/22 text-teal-100 shadow-[0_0_22px_rgba(45,212,191,0.25)]"
                          : "border-white/12 bg-zinc-900/70 text-zinc-300 group-hover:border-teal-300/35 group-hover:text-teal-200"
                      }`}
                    >
                      <NavIcon name={item.icon} className="h-[18px] w-[18px]" />
                    </span>

                    <span
                      className={`overflow-hidden whitespace-nowrap transition-all duration-250 ${
                        isExpanded
                          ? "max-w-[165px] opacity-100 translate-x-0"
                          : "max-w-0 opacity-0 -translate-x-2"
                      }`}
                    >
                      {item.label}
                    </span>

                    {!isExpanded && (
                      <span className="pointer-events-none absolute left-[4.5rem] top-1/2 -translate-y-1/2 rounded-md border border-teal-300/35 bg-zinc-950/95 px-2 py-1 text-xs text-teal-100 opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                        {item.label}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </nav>

          <div className="mt-4 border-t border-white/10 pt-3">
            {isExpanded ? (
              <div className="space-y-2">
                <div className="flex border border-white/10 rounded-xl overflow-hidden bg-zinc-900/70 w-fit">
                  <button
                    type="button"
                    onClick={() => onLangChange("es")}
                    className={`px-3 py-1.5 text-xs transition-colors ${
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
                    className={`px-3 py-1.5 text-xs transition-colors ${
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
                  className="w-full justify-center text-sm"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={() => onLangChange(lang === "en" ? "es" : "en")}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-zinc-900/70 text-zinc-200 hover:text-teal-200 hover:border-teal-300/35 transition-colors"
                  aria-label="Switch language"
                  title="Switch language"
                >
                  <LangIcon className="h-[16px] w-[16px]" />
                </button>

                <a
                  href="#contact"
                  aria-label={labels.letsTalk}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-zinc-900/70 text-teal-200 hover:border-teal-300/40 hover:bg-teal-500/15 transition-colors"
                >
                  <NavIcon name="contact" className="h-[18px] w-[18px]" />
                </a>
              </div>
            )}
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
                    className={`px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                      activeSection === item.href
                        ? "text-teal-200 bg-teal-500/12 border border-teal-300/30"
                        : "text-zinc-300 hover:text-teal-300 hover:bg-teal-500/10"
                    }`}
                  >
                    <NavIcon name={item.icon} className="h-4 w-4" />
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
