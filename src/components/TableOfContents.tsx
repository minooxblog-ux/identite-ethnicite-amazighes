import React, { useMemo, useState } from 'react';
import { List, X, ChevronRight } from 'lucide-react';
import { tableOfContents } from '../articleData';
import { useActiveSection } from '../hooks/useIntersectionObserver';


export const TableOfContents: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(() => tableOfContents.map(t => t.id), []);
  const activeId = useActiveSection(sectionIds);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const TocContent = () => (
      <div className="p-6 lg:p-0 overflow-y-auto h-full lg:h-auto bg-surface dark:bg-ink-950 border border-default rounded-xl">
      <h2 className="text-sm font-bold uppercase tracking-wider text-earth-600 dark:text-earth-400 mb-4 flex items-center gap-2">
        <List size={16} />
        Sommaire
      </h2>
      <ul className="space-y-1">
        {tableOfContents.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`w-full text-left text-sm py-1.5 px-3 rounded-md transition-all duration-300 flex items-center gap-1.5 ${
                item.level === 1 ? 'pl-7' : ''
              } ${
                activeId === item.id
                  ? 'bg-amber-200/30 dark:bg-amber-400/25 text-ink-900 dark:text-ink-100 font-semibold'
                  : 'text-ink-600 dark:text-ink-300 hover:text-amber-200 dark:hover:text-amber-100 hover:bg-gray-100 dark:hover:bg-ink-800'
              }`}            >
              {activeId === item.id && (
                <ChevronRight size={12} className="text-amazigh-600 dark:text-amazigh-400 shrink-0" />
              )}
              <span className="leading-snug">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="no-print fixed bottom-6 right-6 z-50 lg:hidden bg-amazigh-600 text-white p-3.5 rounded-full shadow-lg hover:bg-amazigh-700 transition-all duration-300"
        aria-label="Table des matières"
      >
        {isOpen ? <X size={22} /> : <List size={22} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`no-print fixed z-50 top-0 right-0 h-full w-80 bg-white/95 dark:bg-ink-900/95 shadow-2xl transform transition-transform duration-500 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Table des matières"
      >
        <TocContent />
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block lg:w-72 xl:w-80 shrink-0 bg-white/0 dark:bg-ink-950/0">
        <div className="sticky top-20">
          <nav aria-label="Table des matières">
            <TocContent />
          </nav>
        </div>
      </aside>
    </>
  );
};
