import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="overflow-hidden rounded-lg border border-[#D7E7FA] bg-white dark:border-[#183354] dark:bg-[#07111F]">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className={`flex w-full items-center justify-between gap-4 border-b border-[#D7E7FA] px-5 py-4 text-left transition-colors last:border-b-0 dark:border-[#183354]
                ${isOpen
                  ? 'bg-[#E8F3FF] dark:bg-[#102B4F]'
                  : 'bg-white hover:bg-[#F4F9FF] dark:bg-[#07111F] dark:hover:bg-[#0B1627]'
                }`}
            >
              <span className="text-[14px] font-medium text-slate-800 dark:text-slate-200 leading-snug">
                {item.q}
              </span>
              <ChevronDown
                className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-200
                  ${isOpen ? 'rotate-180 text-[#1F5AAE] dark:text-[#4F8EF7]' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="border-b border-[#D7E7FA] bg-[#F8FBFF] px-5 pb-4 pt-2 dark:border-[#183354] dark:bg-[#0B1627]">
                <p className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
