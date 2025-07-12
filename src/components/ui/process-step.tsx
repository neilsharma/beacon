import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  className = ""
}) => {
  return (
    <div className={`flex items-start space-x-4 ${className}`}>
      <div className="flex-shrink-0">
        <div className="inline-flex items-center justify-center w-8 h-8 bg-yellow-500 text-black rounded-full font-bold text-sm">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <div className="text-title font-bold mb-2">{title}</div>
        <div className="text-description text-sm leading-relaxed">{description}</div>
      </div>
    </div>
  );
};