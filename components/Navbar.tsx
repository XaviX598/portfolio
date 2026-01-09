import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-zinc-950/60 border-b border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* BRAND / ROLE */}
        <span className="text-sm md:text-base font-medium tracking-wide text-zinc-300">
          Xavier Aguilar ·{" "}
          <span className="text-teal-400">
            Computer Science Engineer
          </span>
        </span>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8 text-sm">
          <a
            href="#projects"
            className="text-zinc-300 hover:text-teal-400 transition"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-zinc-300 hover:text-teal-400 transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-zinc-300 hover:text-teal-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
