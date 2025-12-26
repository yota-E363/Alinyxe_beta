"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface AnimatedGradientProps {
  className?: string;
  colors?: string[];
  speed?: number;
  blur?: string;
}

export const AnimatedGradient = ({
  className,
  colors = [
    "hsl(var(--primary))",
    "hsl(var(--secondary))", 
    "hsl(280, 100%, 65%)",
    "hsl(var(--primary))",
  ],
  speed = 3,
  blur = "xl",
}: AnimatedGradientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;
    let progress = 0;

    const animate = () => {
      progress += 0.5 / speed;
      const hue1 = Math.sin(progress * 0.01) * 30 + 180;
      const hue2 = Math.cos(progress * 0.01) * 30 + 280;
      const hue3 = Math.sin(progress * 0.015 + 2) * 30 + 220;
      
      container.style.background = `
        linear-gradient(
          ${progress * 2}deg,
          hsl(${hue1}, 100%, 50%) 0%,
          hsl(${hue2}, 100%, 65%) 33%,
          hsl(${hue3}, 100%, 55%) 66%,
          hsl(${hue1}, 100%, 50%) 100%
        )
      `;
      
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 transition-all",
        blur === "xl" && "blur-xl",
        blur === "2xl" && "blur-2xl",
        blur === "3xl" && "blur-3xl",
        blur === "none" && "blur-none",
        className
      )}
    />
  );
};
