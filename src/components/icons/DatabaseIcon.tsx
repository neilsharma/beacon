import React from 'react';

interface DatabaseIconProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const DatabaseIcon: React.FC<DatabaseIconProps> = ({ 
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
      {/* Database cylinders - primary color outline */}
      <ellipse
        cx="12"
        cy="5"
        rx="9"
        ry="3"
        stroke={primaryColor}
        strokeWidth="1.5"
        fill={secondaryColor}
      />
      
      <path
        d="M21 12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12"
        stroke={primaryColor}
        strokeWidth="1.5"
        fill="transparent"
      />
      
      <path
        d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5"
        stroke={primaryColor}
        strokeWidth="1.5"
        fill="transparent"
      />
      
      {/* Data visualization elements - secondary color */}
      <ellipse
        cx="12"
        cy="12"
        rx="7"
        ry="2"
        fill={secondaryColor}
      />
      
      <ellipse
        cx="12"
        cy="19"
        rx="7"
        ry="2"
        fill={secondaryColor}
      />
      
      {/* Data points - primary color */}
      <circle cx="8" cy="8" r="1" fill={primaryColor} />
      <circle cx="12" cy="8" r="1" fill={primaryColor} />
      <circle cx="16" cy="8" r="1" fill={primaryColor} />
      
      <circle cx="8" cy="16" r="1" fill={primaryColor} />
      <circle cx="12" cy="16" r="1" fill={primaryColor} />
      <circle cx="16" cy="16" r="1" fill={primaryColor} />
      
      {/* Connection lines - primary color */}
      <line x1="8" y1="8" x2="8" y2="16" stroke={primaryColor} strokeWidth="1.5" opacity="0.6" />
      <line x1="12" y1="8" x2="12" y2="16" stroke={primaryColor} strokeWidth="1.5" opacity="0.6" />
      <line x1="16" y1="8" x2="16" y2="16" stroke={primaryColor} strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
};

export default DatabaseIcon;