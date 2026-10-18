"use client";

import Image from "next/image";
import { useEffect, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

type LayerProps = {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  depth: number;
  rotate?: number;
  delay?: string;
  className: string;
  children: ReactNode;
};

// Cada capa se mueve según su profundidad: las cercanas viajan más con el mouse que las del fondo.
function Layer({ mx, my, depth, rotate = 0, delay = "0s", className, children }: LayerProps) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  const rotateY = useTransform(mx, (v) => v * depth * 0.35);
  const rotateX = useTransform(my, (v) => -v * depth * 0.35);

  return (
    <motion.div style={{ x, y, rotateX, rotateY, rotate }} className={`absolute ${className}`}>
      <div className="float-idle" style={{ animationDelay: delay }}>
        {children}
      </div>
    </motion.div>
  );
}

// Piezas reales del trabajo flotando en 3D y siguiendo al mouse (en móvil flotan solas).
export default function FloatingObjects({ chatTitle, chatText, className = "" }: { chatTitle: string; chatText: string; className?: string }) {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, rawX, rawY]);

  return (
    <div data-ui className={`[perspective:1200px] ${className}`} aria-hidden="true">
      <Layer mx={mx} my={my} depth={16} rotate={-6} className="left-0 top-[22%] w-[72%]">
        <div className="relative aspect-[2/1] overflow-hidden ring-1 ring-white/10">
          <Image src="/proyectos/restaurant.png" alt="" fill sizes="30vw" className="object-cover object-top" />
        </div>
      </Layer>

      <Layer mx={mx} my={my} depth={70} rotate={45} delay="-2s" className="left-[44%] top-[2%] w-[13%]">
        <div className="aspect-square bg-accent" />
      </Layer>

      <Layer mx={mx} my={my} depth={36} rotate={8} delay="-1s" className="right-[4%] top-[6%] w-[34%]">
        <PhoneMockup src="/proyectos/movil/amz-express.jpg" alt="" sizes="16vw" priority />
      </Layer>

      <Layer mx={mx} my={my} depth={54} rotate={-3} delay="-3s" className="bottom-[8%] left-[6%] w-[62%] max-w-[300px]">
        <div className="flex items-start gap-3 bg-[#16222e] p-3 ring-1 ring-white/10 md:p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.05 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88z" />
            </svg>
          </span>
          <span className="min-w-0 text-left">
            <span className="block text-[15px] font-medium text-[#ece8e1]">{chatTitle}</span>
            <span className="block text-[14px] leading-snug text-[#a4adb4]">{chatText}</span>
          </span>
        </div>
      </Layer>

    </div>
  );
}
