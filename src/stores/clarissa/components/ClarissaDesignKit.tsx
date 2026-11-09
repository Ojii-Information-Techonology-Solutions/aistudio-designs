import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Palette,
  Type,
  Layers,
  ShieldCheck,
  Sliders,
  Wine,
  UtensilsCrossed,
  Award
} from 'lucide-react';

interface ClarissaDesignKitProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClarissaDesignKit: React.FC<ClarissaDesignKitProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'buttons' | 'badges' | 'inputs'>('colors');

  const copyToClipboard = (token: string, val: string) => {
    navigator.clipboard?.writeText(val);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  const COLOR_PALETTE = [
    { name: 'Limoges Bone', hex: '#FAF8F5', role: 'Main Canvas Ivory Background', class: 'bg-[#FAF8F5]' },
    { name: 'Royal Sèvres Navy', hex: '#161B26', role: 'Primary Editorial Headings & Nav', class: 'bg-[#161B26]' },
    { name: 'Champagne Gilding', hex: '#CBA153', role: '24k Gold Accents & CTA Highlights', class: 'bg-[#CBA153]' },
    { name: 'Vitrified Slate', hex: '#2A303C', role: 'Secondary Containers & Badges', class: 'bg-[#2A303C]' },
    { name: 'Porcelain Glaze', hex: '#EBE5DC', role: 'Card Borders & Subtle Dividers', class: 'bg-[#EBE5DC]' },
    { name: 'Crystal Sheen', hex: '#38BDF8', role: 'Glassware Brilliance Accents', class: 'bg-[#38BDF8]' },
    { name: 'Damask Rose', hex: '#9E3A4B', role: 'Sommelier Wine Tags & Highlights', class: 'bg-[#9E3A4B]' },
    { name: 'Silver Ingot', hex: '#D1D5DB', role: '18/10 Cutlery Specifications', class: 'bg-[#D1D5DB]' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] w-full max-w-5xl border border-[#EBE5DC] my-auto max-h-[92vh] overflow-y-auto text-[#161B26] shadow-2xl p-6 sm:p-10 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#EBE5DC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#161B26] text-[#CBA153] flex items-center justify-center rounded-xl shadow-xs">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-[#CBA153]">
                src/stores/clarissa/
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#161B26]">
                Clarissa Arts de la Table Design System
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white border border-[#EBE5DC] hover:bg-[#161B26] hover:text-white transition-colors rounded-xl"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 pt-6 border-b border-[#EBE5DC] overflow-x-auto no-scrollbar font-mono text-xs uppercase tracking-wider font-bold">
          {[
            { id: 'colors', label: 'Porcelain & Gold Tokens', icon: Palette },
            { id: 'typography', label: 'Bespoke Dining Type', icon: Type },
            { id: 'buttons', label: 'Tableware Actions', icon: Layers },
            { id: 'badges', label: 'Artisan Provenance Badges', icon: ShieldCheck },
            { id: 'inputs', label: 'Tablescape Place-Setting Controls', icon: Sliders }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#CBA153] text-[#161B26] bg-white/70 rounded-t-lg font-bold'
                    : 'border-transparent text-gray-500 hover:text-[#161B26]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#CBA153]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="py-8">
          {/* Colors */}
          {activeTab === 'colors' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-bold text-[#161B26] flex items-center gap-2">
                  <span>French Porcelain, 24k Gilding &amp; Bohemian Crystal Spectrum</span>
                </h3>
                <p className="text-xs text-gray-500 font-sans">
                  Sèvres blue accents, warm bone china grounds, and high-lustre champagne gilding.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {COLOR_PALETTE.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => copyToClipboard(c.name, c.hex)}
                    className="p-3 bg-white border border-[#EBE5DC] space-y-3 cursor-pointer hover:border-[#CBA153] transition-all group rounded-xl shadow-xs"
                  >
                    <div
                      className={`w-full h-16 border border-black/10 rounded-lg shadow-xs flex items-end p-1.5 ${c.class}`}
                    >
                      {copiedToken === c.name && (
                        <span className="text-[9px] bg-white text-[#161B26] px-1.5 py-0.5 font-mono font-bold uppercase rounded-md">
                          Copied!
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xs font-bold text-[#161B26]">{c.name}</span>
                        <span className="text-[10px] font-mono text-[#CBA153]">{c.hex}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 font-sans mt-1 leading-tight">{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typography */}
          {activeTab === 'typography' && (
            <div className="space-y-6 bg-white p-6 rounded-xl border border-[#EBE5DC]">
              <div className="space-y-1 border-b border-[#EBE5DC] pb-4">
                <span className="text-[10px] text-[#CBA153] uppercase tracking-[0.25em] font-bold font-mono">
                  Display Serif Haute Table
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#161B26]">
                  Aurelia Gold Rimmed Limoges Dinner Plates
                </h1>
                <p className="text-xs italic text-gray-500 font-serif">Service de Table en Porcelaine Fine et Or 24 Carats</p>
              </div>

              <div className="space-y-1 border-b border-[#EBE5DC] pb-4">
                <span className="text-[10px] text-[#CBA153] uppercase tracking-[0.25em] font-bold font-mono">
                  Service Setting Readout
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-serif font-bold text-[#161B26]">$160.00</span>
                  <span className="text-xs text-gray-500 font-sans">/ Set of 4 (French Kaolin Porcelain)</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-[#CBA153] uppercase tracking-[0.25em] font-bold font-mono">
                  Atelier Provenance Guarantee
                </span>
                <p className="text-xs text-gray-600 font-sans leading-relaxed">
                  Every Clarissa porcelain platter, crystal goblet, and forged cutlery setting is crafted by certified master guild artisans in France, Bohemia, and Solingen.
                </p>
              </div>
            </div>
          )}

          {/* Buttons */}
          {activeTab === 'buttons' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-[#EBE5DC]">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Primary Dinnerware CTA</span>
                <button className="w-full py-3.5 bg-[#161B26] hover:bg-[#2A303C] text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all">
                  <UtensilsCrossed className="w-4 h-4 text-[#CBA153]" />
                  <span>Acquire Porcelain Service ($160)</span>
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Tablescape Builder CTA</span>
                <button className="w-full py-3.5 bg-[#CBA153] hover:bg-[#B38D45] text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all">
                  <Sparkles className="w-4 h-4" />
                  <span>Launch 4-Course Tablescape Studio</span>
                </button>
              </div>
            </div>
          )}

          {/* Badges */}
          {activeTab === 'badges' && (
            <div className="flex flex-wrap gap-3 bg-white p-6 rounded-xl border border-[#EBE5DC]">
              <span className="text-xs font-serif font-bold px-3 py-1 bg-[#161B26] text-[#CBA153] rounded-full flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Limoges Certified Porcelain
              </span>

              <span className="text-xs font-serif font-bold px-3 py-1 bg-[#CBA153]/15 text-[#8F6E2D] border border-[#CBA153]/30 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                24-Karat Hand-Painted Gold
              </span>

              <span className="text-xs font-medium px-3 py-1 bg-sky-50 text-sky-800 border border-sky-200 rounded-full flex items-center gap-1.5">
                <Wine className="w-3.5 h-3.5 text-sky-600" />
                Lead-Free Bohemian Crystal
              </span>

              <span className="text-xs font-mono font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                18/10 Solingen Forged Steel
              </span>
            </div>
          )}

          {/* Inputs */}
          {activeTab === 'inputs' && (
            <div className="space-y-4 bg-white p-6 rounded-xl border border-[#EBE5DC]">
              <span className="text-xs font-bold text-[#161B26]">PVD Finish &amp; Monogramming:</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 border-2 border-[#CBA153] bg-[#FAF8F5] rounded-lg">
                  <span className="w-4 h-4 rounded-full bg-[#D4AF37]" />
                  <span className="text-xs font-serif font-bold text-[#161B26]">Champagne Gold PVD</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 border border-[#EBE5DC] rounded-lg">
                  <span className="w-4 h-4 rounded-full bg-[#E5E7EB]" />
                  <span className="text-xs font-serif text-gray-700">Mirror Polish Chrome</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
