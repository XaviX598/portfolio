"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

type StatsProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    title: "Our Impact",
    subtitle: "Numbers that speak for themselves",
    stats: [
      { value: 15, suffix: "+", label: "Projects Delivered" },
      { value: 50, suffix: "+", label: "AI Integrations" },
      { value: 100, suffix: "%", label: "Client Satisfaction" },
      { value: 24, suffix: "h", label: "Avg Response Time" },
    ],
  },
  es: {
    title: "Nuestro Impacto",
    subtitle: "Numeros que hablan por si solos",
    stats: [
      { value: 15, suffix: "+", label: "Proyectos Entregados" },
      { value: 50, suffix: "+", label: "Integraciones de IA" },
      { value: 100, suffix: "%", label: "Satisfaccion del Cliente" },
      { value: 24, suffix: "h", label: "Tiempo de Respuesta" },
    ],
  },
};

function Counter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <FadeIn delay={delay} direction="up">
      <div ref={ref} className="text-center p-6 rounded-2xl border border-white/10 bg-zinc-900/50">
        <div className="text-4xl md:text-5xl font-bold text-white">
          {count}
          <span className="text-zinc-400">{suffix}</span>
        </div>
        <p className="mt-2 text-zinc-400 text-sm uppercase tracking-wider">{label}</p>
      </div>
    </FadeIn>
  );
}

export default function Stats({ lang }: StatsProps) {
  const t = copy[lang];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            {t.title}
          </h2>
          <p className="mt-2 text-zinc-400 text-center max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.stats.map((stat, index) => (
            <Counter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}