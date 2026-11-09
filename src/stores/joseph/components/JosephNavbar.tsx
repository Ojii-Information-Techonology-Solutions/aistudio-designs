import React, { useState } from 'react';
import {
  Building2,
  CalendarCheck,
  Search,
  Menu,
  X,
  Compass,
  KeyRound,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { JosephRoom } from '../types';

interface JosephNavbarProps {
  bookingCount: number;
  onOpenBookings: () => void;
  onOpenEstimator: () => void;
  onOpenDesignKit?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  allRooms: JosephRoom[];
  onSelectRoom: (room: JosephRoom) => void;
}

export const JosephNavbar: React.FC<JosephNavbarProps> = ({
  bookingCount,
  onOpenBookings,
  onOpenEstimator,
  onOpenDesignKit,
  searchQuery,
  onSearchChange,
  allRooms,
  onSelectRoom
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchResults = searchQuery.trim()
    ? allRooms.filter(
        (r) =>
          r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.roomType.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.neighborhood.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-[37px] z-40 bg-[#0B132B] text-white border-b border-[#1C2541] shadow-md font-sans">
      {/* Top Banner */}
      <div className="bg-[#060A17] py-1 px-4 text-center text-[11px] text-[#D97706] flex items-center justify-between font-medium">
        <div className="flex items-center gap-2 mx-auto">
          <KeyRound className="w-3.5 h-3.5" />
          <span>Joseph Boutique Residences • Direct Booking Guarantee • Complimentary Gigabit WiFi &amp; Espresso</span>
        </div>
        {onOpenDesignKit && (
          <button
            onClick={onOpenDesignKit}
            className="hidden md:flex items-center gap-1 text-[#D97706] hover:underline text-[10px] uppercase tracking-wider font-mono font-bold"
          >
            <Compass className="w-3 h-3" />
            <span>Design Kit</span>
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#1C2541] border border-[#D97706]/40 flex items-center justify-center text-[#D97706] group-hover:scale-105 transition-transform shadow-xs">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white block">
                JOSEPH
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D97706] font-mono font-bold block -mt-1">
                Rentable Rooms &amp; Urban Lofts
              </span>
            </div>
          </button>
        </div>

        {/* Center Search / Estimator */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search penthouses, artist lofts, cedar pods..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-[#1C2541] border border-gray-700 rounded-full text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-[#D97706]"
            />
            {searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#1C2541] border border-gray-700 rounded-xl shadow-xl max-h-60 overflow-y-auto p-2 z-50">
                {searchResults.length > 0 ? (
                  searchResults.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => {
                        onSelectRoom(r);
                        onSearchChange('');
                      }}
                      className="w-full text-left p-2 hover:bg-[#0B132B] rounded-lg flex items-center gap-3 text-xs"
                    >
                      <img src={r.images[0]} alt={r.name} className="w-8 h-8 rounded-md object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-white truncate">{r.name}</p>
                        <p className="text-[10px] text-[#D97706]">{r.roomType} • ${r.pricePerNight}/night</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="p-3 text-xs text-gray-400 text-center">No suites found.</p>
                )}
              </div>
            )}
          </div>

          <button
            onClick={onOpenEstimator}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C2541] hover:bg-[#283556] border border-[#D97706]/40 text-xs font-bold text-[#D97706] transition-colors cursor-pointer"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Extended Stay Estimator</span>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenEstimator}
            className="lg:hidden p-2 rounded-lg bg-[#1C2541] text-[#D97706]"
            title="Extended Stay Estimator"
          >
            <CalendarCheck className="w-4 h-4" />
          </button>

          {/* Bookings / Keys Button */}
          <button
            onClick={onOpenBookings}
            className="relative px-3.5 py-1.5 bg-[#D97706] hover:bg-[#B45309] text-white rounded-full text-xs font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <KeyRound className="w-4 h-4" />
            <span className="hidden sm:inline">My Keycard &amp; Bookings</span>
            {bookingCount > 0 && (
              <span className="w-5 h-5 bg-black text-[#D97706] rounded-full flex items-center justify-center font-bold text-[10px]">
                {bookingCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#060A17] border-t border-gray-800 px-4 py-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search rooms..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#1C2541] border border-gray-700 rounded-lg text-xs text-white"
            />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                onOpenEstimator();
                setIsMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-lg bg-[#1C2541] text-left text-xs font-bold flex items-center gap-2 text-[#D97706]"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Extended Stay Rate Estimator</span>
            </button>
            {onOpenDesignKit && (
              <button
                onClick={() => {
                  onOpenDesignKit();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-lg bg-[#1C2541] text-left text-xs flex items-center gap-2 text-[#D97706]"
              >
                <Compass className="w-4 h-4" />
                <span>Joseph Design System</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
