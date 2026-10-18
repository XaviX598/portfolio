"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ScrollMotionProps = {
  children: ReactNode;
  className?: string;
  /** Desplazamiento vertical en px mientras cruza la pantalla (parallax). */
  y?: [number, number];
  /** Giro en grados desde que entra hasta que llega al centro. */
  rotate?: [number, number];
  /** Escala desde que entra hasta que llega al centro. */
  scale?: [number, number];
};

// Imágenes que giran, se mueven y aparecen con el scroll. Solo transform: no recalcula el layout.
export default function ScrollMotion({ children, className = "", y = [40, -40], rotate = [0, 0], scale = [1, 1] }: ScrollMotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ty = useTransform(scrollYProgress, [0, 1], y);
  const rot = useTransform(scrollYProgress, [0, 0.5], rotate, { clamp: true });
  const sc = useTransform(scrollYProgress, [0, 0.5], scale, { clamp: true });
  const opacity = useTransform(scrollYProgress, [0, 0.18], [0, 1], { clamp: true });

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y: ty, rotate: rot, scale: sc, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
