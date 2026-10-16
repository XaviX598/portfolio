"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type DeviceMockupsProps = {
  desktopSrc: string;
  desktopAlt: string;
  notificationTitle: string;
  notificationText: string;
};

// Navegador con una captura real + notificación de WhatsApp (el resultado que vendemos).
// Al hacer scroll, cada capa se desplaza a distinta velocidad (parallax).
export default function DeviceMockups({ desktopSrc, desktopAlt, notificationTitle, notificationText }: DeviceMockupsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const desktopY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [40, -40]);
  const mobileY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [70, -70]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-2, 2]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-xl pb-10 pr-6 sm:pr-10">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-teal-500/10 blur-3xl" />

      <motion.div
        style={{ y: desktopY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/60"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-900 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 h-4 flex-1 rounded bg-white/5" />
        </div>
        <div className="relative aspect-[16/10]">
          <Image src={encodeURI(desktopSrc)} alt={desktopAlt} fill priority sizes="(min-width: 1024px) 560px, 90vw" className="object-cover object-top" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: mobileY, rotate }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 200, damping: 18 }}
        className="absolute -bottom-4 right-0 flex w-[78%] max-w-xs items-start gap-3 rounded-2xl border border-white/10 bg-zinc-900/90 p-4 shadow-2xl shadow-black/70 backdrop-blur-md sm:-right-4"
        aria-hidden="true"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0012.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z" /></svg>
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-white">{notificationTitle}</span>
          <span className="mt-0.5 block text-sm leading-snug text-zinc-400">{notificationText}</span>
        </span>
      </motion.div>
    </div>
  );
}
