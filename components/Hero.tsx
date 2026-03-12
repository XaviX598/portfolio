"use client";

import React, { useState, useMemo } from "react";
import FadeIn from "./FadeIn";

const generateParticles = () => 
  [...Array(20)].map((_, i) => ({
    id: i,
    delay: `${i * 0.5}s`,
    x: `${(i * 5.26) % 100}%`,
    duration: `${3 + (i % 4) + 1}s`,
  }));

export default function Hero() {
  const [open, setOpen] = useState(false);
  const particles = useMemo(() => generateParticles(), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                "--delay": particle.delay,
                "--x": particle.x,
                "--duration": particle.duration,
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Badge */}
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-teal-400">Available for work</span>
          </div>
        </FadeIn>

        {/* NAME */}
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="block text-zinc-100">Kevin Xavier</span>
            <span className="block text-teal-400 mt-2">Aguilar Velasco</span>
          </h1>
        </FadeIn>

        {/* ROLE */}
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-zinc-300 mb-3 font-medium">
            Full Stack Developer
          </p>
        </FadeIn>

        {/* STACK */}
        <FadeIn delay={0.3}>
          <p className="text-zinc-500 mb-10">
            Java · Spring Boot · React · Vue · Android · PostgreSQL
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.4} className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-black rounded-xl font-semibold hover:from-teal-400 hover:to-teal-500 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-teal-500/25"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 text-zinc-200 rounded-xl hover:border-teal-500 hover:text-teal-400 transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/xavier-aguilar-93759b2bb"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 text-zinc-200 rounded-xl hover:border-teal-500 hover:text-teal-400 transition-all duration-300 hover:-translate-y-1"
          >
            LinkedIn
          </a>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 text-zinc-200 rounded-xl hover:border-teal-500 hover:text-teal-400 transition-all duration-300 hover:-translate-y-1"
            >
              Download CV
              <svg
                className={`ml-2 w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl border border-zinc-800 bg-zinc-900/95 backdrop-blur shadow-xl overflow-hidden z-50">
                <a
                  href="/CV Xavier Aguilar.pdf"
                  target="_blank"
                  className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-teal-400 transition"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Español (PDF)
                </a>
                <a
                  href="/CV Xavier Aguilar English.pdf"
                  target="_blank"
                  className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-teal-400 transition"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  English (PDF)
                </a>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={0.6}>
          <div className="mt-16 flex justify-center">
            <div className="scroll-indicator">
              <div className="scroll-mouse">
                <div className="scroll-wheel"></div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        .hero-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #14b8a6;
          border-radius: 50%;
          left: var(--x);
          bottom: -10px;
          opacity: 0;
          animation: particle-rise var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes particle-rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }

        .scroll-mouse {
          width: 26px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 13px;
          position: relative;
        }

        .scroll-wheel {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          background: #14b8a6;
          border-radius: 2px;
          animation: scroll-bounce 1.8s ease-in-out infinite;
        }

        @keyframes scroll-bounce {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) translateY(10px);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
