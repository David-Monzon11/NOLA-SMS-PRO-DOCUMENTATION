import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, CornerDownLeft, ArrowUp, ArrowDown, X } from 'lucide-react';
import { docsData, type DocPage } from '../data/docsData';

interface DocSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocSearch: React.FC<DocSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DocPage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Keyboard shortcut Ctrl+K / Cmd+K listener
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle fuzzy matching
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = docsData.filter((page) => {
      const matchTitle = page.title.toLowerCase().includes(query.toLowerCase());
      const matchDesc = page.description.toLowerCase().includes(query.toLowerCase());
      const matchPurpose = page.purpose.toLowerCase().includes(query.toLowerCase());
      const matchSection = page.section.toLowerCase().includes(query.toLowerCase());
      const matchSub = page.subsection?.toLowerCase().includes(query.toLowerCase()) || false;
      
      return matchTitle || matchDesc || matchPurpose || matchSection || matchSub;
    });

    setResults(filtered.slice(0, 8)); // Limit to 8 items
    setSelectedIndex(0);
  }, [query]);

  // Navigate on selection
  const handleSelect = (pageId: string) => {
    navigate(`/docs/${pageId}`);
    onClose();
  };

  // Keyboard navigation inside search results
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
        e.preventDefault();
      } else if (e.key === 'Enter') {
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex].id);
        }
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Close when clicking outside modal box
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm transition-all duration-200"
      onClick={handleBackdropClick}
    >
      <div 
        ref={containerRef}
        className="w-full max-w-xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden transition-all duration-200"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 border-b border-slate-200 dark:border-slate-800">
          <Search className="h-5 w-5 text-slate-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search documentation (e.g. Sender ID, credits...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-4 text-base bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-0"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-650 hover:bg-slate-50 dark:hover:bg-slate-800/60"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-slate-400 dark:text-slate-500">
              <Search className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">Type to start searching across the knowledge base...</p>
              <div className="mt-3 flex justify-center gap-3 text-xs text-slate-400">
                <span><kbd className="px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 font-sans shadow-sm">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 font-sans shadow-sm">K</kbd> to launch</span>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-400 dark:text-slate-500">
              <HelpCircleIcon className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No documentation matches your query &ldquo;<span className="font-semibold text-slate-600 dark:text-slate-300">{query}</span>&rdquo;</p>
            </div>
          ) : (
            <div className="space-y-0.5">
              {results.map((page, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={page.id}
                    onClick={() => handleSelect(page.id)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-150 ${
                      isSelected 
                        ? 'bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 border-l-4 border-brand-primary dark:border-brand-secondary pl-3' 
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div className="flex-1 min-w-0 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-primary dark:text-brand-secondary">
                          {page.section}
                        </span>
                        {page.subsection && (
                          <>
                            <span className="text-slate-300 dark:text-slate-700 text-xs">/</span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                              {page.subsection}
                            </span>
                          </>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                        {page.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-450 truncate">
                        {page.description}
                      </p>
                    </div>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold uppercase">
                        Select <CornerDownLeft className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Search Modal Footer / Legend */}
        {results.length > 0 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-slate-150 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-[10px] text-slate-400 font-semibold uppercase">
            <div className="flex gap-4">
              <span className="flex items-center gap-1">
                <ArrowUp className="h-3 w-3" /> <ArrowDown className="h-3 w-3" /> Navigate
              </span>
              <span className="flex items-center gap-1">
                <CornerDownLeft className="h-3 w-3" /> Select
              </span>
            </div>
            <span>Esc to close</span>
          </div>
        )}
      </div>
    </div>
  );
};

const HelpCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
