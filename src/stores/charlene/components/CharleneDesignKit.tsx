import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Scissors,
  Layers,
  Palette,
  Type,
  CheckCircle,
  Copy,
  Heart,
  ShoppingBag,
  Eye,
  Ruler
} from 'lucide-react';

interface CharleneDesignKitProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CharleneDesignKit: React.FC<CharleneDesignKitProps> = ({
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
    { name: 'Canvas Ivory', hex: '#FDFCFB', role: 'Main Background Canvas', class: 'bg-[#FDFCFB]' },
    { name: 'Silk Pearl', hex: '#F2F0ED', role: 'Secondary Background / Card Fill', class: 'bg-[#F2F0ED]' },
    { name: 'Atelier Noir', hex: '#181615', role: 'Primary Typography & Buttons', class: 'bg-[#181615]' },
    { name: 'Haute Gold', hex: '#C5A059', role: 'Brand Accent / Star / Hemming', class: 'bg-[#C5A059]' },
    { name: 'Champagne Warm', hex: '#EADBCE', role: 'Silk Swatch / Soft Highlight', class: 'bg-[#EADBCE]' },
    { name: 'Bordeaux Noir', hex: '#4A1521', role: 'Seasonal Accent & New Arrivals', class: 'bg-[#4A1521]' },
    { name: 'Atelier Border', hex: '#E5E1DA', role: 'Subtle Dividers & Card Edges', class: 'bg-[#E5E1DA]' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-serif"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FDFCFB] w-full max-w-5xl border border-[#E5E1DA] my-auto max-h-[92vh] overflow-y-auto text-[#181615] shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E5E1DA]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#181615] text-[#FAF6F0] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-medium text-[#C5A059]">
                src/stores/charlene/
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#181615] font-light uppercase tracking-wider">
                Charlène Haute Couture Design System
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-[#F2F0ED] border border-[#E5E1DA] hover:bg-[#181615] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 pt-6 border-b border-[#E5E1DA] overflow-x-auto no-scrollbar font-sans text-xs uppercase tracking-wider font-medium">
          {[
            { id: 'colors', label: 'Color Tokens', icon: Palette },
            { id: 'typography', label: 'Typography Scales', icon: Type },
            { id: 'buttons', label: 'Button Archetypes', icon: Layers },
            { id: 'badges', label: 'Couture Badges & Tags', icon: Sparkles },
            { id: 'inputs', label: 'Hemming & Select Controls', icon: Scissors }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#181615] text-[#181615] font-bold'
                    : 'border-transparent text-gray-500 hover:text-black'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#C5A059]" />
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
                <h3 className="font-serif text-xl font-normal">Parisian Haute Palette</h3>
                <p className="text-xs text-gray-500 font-sans">
                  Warm ivory canvas paired with high-contrast noir and subtle champagne silk luster.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {COLOR_PALETTE.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => copyToClipboard(c.name, c.hex)}
                    className="p-3 bg-white border border-[#E5E1DA] space-y-3 cursor-pointer hover:border-black transition-all group"
                  >
                    <div
                      className={`w-full h-20 border border-[#E5E1DA]/80 shadow-xs flex items-end p-2 ${c.class}`}
                    >
                      {copiedToken === c.name && (
                        <span className="text-[10px] bg-black text-white px-2 py-0.5 font-sans font-medium uppercase">
                          Copied!
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-sm font-bold text-[#181615]">{c.name}</span>
                        <span className="text-[11px] font-mono text-gray-400">{c.hex}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 font-sans mt-0.5">{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typography */}
          {activeTab === 'typography' && (
            <div className="space-y-8 font-sans">
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-normal">Typographic Hierarchy</h3>
                <p className="text-xs text-gray-500">
                  Elegant serif display headlines contrasted with spacious sans-serif micro-copy.
                </p>
              </div>

              <div className="space-y-6 border border-[#E5E1DA] bg-white p-6">
                <div className="space-y-1 border-b border-[#E5E1DA] pb-4">
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.25em] font-medium">Display Title 1 (Light / Tracking-Wide)</span>
                  <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#181615] tracking-tight">
                    The Ethereal Backless Silk Column Gown
                  </h1>
                </div>

                <div className="space-y-1 border-b border-[#E5E1DA] pb-4">
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.25em] font-medium">Display Title 2 (Italic Flourish)</span>
                  <h2 className="font-serif text-3xl font-light text-[#181615]">
                    Liquid Silk &amp; <span className="italic font-normal">Architectural Form</span>
                  </h2>
                </div>

                <div className="space-y-1 border-b border-[#E5E1DA] pb-4">
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.25em] font-medium">Atelier Eyebrow &amp; Subtitle</span>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-medium">
                    Automne / Hiver Haute Couture • 12 Rue Saint-Honoré
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.25em] font-medium">Editorial Body Description</span>
                  <p className="text-sm text-gray-600 font-light leading-relaxed max-w-2xl">
                    Individually bias-cut by master tailors in Lyon. Featuring French seam interior finishing with 100% silk thread, weighted hem inserts for a sculptural drape, and concealed French silk-covered closures.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          {activeTab === 'buttons' && (
            <div className="space-y-6 font-sans">
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-normal">Couture Action Buttons</h3>
                <p className="text-xs text-gray-500">
                  Refined geometry with uppercase letter-spaced typography and understated hover transitions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 border border-[#E5E1DA]">
                {/* Primary Button */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Primary Action</span>
                  <button className="w-full py-4 bg-[#181615] hover:bg-black text-[#FAF6F0] text-xs font-medium uppercase tracking-[0.25em] transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
                    <span>Add to Bag • $1,250 USD</span>
                  </button>
                </div>

                {/* Secondary Button */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Secondary Outlined</span>
                  <button className="w-full py-4 border border-[#181615] text-[#181615] hover:bg-[#F2F0ED] text-xs font-medium uppercase tracking-[0.25em] transition-colors">
                    Explore Paris Lookbook
                  </button>
                </div>

                {/* Accent Action */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Gold Atelier Action</span>
                  <button className="w-full py-4 bg-[#C5A059] hover:bg-[#B38F46] text-black font-medium text-xs uppercase tracking-[0.25em] transition-colors flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Consult AI Atelier Stylist</span>
                  </button>
                </div>

                {/* Quick Action Pill */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Icon Quick View Action</span>
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-[#F2F0ED] border border-[#E5E1DA] hover:border-black text-xs uppercase tracking-wider font-medium">
                      Quick Inspect
                    </button>
                    <button className="p-3 bg-[#F2F0ED] border border-[#E5E1DA] text-[#800B1B]">
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Badges */}
          {activeTab === 'badges' && (
            <div className="space-y-6 font-sans">
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-normal">Couture Status Badges</h3>
                <p className="text-xs text-gray-500">
                  Micro-tags indicating silhouette origins, lead times, and fabric purity.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 bg-white p-6 border border-[#E5E1DA]">
                <span className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 bg-[#181615] text-[#FAF6F0] font-medium">
                  Made to Order (3w)
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 bg-[#C5A059] text-white font-medium">
                  Atelier Bestseller
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 bg-[#4A1521] text-white font-medium">
                  New Season Debut
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 bg-[#F2F0ED] text-[#181615] border border-[#E5E1DA] font-medium">
                  100% Mulberry Silk
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 bg-[#F2F0ED] text-[#181615] border border-[#E5E1DA] font-medium">
                  Column Silhouette
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 bg-[#181615] text-[#C5A059] font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Paris Atelier Exclusive</span>
                </span>
              </div>
            </div>
          )}

          {/* Inputs & Selectors */}
          {activeTab === 'inputs' && (
            <div className="space-y-6 font-sans">
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-normal">Bespoke Fit &amp; Color Swatches</h3>
                <p className="text-xs text-gray-500">
                  Custom heel-height hemming inputs and size converters.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 border border-[#E5E1DA]">
                {/* Hemming Box */}
                <div className="p-4 bg-[#F2F0ED] border border-[#E5E1DA] space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider font-medium text-[#181615]">
                      Bespoke Hemming Length (Optional):
                    </span>
                    <span className="text-[10px] text-[#C5A059] font-medium uppercase">Complimentary</span>
                  </div>
                  <input
                    type="text"
                    defaultValue="Hemmed for 85mm heels (Height 5'10&quot;)"
                    className="w-full text-xs p-2.5 bg-white border border-[#E5E1DA] text-[#181615] focus:outline-none focus:border-black"
                  />
                </div>

                {/* Color Swatch Set */}
                <div className="p-4 bg-[#F2F0ED] border border-[#E5E1DA] space-y-2 text-xs">
                  <span className="text-[11px] uppercase tracking-wider font-medium text-[#181615] block">
                    Silk Swatch Selection:
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-[#181615] bg-white font-medium">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#EADBCE] border border-gray-300" />
                      <span>Champagne Pearl</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-[#E5E1DA] bg-white text-gray-600">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#181615]" />
                      <span>Midnight Onyx</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
