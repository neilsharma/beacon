import React from 'react';

interface BrainIconProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const BrainIcon: React.FC<BrainIconProps> = ({ 
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
      {/* Brain outline - primary color */}
      <path
        d="M9.5 2C7.01 2 5 4.01 5 6.5C5 7.14 5.14 7.75 5.38 8.3C4.55 9.32 4 10.61 4 12C4 13.39 4.55 14.68 5.38 15.7C5.14 16.25 5 16.86 5 17.5C5 19.99 7.01 22 9.5 22C10.14 22 10.75 21.86 11.3 21.62C12.32 22.45 13.61 23 15 23C16.39 23 17.68 22.45 18.7 21.62C19.25 21.86 19.86 22 20.5 22C22.99 22 25 19.99 25 17.5C25 16.86 24.86 16.25 24.62 15.7C25.45 14.68 26 13.39 26 12C26 10.61 25.45 9.32 24.62 8.3C24.86 7.75 25 7.14 25 6.5C25 4.01 22.99 2 20.5 2C19.86 2 19.25 2.14 18.7 2.38C17.68 1.55 16.39 1 15 1C13.61 1 12.32 1.55 11.3 2.38C10.75 2.14 10.14 2 9.5 2Z"
        stroke={primaryColor}
        strokeWidth="1.5"
        fill="transparent"
      />
      
      {/* Brain hemispheres - secondary color */}
      <path
        d="M12 3C13.5 3 14.8 3.6 15.7 4.5C16.6 5.4 17.2 6.7 17.2 8.2V15.8C17.2 17.3 16.6 18.6 15.7 19.5C14.8 20.4 13.5 21 12 21"
        stroke={secondaryColor}
        strokeWidth="1.5"
        fill="transparent"
      />
      
      <path
        d="M12 3C10.5 3 9.2 3.6 8.3 4.5C7.4 5.4 6.8 6.7 6.8 8.2V15.8C6.8 17.3 7.4 18.6 8.3 19.5C9.2 20.4 10.5 21 12 21"
        stroke={secondaryColor}
        strokeWidth="1.5"
        fill="transparent"
      />
      
      {/* Neural connections - primary color */}
      <circle cx="9" cy="8" r="1" fill={primaryColor} />
      <circle cx="15" cy="8" r="1" fill={primaryColor} />
      <circle cx="9" cy="12" r="1" fill={primaryColor} />
      <circle cx="15" cy="12" r="1" fill={primaryColor} />
      <circle cx="9" cy="16" r="1" fill={primaryColor} />
      <circle cx="15" cy="16" r="1" fill={primaryColor} />
      
      {/* Connection lines - secondary color */}
      <line x1="9" y1="8" x2="15" y2="8" stroke={secondaryColor} strokeWidth="1.5" />
      <line x1="9" y1="12" x2="15" y2="12" stroke={secondaryColor} strokeWidth="1.5" />
      <line x1="9" y1="16" x2="15" y2="16" stroke={secondaryColor} strokeWidth="1.5" />
    </svg>
  );
};

export default BrainIcon;