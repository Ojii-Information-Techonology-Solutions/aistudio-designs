import React from 'react';
import { UtensilsCrossed, Sparkles, Wine, Award, ArrowRight } from 'lucide-react';

interface ClarissaHeroProps {
  onExploreClick: () => void;
  onOpenTablescape: () => void;
}

export const ClarissaHero: React.FC<ClarissaHeroProps> = ({
  onExploreClick,
  onOpenTablescape
}) => {
  return (
    <section className="relative bg-[#0E1118] text-[#FAF8F5] overflow-hidden border-b border-[#2A303C]">
      {/* Subtle gold grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#CBA153_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161B26] border border-[#CBA153]/40 rounded-full text-xs text-[#CBA153] font-serif">
              <Award className="w-3.5 h-3.5" />
              <span>French Porcelain • Bohemian Crystal • Solingen Forged Cutlery</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              The Pure Art of <br />
              <span className="text-[#CBA153] italic font-serif">Fine Table Dining</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-sans">
              Transform every gathering into a Michelin-worthy affair. Discover translucent Limoges porcelain plates, mouth-blown crystal wine goblets, and heirloom forged silverware.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 bg-[#161B26] border border-[#2A303C] rounded-xl text-left">
                <UtensilsCrossed className="w-4 h-4 text-[#CBA153] mb-1" />
                <p className="font-serif font-bold text-xs text-white">Limoges Clay</p>
                <p className="text-[10px] text-gray-400">1400°C vitrified</p>
              </div>
              <div className="p-3 bg-[#161B26] border border-[#2A303C] rounded-xl text-left">
                <Wine className="w-4 h-4 text-sky-400 mb-1" />
                <p className="font-serif font-bold text-xs text-white">Bohemian Crystal</p>
                <p className="text-[10px] text-gray-400">Lead-free clarity</p>
              </div>
              <div className="p-3 bg-[#161B26] border border-[#2A303C] rounded-xl text-left">
                <Sparkles className="w-4 h-4 text-[#CBA153] mb-1" />
                <p className="font-serif font-bold text-xs text-white">18/10 Cutlery</p>
                <p className="text-[10px] text-gray-400">Single ingot forged</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3 bg-[#CBA153] hover:bg-[#B38D45] text-black font-serif font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Explore Tableware Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTablescape}
                className="px-6 py-3 bg-[#161B26] hover:bg-[#2A303C] text-[#FAF8F5] border border-[#CBA153]/40 font-serif font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#CBA153]" />
                <span>Build 4-Course Tablescape</span>
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#CBA153]/30 bg-[#161B26]">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
                alt="Clarissa Tablescape"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#CBA153] block">
                      Curated 4-Person Setting
                    </span>
                    <h3 className="font-serif text-lg font-bold">Royal Banquet 16-Piece Service</h3>
                  </div>
                  <span className="text-xl font-serif font-bold text-[#CBA153]">$380.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
