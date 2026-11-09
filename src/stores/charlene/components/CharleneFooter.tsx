import React from 'react';
import { Sparkles, Scissors, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

interface CharleneFooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenLookbook: () => void;
  onOpenSizingGuide: () => void;
  onOpenAdvisor: () => void;
  onOpenDesignKit?: () => void;
}

export const CharleneFooter: React.FC<CharleneFooterProps> = ({
  onSelectCategory,
  onOpenLookbook,
  onOpenSizingGuide,
  onOpenAdvisor,
  onOpenDesignKit
}) => {
  return (
    <footer className="bg-[#181615] text-[#FAF6F0] border-t border-[#2A2725] font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2A2725]">
          {/* Brand Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl tracking-[0.25em] uppercase font-light text-[#FAF6F0]">
              Charlène
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              Haute Couture Paris. Cultivating an uncompromising devotion to 100% Mulberry silk, sculpted tailoring, and timeless evening silhouettes.
            </p>
            <div className="pt-2 text-[11px] text-[#C5A059] space-y-1 font-serif">
              <p>12 Rue Saint-Honoré, 75001 Paris, France</p>
              <p>Atelier Appointments: +33 (0)1 42 68 55 00</p>
            </div>
          </div>

          {/* Couture Collections */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {['Gowns', 'Silk Slips', 'Cocktail', 'Couture', 'Bridal'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Atelier Services */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Atelier Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={onOpenSizingGuide} className="hover:text-white transition-colors">
                  Bespoke Sizing Guide
                </button>
              </li>
              <li>
                <button onClick={onOpenLookbook} className="hover:text-white transition-colors">
                  Paris Editorial Lookbook
                </button>
              </li>
              <li>
                <button onClick={onOpenAdvisor} className="hover:text-white transition-colors">
                  AI Atelier Occasion Stylist
                </button>
              </li>
              {onOpenDesignKit && (
                <li>
                  <button onClick={onOpenDesignKit} className="text-[#C5A059] hover:underline transition-colors flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Charlène Design Kit</span>
                  </button>
                </li>
              )}
              <li>
                <span className="text-gray-500">Made-to-Order Custom Fit</span>
              </li>
              <li>
                <span className="text-gray-500">Archival Silk Preservation</span>
              </li>
            </ul>
          </div>

          {/* Private Atelier Newsletter */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Private Salon
            </h4>
            <p className="text-xs text-gray-400 font-light">
              Receive private invitations to seasonal salon previews and limited edition silk releases.
            </p>
            <div className="flex gap-1 pt-1">
              <input
                type="email"
                placeholder="salon@example.com"
                className="w-full text-xs p-2.5 bg-[#252220] border border-[#3A3532] text-white focus:outline-none focus:border-[#C5A059]"
              />
              <button className="p-2.5 bg-[#C5A059] hover:bg-[#B38F46] text-black font-bold">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Guarantees */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} CHARLÈNE HAUTE COUTURE PARIS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span>TERMS OF ATELIER</span>
            <span>PRIVACY DISCLOSURE</span>
            <span>WHITE-GLOVE LOGISTICS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
