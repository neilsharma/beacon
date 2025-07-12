import React from "react";
import { cn } from "@/lib/utils";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 20,
  mainCircleOpacity = 0.4,
  numCircles = 2,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none",
        className,
      )}
    >
      {/* Circle 1 - Slow pulse to 2x radius */}
      <div
        className="absolute rounded-full bg-transparent"
        style={{
          width: `${mainCircleSize}px`,
          height: `${mainCircleSize}px`,
          border: '0.5px solid rgba(250, 204, 21, 0.6)',
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "rippleSlow 3s ease-out infinite",
        }}
      />
      
      {/* Circle 2 - Fast pulse to 2x radius, starts smaller */}
      <div
        className="absolute rounded-full bg-transparent"
        style={{
          width: `${mainCircleSize * 0.6}px`,
          height: `${mainCircleSize * 0.6}px`,
          border: '0.5px solid rgba(250, 204, 21, 0.6)',
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "rippleFast 3s ease-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes rippleSlow {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: ${mainCircleOpacity};
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        @keyframes rippleFast {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: ${mainCircleOpacity};
          }
          70% {
            transform: translate(-50%, -50%) scale(2);
            opacity: ${mainCircleOpacity * 0.2};
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
});

Ripple.displayName = "Ripple";
export default Ripple;