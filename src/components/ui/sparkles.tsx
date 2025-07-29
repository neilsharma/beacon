"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number;
  maxSize?: number;
  density?: number;
  speed?: number;
  color?: string;
}

export const Sparkles: React.FC<SparklesProps> = ({
  className,
  size = 1,
  minSize = 0.5,
  maxSize = 1.5,
  density = 25, // Reduced from default 50 to half
  speed = 2,
  color = "#3b82f6", // Blue-500
}) => {
  const sparkles = useMemo(() => {
    return Array.from({ length: density }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      delay: Math.random() * 3,
    }));
  }, [density, minSize, maxSize]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size * size}px`,
            height: `${sparkle.size * size}px`,
            backgroundColor: color,
            filter: "blur(0.5px)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};