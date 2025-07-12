import React from 'react';

interface ZapIconProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const ZapIcon: React.FC<ZapIconProps> = ({ 
  className = "h-8 w-8", 
  primaryColor = "#FFFFFF", 
  secondaryColor = "rgba(255, 255, 255, 0.3)" 
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lightning bolt main shape - primary color */}
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        stroke={primaryColor}
        strokeWidth="1.5"
        fill={secondaryColor}
      />
      
      {/* Inner lightning detail - primary color */}
      <path
        d="M11 6L7 12H11L10.5 16L14.5 10H11L11 6Z"
        fill={primaryColor}
      />
      
      {/* Energy sparks - primary color */}
      <circle cx="6" cy="8" r="1" fill={primaryColor} opacity="0.8" />
      <circle cx="18" cy="6" r="1" fill={primaryColor} opacity="0.8" />
      <circle cx="19" cy="16" r="1" fill={primaryColor} opacity="0.8" />
      <circle cx="5" cy="18" r="1" fill={primaryColor} opacity="0.8" />
      
      {/* Energy lines - secondary color */}
      <line x1="4" y1="6" x2="6" y2="4" stroke={primaryColor} strokeWidth="1.5" opacity="0.6" />
      <line x1="18" y1="4" x2="20" y2="2" stroke={primaryColor} strokeWidth="1.5" opacity="0.6" />
      <line x1="20" y1="18" x2="22" y2="16" stroke={primaryColor} strokeWidth="1.5" opacity="0.6" />
      <line x1="3" y1="20" x2="5" y2="22" stroke={primaryColor} strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
};

export default ZapIcon;