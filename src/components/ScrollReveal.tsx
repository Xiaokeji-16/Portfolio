"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  threshold?: number;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  y = 28,
  threshold = 0.18,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
            return;
          }
          if (!once) setIsVisible(false);
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const style = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
