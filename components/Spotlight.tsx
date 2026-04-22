"use client";

import { useEffect, type ReactNode } from "react";

interface SpotlightProps {
  children?: ReactNode;
  className?: string;
}

export default function Spotlight({ children, className = "" }: SpotlightProps) {
  useEffect(() => {
    const spotlight = document.createElement("div");
    spotlight.id = "spotlight-effect";
    spotlight.style.cssText = `
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(45, 212, 191, 0.03), transparent 40%);
      opacity: 1;
    `;
    document.body.appendChild(spotlight);

    const handleMouseMove = (e: MouseEvent) => {
      spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
      spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseLeave = () => {
      spotlight.style.setProperty('--mouse-x', '50%');
      spotlight.style.setProperty('--mouse-y', '50%');
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.removeChild(spotlight);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={className}>
      {children}
    </div>
  );
}