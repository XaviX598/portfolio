"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

type ServicesProps = {
  lang: PortfolioLang;
};

const servicesData = {
  en: [
    {
      title: "Full Stack Development",
      desc: "Web platforms with secure backend, clean APIs and modern frontend.",
      icon: "⚛️",
    },
    {
      title: "AI Integration",
      desc: "AI integration from 0 to production for your team's workflow.",
      icon: "🤖",
    },
    {
      title: "Team Training",
      desc: "Workshops and training to introduce AI and modern practices.",
      icon: "👥",
    },
    {
      title: "Cloud Deployment",
      desc: "From local setup to cloud with stable and scalable flows.",
      icon: "☁️",
    },
  ],
  es: [
    {
      title: "Desarrollo Full Stack",
      desc: "Plataformas web con backend seguro, APIs limpias y frontend moderno.",
      icon: "⚛️",
    },
    {
      title: "Integración de IA",
      desc: "Integración de IA de 0 a producción para el flujo de trabajo de tu equipo.",
      icon: "🤖",
    },
    {
      title: "Capacitación de Equipos",
      desc: "Talleres y capacitación para introducir IA y prácticas modernas.",
      icon: "👥",
    },
    {
      title: "Despliegue Cloud",
      desc: "Desde setup local hasta cloud con flujos estables y escalables.",
      icon: "☁️",
    },
  ],
};

export default function Services({ lang }: ServicesProps) {
  const t = servicesData[lang];

  return (
    <section id="services" className="w-full h-full flex items-center py-8 px-6 relative">
      {/* Fondo minimalista */}
      <div className="absolute inset-0 bg-zinc-950" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Servicios
            </h2>
          </div>
        </FadeIn>

        {/* Grid de servicios - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {t.map((service, idx) => (
            <FadeIn key={service.title} delay={idx * 0.1}>
              <motion.div
                className="group p-6 md:p-8 rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-teal-500/30 hover:bg-teal-500/5 transition-all cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-zinc-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}