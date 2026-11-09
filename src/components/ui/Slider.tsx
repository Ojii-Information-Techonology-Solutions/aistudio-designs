import React from 'react';

export interface SliderProps {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  unit?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  unit = '',
  disabled = false,
  className = '',
  id
}) => {
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  return (
    <div className={`w-full space-y-2 font-sans ${className}`}>
      <div className="flex justify-between items-center text-xs">
        {label && (
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-gray-600">
            {label}
          </span>
        )}
        <span className="font-mono text-xs font-medium text-[#1A1A1A]">
          {value} {unit}
        </span>
      </div>

      <div className="relative flex items-center">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 bg-[#E5E1DA] appearance-none cursor-pointer accent-[#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: `linear-gradient(to right, #1A1A1A ${percentage}%, #E5E1DA ${percentage}%)`
          }}
        />
      </div>

      <div className="flex justify-between text-[10px] text-gray-400 font-mono">
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
};

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  className = '',
  id
}) => {
  return (
    <div className={`w-full space-y-1 font-sans ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-[11px] uppercase tracking-[0.2em] font-medium text-gray-600 block"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="w-full py-3 pl-3.5 pr-10 text-xs bg-[#FDFCFB] border border-[#E5E1DA] focus:border-[#1A1A1A] text-[#1A1A1A] appearance-none transition-colors focus:outline-hidden disabled:opacity-50"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-[#1A1A1A] bg-white py-1">
              {opt.label}
            </option>
          ))}
        </select>

        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};
