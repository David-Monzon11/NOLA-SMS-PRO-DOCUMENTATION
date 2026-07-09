import React, { useState } from 'react';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="my-6 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 transition-all duration-250">
      {/* Tab headers */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-1.5 gap-1">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
              activeIdx === idx
                ? 'bg-white dark:bg-slate-800 text-brand-primary dark:text-brand-secondary shadow-sm border border-slate-200/50 dark:border-slate-700/55'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab panel body */}
      <div className="p-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {tabs[activeIdx].content}
      </div>
    </div>
  );
};
