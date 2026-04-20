"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";
import { motion, AnimatePresence } from "framer-motion";

type FAQProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    title: "FAQ",
    subtitle: "Frequently Asked Questions",
    questions: [
      {
        q: "What technologies do you work with?",
        a: "We work with modern technologies including TypeScript, React, Vue, Next.js, Node.js, Python, PostgreSQL, and AI agents like Claude Code, OpenCode, and more.",
      },
      {
        q: "How long does a typical project take?",
        a: "Project timelines vary based on complexity. A typical web application takes 4-8 weeks, while more complex systems with AI integration can take 2-3 months.",
      },
      {
        q: "Do you offer ongoing support?",
        a: "Yes! We offer maintenance and support packages to keep your systems running smoothly after launch.",
      },
      {
        q: "Can you integrate AI into my existing systems?",
        a: "Absolutely. We specialize in AI integration, automation, and workflow optimization for businesses of all sizes.",
      },
      {
        q: "What industries do you serve?",
        a: "We work with startups, small businesses, and enterprises across various industries including retail, healthcare, finance, and logistics.",
      },
    ],
  },
  es: {
    title: "FAQ",
    subtitle: "Preguntas Frecuentes",
    questions: [
      {
        q: "Con que tecnologias trabajan?",
        a: "Trabajamos con tecnologias modernas incluyendo TypeScript, React, Vue, Next.js, Node.js, Python, PostgreSQL, y agentes de IA como Claude Code, OpenCode, y mas.",
      },
      {
        q: "Cuanto tiempo toma un proyecto tipico?",
        a: "Los tiempos de proyecto varian segun la complejidad. Una aplicacion web tipica toma 4-8 semanas, mientras que sistemas mas complejos con integracion de IA pueden tomar 2-3 meses.",
      },
      {
        q: "Ofrecen soporte continuo?",
        a: "Si! Ofrecemos paquetes de mantenimiento y soporte para mantener tus sistemas funcionando sin problemas despues del lanzamiento.",
      },
      {
        q: "Pueden integrar IA en mis sistemas existentes?",
        a: "Totalmente. Nos especializamos en integracion de IA, automatizacion y optimizacion de flujos de trabajo para negocios de todos los tamanos.",
      },
      {
        q: "Que industrias atienden?",
        a: "Trabajamos con startups, pequenas empresas y empresas de varias industrias incluyendo retail, salud, finanzas y logistica.",
      },
    ],
  },
};

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.05} direction="up">
      <div className="border border-white/10 rounded-xl overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 text-left bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
        >
          <span className="text-white font-medium pr-4">{question}</span>
          <span className="text-zinc-400 text-xl shrink-0">
            {isOpen ? "−" : "+"}
          </span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="px-4 pb-4 text-zinc-400 leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function FAQ({ lang }: FAQProps) {
  const t = copy[lang];

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            {t.title}
          </h2>
          <p className="mt-2 text-zinc-400 text-center">{t.subtitle}</p>
        </FadeIn>

        <div className="mt-10 space-y-3">
          {t.questions.map((item, index) => (
            <FAQItem
              key={item.q}
              question={item.q}
              answer={item.a}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}