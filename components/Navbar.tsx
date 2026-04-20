"use client";

import { useState } from "react";
import type { PortfolioLang } from "./HomeClient";

type NavbarProps = {
  lang: PortfolioLang;
  onLangChange: (lang: PortfolioLang) => void;
};

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src="/logo.svg" 
            alt="Xpress" 
            className="h-9 w-9 rounded-lg"
          />
          <span className="text-white font-bold text-lg">
            press
            <span className="inline-block w-0.5 h-5 ml-0.5 bg-cyan-400 animate-pulse" />
          </span>
        </a>

        <div className="flex items-center gap-3">
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