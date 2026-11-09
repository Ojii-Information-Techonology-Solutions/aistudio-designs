import React from 'react';
import { Sprout, Heart, ShieldCheck, Mail, Sun, Droplets } from 'lucide-react';
import { PlantitoCategory } from '../types';

interface PlantitoFooterProps {
  onSelectCategory: (cat: PlantitoCategory) => void;
  onOpenPotPairing: () => void;
  onOpenDesignKit?: () => void;
}

export const PlantitoFooter: React.FC<PlantitoFooterProps> = ({
  onSelectCategory,
  onOpenPotPairing,
  onOpenDesignKit
}) => {
  return (
    <footer className="bg-[#14271D] text-[#D5E2D9] border-t border-[#284C38] font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#284C38]">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#284C38] flex items-center justify-center text-[#84CC16]">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                PLANTITO
              </span>
            </div>
            <p className="text-xs text-[#A3BFAB] leading-relaxed max-w-sm">
              Dedicated to greening living spaces with healthy acclimatized tropical plants, architectural breathable pottery, and organic bio-nutrient elixirs.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#84CC16]">
              <ShieldCheck className="w-4 h-4" />
              <span>30-Day Guaranteed Healthy Foliage Delivery</span>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Greenhouse Depts
            </h4>
            <ul className="space-y-2 text-xs text-[#A3BFAB]">
              <li>
                <button
                  onClick={() => onSelectCategory('Indoor Plants')}
                  className="hover:text-[#84CC16] transition-colors"
                >
                  Indoor Houseplants
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Ceramic & Terracotta Pots')}
                  className="hover:text-[#84CC16] transition-colors"
                >
                  Terracotta &amp; Ceramics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Organic Fertilizers & Feeds')}
                  className="hover:text-[#84CC16] transition-colors"
                >
                  Bio-Nutrient Feeds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Specialty Soils & Substrates')}
                  className="hover:text-[#84CC16] transition-colors"
                >
                  Chunky Aroid Substrates
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Plant Care */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs text-[#A3BFAB]">
              <li>
                <button
                  onClick={onOpenPotPairing}
                  className="text-[#84CC16] hover:underline transition-colors"
                >
                  Pot &amp; Plant Pairing Studio
                </button>
              </li>
              {onOpenDesignKit && (
                <li>
                  <button
                    onClick={onOpenDesignKit}
                    className="hover:text-white transition-colors"
                  >
                    Plantito Design Kit &amp; Tokens
                  </button>
                </li>
              )}
              <li>
                <span className="text-gray-500">Watering Schedule Calculator</span>
              </li>
              <li>
                <span className="text-gray-500">Repotting &amp; Soil Guides</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Plant Care Circle
            </h4>
            <p className="text-xs text-[#A3BFAB]">
              Receive monthly seasonal watering tips and rare cultivar drops.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full px-3 py-2 bg-[#1E392A] border border-[#2D543F] rounded-lg text-xs text-white placeholder:text-gray-500 focus:outline-none"
              />
              <button className="px-3 py-2 bg-[#84CC16] text-[#14271D] font-bold text-xs rounded-lg hover:bg-[#72B013]">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <span>&copy; {new Date().getFullYear()} Plantito Botanicals Inc. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Carefully potted with <Heart className="w-3.5 h-3.5 text-[#C86D51] fill-current" /> for urban plant parents
          </span>
        </div>
      </div>
    </footer>
  );
};
