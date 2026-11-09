import React from 'react';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';
import { CurrencyCode } from '../types';
import { StoreProduct } from '../types/storeTypes';
import { formatPrice } from '../utils/formatters';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: StoreProduct[];
  onRemoveWishlist: (productId: string) => void;
  onOpenProductDetail: (product: StoreProduct) => void;
  currency: CurrencyCode;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveWishlist,
  onOpenProductDetail,
  currency
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="wishlist-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        id="wishlist-drawer-panel"
        className="w-full max-w-md bg-[#FDFCFB] h-full shadow-2xl flex flex-col border-l border-[#E5E1DA] animate-in slide-in-from-right duration-300 text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E5E1DA] flex items-center justify-between bg-[#F2F0ED]">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#E07A5F] fill-current" />
            <h2 id="wishlist-drawer-title" className="font-serif text-lg font-normal text-[#1A1A1A] tracking-tight">
              Saved Favorites
            </h2>
            <span className="text-[10px] bg-[#E5E1DA] text-[#1A1A1A] px-2 py-0.5 font-sans font-bold">
              {wishlist.length}
            </span>
          </div>

          <button
            id="close-wishlist-drawer-btn"
            onClick={onClose}
            className="p-1.5 border border-[#E5E1DA] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List of items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 font-sans">
          {wishlist.length === 0 ? (
            <div className="text-center py-16 space-y-3 font-sans">
              <div className="w-12 h-12 mx-auto bg-[#F2F0ED] flex items-center justify-center text-gray-500 border border-[#E5E1DA]">
                <Heart className="w-5 h-5" />
              </div>
              <p className="font-serif text-2xl text-[#1A1A1A] font-light">No Items Saved</p>
              <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed font-sans">
                Tap the heart icon on any product, stay, artwork, or equipment across the shops to curate your private favorites.
              </p>
              <button
                id="wishlist-browse-empty-btn"
                onClick={onClose}
                className="mt-3 px-6 py-3 bg-[#1A1A1A] text-[#FDFCFB] text-[10px] font-sans uppercase tracking-[0.25em] font-medium hover:bg-black transition-colors"
              >
                Explore Shops
              </button>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                id={`wishlist-item-${item.id}`}
                key={item.id}
                className="flex gap-3.5 p-3 bg-[#F2F0ED] border border-[#E5E1DA] relative group font-sans"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-16 h-20 object-cover border border-[#E5E1DA] shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onOpenProductDetail(item);
                  }}
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4
                        onClick={() => {
                          onClose();
                          onOpenProductDetail(item);
                        }}
                        className="font-serif text-sm font-normal text-[#1A1A1A] truncate pr-2 hover:underline cursor-pointer"
                      >
                        {item.name}
                      </h4>
                      <button
                        id={`wishlist-delete-btn-${item.id}`}
                        onClick={() => onRemoveWishlist(item.id)}
                        className="text-gray-400 hover:text-red-700 transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">
                      {item.category}
                    </p>
                    <p className="text-xs font-sans font-medium text-[#1A1A1A] mt-1">
                      {formatPrice(item.price, currency)}
                      {item.pricingUnit && (
                        <span className="text-[10px] text-gray-500 font-normal"> / {item.pricingUnit}</span>
                      )}
                    </p>
                  </div>

                  <button
                    id={`wishlist-view-btn-${item.id}`}
                    onClick={() => {
                      onClose();
                      onOpenProductDetail(item);
                    }}
                    className="mt-2 py-1.5 px-3 bg-[#1A1A1A] hover:bg-black text-[#FDFCFB] text-[9px] font-sans uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View & Configure</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
