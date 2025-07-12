import React from 'react';

interface ShieldIconProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const ShieldIcon: React.FC<ShieldIconProps> = ({ 
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
      {/* Shield outline - primary color */}
      <path
        d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z"
        stroke={primaryColor}
        strokeWidth="1.5"
        fill="transparent"
      />
      
      {/* Inner shield layers - secondary color */}
      <path
        d="M12 4L5 8V11C5 15.42 7.79 19.44 12 20.5C16.21 19.44 19 15.42 19 11V8L12 4Z"
        fill={secondaryColor}
      />
      
      {/* Security lock symbol - primary color */}
      <rect
        x="9"
        y="11"
        width="6"
        height="4"
        rx="1"
        stroke={primaryColor}
        strokeWidth="1.5"
        fill="transparent"
      />
      
      <path
        d="M10 11V9C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9V11"
        stroke={primaryColor}
        strokeWidth="1.5"
        fill="transparent"
      />
      
      {/* Lock dot - primary color */}
      <circle cx="12" cy="13" r="1" fill={primaryColor} />
    </svg>
  );
};

export default ShieldIcon;