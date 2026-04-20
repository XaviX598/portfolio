"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import Experience from "./Experience";
import Certificates from "./Certificates";
import About from "./About";
import Contact from "./Contact";
import Stats from "./Stats";
import AmbientBackground from "./AmbientBackground";
import MotionRuntime from "./MotionRuntime";

export type PortfolioLang = "en" | "es";

export default function HomeClient() {
  const [lang, setLang] = useState<PortfolioLang>("en");

  return (
    <>
      <AmbientBackground />
      <MotionRuntime />

      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>

      <Navbar lang={lang} onLangChange={setLang} />

      <main className="site-main pt-28 md:pt-10 relative z-10">
        <Hero lang={lang} />
        <Stats lang={lang} />
        <Services lang={lang} />
        <Projects lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Certificates lang={lang} />
        <Contact lang={lang} />
      </main>
    </>
  );
}
