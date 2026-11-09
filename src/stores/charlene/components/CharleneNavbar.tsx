import React, { useState } from 'react';
import {
  ShoppingBag,
  Heart,
  Search,
  Sparkles,
  Menu,
  X,
  Compass,
  Scissors,
  BookOpen
} from 'lucide-react';
import { CurrencyCode } from '../../../types';
import { Dress } from '../types';
import { formatPrice } from '../../../utils/formatters';

interface CharleneNavbarProps {
  currentCategory: string;
  onSelectCategory: (category: string) => void;
  currency: CurrencyCode;
  onChangeCurrency: (curr: CurrencyCode) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSizingGuide: () => void;
  onOpenLookbook: () => void;
  onOpenAdvisor: () => void;
  onOpenDesignKit?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  allDresses: Dress[];
  onSelectDress: (dress: Dress) => void;
}

export const CharleneNavbar: React.FC<CharleneNavbarProps> = ({
  currentCategory,
  onSelectCategory,
  currency,
  onChangeCurrency,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSizingGuide,
  onOpenLookbook,
  onOpenAdvisor,
  onOpenDesignKit,
  searchQuery,
  onSearchChange,
  allDresses,
  onSelectDress
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ['All', 'Gowns', 'Silk Slips', 'Cocktail', 'Couture', 'Bridal'];

  const searchResults = searchQuery.trim()
    ? allDresses.filter(
        (d) =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.silhouette.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.occasion.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#E5E1DA]">
      {/* Atelier Top Announcement Bar */}
      <div className="bg-[#181615] text-[#FAF6F0] text-[10px] tracking-[0.25em] uppercase py-2 px-4 text-center font-sans font-medium flex items-center justify-between">
        <div className="hidden md:flex items-center gap-2 text-gray-400">
          <span>PARIS ATELIER • 12 RUE SAINT-HONORÉ</span>
        </div>
        <div className="mx-auto flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
          <span>Complimentary Insured White-Glove Dispatch on All Couture Orders</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-400">
          {onOpenDesignKit && (
            <button
              onClick={onOpenDesignKit}
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1 cursor-pointer text-[10px]"
              title="Inspect Charlène Haute Couture Design System"
            >
              <Compass className="w-3 h-3 text-[#C5A059]" />
              <span>Design Kit</span>
            </button>
          )}
          <button
            onClick={onOpenAdvisor}
            className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>Atelier Stylist</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Mobile Menu & Category Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#181615] hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#181615]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`py-2 relative transition-colors hover:text-[#C5A059] ${
                    currentCategory === cat ? 'text-[#C5A059] font-bold' : 'text-[#181615]'
                  }`}
                >
                  {cat}
                  {currentCategory === cat && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059]" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Center: Brand Identity */}
          <div className="text-center cursor-pointer" onClick={() => onSelectCategory('All')}>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.25em] text-[#181615] uppercase font-light">
              Charlène
            </h1>
            <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-gray-500 font-sans mt-0.5">
              Haute Couture Paris
            </p>
          </div>

          {/* Right: Actions & Tools */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Trigger */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-[#181615] hover:text-[#C5A059] transition-colors"
                aria-label="Search collection"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-[#FDFCFB] border border-[#E5E1DA] p-4 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      placeholder="Search gowns, silk slips, silhouettes..."
                      className="w-full text-xs p-2.5 bg-[#F2F0ED] border border-[#E5E1DA] text-[#181615] focus:outline-none focus:border-[#181615] pr-8"
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        onClick={() => onSearchChange('')}
                        className="absolute right-2.5 top-2.5 text-gray-400 hover:text-black"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Results preview */}
                  {searchResults.length > 0 && (
                    <div className="mt-3 divide-y divide-[#E5E1DA] max-h-60 overflow-y-auto">
                      {searchResults.map((d) => (
                        <div
                          key={d.id}
                          onClick={() => {
                            onSelectDress(d);
                            setIsSearchOpen(false);
                          }}
                          className="py-2 flex items-center gap-3 cursor-pointer hover:bg-[#F2F0ED] p-1 transition-colors"
                        >
                          <img
                            src={d.images[0]}
                            alt={d.name}
                            className="w-8 h-11 object-cover border border-[#E5E1DA]"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="font-serif text-xs text-[#181615] truncate">{d.name}</p>
                            <p className="text-[10px] text-gray-500">{d.category} • {formatPrice(d.price, currency)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => onChangeCurrency(e.target.value as CurrencyCode)}
              className="bg-transparent text-[11px] uppercase tracking-wider font-sans font-medium text-[#181615] border-none focus:outline-none cursor-pointer hidden sm:block"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="JPY">JPY (¥)</option>
            </select>

            {/* Sizing Guide */}
            <button
              onClick={onOpenSizingGuide}
              className="hidden md:flex items-center gap-1 text-[10px] font-sans uppercase tracking-[0.15em] text-[#181615] hover:text-[#C5A059] p-2 transition-colors"
              title="Atelier Sizing Guide"
            >
              <Scissors className="w-3.5 h-3.5" />
              <span>Sizing</span>
            </button>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-[#181615] hover:text-[#C5A059] transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C5A059] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#181615] text-[#FAF6F0] px-4 py-2 hover:bg-black transition-colors"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium hidden sm:inline">
                Bag
              </span>
              <span className="text-xs font-bold font-sans">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E1DA] bg-[#FDFCFB] p-5 space-y-4 animate-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left p-2.5 text-xs uppercase tracking-wider font-sans border ${
                  currentCategory === cat
                    ? 'border-[#181615] bg-[#181615] text-white'
                    : 'border-[#E5E1DA] bg-[#F2F0ED] text-[#181615]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2 border-t border-[#E5E1DA] text-xs uppercase tracking-wider font-sans">
            <button
              onClick={() => {
                onOpenLookbook();
                setIsMobileMenuOpen(false);
              }}
              className="p-2 flex items-center gap-2 text-left hover:text-[#C5A059]"
            >
              <BookOpen className="w-4 h-4 text-[#C5A059]" />
              <span>Editorial Lookbook</span>
            </button>
            <button
              onClick={() => {
                onOpenSizingGuide();
                setIsMobileMenuOpen(false);
              }}
              className="p-2 flex items-center gap-2 text-left hover:text-[#C5A059]"
            >
              <Scissors className="w-4 h-4 text-[#C5A059]" />
              <span>Atelier Sizing Guide</span>
            </button>
            {onOpenDesignKit && (
              <button
                onClick={() => {
                  onOpenDesignKit();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2 flex items-center gap-2 text-left hover:text-[#C5A059]"
              >
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <span>Charlène Design Kit</span>
              </button>
            )}
            <button
              onClick={() => {
                onOpenAdvisor();
                setIsMobileMenuOpen(false);
              }}
              className="p-2 flex items-center gap-2 text-left hover:text-[#C5A059]"
            >
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>AI Atelier Occasion Stylist</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
