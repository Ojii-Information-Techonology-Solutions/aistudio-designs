import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  id?: string;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  size = 'md',
  showCloseButton = true,
  id = 'modal-dialog',
  className = ''
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-xl',
    xl: 'max-w-3xl',
    full: 'max-w-5xl'
  };

  return (
    <div
      id={`${id}-backdrop`}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id={id}
        className={`relative w-full ${sizeClasses[size]} bg-[#FDFCFB] border border-[#E5E1DA] shadow-2xl p-6 sm:p-8 text-[#1A1A1A] my-auto animate-in zoom-in-95 duration-200 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            id={`${id}-close-btn`}
            onClick={onClose}
            className="absolute top-5 right-5 p-2 border border-[#E5E1DA] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-5 pr-8">
            {subtitle && (
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-sans font-medium mb-1">
                {subtitle}
              </div>
            )}
            {title && (
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A] tracking-tight">
                {title}
              </h3>
            )}
          </div>
        )}

        {/* Content Body */}
        <div className="text-xs text-gray-600 font-sans leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="mt-6 pt-5 border-t border-[#E5E1DA] flex items-center justify-end gap-3 font-sans">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
