"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { services } from "./data";

export default function ServicesIndex() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-teal-400 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-teal-400">
              Servicios
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            Servicios de desarrollo de software
          </h1>
          <p className="max-w-2xl text-xl text-zinc-400">
            Desarrollo profesional de páginas web, landing pages, apps móviles,
            ecommerce e inteligencia artificial para empresas que quieren crecer
            con una base técnica sólida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
            >
              <Link href={`/servicios/${service.slug}`}>
                <div
                  className={`h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-sm transition-all duration-500 ${
                    hovered === idx ? "border-teal-500/30 bg-white/[0.05]" : ""
                  }`}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                  </div>

                  <h2 className="mb-3 text-xl font-bold text-white">{service.title}</h2>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {service.shortDescription}
                  </p>

                  <div className="mt-4 flex items-center text-sm text-teal-400">
                    <span>Ver detalles</span>
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500">
            ¿Querés una propuesta? {" "}
            <a
              href="https://wa.me/593985295277?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20software"
              target="_blank"
              rel="noreferrer"
              className="text-teal-400 hover:underline"
            >
              Escribinos por WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

