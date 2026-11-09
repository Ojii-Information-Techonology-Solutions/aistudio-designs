import React, { useState, useMemo } from 'react';
import { ClarissaProduct, ClarissaCartItem, ClarissaFilterState, ClarissaCategory } from './types';
import { CLARISSA_PRODUCTS } from './data';
import { ClarissaNavbar } from './components/ClarissaNavbar';
import { ClarissaHero } from './components/ClarissaHero';
import { ClarissaFilter } from './components/ClarissaFilter';
import { ClarissaTablewareCard } from './components/ClarissaTablewareCard';
import { ClarissaProductModal } from './components/ClarissaProductModal';
import { ClarissaCartDrawer } from './components/ClarissaCartDrawer';
import { ClarissaTablescapeBuilder } from './components/ClarissaTablescapeBuilder';
import { ClarissaDesignKit } from './components/ClarissaDesignKit';
import { ClarissaFooter } from './components/ClarissaFooter';

interface ClarissaStoreProps {
  currency?: string;
  onChangeCurrency?: (c: any) => void;
}

const CATEGORIES: ClarissaCategory[] = [
  'All',
  'Dinnerware & Plates',
  'Crystal Glassware & Goblets',
  'Forged Cutlery & Silverware',
  'Serving Platters & Bowls',
  'Curated Dining Sets'
];

export const ClarissaStore: React.FC<ClarissaStoreProps> = () => {
  const [selectedProduct, setSelectedProduct] = useState<ClarissaProduct | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTablescapeOpen, setIsTablescapeOpen] = useState(false);
  const [isDesignKitOpen, setIsDesignKitOpen] = useState(false);

  // Cart
  const [cart, setCart] = useState<ClarissaCartItem[]>([
    {
      id: 'cart-clarissa-01',
      product: CLARISSA_PRODUCTS[0],
      quantity: 1,
      selectedGlaze: 'Chantilly Pearl White',
      includeBespokeGiftBox: true
    }
  ]);

  // Filters
  const [filters, setFilters] = useState<ClarissaFilterState>({
    category: 'All',
    material: 'All',
    priceRange: [50, 500],
    searchQuery: '',
    sortBy: 'featured'
  });

  const handleFilterChange = (newFilters: Partial<ClarissaFilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredProducts = useMemo(() => {
    return CLARISSA_PRODUCTS.filter((p) => {
      if (filters.category !== 'All' && p.category !== filters.category) return false;
      if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) return false;
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const match =
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q);
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
    product: ClarissaProduct,
    quantity: number,
    options: { glaze?: string; giftBox?: boolean; monogram?: string }
  ) => {
    const newItemId = `${product.id}-${options.glaze || 'std'}-${Date.now()}`;
    setCart((prev) => [
      ...prev,
      {
        id: newItemId,
        product,
        quantity,
        selectedGlaze: options.glaze,
        includeBespokeGiftBox: options.giftBox,
        engravedMonogram: options.monogram
      }
    ]);
    setIsCartOpen(true);
  };

  const handleQuickAdd = (product: ClarissaProduct) => {
    handleAddToCart(product, 1, {
      glaze: product.colorGlazeOptions ? product.colorGlazeOptions[0]?.name : undefined
    });
  };

  const handleAddCustomTablescape = (
    plate: ClarissaProduct,
    glass: ClarissaProduct,
    cutlery: ClarissaProduct,
    persons: number
  ) => {
    const bundleItem: ClarissaCartItem = {
      id: `tablescape-${Date.now()}`,
      product: {
        id: `custom-ensemble-${Date.now()}`,
        name: `Bespoke ${persons}-Person Ensemble (${plate.name} + ${glass.name})`,
        tagline: `Curated tablescape with ${cutlery.name} for ${persons} dining guests.`,
        price: Math.round(((plate.price / (plate.piecesPerSet || 4)) + (glass.price / (glass.piecesPerSet || 6)) + (cutlery.price / 6)) * persons),
        category: 'Curated Dining Sets',
        material: 'Limoges Porcelain, Crystal & 18/10 Steel',
        origin: 'European Artisans',
        piecesPerSet: persons * 4,
        dishWasherSafe: true,
        description: 'Complete bespoke tablescape ensemble.',
        specifications: {},
        details: [`${persons}x ${plate.name}`, `${persons}x ${glass.name}`, `${persons}x ${cutlery.name}`],
        images: [plate.images[0]],
        inStock: true,
        rating: 5.0,
        reviewCount: 1
      },
      quantity: 1,
      includeBespokeGiftBox: true
    };
    setCart((prev) => [...prev, bundleItem]);
    setIsCartOpen(true);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#161B26] flex flex-col font-sans">
      {/* Navbar */}
      <ClarissaNavbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTablescape={() => setIsTablescapeOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => handleFilterChange({ searchQuery: q })}
        allProducts={CLARISSA_PRODUCTS}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
          setIsDetailModalOpen(true);
        }}
      />

      {/* Hero */}
      <ClarissaHero
        onExploreClick={() => {
          const el = document.getElementById('clarissa-catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenTablescape={() => setIsTablescapeOpen(true)}
      />

      {/* Catalog */}
      <main id="clarissa-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full">
        {/* Filter Controls */}
        <ClarissaFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          categories={CATEGORIES}
          totalResults={filteredProducts.length}
        />

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ClarissaTablewareCard
                key={product.id}
                product={product}
                onSelect={(p) => {
                  setSelectedProduct(p);
                  setIsDetailModalOpen(true);
                }}
                onQuickAdd={handleQuickAdd}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-[#EBE5DC]">
            <p className="font-serif text-lg text-gray-700">No tableware pieces match your criteria.</p>
            <button
              onClick={() =>
                setFilters({
                  category: 'All',
                  material: 'All',
                  priceRange: [50, 500],
                  searchQuery: '',
                  sortBy: 'featured'
                })
              }
              className="mt-3 px-4 py-2 bg-[#161B26] text-[#CBA153] rounded-xl text-xs font-serif font-bold"
            >
              Reset Filter
            </button>
          </div>
        )}
      </main>

      {/* Modals */}
      <ClarissaDesignKit
        isOpen={isDesignKitOpen}
        onClose={() => setIsDesignKitOpen(false)}
      />

      <ClarissaProductModal
        product={selectedProduct}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <ClarissaTablescapeBuilder
        isOpen={isTablescapeOpen}
        onClose={() => setIsTablescapeOpen(false)}
        allProducts={CLARISSA_PRODUCTS}
        onAddCustomTablescape={handleAddCustomTablescape}
      />

      <ClarissaCartDrawer
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
      <ClarissaFooter
        onSelectCategory={(cat) => handleFilterChange({ category: cat })}
        onOpenTablescape={() => setIsTablescapeOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
      />
    </div>
  );
};
