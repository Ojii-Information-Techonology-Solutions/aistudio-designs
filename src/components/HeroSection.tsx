import React from 'react';
import { StoreDefinition } from '../types/storeTypes';
import {
  Sparkles,
  ShieldCheck,
  Scissors,
  Truck,
  ArrowRight,
  Utensils,
  Leaf,
  Wrench,
  Home,
  Palette,
  Package,
  Watch,
  Coffee,
  Headphones,
  Check,
  Star
} from 'lucide-react';

interface HeroSectionProps {
  store: StoreDefinition;
  onExploreCollection: () => void;
  onOpenAdvisor?: () => void;
  onSelectCategory?: (category: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Scissors,
  ShieldCheck,
  Truck,
  Sparkles,
  Utensils,
  Leaf,
  Wrench,
  Home,
  Palette,
  Package,
  Watch,
  Coffee,
  Headphones
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  store,
  onExploreCollection,
  onOpenAdvisor,
  onSelectCategory
}) => {
  const { theme } = store;
  const isStay = store.businessModel === 'booking-stay';
  const isRental = store.businessModel === 'rental-equipment';
  const isMachinerySales = store.businessModel === 'industrial-sales';
  const isArt = store.businessModel === 'art-gallery';

  const getIcon = (iconName: string) => {
    const IconComponent = ICON_MAP[iconName] || Sparkles;
    return <IconComponent className="w-4 h-4" />;
  };

  const featuredProduct = store.products[0];

  return (
    <section
      id="dynamic-hero-section"
      className="relative border-b border-[#E5E1DA] bg-[#FDFCFB] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#E5E1DA] shadow-sm">
          {/* Left Column: Bold Editorial & Brand Narrative (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E1DA] bg-[#FDFCFB]">
            <div className="space-y-5">
              {/* Category Eyebrow */}
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme.primaryColor }}
                />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-gray-500 font-semibold">
                  {theme.heroEyebrow}
                </span>
              </div>

              {/* Bold Headline */}
              <h1
                id="hero-main-heading"
                className={`text-4xl sm:text-6xl lg:text-[72px] text-[#1A1A1A] leading-[0.94] tracking-tight font-light ${
                  theme.fontFamily === 'serif' ? 'font-serif' : 'font-sans font-bold'
                }`}
              >
                {theme.heroTitle} <br />
                <span
                  className="italic font-normal"
                  style={{ color: theme.primaryColor }}
                >
                  {theme.heroTitleHighlight}
                </span>
              </h1>

              <p className="font-sans text-xs sm:text-sm tracking-wide max-w-md text-gray-600 leading-relaxed font-normal">
                {theme.heroDescription}
              </p>
            </div>

            {/* Featured Arrival or Anchor Spec Highlight */}
            {featuredProduct && (
              <div className="pt-6 space-y-5">
                <div
                  className="group cursor-pointer pt-3"
                  onClick={onExploreCollection}
                >
                  <div className="text-[9px] font-sans uppercase tracking-[0.35em] mb-1 text-gray-400 font-medium">
                    {isStay ? 'Featured Sanctuary Suite' : isRental ? 'Featured Rental Fleet' : isMachinerySales ? 'Featured Flagship Machine' : isArt ? 'Featured 1-of-1 Original' : 'Featured Signature Release'}
                  </div>
                  <div className="flex justify-between items-end border-b border-[#1A1A1A] pb-3">
                    <div className="font-serif text-lg sm:text-xl text-[#1A1A1A] group-hover:italic transition-all line-clamp-1 pr-2">
                      {featuredProduct.name}
                    </div>
                    <div className="font-sans text-base sm:text-lg font-light text-[#1A1A1A] tracking-tight shrink-0">
                      ${featuredProduct.price.toLocaleString()}
                      {featuredProduct.pricingUnit && (
                        <span className="text-[10px] text-gray-500 ml-1">/{featuredProduct.pricingUnit}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Primary & Secondary Action CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    id="hero-explore-primary-btn"
                    onClick={onExploreCollection}
                    className="bg-[#1A1A1A] text-[#FDFCFB] hover:bg-black px-7 sm:px-9 py-3.5 font-sans text-[10px] uppercase tracking-[0.3em] font-medium transition-all flex items-center gap-2 group shadow-sm"
                  >
                    <span>{theme.heroCtaPrimary}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {onOpenAdvisor && (
                    <button
                      id="hero-advisor-trigger-btn"
                      onClick={onOpenAdvisor}
                      className="border border-[#1A1A1A] px-7 sm:px-9 py-3.5 font-sans text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-medium transition-all flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                      <span>{isStay ? 'Stay Concierge' : isRental ? 'Fleet Quote' : isMachinerySales ? 'Financing Advisor' : isArt ? 'Curator Stylist' : 'Atelier Stylist'}</span>
                    </button>
                  )}
                </div>

                {/* Category Navigation Pills */}
                {store.categories.length > 0 && onSelectCategory && (
                  <div className="pt-3 space-y-2 border-t border-[#E5E1DA]/80">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-semibold font-sans block">
                      Quick Filter by {store.categoryLabel}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {Array.from(new Set(store.categories.filter((c) => c !== 'All')))
                        .slice(0, 5)
                        .map((cat) => (
                          <button
                            key={cat}
                            onClick={() => {
                              onSelectCategory(cat);
                              onExploreCollection();
                            }}
                            className="px-2.5 py-1 bg-[#F2F0ED] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#E5E1DA] text-[10px] font-sans uppercase tracking-wider transition-all"
                          >
                            {cat}
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: High-Impact Visual Showcase (6 cols) */}
          <div className="lg:col-span-6 flex flex-col bg-[#EAE7E2]">
            {/* Main Editorial Image */}
            <div className="relative min-h-[380px] lg:min-h-[420px] overflow-hidden group">
              <img
                id="hero-editorial-img"
                src={theme.heroImage}
                alt={store.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                loading="eager"
              />

              {/* Floating Glass Editorial Caption */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-sm p-4 sm:max-w-xs border border-[#E5E1DA] shadow-xl">
                <div className="text-[9px] font-sans uppercase tracking-[0.35em] mb-1 text-gray-500 font-semibold">
                  Curated Quality
                </div>
                <div className="font-serif text-base font-normal text-[#1A1A1A] mb-1">
                  {store.name} Collection
                </div>
                <div className="text-[11px] font-sans tracking-wide leading-relaxed text-gray-600">
                  {store.tagline}
                </div>
              </div>
            </div>

            {/* Bottom 2-Column Mini Product Preview Cards */}
            {store.products.length > 2 && (
              <div className="grid grid-cols-2 border-t border-[#E5E1DA] bg-[#FDFCFB]">
                {store.products.slice(1, 3).map((prod) => (
                  <div
                    key={prod.id}
                    onClick={onExploreCollection}
                    className="p-4 sm:p-5 flex flex-col justify-between hover:bg-[#F2F0ED]/60 transition-colors cursor-pointer border-r last:border-r-0 border-[#E5E1DA]"
                  >
                    <div className="aspect-[4/3] overflow-hidden mb-2.5 bg-[#F2F0ED] border border-[#E5E1DA]">
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex justify-between items-baseline text-[10px] font-sans uppercase tracking-wider text-[#1A1A1A]">
                      <span className="font-medium truncate pr-2">{prod.name}</span>
                      <span className="font-bold">${prod.price.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 3 Domain Value Proposition Pillars */}
        <div
          id="store-value-pillars-grid"
          className="mt-6 grid grid-cols-1 md:grid-cols-3 border border-[#E5E1DA] bg-[#FDFCFB] divide-y md:divide-y-0 md:divide-x divide-[#E5E1DA]"
        >
          {theme.valueProps.map((prop, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex items-start gap-3.5">
              <div
                className="p-2.5 text-white shrink-0"
                style={{ backgroundColor: theme.primaryColor }}
              >
                {getIcon(prop.icon)}
              </div>
              <div>
                <p className="text-xs font-serif font-semibold text-[#1A1A1A] uppercase tracking-wide">
                  {prop.title}
                </p>
                <p className="text-[11px] font-sans text-gray-500 mt-0.5 leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
