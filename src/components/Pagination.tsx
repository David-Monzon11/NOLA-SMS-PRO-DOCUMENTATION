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
    <nav className="mt-8 grid gap-3 border-t border-[#D7E7FA] pt-5 dark:border-[#183354] sm:grid-cols-2" aria-label="Previous and next documentation pages">
      {prevLink ? (
        <Link
          to={`/docs/${prevLink.id}`}
          className="group flex min-h-[88px] items-center gap-3 rounded-lg border border-[#D7E7FA] bg-white p-4 transition-all hover:border-[#9BC4F5] hover:bg-[#F4F9FF] dark:border-[#183354] dark:bg-[#0B1627] dark:hover:border-[#315C8F]"
        >
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8F3FF] text-[#6681A4] transition-colors group-hover:text-[#1F5AAE] dark:bg-[#102B4F] dark:group-hover:text-[#72A8FF]">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#7B93B1]">Previous</span>
            <span className="mt-1 block truncate text-sm font-semibold text-[#0B2E63] group-hover:text-[#1F5AAE] dark:text-slate-200 dark:group-hover:text-[#72A8FF]">
              {prevLink.title}
            </span>
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {nextLink ? (
        <Link
          to={`/docs/${nextLink.id}`}
          className="group flex min-h-[88px] items-center justify-between gap-3 rounded-lg border border-[#D7E7FA] bg-white p-4 transition-all hover:border-[#9BC4F5] hover:bg-[#F4F9FF] dark:border-[#183354] dark:bg-[#0B1627] dark:hover:border-[#315C8F]"
        >
          <span className="min-w-0">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#7B93B1]">Next</span>
            <span className="mt-1 block truncate text-sm font-semibold text-[#0B2E63] group-hover:text-[#1F5AAE] dark:text-slate-200 dark:group-hover:text-[#72A8FF]">
              {nextLink.title}
            </span>
          </span>
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8F3FF] text-[#6681A4] transition-colors group-hover:text-[#1F5AAE] dark:bg-[#102B4F] dark:group-hover:text-[#72A8FF]">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      ) : null}
    </nav>
  );
};
