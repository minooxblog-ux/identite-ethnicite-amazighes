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

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="no-print fixed bottom-6 right-6 z-50 lg:hidden bg-amazigh-600 text-white p-3.5 rounded-full shadow-lg hover:bg-amazigh-700 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Table des matières"
      >
        {isOpen ? <X size={22} /> : <List size={22} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`no-print fixed z-40 top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-500 ease-out lg:sticky lg:top-20 lg:h-auto lg:w-full lg:bg-transparent lg:shadow-none lg:backdrop-blur-none lg:transform-none lg:block ${
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
        aria-label="Table des matières"
      >
        <div className="p-6 lg:p-0 overflow-y-auto h-full lg:h-auto">
          <h2 className="text-sm font-bold uppercase tracking-wider text-earth-600 mb-4 flex items-center gap-2">
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
                      ? 'bg-amazigh-100 text-amazigh-800 font-medium'
                      : 'text-ink-600 hover:text-amazigh-700 hover:bg-amazigh-50'
                  }`}
                >
                  {activeId === item.id && (
                    <ChevronRight size={12} className="text-amazigh-600 shrink-0" />
                  )}
                  <span className="leading-snug">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
