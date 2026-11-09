import React from 'react';
import {
  Wrench,
  Truck,
  HardHat,
  ShieldCheck,
  Zap,
  Gauge,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { MachineryItem } from '../types';
import { CurrencyCode } from '../../../types';
import { formatPrice } from '../../../utils/formatters';

interface TomasMachineryCardProps {
  machinery: MachineryItem;
  currency: CurrencyCode;
  onOpenDetail: (machinery: MachineryItem) => void;
  onQuickBook: (machinery: MachineryItem) => void;
}

export const TomasMachineryCard: React.FC<TomasMachineryCardProps> = ({
  machinery,
  currency,
  onOpenDetail,
  onQuickBook
}) => {
  return (
    <div className="group bg-[#14171E] border border-[#252932] hover:border-[#F59E0B] transition-all duration-300 rounded-xs flex flex-col justify-between overflow-hidden shadow-lg font-sans">
      {/* Top Image & Status Badges */}
      <div>
        <div
          className="relative aspect-[16/10] bg-[#0A0C0F] overflow-hidden cursor-pointer"
          onClick={() => onOpenDetail(machinery)}
        >
          <img
            src={machinery.images[0]}
            alt={machinery.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Model Code Overlay Badge */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <span className="bg-black/90 backdrop-blur-xs text-[#F59E0B] font-mono text-[10px] font-extrabold px-2.5 py-1 uppercase rounded-xs border border-[#3A404D]">
              {machinery.modelCode}
            </span>
            <span className="bg-[#181B22]/90 text-white font-mono text-[9px] px-2 py-0.5 rounded-xs border border-[#2D333F]">
              {machinery.category}
            </span>
          </div>

          {/* Availability Status Badge */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 bg-black/85 text-emerald-400 font-mono text-[10px] font-bold px-2.5 py-1 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {machinery.availabilityStatus}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 space-y-3 font-mono">
          <div>
            <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase">
              <span>{machinery.manufacturer}</span>
              <span className="text-gray-300">{machinery.depotLocation.split('-')[0]}</span>
            </div>

            <h3
              onClick={() => onOpenDetail(machinery)}
              className="text-base font-bold text-white hover:text-[#F59E0B] cursor-pointer transition-colors leading-snug line-clamp-1 mt-0.5"
            >
              {machinery.name}
            </h3>
          </div>

          {/* Key Specs Row */}
          <div className="grid grid-cols-2 gap-2 p-2.5 bg-[#0F1115] border border-[#252932] text-[11px] rounded-xs">
            <div>
              <span className="text-gray-500 text-[9px] block">OPERATING WEIGHT</span>
              <strong className="text-gray-200">{machinery.specs.operatingWeight.split('(')[0]}</strong>
            </div>
            <div>
              <span className="text-gray-500 text-[9px] block">NET ENGINE POWER</span>
              <strong className="text-gray-200">{machinery.specs.enginePower.split('@')[0]}</strong>
            </div>
          </div>

          {/* Certified Operator Badge if enabled */}
          {machinery.operatorAvailable && (
            <div className="flex items-center gap-1.5 text-[11px] text-amber-300/90 font-mono">
              <HardHat className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Certified Plant Operator Available</span>
            </div>
          )}
        </div>
      </div>

      {/* Pricing & Booking Footer */}
      <div className="p-4 pt-0 font-mono space-y-3">
        <div className="pt-3 border-t border-[#252932] flex items-baseline justify-between">
          <div>
            <span className="text-xs text-gray-400 block text-[9px] uppercase">Daily Plant Rate</span>
            <span className="text-lg font-extrabold text-[#F59E0B]">
              {formatPrice(machinery.dailyRate, currency)}
            </span>
            <span className="text-[10px] text-gray-400"> / Day</span>
          </div>

          <div className="text-right">
            <span className="text-xs text-gray-400 block text-[9px] uppercase">Weekly Discount</span>
            <span className="text-xs font-bold text-gray-300">
              {formatPrice(machinery.weeklyRate, currency)} / Wk
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onOpenDetail(machinery)}
            className="py-2.5 bg-[#1C2028] hover:bg-[#282E3A] border border-[#333842] text-xs font-bold text-gray-200 uppercase tracking-wider rounded-xs transition-colors"
          >
            Full Specs
          </button>
          <button
            onClick={() => onQuickBook(machinery)}
            className="py-2.5 bg-[#F59E0B] hover:bg-[#E58E0B] text-black font-extrabold text-xs uppercase tracking-wider rounded-xs transition-colors shadow-md"
          >
            Hire Machine
          </button>
        </div>
      </div>
    </div>
  );
};
