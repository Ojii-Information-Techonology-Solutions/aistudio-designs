import React from 'react';
import { X, CheckCircle2, AlertTriangle, Info, AlertOctagon } from 'lucide-react';

export type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface ToastProps {
  id: string;
  type?: ToastType;
  title: string;
  message?: string;
  onClose: (id: string) => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const Toast: React.FC<ToastProps> = ({
  id,
  type = 'info',
  title,
  message,
  onClose,
  action
}) => {
  const typeConfig = {
    success: {
      icon: <CheckCircle2 className="w-4 h-4 text-[#165834]" />,
      border: 'border-[#165834]/40',
      bg: 'bg-[#FDFCFB]'
    },
    info: {
      icon: <Info className="w-4 h-4 text-[#1A1A1A]" />,
      border: 'border-[#E5E1DA]',
      bg: 'bg-[#FDFCFB]'
    },
    warning: {
      icon: <AlertTriangle className="w-4 h-4 text-[#C5A059]" />,
      border: 'border-[#C5A059]/40',
      bg: 'bg-[#FDFCFB]'
    },
    error: {
      icon: <AlertOctagon className="w-4 h-4 text-[#801524]" />,
      border: 'border-[#801524]/40',
      bg: 'bg-[#FDFCFB]'
    }
  };

  const config = typeConfig[type];

  return (
    <div
      className={`w-full max-w-sm p-4 ${config.bg} border ${config.border} shadow-xl flex items-start gap-3 animate-in slide-in-from-bottom-2 duration-300 font-sans text-[#1A1A1A]`}
    >
      <div className="shrink-0 mt-0.5">{config.icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-serif text-sm font-light text-[#1A1A1A]">{title}</p>
        {message && <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">{message}</p>}
        {action && (
          <button
            type="button"
            onClick={action.onClick}
            className="mt-2 text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A] hover:underline underline-offset-4"
          >
            {action.label}
          </button>
        )}
      </div>
      <button
        type="button"
        onClick={() => onClose(id)}
        className="text-gray-400 hover:text-[#1A1A1A] p-1 transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  variant?: 'underline' | 'pill' | 'boxed';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = 'underline',
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-1 font-sans ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        if (variant === 'underline') {
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`py-3 px-4 text-[11px] uppercase tracking-[0.2em] font-medium transition-all relative flex items-center gap-2 ${
                isActive ? 'text-[#1A1A1A]' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span className="text-[9px] px-1.5 py-0.2 bg-[#F2F0ED] text-[#1A1A1A] font-sans">
                  {tab.badge}
                </span>
              )}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A1A1A]" />
              )}
            </button>
          );
        }

        if (variant === 'pill') {
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`py-2 px-4 text-[10px] uppercase tracking-[0.2em] font-medium transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-[#F2F0ED] text-[#1A1A1A] hover:bg-[#E5E1DA]'
              }`}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span
                  className={`text-[9px] px-1.5 py-0.2 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/10 text-[#1A1A1A]'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        }

        // Boxed variant
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`py-2.5 px-4 text-[11px] uppercase tracking-[0.2em] font-medium transition-all border ${
              isActive
                ? 'bg-[#FDFCFB] border-[#1A1A1A] text-[#1A1A1A]'
                : 'bg-transparent border-[#E5E1DA] text-gray-400 hover:border-gray-400'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
