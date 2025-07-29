import React from 'react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  className = ""
}) => {
  return (
    <div className={`text-center group bg-gradient-to-b from-modernization-gradient-start to-black backdrop-blur-sm border border-card-border rounded-xl p-6 sm:p-8 transition-all duration-300 shadow-lg min-h-[240px] sm:min-h-[260px] flex flex-col ${className}`}>
      <div className="mb-4 sm:mb-6">
        <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-white/10 rounded-full shadow-lg">
          <Icon className="h-7 sm:h-8 w-7 sm:w-8 text-white" strokeWidth={1.5} />
        </div>
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold text-title mb-2">
        {title}
      </h3>
      
      {subtitle && (
        <p className="text-subtitle font-medium mb-3 sm:mb-4 text-xs sm:text-sm">
          {subtitle}
        </p>
      )}
      
      <p className="text-description leading-relaxed text-xs sm:text-sm flex-1">
        {description}
      </p>
    </div>
  );
};