import React, { useState, useMemo } from 'react';
import { CurrencyCode } from '../../types';
import { Dress, CharleneCartItem, CharleneFilterState } from './types';
import { CHARLENE_DRESSES } from './data';
import { CharleneNavbar } from './components/CharleneNavbar';
import { CharleneHero } from './components/CharleneHero';
import { CharleneFilter } from './components/CharleneFilter';
import { CharleneDressCard } from './components/CharleneDressCard';
import { CharleneDressModal } from './components/CharleneDressModal';
import { CharleneCartDrawer } from './components/CharleneCartDrawer';
import { CharleneLookbook } from './components/CharleneLookbook';
import { CharleneDesignKit } from './components/CharleneDesignKit';
import { CharleneFooter } from './components/CharleneFooter';
import { SizingGuideModal } from '../../components/SizingGuideModal';
import { AtelierAdvisorModal } from '../../components/AtelierAdvisorModal';
import { CheckoutModal } from '../../components/CheckoutModal';
import { WishlistDrawer } from '../../components/WishlistDrawer';

interface CharleneStoreProps {
  currency: CurrencyCode;
  onChangeCurrency: (curr: CurrencyCode) => void;
}

export const CharleneStore: React.FC<CharleneStoreProps> = ({
  currency,
  onChangeCurrency
}) => {
  // Store-specific states
  const [selectedDress, setSelectedDress] = useState<Dress | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSizingModalOpen, setIsSizingModalOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isDesignKitOpen, setIsDesignKitOpen] = useState(false);

  // Cart & Wishlist
  const [cart, setCart] = useState<CharleneCartItem[]>([
    {
      id: 'init-1',
      dressId: 'charlene-01',
      name: 'The Ethereal Backless Silk Column Gown',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
      price: 1250,
      quantity: 1,
      selectedColor: 'Champagne Pearl',
      selectedSize: 'US 2 (S)',
      customHemmingLength: 'Hemmed for 85mm heels',
      complimentaryGiftPackaging: true
    }
  ]);

  const [wishlist, setWishlist] = useState<Dress[]>([CHARLENE_DRESSES[1]]);

  // Filters
  const [filters, setFilters] = useState<CharleneFilterState>({
    category: 'All',
    silhouette: 'All',
    occasion: 'All',
    color: 'All',
    fabric: 'All',
    priceRange: [0, 5000],
    sortBy: 'featured',
    searchQuery: '',
    onlyInStock: false,
    onlyMadeToOrder: false
  });

  // Filter handlers
  const handleFilterChange = (updater: Partial<CharleneFilterState>) => {
    setFilters((prev) => ({ ...prev, ...updater }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'All',
      silhouette: 'All',
      occasion: 'All',
      color: 'All',
      fabric: 'All',
      priceRange: [0, 5000],
      sortBy: 'featured',
      searchQuery: '',
      onlyInStock: false,
      onlyMadeToOrder: false
    });
  };

  // Filter logic
  const filteredDresses = useMemo(() => {
    return CHARLENE_DRESSES.filter((d) => {
      if (filters.category !== 'All' && d.category !== filters.category) return false;
      if (filters.silhouette !== 'All' && d.silhouette !== filters.silhouette) return false;
      if (filters.occasion !== 'All' && d.occasion !== filters.occasion) return false;
      if (filters.onlyInStock && !d.inStock) return false;
      if (filters.onlyMadeToOrder && !d.isMadeToOrder) return false;

      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = d.name.toLowerCase().includes(q);
        const matchesSub = d.subtitle.toLowerCase().includes(q);
        const matchesDesc = d.description.toLowerCase().includes(q);
        const matchesFab = d.fabric.toLowerCase().includes(q);
        if (!matchesName && !matchesSub && !matchesDesc && !matchesFab) return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [filters]);

  // Wishlist toggle
  const handleToggleWishlist = (dress: Dress) => {
    setWishlist((prev) => {
      const exists = prev.some((d) => d.id === dress.id);
      if (exists) return prev.filter((d) => d.id !== dress.id);
      return [...prev, dress];
    });
  };

  // Cart operations
  const handleAddToCart = (item: CharleneCartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) =>
          i.dressId === item.dressId &&
          i.selectedColor === item.selectedColor &&
          i.selectedSize === item.selectedSize &&
          i.customHemmingLength === item.customHemmingLength
      );
      if (existing) {
        return prev.map((i) =>
          i.id === existing.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const handleOpenDressDetail = (dress: Dress) => {
    setSelectedDress(dress);
    setIsDetailModalOpen(true);
  };

  const handleOpenDressById = (dressId: string) => {
    const d = CHARLENE_DRESSES.find((item) => item.id === dressId);
    if (d) {
      setSelectedDress(d);
      setIsDetailModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#181615] flex flex-col font-serif selection:bg-[#C5A059] selection:text-white">
      {/* Header */}
      <CharleneNavbar
        currentCategory={filters.category}
        onSelectCategory={(cat) => handleFilterChange({ category: cat })}
        currency={currency}
        onChangeCurrency={onChangeCurrency}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSizingGuide={() => setIsSizingModalOpen(true)}
        onOpenLookbook={() => setIsLookbookOpen(true)}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => handleFilterChange({ searchQuery: q })}
        allDresses={CHARLENE_DRESSES}
        onSelectDress={handleOpenDressDetail}
      />

      {/* Hero Narrative */}
      <CharleneHero
        onExplore={() => {
          const el = document.getElementById('charlene-collection');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenLookbook={() => setIsLookbookOpen(true)}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
      />

      {/* Filter & Toolbar */}
      <div id="charlene-collection">
        <CharleneFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          totalCount={filteredDresses.length}
        />
      </div>

      {/* Product Catalog Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {filteredDresses.length === 0 ? (
          <div className="text-center py-20 space-y-4 bg-[#F2F0ED]/40 border border-[#E5E1DA]">
            <p className="font-serif text-2xl text-[#181615]">No silhouettes matched your selection</p>
            <p className="text-xs text-gray-500 font-sans">
              Try adjusting your silhouette cuts, occasion filters, or search terms.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#181615] text-[#FAF6F0] text-xs uppercase tracking-widest font-sans font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredDresses.map((dress) => (
              <CharleneDressCard
                key={dress.id}
                dress={dress}
                currency={currency}
                isWishlisted={wishlist.some((w) => w.id === dress.id)}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={handleOpenDressDetail}
                onOpenDetail={handleOpenDressDetail}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <CharleneFooter
        onSelectCategory={(cat) => handleFilterChange({ category: cat })}
        onOpenLookbook={() => setIsLookbookOpen(true)}
        onOpenSizingGuide={() => setIsSizingModalOpen(true)}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
      />

      {/* Modals & Drawers */}
      <CharleneDesignKit
        isOpen={isDesignKitOpen}
        onClose={() => setIsDesignKitOpen(false)}
      />
      <CharleneDressModal
        dress={selectedDress}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        currency={currency}
        isWishlisted={selectedDress ? wishlist.some((w) => w.id === selectedDress.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onOpenSizingGuide={() => {
          setIsDetailModalOpen(false);
          setIsSizingModalOpen(true);
        }}
      />

      <CharleneCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        currency={currency}
      />

      <CharleneLookbook
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        onSelectDress={handleOpenDressById}
      />

      <SizingGuideModal
        isOpen={isSizingModalOpen}
        onClose={() => setIsSizingModalOpen(false)}
      />

      <AtelierAdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        onSelectDress={handleOpenDressById}
      />

      {/* Wishlist Drawer wrapper */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist.map((d) => ({
          id: d.id,
          name: d.name,
          price: d.price,
          category: d.category,
          images: d.images,
          rating: d.rating,
          description: d.description,
          inStock: d.inStock,
          isNewArrival: d.isNewArrival
        } as any))}
        onRemoveFromWishlist={(id) => setWishlist((prev) => prev.filter((d) => d.id !== id))}
        onSelectProduct={(p) => handleOpenDressById(p.id)}
        currency={currency}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart.map((c) => ({
          id: c.id,
          shopId: 'charlene' as const,
          productId: c.dressId,
          productName: c.name,
          productImage: c.image,
          unitPrice: c.price,
          quantity: c.quantity,
          category: 'Couture',
          selectedOption: `${c.selectedColor} / ${c.selectedSize}`,
          specialInstructions: c.customHemmingLength
        }))}
        currency={currency}
        discountPercentage={0}
        onOrderSuccess={() => {
          setCart([]);
        }}
        storeName="Charlène Paris"
      />
    </div>
  );
};
