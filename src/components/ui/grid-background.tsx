import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function GridBackground({ children, className }: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full bg-black", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "opacity-30",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}