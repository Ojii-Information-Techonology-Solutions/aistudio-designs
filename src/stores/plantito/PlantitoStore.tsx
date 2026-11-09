import React, { useState, useMemo } from 'react';
import { PlantitoProduct, PlantitoCartItem, PlantitoFilterState, PlantitoCategory } from './types';
import { PLANTITO_PRODUCTS } from './data';
import { PlantitoNavbar } from './components/PlantitoNavbar';
import { PlantitoHero } from './components/PlantitoHero';
import { PlantitoFilter } from './components/PlantitoFilter';
import { PlantitoProductCard } from './components/PlantitoProductCard';
import { PlantitoProductModal } from './components/PlantitoProductModal';
import { PlantitoCartDrawer } from './components/PlantitoCartDrawer';
import { PlantitoPotPairingTool } from './components/PlantitoPotPairingTool';
import { PlantitoDesignKit } from './components/PlantitoDesignKit';
import { PlantitoFooter } from './components/PlantitoFooter';

interface PlantitoStoreProps {
  currency?: string;
  onChangeCurrency?: (c: any) => void;
}

const CATEGORIES: PlantitoCategory[] = [
  'All',
  'Indoor Plants',
  'Ceramic & Terracotta Pots',
  'Hanging & Standing Planters',
  'Organic Fertilizers & Feeds',
  'Specialty Soils & Substrates'
];

export const PlantitoStore: React.FC<PlantitoStoreProps> = () => {
  const [selectedProduct, setSelectedProduct] = useState<PlantitoProduct | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPotPairingOpen, setIsPotPairingOpen] = useState(false);
  const [isDesignKitOpen, setIsDesignKitOpen] = useState(false);

  // Cart
  const [cart, setCart] = useState<PlantitoCartItem[]>([
    {
      id: 'cart-init-01',
      product: PLANTITO_PRODUCTS[0],
      quantity: 1,
      selectedPotColor: 'Terracotta Rust',
      includeFertilizerBooster: true
    }
  ]);

  // Filters
  const [filters, setFilters] = useState<PlantitoFilterState>({
    category: 'All',
    light: 'All',
    difficulty: 'All',
    petFriendlyOnly: false,
    priceRange: [0, 120],
    searchQuery: '',
    sortBy: 'featured'
  });

  const handleFilterChange = (newFilters: Partial<PlantitoFilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredProducts = useMemo(() => {
    return PLANTITO_PRODUCTS.filter((p) => {
      if (filters.category !== 'All' && p.category !== filters.category) return false;
      if (filters.petFriendlyOnly && !p.careGuide?.petFriendly) return false;
      if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) return false;
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const match =
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q);
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
    product: PlantitoProduct,
    quantity: number,
    options: { potColor?: string; addFertilizer?: boolean; addSoilKit?: boolean }
  ) => {
    const newItemId = `${product.id}-${options.potColor || 'std'}-${Date.now()}`;
    setCart((prev) => [
      ...prev,
      {
        id: newItemId,
        product,
        quantity,
        selectedPotColor: options.potColor,
        includeFertilizerBooster: options.addFertilizer,
        includeSoilRepottingKit: options.addSoilKit
      }
    ]);
    setIsCartOpen(true);
  };

  const handleQuickAdd = (product: PlantitoProduct) => {
    handleAddToCart(product, 1, {
      potColor: product.potColorOptions ? product.potColorOptions[0]?.name : undefined
    });
  };

  const handleAddCustomBundle = (
    plant: PlantitoProduct,
    pot: PlantitoProduct,
    withFertilizer: boolean
  ) => {
    const bundleItem: PlantitoCartItem = {
      id: `bundle-${Date.now()}`,
      product: plant,
      quantity: 1,
      selectedPotColor: pot.name,
      includeFertilizerBooster: withFertilizer,
      includeSoilRepottingKit: true
    };
    setCart((prev) => [...prev, bundleItem]);
    setIsCartOpen(true);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F4EFEA] text-[#2C302E] flex flex-col font-sans">
      {/* Navbar */}
      <PlantitoNavbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPotPairing={() => setIsPotPairingOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => handleFilterChange({ searchQuery: q })}
        allProducts={PLANTITO_PRODUCTS}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
          setIsDetailModalOpen(true);
        }}
      />

      {/* Hero */}
      <PlantitoHero
        onExploreClick={() => {
          const el = document.getElementById('plantito-catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenPotPairing={() => setIsPotPairingOpen(true)}
      />

      {/* Catalog Main */}
      <main id="plantito-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full">
        {/* Filter Controls */}
        <PlantitoFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          categories={CATEGORIES}
          totalResults={filteredProducts.length}
        />

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <PlantitoProductCard
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
          <div className="p-12 text-center bg-white rounded-2xl border border-[#D5CCC1]">
            <p className="font-serif text-lg text-gray-700">No plants or pottery match your filter criteria.</p>
            <button
              onClick={() =>
                setFilters({
                  category: 'All',
                  light: 'All',
                  difficulty: 'All',
                  petFriendlyOnly: false,
                  priceRange: [0, 120],
                  searchQuery: '',
                  sortBy: 'featured'
                })
              }
              className="mt-3 px-4 py-2 bg-[#1E392A] text-white rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Modals & Drawers */}
      <PlantitoDesignKit
        isOpen={isDesignKitOpen}
        onClose={() => setIsDesignKitOpen(false)}
      />

      <PlantitoProductModal
        product={selectedProduct}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <PlantitoPotPairingTool
        isOpen={isPotPairingOpen}
        onClose={() => setIsPotPairingOpen(false)}
        allProducts={PLANTITO_PRODUCTS}
        onAddCustomBundle={handleAddCustomBundle}
      />

      <PlantitoCartDrawer
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
      <PlantitoFooter
        onSelectCategory={(cat) => handleFilterChange({ category: cat })}
        onOpenPotPairing={() => setIsPotPairingOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
      />
    </div>
  );
};
