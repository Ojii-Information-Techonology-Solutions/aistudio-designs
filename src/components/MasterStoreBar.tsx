import React from 'react';
import {
  Sparkles,
  Wrench,
  Building2,
  Utensils,
  Leaf,
  Package,
  LayoutGrid
} from 'lucide-react';

interface MasterStoreBarProps {
  activeView: string;
  onSelectView: (view: string) => void;
}

export const MasterStoreBar: React.FC<MasterStoreBarProps> = ({
  activeView,
  onSelectView
}) => {
  const STORES = [
    { id: 'charlene', label: 'Charlène (Couture)', icon: Sparkles, activeClass: 'bg-[#C5A059] text-white font-serif' },
    { id: 'tomas', label: 'Tomas (Machinery)', icon: Wrench, activeClass: 'bg-[#F59E0B] text-black font-mono font-bold' },
    { id: 'joseph', label: 'Joseph (Rentals)', icon: Building2, activeClass: 'bg-[#D97706] text-white font-sans font-bold' },
    { id: 'clarissa', label: 'Clarissa (Dining)', icon: Utensils, activeClass: 'bg-[#8B1E3F] text-white font-serif font-bold' },
    { id: 'plantito', label: 'Plantito (Flora)', icon: Leaf, activeClass: 'bg-[#1C2E24] text-[#E8F5E9] font-sans font-bold' },
    { id: 'sandra', label: 'Sandra (Lifestyle)', icon: Package, activeClass: 'bg-[#5A67D8] text-white font-sans font-bold' }
  ];

  return (
    <div className="bg-[#111318] text-white border-b border-[#252830] text-xs font-sans py-2 px-3 sm:px-4 shadow-md sticky top-0 z-50 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 min-w-max">
        {/* Left: Quick Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => onSelectView('hub')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all text-[11px] font-medium cursor-pointer ${
              activeView === 'hub'
                ? 'bg-white text-black font-bold shadow-xs'
                : 'text-gray-300 hover:text-white hover:bg-[#1E222B]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Design Hub</span>
          </button>

          <span className="text-gray-600">|</span>

          {STORES.map((s) => {
            const Icon = s.icon;
            const isActive = activeView === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectView(s.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all text-[11px] cursor-pointer ${
                  isActive
                    ? `${s.activeClass} shadow-xs`
                    : 'text-gray-300 hover:text-white hover:bg-[#1E222B]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Active context indicator */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] text-gray-400 font-mono">
          <span>Active Architecture:</span>
          <span className="text-[#F59E0B] font-bold">
            {activeView === 'hub' ? 'Multi-Industry Selector' : `/src/stores/${activeView}/`}
          </span>
        </div>
      </div>
    </div>
  );
};

