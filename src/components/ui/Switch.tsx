import React from 'react';

export interface SwitchProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  sublabel?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  id,
  checked,
  onChange,
  label,
  sublabel,
  disabled = false,
  size = 'md',
  className = ''
}) => {
  const switchSizes = {
    sm: { track: 'w-8 h-4.5 p-0.5', thumb: 'w-3.5 h-3.5', translate: 'translate-x-3.5' },
    md: { track: 'w-11 h-6 p-0.5', thumb: 'w-5 h-5', translate: 'translate-x-5' },
    lg: { track: 'w-14 h-7.5 p-1', thumb: 'w-5.5 h-5.5', translate: 'translate-x-6.5' }
  };

  const currentSize = switchSizes[size];

  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div
      className={`inline-flex items-start gap-3 select-none ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      onClick={handleToggle}
    >
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        className={`relative inline-flex items-center transition-colors duration-200 ease-in-out focus:outline-hidden ${
          currentSize.track
        } ${
          checked ? 'bg-[#1A1A1A]' : 'bg-[#E5E1DA]'
        } border border-[#D5CFC7]`}
      >
        <span
          className={`pointer-events-none inline-block transform bg-white shadow-xs transition-transform duration-200 ease-in-out ${
            currentSize.thumb
          } ${checked ? currentSize.translate : 'translate-x-0'}`}
        />
      </button>

      {(label || sublabel) && (
        <div className="flex flex-col">
          {label && (
            <span className="text-xs font-serif font-normal text-[#1A1A1A] leading-tight">
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
    </div>
  );
};
