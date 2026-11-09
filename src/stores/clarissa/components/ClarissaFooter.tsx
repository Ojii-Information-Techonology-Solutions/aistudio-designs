import React from 'react';
import { UtensilsCrossed, Sparkles, ShieldCheck, Wine, Heart } from 'lucide-react';
import { ClarissaCategory } from '../types';

interface ClarissaFooterProps {
  onSelectCategory: (cat: ClarissaCategory) => void;
  onOpenTablescape: () => void;
  onOpenDesignKit?: () => void;
}

export const ClarissaFooter: React.FC<ClarissaFooterProps> = ({
  onSelectCategory,
  onOpenTablescape,
  onOpenDesignKit
}) => {
  return (
    <footer className="bg-[#0E1118] text-gray-300 border-t border-[#2A303C] font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2A303C]">
          {/* Col 1 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#2A303C] flex items-center justify-center text-[#CBA153]">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                CLARISSA
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm font-sans">
              Purveyors of master guild table arts. Celebrating the tactile beauty of French porcelain, lead-free Bohemian crystal, and Solingen forged steel.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#CBA153] font-serif">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Breakage-Proof Courier &amp; 10-Year Guild Guarantee</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-widest text-[#CBA153] font-bold">
              Haute Collections
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-serif">
              <li>
                <button
                  onClick={() => onSelectCategory('Dinnerware & Plates')}
                  className="hover:text-white transition-colors"
                >
                  Limoges Dinner Plates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Crystal Glassware & Goblets')}
                  className="hover:text-white transition-colors"
                >
                  Bohemian Crystal Goblets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Forged Cutlery & Silverware')}
                  className="hover:text-white transition-colors"
                >
                  18/10 Forged Silverware
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Curated Dining Sets')}
                  className="hover:text-white transition-colors"
                >
                  16-Piece Banquet Sets
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-widest text-[#CBA153] font-bold">
              Atelier Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-serif">
              <li>
                <button
                  onClick={onOpenTablescape}
                  className="text-[#CBA153] hover:underline transition-colors"
                >
                  Tablescape Studio Suite
                </button>
              </li>
              {onOpenDesignKit && (
                <li>
                  <button
                    onClick={onOpenDesignKit}
                    className="hover:text-white transition-colors"
                  >
                    Clarissa Arts Design Kit
                  </button>
                </li>
              )}
              <li>
                <span className="text-gray-500">Bridal &amp; Gala Registry</span>
              </li>
              <li>
                <span className="text-gray-500">Laser Monogram Engraving</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-widest text-[#CBA153] font-bold">
              Maison Newsletter
            </h4>
            <p className="text-xs text-gray-400 font-serif">
              Invitations to private porcelain previews and sommelier glassware releases.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full px-3 py-2 bg-[#161B26] border border-[#2A303C] rounded-lg text-xs text-white placeholder:text-gray-500 focus:outline-none"
              />
              <button className="px-3 py-2 bg-[#CBA153] text-black font-serif font-bold text-xs rounded-lg hover:bg-[#B38D45]">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-serif">
          <span>&copy; {new Date().getFullYear()} Clarissa Arts de la Table Paris. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Setting tables of distinction with <Heart className="w-3.5 h-3.5 text-[#CBA153] fill-current" />
          </span>
        </div>
      </div>
    </footer>
  );
};
