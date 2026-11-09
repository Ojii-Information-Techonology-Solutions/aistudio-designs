import React from 'react';
import { Gift, Sparkles, Heart, Smile, ArrowRight } from 'lucide-react';

interface SandraHeroProps {
  onExploreClick: () => void;
  onOpenMysteryBox: () => void;
}

export const SandraHero: React.FC<SandraHeroProps> = ({
  onExploreClick,
  onOpenMysteryBox
}) => {
  return (
    <section className="relative bg-[#FFFDF5] text-[#1E1B2E] overflow-hidden border-b-2 border-[#1E1B2E]">
      {/* Playful dots pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8B5CF6_2px,transparent_2px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B5CF6]/15 border-2 border-[#8B5CF6] rounded-full text-xs text-[#8B5CF6] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sandra Studio • Assorted Curated Objects &amp; Daily Joy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1E1B2E] leading-tight">
              Curated Wonders for <br />
              <span className="text-[#8B5CF6] underline decoration-[#FB923C] decoration-wavy">Joyful Daily Life</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-700 max-w-xl leading-relaxed">
              We scout the world for hand-pinched ceramics, crackling wooden wick candles, heavy brass desk companions, and fountain-pen journals that spark pure delight.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 bg-white border-2 border-[#1E1B2E] rounded-2xl text-left shadow-[3px_3px_0px_0px_#1E1B2E]">
                <Heart className="w-4 h-4 text-[#F472B6] mb-1" />
                <p className="font-bold text-xs text-[#1E1B2E]">Small Batch</p>
                <p className="text-[10px] text-gray-500">Handmade craft</p>
              </div>
              <div className="p-3 bg-white border-2 border-[#1E1B2E] rounded-2xl text-left shadow-[3px_3px_0px_0px_#1E1B2E]">
                <Smile className="w-4 h-4 text-[#FB923C] mb-1" />
                <p className="font-bold text-xs text-[#1E1B2E]">Tactile Joy</p>
                <p className="text-[10px] text-gray-500">Sensory design</p>
              </div>
              <div className="p-3 bg-white border-2 border-[#1E1B2E] rounded-2xl text-left shadow-[3px_3px_0px_0px_#1E1B2E]">
                <Gift className="w-4 h-4 text-[#8B5CF6] mb-1" />
                <p className="font-bold text-xs text-[#1E1B2E]">Mystery Box</p>
                <p className="text-[10px] text-gray-500">5 surprise gifts</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-wider rounded-2xl flex items-center gap-2 border-2 border-[#1E1B2E] shadow-[4px_4px_0px_0px_#1E1B2E] transition-all cursor-pointer"
              >
                <span>Shop Assorted Objects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenMysteryBox}
                className="px-6 py-3.5 bg-[#FB923C] hover:bg-[#EA580C] text-[#1E1B2E] font-bold text-xs uppercase tracking-wider rounded-2xl flex items-center gap-2 border-2 border-[#1E1B2E] shadow-[4px_4px_0px_0px_#1E1B2E] transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Build Mystery Box ($75)</span>
              </button>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_#1E1B2E] border-3 border-[#1E1B2E] bg-white">
              <img
                src="https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=1000&q=80"
                alt="Sandra Assorted Goods"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FBBF24] font-bold block">
                    Curator's Staff Pick
                  </span>
                  <h3 className="text-xl font-black">Hand-Pinched Cloud Incense Basin</h3>
                  <p className="text-xs text-gray-300">$38 • Made in Kyoto Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
