import React, { useState } from 'react';
import { ClarissaProduct } from '../types';
import { X, Sparkles, UtensilsCrossed, Wine, ArrowRight } from 'lucide-react';

interface ClarissaTablescapeBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  allProducts: ClarissaProduct[];
  onAddCustomTablescape: (plate: ClarissaProduct, glass: ClarissaProduct, cutlery: ClarissaProduct, persons: number) => void;
}

export const ClarissaTablescapeBuilder: React.FC<ClarissaTablescapeBuilderProps> = ({
  isOpen,
  onClose,
  allProducts,
  onAddCustomTablescape
}) => {
  if (!isOpen) return null;

  const plateOptions = allProducts.filter((p) => p.category === 'Dinnerware & Plates' || p.category === 'Serving Platters & Bowls');
  const glassOptions = allProducts.filter((p) => p.category === 'Crystal Glassware & Goblets');
  const cutleryOptions = allProducts.filter((p) => p.category === 'Forged Cutlery & Silverware');

  const [selectedPlate, setSelectedPlate] = useState<ClarissaProduct>(plateOptions[0] || allProducts[0]);
  const [selectedGlass, setSelectedGlass] = useState<ClarissaProduct>(glassOptions[0] || allProducts[1]);
  const [selectedCutlery, setSelectedCutlery] = useState<ClarissaProduct>(cutleryOptions[0] || allProducts[2]);
  const [guestCount, setGuestCount] = useState<number>(4);

  const basePricePerPerson =
    ((selectedPlate?.price || 0) / (selectedPlate?.piecesPerSet || 4)) +
    ((selectedGlass?.price || 0) / (selectedGlass?.piecesPerSet || 6)) +
    ((selectedCutlery?.price || 0) / 6);

  const totalEstimate = Math.round(basePricePerPerson * guestCount);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] w-full max-w-4xl border border-[#EBE5DC] my-auto max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl p-6 sm:p-10 text-[#161B26]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-[#EBE5DC] text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center max-w-lg mx-auto space-y-2 pb-6 border-b border-[#EBE5DC]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#161B26] text-[#CBA153] rounded-full text-xs font-serif font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grand Tablescape Studio</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#161B26]">
            Architect Your Bespoke Dining Service
          </h2>
          <p className="text-xs text-gray-600 font-serif">
            Harmonize French porcelain dinnerware, mouth-blown crystal goblets, and 18/10 forged silverware.
          </p>
        </div>

        {/* Studio Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
          {/* Plate */}
          <div className="space-y-3 bg-white p-4 rounded-2xl border border-[#EBE5DC]">
            <span className="text-[10px] font-serif uppercase font-bold text-[#CBA153] block">
              1. Dinner Plate Porcelain
            </span>
            <div className="space-y-2">
              {plateOptions.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlate(p)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-3 transition-all ${
                    selectedPlate.id === p.id
                      ? 'border-[#CBA153] bg-[#FAF8F5] shadow-xs'
                      : 'border-transparent hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  <img src={p.images[0]} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-serif font-bold text-[#161B26] truncate">{p.name}</p>
                    <p className="text-[10px] text-[#CBA153]">${p.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Glassware */}
          <div className="space-y-3 bg-white p-4 rounded-2xl border border-[#EBE5DC]">
            <span className="text-[10px] font-serif uppercase font-bold text-[#CBA153] block">
              2. Crystal Glassware
            </span>
            <div className="space-y-2">
              {glassOptions.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGlass(g)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-3 transition-all ${
                    selectedGlass.id === g.id
                      ? 'border-[#CBA153] bg-[#FAF8F5] shadow-xs'
                      : 'border-transparent hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  <img src={g.images[0]} alt={g.name} className="w-10 h-10 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-serif font-bold text-[#161B26] truncate">{g.name}</p>
                    <p className="text-[10px] text-[#CBA153]">${g.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Cutlery */}
          <div className="space-y-3 bg-white p-4 rounded-2xl border border-[#EBE5DC]">
            <span className="text-[10px] font-serif uppercase font-bold text-[#CBA153] block">
              3. Forged Cutlery
            </span>
            <div className="space-y-2">
              {cutleryOptions.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCutlery(c)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-3 transition-all ${
                    selectedCutlery.id === c.id
                      ? 'border-[#CBA153] bg-[#FAF8F5] shadow-xs'
                      : 'border-transparent hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  <img src={c.images[0]} alt={c.name} className="w-10 h-10 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-serif font-bold text-[#161B26] truncate">{c.name}</p>
                    <p className="text-[10px] text-[#CBA153]">${c.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Place Setting Guest Multiplier & CTA */}
        <div className="p-4 bg-white border border-[#EBE5DC] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-serif font-bold text-[#161B26]">Guest Place Settings:</span>
            {[2, 4, 6, 8, 12].map((count) => (
              <button
                key={count}
                onClick={() => setGuestCount(count)}
                className={`px-3 py-1 rounded-lg text-xs font-serif font-bold transition-all ${
                  guestCount === count
                    ? 'bg-[#161B26] text-[#CBA153]'
                    : 'bg-[#FAF8F5] text-gray-600 hover:bg-[#EBE5DC]'
                }`}
              >
                {count} Persons
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] text-gray-500 font-serif block">Tablescape Ensemble</span>
              <span className="font-serif font-bold text-xl text-[#161B26]">
                ${totalEstimate}
              </span>
            </div>

            <button
              onClick={() => {
                onAddCustomTablescape(selectedPlate, selectedGlass, selectedCutlery, guestCount);
                onClose();
              }}
              className="px-5 py-2.5 bg-[#161B26] hover:bg-[#CBA153] hover:text-black text-[#CBA153] font-serif font-bold text-xs rounded-xl flex items-center gap-2 uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Add Custom Ensemble</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
