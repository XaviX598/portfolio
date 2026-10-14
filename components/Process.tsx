"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    { step: "01", title: "Contacto", details: "Me escribís con tu idea" },
    { step: "02", title: "Reunión", details: "Discutimos requisitos y alcance" },
    { step: "03", title: "Especificación", details: "Creo una especificación detallada" },
    { step: "04", title: "Desarrollo", details: "Construyo tu proyecto con actualizaciones" },
    { step: "05", title: "Revisiones", details: "Revisión y ajustes" },
    { step: "06", title: "Entrega", details: "Sistema en producción con hosting y SEO" },
    { step: "07", title: "Soporte", details: "Mantenimiento opcional continuo", optional: true },
  ],
};

export default function Process({ lang }: ProcessProps) {
  const t = processData[lang];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative flex min-h-screen w-full items-center px-4 py-24">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-teal-400">
            {lang === "en" ? "Process" : "Proceso"}
          </span>
          <h2 className="mt-1 text-2xl font-bold text-white md:text-4xl">
            {lang === "en" ? "How we work" : "Cómo trabajamos"}
          </h2>
        </motion.div>

        <div className="relative">
          {t.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative flex cursor-pointer items-start gap-4 pb-6 last:pb-0"
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{
                    scale: activeIndex === idx ? 1.3 : 1,
                    backgroundColor: activeIndex >= idx ? (item.optional ? "#3f3f46" : "#14b8a6") : "#18181b",
                    borderColor: activeIndex >= idx ? (item.optional ? "#52525b" : "#14b8a6") : "#27272a",
                  }}
                  className="h-3 w-3 rounded-full border-2"
                />
                {idx < t.length - 1 && (
                  <motion.div
                    animate={{
                      backgroundColor: activeIndex > idx ? "#14b8a6" : "rgba(0, 0, 0, 0)",
                    }}
                    className="mt-1 h-6 w-px"
                  />
                )}
              </div>

              <div className="flex-1 pt-[-2px]">
                <motion.div
                  animate={{
                    backgroundColor: activeIndex === idx ? "rgba(24, 24, 27, 0.8)" : "rgba(0, 0, 0, 0)",
                    borderColor: activeIndex === idx ? "rgba(20, 184, 166, 0.3)" : "rgba(0, 0, 0, 0)",
                  }}
                  className="rounded-lg border p-2 transition-colors"
                >
                  <div className="mb-0.5 flex items-center gap-2">
                    <span className={`text-[10px] font-mono ${activeIndex >= idx ? "text-teal-400" : "text-zinc-600"}`}>
                      {item.step}
                    </span>
                    {item.optional && (
                      <span className="rounded bg-zinc-800 px-1 text-[8px] text-zinc-500">
                        {lang === "en" ? "OPT" : "OPC"}
                      </span>
                    )}
                  </div>
                  <h3 className={`text-sm font-semibold ${activeIndex === idx ? "text-white" : "text-zinc-500"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-1 text-xs ${activeIndex === idx ? "text-zinc-300" : "text-zinc-500"}`}>{item.details}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
