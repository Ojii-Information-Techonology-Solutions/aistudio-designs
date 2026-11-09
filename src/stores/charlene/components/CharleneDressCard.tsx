import React from 'react';
import { Heart, Sparkles, Star, Eye } from 'lucide-react';
import { Dress } from '../types';
import { CurrencyCode } from '../../../types';
import { formatPrice } from '../../../utils/formatters';

interface CharleneDressCardProps {
  dress: Dress;
  currency: CurrencyCode;
  isWishlisted: boolean;
  onToggleWishlist: (dress: Dress) => void;
  onQuickView: (dress: Dress) => void;
  onOpenDetail: (dress: Dress) => void;
}

export const CharleneDressCard: React.FC<CharleneDressCardProps> = ({
  dress,
  currency,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onOpenDetail
}) => {
  return (
    <div className="group flex flex-col bg-[#FDFCFB] border border-[#E5E1DA] hover:border-[#181615] transition-all duration-300">
      {/* Image Showcase Container */}
      <div
        className="relative aspect-[3/4] bg-[#F2F0ED] overflow-hidden cursor-pointer"
        onClick={() => onOpenDetail(dress)}
      >
        <img
          src={dress.images[0]}
          alt={dress.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Secondary image hover effect if available */}
        {dress.images[1] && (
          <img
            src={dress.images[1]}
            alt={`${dress.name} alternative`}
            className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
          />
        )}

        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {dress.isMadeToOrder && (
            <span className="text-[9px] uppercase tracking-[0.2em] font-sans px-2.5 py-1 bg-[#181615] text-[#FAF6F0] font-medium">
              Made to Order ({dress.leadTimeWeeks}w)
            </span>
          )}
          {dress.isBestseller && (
            <span className="text-[9px] uppercase tracking-[0.2em] font-sans px-2.5 py-1 bg-[#C5A059] text-white font-medium">
              Atelier Bestseller
            </span>
          )}
          {dress.isNewArrival && (
            <span className="text-[9px] uppercase tracking-[0.2em] font-sans px-2.5 py-1 bg-[#4A1521] text-white font-medium">
              New Season
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(dress);
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-[#181615] rounded-full shadow-sm z-10 transition-transform active:scale-90"
          aria-label={isWishlisted ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-3.5 h-3.5 ${
              isWishlisted ? 'fill-[#800B1B] text-[#800B1B]' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Quick View Bar */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(dress);
            }}
            className="w-full py-2 bg-white/95 text-[#181615] hover:bg-black hover:text-white text-[10px] uppercase tracking-[0.25em] font-sans font-medium transition-colors text-center"
          >
            Quick Inspect &amp; Fit
          </button>
        </div>
      </div>

      {/* Info Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-gray-500 font-sans">
            <span>{dress.silhouette} • {dress.fabric}</span>
            <div className="flex items-center gap-1 text-[#181615]">
              <Star className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
              <span>{dress.rating}</span>
            </div>
          </div>

          <h3
            onClick={() => onOpenDetail(dress)}
            className="font-serif text-base text-[#181615] hover:text-[#C5A059] cursor-pointer transition-colors leading-snug line-clamp-1"
          >
            {dress.name}
          </h3>

          <p className="text-[11px] text-gray-600 font-sans line-clamp-1">
            {dress.subtitle}
          </p>
        </div>

        {/* Bottom Swatches & Price */}
        <div className="pt-2 border-t border-[#E5E1DA] flex items-center justify-between">
          {/* Color swatches */}
          <div className="flex items-center gap-1.5">
            {dress.colors.map((c) => (
              <span
                key={c.name}
                className="w-3 h-3 rounded-full border border-[#E5E1DA] shadow-xs"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>

          <div className="text-right">
            <span className="font-serif text-sm font-normal text-[#181615]">
              {formatPrice(dress.price, currency)}
            </span>
            {dress.originalPrice && (
              <span className="text-[10px] text-gray-400 line-through ml-1.5 font-sans">
                {formatPrice(dress.originalPrice, currency)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
