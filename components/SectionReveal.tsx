"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type SectionRevealProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

// Transición entre secciones: la sección entra con un zoom y el borde superior en diagonal
// (el ángulo de la paleta), y ambos se enderezan a medida que llega al tope de la pantalla.
export default function SectionReveal({ id, className = "", children }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 15%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const cut = useTransform(scrollYProgress, [0, 1], [9, 0]);
  const clipPath = useTransform(cut, (c) => `polygon(0 ${c}vw, 100% 0, 100% 100%, 0 100%)`);

  return (
    <motion.div
      ref={ref}
      id={id}
      style={reduce ? undefined : { scale, clipPath }}
      className={`relative origin-top ${className}`}
    >
      {children}
    </motion.div>
  );
}
