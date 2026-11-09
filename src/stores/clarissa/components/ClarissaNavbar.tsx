import React, { useState } from 'react';
import {
  UtensilsCrossed,
  ShoppingBag,
  Search,
  Menu,
  X,
  Compass,
  Wine,
  Sparkles,
  Award
} from 'lucide-react';
import { ClarissaProduct } from '../types';

interface ClarissaNavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenTablescape: () => void;
  onOpenDesignKit?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  allProducts: ClarissaProduct[];
  onSelectProduct: (product: ClarissaProduct) => void;
}

export const ClarissaNavbar: React.FC<ClarissaNavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenTablescape,
  onOpenDesignKit,
  searchQuery,
  onSearchChange,
  allProducts,
  onSelectProduct
}) => {
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
    <header className="sticky top-[37px] z-40 bg-[#161B26] text-[#FAF8F5] border-b border-[#2A303C] shadow-md font-sans">
      {/* Top Banner */}
      <div className="bg-[#0E1118] py-1 px-4 text-center text-[11px] text-[#CBA153] flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto font-serif">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Maison Clarissa Paris • Complimentary Velvet Gift Packaging on All Tableware Services</span>
        </div>
        {onOpenDesignKit && (
          <button
            onClick={onOpenDesignKit}
            className="hidden md:flex items-center gap-1 text-[#CBA153] hover:underline text-[10px] uppercase tracking-wider font-mono font-bold"
          >
            <Compass className="w-3 h-3" />
            <span>Design Kit</span>
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#2A303C] border border-[#CBA153]/40 flex items-center justify-center text-[#CBA153] group-hover:scale-105 transition-transform shadow-xs">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block">
                CLARISSA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#CBA153] font-mono block -mt-1">
                Plates • Glassware • Cutlery
              </span>
            </div>
          </button>
        </div>

        {/* Center Search / Tablescape Tool */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Limoges porcelain, crystal goblets, cutlery..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-[#0E1118] border border-[#2A303C] rounded-full text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[#CBA153]"
            />
            {searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#0E1118] border border-[#2A303C] rounded-xl shadow-xl max-h-60 overflow-y-auto p-2 z-50">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectProduct(item);
                        onSearchChange('');
                      }}
                      className="w-full text-left p-2 hover:bg-[#2A303C] rounded-lg flex items-center gap-3 text-xs"
                    >
                      <img src={item.images[0]} alt={item.name} className="w-8 h-8 rounded-md object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-serif font-bold text-white truncate">{item.name}</p>
                        <p className="text-[10px] text-[#CBA153]">{item.category} • ${item.price}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="p-3 text-xs text-gray-400 text-center">No tableware found.</p>
                )}
              </div>
            )}
          </div>

          <button
            onClick={onOpenTablescape}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2A303C] hover:bg-[#373F4E] border border-[#CBA153]/40 text-xs font-serif font-bold text-[#CBA153] transition-colors"
          >
            <Wine className="w-3.5 h-3.5" />
            <span>Interactive Tablescape Studio</span>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTablescape}
            className="lg:hidden p-2 rounded-lg bg-[#2A303C] text-[#CBA153]"
            title="Tablescape Studio"
          >
            <Wine className="w-4 h-4" />
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative px-3.5 py-1.5 bg-[#CBA153] hover:bg-[#B38D45] text-black rounded-full text-xs font-serif font-bold flex items-center gap-2 shadow-xs transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Dining Cart</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 bg-black text-[#CBA153] rounded-full flex items-center justify-center font-bold text-[10px]">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0E1118] border-t border-[#2A303C] px-4 py-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Clarissa..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#161B26] border border-[#2A303C] rounded-lg text-xs text-white"
            />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                onOpenTablescape();
                setIsMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-lg bg-[#2A303C] text-left text-xs font-serif font-bold flex items-center gap-2 text-[#CBA153]"
            >
              <Wine className="w-4 h-4" />
              <span>Interactive Tablescape Studio</span>
            </button>
            {onOpenDesignKit && (
              <button
                onClick={() => {
                  onOpenDesignKit();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-lg bg-[#2A303C] text-left text-xs font-serif flex items-center gap-2 text-[#CBA153]"
              >
                <Compass className="w-4 h-4" />
                <span>Clarissa Design System</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
