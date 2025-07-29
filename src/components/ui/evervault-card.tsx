import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  text,
  className,
  children,
}: {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = React.useState("");

  React.useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-transparent",
        className
      )}
      onMouseMove={onMouseMove}
    >
      <div className="absolute inset-0 rounded-3xl">
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 transition duration-500 group-hover/security:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.1),
              transparent 70%
            )
          `,
          }}
        />
      </div>
      <div className="absolute inset-0 rounded-3xl opacity-0 mix-blend-overlay transition duration-500 group-hover/security:opacity-100">
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center">
        {children}
        {text && (
          <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">{text}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-3xl [mask-image:linear-gradient(white,transparent)] group-hover/security:opacity-30"></div>
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-700/20 opacity-0 group-hover/security:opacity-100 backdrop-blur-xl transition duration-700"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 mix-blend-overlay group-hover/security:opacity-60"
        style={style}
      >
        <p className="absolute inset-0 text-xs h-full break-words whitespace-pre-wrap text-green-400/60 font-mono font-bold transition duration-700 p-4 leading-3">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};