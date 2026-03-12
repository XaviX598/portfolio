"use client";

import React, { useState } from "react";
import FadeIn from "./FadeIn";


export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        {/* NAME */}
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="block">Kevin Xavier</span>
            <span className="block text-teal-400">
              Aguilar Velasco
            </span>
          </h1>
        </FadeIn>

        {/* ROLE */}
        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg md:text-xl text-zinc-300">
            Full Stack Developer
          </p>
        </FadeIn>

        {/* STACK */}
        <FadeIn delay={0.2}>
          <p className="mt-2 text-sm md:text-base text-zinc-400">
            Java · Spring Boot · React · Vue · Android
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3} className="mt-10 flex flex-col sm:flex-row justify-center gap-4 relative">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-teal-500 text-black rounded-xl font-semibold hover:bg-teal-400 transition"
          >
            View Projects
          </a>

          <a
            href="https://frontend-atletismo.vercel.app"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 border border-zinc-600 rounded-xl text-zinc-200 hover:border-teal-400 hover:text-teal-400 transition"
          >
            View Project Page
          </a>

          <a
            href="https://www.linkedin.com/in/xavier-aguilar-93759b2bb"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 border border-zinc-600 rounded-xl text-zinc-200 hover:border-teal-400 hover:text-teal-400 transition"
          >
            LinkedIn
          </a>
          
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center px-8 py-3 border border-zinc-600 rounded-xl text-zinc-200 hover:border-teal-400 hover:text-teal-400 transition"
            >
              Download CV
              <span className="ml-2">▾</span>
            </button>

            {open && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl border border-zinc-700 bg-zinc-900 shadow-lg overflow-hidden">
                <a
                  href="/CV Xavier Aguilar.pdf"
                  target="_blank"
                  className="block px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 transition"
                >
                  Español (PDF)
                </a>
                <a
                  href="/CV Xavier Aguilar English.pdf"
                  target="_blank"
                  className="block px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 transition"
                >
                  English (PDF)
                </a>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
