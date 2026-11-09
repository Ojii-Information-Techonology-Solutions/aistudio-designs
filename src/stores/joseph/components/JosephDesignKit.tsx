import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Palette,
  Type,
  Layers,
  ShieldCheck,
  Building2,
  KeyRound,
  BedDouble,
  CalendarCheck
} from 'lucide-react';

interface JosephDesignKitProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JosephDesignKit: React.FC<JosephDesignKitProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'buttons' | 'badges'>('colors');

  const copyToClipboard = (token: string, val: string) => {
    navigator.clipboard?.writeText(val);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  const COLOR_PALETTE = [
    { name: 'Joseph Midnight', hex: '#0B132B', role: 'Architectural Dark Base & Headers', class: 'bg-[#0B132B]' },
    { name: 'Warm Cognac Amber', hex: '#D97706', role: 'Boutique Key Accents & Booking Highlights', class: 'bg-[#D97706]' },
    { name: 'Poured Concrete', hex: '#F3F4F6', role: 'Main Canvas Background & Light Cards', class: 'bg-[#F3F4F6]' },
    { name: 'Deep Nordic Slate', hex: '#1C2541', role: 'Secondary Room Cards & Footers', class: 'bg-[#1C2541]' },
    { name: 'Oatmeal Linen', hex: '#E5E7EB', role: 'Subtle Dividers & Room Badges', class: 'bg-[#E5E7EB]' },
    { name: 'Emerald Conservatory', hex: '#059669', role: 'Confirmed Availability Green', class: 'bg-[#059669]' },
    { name: 'Terracotta Tile', hex: '#EA580C', role: 'Special Penthouse Tag', class: 'bg-[#EA580C]' },
    { name: 'Boutique Gold', hex: '#F59E0B', role: 'Guest Rating Stars & Gold Badges', class: 'bg-[#F59E0B]' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F3F4F6] w-full max-w-5xl border border-gray-300 my-auto max-h-[92vh] overflow-y-auto text-[#0B132B] shadow-2xl p-6 sm:p-10 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0B132B] text-[#D97706] flex items-center justify-center rounded-xl shadow-xs">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-[#D97706]">
                src/stores/joseph/
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B132B]">
                Joseph Rentable Rooms &amp; Suites Design System
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white border border-gray-300 hover:bg-[#0B132B] hover:text-white transition-colors rounded-xl"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 pt-6 border-b border-gray-300 overflow-x-auto no-scrollbar font-mono text-xs uppercase font-bold">
          {[
            { id: 'colors', label: 'Architectural Color Tokens', icon: Palette },
            { id: 'typography', label: 'Boutique Stay Typography', icon: Type },
            { id: 'buttons', label: 'Booking Action Controls', icon: Layers },
            { id: 'badges', label: 'Room Amenity Badges', icon: ShieldCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#D97706] text-[#0B132B] bg-white rounded-t-lg font-bold'
                    : 'border-transparent text-gray-500 hover:text-[#0B132B]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#D97706]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="py-8">
          {activeTab === 'colors' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#0B132B]">Boutique Architectural Palette</h3>
                <p className="text-xs text-gray-600 font-sans">
                  Deep midnight blue, rich warm cognac, polished architectural concrete, and brass key hardware accents.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {COLOR_PALETTE.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => copyToClipboard(c.name, c.hex)}
                    className="p-3 bg-white border border-gray-200 space-y-3 cursor-pointer hover:border-[#D97706] transition-all rounded-xl shadow-xs"
                  >
                    <div className={`w-full h-16 border border-black/10 rounded-lg flex items-end p-1.5 ${c.class}`}>
                      {copiedToken === c.name && (
                        <span className="text-[9px] bg-white text-[#0B132B] px-1.5 py-0.5 font-mono font-bold uppercase rounded-md">
                          Copied!
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-[#0B132B]">{c.name}</span>
                        <span className="text-[10px] font-mono text-[#D97706]">{c.hex}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 font-sans mt-1 leading-tight">{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'typography' && (
            <div className="space-y-6 bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <div className="space-y-1 border-b border-gray-200 pb-4">
                <span className="text-[10px] text-[#D97706] uppercase tracking-[0.25em] font-bold font-mono">
                  Room Title Heading (H1)
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
                  The Glasshouse Skyline Penthouse
                </h1>
                <p className="text-xs text-gray-500">270° Panoramic City Views • Private Heated Rooftop Plunge Pool</p>
              </div>

              <div className="space-y-1 border-b border-gray-200 pb-4">
                <span className="text-[10px] text-[#D97706] uppercase tracking-[0.25em] font-bold font-mono">
                  Nightly Rate Specifier
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#0B132B]">$280.00</span>
                  <span className="text-xs text-gray-500">/ night (All utilities, cleaning &amp; gigabit WiFi included)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'buttons' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">Direct Booking CTA</span>
                <button className="w-full py-3.5 bg-[#0B132B] hover:bg-[#1C2541] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer">
                  <KeyRound className="w-4 h-4 text-[#D97706]" />
                  <span>Reserve Suite ($280/night)</span>
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">Stay Estimator CTA</span>
                <button className="w-full py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer">
                  <CalendarCheck className="w-4 h-4" />
                  <span>Simulate Extended Stay Discounts</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'badges' && (
            <div className="flex flex-wrap gap-3 bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-full flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Instant Self Keyless Check-In
              </span>

              <span className="text-xs font-bold px-3 py-1 bg-amber-50 text-amber-900 border border-amber-300 rounded-full flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-amber-600" />
                Organic Latex King Bed
              </span>

              <span className="text-xs font-mono font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                500 Mbps Dedicated WiFi
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
