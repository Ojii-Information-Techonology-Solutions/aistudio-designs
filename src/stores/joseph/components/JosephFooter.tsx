import React from 'react';
import { Building2, KeyRound, ShieldCheck, BedDouble, Phone } from 'lucide-react';
import { JosephRoomType } from '../types';

interface JosephFooterProps {
  onSelectType: (type: JosephRoomType) => void;
  onOpenEstimator: () => void;
  onOpenDesignKit?: () => void;
}

export const JosephFooter: React.FC<JosephFooterProps> = ({
  onSelectType,
  onOpenEstimator,
  onOpenDesignKit
}) => {
  return (
    <footer className="bg-[#060A17] text-gray-300 border-t border-[#1C2541] font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1C2541]">
          {/* Col 1 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1C2541] flex items-center justify-center text-[#D97706]">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                JOSEPH
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Designer rentable spaces, private studios, and penthouses. Transparent pricing, gigabit connectivity, organic linens, and zero hidden utility charges.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D97706] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Clean &amp; Safe • Encrypted Smart Lock Keyless Entry</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D97706] font-bold">
              Room Categories
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => onSelectType('Penthouse Studio')}
                  className="hover:text-white transition-colors"
                >
                  Skyline Penthouses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectType('Boutique Loft')}
                  className="hover:text-white transition-colors"
                >
                  Industrial Artist Lofts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectType('Creative Artist Suite')}
                  className="hover:text-white transition-colors"
                >
                  Garden Mews Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectType('Minimalist Pod Room')}
                  className="hover:text-white transition-colors"
                >
                  Quiet Study Pods
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D97706] font-bold">
              Resident Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button
                  onClick={onOpenEstimator}
                  className="text-[#D97706] hover:underline font-bold"
                >
                  Extended Lease Estimator
                </button>
              </li>
              {onOpenDesignKit && (
                <li>
                  <button
                    onClick={onOpenDesignKit}
                    className="hover:text-white transition-colors"
                  >
                    Joseph Design System
                  </button>
                </li>
              )}
              <li>
                <span className="text-gray-500">Corporate Lease Portals</span>
              </li>
              <li>
                <span className="text-gray-500">24/7 Digital Concierge</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D97706] font-bold">
              Guest Support
            </h4>
            <p className="text-xs text-gray-400">
              Need immediate check-in assistance or corporate billing help?
            </p>
            <div className="p-3 bg-[#0B132B] border border-[#1C2541] rounded-xl text-xs space-y-1">
              <div className="flex items-center gap-2 text-white font-bold">
                <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                <span>+1 (800) 555-JOSEPH</span>
              </div>
              <p className="text-[10px] text-gray-500">Available 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Joseph Boutique Residences Inc. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Redefining urban stays with thoughtful architectural craftsmanship.
          </span>
        </div>
      </div>
    </footer>
  );
};
