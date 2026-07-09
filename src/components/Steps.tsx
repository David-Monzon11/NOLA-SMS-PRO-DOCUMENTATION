import React from 'react';

interface StepsProps {
  items: string[];
}

export const Steps: React.FC<StepsProps> = ({ items }) => {
  return (
    <div className="my-6 space-y-4">
      {items.map((step, idx) => (
        <div key={idx} className="flex gap-4 group">
          {/* Step number bubble */}
          <div className="step-ring mt-0.5 flex-shrink-0 transition-all duration-200 group-hover:scale-105">
            {idx + 1}
          </div>
          {/* Step content */}
          <div className="flex-1 pt-0.5">
            <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
