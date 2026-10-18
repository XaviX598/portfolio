"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// Cuenta desde 0 hasta la cifra cuando entra en pantalla. El HTML ya trae la cifra final,
// así que sin JavaScript o con movimiento reducido se lee igual.
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const [, prefix = "", digits = "", suffix = value] = value.match(/^(\D*)([\d.,]+)(.*)$/) ?? [];
  const separator = digits.match(/[.,]/)?.[0] ?? ".";
  const target = Number(digits.replace(/[.,]/g, ""));

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce || !target) return;
    const format = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, target, separator]);

  return (
    <>
      {prefix}
      <span ref={ref} className="tabular-nums">
        {digits}
      </span>
      {suffix}
    </>
  );
}
