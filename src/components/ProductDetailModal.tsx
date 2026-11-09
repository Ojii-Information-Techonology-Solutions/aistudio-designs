import React, { useState } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  Sparkles,
  Scissors,
  Truck,
  ShieldCheck,
  Star,
  Check,
  ChevronRight,
  Gift,
  Ruler,
  Info
} from 'lucide-react';
import { CurrencyCode, DressColorOption, DressProduct } from '../types';
import { formatPrice, calculateEstimatedDeliveryDate } from '../utils/formatters';

interface ProductDetailModalProps {
  dress: DressProduct | null;
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  isWishlisted: boolean;
  onToggleWishlist: (dress: DressProduct) => void;
  onAddToCart: (
    dress: DressProduct,
    color: DressColorOption,
    size: string,
    quantity: number,
    giftPackaging: boolean,
    alterationNote?: string
  ) => void;
  onOpenSizingGuide: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  dress,
  isOpen,
  onClose,
  currency,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onOpenSizingGuide
}) => {
  if (!isOpen || !dress) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<DressColorOption>(dress.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(
    dress.sizes.find((s) => s.inStock)?.size || dress.sizes[0].size
  );
  const [quantity, setQuantity] = useState(1);
  const [includeGiftPackaging, setIncludeGiftPackaging] = useState(true);
  const [alterationNote, setAlterationNote] = useState('');
  const [activeTab, setActiveTab] = useState<'details' | 'craftsmanship' | 'reviews'>('details');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(
      dress,
      selectedColor,
      selectedSize,
      quantity,
      includeGiftPackaging,
      alterationNote.trim() ? alterationNote : undefined
    );
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 900);
  };

  const selectedSizeObj = dress.sizes.find((s) => s.size === selectedSize);

  return (
    <div
      id="product-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="product-detail-modal-container"
        className="relative bg-[#FDFCFB] w-full max-w-5xl shadow-2xl border border-[#E5E1DA] overflow-hidden my-auto max-h-[92vh] flex flex-col text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-product-detail-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FDFCFB] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#E5E1DA] transition-colors"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto p-5 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Gallery Left (5 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Display Image */}
              <div className="relative aspect-3/4 overflow-hidden bg-[#F2F0ED] border border-[#E5E1DA]">
                <img
                  id="modal-main-dress-image"
                  src={dress.images[selectedImageIndex] || dress.images[0]}
                  alt={dress.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Fabric Origin Badge */}
                <div className="absolute top-3 left-3 bg-[#1A1A1A]/90 text-[#FDFCFB] text-[9px] uppercase tracking-[0.25em] px-2.5 py-1 font-sans font-medium">
                  {dress.fabricOrigin}
                </div>
              </div>

              {/* Thumbnails */}
              {dress.images.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {dress.images.map((img, idx) => (
                    <button
                      id={`modal-thumb-btn-${idx}`}
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-16 h-20 overflow-hidden border transition-all shrink-0 ${
                        selectedImageIndex === idx ? 'border-[#1A1A1A] ring-1 ring-[#1A1A1A]' : 'border-[#E5E1DA] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Model Specifications */}
              <div className="p-3.5 bg-[#F2F0ED] border border-[#E5E1DA] text-xs space-y-1 text-gray-600 font-sans">
                <p className="font-serif font-normal text-[#1A1A1A] text-sm">Maison Model Measurements:</p>
                <p className="text-[11px]">
                  Height: <strong className="text-[#1A1A1A]">{dress.modelInfo.height}</strong> • Wearing Size: <strong className="text-[#1A1A1A]">{dress.modelInfo.wearingSize}</strong> • Bust: {dress.modelInfo.bust} • Waist: {dress.modelInfo.waist} • Hips: {dress.modelInfo.hips}
                </p>
              </div>
            </div>

            {/* Product Configuration Right (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Silhouette & French Subtitle */}
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-gray-500 font-sans font-semibold">
                  <span>{dress.category}</span>
                  <span className="text-[#1A1A1A]">{dress.silhouette} Silhouette</span>
                </div>

                <h2 id="modal-dress-name" className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A] mt-1 tracking-tight">
                  {dress.name}
                </h2>
                <p className="text-xs italic text-gray-500 font-serif">{dress.frenchTitle}</p>

                {/* Rating & Reviews summary */}
                <div className="flex items-center gap-3 mt-2 font-sans">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-semibold text-xs text-[#1A1A1A]">{dress.rating.toFixed(2)}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-light">({dress.reviewCount} Verified Couture Reviews)</span>
                  <span className="text-[10px] text-[#1A1A1A] bg-[#E5E1DA] px-2 py-0.5 uppercase tracking-wider font-medium font-sans">
                    100% Fit Guarantee
                  </span>
                </div>

                {/* Price Display */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span id="modal-dress-price" className="text-2xl sm:text-3xl font-sans font-light text-[#1A1A1A] tracking-tight">
                    {formatPrice(dress.price, currency)}
                  </span>
                  {dress.originalPrice && (
                    <span className="text-sm text-gray-400 line-through font-sans">
                      {formatPrice(dress.originalPrice, currency)}
                    </span>
                  )}
                  <span className="text-xs text-gray-500 font-sans">
                    • Complimentary Hemming
                  </span>
                </div>

                {/* Color Selection */}
                <div className="mt-5 space-y-2 font-sans">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#1A1A1A]">
                      Color Shade: <span className="font-normal text-gray-500">{selectedColor.name}</span>
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {dress.colors.map((c) => (
                      <button
                        id={`modal-color-opt-${c.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        key={c.name}
                        onClick={() => setSelectedColor(c)}
                        className={`flex items-center gap-2 px-3 py-1.5 border text-xs font-sans transition-all ${
                          selectedColor.name === c.name
                            ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-xs'
                            : 'border-[#E5E1DA] hover:border-[#1A1A1A] bg-transparent text-[#1A1A1A]'
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                        <span>{c.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mt-5 space-y-2 font-sans">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#1A1A1A]">Select Size:</span>
                    <button
                      id="modal-sizing-guide-trigger"
                      onClick={onOpenSizingGuide}
                      className="text-[#1A1A1A] hover:underline font-medium flex items-center gap-1 transition-colors text-[11px] uppercase tracking-wider"
                    >
                      <Ruler className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Sizing Guide & Fit Assistant</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {dress.sizes.map((s) => (
                      <button
                        id={`modal-size-opt-${s.size.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        key={s.size}
                        disabled={!s.inStock}
                        onClick={() => setSelectedSize(s.size)}
                        className={`py-2.5 px-2 border text-xs text-center transition-all ${
                          !s.inStock
                            ? 'opacity-40 border-dashed border-[#E5E1DA] cursor-not-allowed bg-transparent text-gray-400'
                            : selectedSize === s.size
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-medium'
                            : 'bg-transparent text-[#1A1A1A] border-[#E5E1DA] hover:border-[#1A1A1A]'
                        }`}
                      >
                        <div className="truncate">{s.size}</div>
                        {s.remaining && s.remaining <= 2 && (
                          <div className="text-[9px] text-[#A84520] font-sans font-medium">Only {s.remaining} left</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bespoke Tailoring & Heel Height Note */}
                <div className="mt-4 p-3.5 bg-[#F2F0ED] border border-[#E5E1DA] space-y-2 font-sans">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1A1A1A]">
                    <Scissors className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Complimentary Atelier Hemming Adjustment</span>
                  </div>
                  <input
                    id="modal-alteration-input"
                    type="text"
                    placeholder="E.g., Wearing 90mm heels, shorten hem by 2cm, or standard fit"
                    value={alterationNote}
                    onChange={(e) => setAlterationNote(e.target.value)}
                    className="w-full text-xs p-2.5 bg-white border border-[#E5E1DA] text-[#1A1A1A] focus:outline-hidden focus:border-[#1A1A1A] font-sans"
                  />
                </div>

                {/* Gift packaging option */}
                <label className="mt-3 flex items-start gap-2.5 text-xs text-gray-600 cursor-pointer select-none font-sans">
                  <input
                    id="modal-gift-packaging-checkbox"
                    type="checkbox"
                    checked={includeGiftPackaging}
                    onChange={(e) => setIncludeGiftPackaging(e.target.checked)}
                    className="w-3.5 h-3.5 mt-0.5 accent-[#1A1A1A] cursor-pointer"
                  />
                  <span>
                    <strong className="text-[#1A1A1A]">Complimentary Maison Gift Trunk</strong> • Silk ribbon, cedar garment preservation hanger & custom handwritten wax-sealed note.
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-[#E5E1DA]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#E5E1DA] bg-[#F2F0ED]">
                    <button
                      id="modal-qty-decrease-btn"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-3 text-xs text-[#1A1A1A] hover:bg-[#E5E1DA] transition-colors"
                    >
                      -
                    </button>
                    <span id="modal-qty-display" className="px-3 text-xs font-semibold text-[#1A1A1A]">{quantity}</span>
                    <button
                      id="modal-qty-increase-btn"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-3 text-xs text-[#1A1A1A] hover:bg-[#E5E1DA] transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    id="modal-add-to-bag-btn"
                    onClick={handleAddToCart}
                    className={`flex-1 py-3.5 px-6 text-xs font-sans uppercase tracking-[0.25em] font-semibold transition-all flex items-center justify-center gap-2 ${
                      addedAnimation
                        ? 'bg-[#1C5834] text-white'
                        : 'bg-[#1A1A1A] hover:bg-black text-[#FDFCFB]'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Atelier Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#FDFCFB]" />
                        <span>Add to Bag • {formatPrice(dress.price * quantity, currency)}</span>
                      </>
                    )}
                  </button>

                  <button
                    id="modal-wishlist-toggle-btn"
                    onClick={() => onToggleWishlist(dress)}
                    className={`p-3.5 border transition-colors ${
                      isWishlisted
                        ? 'bg-[#1A1A1A] text-[#C5A059] border-[#1A1A1A]'
                        : 'border-[#E5E1DA] text-[#1A1A1A] hover:bg-[#F2F0ED]'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Delivery guarantee info */}
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-gray-500 font-sans pt-1">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Est. Delivery: {calculateEstimatedDeliveryDate(4)}</span>
                  </span>
                  <span>Free 30-Day Atelier Returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Tabs Section: Details, Craftsmanship, Reviews */}
          <div className="mt-10 pt-6 border-t border-[#E5E1DA]">
            <div className="flex border-b border-[#E5E1DA] gap-8">
              {[
                { id: 'details', label: 'Dress Silhouette & Fabric' },
                { id: 'craftsmanship', label: 'Atelier Craft & Care' },
                { id: 'reviews', label: `Reviews (${dress.reviews.length})` }
              ].map((tab) => (
                <button
                  id={`modal-tab-btn-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 text-[10px] uppercase tracking-[0.25em] font-sans transition-all relative ${
                    activeTab === tab.id
                      ? 'text-[#1A1A1A] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1A1A1A]'
                      : 'text-gray-400 hover:text-[#1A1A1A]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="py-6">
              {activeTab === 'details' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600 leading-relaxed font-sans">
                  <div>
                    <p className="font-serif text-base font-normal text-[#1A1A1A] mb-2">Description</p>
                    <p>{dress.description}</p>
                    <div className="mt-4 space-y-1.5 text-[11px]">
                      <p><strong className="text-[#1A1A1A]">Neckline:</strong> {dress.neckline}</p>
                      <p><strong className="text-[#1A1A1A]">Length:</strong> {dress.length}</p>
                      <p><strong className="text-[#1A1A1A]">Occasion:</strong> {dress.occasions.join(' • ')}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-serif text-base font-normal text-[#1A1A1A] mb-2">Artisanal Details</p>
                    <ul className="space-y-1.5 list-disc pl-4 text-[11px]">
                      {dress.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'craftsmanship' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600 font-sans">
                  <div className="space-y-2">
                    <p className="font-serif text-base font-normal text-[#1A1A1A]">Master Atelier Notes</p>
                    <p className="leading-relaxed text-[11px]">{dress.atelierNotes}</p>
                    <div className="mt-3 space-y-1 text-[11px]">
                      <p><strong className="text-[#1A1A1A]">Fabric Composition:</strong> {dress.fabric}</p>
                      <p><strong className="text-[#1A1A1A]">Maison Origin:</strong> {dress.fabricOrigin}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-serif text-base font-normal text-[#1A1A1A]">Care & Preservation</p>
                    <p className="leading-relaxed text-[11px]">{dress.careInstructions}</p>
                    <div className="p-3.5 bg-[#F2F0ED] border border-[#E5E1DA] text-[11px] mt-2 text-gray-700">
                      All orders arrive in an archival acid-free garment cover with natural cedar moth repellent blocks.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4 font-sans">
                  {dress.reviews.length > 0 ? (
                    dress.reviews.map((rev) => (
                      <div id={`review-item-${rev.id}`} key={rev.id} className="p-4 bg-[#F2F0ED] border border-[#E5E1DA] space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-normal text-sm text-[#1A1A1A]">{rev.author}</span>
                            <span className="text-gray-400">({rev.location})</span>
                            {rev.verified && (
                              <span className="text-[9px] bg-[#E5E1DA] text-[#1A1A1A] px-2 py-0.5 uppercase tracking-wider font-semibold font-sans">
                                Verified Couture Purchase
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider">{rev.date}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex text-[#C5A059]">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-medium text-[#1A1A1A]">{rev.title}</span>
                        </div>

                        <p className="text-xs text-gray-600 leading-relaxed">{rev.comment}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                          Size Purchased: <strong className="text-[#1A1A1A]">{rev.sizePurchased}</strong> • Fit Feedback: <strong className="text-[#1A1A1A]">{rev.fitFeedback}</strong>
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-xs text-gray-400">
                      <p>Be the first to review this new couture silhouette from our recent Paris presentation.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
