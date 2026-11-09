import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'luxury-gold' | 'danger' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.2em] transition-all duration-200 focus:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    xs: 'text-[9px] px-3 py-1.5 gap-1.5',
    sm: 'text-[10px] px-4 py-2.5 gap-2',
    md: 'text-[11px] px-6 py-3.5 gap-2.5',
    lg: 'text-xs px-8 py-4 gap-3'
  };

  const variantStyles = {
    primary: 'bg-[#1A1A1A] text-[#FDFCFB] hover:bg-black border border-[#1A1A1A] hover:shadow-sm',
    secondary: 'bg-[#F2F0ED] text-[#1A1A1A] hover:bg-[#E5E1DA] border border-[#E5E1DA]',
    outline: 'bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FDFCFB]',
    ghost: 'bg-transparent text-[#1A1A1A] hover:bg-[#F2F0ED] border border-transparent',
    'luxury-gold': 'bg-[#C5A059] text-white hover:bg-[#A8843E] border border-[#C5A059]',
    danger: 'bg-[#801524] text-white hover:bg-[#600F1B] border border-[#801524]',
    link: 'bg-transparent text-[#1A1A1A] hover:underline underline-offset-4 border-0 p-0 tracking-widest normal-case font-normal'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
