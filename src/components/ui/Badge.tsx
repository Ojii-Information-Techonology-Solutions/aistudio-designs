import React from 'react';
import { X } from 'lucide-react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'charcoal' | 'gold' | 'olive' | 'wine' | 'neutral' | 'outline' | 'champagne';
  size?: 'sm' | 'md';
  onRemove?: () => void;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  onRemove,
  className = ''
}) => {
  const variantStyles = {
    charcoal: 'bg-[#1A1A1A] text-[#FDFCFB] border border-[#1A1A1A]',
    gold: 'bg-[#C5A059] text-white border border-[#C5A059]',
    olive: 'bg-[#165834] text-white border border-[#165834]',
    wine: 'bg-[#801524] text-white border border-[#801524]',
    neutral: 'bg-[#F2F0ED] text-[#1A1A1A] border border-[#E5E1DA]',
    outline: 'bg-transparent text-[#1A1A1A] border border-[#1A1A1A]',
    champagne: 'bg-[#EADBCE] text-[#1A1A1A] border border-[#D5C6B8]'
  };

  const sizeStyles = {
    sm: 'text-[9px] px-2 py-0.5 tracking-[0.2em]',
    md: 'text-[10px] px-3 py-1 tracking-[0.25em]'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-sans uppercase font-medium select-none ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${className}`}
    >
      <span>{children}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="hover:opacity-70 transition-opacity ml-0.5"
          aria-label="Remove badge"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
};
