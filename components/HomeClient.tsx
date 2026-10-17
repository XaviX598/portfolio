"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import EpicPage from "./EpicPage";
import FloatingButtons from "./FloatingButtons";
import RevealObserver from "./RevealObserver";
import Footer from "./Footer";

export type PortfolioLang = "en" | "es";

export default function HomeClient() {
  const [lang, setLang] = useState<PortfolioLang>("es");

  return (
    <>
      <RevealObserver />
      <Navbar lang={lang} onLangChange={setLang} />

      <main className="relative">
        <EpicPage lang={lang} />
      </main>

      <Footer lang={lang} />
      <FloatingButtons lang={lang} />
    </>
  );
}
