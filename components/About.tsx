"use client";

import React, { useState } from "react";
import FadeIn from "./FadeIn";

export default function About() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  return (
    <section id="about" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About
          </h2>
        </FadeIn>

        {/* LANGUAGE TOGGLE */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center gap-2 mb-10">
            <button
              onClick={() => setLanguage("en")}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                language === "en"
                  ? "bg-teal-500 text-black"
                  : "border border-zinc-700 text-zinc-400 hover:border-teal-500 hover:text-teal-400"
              }`}
            >
              About Me (EN)
            </button>

            <button
              onClick={() => setLanguage("es")}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                language === "es"
                  ? "bg-teal-500 text-black"
                  : "border border-zinc-700 text-zinc-400 hover:border-teal-500 hover:text-teal-400"
              }`}
            >
              Sobre mí (ES)
            </button>
          </div>
        </FadeIn>

        {/* CONTENT */}
        <FadeIn delay={0.2}>
          <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-8 md:p-10">
            {language === "en" ? (
              <div className="space-y-5">
                <p className="text-lg text-zinc-200 leading-relaxed">
                  I am <span className="text-teal-400 font-semibold">Kevin Xavier Aguilar Velasco</span>, a Computer Science Engineer
                  graduated from the Central University of Ecuador, motivated to
                  start my professional career in software development and grow in a
                  collaborative environment.
                </p>

                <p className="text-zinc-400 leading-relaxed">
                  I have hands-on experience in full stack development through real
                  academic projects, including a degree project consisting of a web
                  application, backend REST API, and an Android mobile application.
                  I have worked with <span className="text-teal-400">Java, Spring Boot, PostgreSQL, Vue, Azure, and
                  Firebase</span>.
                </p>

                <p className="text-zinc-400 leading-relaxed">
                  I am proactive, responsible, and strongly motivated by continuous
                  learning. I am currently seeking my first professional role as a
                  software developer.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <p className="text-lg text-zinc-200 leading-relaxed">
                  Soy <span className="text-teal-400 font-semibold">Kevin Xavier Aguilar Velasco</span>, Ingeniero en Ciencias de la
                  Computación graduado de la Universidad Central del Ecuador, con
                  interés en iniciar mi carrera profesional en el desarrollo de
                  software y crecer en entornos colaborativos.
                </p>

                <p className="text-zinc-400 leading-relaxed">
                  Cuento con experiencia práctica en desarrollo full stack a través
                  de proyectos académicos reales, incluyendo un proyecto de
                  titulación compuesto por una aplicación web, una API REST y una
                  aplicación móvil Android. He trabajado con <span className="text-teal-400">Java, Spring Boot,
                  PostgreSQL, Vue, Azure y Firebase</span>.
                </p>

                <p className="text-zinc-400 leading-relaxed">
                  Me considero una persona proactiva, responsable y con una fuerte
                  motivación por el aprendizaje continuo. Actualmente busco mi
                  primera oportunidad profesional como desarrollador de software.
                </p>
              </div>
            )}

            {/* Skills highlight */}
            <div className="mt-8 pt-8 border-t border-zinc-800">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                {language === "en" ? "Technical Skills" : "Habilidades Técnicas"}
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Java", "Spring Boot", "React", "Vue.js", "PostgreSQL", "Azure", "Firebase", "Android", "TypeScript", "REST API"].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-800/50 text-zinc-300 text-sm border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
