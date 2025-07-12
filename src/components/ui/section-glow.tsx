import React from 'react';

interface SectionGlowProps {
  className?: string;
  opacity?: string;
  size?: string;
  position?: string;
}

export const SectionGlow: React.FC<SectionGlowProps> = ({ 
  className = "",
  size = "w-[800px] h-[400px]",
  position = "top-[-150px]"
}) => {
  return (
    <div className={`absolute ${position} left-1/2 transform -translate-x-1/2 ${size} bg-white opacity-[12%] rounded-full blur-[120px] pointer-events-none ${className}`}></div>
  );
};