"use client";

import { useMemo } from "react";

export default function AmbientBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        left: (index * 17) % 100,
        size: 2 + (index % 4),
        delay: (index % 8) * 0.8,
        duration: 10 + (index % 7) * 2.2,
      })),
    []
  );

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-bg__mesh" />
      <div className="ambient-bg__aurora ambient-bg__aurora--a" />
      <div className="ambient-bg__aurora ambient-bg__aurora--b" />
      <div className="ambient-bg__aurora ambient-bg__aurora--c" />

      <div className="ambient-bg__particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="ambient-bg__particle"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

