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
      icon: "ðŸ”Œ",
      borderColor: "border-white/10",
    },
    {
      title: "Mobile Apps",
      shortDesc: "Android and iOS apps",
      desc: "Native apps for Android and iOS with React Native and Kotlin. Google Play and App Store ready.",
      icon: "ðŸ“±",
      borderColor: "border-white/10",
    },
    {
      title: "Landing Pages",
      shortDesc: "High-conversion pages",
      desc: "High-impact landing pages with GSAP animations. Optimized for SEO and conversion rates.",
      icon: "ðŸŽ¯",
      borderColor: "border-white/10",
    },
    {
      title: "Websites",
      shortDesc: "Professional websites",
      desc: "Custom websites and web pages. Modern design, SEO optimized, fast loading.",
      icon: "ðŸŒ",
      borderColor: "border-white/10",
    },
    {
      title: "Enterprise Systems",
      shortDesc: "Internal management software",
      desc: "Custom software: inventory, users, reports, dashboards, access control and permissions.",
      icon: "ðŸ¢",
      borderColor: "border-white/10",
    },
    {
      title: "AI & Chatbots",
      shortDesc: "Intelligence artificial",
      desc: "Chat IA, chatbots with Chat GPT, WhatsApp integration, 24/7 customer support automation.",
      icon: "ðŸ¤–",
      borderColor: "border-white/10",
    },
    {
      title: "Full Systems",
      shortDesc: "End-to-end solutions",
      desc: "Everything: frontend, backend, database, auth, payments, emails and deployment. One complete solution.",
      icon: "ðŸ”§",
      borderColor: "border-white/10",
    },
    {
      title: "Maintenance",
      shortDesc: "Ongoing support",
      desc: "Bug fixes, security updates, monitoring, backups and continuous improvements.",
      icon: "ðŸ› ï¸",
      borderColor: "border-white/10",
    },
  ],
  es: [
    {
      title: "APIs & Backend",
      shortDesc: "Backend robusto y escalable",
      desc: "APIs REST y GraphQL seguras con Node.js, Express, Spring Boot. AutenticaciÃ³n JWT, rate limiting, documentaciÃ³n Swagger.",
      icon: "ðŸ”Œ",
      borderColor: "border-white/10",
    },
    {
      title: "Apps MÃ³viles",
      shortDesc: "Apps para Android y iOS",
      desc: "Apps nativas para Android y iOS con React Native y Kotlin. Listas para Google Play y App Store.",
      icon: "ðŸ“±",
      borderColor: "border-white/10",
    },
    {
      title: "Landing Pages",
      shortDesc: "PÃ¡ginas de conversiÃ³n",
      desc: "Landing pages de alto impacto con animaciones GSAP. Optimizadas para SEO y tasas de conversiÃ³n.",
      icon: "ðŸŽ¯",
      borderColor: "border-white/10",
    },
    {
      title: "PÃ¡ginas Web",
      shortDesc: "Sitios web profesionales",
      desc: "PÃ¡ginas web y sitios web personalizados. DiseÃ±o moderno, optimizados SEO, carga rÃ¡pida.",
      icon: "ðŸŒ",
      borderColor: "border-white/10",
    },
    {
      title: "Sistemas Empresariales",
      shortDesc: "Software de gestiÃ³n interna",
      desc: "Software a medida: inventarios, usuarios, reportes, dashboards, control de accesos y permisos.",
      icon: "ðŸ¢",
      borderColor: "border-white/10",
    },
    {
      title: "IA & Chatbots",
      shortDesc: "Inteligencia artificial",
      desc: "Chat IA, chatbots con Chat GPT, integraciÃ³n WhatsApp, automatizaciÃ³n de soporte 24/7.",
      icon: "ðŸ¤–",
      borderColor: "border-white/10",
    },
    {
      title: "Sistemas Completos",
      shortDesc: "Soluciones integrales",
      desc: "Todo: frontend, backend, base de datos, autenticaciÃ³n, pagos, emails y deployment. Una soluciÃ³n completa.",
      icon: "ðŸ”§",
      borderColor: "border-white/10",
    },
    {
      title: "Mantenimiento",
      shortDesc: "Soporte continuo",
      desc: "CorrecciÃ³n de bugs, actualizaciones de seguridad, monitoreo, backups y mejoras continuas.",
      icon: "ðŸ› ï¸",
      borderColor: "border-white/10",
    },
  ],
};

// Servicio individual con efecto de expansiÃ³n
function ServiceCard({ service, idx }: { service: typeof servicesData.en[0]; idx: number }) {
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
        {/* Fondo en hover */}
        <motion.div
          className="absolute inset-0 bg-white/[0.03]"
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* LÃ­nea decorativa superior */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-white/20"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
        
        {/* Contenido */}
        <div className="relative z-10 p-5 md:p-6 h-full flex flex-col">
          {/* Header siempre visible */}
          <div className="flex items-start gap-4">
            <motion.div
              className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10"
              animate={{ scale: isExpanded ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl filter grayscale">{service.icon}</span>
            </motion.div>
            
            <div className="flex-1">
              <motion.h3
                className="text-lg font-bold text-white"
                animate={{ 
                  color: isExpanded ? "#fafafa" : "#fafafa"
                }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1"
                animate={{ opacity: isExpanded ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {service.shortDesc}
              </motion.p>
            </div>
          </div>
          
          {/* DescripciÃ³n expandida */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-4"
              >
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
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
    <section id="services" className="w-full h-full min-h-screen px-4 md:px-6 relative flex items-center">
      {/* Fondo */}
      <div className="absolute inset-0 bg-zinc-950" />
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* LÃ­neas diagonales */}
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(-30deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 100px'
        }} />
        
        {/* CÃ­rculo decorativo */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-[2px] bg-gradient-to-r from-teal-400 to-transparent" />
            <span className="text-xs text-teal-400 uppercase tracking-[0.3em]">
              {lang === "en" ? "Services" : "Servicios"}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            {lang === "en" ? "What we build" : "Qué construimos"}
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl">
            {lang === "en"
              ? "From idea to deployment, we build digital products that scale."
              : "Desde la idea hasta el despliegue, construimos productos digitales que escalan."}
          </p>
        </motion.div>

        {/* Grid de servicios en columnas diagonales - estilo masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/*Primer columna - 2 servicios*/}
          <div className="flex flex-col gap-4 md:gap-6">
            <ServiceCard service={t[0]} idx={0} />
            <ServiceCard service={t[4]} idx={4} />
          </div>
          
          {/*Segunda columna - 2 servicios*/}
          <div className="flex flex-col gap-4 md:gap-6 md:mt-12">
            <ServiceCard service={t[1]} idx={1} />
            <ServiceCard service={t[5]} idx={5} />
          </div>
          
          {/*Tercera columna - 2 servicios*/}
          <div className="flex flex-col gap-4 md:gap-6">
            <ServiceCard service={t[2]} idx={2} />
            <ServiceCard service={t[6]} idx={6} />
          </div>
          
          {/*Cuarta columna - 2 servicios*/}
          <div className="flex flex-col gap-4 md:gap-6 md:mt-12">
            <ServiceCard service={t[3]} idx={3} />
            <ServiceCard service={t[7]} idx={7} />
          </div>
        </div>
        
        {/*cta final*/}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-500 text-sm">
            {lang === "en"
              ? "Need something else? Let's talk â†’"
              : "Â¿Necesitas algo mÃ¡s? Hablemos â†’"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

