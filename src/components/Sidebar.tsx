import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Settings, ShieldAlert, HelpCircle, LifeBuoy, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { sidebarStructure } from '../data/docsData';
import { useLocation } from 'react-router-dom';

interface SidebarProps {
  onSearchClick: () => void;
  isOpenOnMobile: boolean;
  onCloseMobile: () => void;
}

const SECTION_ICONS: Record<string, React.ReactNode> = {
  'Welcome': <BookOpen className="h-3.5 w-3.5" />,
  'Getting Started': <Layers className="h-3.5 w-3.5" />,
  'Using NOLA SMS Pro': <Settings className="h-3.5 w-3.5" />,
  'Troubleshooting': <ShieldAlert className="h-3.5 w-3.5" />,
  'Frequently Asked Questions': <HelpCircle className="h-3.5 w-3.5" />,
  'Support & Help': <LifeBuoy className="h-3.5 w-3.5" />,
};

export const Sidebar: React.FC<SidebarProps> = ({ onSearchClick, isOpenOnMobile, onCloseMobile }) => {
  const location = useLocation();
  const activeId = location.pathname.split('/docs/')[1] || '';

  const [collapsed, setCollapsed] = React.useState<Record<string, boolean>>({});

  const toggle = (title: string) => {
    setCollapsed(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white dark:bg-[#0C0F1A] border-r border-slate-100 dark:border-slate-800/60">

      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2.5 px-5 h-14 border-b border-slate-100 dark:border-slate-800/60 flex-shrink-0 hover:opacity-80 transition-opacity"
        onClick={onCloseMobile}
      >
        <svg viewBox="0 0 100 100" className="h-7 w-7 flex-shrink-0" fill="none">
          <rect width="100" height="100" rx="22" fill="#1F5AAE"/>
          <path d="M25 38H75M25 50H75M25 62H52" stroke="white" strokeWidth="9" strokeLinecap="round"/>
          <circle cx="70" cy="62" r="9" fill="#4F8EF7"/>
        </svg>
        <div>
          <div className="text-[13px] font-bold text-slate-800 dark:text-white tracking-tight leading-none">
            NOLA SMS <span className="text-[#1F5AAE] dark:text-[#4F8EF7]">Pro</span>
          </div>
          <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium leading-none mt-0.5">
            User Documentation
          </div>
        </div>
      </Link>

      {/* Search */}
      <div className="px-3 py-3 border-b border-slate-100 dark:border-slate-800/60 flex-shrink-0">
        <button
          onClick={onSearchClick}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-[#4F8EF7]/40 hover:text-slate-600 dark:hover:text-slate-300 transition-all"
        >
          <Search className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="flex-1 text-left">Search docs...</span>
          <kbd className="text-[10px] px-1 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-400 font-mono">⌘K</kbd>
        </button>
      </div>

      {/* Nav tree */}
      <nav className="flex-1 overflow-y-auto py-3 px-2" aria-label="Documentation navigation">
        {sidebarStructure.map((section) => {
          const isSingleItem = section.items.length === 1;
          const singleItem = section.items[0];
          const isCollapsed = collapsed[section.title] ?? false;
          const hasActive = isSingleItem 
            ? singleItem.id === activeId 
            : section.items.some(item => item.id === activeId);

          if (isSingleItem) {
            return (
              <div key={section.title} className="mb-1">
                <Link
                  to={`/docs/${singleItem.id}`}
                  onClick={onCloseMobile}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-150
                    ${hasActive
                      ? 'text-[#1F5AAE] dark:text-[#4F8EF7] bg-slate-50 dark:bg-slate-800/40'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50/50 dark:hover:bg-slate-800/20'
                    }`}
                >
                  <span className="flex items-center gap-1.5">
                    {SECTION_ICONS[section.title]}
                    {section.title}
                  </span>
                </Link>
              </div>
            );
          }

          return (
            <div key={section.title} className="mb-1">
              {/* Section header */}
              <button
                onClick={() => toggle(section.title)}
                className={`w-full flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-colors
                  ${hasActive && !isCollapsed
                    ? 'text-[#1F5AAE] dark:text-[#4F8EF7]'
                    : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
              >
                <span className="flex items-center gap-1.5">
                  {SECTION_ICONS[section.title]}
                  {section.title}
                </span>
                {isCollapsed
                  ? <ChevronRight className="h-3 w-3 opacity-50" />
                  : <ChevronDown className="h-3 w-3 opacity-50" />
                }
              </button>

              {/* Items */}
              {!isCollapsed && (
                <div className="mt-0.5 mb-2 ml-3 pl-3 border-l border-slate-100 dark:border-slate-800/60 space-y-0.5">
                  {section.items.map(item => {
                    const isActive = item.id === activeId;
                    return (
                      <Link
                        key={item.id}
                        to={`/docs/${item.id}`}
                        onClick={onCloseMobile}
                        className={`block px-3 py-1.5 rounded-lg text-[13px] transition-all duration-150
                          ${isActive
                            ? 'nav-item-active nav-item-active-pad'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                          }`}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800/60 flex-shrink-0">
        <span className="text-[10px] text-slate-300 dark:text-slate-600 font-medium">
          © 2025 NOLA SMS Pro · v1.0
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex w-[260px] flex-shrink-0 h-screen sticky top-0 z-20">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {isOpenOnMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onCloseMobile} />
          <div className="relative w-[260px] h-full z-50 shadow-2xl">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
};
