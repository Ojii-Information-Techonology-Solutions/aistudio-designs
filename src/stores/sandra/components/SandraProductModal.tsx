import React, { useState } from 'react';
import { SandraItem } from '../types';
import {
  X,
  Star,
  Gift,
  Heart,
  Smile,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

interface SandraProductModalProps {
  item: SandraItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (
    item: SandraItem,
    quantity: number,
    options: { color?: string; giftWrap?: boolean; handwrittenNote?: string }
  ) => void;
}

export const SandraProductModal: React.FC<SandraProductModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart
}) => {
  if (!isOpen || !item) return null;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    item.colorOptions ? item.colorOptions[0]?.name : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [giftWrap, setGiftWrap] = useState(true);
  const [handwrittenNote, setHandwrittenNote] = useState('');

  const calculateTotal = () => {
    let unit = item.price;
    if (giftWrap) unit += 6;
    return unit * quantity;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FFFDF5] w-full max-w-4xl border-3 border-[#1E1B2E] my-auto max-h-[92vh] overflow-y-auto rounded-3xl shadow-[8px_8px_0px_0px_#1E1B2E] p-6 sm:p-8 text-[#1E1B2E]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-2xl bg-white border-2 border-[#1E1B2E] hover:bg-[#1E1B2E] hover:text-white transition-colors shadow-[2px_2px_0px_0px_#1E1B2E]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white border-2 border-[#1E1B2E]">
              <img
                src={item.images[selectedImage] || item.images[0]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            {item.images.length > 1 && (
              <div className="flex gap-2">
                {item.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-[#8B5CF6] scale-105' : 'border-[#1E1B2E] opacity-70'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="p-4 bg-white border-2 border-[#1E1B2E] rounded-2xl space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-[#8B5CF6]">
                <Heart className="w-4 h-4 text-[#F472B6] fill-current" />
                <span>Curated by Sandra Studio</span>
              </div>
              <p className="text-gray-600">
                Ethically sourced directly from independent master crafters, ceramicists, and family-owned stationery mills.
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#8B5CF6] font-bold">
                {item.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E1B2E] mt-1">
                {item.name}
              </h2>
              <p className="text-xs text-gray-500 font-bold mt-0.5">Origin: {item.makerOrigin}</p>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{item.rating}</span>
                </div>
                <span className="text-xs text-gray-500">({item.reviewCount} customer smiles)</span>
              </div>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed">
              {item.description}
            </p>

            {/* Colors */}
            {item.colorOptions && item.colorOptions.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1E1B2E] block">
                  Select Shade Option:
                </label>
                <div className="flex items-center gap-3">
                  {item.colorOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 text-xs font-bold transition-all ${
                        selectedColor === c.name
                          ? 'border-[#1E1B2E] bg-[#8B5CF6] text-white shadow-[2px_2px_0px_0px_#1E1B2E]'
                          : 'border-[#1E1B2E] bg-white text-gray-700'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Custom note & Gift Wrap */}
            <div className="space-y-2 pt-2 border-t-2 border-gray-200">
              <label className="flex items-center justify-between p-3 rounded-xl border-2 border-[#1E1B2E] bg-white cursor-pointer text-xs">
                <span className="flex items-center gap-2 font-bold">
                  <input
                    type="checkbox"
                    checked={giftWrap}
                    onChange={(e) => setGiftWrap(e.target.checked)}
                    className="rounded text-[#8B5CF6]"
                  />
                  <span>Sandra Japanese Washi Paper Gift Wrap &amp; Wax Seal</span>
                </span>
                <span className="font-black text-[#8B5CF6]">+$6</span>
              </label>

              <div className="p-3 bg-white border-2 border-[#1E1B2E] rounded-xl space-y-1 text-xs">
                <label className="font-bold text-[#1E1B2E] block">
                  Add Handwritten Postcard Note:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Happy birthday sweet friend! 🌸"
                  value={handwrittenNote}
                  onChange={(e) => setHandwrittenNote(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[#FFFDF5] border border-gray-300 rounded-lg text-xs"
                />
              </div>
            </div>

            {/* Price & Add */}
            <div className="pt-4 border-t-2 border-gray-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-gray-500 uppercase block font-bold">Total</span>
                <span className="font-black text-2xl text-[#1E1B2E]">
                  ${calculateTotal()}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border-2 border-[#1E1B2E] rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm font-bold hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm font-bold hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(item, quantity, {
                      color: selectedColor,
                      giftWrap,
                      handwrittenNote
                    });
                    onClose();
                  }}
                  className="px-6 py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-2xl text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-[#1E1B2E] shadow-[3px_3px_0px_0px_#1E1B2E] transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Wonder Bag</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
