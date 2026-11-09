import React, { useState } from 'react';
import { PlantitoProduct } from '../types';
import { X, Sparkles, Sprout, Palette, CheckCircle, ArrowRight } from 'lucide-react';

interface PlantitoPotPairingToolProps {
  isOpen: boolean;
  onClose: () => void;
  allProducts: PlantitoProduct[];
  onAddCustomBundle: (plant: PlantitoProduct, pot: PlantitoProduct, withFertilizer: boolean) => void;
}

export const PlantitoPotPairingTool: React.FC<PlantitoPotPairingToolProps> = ({
  isOpen,
  onClose,
  allProducts,
  onAddCustomBundle
}) => {
  if (!isOpen) return null;

  const plantOptions = allProducts.filter((p) => p.category === 'Indoor Plants' || p.category === 'Outdoor Foliage');
  const potOptions = allProducts.filter((p) => p.category === 'Ceramic & Terracotta Pots' || p.category === 'Hanging & Standing Planters');

  const [selectedPlant, setSelectedPlant] = useState<PlantitoProduct>(plantOptions[0] || allProducts[0]);
  const [selectedPot, setSelectedPot] = useState<PlantitoProduct>(potOptions[0] || allProducts[2]);
  const [includeFertilizer, setIncludeFertilizer] = useState(true);

  const bundleTotal = (selectedPlant?.price || 0) + (selectedPot?.price || 0) + (includeFertilizer ? 15 : 0);
  const savings = 10; // Bundle discount

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl border border-[#D5CCC1] my-auto max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl p-6 sm:p-10 text-[#2C302E]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F4EFEA] hover:bg-[#E5DFD7] text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center max-w-lg mx-auto space-y-2 pb-6 border-b border-[#E5DFD7]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1E392A]/10 text-[#1E392A] rounded-full text-xs font-bold font-mono uppercase">
            <Palette className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>Interactive Botanical Studio</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E392A]">
            Plant &amp; Artisan Pot Pairing Suite
          </h2>
          <p className="text-xs text-gray-600">
            Combine your dream tropical plant with breathable terracotta planters and save $10 on custom potting bundles.
          </p>
        </div>

        {/* Studio Workspace */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 items-center">
          {/* Step 1: Select Plant */}
          <div className="space-y-3 bg-[#F4EFEA] p-4 rounded-2xl border border-[#D5CCC1]">
            <span className="text-[10px] font-mono uppercase font-bold text-[#1E392A] block">
              1. Select Living Plant
            </span>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {plantOptions.map((plant) => (
                <button
                  key={plant.id}
                  onClick={() => setSelectedPlant(plant)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-3 transition-all ${
                    selectedPlant.id === plant.id
                      ? 'border-[#1E392A] bg-white shadow-xs'
                      : 'border-transparent hover:bg-white/60 text-gray-600'
                  }`}
                >
                  <img src={plant.images[0]} alt={plant.name} className="w-10 h-10 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#1E392A] truncate">{plant.name}</p>
                    <p className="text-[10px] text-gray-500">${plant.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Visual Pair Preview */}
          <div className="bg-[#1E392A] p-6 rounded-2xl text-center text-white space-y-4 shadow-xl border border-[#2D543F]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#84CC16] font-bold">
              Pairing Live Visualizer
            </span>

            <div className="relative mx-auto w-36 h-44 flex flex-col items-center justify-center">
              {/* Plant Image */}
              <img
                src={selectedPlant.images[0]}
                alt={selectedPlant.name}
                className="w-28 h-28 object-cover rounded-full border-2 border-white/20 shadow-lg relative z-10 -mb-6"
              />
              {/* Pot Image */}
              <img
                src={selectedPot.images[0]}
                alt={selectedPot.name}
                className="w-24 h-24 object-cover rounded-2xl border-2 border-[#C86D51] shadow-2xl relative z-20"
              />
            </div>

            <div className="pt-2 border-t border-white/10">
              <h4 className="font-serif font-bold text-sm text-white truncate">{selectedPlant.name}</h4>
              <p className="text-[10px] text-[#A3BFAB] truncate">in {selectedPot.name}</p>
            </div>
          </div>

          {/* Step 2: Select Pot */}
          <div className="space-y-3 bg-[#F4EFEA] p-4 rounded-2xl border border-[#D5CCC1]">
            <span className="text-[10px] font-mono uppercase font-bold text-[#1E392A] block">
              2. Select Planter
            </span>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {potOptions.map((pot) => (
                <button
                  key={pot.id}
                  onClick={() => setSelectedPot(pot)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-3 transition-all ${
                    selectedPot.id === pot.id
                      ? 'border-[#C86D51] bg-white shadow-xs'
                      : 'border-transparent hover:bg-white/60 text-gray-600'
                  }`}
                >
                  <img src={pot.images[0]} alt={pot.name} className="w-10 h-10 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#1E392A] truncate">{pot.name}</p>
                    <p className="text-[10px] text-[#C86D51] font-bold">${pot.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bundle Extras & Final CTA */}
        <div className="p-4 bg-[#F4EFEA] border border-[#D5CCC1] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <label className="flex items-center gap-2 cursor-pointer text-xs">
            <input
              type="checkbox"
              checked={includeFertilizer}
              onChange={(e) => setIncludeFertilizer(e.target.checked)}
              className="rounded text-[#1E392A]"
            />
            <span>Include Plantito Organic Kelp Feed &amp; Chunky Soil Prep (+$15)</span>
          </label>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] text-emerald-700 font-bold block">-$10 Bundle Savings</span>
              <span className="font-serif font-bold text-xl text-[#1E392A]">
                ${bundleTotal - savings}
              </span>
            </div>

            <button
              onClick={() => {
                onAddCustomBundle(selectedPlant, selectedPot, includeFertilizer);
                onClose();
              }}
              className="px-5 py-2.5 bg-[#1E392A] hover:bg-[#C86D51] text-white font-bold text-xs rounded-xl flex items-center gap-2 uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Add Paired Set To Cart</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
