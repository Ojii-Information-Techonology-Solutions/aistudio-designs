import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Palette,
  Type,
  Layers,
  ShieldCheck,
  Gift,
  Heart,
  Smile,
  PackageCheck
} from 'lucide-react';

interface SandraDesignKitProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SandraDesignKit: React.FC<SandraDesignKitProps> = ({
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
    { name: 'Sandra Butter Cream', hex: '#FFFDF5', role: 'Warm Playful Background Canvas', class: 'bg-[#FFFDF5]' },
    { name: 'Lilac Dream', hex: '#8B5CF6', role: 'Primary Wonder Accent & Badges', class: 'bg-[#8B5CF6]' },
    { name: 'Peach Fizz', hex: '#FB923C', role: 'Secondary Joy Highlight & CTAs', class: 'bg-[#FB923C]' },
    { name: 'Matcha Soda', hex: '#10B981', role: 'Fresh Novelty Indicators', class: 'bg-[#10B981]' },
    { name: 'Licorice Ink', hex: '#1E1B2E', role: 'High-Contrast Body & Headers', class: 'bg-[#1E1B2E]' },
    { name: 'Blush Velvet', hex: '#F472B6', role: 'Gift Wrap Tags & Wishlist', class: 'bg-[#F472B6]' },
    { name: 'Sunbeam Gold', hex: '#FBBF24', role: 'Special Mystery Box Glow', class: 'bg-[#FBBF24]' },
    { name: 'Paper Seam', hex: '#EDE8DF', role: 'Subtle Card Borders & Dividers', class: 'bg-[#EDE8DF]' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FFFDF5] w-full max-w-5xl border-2 border-[#1E1B2E] my-auto max-h-[92vh] overflow-y-auto text-[#1E1B2E] shadow-[8px_8px_0px_0px_#1E1B2E] p-6 sm:p-10 rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b-2 border-[#1E1B2E]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#8B5CF6] text-white flex items-center justify-center rounded-2xl shadow-xs border-2 border-[#1E1B2E]">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-[#8B5CF6]">
                src/stores/sandra/
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E1B2E]">
                Sandra Curated Assorted Wonders Design System
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white border-2 border-[#1E1B2E] hover:bg-[#1E1B2E] hover:text-white transition-colors rounded-2xl shadow-[2px_2px_0px_0px_#1E1B2E]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 pt-6 border-b-2 border-[#1E1B2E] overflow-x-auto no-scrollbar font-mono text-xs uppercase font-bold">
          {[
            { id: 'colors', label: 'Whimsical Color Palette', icon: Palette },
            { id: 'typography', label: 'Eclectic Expressive Type', icon: Type },
            { id: 'buttons', label: 'Playful Tactile Buttons', icon: Layers },
            { id: 'badges', label: 'Daily Vibe Tags', icon: ShieldCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 flex items-center gap-2 border-b-4 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#8B5CF6] text-[#8B5CF6] bg-white rounded-t-xl font-bold'
                    : 'border-transparent text-gray-500 hover:text-[#1E1B2E]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="py-8">
          {activeTab === 'colors' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#1E1B2E]">Joyful &amp; Eclectic Spectrum</h3>
                <p className="text-xs text-gray-600 font-sans">
                  Saturated pastels, cheerful retro tones, and crisp neo-brutalist ink borders.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {COLOR_PALETTE.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => copyToClipboard(c.name, c.hex)}
                    className="p-3 bg-white border-2 border-[#1E1B2E] space-y-3 cursor-pointer hover:-translate-y-1 transition-all rounded-2xl shadow-[4px_4px_0px_0px_#1E1B2E]"
                  >
                    <div className={`w-full h-16 border-2 border-[#1E1B2E] rounded-xl flex items-end p-1.5 ${c.class}`}>
                      {copiedToken === c.name && (
                        <span className="text-[9px] bg-white text-[#1E1B2E] px-1.5 py-0.5 font-mono font-bold uppercase rounded-md border border-black">
                          Copied!
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-[#1E1B2E]">{c.name}</span>
                        <span className="text-[10px] font-mono text-[#8B5CF6]">{c.hex}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 font-sans mt-1 leading-tight">{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'typography' && (
            <div className="space-y-6 bg-white p-6 rounded-2xl border-2 border-[#1E1B2E] shadow-[4px_4px_0px_0px_#1E1B2E]">
              <div className="space-y-1 border-b border-gray-200 pb-4">
                <span className="text-[10px] text-[#8B5CF6] uppercase tracking-[0.25em] font-bold font-mono">
                  Eclectic Joy Heading (H1)
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B2E] tracking-tight">
                  Hand-Pinched Cloud Burner &amp; Hinoki Soy Candle
                </h1>
                <p className="text-xs text-gray-500">Curated by Sandra Studio for quiet mornings and playful desks.</p>
              </div>

              <div className="space-y-1 border-b border-gray-200 pb-4">
                <span className="text-[10px] text-[#FB923C] uppercase tracking-[0.25em] font-bold font-mono">
                  Playful Pricing Tag
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#1E1B2E]">$38.00</span>
                  <span className="text-xs text-[#8B5CF6] font-bold">★ Handcrafted in Kyoto</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'buttons' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border-2 border-[#1E1B2E] shadow-[4px_4px_0px_0px_#1E1B2E]">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">Joy Action CTA</span>
                <button className="w-full py-3.5 bg-[#FB923C] hover:bg-[#EA580C] text-[#1E1B2E] font-bold text-xs rounded-xl flex items-center justify-center gap-2 border-2 border-[#1E1B2E] shadow-[3px_3px_0px_0px_#1E1B2E] transition-all cursor-pointer">
                  <Gift className="w-4 h-4" />
                  <span>Adopt Wonder ($38)</span>
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">Mystery Box CTA</span>
                <button className="w-full py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 border-2 border-[#1E1B2E] shadow-[3px_3px_0px_0px_#1E1B2E] transition-all cursor-pointer">
                  <Sparkles className="w-4 h-4" />
                  <span>Open Mystery Wonder Box ($75)</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'badges' && (
            <div className="flex flex-wrap gap-3 bg-white p-6 rounded-2xl border-2 border-[#1E1B2E] shadow-[4px_4px_0px_0px_#1E1B2E]">
              <span className="text-xs font-bold px-3 py-1 bg-[#8B5CF6]/15 text-[#8B5CF6] border-2 border-[#8B5CF6] rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Slow Living
              </span>

              <span className="text-xs font-bold px-3 py-1 bg-[#FB923C]/20 text-[#C2410C] border-2 border-[#FB923C] rounded-full flex items-center gap-1.5">
                <Smile className="w-3.5 h-3.5" />
                Tactile Desk
              </span>

              <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 border-2 border-emerald-500 rounded-full flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-emerald-600" />
                Handmade Artisan
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
