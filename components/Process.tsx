"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";

type ProcessProps = {
  lang: PortfolioLang;
};

const processData = {
  en: [
    { step: "01", title: "Contact", details: "You reach out with your project idea" },
    { step: "02", title: "Meeting", details: "We discuss requirements and scope" },
    { step: "03", title: "Spec", details: "I create detailed project specification" },
    { step: "04", title: "Development", details: "Building your project with updates" },
    { step: "05", title: "Revisions", details: "Review and adjustments" },
    { step: "06", title: "Delivery", details: "Live system with hosting & SEO" },
    { step: "07", title: "Support", details: "Optional ongoing maintenance", optional: true },
  ],
  es: [
    { step: "01", title: "Contacto", details: "Me escribes con tu idea" },
    { step: "02", title: "Reunión", details: "Discutimos requisitos y alcance" },
    { step: "03", title: "Spec", details: "Creo especificación detallada" },
    { step: "04", title: "Desarrollo", details: "Construyo tu proyecto con actualizaciones" },
    { step: "05", title: "Revisiones", details: "Revisión y ajustes" },
    { step: "06", title: "Entrega", details: "Sistema vivo con hosting y SEO" },
    { step: "07", title: "Soporte", details: "Mantenimiento opcional continuo", optional: true },
  ],
};

export default function Process({ lang }: ProcessProps) {
  const t = processData[lang];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let isScrolling = false;
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
      
      if (e.deltaY > 20 && !isScrolling) {
        isScrolling = true;
        if (activeIndex < t.length - 1) {
          setActiveIndex(prev => prev + 1);
        }
        setTimeout(() => { isScrolling = false; }, 400);
      } else if (e.deltaY < -20 && !isScrolling) {
        isScrolling = true;
        if (activeIndex > 0) {
          setActiveIndex(prev => prev - 1);
        } else {
          window.dispatchEvent(new CustomEvent('epicNavigate', { detail: { direction: 'prev' } }));
        }
        setTimeout(() => { isScrolling = false; }, 400);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [t.length, activeIndex]);

  return (
    <section className="w-full h-full min-h-screen py-16 px-4 relative flex items-center">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-2xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="text-xs text-teal-400 uppercase tracking-[0.2em]">
            {lang === "en" ? "Process" : "Proceso"}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-1">
            {lang === "en" ? "How we work" : "Cómo trabajamos"}
          </h2>
        </motion.div>

        <div className="relative">
          {t.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative flex items-start gap-4 pb-6 last:pb-0 cursor-pointer"
              onClick={() => setActiveIndex(idx)}
            >
              {/* Punto en la línea */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{
                    scale: activeIndex === idx ? 1.3 : 1,
                    backgroundColor: activeIndex >= idx 
                      ? (item.optional ? "#3f3f46" : "#14b8a6") 
                      : "#18181b",
                    borderColor: activeIndex >= idx 
                      ? (item.optional ? "#52525b" : "#14b8a6") 
                      : "#27272a"
                  }}
                  className="w-3 h-3 rounded-full border-2"
                />
                {idx < t.length - 1 && (
                  <motion.div
                    animate={{
                      backgroundColor: activeIndex > idx ? "#14b8a6" : "transparent"
                    }}
                    className="w-px h-6 mt-1"
                  />
                )}
              </div>

              {/* Contenido */}
              <div className="flex-1 pt-[-2px]">
                <motion.div
                  animate={{
                    backgroundColor: activeIndex === idx ? "rgba(24, 24, 27, 0.8)" : "transparent",
                    borderColor: activeIndex === idx ? "rgba(20, 184, 166, 0.3)" : "transparent"
                  }}
                  className="p-2 rounded-lg border transition-colors"
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-[10px] font-mono ${activeIndex >= idx ? "text-teal-400" : "text-zinc-600"}`}>
                      {item.step}
                    </span>
                    {item.optional && (
                      <span className="text-[8px] px-1 rounded bg-zinc-800 text-zinc-500">
                        {lang === "en" ? "OPT" : "OPC"}
                      </span>
                    )}
                  </div>
                  <h3 className={`text-sm font-semibold ${activeIndex === idx ? "text-white" : "text-zinc-500"}`}>
                    {item.title}
                  </h3>
                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-zinc-400 mt-1">{item.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
