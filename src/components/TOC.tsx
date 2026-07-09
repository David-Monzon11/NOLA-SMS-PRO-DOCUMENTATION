import React, { useState, useEffect } from 'react';
import type { DocPage } from '../data/docsData';
import { AlignLeft } from 'lucide-react';

interface TOCProps {
  page: DocPage;
}

interface TOCItem {
  id: string;
  label: string;
}

export const TOC: React.FC<TOCProps> = ({ page }) => {
  const [activeId, setActiveId] = useState('');
  const [scrollPercent, setScrollPercent] = useState(0);

  // Compute active headers on current page
  const items: TOCItem[] = [];
  if (page.purpose) items.push({ id: 'purpose', label: 'Purpose' });
  if (page.steps && page.steps.length > 0) items.push({ id: 'steps', label: 'Step-by-Step Guide' });
  if (page.tips && page.tips.length > 0) items.push({ id: 'tips', label: 'Tips & Best Practices' });
  if (page.notes && page.notes.length > 0) items.push({ id: 'notes', label: 'Notes' });
  if (page.warnings && page.warnings.length > 0) items.push({ id: 'warnings', label: 'Warnings' });
  if (page.commonIssues && page.commonIssues.length > 0) items.push({ id: 'common-issues', label: 'Common Issues' });
  if (page.faqs && page.faqs.length > 0) items.push({ id: 'faqs', label: 'FAQs' });
  if (page.relatedPages && page.relatedPages.length > 0) items.push({ id: 'related-pages', label: 'Related Pages' });

  // Monitor scroll for reading progress and active section highlight
  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading progress percent
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setScrollPercent(percent);

      // Identify which section is currently active
      let currentActive = '';
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the heading is in the upper half of viewport, mark it active
          if (rect.top <= 120) {
            currentActive = item.id;
          }
        }
      }
      setActiveId(currentActive || (items[0]?.id || ''));
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial calculation
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, items.length]);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block w-64 h-[calc(100vh-4rem)] sticky top-16 flex-shrink-0 p-6 overflow-y-auto border-l border-slate-100 dark:border-slate-800/60 bg-white/10 dark:bg-slate-950/10">
      
      {/* TOC Header with Circular Reading Progress */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/50 dark:border-slate-800/80">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <AlignLeft className="h-4 w-4 text-brand-primary dark:text-brand-secondary" />
          On This Page
        </span>
        {/* Reading Progress SVG Circle */}
        <div className="relative flex items-center justify-center w-8 h-8" title={`Read progress: ${scrollPercent}%`}>
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="16"
              cy="16"
              r="12"
              className="stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="2.5"
              fill="transparent"
            />
            {/* Progress circle */}
            <circle
              cx="16"
              cy="16"
              r="12"
              className="stroke-brand-primary dark:stroke-brand-secondary transition-all duration-200"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 12}
              strokeDashoffset={2 * Math.PI * 12 * (1 - scrollPercent / 100)}
            />
          </svg>
          <span className="absolute text-[8px] font-black text-slate-700 dark:text-slate-300">
            {scrollPercent}%
          </span>
        </div>
      </div>

      {/* Navigation list */}
      <ul className="space-y-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`block transition-all duration-150 pl-2.5 border-l ${
                  isActive
                    ? 'text-brand-primary dark:text-brand-secondary border-brand-primary dark:border-brand-secondary font-bold'
                    : 'border-slate-200 dark:border-slate-800/70 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
