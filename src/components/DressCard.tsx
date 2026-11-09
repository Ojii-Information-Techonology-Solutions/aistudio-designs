import React, { useState } from 'react';
import { Heart, Eye, Sparkles, Star } from 'lucide-react';
import { CurrencyCode, DressProduct } from '../types';
import { formatPrice } from '../utils/formatters';

interface DressCardProps {
  dress: DressProduct;
  currency: CurrencyCode;
  isWishlisted: boolean;
  onToggleWishlist: (dress: DressProduct) => void;
  onQuickView: (dress: DressProduct) => void;
  onOpenProductDetail: (dress: DressProduct) => void;
}

export const DressCard: React.FC<DressCardProps> = ({
  dress,
  currency,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onOpenProductDetail
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (dress.images.length > 1) {
      setActiveImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveImageIndex(0);
  };

  return (
    <div
      id={`dress-card-${dress.id}`}
      className="group relative flex flex-col bg-[#FDFCFB] border border-[#E5E1DA] hover:border-[#1A1A1A] overflow-hidden transition-all duration-300 shadow-xs"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Showcase Container */}
      <div className="relative aspect-3/4 bg-[#F2F0ED] overflow-hidden cursor-pointer" onClick={() => onOpenProductDetail(dress)}>
        <img
          id={`dress-image-${dress.id}`}
          src={dress.images[activeImageIndex] || dress.images[0]}
          alt={dress.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {dress.isBestseller && (
            <span className="px-2.5 py-1 bg-[#1A1A1A] text-[#FDFCFB] text-[8px] uppercase font-sans font-medium tracking-[0.3em] shadow-xs">
              Maison Bestseller
            </span>
          )}
          {dress.isNewArrival && (
            <span className="px-2.5 py-1 bg-[#C5A059] text-white text-[8px] uppercase font-sans font-medium tracking-[0.3em] shadow-xs">
              New Arrival
            </span>
          )}
          {dress.isMadeToOrder && (
            <span className="px-2.5 py-1 bg-white/95 text-[#1A1A1A] border border-[#E5E1DA] text-[8px] uppercase font-sans font-medium tracking-[0.3em] shadow-xs">
              Made to Order
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          id={`wishlist-btn-${dress.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(dress);
          }}
          className={`absolute top-3 right-3 p-2 backdrop-blur-md transition-all duration-200 z-10 ${
            isWishlisted
              ? 'bg-[#1A1A1A] text-white shadow-md'
              : 'bg-white/90 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white border border-[#E5E1DA]'
          }`}
          aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current text-white' : ''}`} />
        </button>

        {/* Quick View Button (Slide up on hover) */}
        <div className="absolute inset-x-3 bottom-3 z-10 transition-all duration-300 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            id={`quick-view-btn-${dress.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(dress);
            }}
            className="w-full py-3 bg-[#1A1A1A] hover:bg-black text-white text-[9px] font-sans uppercase tracking-[0.25em] font-medium shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Examine & Tailor</span>
          </button>
        </div>
      </div>

      {/* Dress Content & Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-3 bg-[#FDFCFB] border-t border-[#E5E1DA]">
        <div>
          {/* Category & Origin */}
          <div className="flex items-center justify-between text-[9px] text-gray-500 tracking-[0.3em] uppercase font-sans">
            <span>{dress.silhouette}</span>
            <span>{dress.fabricOrigin.split(',')[0]}</span>
          </div>

          {/* Dress Title */}
          <h3
            id={`dress-title-${dress.id}`}
            onClick={() => onOpenProductDetail(dress)}
            className="font-serif text-lg font-normal text-[#1A1A1A] mt-1 cursor-pointer group-hover:italic transition-all leading-snug truncate"
          >
            {dress.name}
          </h3>

          <p className="text-[10px] text-gray-500 italic font-serif -mt-0.5">{dress.frenchTitle}</p>

          <p className="text-xs text-gray-600 line-clamp-2 mt-1.5 font-sans font-normal leading-relaxed">
            {dress.tagLine}
          </p>
        </div>

        {/* Color swatches & Price */}
        <div className="pt-3 border-t border-[#E5E1DA] flex items-center justify-between">
          {/* Swatches */}
          <div className="flex items-center gap-1.5">
            {dress.colors.map((c, i) => (
              <button
                key={c.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColorIndex(i);
                }}
                className={`w-3.5 h-3.5 border transition-transform ${
                  selectedColorIndex === i ? 'scale-125 border-[#1A1A1A] shadow-xs' : 'border-black/20 hover:scale-110'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
                aria-label={`Select color ${c.name}`}
              />
            ))}
            <span className="text-[9px] text-gray-400 ml-1 font-sans uppercase tracking-widest">
              {dress.colors.length} {dress.colors.length === 1 ? 'tone' : 'tones'}
            </span>
          </div>

          {/* Pricing */}
          <div className="text-right">
            <div className="flex items-baseline gap-1.5 justify-end">
              {dress.originalPrice && (
                <span className="text-[10px] text-gray-400 line-through font-sans">
                  {formatPrice(dress.originalPrice, currency)}
                </span>
              )}
              <span id={`dress-price-${dress.id}`} className="text-base font-sans font-light text-[#1A1A1A] tracking-tight">
                {formatPrice(dress.price, currency)}
              </span>
            </div>
            <div className="flex items-center justify-end gap-1 text-[10px] text-[#C5A059] mt-0.5">
              <Star className="w-3 h-3 fill-current" />
              <span className="font-semibold text-[#1A1A1A]">{dress.rating.toFixed(1)}</span>
              <span className="text-gray-400">({dress.reviewCount})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
