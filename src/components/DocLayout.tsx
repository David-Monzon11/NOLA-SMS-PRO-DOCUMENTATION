import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { DocSearch } from './DocSearch';
import { type DocPage } from '../data/docsData';

interface DocLayoutProps {
  children: React.ReactNode;
  page: DocPage;
}

export const DocLayout: React.FC<DocLayoutProps> = ({ children, page: _page }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Global Ctrl+K and custom event listeners
  useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('open-nola-search', handleOpenSearch);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('open-nola-search', handleOpenSearch);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0C0F1A] text-slate-800 dark:text-slate-100 transition-colors duration-200">

      {/* Left Sidebar */}
      <Sidebar
        onSearchClick={() => setIsSearchOpen(true)}
        isOpenOnMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Column */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">

        {/* Sticky top navbar */}
        <Navbar
          onSearchClick={() => setIsSearchOpen(true)}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
        />

        {/* Page content — wider, supporting two-column split layouts */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-14">
          {children}
        </main>
      </div>

      {/* Global Search Modal */}
      <DocSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};
