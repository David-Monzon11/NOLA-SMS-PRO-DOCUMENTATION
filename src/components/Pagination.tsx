import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getNextAndPrevPages, sidebarStructure } from '../data/docsData';

interface PaginationProps {
  currentId: string;
  isMergedSection?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({ currentId, isMergedSection }) => {
  let prevLink: { id: string; title: string } | null = null;
  let nextLink: { id: string; title: string } | null = null;

  const currentSectionIndex = sidebarStructure.findIndex(sec => sec.items.some(item => item.id === currentId));
  const currentSection = sidebarStructure[currentSectionIndex];

  if (isMergedSection && currentSection) {
    if (currentSectionIndex > 0) {
      const prevSection = sidebarStructure[currentSectionIndex - 1];
      const prevItem = prevSection.items[prevSection.items.length - 1];
      prevLink = { id: prevItem.id, title: prevSection.title };
    }
    if (currentSectionIndex < sidebarStructure.length - 1) {
      const nextSection = sidebarStructure[currentSectionIndex + 1];
      const nextItem = nextSection.items[0];
      nextLink = { id: nextItem.id, title: nextSection.title };
    }
  } else {
    const { prev, next } = getNextAndPrevPages(currentId);
    prevLink = prev;
    nextLink = next;
  }

  if (!prevLink && !nextLink) return null;

  return (
    <div className="flex items-center justify-between gap-4 mt-14 pt-6 border-t border-slate-100 dark:border-slate-800/60">
      {prevLink ? (
        <Link
          to={`/docs/${prevLink.id}`}
          className="group flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#1F5AAE] dark:hover:text-[#4F8EF7] transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="truncate max-w-[200px]">{prevLink.title}</span>
        </Link>
      ) : (
        <div />
      )}

      {nextLink ? (
        <Link
          to={`/docs/${nextLink.id}`}
          className="group flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#1F5AAE] dark:hover:text-[#4F8EF7] transition-colors ml-auto"
        >
          <span className="truncate max-w-[200px]">{nextLink.title}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  );
};
