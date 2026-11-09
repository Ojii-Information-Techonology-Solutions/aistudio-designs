import React from 'react';
import { Check } from 'lucide-react';

export interface CheckboxProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  sublabel?: string;
  disabled?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  label,
  sublabel,
  disabled = false,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4.5 h-4.5'
  };

  return (
    <label
      className={`inline-flex items-start gap-2.5 select-none ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
    >
      <div className="relative flex items-center mt-0.5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={`${sizeClasses[size]} border transition-colors flex items-center justify-center ${
            checked
              ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#FDFCFB]'
              : 'bg-[#FDFCFB] border-[#D5CFC7] hover:border-[#1A1A1A]'
          }`}
        >
          {checked && <Check className="w-3 h-3 stroke-[2.5]" />}
        </div>
      </div>

      {(label || sublabel) && (
        <div className="flex flex-col">
          {label && (
            <span className="text-xs font-sans text-[#1A1A1A] leading-tight">
              {label}
            </span>
          )}
          {sublabel && (
            <span className="text-[11px] text-gray-500 font-sans mt-0.5 leading-tight">
              {sublabel}
            </span>
          )}
        </div>
      )}
    </label>
  );
};

export interface RadioOption {
  value: string;
  label: React.ReactNode;
  sublabel?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className={`space-y-2.5 font-sans ${className}`}>
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <label
            key={opt.value}
            className={`flex items-start gap-3 p-3 border transition-colors cursor-pointer select-none ${
              isSelected
                ? 'border-[#1A1A1A] bg-[#F2F0ED]'
                : 'border-[#E5E1DA] bg-[#FDFCFB] hover:border-gray-400'
            } ${opt.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="relative flex items-center justify-center mt-0.5">
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={isSelected}
                disabled={opt.disabled}
                onChange={() => !opt.disabled && onChange(opt.value)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border transition-colors flex items-center justify-center ${
                  isSelected ? 'border-[#1A1A1A]' : 'border-gray-400'
                }`}
              >
                {isSelected && <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" />}
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-serif text-[#1A1A1A]">{opt.label}</span>
              {opt.sublabel && (
                <span className="text-[11px] text-gray-500 font-sans mt-0.5">{opt.sublabel}</span>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
};
