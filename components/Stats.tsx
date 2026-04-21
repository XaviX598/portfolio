"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

type StatsProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    stats: [
      { value: 15, suffix: "+", label: "Projects Delivered", icon: "📦" },
      { value: 50, suffix: "+", label: "AI Integrations", icon: "🤖" },
      { value: 100, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
      { value: 24, suffix: "h", label: "Avg Response Time", icon: "⚡" },
    ],
  },
  es: {
    stats: [
      { value: 15, suffix: "+", label: "Proyectos Entregados", icon: "📦" },
      { value: 50, suffix: "+", label: "Integraciones de IA", icon: "🤖" },
      { value: 100, suffix: "%", label: "Satisfacción del Cliente", icon: "⭐" },
      { value: 24, suffix: "h", label: "Tiempo de Respuesta", icon: "⚡" },
    ],
  },
};

function Counter({ value, suffix, label, icon, delay }: { value: number; suffix: string; label: string; icon: string; delay: number }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
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
      <div 
        ref={ref} 
        className="p-6 md:p-8 rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-teal-500/30 hover:bg-teal-500/5 transition-all group"
      >
        <div className="flex items-center gap-4">
          <span className="text-4xl">{icon}</span>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white">
              {count}<span className="text-teal-400">{suffix}</span>
            </div>
            <p className="mt-1 text-zinc-400 text-sm">{label}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Stats({ lang }: StatsProps) {
  const t = copy[lang];

  return (
    <section className="w-full h-full flex items-center py-8 px-6 relative">
      {/* Fondo minimalista */}
      <div className="absolute inset-0 bg-zinc-950" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Impacto
            </h2>
          </div>
        </FadeIn>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.stats.map((stat, index) => (
            <Counter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}