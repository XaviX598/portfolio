"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";

type ServicesProps = {
  lang: PortfolioLang;
};

const servicesData = {
  en: [
    {
      title: "APIs & Backend",
      shortDesc: "Robust and scalable backend",
      desc: "Secure REST and GraphQL APIs with Node.js, Express, Spring Boot. JWT auth, rate limiting, Swagger documentation.",
      icon: "🔌",
      borderColor: "border-white/10",
    },
    {
      title: "Mobile Apps",
      shortDesc: "Android and iOS apps",
      desc: "Native apps for Android and iOS with React Native and Kotlin. Google Play and App Store ready.",
      icon: "📱",
      borderColor: "border-white/10",
    },
    {
      title: "Landing Pages",
      shortDesc: "High-conversion pages",
      desc: "High-impact landing pages with GSAP animations. Optimized for SEO and conversion rates.",
      icon: "🎯",
      borderColor: "border-white/10",
    },
    {
      title: "Websites",
      shortDesc: "Professional websites",
      desc: "Custom websites and web pages. Modern design, SEO optimized, fast loading.",
      icon: "🌐",
      borderColor: "border-white/10",
    },
    {
      title: "Enterprise Systems",
      shortDesc: "Internal management software",
      desc: "Custom software: inventory, users, reports, dashboards, access control and permissions.",
      icon: "🏢",
      borderColor: "border-white/10",
    },
    {
      title: "AI & Chatbots",
      shortDesc: "Artificial intelligence",
      desc: "AI chat, chatbots with ChatGPT, WhatsApp integration, and 24/7 customer support automation.",
      icon: "🤖",
      borderColor: "border-white/10",
    },
    {
      title: "Full Systems",
      shortDesc: "End-to-end solutions",
      desc: "Everything: frontend, backend, database, authentication, payments, emails and deployment. One complete solution.",
      icon: "🔧",
      borderColor: "border-white/10",
    },
    {
      title: "Maintenance",
      shortDesc: "Ongoing support",
      desc: "Bug fixes, security updates, monitoring, backups and continuous improvements.",
      icon: "🛠️",
      borderColor: "border-white/10",
    },
  ],
  es: [
    {
      title: "APIs & Backend",
      shortDesc: "Backend robusto y escalable",
      desc: "APIs REST y GraphQL seguras con Node.js, Express y Spring Boot. Autenticación JWT, rate limiting y documentación Swagger.",
      icon: "🔌",
      borderColor: "border-white/10",
    },
    {
      title: "Apps Móviles",
      shortDesc: "Apps para Android y iOS",
      desc: "Apps nativas para Android y iOS con React Native y Kotlin. Listas para Google Play y App Store.",
      icon: "📱",
      borderColor: "border-white/10",
    },
    {
      title: "Landing Pages",
      shortDesc: "Páginas de conversión",
      desc: "Landing pages de alto impacto con animaciones GSAP. Optimizadas para SEO y tasas de conversión.",
      icon: "🎯",
      borderColor: "border-white/10",
    },
    {
      title: "Páginas Web",
      shortDesc: "Sitios web profesionales",
      desc: "Páginas web y sitios web personalizados. Diseño moderno, optimización SEO y carga rápida.",
      icon: "🌐",
      borderColor: "border-white/10",
    },
    {
      title: "Sistemas Empresariales",
      shortDesc: "Software de gestión interna",
      desc: "Software a medida: inventarios, usuarios, reportes, dashboards, control de accesos y permisos.",
      icon: "🏢",
      borderColor: "border-white/10",
    },
    {
      title: "IA & Chatbots",
      shortDesc: "Inteligencia artificial",
      desc: "Chat IA, chatbots con ChatGPT, integración con WhatsApp y automatización de soporte 24/7.",
      icon: "🤖",
      borderColor: "border-white/10",
    },
    {
      title: "Sistemas Completos",
      shortDesc: "Soluciones integrales",
      desc: "Todo: frontend, backend, base de datos, autenticación, pagos, emails y deployment. Una solución completa.",
      icon: "🔧",
      borderColor: "border-white/10",
    },
    {
      title: "Mantenimiento",
      shortDesc: "Soporte continuo",
      desc: "Corrección de bugs, actualizaciones de seguridad, monitoreo, backups y mejoras continuas.",
      icon: "🛠️",
      borderColor: "border-white/10",
    },
  ],
};

function ServiceCard({ service, idx }: { service: (typeof servicesData.en)[0]; idx: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      className="relative"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        layout
        className={`relative overflow-hidden rounded-2xl ${service.borderColor} bg-zinc-900/60 backdrop-blur-sm cursor-pointer transition-all duration-500`}
        animate={{
          height: isExpanded ? 270 : 180,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="absolute inset-0 bg-white/[0.03]"
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-white/20"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        <div className="relative z-10 flex h-full flex-col p-5 md:p-6">
          <div className="flex items-start gap-4">
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5"
              animate={{ scale: isExpanded ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl filter grayscale">{service.icon}</span>
            </motion.div>

            <div className="flex-1">
              <motion.h3 className="text-lg font-bold text-white">
                {service.title}
              </motion.h3>
              <motion.p
                className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500"
                animate={{ opacity: isExpanded ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {service.shortDesc}
              </motion.p>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-4"
              >
                <p className="text-sm leading-relaxed text-zinc-300">{service.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services({ lang }: ServicesProps) {
  const t = servicesData[lang];

  return (
    <section id="services" className="relative flex min-h-screen w-full h-full items-center px-4 md:px-6">
      <div className="absolute inset-0 bg-zinc-950" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(30deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(-30deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
            backgroundSize: "60px 100px",
          }}
        />

        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-teal-400 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-teal-400">
              {lang === "en" ? "Services" : "Servicios"}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            {lang === "en" ? "What we build" : "Qué construimos"}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-400">
            {lang === "en"
              ? "From idea to deployment, we build digital products that scale."
              : "Desde la idea hasta el despliegue, construimos productos digitales que escalan."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col gap-4 md:gap-6">
            <ServiceCard service={t[0]} idx={0} />
            <ServiceCard service={t[4]} idx={4} />
          </div>

          <div className="flex flex-col gap-4 md:mt-12 md:gap-6">
            <ServiceCard service={t[1]} idx={1} />
            <ServiceCard service={t[5]} idx={5} />
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <ServiceCard service={t[2]} idx={2} />
            <ServiceCard service={t[6]} idx={6} />
          </div>

          <div className="flex flex-col gap-4 md:mt-12 md:gap-6">
            <ServiceCard service={t[3]} idx={3} />
            <ServiceCard service={t[7]} idx={7} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-zinc-500">
            {lang === "en" ? "Need something else? Let's talk →" : "¿Necesitás algo más? Hablemos →"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
