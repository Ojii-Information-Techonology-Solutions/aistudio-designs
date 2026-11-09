import React, { forwardRef } from 'react';
import { X, Search } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClear?: () => void;
  variant?: 'outline' | 'filled' | 'underlined';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  onClear,
  variant = 'outline',
  disabled,
  className = '',
  id,
  value,
  ...props
}, ref) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const variantStyles = {
    outline: 'bg-[#FDFCFB] border border-[#E5E1DA] focus:border-[#1A1A1A] text-[#1A1A1A]',
    filled: 'bg-[#F2F0ED] border border-transparent focus:border-[#1A1A1A] text-[#1A1A1A]',
    underlined: 'bg-transparent border-b border-[#E5E1DA] focus:border-[#1A1A1A] text-[#1A1A1A] px-0'
  };

  return (
    <div className="w-full space-y-1 font-sans">
      {label && (
        <label
          htmlFor={inputId}
          className="text-[11px] uppercase tracking-[0.2em] font-medium text-gray-600 block"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3.5 pointer-events-none text-gray-400">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          value={value}
          className={`w-full py-3 text-xs placeholder-gray-400 transition-colors focus:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed ${
            leftIcon ? 'pl-10' : 'pl-3.5'
          } ${
            rightIcon || onClear ? 'pr-10' : 'pr-3.5'
          } ${variantStyles[variant]} ${
            error ? 'border-red-600 focus:border-red-600' : ''
          } ${className}`}
          {...props}
        />

        {onClear && value && !disabled && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 p-1 text-gray-400 hover:text-[#1A1A1A] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}

        {rightIcon && !onClear && (
          <div className="absolute right-3.5 pointer-events-none text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>

      {error ? (
        <p className="text-[10px] text-red-700 tracking-wide">{error}</p>
      ) : helperText ? (
        <p className="text-[10px] text-gray-400 tracking-wide">{helperText}</p>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  helperText,
  error,
  id,
  className = '',
  disabled,
  ...props
}, ref) => {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1 font-sans">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-[11px] uppercase tracking-[0.2em] font-medium text-gray-600 block"
        >
          {label}
        </label>
      )}

      <textarea
        ref={ref}
        id={textareaId}
        disabled={disabled}
        className={`w-full p-3.5 text-xs bg-[#FDFCFB] border border-[#E5E1DA] focus:border-[#1A1A1A] text-[#1A1A1A] placeholder-gray-400 transition-colors focus:outline-hidden disabled:opacity-50 min-h-[90px] ${
          error ? 'border-red-600 focus:border-red-600' : ''
        } ${className}`}
        {...props}
      />

      {error ? (
        <p className="text-[10px] text-red-700 tracking-wide">{error}</p>
      ) : helperText ? (
        <p className="text-[10px] text-gray-400 tracking-wide">{helperText}</p>
      ) : null}
    </div>
  );
});

Textarea.displayName = 'Textarea';
