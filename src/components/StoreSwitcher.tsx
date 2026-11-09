import React, { useState } from 'react';
import { STORES } from '../data/storesData';
import { ShopId, StoreDefinition } from '../types/storeTypes';
import {
  Sparkles,
  Utensils,
  Leaf,
  Truck,
  Wrench,
  Home,
  Palette,
  Package,
  Watch,
  Coffee,
  Headphones,
  ChevronDown,
  LayoutGrid,
  Check,
  ArrowRight
} from 'lucide-react';

interface StoreSwitcherProps {
  stores?: StoreDefinition[];
  activeStoreId?: string;
  currentStoreId?: ShopId | string;
  onSelectStore: (storeId: ShopId | any) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Utensils,
  Leaf,
  Truck,
  Wrench,
  Home,
  Palette,
  Package,
  Watch,
  Coffee,
  Headphones
};

export const StoreSwitcher: React.FC<StoreSwitcherProps> = ({
  stores = STORES,
  activeStoreId,
  currentStoreId,
  onSelectStore
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const effectiveId = activeStoreId || currentStoreId || 'charlene';
  const currentStore = stores.find((s) => s.id === effectiveId) || stores[0];

  const getIcon = (iconName: string) => {
    const IconComponent = ICON_MAP[iconName] || Sparkles;
    return <IconComponent className="w-4 h-4" />;
  };

  return (
    <div id="store-switcher-root" className="bg-[#121212] text-white border-b border-[#2A2A2A] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 text-xs">
          {/* Left: Store indicator badge */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="hidden md:inline-block font-mono text-[10px] text-gray-400 uppercase tracking-widest bg-[#222] px-2 py-0.5 rounded border border-[#333]">
              11 Concept Webshops:
            </span>

            {/* Quick Switch Pills for top 5 or responsive scroll */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {stores.map((s) => {
                const isActive = s.id === effectiveId;
                return (
                  <button
                    key={s.id}
                    id={`store-pill-${s.id}`}
                    onClick={() => onSelectStore(s.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-white text-black font-semibold shadow-sm scale-105'
                        : 'bg-[#1E1E1E] text-gray-300 hover:text-white hover:bg-[#2A2A2A]'
                    }`}
                  >
                    <span style={{ color: isActive ? s.theme.primaryColor : undefined }}>
                      {getIcon(s.iconName)}
                    </span>
                    <span>{s.shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Master Switcher Modal/Dropdown Trigger */}
          <div className="flex items-center gap-3 shrink-0 ml-2">
            <button
              id="all-stores-dropdown-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 px-3 py-1 bg-[#262626] hover:bg-[#333] text-white rounded font-sans text-[11px] font-medium border border-[#3A3A3A] transition-all"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">Explore All 11 Stores</span>
              <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded 11-Store Showcase Overlay / Grid */}
      {isOpen && (
        <div
          id="store-switcher-dropdown"
          className="absolute left-0 right-0 top-full bg-[#161616]/98 backdrop-blur-xl border-b border-[#333] shadow-2xl z-50 p-4 sm:p-6 transition-all"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#2A2A2A]">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wide uppercase font-mono">
                  Select a Custom Webshop Concept
                </h3>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Each boutique features specialized business logic (Stays, Equipment Rentals, Industrial Specs, Ceramics & Fine Art).
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-xs px-2.5 py-1 bg-[#222] rounded border border-[#333]"
              >
                Close ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[70vh] overflow-y-auto pr-1">
              {stores.map((store) => {
                const isSelected = store.id === effectiveId;
                return (
                  <div
                    key={store.id}
                    id={`store-card-select-${store.id}`}
                    onClick={() => {
                      onSelectStore(store.id);
                      setIsOpen(false);
                    }}
                    className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all flex flex-col justify-between relative group ${
                      isSelected
                        ? 'bg-[#242424] border-white ring-1 ring-white/50'
                        : 'bg-[#1A1A1A] border-[#2E2E2E] hover:border-gray-500 hover:bg-[#222]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center text-white"
                          style={{ backgroundColor: store.theme.primaryColor }}
                        >
                          {getIcon(store.iconName)}
                        </div>
                        {isSelected ? (
                          <span className="flex items-center gap-1 text-[10px] bg-white text-black px-2 py-0.5 rounded-full font-bold uppercase">
                            <Check className="w-2.5 h-2.5" /> Active
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono uppercase text-gray-500 group-hover:text-gray-300">
                            {store.businessModel}
                          </span>
                        )}
                      </div>

                      <h4 className="font-bold text-white text-sm tracking-wide">
                        {store.name}
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                        {store.tagline}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#2A2A2A] flex items-center justify-between text-[10px] text-gray-400 font-mono">
                      <span>{store.products.length} Products</span>
                      <span className="flex items-center gap-1 text-white group-hover:translate-x-0.5 transition-transform font-sans">
                        Launch <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
