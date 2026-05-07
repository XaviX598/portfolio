import { motion } from "framer-motion";
import Link from "next/link";
import type { ServiceEntry } from "./data";

interface ServiceDetailProps {
  service: ServiceEntry;
}

const whatsappHref =
  "https://wa.me/593985295277?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20software";

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/servicios"
            className="mb-6 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-teal-400"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a servicios
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-teal-400 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-teal-400">
              Servicio
            </span>
          </div>

          <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl">
            {service.title}
          </h1>
          <p className="max-w-2xl text-xl text-zinc-400">{service.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-16"
        >
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            {service.shortDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-3xl font-bold text-white">Qué incluye</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900/60 p-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20">
                  <svg
                    className="h-4 w-4 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-3xl font-bold text-white">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/10 bg-zinc-900/60 p-6"
              >
                <div className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-2 mt-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 px-8 py-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white">{service.cta.title}</h2>
          <p className="mb-8 text-zinc-400">{service.cta.subtitle}</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-teal-400"
          >
            {service.cta.button}
            <svg
              className="h-5 w-5"
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
          </a>
        </motion.div>
      </div>
    </div>
  );
}
