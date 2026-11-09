import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  badge?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultExpanded?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultExpanded = [],
  className = ''
}) => {
  const [expanded, setExpanded] = useState<string[]>(defaultExpanded);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setExpanded(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setExpanded(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-[#E5E1DA] border-y border-[#E5E1DA] font-sans ${className}`}>
      {items.map((item) => {
        const isOpen = expanded.includes(item.id);
        return (
          <div key={item.id} className="py-1">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full py-4 flex items-center justify-between text-left hover:text-black transition-colors focus:outline-hidden"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="font-serif text-base font-light text-[#1A1A1A]">
                  {item.title}
                </span>
                {item.badge && (
                  <span className="text-[9px] uppercase tracking-widest bg-[#F2F0ED] border border-[#E5E1DA] px-2 py-0.5 text-gray-600">
                    {item.badge}
                  </span>
                )}
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#1A1A1A]' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="pb-5 pt-1 text-xs text-gray-600 leading-relaxed font-sans animate-in fade-in duration-200">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export interface SkeletonProps {
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  className = ''
}) => {
  const variantStyles = {
    text: 'h-3 w-full rounded-none',
    rectangular: 'w-full h-24 rounded-none',
    circular: 'rounded-full w-10 h-10'
  };

  return (
    <div
      className={`bg-[#E5E1DA]/60 animate-pulse ${variantStyles[variant]} ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
      }}
    />
  );
};
