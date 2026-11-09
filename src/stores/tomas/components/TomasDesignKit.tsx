import React, { useState } from 'react';
import {
  X,
  Wrench,
  Truck,
  HardHat,
  ShieldCheck,
  Layers,
  Palette,
  Type,
  Activity,
  CheckCircle,
  Copy,
  Sliders,
  Flame,
  Clock,
  MapPin,
  FileText
} from 'lucide-react';

interface TomasDesignKitProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TomasDesignKit: React.FC<TomasDesignKitProps> = ({
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
    { name: 'Carbon Pit Dark', hex: '#0F1115', role: 'Main Canvas / Viewport Background', class: 'bg-[#0F1115]' },
    { name: 'Console Slate', hex: '#181B22', role: 'Telemetry Panel / Command Headers', class: 'bg-[#181B22]' },
    { name: 'Equipment Plate', hex: '#1C2028', role: 'Machinery Cards & Interactive Containers', class: 'bg-[#1C2028]' },
    { name: 'Safety Amber', hex: '#F59E0B', role: 'Primary Brand Action & Warning Accent', class: 'bg-[#F59E0B]' },
    { name: 'Caution Ochre', hex: '#E58E0B', role: 'Hover Highlights & Active Toggles', class: 'bg-[#E58E0B]' },
    { name: 'Hydraulic Danger', hex: '#DC2626', role: 'Emergency Dispatch & Out-of-Stock Alert', class: 'bg-[#DC2626]' },
    { name: 'Yard Active Green', hex: '#10B981', role: 'In-Yard Stock & OSHA Compliance', class: 'bg-[#10B981]' },
    { name: 'Structural Seam', hex: '#252932', role: 'Industrial Dividers & Card Borders', class: 'bg-[#252932]' },
    { name: 'Steel Framing', hex: '#3A404D', role: 'Heavy Input Outlines & Control Rings', class: 'bg-[#3A404D]' },
    { name: 'Telemetry White', hex: '#ECEFF4', role: 'Primary Monospace Data & Readouts', class: 'bg-[#ECEFF4]' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0F1115] w-full max-w-5xl border-2 border-[#252932] my-auto max-h-[92vh] overflow-y-auto text-[#ECEFF4] shadow-2xl p-6 sm:p-10 font-sans rounded-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252932]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F59E0B] text-black font-black flex items-center justify-center rounded-xs shadow-md">
              <Wrench className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-[#F59E0B]">
                src/stores/tomas/
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
                Tomas Heavy Machinery Design System
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-[#181B22] border border-[#252932] hover:bg-[#F59E0B] hover:text-black transition-colors rounded-xs text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 pt-6 border-b border-[#252932] overflow-x-auto no-scrollbar font-mono text-xs uppercase tracking-wider font-bold">
          {[
            { id: 'colors', label: 'Safety Color Tokens', icon: Palette },
            { id: 'typography', label: 'Technical Spec Typography', icon: Type },
            { id: 'buttons', label: 'Heavy Action Buttons', icon: Layers },
            { id: 'badges', label: 'OSHA & Telemetry Badges', icon: ShieldCheck },
            { id: 'inputs', label: 'Plant Rental Controls', icon: Sliders }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#F59E0B] text-[#F59E0B] bg-[#181B22]/50'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#F59E0B]" />
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
                <h3 className="text-lg font-black uppercase tracking-wider text-white font-mono flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#F59E0B]" />
                  <span>High-Visibility Industrial Spectrum</span>
                </h3>
                <p className="text-xs text-gray-400 font-mono">
                  Carbon steel backgrounds paired with high-contrast Safety Amber, OSHA warning tones, and clean white telemetry.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {COLOR_PALETTE.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => copyToClipboard(c.name, c.hex)}
                    className="p-3 bg-[#181B22] border border-[#252932] space-y-3 cursor-pointer hover:border-[#F59E0B] transition-all group rounded-xs"
                  >
                    <div
                      className={`w-full h-16 border border-[#3A404D]/60 shadow-xs flex items-end p-1.5 rounded-xs ${c.class}`}
                    >
                      {copiedToken === c.name && (
                        <span className="text-[9px] bg-black text-[#F59E0B] px-1.5 py-0.5 font-mono font-bold uppercase rounded-xs">
                          Copied!
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-white">{c.name}</span>
                        <span className="text-[10px] font-mono text-[#F59E0B]">{c.hex}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-mono mt-1 leading-tight">{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typography */}
          {activeTab === 'typography' && (
            <div className="space-y-8 font-mono">
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                  <Type className="w-4 h-4 text-[#F59E0B]" />
                  <span>Telemetry &amp; Engineering Type Hierarchy</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Bold industrial display titles with precision monospace data labels and specs.
                </p>
              </div>

              <div className="space-y-6 border border-[#252932] bg-[#181B22] p-6 rounded-xs">
                <div className="space-y-1 border-b border-[#252932] pb-4">
                  <span className="text-[10px] text-[#F59E0B] uppercase tracking-[0.25em] font-bold">Display Header 1 (Heavy Equipment Model Code)</span>
                  <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-wider uppercase">
                    CAT 336-07 • Heavy Hydraulic Excavator (36-Ton)
                  </h1>
                </div>

                <div className="space-y-1 border-b border-[#252932] pb-4">
                  <span className="text-[10px] text-[#F59E0B] uppercase tracking-[0.25em] font-bold">Telemetry Subtitle &amp; Pricing Readout</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#F59E0B]">$1,450.00</span>
                    <span className="text-xs text-gray-400 font-mono uppercase">/ Day (Base Machine Hire)</span>
                  </div>
                </div>

                <div className="space-y-1 border-b border-[#252932] pb-4">
                  <span className="text-[10px] text-[#F59E0B] uppercase tracking-[0.25em] font-bold">Engineering Specification Micro-Data</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
                    <div className="bg-[#0F1115] p-2 border border-[#252932] rounded-xs">
                      <span className="text-[10px] text-gray-400 block uppercase">Flywheel Power:</span>
                      <strong className="text-white text-sm">314 HP (234 kW)</strong>
                    </div>
                    <div className="bg-[#0F1115] p-2 border border-[#252932] rounded-xs">
                      <span className="text-[10px] text-gray-400 block uppercase">Max Dig Depth:</span>
                      <strong className="text-white text-sm">24 ft 8 in (7.52m)</strong>
                    </div>
                    <div className="bg-[#0F1115] p-2 border border-[#252932] rounded-xs">
                      <span className="text-[10px] text-gray-400 block uppercase">Operating Weight:</span>
                      <strong className="text-white text-sm">81,400 lbs (36.9T)</strong>
                    </div>
                    <div className="bg-[#0F1115] p-2 border border-[#252932] rounded-xs">
                      <span className="text-[10px] text-gray-400 block uppercase">Hydraulic Flow:</span>
                      <strong className="text-white text-sm">147 gpm (558 L/min)</strong>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#F59E0B] uppercase tracking-[0.25em] font-bold">Commercial Logistics Disclaimer</span>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-3xl">
                    All heavy plant dispatched with full preventative maintenance logbook, EPA Tier 4 Final emission compliance certs, and valid 2026 OSHA safety inspection stickers. Lowboy transport quotes are calculated based on depot axle loading.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          {activeTab === 'buttons' && (
            <div className="space-y-6 font-mono">
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#F59E0B]" />
                  <span>Industrial Command Buttons</span>
                </h3>
                <p className="text-xs text-gray-400">
                  High-contrast rectangular tactile buttons with bold uppercase lettering.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#181B22] p-6 border border-[#252932] rounded-xs">
                {/* Primary Button */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">Primary Dispatch Action</span>
                  <button className="w-full py-4 bg-[#F59E0B] hover:bg-[#E58E0B] text-black font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-xs shadow-md">
                    <HardHat className="w-4 h-4 stroke-[2.5]" />
                    <span>Reserve Fleet Unit • $1,450 / Day</span>
                  </button>
                </div>

                {/* Secondary Button */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">Secondary Spec Comparison</span>
                  <button className="w-full py-4 bg-[#1C2028] hover:bg-[#252932] border border-[#3A404D] text-gray-200 text-xs font-bold uppercase tracking-wider transition-colors rounded-xs flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4 text-[#F59E0B]" />
                    <span>Compare Engineering Matrix</span>
                  </button>
                </div>

                {/* Logistics Haul Button */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">Heavy Freight Quote Action</span>
                  <button className="w-full py-4 bg-[#252932] hover:bg-[#323846] border border-[#3A404D] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-xs">
                    <Truck className="w-4 h-4 text-[#F59E0B]" />
                    <span>Calculate Lowboy Freight Rates</span>
                  </button>
                </div>

                {/* Emergency Hotline Action */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">Emergency 24/7 Dispatch</span>
                  <button className="w-full py-4 bg-[#DC2626]/20 hover:bg-[#DC2626]/30 border border-[#DC2626]/50 text-[#F87171] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-xs">
                    <Flame className="w-4 h-4" />
                    <span>Urgent Jobsite Breakdown Dispatch</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Badges */}
          {activeTab === 'badges' && (
            <div className="space-y-6 font-mono">
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                  <span>OSHA &amp; Telemetry Status Badges</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Yard availability statuses, compliance pills, and tonnage tags.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 bg-[#181B22] p-6 border border-[#252932] rounded-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 rounded-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  In Yard / Immediate Dispatch
                </span>

                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#F59E0B] text-black rounded-xs">
                  OSHA Certified Operator Included
                </span>

                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#252932] text-gray-200 border border-[#3A404D] rounded-xs">
                  EPA Tier 4 Final Compliant
                </span>

                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#0F1115] text-[#F59E0B] border border-[#F59E0B]/50 rounded-xs font-mono">
                  36.9-Ton Operating Mass
                </span>

                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#DC2626]/20 text-[#F87171] border border-[#DC2626]/40 rounded-xs">
                  Wide Load Escort Permit Req.
                </span>

                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#181B22] text-gray-300 border border-[#3A404D] rounded-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#F59E0B]" />
                  4-Hour Metro Lowboy Transit
                </span>
              </div>
            </div>
          )}

          {/* Inputs & Rental Controls */}
          {activeTab === 'inputs' && (
            <div className="space-y-6 font-mono">
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#F59E0B]" />
                  <span>Machinery Rental Calculators &amp; Selectors</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Duration tier multipliers, operator checkboxes, and attachment toggles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#181B22] p-6 border border-[#252932] rounded-xs">
                {/* Duration Rate Toggle */}
                <div className="p-4 bg-[#0F1115] border border-[#252932] space-y-3 text-xs rounded-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-gray-200">
                      Rental Tier Billing Mode:
                    </span>
                    <span className="text-[10px] text-[#F59E0B] font-bold uppercase">Weekly Discount -15%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="py-2 text-center bg-[#181B22] border border-[#3A404D] text-gray-300 rounded-xs">
                      Daily ($1,450)
                    </button>
                    <button className="py-2 text-center bg-[#F59E0B] text-black font-extrabold rounded-xs">
                      Weekly ($7,250)
                    </button>
                    <button className="py-2 text-center bg-[#181B22] border border-[#3A404D] text-gray-300 rounded-xs">
                      Monthly ($22k)
                    </button>
                  </div>
                </div>

                {/* Operator Addon Box */}
                <div className="p-4 bg-[#0F1115] border border-[#252932] space-y-3 text-xs rounded-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-gray-200">
                      Union Certified Plant Operator:
                    </span>
                    <span className="text-[10px] text-[#10B981] font-bold uppercase">OSHA 30hr Card</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#181B22] border border-[#3A404D] rounded-xs">
                    <span className="text-gray-300 font-sans text-xs">Include Heavy Equipment Operator (+$480/day)</span>
                    <span className="w-5 h-5 bg-[#F59E0B] text-black rounded-xs flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
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
