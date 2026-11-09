import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck } from 'lucide-react';

interface CharleneHeroProps {
  onExplore: () => void;
  onOpenLookbook: () => void;
  onOpenAdvisor: () => void;
}

export const CharleneHero: React.FC<CharleneHeroProps> = ({
  onExplore,
  onOpenLookbook,
  onOpenAdvisor
}) => {
  return (
    <section className="relative bg-[#FDFCFB] border-b border-[#E5E1DA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2F0ED] border border-[#E5E1DA] text-[10px] uppercase tracking-[0.3em] font-sans font-medium text-[#181615]">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>Automne / Hiver Haute Couture</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181615] font-light leading-[1.1] tracking-tight">
              Liquid Silk &amp; <br />
              <span className="italic font-normal">Architectural Form</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-600 font-sans max-w-xl leading-relaxed font-light">
              Crafted in our historic Paris atelier from 30-momme Mulberry silk, Italian velvet, and Caudry lace. Every silhouette is individually bias-cut and tailored to drape in pure fluid motion.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplore}
                className="px-8 py-4 bg-[#181615] hover:bg-black text-[#FAF6F0] text-xs font-sans uppercase tracking-[0.25em] font-medium transition-all shadow-md flex items-center gap-2 group"
              >
                <span>Explore The Collection</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenLookbook}
                className="px-7 py-4 border border-[#181615] text-[#181615] hover:bg-[#F2F0ED] text-xs font-sans uppercase tracking-[0.25em] font-medium transition-colors"
              >
                Paris Lookbook
              </button>
            </div>

            {/* Atelier Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E5E1DA] text-[11px] font-sans text-gray-600">
              <div className="space-y-1">
                <p className="font-serif text-sm font-medium text-[#181615]">100% Pure Silk</p>
                <p className="text-[10px] text-gray-500">Heritage Lyon &amp; Como weavings</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-sm font-medium text-[#181615]">Bespoke Hemming</p>
                <p className="text-[10px] text-gray-500">Custom tailored to your heel height</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-sm font-medium text-[#181615]">White-Glove Delivery</p>
                <p className="text-[10px] text-gray-500">Complimentary archival garment box</p>
              </div>
            </div>
          </div>

          {/* Right Visual Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] bg-[#F2F0ED] border border-[#E5E1DA] shadow-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85"
                alt="Charlène Silk Column Gown"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#EADBCE] font-sans font-medium">
                  Edition N° 01 • Paris Atelier
                </span>
                <h3 className="font-serif text-2xl font-light text-white leading-tight">
                  The Ethereal Backless Silk Column Gown
                </h3>
                <p className="text-xs text-[#FAF6F0]/90 font-sans font-light">
                  Bias-cut 30-momme Mulberry silk charmeuse with hand-finished interior seams.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-sm font-serif font-normal text-[#EADBCE]">$1,250 USD</span>
                  <span className="text-[10px] uppercase tracking-widest underline underline-offset-4 cursor-pointer hover:text-white" onClick={onExplore}>
                    Inspect Gown →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
