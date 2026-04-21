"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import EpicPage from "./EpicPage";
import AmbientBackground from "./AmbientBackground";
import MotionRuntime from "./MotionRuntime";
import FloatingButtons from "./FloatingButtons";

export type PortfolioLang = "en" | "es";

export default function HomeClient() {
  const [lang, setLang] = useState<PortfolioLang>("en");

  return (
    <>
      <AmbientBackground />
      <MotionRuntime />

      <Navbar lang={lang} onLangChange={setLang} />

      <main className="relative">
        <EpicPage lang={lang} />
      </main>

      <FloatingButtons lang={lang} />
    </>
  );
}