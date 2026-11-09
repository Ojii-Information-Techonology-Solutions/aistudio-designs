import React, { useState } from 'react';
import {
  Sprout,
  ShoppingBag,
  Search,
  Menu,
  X,
  Compass,
  Palette,
  Sun,
  Droplets,
  HeartHandshake
} from 'lucide-react';
import { PlantitoProduct } from '../types';

interface PlantitoNavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenPotPairing: () => void;
  onOpenDesignKit?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  allProducts: PlantitoProduct[];
  onSelectProduct: (product: PlantitoProduct) => void;
}

export const PlantitoNavbar: React.FC<PlantitoNavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenPotPairing,
  onOpenDesignKit,
  searchQuery,
  onSearchChange,
  allProducts,
  onSelectProduct
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchResults = searchQuery.trim()
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-[37px] z-40 bg-[#1E392A] text-[#F4EFEA] border-b border-[#2D503C] shadow-sm font-sans">
      {/* Top micro banner */}
      <div className="bg-[#14271D] py-1 px-4 text-center text-[11px] text-[#A3BFAB] flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto">
          <Sprout className="w-3.5 h-3.5 text-[#84CC16]" />
          <span>Lush Plant Deliveries • Guaranteed Live & Healthy Arrival • Free Fertilizer on Orders $60+</span>
        </div>
        {onOpenDesignKit && (
          <button
            onClick={onOpenDesignKit}
            className="hidden md:flex items-center gap-1 text-[#84CC16] hover:underline text-[10px] uppercase tracking-wider font-mono font-bold"
          >
            <Compass className="w-3 h-3" />
            <span>Design Kit</span>
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#284C38] border border-[#3E6C51] flex items-center justify-center text-[#84CC16] group-hover:scale-105 transition-transform shadow-xs">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block">
                PLANTITO
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#A3BFAB] font-mono block -mt-1">
                Pots, Plants &amp; Plant Food
              </span>
            </div>
          </button>
        </div>

        {/* Center Search / Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A3BFAB]" />
            <input
              type="text"
              placeholder="Search plants, terracotta pots, bio-fertilizer..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-[#14271D] border border-[#2D503C] rounded-full text-xs text-white placeholder:text-[#A3BFAB]/70 focus:outline-none focus:border-[#84CC16]"
            />
            {/* Search Dropdown */}
            {searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#14271D] border border-[#2D503C] rounded-xl shadow-xl max-h-60 overflow-y-auto p-2 z-50">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectProduct(item);
                        onSearchChange('');
                      }}
                      className="w-full text-left p-2 hover:bg-[#284C38] rounded-lg flex items-center gap-3 text-xs"
                    >
                      <img src={item.images[0]} alt={item.name} className="w-8 h-8 rounded-md object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white truncate">{item.name}</p>
                        <p className="text-[10px] text-[#A3BFAB]">{item.category} • ${item.price}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="p-3 text-xs text-[#A3BFAB] text-center">No botanical items found.</p>
                )}
              </div>
            )}
          </div>

          <button
            onClick={onOpenPotPairing}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#284C38] hover:bg-[#346149] border border-[#3E6C51] text-xs font-medium text-white transition-colors"
          >
            <Palette className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>Pot &amp; Plant Pairing Studio</span>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPotPairing}
            className="lg:hidden p-2 rounded-lg bg-[#284C38] text-white"
            title="Pot Pairing"
          >
            <Palette className="w-4 h-4 text-[#C86D51]" />
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative px-3 py-1.5 bg-[#C86D51] hover:bg-[#B35F45] text-white rounded-full text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Greenhouse Cart</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 bg-white text-[#C86D51] rounded-full flex items-center justify-center font-bold text-[10px]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#A3BFAB] hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#14271D] border-t border-[#2D503C] px-4 py-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A3BFAB]" />
            <input
              type="text"
              placeholder="Search Plantito..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#1E392A] border border-[#2D503C] rounded-lg text-xs text-white"
            />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                onOpenPotPairing();
                setIsMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-lg bg-[#284C38] text-left text-xs font-medium flex items-center gap-2"
            >
              <Palette className="w-4 h-4 text-[#C86D51]" />
              <span>Interactive Pot &amp; Plant Pairing Studio</span>
            </button>
            {onOpenDesignKit && (
              <button
                onClick={() => {
                  onOpenDesignKit();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-lg bg-[#284C38] text-left text-xs font-medium flex items-center gap-2 text-[#84CC16]"
              >
                <Compass className="w-4 h-4" />
                <span>Plantito Design System &amp; Tokens</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
