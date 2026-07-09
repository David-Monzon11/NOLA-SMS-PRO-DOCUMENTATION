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
    <div className="divide-y divide-slate-100 dark:divide-slate-800/60 border border-slate-100 dark:border-slate-800/60 rounded-xl overflow-hidden">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className={`w-full flex items-center justify-between text-left px-5 py-4 gap-4 transition-colors
                ${isOpen
                  ? 'bg-[#DCEEFF]/20 dark:bg-[#1F5AAE]/8'
                  : 'bg-white dark:bg-[#0C0F1A] hover:bg-slate-50 dark:hover:bg-slate-800/20'
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
              <div className="px-5 pb-4 pt-2 bg-[#DCEEFF]/10 dark:bg-[#1F5AAE]/5 border-t border-slate-100 dark:border-slate-800/40">
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
