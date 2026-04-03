"use client";

import type { CSSProperties, MouseEventHandler } from "react";

type MotionButtonVariant = "primary" | "secondary";
type MotionButtonSize = "md" | "lg";

type MotionButtonProps = {
  label: string;
  href?: string;
  target?: string;
  rel?: string;
  variant?: MotionButtonVariant;
  size?: MotionButtonSize;
  block?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

const splitChars = (label: string) =>
  Array.from(label).map((char, index) => ({
    key: `${index}-${char}`,
    value: char === " " ? "\u00A0" : char,
    index,
  }));

export default function MotionButton({
  label,
  href,
  target,
  rel,
  variant = "primary",
  size = "md",
  block = false,
  className = "",
  onClick,
}: MotionButtonProps) {
  const chars = splitChars(label);
  const classes = [
    "motion-btn",
    `motion-btn--${variant}`,
    `motion-btn--${size}`,
    block ? "motion-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="motion-btn__bg" />
      <span className="motion-btn__sr">{label}</span>
      <span className="motion-btn__label" aria-hidden="true">
        <span className="motion-btn__row motion-btn__row--top">
          {chars.map((char) => (
            <span
              key={`top-${char.key}`}
              className="motion-btn__char"
              style={{ "--char-index": char.index } as CSSProperties}
            >
              {char.value}
            </span>
          ))}
        </span>
        <span className="motion-btn__row motion-btn__row--bottom">
          {chars.map((char) => (
            <span
              key={`bottom-${char.key}`}
              className="motion-btn__char"
              style={{ "--char-index": char.index } as CSSProperties}
            >
              {char.value}
            </span>
          ))}
        </span>
      </span>
    </>
  );

  if (href) {
    const finalTarget = target ?? "_self";
    const finalRel =
      rel ?? (finalTarget === "_blank" ? "noopener noreferrer" : undefined);

    return (
      <a
        href={href}
        target={finalTarget}
        rel={finalRel}
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
