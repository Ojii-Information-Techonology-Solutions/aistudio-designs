import React from 'react';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';
import { StoreProduct, StoreDefinition } from '../types/storeTypes';
import { CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';

interface LookbookSectionProps {
  store: StoreDefinition;
  onSelectProduct: (product: StoreProduct) => void;
  currency: CurrencyCode;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({
  store,
  onSelectProduct,
  currency
}) => {
  const editorialImages = [
    {
      title: `${store.name} Editorial I`,
      location: 'Milan & Paris',
      image: store.products[0]?.images[0] || store.theme.heroImage,
      tagline: 'Precision craftsmanship captured in natural ambient light.'
    },
    {
      title: `${store.name} Editorial II`,
      location: 'Kyoto & Zurich',
      image: store.products[1]?.images[0] || store.theme.heroImage,
      tagline: 'Minimalist forms crafted for architectural balance and tactile delight.'
    },
    {
      title: `${store.name} Editorial III`,
      location: 'New York & London',
      image: store.products[2]?.images[0] || store.theme.heroImage,
      tagline: 'Bespoke materials engineered to elevate every daily ritual and setting.'
    }
  ];

  return (
    <section id="store-lookbook-section" className="py-16 bg-[#FDFCFB] border-t border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[#1A1A1A] text-[10px] uppercase tracking-[0.35em] font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" style={{ color: store.theme.primaryColor }} />
            <span>Curated Visual Series</span>
          </div>
          <h2 id="lookbook-main-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-light tracking-tight">
            Moments in <span className="italic font-normal">{store.shortName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-sans font-normal leading-relaxed">
            {store.tagline}. Select any edition below to inspect specifications and details.
          </p>
        </div>

        {/* Lookbook Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editorialImages.map((look, idx) => {
            const product = store.products[idx] || store.products[0];

            return (
              <div
                key={idx}
                id={`lookbook-card-${idx}`}
                className="group flex flex-col bg-[#FDFCFB] border border-[#E5E1DA] hover:border-[#1A1A1A] overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Visual Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE7E2]">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#E5E1DA] font-sans font-medium">
                      {look.location}
                    </p>
                    <h3 className="font-serif text-xl font-light leading-tight text-white mt-1">
                      {look.title}
                    </h3>
                  </div>
                </div>

                {/* Featured Products Footer */}
                {product && (
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#FDFCFB] border-t border-[#E5E1DA]">
                    <p className="text-xs text-gray-600 font-sans leading-relaxed">
                      {look.tagline}
                    </p>

                    <div className="pt-2 border-t border-[#E5E1DA]">
                      <div
                        id={`lookbook-product-item-${product.id}`}
                        onClick={() => onSelectProduct(product)}
                        className="flex items-center justify-between p-2 bg-[#F2F0ED] hover:bg-[#1A1A1A] hover:text-white border border-[#E5E1DA] cursor-pointer transition-all group/item"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-9 h-11 object-cover border border-[#E5E1DA]"
                          />
                          <div className="truncate">
                            <p className="font-serif text-xs font-normal group-hover/item:text-white truncate">
                              {product.name}
                            </p>
                            <p className="text-[9px] uppercase tracking-wider text-gray-500 group-hover/item:text-gray-300 font-sans">
                              {product.category}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-sans font-medium group-hover/item:text-white whitespace-nowrap pl-2">
                          {formatPrice(product.price, currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
