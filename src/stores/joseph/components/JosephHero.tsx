import React from 'react';
import { Building2, Sparkles, KeyRound, ShieldCheck, ArrowRight, BedDouble, Wifi } from 'lucide-react';

interface JosephHeroProps {
  onExploreClick: () => void;
  onOpenEstimator: () => void;
}

export const JosephHero: React.FC<JosephHeroProps> = ({
  onExploreClick,
  onOpenEstimator
}) => {
  return (
    <section className="relative bg-[#060A17] text-white overflow-hidden border-b border-[#1C2541]">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1C2541_1px,transparent_1px),linear-gradient(to_bottom,#1C2541_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C2541] border border-[#D97706]/40 rounded-full text-xs text-[#D97706]">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Boutique Urban Stays • Flexible Nightly &amp; Monthly Leases</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Curated Spaces for <br />
              <span className="text-[#D97706] italic">Rest, Focus &amp; Creation</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed">
              Step into hand-crafted living. From high-altitude skyline penthouses with plunge pools to sound-isolated cedar study pods and sunlit artist lofts.
            </p>

            {/* Specs bar */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 bg-[#0B132B] border border-[#1C2541] rounded-xl text-left">
                <Wifi className="w-4 h-4 text-[#D97706] mb-1" />
                <p className="font-bold text-xs text-white">Gigabit WiFi</p>
                <p className="text-[10px] text-gray-400">Mesh 500+ Mbps</p>
              </div>
              <div className="p-3 bg-[#0B132B] border border-[#1C2541] rounded-xl text-left">
                <BedDouble className="w-4 h-4 text-emerald-400 mb-1" />
                <p className="font-bold text-xs text-white">Organic Latex</p>
                <p className="text-[10px] text-gray-400">King &amp; Queen beds</p>
              </div>
              <div className="p-3 bg-[#0B132B] border border-[#1C2541] rounded-xl text-left">
                <ShieldCheck className="w-4 h-4 text-[#D97706] mb-1" />
                <p className="font-bold text-xs text-white">Keyless Entry</p>
                <p className="text-[10px] text-gray-400">Encrypted PIN lock</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Browse Available Rooms</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 bg-[#0B132B] hover:bg-[#1C2541] text-white border border-[#D97706]/40 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                <span>Simulate Extended Stays</span>
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D97706]/30 bg-[#0B132B]">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80"
                alt="Joseph Glasshouse Skyline Penthouse"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block">
                      Featured Residence
                    </span>
                    <h3 className="text-lg font-bold">The Glasshouse Skyline Penthouse</h3>
                    <p className="text-xs text-gray-400">Downtown Arts District • Level 42</p>
                  </div>
                  <span className="text-xl font-black text-[#D97706]">$280/nt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
