import React from 'react';

const InnovationIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`${className} rounded-full bg-gray-700 flex items-center justify-center`}>
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-5/6 h-5/6"
    >
      <g fill="white">
        {/* Lightbulb outline */}
        <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2ZM14 16H10V15H14V16ZM14.85 13.1L14 13.7V14H10V13.7L9.15 13.1C7.8 12.16 7 10.63 7 9C7 6.24 9.24 4 12 4S17 6.24 17 9C17 10.63 16.2 12.16 14.85 13.1Z"/>
        
        {/* Base of lightbulb */}
        <path d="M9 19H15V20H9V19Z"/>
        <path d="M10 21H14V22H10V21Z"/>
        
        {/* Innovation elements - arrow */}
        <path d="M10.5 7L12.5 9L11.5 10L13.5 10.5L12 12L10.5 10.5L11.5 9.5L10.5 7Z"/>
        
        {/* X mark */}
        <path d="M8.5 8.5L9.5 7.5M9.5 8.5L8.5 7.5" stroke="white" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        
        {/* Circle */}
        <circle cx="14.5" cy="10.5" r="0.8"/>
        
        {/* Radiating lines around bulb */}
        <path d="M12 1V0.5M19.07 4.93L19.5 4.5M19.07 19.07L19.5 19.5M5 12H4.5M20 12H19.5M4.93 4.93L4.5 4.5M4.93 19.07L4.5 19.5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
      </g>
    </svg>
  </div>
);

export default InnovationIcon;