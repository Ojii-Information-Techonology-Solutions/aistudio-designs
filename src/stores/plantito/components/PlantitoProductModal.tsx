import React, { useState } from 'react';
import { PlantitoProduct } from '../types';
import {
  X,
  Star,
  Sprout,
  Sun,
  Droplets,
  Heart,
  ShieldCheck,
  Truck,
  CheckCircle,
  ShoppingBag
} from 'lucide-react';

interface PlantitoProductModalProps {
  product: PlantitoProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (
    product: PlantitoProduct,
    quantity: number,
    options: { potColor?: string; addFertilizer?: boolean; addSoilKit?: boolean }
  ) => void;
}

export const PlantitoProductModal: React.FC<PlantitoProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart
}) => {
  if (!isOpen || !product) return null;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.potColorOptions ? product.potColorOptions[0]?.name : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [addFertilizer, setAddFertilizer] = useState(false);
  const [addSoilKit, setAddSoilKit] = useState(false);

  const calculateTotal = () => {
    let unit = product.price;
    if (addFertilizer) unit += 12;
    if (addSoilKit) unit += 15;
    return unit * quantity;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl border border-[#D5CCC1] my-auto max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl p-6 sm:p-8 text-[#2C302E]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F4EFEA] hover:bg-[#E5DFD7] text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#F4EFEA] border border-[#D5CCC1]">
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
                      selectedImage === idx ? 'border-[#1E392A]' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Greenhouse Guarantee card */}
            <div className="p-4 bg-[#F4EFEA] border border-[#D5CCC1] rounded-2xl space-y-2 text-xs text-[#2C302E]">
              <div className="flex items-center gap-2 font-bold text-[#1E392A]">
                <ShieldCheck className="w-4 h-4 text-[#84CC16]" />
                <span>Plantito 30-Day Living Green Guarantee</span>
              </div>
              <p className="text-gray-600">
                Arrives securely packaged in climate-controlled protective boxes with moist root wrapping.
              </p>
            </div>
          </div>

          {/* Details & Customizations */}
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#C86D51] font-bold">
                {product.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E392A] mt-1">
                {product.name}
              </h2>
              {product.botanicalName && (
                <p className="text-xs italic text-[#4A6B53] font-serif">{product.botanicalName}</p>
              )}

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-xs text-gray-500">({product.reviewCount} verified plant parents)</span>
              </div>
            </div>

            <p className="text-xs text-gray-700 font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Care Guide specs if plant */}
            {product.careGuide && (
              <div className="p-4 bg-[#1E392A]/5 border border-[#1E392A]/15 rounded-2xl space-y-2 text-xs">
                <h4 className="font-bold text-[#1E392A] uppercase tracking-wider text-[10px] font-mono">
                  Botanical Care Matrix
                </h4>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-[#F59E0B]" />
                    <span><strong>Light:</strong> {product.careGuide.light}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-[#38BDF8]" />
                    <span><strong>Water:</strong> {product.careGuide.watering}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Pot color options */}
            {product.potColorOptions && product.potColorOptions.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1E392A] block">
                  Select Artisan Pottery Finish:
                </label>
                <div className="flex items-center gap-3">
                  {product.potColorOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                        selectedColor === c.name
                          ? 'border-[#1E392A] bg-[#1E392A] text-white shadow-xs'
                          : 'border-[#D5CCC1] bg-white text-gray-700'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Addon Boosters */}
            <div className="space-y-2 pt-2 border-t border-[#E5DFD7]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 font-mono">
                Greenhouse Add-on Boosters
              </span>
              <label className="flex items-center justify-between p-3 rounded-xl border border-[#D5CCC1] hover:border-[#1E392A] cursor-pointer text-xs transition-colors">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={addFertilizer}
                    onChange={(e) => setAddFertilizer(e.target.checked)}
                    className="rounded text-[#1E392A]"
                  />
                  <span>Plantito Organic Seaweed Elixir Booster (500ml)</span>
                </span>
                <span className="font-bold text-[#1E392A]">+$12</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-[#D5CCC1] hover:border-[#1E392A] cursor-pointer text-xs transition-colors">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={addSoilKit}
                    onChange={(e) => setAddSoilKit(e.target.checked)}
                    className="rounded text-[#1E392A]"
                  />
                  <span>Chunky Aroid Organic Repotting Substrate (5L)</span>
                </span>
                <span className="font-bold text-[#1E392A]">+$15</span>
              </label>
            </div>

            {/* Price & Add to Cart button */}
            <div className="pt-4 border-t border-[#E5DFD7] flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-gray-500 font-mono uppercase block">Total Configured</span>
                <span className="font-serif font-bold text-2xl text-[#1E392A]">
                  ${calculateTotal()}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#D5CCC1] rounded-xl overflow-hidden bg-[#F4EFEA]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm font-bold hover:bg-[#E5DFD7]"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm font-bold hover:bg-[#E5DFD7]"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product, quantity, {
                      potColor: selectedColor,
                      addFertilizer,
                      addSoilKit
                    });
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#1E392A] hover:bg-[#C86D51] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Greenhouse Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
