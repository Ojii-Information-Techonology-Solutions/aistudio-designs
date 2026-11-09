import React from 'react';
import { ArrowRight, ShieldCheck, Wrench, Truck, Cpu, Clock, CheckCircle2 } from 'lucide-react';

interface TomasHeroProps {
  onExploreFleet: () => void;
  onOpenSpecsTable: () => void;
  onOpenDispatchModal: () => void;
}

export const TomasHero: React.FC<TomasHeroProps> = ({
  onExploreFleet,
  onOpenSpecsTable,
  onOpenDispatchModal
}) => {
  return (
    <section className="relative bg-[#0A0C0F] text-[#ECEFF4] border-b border-[#252932] overflow-hidden font-sans">
      {/* Subtle industrial grid pattern backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181B22] border border-[#F59E0B]/50 rounded-xs text-[11px] font-mono font-bold text-[#F59E0B] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <span>Commercial Heavy Equipment Hire &amp; Plant Fleet</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
              INDUSTRIAL FLEET <br />
              <span className="text-[#F59E0B]">HEAVY RENTAL POWER</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl font-normal leading-relaxed">
              Tier-1 certified excavators (13–50T), wheel loaders, dozers, and ultra-high boom lifts. Maintained by factory master technicians with live GPS telematics and certified OSHA operators.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreFleet}
                className="px-7 py-3.5 bg-[#F59E0B] hover:bg-[#E58E0B] text-black font-extrabold text-xs uppercase tracking-wider font-mono rounded-xs transition-all shadow-lg flex items-center gap-2 group"
              >
                <span>Reserve Equipment Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSpecsTable}
                className="px-6 py-3.5 bg-[#1C2028] hover:bg-[#282E3A] border border-[#3A404D] text-gray-200 font-mono text-xs uppercase tracking-wider rounded-xs transition-colors"
              >
                Engineering Spec Matrix
              </button>

              <button
                onClick={onOpenDispatchModal}
                className="px-6 py-3.5 bg-[#14171E] hover:bg-[#1C2028] border border-[#F59E0B]/30 text-[#F59E0B] font-mono text-xs uppercase tracking-wider rounded-xs transition-colors"
              >
                Freight Estimator
              </button>
            </div>

            {/* Quick Fleet Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#252932] font-mono text-xs">
              <div className="space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>EPA Tier 4 Final</span>
                </p>
                <p className="text-[11px] text-gray-400">Zero-emission DPF low hours</p>
              </div>

              <div className="space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>OSHA Operators</span>
                </p>
                <p className="text-[11px] text-gray-400">Certified plant crew available</p>
              </div>

              <div className="space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>4-Hour Rapid Dispatch</span>
                </p>
                <p className="text-[11px] text-gray-400">Heavy lowboy transport fleet</p>
              </div>
            </div>
          </div>

          {/* Right Fleet Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#14171E] border border-[#2F3542] rounded-xs p-5 shadow-2xl space-y-4">
              <div className="relative aspect-[16/10] bg-[#0A0C0F] border border-[#252932] overflow-hidden rounded-xs">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85"
                  alt="CAT 336 Excavator"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#F59E0B] text-black font-mono text-[10px] font-extrabold px-2.5 py-1 uppercase rounded-xs">
                  Immediate Dispatch Available
                </div>
                <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-xs text-white font-mono text-xs px-3 py-1 border border-[#3A404D]">
                  36-Ton Class • 314 HP Diesel
                </div>
              </div>

              <div className="space-y-2 font-mono">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase">Featured Flagship Unit</span>
                    <h3 className="text-base font-bold text-white">CAT 336 Heavy Hydraulic Excavator</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-[#F59E0B]">$1,450 / Day</span>
                    <p className="text-[10px] text-gray-400">$5,800 / Week</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 p-2.5 bg-[#0F1115] border border-[#252932] text-[11px] text-gray-300">
                  <div>
                    <span className="text-gray-500 block text-[9px]">Operating Weight:</span>
                    <strong>37,200 kg</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[9px]">Bucket Capacity:</span>
                    <strong>2.41 m³</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[9px]">Max Dig Depth:</span>
                    <strong>8.21 m</strong>
                  </div>
                </div>

                <button
                  onClick={onExploreFleet}
                  className="w-full py-2.5 bg-[#252932] hover:bg-[#F59E0B] hover:text-black text-white font-bold text-xs uppercase tracking-wider transition-colors rounded-xs"
                >
                  Configure Hire &amp; Book Machine →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
