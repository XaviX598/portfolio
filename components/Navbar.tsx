"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl shadow-lg shadow-black/20 py-3 border-b border-teal-500/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* BRAND / ROLE */}
        <span className="text-sm md:text-base font-medium tracking-wide">
          <span className="text-zinc-300">Xavier Aguilar</span>
          <span className="text-zinc-500 mx-2">·</span>
          <span className="text-teal-400 font-semibold">
            Full Stack Developer
          </span>
        </span>

        {/* NAV LINKS */}
        <div className="flex items-center gap-2">
          <a
            href="#projects"
            className="px-4 py-2 text-sm text-zinc-300 hover:text-teal-400 hover:bg-teal-400/5 rounded-lg transition-all duration-300"
          >
            Projects
          </a>

          <a
            href="#about"
            className="px-4 py-2 text-sm text-zinc-300 hover:text-teal-400 hover:bg-teal-400/5 rounded-lg transition-all duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="px-4 py-2 text-sm text-zinc-300 hover:text-teal-400 hover:bg-teal-400/5 rounded-lg transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
