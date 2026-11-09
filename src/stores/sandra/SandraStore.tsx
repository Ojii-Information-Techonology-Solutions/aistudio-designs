import React, { useState, useMemo } from 'react';
import { SandraItem, SandraCartItem, SandraFilterState, SandraCategory } from './types';
import { SANDRA_ITEMS } from './data';
import { SandraNavbar } from './components/SandraNavbar';
import { SandraHero } from './components/SandraHero';
import { SandraFilter } from './components/SandraFilter';
import { SandraItemCard } from './components/SandraItemCard';
import { SandraProductModal } from './components/SandraProductModal';
import { SandraCartDrawer } from './components/SandraCartDrawer';
import { SandraSurpriseBundleModal } from './components/SandraSurpriseBundleModal';
import { SandraDesignKit } from './components/SandraDesignKit';
import { SandraFooter } from './components/SandraFooter';

interface SandraStoreProps {
  currency?: string;
  onChangeCurrency?: (c: any) => void;
}

const CATEGORIES: SandraCategory[] = [
  'All',
  'Curated Home Accents',
  'Artisan Candles & Scents',
  'Japanese Paper & Stationery',
  'Playful Desk Oddities',
  'Handmade Ceramics & Trinkets',
  'Daily Life Essentials'
];

export const SandraStore: React.FC<SandraStoreProps> = () => {
  const [selectedItem, setSelectedItem] = useState<SandraItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMysteryBoxOpen, setIsMysteryBoxOpen] = useState(false);
  const [isDesignKitOpen, setIsDesignKitOpen] = useState(false);

  // Cart
  const [cart, setCart] = useState<SandraCartItem[]>([
    {
      id: 'cart-sandra-01',
      item: SANDRA_ITEMS[0],
      quantity: 1,
      selectedColor: 'Oatmeal Speckle',
      includeSurpriseGiftWrap: true
    }
  ]);

  // Filters
  const [filters, setFilters] = useState<SandraFilterState>({
    category: 'All',
    priceRange: [10, 120],
    searchQuery: '',
    sortBy: 'featured'
  });

  const handleFilterChange = (newFilters: Partial<SandraFilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredItems = useMemo(() => {
    return SANDRA_ITEMS.filter((i) => {
      if (filters.category !== 'All' && i.category !== filters.category) return false;
      if (i.price < filters.priceRange[0] || i.price > filters.priceRange[1]) return false;
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const match =
          i.name.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.makerOrigin.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [filters]);

  const handleAddToCart = (
    item: SandraItem,
    quantity: number,
    options: { color?: string; giftWrap?: boolean; handwrittenNote?: string }
  ) => {
    const newItemId = `${item.id}-${options.color || 'std'}-${Date.now()}`;
    setCart((prev) => [
      ...prev,
      {
        id: newItemId,
        item,
        quantity,
        selectedColor: options.color,
        includeSurpriseGiftWrap: options.giftWrap,
        customHandwrittenCard: options.handwrittenNote
      }
    ]);
    setIsCartOpen(true);
  };

  const handleQuickAdd = (item: SandraItem) => {
    handleAddToCart(item, 1, {
      color: item.colorOptions ? item.colorOptions[0]?.name : undefined
    });
  };

  const handleAddMysteryBox = (bundleDetails: { mood: string; items: string[]; notes: string }) => {
    const mysteryItem: SandraCartItem = {
      id: `mystery-${Date.now()}`,
      item: {
        id: `mystery-bundle-${Date.now()}`,
        name: `Sandra Mystery Wonder Box (${bundleDetails.mood})`,
        tagline: `5 Curated surprise wonders tuned to "${bundleDetails.mood}" mood.`,
        price: 75,
        originalPrice: 110,
        category: 'Curated Home Accents',
        description: `Hand-selected surprise items including ${bundleDetails.items.join(', ')}.`,
        makerOrigin: 'Sandra Studio Collective',
        vibes: [bundleDetails.mood, 'Surprise Gift', 'Curated Joy'],
        images: ['https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1000&q=80'],
        inStock: true,
        rating: 5.0,
        reviewCount: 1
      },
      quantity: 1,
      includeSurpriseGiftWrap: true,
      customHandwrittenCard: bundleDetails.notes
    };
    setCart((prev) => [...prev, mysteryItem]);
    setIsCartOpen(true);
  };

  const totalCartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#1E1B2E] flex flex-col font-sans">
      {/* Navbar */}
      <SandraNavbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMysteryBox={() => setIsMysteryBoxOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => handleFilterChange({ searchQuery: q })}
        allItems={SANDRA_ITEMS}
        onSelectItem={(item) => {
          setSelectedItem(item);
          setIsDetailModalOpen(true);
        }}
      />

      {/* Hero */}
      <SandraHero
        onExploreClick={() => {
          const el = document.getElementById('sandra-catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenMysteryBox={() => setIsMysteryBoxOpen(true)}
      />

      {/* Catalog */}
      <main id="sandra-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full">
        {/* Filter Controls */}
        <SandraFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          categories={CATEGORIES}
          totalResults={filteredItems.length}
        />

        {/* Product Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <SandraItemCard
                key={item.id}
                item={item}
                onSelect={(i) => {
                  setSelectedItem(i);
                  setIsDetailModalOpen(true);
                }}
                onQuickAdd={handleQuickAdd}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border-2 border-[#1E1B2E] shadow-[4px_4px_0px_0px_#1E1B2E]">
            <p className="font-bold text-lg text-gray-700">No assorted objects match your search.</p>
            <button
              onClick={() =>
                setFilters({
                  category: 'All',
                  priceRange: [10, 120],
                  searchQuery: '',
                  sortBy: 'featured'
                })
              }
              className="mt-3 px-5 py-2 bg-[#8B5CF6] text-white rounded-xl text-xs font-black uppercase"
            >
              Reset Filter
            </button>
          </div>
        )}
      </main>

      {/* Modals */}
      <SandraDesignKit
        isOpen={isDesignKitOpen}
        onClose={() => setIsDesignKitOpen(false)}
      />

      <SandraProductModal
        item={selectedItem}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <SandraSurpriseBundleModal
        isOpen={isMysteryBoxOpen}
        onClose={() => setIsMysteryBoxOpen(false)}
        onAddMysteryBox={handleAddMysteryBox}
      />

      <SandraCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={(id, q) => {
          if (q <= 0) {
            setCart((prev) => prev.filter((i) => i.id !== id));
          } else {
            setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: q } : i)));
          }
        }}
        onRemoveItem={(id) => setCart((prev) => prev.filter((i) => i.id !== id))}
        onClearCart={() => setCart([])}
      />

      {/* Footer */}
      <SandraFooter
        onSelectCategory={(cat) => handleFilterChange({ category: cat })}
        onOpenMysteryBox={() => setIsMysteryBoxOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
      />
    </div>
  );
};
