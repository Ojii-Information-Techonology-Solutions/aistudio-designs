import React from 'react';
import { StoreProduct, StoreDefinition } from '../types/storeTypes';
import { CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';
import {
  Heart,
  Eye,
  Star,
  Sparkles,
  Truck,
  ShieldCheck,
  Check,
  Calendar,
  User,
  Wrench,
  Layers,
  MapPin
} from 'lucide-react';

interface UnifiedProductCardProps {
  product: StoreProduct;
  store?: StoreDefinition;
  businessModel?: string;
  currency: CurrencyCode;
  isWishlisted: boolean;
  onToggleWishlist: (product: StoreProduct) => void;
  onQuickView: (product: StoreProduct) => void;
  onSelectProduct?: (product: StoreProduct) => void;
  onOpenDetail?: (product: StoreProduct) => void;
}

export const UnifiedProductCard: React.FC<UnifiedProductCardProps> = ({
  product,
  store,
  businessModel,
  currency,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onSelectProduct,
  onOpenDetail
}) => {
  const handleSelect = onSelectProduct || onOpenDetail || onQuickView;
  const activeBusinessModel = store?.businessModel || businessModel || 'ecommerce';
  const primaryColor = store?.theme?.primaryColor || '#C5A059';

  const isStay = activeBusinessModel === 'booking-stay';
  const isRental = activeBusinessModel === 'rental-equipment';
  const isMachinerySales = activeBusinessModel === 'industrial-sales';
  const isArt = activeBusinessModel === 'art-gallery';

  const actionButtonText = isStay
    ? 'Reserve Stay'
    : isRental
    ? 'Rent Equipment'
    : isMachinerySales
    ? 'Inspect Machinery'
    : isArt
    ? 'View Artwork'
    : 'Examine & Select';

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col bg-white border border-[#E5E1DA] hover:border-[#1A1A1A] transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
    >
      {/* Product Image Container */}
      <div
        className="relative aspect-[4/5] bg-[#F5F2EC] overflow-hidden cursor-pointer"
        onClick={() => handleSelect(product)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestseller && (
            <span
              className="text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 text-white font-medium shadow-sm"
              style={{ backgroundColor: primaryColor }}
            >
              {isStay ? 'Superhost' : isRental ? 'Popular Plant' : 'Bestseller'}
            </span>
          )}
          {product.isNewArrival && (
            <span className="text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#1A1A1A] text-white font-medium shadow-sm">
              {isArt ? 'Salon 2026' : 'New Arrival'}
            </span>
          )}
          {isStay && product.extraMeta?.location && (
            <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider px-2 py-0.5 bg-black/75 backdrop-blur-md text-white">
              <MapPin className="w-2.5 h-2.5 text-[#0F766E]" /> {product.extraMeta.location}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 ${
            isWishlisted
              ? 'bg-[#1A1A1A] text-[#E07A5F]'
              : 'bg-white/80 hover:bg-white text-gray-700 hover:text-black'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Strip */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between gap-2 z-10">
          <button
            id={`quick-action-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(product);
            }}
            className="flex-1 py-2 px-3 bg-white text-black hover:bg-black hover:text-white text-[10px] font-sans font-medium uppercase tracking-[0.2em] transition-colors text-center"
          >
            {actionButtonText}
          </button>
          <button
            id={`quick-view-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
            title="Quick Preview"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Category / Sub-meta */}
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-gray-500 font-sans mb-1.5">
            <span>{product.category}</span>
            <div className="flex items-center gap-1 text-amber-500 font-medium">
              <Star className="w-3 h-3 fill-current" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-gray-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => handleSelect(product)}
            className="font-serif text-base sm:text-lg text-[#1A1A1A] group-hover:text-black font-normal line-clamp-1 cursor-pointer tracking-tight"
          >
            {product.name}
          </h3>

          {/* Subtitle / Spec summary */}
          <p className="text-[11px] text-gray-500 font-sans mt-1 line-clamp-1">
            {product.subTitle || product.tagLine}
          </p>

          {/* Specialized Domain Tags */}
          <div className="mt-2.5 flex flex-wrap gap-1">
            {isStay && product.extraMeta && (
              <>
                <span className="text-[9px] bg-[#F0FDFA] text-[#0F766E] px-2 py-0.5 border border-[#CCFBF1]">
                  {product.extraMeta.maxGuests} Guests • {product.extraMeta.bedrooms} Bedrooms
                </span>
                {product.extraMeta.amenities?.[0] && (
                  <span className="text-[9px] bg-gray-100 text-gray-700 px-2 py-0.5">
                    {product.extraMeta.amenities[0]}
                  </span>
                )}
              </>
            )}

            {isRental && product.extraMeta && (
              <span className="text-[9px] bg-amber-50 text-amber-900 px-2 py-0.5 border border-amber-200 font-mono">
                Operator Available • Daily/Weekly Hire
              </span>
            )}

            {isMachinerySales && product.extraMeta && (
              <span className="text-[9px] bg-orange-50 text-orange-900 px-2 py-0.5 border border-orange-200 font-mono">
                {product.extraMeta.tonnage} • {product.extraMeta.horsepower}
              </span>
            )}

            {isArt && product.extraMeta && (
              <span className="text-[9px] bg-purple-50 text-purple-900 px-2 py-0.5 border border-purple-200">
                {product.extraMeta.medium} • {product.extraMeta.dimensions}
              </span>
            )}
          </div>
        </div>

        {/* Price & Primary CTA */}
        <div className="mt-4 pt-3 border-t border-[#F0ECE1] flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg font-medium text-[#1A1A1A]">
                {formatPrice(product.price, currency)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {formatPrice(product.originalPrice, currency)}
                </span>
              )}
            </div>
            {product.pricingUnit && (
              <span className="text-[9px] font-sans uppercase tracking-wider text-gray-500 block">
                {product.pricingUnit}
              </span>
            )}
          </div>

          <button
            onClick={() => handleSelect(product)}
            className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium px-3 py-1.5 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
