import React, { useState } from 'react';
import {
  Gift,
  ShoppingBag,
  Search,
  Menu,
  X,
  Compass,
  Sparkles,
  Smile,
  Heart
} from 'lucide-react';
import { SandraItem } from '../types';

interface SandraNavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenMysteryBox: () => void;
  onOpenDesignKit?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  allItems: SandraItem[];
  onSelectItem: (item: SandraItem) => void;
}

export const SandraNavbar: React.FC<SandraNavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenMysteryBox,
  onOpenDesignKit,
  searchQuery,
  onSearchChange,
  allItems,
  onSelectItem
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchResults = searchQuery.trim()
    ? allItems.filter(
        (i) =>
          i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          i.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          i.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-[37px] z-40 bg-[#FFFDF5] text-[#1E1B2E] border-b-2 border-[#1E1B2E] shadow-sm font-sans">
      {/* Top Banner */}
      <div className="bg-[#8B5CF6] py-1 px-4 text-center text-[11px] text-white flex items-center justify-between font-bold">
        <div className="flex items-center gap-2 mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
          <span>Sandra Assorted Wonders • Small Batch Curations • Free Surprise Sticker with Every Order</span>
        </div>
        {onOpenDesignKit && (
          <button
            onClick={onOpenDesignKit}
            className="hidden md:flex items-center gap-1 text-[#FBBF24] hover:underline text-[10px] uppercase tracking-wider font-mono font-bold"
          >
            <Compass className="w-3 h-3" />
            <span>Design Kit</span>
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#8B5CF6] border-2 border-[#1E1B2E] flex items-center justify-center text-white group-hover:-rotate-6 transition-transform shadow-[2px_2px_0px_0px_#1E1B2E]">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1E1B2E] block">
                SANDRA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8B5CF6] font-mono font-bold block -mt-1">
                Assorted Objects &amp; Daily Joys
              </span>
            </div>
          </button>
        </div>

        {/* Center Search / Mystery Box Button */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search candles, journals, ceramics, desk toys..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-white border-2 border-[#1E1B2E] rounded-full text-xs text-[#1E1B2E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            />
            {searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-[#1E1B2E] rounded-2xl shadow-xl max-h-60 overflow-y-auto p-2 z-50">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectItem(item);
                        onSearchChange('');
                      }}
                      className="w-full text-left p-2 hover:bg-[#FFFDF5] rounded-xl flex items-center gap-3 text-xs"
                    >
                      <img src={item.images[0]} alt={item.name} className="w-8 h-8 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#1E1B2E] truncate">{item.name}</p>
                        <p className="text-[10px] text-[#8B5CF6] font-bold">{item.category} • ${item.price}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="p-3 text-xs text-gray-500 text-center">No assorted wonders found.</p>
                )}
              </div>
            )}
          </div>

          <button
            onClick={onOpenMysteryBox}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FB923C] hover:bg-[#EA580C] border-2 border-[#1E1B2E] text-xs font-bold text-[#1E1B2E] transition-all shadow-[2px_2px_0px_0px_#1E1B2E] cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curate Wonder Mystery Box ($75)</span>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMysteryBox}
            className="lg:hidden p-2 rounded-xl bg-[#FB923C] border-2 border-[#1E1B2E] text-[#1E1B2E]"
            title="Mystery Box"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative px-3.5 py-1.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full text-xs font-bold flex items-center gap-2 border-2 border-[#1E1B2E] shadow-[2px_2px_0px_0px_#1E1B2E] transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Wonder Bag</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 bg-[#FBBF24] text-[#1E1B2E] rounded-full flex items-center justify-center font-bold text-[10px] border border-[#1E1B2E]">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E1B2E]"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF5] border-t-2 border-[#1E1B2E] px-4 py-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Sandra..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border-2 border-[#1E1B2E] rounded-xl text-xs text-[#1E1B2E]"
            />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                onOpenMysteryBox();
                setIsMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-[#FB923C] border-2 border-[#1E1B2E] text-left text-xs font-bold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Curate Wonder Mystery Box</span>
            </button>
            {onOpenDesignKit && (
              <button
                onClick={() => {
                  onOpenDesignKit();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-xl bg-white border-2 border-[#1E1B2E] text-left text-xs font-bold flex items-center gap-2 text-[#8B5CF6]"
              >
                <Compass className="w-4 h-4" />
                <span>Sandra Design Kit</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
