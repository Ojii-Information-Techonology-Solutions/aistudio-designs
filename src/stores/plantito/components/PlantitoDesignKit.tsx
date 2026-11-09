import React, { useState } from 'react';
import {
  X,
  Sprout,
  Palette,
  Type,
  Layers,
  ShieldCheck,
  Sliders,
  Sun,
  Droplets,
  Heart
} from 'lucide-react';

interface PlantitoDesignKitProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlantitoDesignKit: React.FC<PlantitoDesignKitProps> = ({
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
    { name: 'Evergreen Canopy', hex: '#1E392A', role: 'Primary Brand Deep Green', class: 'bg-[#1E392A]' },
    { name: 'Botanical Sage', hex: '#4A6B53', role: 'Secondary Accent & Plant Labels', class: 'bg-[#4A6B53]' },
    { name: 'Warm Terracotta', hex: '#C86D51', role: 'Pottery Accent & CTA Highlights', class: 'bg-[#C86D51]' },
    { name: 'Raw Sandstone', hex: '#F4EFEA', role: 'Light Canvas Background', class: 'bg-[#F4EFEA]' },
    { name: 'Porous Clay Bark', hex: '#3E2F28', role: 'Deep Soil Contrast & Borders', class: 'bg-[#3E2F28]' },
    { name: 'Sprout Lime', hex: '#84CC16', role: 'Vitality Indicators & Fresh Badges', class: 'bg-[#84CC16]' },
    { name: 'Mineral Stone', hex: '#E5DFD7', role: 'Card Borders & Divider Seams', class: 'bg-[#E5DFD7]' },
    { name: 'Earth Slate', hex: '#2C302E', role: 'Primary Body Text', class: 'bg-[#2C302E]' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F4EFEA] w-full max-w-5xl border border-[#D5CCC1] my-auto max-h-[92vh] overflow-y-auto text-[#2C302E] shadow-2xl p-6 sm:p-10 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D5CCC1]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1E392A] text-[#84CC16] flex items-center justify-center rounded-xl shadow-xs">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-[#4A6B53]">
                src/stores/plantito/
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1E392A]">
                Plantito Botanical &amp; Pottery Design System
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white/80 border border-[#D5CCC1] hover:bg-[#1E392A] hover:text-white transition-colors rounded-xl"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 pt-6 border-b border-[#D5CCC1] overflow-x-auto no-scrollbar font-mono text-xs uppercase tracking-wider font-bold">
          {[
            { id: 'colors', label: 'Earthy Color Tokens', icon: Palette },
            { id: 'typography', label: 'Botanical Typography', icon: Type },
            { id: 'buttons', label: 'Garden Buttons', icon: Layers },
            { id: 'badges', label: 'Plant Care Badges', icon: ShieldCheck },
            { id: 'inputs', label: 'Pot & Soil Selectors', icon: Sliders }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#1E392A] text-[#1E392A] bg-white/60 rounded-t-lg'
                    : 'border-transparent text-gray-500 hover:text-[#1E392A]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#4A6B53]" />
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
                <h3 className="text-lg font-serif font-bold text-[#1E392A] flex items-center gap-2">
                  <span>Organic Canopy &amp; Mineral Palette</span>
                </h3>
                <p className="text-xs text-[#5C655E] font-sans">
                  Deep chlorophyll greens, warm terracotta clay, and breathable sandy canvas backgrounds.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {COLOR_PALETTE.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => copyToClipboard(c.name, c.hex)}
                    className="p-3 bg-white border border-[#D5CCC1] space-y-3 cursor-pointer hover:border-[#1E392A] transition-all group rounded-xl shadow-xs"
                  >
                    <div
                      className={`w-full h-16 border border-black/10 rounded-lg shadow-xs flex items-end p-1.5 ${c.class}`}
                    >
                      {copiedToken === c.name && (
                        <span className="text-[9px] bg-white text-[#1E392A] px-1.5 py-0.5 font-mono font-bold uppercase rounded-md">
                          Copied!
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-xs font-bold text-[#1E392A]">{c.name}</span>
                        <span className="text-[10px] font-mono text-[#C86D51]">{c.hex}</span>
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
            <div className="space-y-6 bg-white p-6 rounded-xl border border-[#D5CCC1]">
              <div className="space-y-1 border-b border-[#E5DFD7] pb-4">
                <span className="text-[10px] text-[#C86D51] uppercase tracking-[0.25em] font-bold font-mono">
                  Botanical Display Serif (H1)
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E392A]">
                  Monstera Deliciosa • Swiss Cheese Plant
                </h1>
                <p className="text-xs italic text-[#4A6B53] font-serif">Monstera deliciosa Liebm. (Araceae Family)</p>
              </div>

              <div className="space-y-1 border-b border-[#E5DFD7] pb-4">
                <span className="text-[10px] text-[#C86D51] uppercase tracking-[0.25em] font-bold font-mono">
                  Pricing &amp; Pot Measurement Tag
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-serif font-bold text-[#1E392A]">$48.00</span>
                  <span className="text-xs text-gray-500 font-sans">/ 8" Fluted Italian Terracotta Pot</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-[#C86D51] uppercase tracking-[0.25em] font-bold font-mono">
                  Plant Health Guarantee
                </span>
                <p className="text-xs text-gray-600 font-sans leading-relaxed">
                  All Plantito specimens are potted in pre-sterilized chunky aroid soil blends infused with active mycorrhizae and slow-release organic seaweed pellets.
                </p>
              </div>
            </div>
          )}

          {/* Buttons */}
          {activeTab === 'buttons' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-[#D5CCC1]">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Primary Botanical CTA</span>
                <button className="w-full py-3.5 bg-[#1E392A] hover:bg-[#162A1F] text-[#F4EFEA] font-medium text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all">
                  <Sprout className="w-4 h-4 text-[#84CC16]" />
                  <span>Adopt Plant + Custom Pot ($48)</span>
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Pottery Pairing Button</span>
                <button className="w-full py-3.5 bg-[#C86D51] hover:bg-[#B35F45] text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all">
                  <Palette className="w-4 h-4" />
                  <span>Launch Interactive Pot Pairing Tool</span>
                </button>
              </div>
            </div>
          )}

          {/* Badges */}
          {activeTab === 'badges' && (
            <div className="flex flex-wrap gap-3 bg-white p-6 rounded-xl border border-[#D5CCC1]">
              <span className="text-xs font-medium px-3 py-1 bg-[#1E392A]/10 text-[#1E392A] border border-[#1E392A]/20 rounded-full flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-[#4A6B53]" />
                Bright Indirect Light
              </span>

              <span className="text-xs font-medium px-3 py-1 bg-[#C86D51]/10 text-[#C86D51] border border-[#C86D51]/30 rounded-full flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#C86D51]" />
                Water Every 7-10 Days
              </span>

              <span className="text-xs font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1.5">
                <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                100% Organic Bio-Feed
              </span>

              <span className="text-xs font-medium px-3 py-1 bg-amber-100 text-amber-800 rounded-full flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-amber-600" />
                Air Purifying Champion
              </span>
            </div>
          )}

          {/* Inputs */}
          {activeTab === 'inputs' && (
            <div className="space-y-4 bg-white p-6 rounded-xl border border-[#D5CCC1]">
              <span className="text-xs font-bold text-[#1E392A]">Pottery Clay Selection:</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 border-2 border-[#1E392A] bg-[#F4EFEA] rounded-lg">
                  <span className="w-4 h-4 rounded-full bg-[#C86D51]" />
                  <span className="text-xs font-medium text-[#1E392A]">Warm Terracotta (8")</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 border border-[#D5CCC1] rounded-lg">
                  <span className="w-4 h-4 rounded-full bg-[#EDE8DF]" />
                  <span className="text-xs font-medium text-gray-700">Chalk White Stoneware</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
