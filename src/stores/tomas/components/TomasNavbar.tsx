import React, { useState } from 'react';
import {
  Wrench,
  Truck,
  PhoneCall,
  Search,
  ShieldCheck,
  Calendar,
  Layers,
  MapPin,
  Menu,
  X,
  Clock,
  HardHat,
  ChevronDown
} from 'lucide-react';
import { CurrencyCode } from '../../../types';
import { MachineryItem } from '../types';
import { formatPrice } from '../../../utils/formatters';

interface TomasNavbarProps {
  currentCategory: string;
  onSelectCategory: (category: string) => void;
  currency: CurrencyCode;
  onChangeCurrency: (curr: CurrencyCode) => void;
  bookingCount: number;
  onOpenBookings: () => void;
  onOpenSpecsTable: () => void;
  onOpenDispatchModal: () => void;
  onOpenDesignKit?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  allMachinery: MachineryItem[];
  onSelectMachinery: (item: MachineryItem) => void;
  selectedDepot: string;
  onSelectDepot: (depot: string) => void;
}

export const TomasNavbar: React.FC<TomasNavbarProps> = ({
  currentCategory,
  onSelectCategory,
  currency,
  onChangeCurrency,
  bookingCount,
  onOpenBookings,
  onOpenSpecsTable,
  onOpenDispatchModal,
  onOpenDesignKit,
  searchQuery,
  onSearchChange,
  allMachinery,
  onSelectMachinery,
  selectedDepot,
  onSelectDepot
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    'All Fleet',
    'Excavators',
    'Wheel Loaders',
    'Bulldozers',
    'Articulated Haulers',
    'Aerial Boom Lifts',
    'Compactors & Rollers'
  ];

  const depots = [
    'Depot Alpha - Chicago Logistics Hub',
    'Depot Bravo - Houston Gulf Terminus',
    'Depot Charlie - Denver Mountain Depot'
  ];

  const searchResults = searchQuery.trim()
    ? allMachinery.filter(
        (m) =>
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-40 bg-[#0F1115] text-[#ECEFF4] border-b border-[#252932] shadow-xl font-sans">
      {/* Industrial Dispatch Telemetry Top Bar */}
      <div className="bg-[#181B22] border-b border-[#252932] py-2 px-4 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          {/* Dispatch Live Status */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 text-[10px] font-bold uppercase tracking-wider rounded-xs">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
              Depots Live • 24/7 Fleet Dispatch Active
            </span>
            <span className="hidden md:flex items-center gap-1 text-gray-400 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              Standard Lowboy Freight Lead Time: Under 4 Hours Metro
            </span>
          </div>

          {/* Hotline & Depot Switcher */}
          <div className="flex items-center gap-4 text-[11px]">
            {/* Active Depot Picker */}
            <div className="flex items-center gap-1 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              <select
                value={selectedDepot}
                onChange={(e) => onSelectDepot(e.target.value)}
                className="bg-[#0F1115] text-gray-200 border border-[#333842] text-[11px] px-2 py-0.5 rounded-xs focus:outline-none focus:border-[#F59E0B]"
              >
                {depots.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[#F59E0B] font-bold">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>1-800-TOMAS-FLEET</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Command Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onSelectCategory('All Fleet')}
          >
            <div className="w-11 h-11 bg-[#F59E0B] text-black font-extrabold flex items-center justify-center rounded-xs shadow-md group-hover:bg-[#E58E0B] transition-colors">
              <Wrench className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white uppercase font-sans">
                  TOMAS
                </span>
                <span className="text-[10px] font-mono uppercase bg-[#252932] px-2 py-0.5 text-[#F59E0B] font-semibold tracking-widest border border-[#3A404D]">
                  HEAVY RENTALS
                </span>
              </div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-gray-400">
                Tier-1 Commercial Fleet &amp; Heavy Plant Hire
              </p>
            </div>
          </div>

          {/* Desktop Nav Categories */}
          <nav className="hidden xl:flex items-center gap-1 text-xs font-semibold uppercase tracking-wider">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3 py-1.5 transition-colors rounded-xs ${
                  currentCategory === cat
                    ? 'bg-[#F59E0B] text-black font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-[#1C2028]'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Action Center */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2.5 bg-[#1C2028] hover:bg-[#282E3A] border border-[#2D333F] text-gray-200 rounded-xs transition-colors"
                title="Search fleet models & specs"
              >
                <Search className="w-4 h-4 text-[#F59E0B]" />
              </button>

              {/* Live Search Popup */}
              {isSearchOpen && (
                <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-[#181B22] border border-[#333842] p-4 shadow-2xl z-50 rounded-xs">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      placeholder="Search CAT 336, Komatsu, 40-ton, boom lift..."
                      className="w-full text-xs p-2.5 bg-[#0F1115] border border-[#3A404D] text-white focus:outline-none focus:border-[#F59E0B] pr-8 font-mono"
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        onClick={() => onSearchChange('')}
                        className="absolute right-2.5 top-2.5 text-gray-400 hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {searchResults.length > 0 && (
                    <div className="mt-3 divide-y divide-[#252932] max-h-60 overflow-y-auto">
                      {searchResults.map((m) => (
                        <div
                          key={m.id}
                          onClick={() => {
                            onSelectMachinery(m);
                            setIsSearchOpen(false);
                          }}
                          className="py-2.5 flex items-center gap-3 cursor-pointer hover:bg-[#252932] p-1.5 transition-colors"
                        >
                          <img
                            src={m.images[0]}
                            alt={m.name}
                            className="w-10 h-10 object-cover rounded-xs border border-[#3A404D]"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="font-mono text-xs font-bold text-white truncate">{m.modelCode} • {m.name}</p>
                            <p className="text-[11px] text-[#F59E0B] font-mono">{formatPrice(m.dailyRate, currency)} / Day</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Spec Matrix Button */}
            <button
              onClick={onOpenSpecsTable}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 bg-[#1C2028] hover:bg-[#282E3A] border border-[#2D333F] text-xs font-mono text-gray-200 rounded-xs transition-colors"
              title="Compare Fleet Technical Specifications"
            >
              <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Spec Matrix</span>
            </button>

            {/* Design Kit Button */}
            {onOpenDesignKit && (
              <button
                onClick={onOpenDesignKit}
                className="hidden md:flex items-center gap-1.5 px-3 py-2 bg-[#181B22] hover:bg-[#222731] border border-[#F59E0B]/40 text-xs font-mono text-[#F59E0B] rounded-xs transition-colors"
                title="Tomas Heavy Plant Design System & Tokens"
              >
                <Wrench className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Design Kit</span>
              </button>
            )}

            {/* Direct Logistics Dispatch Quote CTA */}
            <button
              onClick={onOpenDispatchModal}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-[#252932] hover:bg-[#323846] border border-[#3A404D] text-xs font-bold text-gray-100 rounded-xs transition-colors"
            >
              <Truck className="w-4 h-4 text-[#F59E0B]" />
              <span>Freight Dispatch</span>
            </button>

            {/* Active Rental Reservations Cart */}
            <button
              onClick={onOpenBookings}
              className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#E58E0B] text-black font-extrabold px-4 py-2.5 rounded-xs transition-colors shadow-lg"
            >
              <HardHat className="w-4 h-4 stroke-[2.5]" />
              <span className="text-xs uppercase font-mono tracking-wider hidden sm:inline">
                Hire Fleet
              </span>
              <span className="w-5 h-5 bg-black text-[#F59E0B] rounded-full text-xs font-bold flex items-center justify-center font-mono">
                {bookingCount}
              </span>
            </button>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 bg-[#1C2028] border border-[#2D333F] text-white rounded-xs"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-[#252932] bg-[#14171E] p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left p-2.5 text-xs font-mono uppercase tracking-wider border rounded-xs ${
                  currentCategory === cat
                    ? 'border-[#F59E0B] bg-[#F59E0B] text-black font-bold'
                    : 'border-[#2D333F] bg-[#1C2028] text-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2 border-t border-[#252932]">
            {onOpenDesignKit && (
              <button
                onClick={() => {
                  onOpenDesignKit();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2 text-xs font-mono text-left text-[#F59E0B] flex items-center gap-2"
              >
                <Wrench className="w-4 h-4 text-[#F59E0B]" />
                <span>Tomas Heavy Design Kit</span>
              </button>
            )}
            <button
              onClick={() => {
                onOpenSpecsTable();
                setIsMobileMenuOpen(false);
              }}
              className="p-2 text-xs font-mono text-left text-gray-300 flex items-center gap-2 hover:text-[#F59E0B]"
            >
              <Layers className="w-4 h-4 text-[#F59E0B]" />
              <span>Full Engineering Spec Comparison</span>
            </button>
            <button
              onClick={() => {
                onOpenDispatchModal();
                setIsMobileMenuOpen(false);
              }}
              className="p-2 text-xs font-mono text-left text-gray-300 flex items-center gap-2 hover:text-[#F59E0B]"
            >
              <Truck className="w-4 h-4 text-[#F59E0B]" />
              <span>Heavy Transport Freight Estimator</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
