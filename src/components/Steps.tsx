import React from 'react';

interface StepsProps {
  items: string[];
  startIndex?: number;
  compact?: boolean;
}

export const Steps: React.FC<StepsProps> = ({ items, startIndex = 0, compact = false }) => {
  return (
    <div className={`${compact ? 'my-5 space-y-3' : 'my-6 space-y-4'}`}>
      {items.map((step, idx) => (
        <div
          key={idx}
          className="group flex gap-4 border border-[#D7E7FA] bg-white p-4 transition-colors hover:border-[#9BC4F5] hover:bg-[#F8FBFF] dark:border-[#183354] dark:bg-[#0B1627] dark:hover:border-[#315C8F]"
        >
          <div className="step-ring mt-0.5 flex-shrink-0 transition-all duration-200 group-hover:scale-105">
            {startIndex + idx + 1}
          </div>
          <div className="flex-1 pt-0.5">
            <p className="text-[15px] leading-7 text-[#425B7D] dark:text-slate-300">
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
