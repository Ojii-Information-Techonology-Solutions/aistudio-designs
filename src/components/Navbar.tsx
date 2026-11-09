import React, { useState } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  Sparkles,
  Menu,
  X,
  Globe,
  ChevronDown,
  Layers,
  LayoutGrid
} from 'lucide-react';
import { CurrencyCode } from '../types';
import { StoreDefinition, StoreProduct } from '../types/storeTypes';
import { formatPrice } from '../utils/formatters';

interface NavbarProps {
  store: StoreDefinition;
  currentCategory: string;
  onSelectCategory: (cat: string) => void;
  currency: CurrencyCode;
  onChangeCurrency: (c: CurrencyCode) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAdvisor: () => void;
  onOpenDesignKit: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectProduct: (p: StoreProduct) => void;
  onOpenLookbook: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  store,
  currentCategory,
  onSelectCategory,
  currency,
  onChangeCurrency,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAdvisor,
  onOpenDesignKit,
  searchQuery,
  onSearchChange,
  onSelectProduct,
  onOpenLookbook
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  const categories = Array.from(new Set(['All', ...store.categories]));

  const searchResults = searchQuery.trim()
    ? store.products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (p.subTitle && p.subTitle.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .slice(0, 4)
    : [];

  return (
    <header id="store-header" className="sticky top-11 z-40 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#E5E1DA] transition-all">
      {/* Top Announcement Bar */}
      <div
        id="store-top-announcement"
        className="bg-[#1A1A1A] text-[#FDFCFB] text-[10px] sm:text-[11px] tracking-[0.25em] uppercase py-2 px-4 text-center font-sans font-medium flex items-center justify-center gap-3 border-b border-[#333]"
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: store.theme.primaryColor }}
        />
        <span>{store.theme.heroEyebrow} • {store.tagline}</span>
        <span className="hidden md:inline-block text-gray-400">• Privilege Code: VIP10</span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Left: Mobile Menu Toggle & Advisor Button & Design Kit */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button
              id="store-advisor-btn"
              onClick={onOpenAdvisor}
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-[10px] font-sans font-medium uppercase tracking-[0.25em] transition-all group"
            >
              <Sparkles
                className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform"
                style={{ color: store.theme.primaryColor }}
              />
              <span>Advisor</span>
            </button>

