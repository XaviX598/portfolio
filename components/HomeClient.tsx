"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import Experience from "./Experience";
import About from "./About";
import Contact from "./Contact";

export type PortfolioLang = "en" | "es";

export default function HomeClient() {
  const [lang, setLang] = useState<PortfolioLang>("en");

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>

      <Navbar lang={lang} onLangChange={setLang} />

      <main className="pt-24">
        <Hero lang={lang} />
        <Projects lang={lang} />
        <Services lang={lang} />
        <Experience lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
    </>
  );
}
