import React, { useState } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  Sparkles,
  Scissors,
  Check,
  Truck,
  ShieldCheck,
  Ruler,
  Star,
  ChevronRight
} from 'lucide-react';
import { Dress, CharleneCartItem } from '../types';
import { CurrencyCode } from '../../../types';
import { formatPrice } from '../../../utils/formatters';

interface CharleneDressModalProps {
  dress: Dress | null;
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  isWishlisted: boolean;
  onToggleWishlist: (dress: Dress) => void;
  onAddToCart: (item: CharleneCartItem) => void;
  onOpenSizingGuide: () => void;
}

export const CharleneDressModal: React.FC<CharleneDressModalProps> = ({
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

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(dress.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState<string>(dress.sizes[0] || 'US 2 (S)');
  const [quantity, setQuantity] = useState(1);
  const [customHemming, setCustomHemming] = useState('');
  const [giftPackaging, setGiftPackaging] = useState(true);
  const [activeTab, setActiveTab] = useState<'details' | 'craftsmanship' | 'specs' | 'fit'>('details');

  const handleAdd = () => {
    const cartItem: CharleneCartItem = {
      id: `${dress.id}-${selectedColor}-${selectedSize}-${Date.now()}`,
      dressId: dress.id,
      name: dress.name,
      image: dress.images[activeImageIndex] || dress.images[0],
      price: dress.price,
      quantity,
      selectedColor,
      selectedSize,
      customHemmingLength: customHemming.trim() ? customHemming : undefined,
      complimentaryGiftPackaging: giftPackaging,
      specialInstructions: dress.isMadeToOrder ? 'Atelier Made-to-Order Production' : undefined
    };

    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FDFCFB] w-full max-w-5xl border border-[#E5E1DA] my-auto max-h-[92vh] overflow-y-auto text-[#181615] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#F2F0ED] border border-[#E5E1DA] hover:bg-[#181615] hover:text-white text-[#181615] z-20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[3/4] bg-[#F2F0ED] border border-[#E5E1DA] overflow-hidden">
              <img
                src={dress.images[activeImageIndex] || dress.images[0]}
                alt={dress.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans px-2.5 py-1 bg-[#181615] text-[#FAF6F0]">
                  {dress.fabric}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans px-2.5 py-1 bg-[#C5A059] text-white">
                  {dress.silhouette} Cut
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {dress.images.length > 1 && (
              <div className="flex gap-2">
                {dress.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-20 border overflow-hidden transition-all ${
                      activeImageIndex === idx ? 'border-[#181615] scale-95' : 'border-[#E5E1DA] opacity-70'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Model & Fit Reference Box */}
            <div className="p-4 bg-[#F2F0ED] border border-[#E5E1DA] space-y-1.5 text-xs font-sans text-gray-700">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#181615] uppercase tracking-wider">
                <Ruler className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Atelier Fit Reference</span>
              </div>
              <p>
                <strong>Model is:</strong> {dress.modelStats.height} • Bust/Waist/Hips: {dress.modelStats.bustWaistHips}
              </p>
              <p>
                <strong>Wearing Size:</strong> {dress.modelStats.wearingSize}
              </p>
            </div>
          </div>

          {/* Right Column: Specifications & Configuration */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-gray-500 font-sans">
                <span>{dress.category} • {dress.occasion}</span>
                <div className="flex items-center gap-1 text-[#181615]">
                  <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  <span className="font-medium">{dress.rating}</span>
                  <span className="text-gray-400">({dress.reviewCount})</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#181615] font-light leading-tight">
                  {dress.name}
                </h2>
                <p className="text-xs text-gray-500 font-sans mt-1">
                  {dress.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-1 border-b border-[#E5E1DA] pb-4">
                <span className="font-serif text-2xl font-normal text-[#181615]">
                  {formatPrice(dress.price, currency)}
                </span>
                {dress.originalPrice && (
                  <span className="text-xs text-gray-400 line-through font-sans">
                    {formatPrice(dress.originalPrice, currency)}
                  </span>
                )}
                {dress.isMadeToOrder && (
                  <span className="ml-auto text-[10px] uppercase tracking-wider font-sans font-medium px-2 py-0.5 bg-[#F2F0ED] text-[#181615] border border-[#E5E1DA]">
                    Made to Order (~{dress.leadTimeWeeks} Weeks)
                  </span>
                )}
              </div>

              {/* Color Selection */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-wider font-sans font-medium text-gray-700 block">
                  Silk Colorway: <span className="text-[#181615] font-bold">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {dress.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 border text-xs font-sans transition-all ${
                        selectedColor === c.name
                          ? 'border-[#181615] bg-[#F2F0ED] font-medium'
                          : 'border-[#E5E1DA] hover:border-gray-400'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-[#E5E1DA]"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] uppercase tracking-wider font-sans font-medium text-gray-700">
                    Select Size
                  </label>
                  <button
                    onClick={onOpenSizingGuide}
                    className="text-[10px] uppercase tracking-wider text-[#C5A059] hover:underline flex items-center gap-1"
                  >
                    <Scissors className="w-3 h-3" />
                    <span>Sizing &amp; Measurement Guide</span>
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {dress.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-[11px] font-sans uppercase tracking-wider border transition-all text-center ${
                        selectedSize === sz
                          ? 'border-[#181615] bg-[#181615] text-[#FAF6F0] font-medium'
                          : 'border-[#E5E1DA] bg-[#F2F0ED] text-[#181615] hover:border-black'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Hemming Length Option */}
              <div className="p-3.5 bg-[#F2F0ED] border border-[#E5E1DA] space-y-2 text-xs font-sans">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-medium text-[#181615]">
                    Bespoke Hemming &amp; Heel Height (Optional):
                  </span>
                  <span className="text-[10px] text-[#C5A059] font-medium uppercase">Complimentary</span>
                </div>
                <input
                  type="text"
                  value={customHemming}
                  onChange={(e) => setCustomHemming(e.target.value)}
                  placeholder="e.g. Hemmed for 90mm heels (Height: 5'8&quot;)"
                  className="w-full text-xs p-2 bg-white border border-[#E5E1DA] text-[#181615] focus:outline-none focus:border-[#181615]"
                />
              </div>

              {/* Accordion Tabs for Story, Craftsmanship, Specs */}
              <div className="border-t border-[#E5E1DA] pt-3">
                <div className="flex border-b border-[#E5E1DA] text-xs font-sans uppercase tracking-wider">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-2 px-2 transition-colors ${
                      activeTab === 'details' ? 'border-b-2 border-[#181615] font-bold text-[#181615]' : 'text-gray-400'
                    }`}
                  >
                    Atelier Note
                  </button>
                  <button
                    onClick={() => setActiveTab('craftsmanship')}
                    className={`pb-2 px-2 transition-colors ${
                      activeTab === 'craftsmanship' ? 'border-b-2 border-[#181615] font-bold text-[#181615]' : 'text-gray-400'
                    }`}
                  >
                    Craftsmanship
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 px-2 transition-colors ${
                      activeTab === 'specs' ? 'border-b-2 border-[#181615] font-bold text-[#181615]' : 'text-gray-400'
                    }`}
                  >
                    Garment Specs
                  </button>
                </div>

                <div className="py-3 text-xs text-gray-600 font-sans leading-relaxed min-h-[80px]">
                  {activeTab === 'details' && (
                    <div className="space-y-2">
                      <p>{dress.description}</p>
                      <p className="italic text-gray-500 font-serif text-[13px]">{dress.story}</p>
                    </div>
                  )}
                  {activeTab === 'craftsmanship' && (
                    <ul className="space-y-1.5 list-disc pl-4">
                      {dress.craftsmanship.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  )}
                  {activeTab === 'specs' && (
                    <div className="space-y-1 text-[11px]">
                      <p><strong>Length:</strong> {dress.specs.length}</p>
                      <p><strong>Lining:</strong> {dress.specs.lining}</p>
                      <p><strong>Closure:</strong> {dress.specs.closure}</p>
                      <p><strong>Care:</strong> {dress.specs.care}</p>
                      <p><strong>Origin:</strong> {dress.specs.origin}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="space-y-3 pt-4 border-t border-[#E5E1DA]">
              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 py-4 bg-[#181615] hover:bg-black text-[#FAF6F0] text-xs font-sans uppercase tracking-[0.25em] font-medium transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
                  <span>
                    Add to Bag • {formatPrice(dress.price * quantity, currency)}
                  </span>
                </button>

                <button
                  onClick={() => onToggleWishlist(dress)}
                  className="p-4 border border-[#E5E1DA] hover:border-[#181615] text-[#181615] bg-[#F2F0ED] transition-colors"
                  aria-label="Wishlist toggle"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWishlisted ? 'fill-[#800B1B] text-[#800B1B]' : 'text-gray-600'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-gray-500 font-sans pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-3 h-3 text-[#181615]" />
                  Insured White-Glove Dispatch
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#181615]" />
                  Atelier Guarantee of Authenticity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
