"use client";
import {
  useScroll,
  useTransform,
  motion
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  textContent: React.ReactNode | ((props: { icon?: React.ComponentType<{ className?: string; primaryColor?: string; secondaryColor?: string }> }) => React.ReactNode);
  imageContent: React.ReactNode;
  icon?: React.ComponentType<{ className?: string; primaryColor?: string; secondaryColor?: string }>;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Create refs for each icon
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  iconRefs.current = data.map((_, i) => iconRefs.current[i] ?? null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  // Create scroll progress for each icon
  const iconScrollProgresses = data.map((_, index) => {
    return useScroll({
      target: iconRefs.current[index] ? { current: iconRefs.current[index] } : undefined,
      offset: ["start center", "end center"]
    }).scrollYProgress;
  });

  // Create color transforms for each icon
  const iconBorderColors = iconScrollProgresses.map(progress => 
    useTransform(progress, [0, 1], ["#000000", "#facc15"])
  );

  return (
    <div className="w-full" ref={containerRef}>
      {/* Desktop Timeline Layout */}
      <div ref={ref} className="hidden md:block relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            data-timeline-item={index}
            className="grid grid-cols-5 gap-8 items-center pt-12 md:pt-24 pb-6 md:pb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Left side - text for odd indices (0,2,4...), image for even indices (1,3,5...) */}
            <div className="col-span-2">
              {index % 2 === 0 ? (
                typeof item.textContent === 'function' ? item.textContent({}) : item.textContent
              ) : item.imageContent}
            </div>

            {/* Timeline center */}
            <div className="col-span-1 flex justify-center relative z-30">
              <motion.div 
                ref={(el) => { iconRefs.current[index] = el; }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full shadow-lg relative z-30 border-2" 
                style={{ 
                  backgroundColor: 'rgba(30,30,30,1)',
                  borderColor: iconBorderColors[index]
                }}
              >
                {item.icon && (
                  <item.icon 
                    className="h-8 w-8"
                    primaryColor="#FFFFFF"
                    secondaryColor="rgba(255, 255, 255, 0.4)"
                  />
                )}
              </motion.div>
            </div>

            {/* Right side - image for odd indices (0,2,4...), text for even indices (1,3,5...) */}
            <div className="col-span-2">
              {index % 2 === 0 ? item.imageContent : (
                typeof item.textContent === 'function' ? item.textContent({}) : item.textContent
              )}
            </div>
          </motion.div>
        ))}
        
        {/* Vertical timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-yellow-400/30 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-10"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-yellow-500 via-yellow-400 to-transparent from-[0%] via-[50%] rounded-full"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div 
            key={index} 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Text content with icon */}
            <div className="mb-8">
              {typeof item.textContent === 'function' ? item.textContent({ icon: item.icon }) : item.textContent}
            </div>
            
            {/* Image content */}
            <div>
              {item.imageContent}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};