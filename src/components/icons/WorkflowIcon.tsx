import React from 'react';

const WorkflowIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`${className} rounded-full bg-gray-700 flex items-center justify-center`}>
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-5/6 h-5/6"
    >
    <g fill="currentColor">
      {/* Main workflow nodes */}
      <circle cx="4" cy="6" r="2" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="8" cy="14" r="2" />
      <circle cx="16" cy="14" r="2" />
      <circle cx="12" cy="20" r="2" />
      
      {/* Connecting lines */}
      <path d="M6 6h4M14 6h4M6 14h6M10 14h6M10 16l2 2M14 16l-2 2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M12 8v4M8 12v-6M16 12v-6" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </g>
    </svg>
  </div>
);

export default WorkflowIcon;