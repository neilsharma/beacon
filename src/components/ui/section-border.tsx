import React from 'react';

interface SectionBorderProps {
  className?: string;
}

export const SectionBorder: React.FC<SectionBorderProps> = ({ className = "" }) => {
  return (
    <div className={`absolute top-0 left-[-100vw] right-[-100vw] h-px bg-gradient-to-r from-black from-35% via-white/20 to-black to-65% ${className}`}></div>
  );
};