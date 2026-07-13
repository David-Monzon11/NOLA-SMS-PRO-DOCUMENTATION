import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { RelatedPage } from '../../data/docsData';
import { sidebarStructure } from '../../data/docsData';

interface RelatedPagesProps {
  relatedPages?: RelatedPage[];
  currentId: string;
}

function getNextPageId(currentId: string): { id: string; title: string } | null {
  const allItems = sidebarStructure.flatMap((section) => section.items);
  const currentIndex = allItems.findIndex((item) => item.id === currentId);
  if (currentIndex === -1 || currentIndex >= allItems.length - 1) return null;
  return allItems[currentIndex + 1];
}

export const RelatedPages: React.FC<RelatedPagesProps> = ({ relatedPages, currentId }) => {
  const nextPage = getNextPageId(currentId);

  if ((!relatedPages || relatedPages.length === 0) && !nextPage) return null;

  return (
    <div className="mt-12 space-y-6">
      {relatedPages && relatedPages.length > 0 && (
        <section>
          <p className="doc-eyebrow mb-4">Related</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedPages.map((page) => (
              <Link
                key={page.id}
                to={`/docs/${page.id}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-[#D7E7FA] bg-white px-5 py-4 transition-all hover:border-[#4F8EF7] hover:shadow-md hover:shadow-[#184B8F]/8 dark:border-[#183354] dark:bg-[#0B1627] dark:hover:border-[#72A8FF]"
              >
                <span className="text-[14px] font-bold text-[#0B2E63] group-hover:text-[#1F5AAE] dark:text-white dark:group-hover:text-[#72A8FF]">
                  {page.title}
                </span>
                <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#7B93B1] transition-transform group-hover:translate-x-0.5 group-hover:text-[#1F5AAE] dark:group-hover:text-[#72A8FF]" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {nextPage && (
        <Link
          to={`/docs/${nextPage.id}`}
          className="group flex items-center justify-between gap-4 rounded-2xl border border-[#BCD7F5] bg-gradient-to-r from-[#E8F3FF]/80 to-white px-6 py-5 transition-all hover:border-[#4F8EF7] hover:shadow-lg hover:shadow-[#184B8F]/10 dark:border-[#315C8F] dark:from-[#102B4F]/40 dark:to-[#0B1627] dark:hover:border-[#72A8FF]"
        >
          <div>
            <p className="doc-eyebrow mb-1">Continue reading</p>
            <p className="text-[16px] font-black text-[#0B2E63] dark:text-white">
              {nextPage.title}
            </p>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1F5AAE] text-white transition-transform group-hover:translate-x-0.5 dark:bg-[#72A8FF] dark:text-[#07111F]">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      )}
    </div>
  );
};
