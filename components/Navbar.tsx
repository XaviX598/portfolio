"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="leading-tight">
          <p className="text-zinc-100 font-semibold tracking-wide text-sm sm:text-base">
            Kevin Xavier Aguilar Velasco
          </p>
          <p className="text-xs text-zinc-400 uppercase tracking-[0.14em]">
            Full Stack Engineer
          </p>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg text-sm text-zinc-300 hover:text-teal-300 hover:bg-teal-500/10 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center px-4 py-2 rounded-lg bg-teal-500 text-zinc-950 text-sm font-semibold hover:bg-teal-400 transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-700 text-zinc-300 hover:text-teal-300 hover:border-teal-400 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 px-4 sm:px-6">
          <div className="rounded-xl border border-white/10 bg-zinc-900/90 backdrop-blur p-3 flex flex-col gap-1">
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
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-3 py-2 rounded-lg bg-teal-500 text-zinc-950 text-sm font-semibold text-center"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
