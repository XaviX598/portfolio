"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  repeat?: boolean;
  distance?: number;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  repeat = true,
  distance = 50,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !repeat, margin: "-50px" });

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const hiddenState = { 
    opacity: 0, 
    scale: 0.95,
    ...directions[direction] 
  };
  
  const visibleState = { 
    opacity: 1, 
    x: 0, 
    y: 0,
    scale: 1
  };

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={isInView ? visibleState : hiddenState}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