            <button
              id="store-design-kit-btn"
              onClick={onOpenDesignKit}
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 border border-[#E5E1DA] hover:border-[#1A1A1A] hover:bg-[#F2F0ED] text-[#1A1A1A] text-[10px] font-sans font-medium uppercase tracking-[0.2em] transition-all"
            >
              <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Design Kit</span>
            </button>
          </div>

          {/* Center: Brand Logo */}
          <div
            className="flex flex-col items-center cursor-pointer text-center select-none"
            onClick={() => onSelectCategory('All')}
          >
            <span
              id="store-brand-title"
              className={`text-2xl sm:text-3xl lg:text-4xl tracking-[0.2em] text-[#1A1A1A] font-light uppercase ${
                store.theme.fontFamily === 'serif' ? 'font-serif' : 'font-sans font-bold'
              }`}
            >
              {store.name}
            </span>
            <span className="font-sans text-[9px] tracking-[0.35em] text-gray-500 uppercase mt-0.5 font-medium">
              {store.shortName} • {store.businessModel.replace('-', ' ')}
            </span>
          </div>

          {/* Right: Actions (Search, Currency, Wishlist, Bag) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Trigger */}
            <div className="relative">
              <button
                id="search-toggle-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors relative"
                aria-label="Search items"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {isSearchOpen && (
                <div
                  id="search-dropdown-container"
                  className="absolute right-0 top-12 w-80 sm:w-96 bg-[#FDFCFB] border border-[#E5E1DA] shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="relative">
                    <input
                      id="navbar-search-input"
                      type="text"
                      placeholder={`Search ${store.shortName}...`}
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="w-full pl-9 pr-8 py-2 text-xs bg-[#F2F0ED] border border-[#E5E1DA] focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A] font-sans"
                      autoFocus
                    />
                    <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-gray-500" />
                    {searchQuery && (
                      <button
                        id="clear-search-btn"
                        onClick={() => onSearchChange('')}
                        className="absolute right-2.5 top-2.5 text-xs text-gray-500 hover:text-[#1A1A1A]"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Search Results Preview */}
                  {searchQuery.trim() && (
                    <div id="search-results-list" className="mt-3 divide-y divide-[#E5E1DA] max-h-64 overflow-y-auto">
                      {searchResults.length > 0 ? (
                        searchResults.map((item) => (
                          <div
                            id={`search-item-${item.id}`}
                            key={item.id}
                            onClick={() => {
                              onSelectProduct(item);
                              setIsSearchOpen(false);
                            }}
                            className="py-2 px-1 flex items-center gap-3 hover:bg-[#F2F0ED] cursor-pointer transition-colors"
                          >
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="w-10 h-12 object-cover border border-[#E5E1DA]"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-serif font-medium text-[#1A1A1A] truncate">{item.name}</p>
                              <p className="text-[10px] font-sans uppercase text-gray-500">{item.category}</p>
                              <p className="text-xs font-sans font-bold text-[#1A1A1A] mt-0.5">
                                {formatPrice(item.price, currency)}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-center py-4 text-gray-500 font-sans">
                          No items found matching "{searchQuery}".
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Currency Selector */}
            <div className="relative">
              <button
                id="currency-selector-btn"
                onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                className="hidden sm:flex items-center gap-1 text-[10px] font-sans uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#C5A059] font-medium px-2 py-1 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-gray-500" />
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-gray-500" />
              </button>

              {isCurrencyDropdownOpen && (
                <div id="currency-dropdown-list" className="absolute right-0 top-9 w-28 bg-[#FDFCFB] border border-[#E5E1DA] shadow-xl py-1 z-50">
                  {(['USD', 'EUR', 'GBP'] as CurrencyCode[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        onChangeCurrency(c);
                        setIsCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-[10px] font-sans uppercase tracking-widest transition-colors ${
                        currency === c ? 'bg-[#1A1A1A] text-white font-semibold' : 'hover:bg-[#F2F0ED] text-gray-700'
                      }`}
                    >
                      {c === 'USD' ? 'USD ($)' : c === 'EUR' ? 'EUR (€)' : 'GBP (£)'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              id="wishlist-drawer-toggle-btn"
              onClick={onOpenWishlist}
              className="p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors relative"
              aria-label="View Saved Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span
                  id="wishlist-badge-count"
                  className="absolute top-1 right-1 w-4 h-4 bg-[#1A1A1A] text-white text-[9px] rounded-full flex items-center justify-center font-bold"
                >
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping / Booking Bag Button */}
            <button
              id="shopping-bag-drawer-toggle-btn"
              onClick={onOpenCart}
              className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-black text-[#FDFCFB] px-3.5 sm:px-4 py-2 transition-colors shadow-xs relative"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#FDFCFB]" />
              <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase hidden sm:inline">Orders</span>
              <span
                id="cart-badge-count"
                className="text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold"
                style={{ backgroundColor: store.theme.primaryColor }}
              >
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Category Navigation */}
        <nav id="desktop-category-nav" className="hidden lg:flex items-center justify-center gap-7 py-3 border-t border-[#E5E1DA] overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`nav-category-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => onSelectCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.22em] font-sans transition-all relative py-1 whitespace-nowrap ${
                currentCategory === cat
                  ? 'text-[#1A1A1A] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1A1A1A]'
                  : 'text-gray-500 hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            id="nav-lookbook-tab"
            onClick={onOpenLookbook}
            className="text-[10px] uppercase tracking-[0.22em] font-sans text-[#1A1A1A] hover:text-[#C5A059] font-medium flex items-center gap-1.5 border-l border-[#E5E1DA] pl-5 whitespace-nowrap"
          >
            <span>Lookbook</span>
            <span className="text-[8px] px-1.5 py-0.2 bg-[#EAE7E2] tracking-wider text-gray-700">Curated</span>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="lg:hidden bg-[#FDFCFB] border-b border-[#E5E1DA] px-6 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <button
            id="mobile-advisor-btn"
            onClick={() => {
              onOpenAdvisor();
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.25em] font-sans"
          >
            <Sparkles className="w-4 h-4" style={{ color: store.theme.primaryColor }} />
            <span>Store Advisor</span>
          </button>

          <div className="space-y-2 pt-2 border-t border-[#E5E1DA]">
            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-semibold font-sans">
              {store.categoryLabel}
            </p>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-xs uppercase tracking-widest font-sans ${
                  currentCategory === cat ? 'text-[#1A1A1A] font-bold border-l-2 border-[#1A1A1A] pl-2' : 'text-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              id="mobile-lookbook-btn"
              onClick={() => {
                onOpenLookbook();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-xs uppercase tracking-widest font-sans text-[#C5A059] font-medium"
            >
              Curated Lookbook
            </button>
            <button
              id="mobile-design-kit-btn"
              onClick={() => {
                onOpenDesignKit();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-xs uppercase tracking-widest font-sans text-gray-700 font-medium"
            >
              Design Kit & Components
            </button>
          </div>

          <div className="pt-3 border-t border-[#E5E1DA] flex items-center justify-between">
            <span className="text-xs font-sans uppercase tracking-wider text-gray-500">Currency:</span>
            <div className="flex gap-2">
              {(['USD', 'EUR', 'GBP'] as CurrencyCode[]).map((c) => (
                <button
                  key={c}
                  onClick={() => onChangeCurrency(c)}
                  className={`text-xs px-3 py-1 font-sans ${
                    currency === c ? 'bg-[#1A1A1A] text-white' : 'bg-[#EAE7E2] text-[#1A1A1A]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
