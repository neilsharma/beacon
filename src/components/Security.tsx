import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from "@/lib/utils";
import { SectionBorder } from './ui/section-border';
import ShieldIcon from './icons/ShieldIcon';
import React from 'react';

const Security = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = React.useState("");

  React.useEffect(() => {
    let str = generateRandomString(8000);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(8000);
    setRandomString(str);
  }


  return (
    <section 
      id="security" 
      className="py-12 sm:py-20 bg-black relative overflow-hidden group"
      onMouseMove={onMouseMove}
    >
      <SectionBorder />
      
      {/* Full-width Evervault Background Effect */}
      <div className="absolute inset-0">
        {/* Base gradient backgrounds */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/5 via-transparent to-transparent opacity-30" />
        
        {/* Evervault glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
          }}
        />
        
        {/* Encrypted text overlay - always visible but subtle */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <EvervaultPattern
            mouseX={mouseX}
            mouseY={mouseY}
            randomString={randomString}
          />
        </div>
        
        {/* Additional encrypted text overlay for hover effect */}
        <div className="absolute inset-0 opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100">
          <EvervaultPattern
            mouseX={mouseX}
            mouseY={mouseY}
            randomString={randomString}
          />
        </div>
        
        {/* Original pulsing animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Central Shield Icon - inspired by reflect.app */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-gradient-to-b from-white/20 to-white/5 rounded-full p-6 backdrop-blur-sm border border-white/10">
                <ShieldIcon className="h-16 w-16 sm:h-20 sm:w-20" />
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hardened Security
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our security expertise spans <span className="text-white font-extrabold">FedRAMP authorization</span>, <span className="text-white font-extrabold">FISMA compliance</span>, and <span className="text-white font-extrabold">NIST framework implementation</span>. We bring deep knowledge in zero-trust architecture and continuous monitoring to ensure your AI solutions meet federal security standards.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// Evervault Pattern Component for the background
export function EvervaultPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      {/* Shield-centered text reveal - always visible but subtle */}
      <motion.div
        className="absolute inset-0"
        style={{
          maskImage: "radial-gradient(circle at center, white 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, white 30%, transparent 70%)"
        }}
      >
        <p className="absolute inset-0 text-xs h-full break-words whitespace-pre-wrap text-green-400/50 font-mono font-medium leading-2">
          {randomString}
        </p>
      </motion.div>

      {/* Additional background text layers for more density */}
      <motion.div
        className="absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse 60% 40% at center, white 10%, transparent 50%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 40% at center, white 10%, transparent 50%)"
        }}
      >
        <p className="absolute inset-0 text-xs h-full break-words whitespace-pre-wrap text-blue-400/30 font-mono font-light leading-2">
          {randomString.split('').reverse().join('')}
        </p>
      </motion.div>

      {/* Mouse interaction gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-700/20 opacity-0 group-hover:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      
      {/* Mouse interaction text reveal */}
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay group-hover:opacity-100"
        style={style}
      >
        <p className="absolute inset-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500 leading-2">
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

export default Security;