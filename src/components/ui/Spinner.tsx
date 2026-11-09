import React from 'react';

export interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circular' | 'dual-ring' | 'pulse-dots' | 'bars' | 'line';
  color?: 'dark' | 'gold' | 'light' | 'white';
  label?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'circular',
  color = 'dark',
  label,
  className = ''
}) => {
  const sizeMap = {
    xs: { dim: 'w-3.5 h-3.5', border: 'border-2', dot: 'w-1 h-1' },
    sm: { dim: 'w-5 h-5', border: 'border-2', dot: 'w-1.5 h-1.5' },
    md: { dim: 'w-8 h-8', border: 'border-2', dot: 'w-2 h-2' },
    lg: { dim: 'w-12 h-12', border: 'border-[3px]', dot: 'w-2.5 h-2.5' },
    xl: { dim: 'w-16 h-16', border: 'border-4', dot: 'w-3 h-3' }
  };

  const colorStyles = {
    dark: {
      border: 'border-[#1A1A1A]/20 border-t-[#1A1A1A]',
      ringInner: 'border-[#C5A059]/30 border-b-[#C5A059]',
      dot: 'bg-[#1A1A1A]',
      bar: 'bg-[#1A1A1A]',
      text: 'text-[#1A1A1A]'
    },
    gold: {
      border: 'border-[#C5A059]/20 border-t-[#C5A059]',
      ringInner: 'border-[#1A1A1A]/20 border-b-[#1A1A1A]',
      dot: 'bg-[#C5A059]',
      bar: 'bg-[#C5A059]',
      text: 'text-[#C5A059]'
    },
    light: {
      border: 'border-gray-300 border-t-gray-700',
      ringInner: 'border-gray-200 border-b-gray-600',
      dot: 'bg-gray-700',
      bar: 'bg-gray-700',
      text: 'text-gray-700'
    },
    white: {
      border: 'border-white/30 border-t-white',
      ringInner: 'border-white/20 border-b-white',
      dot: 'bg-white',
      bar: 'bg-white',
      text: 'text-white'
    }
  };

  const current = sizeMap[size];
  const colors = colorStyles[color];

  return (
    <div className={`inline-flex flex-col items-center justify-center gap-2.5 ${className}`}>
      {variant === 'circular' && (
        <div
          className={`${current.dim} ${current.border} ${colors.border} rounded-full animate-spin`}
          role="status"
          aria-label="Loading"
        />
      )}

      {variant === 'dual-ring' && (
        <div className={`relative ${current.dim}`} role="status" aria-label="Loading">
          <div
            className={`absolute inset-0 ${current.border} ${colors.border} rounded-full animate-spin`}
          />
          <div
            className={`absolute inset-1 border ${colors.ringInner} rounded-full animate-spin [animation-direction:reverse]`}
          />
        </div>
      )}

      {variant === 'pulse-dots' && (
        <div className="flex items-center gap-1.5" role="status" aria-label="Loading">
          <div className={`${current.dot} ${colors.dot} rounded-full animate-bounce [animation-delay:-0.3s]`} />
          <div className={`${current.dot} ${colors.dot} rounded-full animate-bounce [animation-delay:-0.15s]`} />
          <div className={`${current.dot} ${colors.dot} rounded-full animate-bounce`} />
        </div>
      )}

      {variant === 'bars' && (
        <div className="flex items-end gap-1 h-5" role="status" aria-label="Loading">
          <div className={`w-1 ${colors.bar} animate-pulse h-3 [animation-delay:-0.4s]`} />
          <div className={`w-1 ${colors.bar} animate-pulse h-5 [animation-delay:-0.2s]`} />
          <div className={`w-1 ${colors.bar} animate-pulse h-4 [animation-delay:-0.1s]`} />
          <div className={`w-1 ${colors.bar} animate-pulse h-2`} />
        </div>
      )}

      {variant === 'line' && (
        <div className="w-24 h-1 bg-[#E5E1DA] overflow-hidden relative" role="status" aria-label="Loading">
          <div className={`w-1/2 h-full ${colors.bar} absolute animate-pulse left-1/4`} />
        </div>
      )}

      {label && (
        <span className={`text-[10px] uppercase tracking-[0.2em] font-sans font-medium ${colors.text}`}>
          {label}
        </span>
      )}
    </div>
  );
};
