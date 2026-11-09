import React from 'react';
import { Sprout, Sparkles, Sun, Droplets, ArrowRight } from 'lucide-react';

interface PlantitoHeroProps {
  onExploreClick: () => void;
  onOpenPotPairing: () => void;
}

export const PlantitoHero: React.FC<PlantitoHeroProps> = ({
  onExploreClick,
  onOpenPotPairing
}) => {
  return (
    <section className="relative bg-[#162A1F] text-[#F4EFEA] overflow-hidden border-b border-[#284C38]">
      {/* Subtle organic background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#84CC16_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#284C38] border border-[#3E6C51] rounded-full text-xs text-[#84CC16] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sanctuary of Botanical Greens &amp; Artisan Terracotta</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Bring Life Home with <br />
              <span className="text-[#84CC16] italic font-serif">Curated Plants &amp; Pottery</span>
            </h1>

            <p className="text-sm sm:text-base text-[#D5E2D9] max-w-xl leading-relaxed">
              Transform your living space with healthy greenhouse-acclimatized tropical foliage, hand-thrown porous terracotta planters, and 100% organic bio-nutrient elixirs.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 bg-[#1F3B2C] border border-[#2D543F] rounded-xl text-left">
                <Sun className="w-4 h-4 text-[#F59E0B] mb-1" />
                <p className="font-bold text-xs text-white">Light Matched</p>
                <p className="text-[10px] text-[#A3BFAB]">Acclimatized indoor</p>
              </div>
              <div className="p-3 bg-[#1F3B2C] border border-[#2D543F] rounded-xl text-left">
                <Droplets className="w-4 h-4 text-[#38BDF8] mb-1" />
                <p className="font-bold text-xs text-white">Breathable Clay</p>
                <p className="text-[10px] text-[#A3BFAB]">Anti-root-rot pots</p>
              </div>
              <div className="p-3 bg-[#1F3B2C] border border-[#2D543F] rounded-xl text-left">
                <Sprout className="w-4 h-4 text-[#84CC16] mb-1" />
                <p className="font-bold text-xs text-white">Organic Kelp Food</p>
                <p className="text-[10px] text-[#A3BFAB]">Pure bio-nutrients</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3 bg-[#84CC16] hover:bg-[#72B013] text-[#14271D] font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Shop Plants &amp; Pots</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPotPairing}
                className="px-6 py-3 bg-[#C86D51] hover:bg-[#B35F45] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Pair Plant with Pot</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#284C38] bg-[#14271D]">
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80"
                alt="Plantito Greenery & Terracotta"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#84CC16] block">
                      Greenhouse Pick of the Week
                    </span>
                    <h3 className="font-serif text-lg font-bold">Monstera Deliciosa &amp; Fluted Clay Pot</h3>
                  </div>
                  <span className="text-xl font-bold text-[#84CC16]">$48.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
