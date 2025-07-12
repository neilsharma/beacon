import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedGridPatternProps {
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  className?: string;
}

export function AnimatedGridPattern({
  numSquares = 30,
  maxOpacity = 0.1,
  duration = 3,
  repeatDelay = 1,
  className,
}: AnimatedGridPatternProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-pattern)"
          className="text-white"
        />
        
        {/* Animated squares */}
        {Array.from({ length: numSquares }).map((_, i) => (
          <motion.rect
            key={i}
            x={Math.random() * 100 + "%"}
            y={Math.random() * 100 + "%"}
            width="40"
            height="40"
            fill="currentColor"
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, maxOpacity, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatDelay,
              delay: Math.random() * duration,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}