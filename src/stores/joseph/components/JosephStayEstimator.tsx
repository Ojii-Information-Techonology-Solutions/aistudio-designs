import React, { useState } from 'react';
import { JosephRoom } from '../types';
import { X, Sparkles, Building2, CalendarCheck, ArrowRight, DollarSign } from 'lucide-react';

interface JosephStayEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
  allRooms: JosephRoom[];
  onSelectRoomAndDays: (room: JosephRoom, days: number) => void;
}

export const JosephStayEstimator: React.FC<JosephStayEstimatorProps> = ({
  isOpen,
  onClose,
  allRooms,
  onSelectRoomAndDays
}) => {
  if (!isOpen) return null;

  const [selectedRoom, setSelectedRoom] = useState<JosephRoom>(allRooms[0]);
  const [stayDays, setStayDays] = useState<number>(14);

  // Discount tiers:
  // 1-6 nights: 0%
  // 7-29 nights: 15% weekly discount
  // 30+ nights: 30% monthly executive discount
  let discountPercent = 0;
  if (stayDays >= 30) {
    discountPercent = 30;
  } else if (stayDays >= 7) {
    discountPercent = 15;
  }

  const rawCost = selectedRoom.pricePerNight * stayDays;
  const savings = Math.round((rawCost * discountPercent) / 100);
  const discountedTotal = rawCost - savings;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl border border-gray-200 my-auto max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl p-6 sm:p-8 text-[#0B132B]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center max-w-lg mx-auto space-y-2 pb-6 border-b border-gray-200">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0B132B] text-[#D97706] rounded-full text-xs font-bold uppercase">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Extended Stay &amp; Sublease Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B]">
            Calculate Long-Term Stay Savings
          </h2>
          <p className="text-xs text-gray-600">
            Enjoy up to 30% off standard nightly rates with all utilities, gigabit WiFi, and bi-weekly housekeeping included.
          </p>
        </div>

        <div className="py-6 space-y-6">
          {/* Pick room */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-700 block uppercase">
              1. Select Room / Loft:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {allRooms.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRoom(r)}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    selectedRoom.id === r.id
                      ? 'border-[#D97706] bg-[#FFFBEB] shadow-xs'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <img src={r.images[0]} alt={r.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#0B132B] truncate">{r.name}</p>
                    <p className="text-[10px] text-[#D97706]">${r.pricePerNight}/night • {r.sqft} sqft</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Days slider */}
          <div className="space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-200">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-700 uppercase">
                2. Stay Duration:
              </label>
              <span className="font-black text-sm text-[#0B132B]">
                {stayDays} {stayDays === 1 ? 'Night' : 'Nights'} ({Math.round(stayDays / 7)} Weeks)
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="90"
              value={stayDays}
              onChange={(e) => setStayDays(Number(e.target.value))}
              className="w-full accent-[#D97706]"
            />

            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>1 Night (Standard)</span>
              <span>7 Nights (15% Off)</span>
              <span>30+ Nights (30% Off)</span>
              <span>90 Nights</span>
            </div>
          </div>

          {/* Savings summary */}
          <div className="p-4 bg-[#0B132B] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-gray-400 uppercase font-bold block">
                Estimated Extended Lease Total
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#D97706]">
                  ${discountedTotal}
                </span>
                {savings > 0 && (
                  <span className="text-xs text-gray-400 line-through">
                    ${rawCost}
                  </span>
                )}
              </div>
              {savings > 0 && (
                <p className="text-[11px] text-emerald-400 font-bold mt-0.5">
                  You save ${savings} with our {stayDays >= 30 ? '30% Monthly' : '15% Weekly'} tier!
                </p>
              )}
            </div>

            <button
              onClick={() => {
                onSelectRoomAndDays(selectedRoom, stayDays);
                onClose();
              }}
              className="px-6 py-3 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Book Estimated Stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
