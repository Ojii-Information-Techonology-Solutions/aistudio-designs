import React, { useState } from 'react';
import { SandraItem } from '../types';
import { X, Sparkles, Gift, Heart, Smile, Check, ArrowRight } from 'lucide-react';

interface SandraSurpriseBundleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMysteryBox: (bundleDetails: { mood: string; items: string[]; notes: string }) => void;
}

export const SandraSurpriseBundleModal: React.FC<SandraSurpriseBundleModalProps> = ({
  isOpen,
  onClose,
  onAddMysteryBox
}) => {
  if (!isOpen) return null;

  const [selectedMood, setSelectedMood] = useState<'Cozy Morning' | 'Desk Explorer' | 'Zen Sanctuary' | 'Night Owl Writer'>('Cozy Morning');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Artisan Candle',
    'Japanese Stationery',
    'Ceramic Trinket'
  ]);
  const [giftNote, setGiftNote] = useState('');

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      if (selectedCategories.length > 1) {
        setSelectedCategories(selectedCategories.filter((c) => c !== cat));
      }
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FFFDF5] w-full max-w-2xl border-3 border-[#1E1B2E] my-auto max-h-[92vh] overflow-y-auto rounded-3xl shadow-[8px_8px_0px_0px_#1E1B2E] p-6 sm:p-8 text-[#1E1B2E]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-2xl bg-white border-2 border-[#1E1B2E] hover:bg-[#1E1B2E] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 pb-6 border-b-2 border-gray-200">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#8B5CF6] text-white rounded-full text-xs font-black uppercase border-2 border-[#1E1B2E]">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>Mystery Wonder Box Studio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1E1B2E]">
            Curate a 5-Object Wonder Box
          </h2>
          <p className="text-xs text-gray-600">
            Tell Sandra what vibe you or your recipient loves, and we'll handpick 5 delightful surprise items.
          </p>
        </div>

        {/* Form Body */}
        <div className="py-6 space-y-6">
          {/* Step 1: Mood */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-[#8B5CF6] block">
              1. Choose Recipient Vibe:
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Cozy Morning', desc: 'Warm scents, tea cups, gentle incense' },
                { name: 'Desk Explorer', desc: 'Machined brass, paper weights, fine pens' },
                { name: 'Zen Sanctuary', desc: 'Stoneware ceramics, hinoki mist, rituals' },
                { name: 'Night Owl Writer', desc: 'Lay-flat journals, inks, amber glow' }
              ].map((mood) => (
                <button
                  key={mood.name}
                  type="button"
                  onClick={() => setSelectedMood(mood.name as any)}
                  className={`p-3 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                    selectedMood === mood.name
                      ? 'border-[#1E1B2E] bg-[#8B5CF6] text-white shadow-[3px_3px_0px_0px_#1E1B2E]'
                      : 'border-[#1E1B2E] bg-white text-[#1E1B2E] hover:bg-gray-50'
                  }`}
                >
                  <p className="font-bold text-xs">{mood.name}</p>
                  <p className={`text-[10px] mt-0.5 ${selectedMood === mood.name ? 'text-purple-200' : 'text-gray-500'}`}>
                    {mood.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Included Item Preferences */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-[#8B5CF6] block">
              2. Items You'd Love Included (Pick 3+):
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                'Artisan Candle',
                'Japanese Stationery',
                'Ceramic Trinket',
                'Desk Oddity',
                'Incense Basin',
                'Apothecary Vial',
                'Handmade Mug'
              ].map((cat) => {
                const isSelected = selectedCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'border-[#1E1B2E] bg-[#FB923C] text-[#1E1B2E] shadow-[2px_2px_0px_0px_#1E1B2E]'
                        : 'border-[#1E1B2E] bg-white text-gray-700'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Special instructions */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-[#8B5CF6] block">
              3. Special note to Sandra:
            </label>
            <input
              type="text"
              placeholder="e.g. For my sister who loves botanical illustrations and cedar scents"
              value={giftNote}
              onChange={(e) => setGiftNote(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border-2 border-[#1E1B2E] rounded-2xl text-xs text-[#1E1B2E]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-2 border-[#1E1B2E] rounded-2xl flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-gray-500 font-bold block">Fixed Wonder Price</span>
            <span className="font-black text-2xl text-[#1E1B2E]">$75.00</span>
            <span className="text-[10px] text-[#8B5CF6] font-bold block">($110 value • 5 items)</span>
          </div>

          <button
            onClick={() => {
              onAddMysteryBox({
                mood: selectedMood,
                items: selectedCategories,
                notes: giftNote
              });
              onClose();
            }}
            className="px-6 py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-black text-xs uppercase tracking-wider rounded-2xl flex items-center gap-2 border-2 border-[#1E1B2E] shadow-[3px_3px_0px_0px_#1E1B2E] transition-all cursor-pointer"
          >
            <span>Pack My Wonder Box</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
