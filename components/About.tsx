"use client";

import React, { useState } from "react";

export default function About() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  return (
    <section id="about" className="py-24 border-t border-zinc-800/60">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About
        </h2>

        {/* LANGUAGE TOGGLE */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 rounded-lg text-sm transition ${
              language === "en"
                ? "bg-teal-500 text-black"
                : "border border-zinc-700 text-zinc-300 hover:border-teal-400"
            }`}
          >
            About Me (EN)
          </button>

          <button
            onClick={() => setLanguage("es")}
            className={`px-4 py-2 rounded-lg text-sm transition ${
              language === "es"
                ? "bg-teal-500 text-black"
                : "border border-zinc-700 text-zinc-300 hover:border-teal-400"
            }`}
          >
            Sobre mí (ES)
          </button>
        </div>

        {/* CONTENT */}
        {language === "en" ? (
          <>
            <p className="text-zinc-300 leading-relaxed">
              I am Kevin Xavier Aguilar Velasco, a Computer Science Engineer
              graduated from the Central University of Ecuador, motivated to
              start my professional career in software development and grow in a
              collaborative environment.
            </p>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              I have hands-on experience in full stack development through real
              academic projects, including a degree project consisting of a web
              application, backend REST API, and an Android mobile application.
              I have worked with Java, Spring Boot, PostgreSQL, Vue, Azure, and
              Firebase.
            </p>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              I am proactive, responsible, and strongly motivated by continuous
              learning. I am currently seeking my first professional role as a
              software developer.
            </p>
          </>
        ) : (
          <>
            <p className="text-zinc-300 leading-relaxed">
              Soy Kevin Xavier Aguilar Velasco, Ingeniero en Ciencias de la
              Computación graduado de la Universidad Central del Ecuador, con
              interés en iniciar mi carrera profesional en el desarrollo de
              software y crecer en entornos colaborativos.
            </p>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Cuento con experiencia práctica en desarrollo full stack a través
              de proyectos académicos reales, incluyendo un proyecto de
              titulación compuesto por una aplicación web, una API REST y una
              aplicación móvil Android. He trabajado con Java, Spring Boot,
              PostgreSQL, Vue, Azure y Firebase.
            </p>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Me considero una persona proactiva, responsable y con una fuerte
              motivación por el aprendizaje continuo. Actualmente busco mi
              primera oportunidad profesional como desarrollador de software.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
