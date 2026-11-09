import React, { useState } from 'react';
import { ClarissaProduct } from '../types';
import {
  X,
  Star,
  UtensilsCrossed,
  Wine,
  Sparkles,
  ShieldCheck,
  Award,
  ShoppingBag
} from 'lucide-react';

interface ClarissaProductModalProps {
  product: ClarissaProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (
    product: ClarissaProduct,
    quantity: number,
    options: { glaze?: string; giftBox?: boolean; monogram?: string }
  ) => void;
}

export const ClarissaProductModal: React.FC<ClarissaProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart
}) => {
  if (!isOpen || !product) return null;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedGlaze, setSelectedGlaze] = useState(
    product.colorGlazeOptions ? product.colorGlazeOptions[0]?.name : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [includeGiftBox, setIncludeGiftBox] = useState(true);
  const [monogram, setMonogram] = useState('');

  const calculateTotal = () => {
    let unit = product.price;
    if (includeGiftBox) unit += 18;
    if (monogram.trim()) unit += 25;
    return unit * quantity;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] w-full max-w-4xl border border-[#EBE5DC] my-auto max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl p-6 sm:p-8 text-[#161B26]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-[#EBE5DC] text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-[#EBE5DC]">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-[#CBA153]' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Provenance seal card */}
            <div className="p-4 bg-white border border-[#EBE5DC] rounded-2xl space-y-2 text-xs">
              <div className="flex items-center gap-2 font-serif font-bold text-[#161B26]">
                <Award className="w-4 h-4 text-[#CBA153]" />
                <span>Certified Origin: {product.origin}</span>
              </div>
              <p className="text-gray-500 font-sans">
                Crafted in traditional European kilns and glasshouses. Vitrified, dishwasher safe, and chip-resistant.
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#CBA153] font-bold">
                {product.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#161B26] mt-1">
                {product.name}
              </h2>
              {product.frenchTitle && (
                <p className="text-xs italic text-gray-500 font-serif">{product.frenchTitle}</p>
              )}

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-xs text-gray-500 font-serif">({product.reviewCount} sommelier reviews)</span>
              </div>
            </div>

            <p className="text-xs text-gray-700 font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Glaze or Finish selector */}
            {product.colorGlazeOptions && product.colorGlazeOptions.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-serif font-bold text-[#161B26] block">
                  Select Glaze / PVD Metallurgic Finish:
                </label>
                <div className="flex items-center gap-3">
                  {product.colorGlazeOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedGlaze(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-serif font-bold transition-all ${
                        selectedGlaze === c.name
                          ? 'border-[#CBA153] bg-[#161B26] text-[#CBA153] shadow-xs'
                          : 'border-[#EBE5DC] bg-white text-gray-700'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Monogramming & Presentation */}
            <div className="space-y-2 pt-2 border-t border-[#EBE5DC]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 font-mono">
                Bespoke Atelier Services
              </span>
              <label className="flex items-center justify-between p-3 rounded-xl border border-[#EBE5DC] hover:border-[#CBA153] cursor-pointer text-xs transition-colors bg-white">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeGiftBox}
                    onChange={(e) => setIncludeGiftBox(e.target.checked)}
                    className="rounded text-[#CBA153]"
                  />
                  <span className="font-serif">Clarissa Signature Navy Velvet Presentation Canteen</span>
                </span>
                <span className="font-serif font-bold text-[#161B26]">+$18</span>
              </label>

              <div className="p-3 bg-white border border-[#EBE5DC] rounded-xl space-y-1.5 text-xs">
                <label className="font-serif font-bold text-[#161B26] flex items-center justify-between">
                  <span>Laser-Engraved Diamond Monogram (Initials):</span>
                  <span className="text-gray-500">+$25</span>
                </label>
                <input
                  type="text"
                  maxLength={4}
                  placeholder="e.g. C.L. or H&amp;M"
                  value={monogram}
                  onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                  className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-[#EBE5DC] rounded-lg text-xs font-serif uppercase tracking-widest text-[#161B26]"
                />
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-[#EBE5DC] flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-gray-500 font-mono uppercase block">Total Configured</span>
                <span className="font-serif font-bold text-2xl text-[#161B26]">
                  ${calculateTotal()}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#EBE5DC] rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm font-bold hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-serif font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm font-bold hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product, quantity, {
                      glaze: selectedGlaze,
                      giftBox: includeGiftBox,
                      monogram
                    });
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#161B26] hover:bg-[#CBA153] hover:text-black text-white rounded-xl text-xs font-serif font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Acquire Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
