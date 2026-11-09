import React from 'react';
import { Wrench, PhoneCall, ShieldCheck, Truck, HardHat, Mail } from 'lucide-react';

interface TomasFooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenSpecsTable: () => void;
  onOpenDispatchModal: () => void;
  onOpenDesignKit?: () => void;
}

export const TomasFooter: React.FC<TomasFooterProps> = ({
  onSelectCategory,
  onOpenSpecsTable,
  onOpenDispatchModal,
  onOpenDesignKit
}) => {
  return (
    <footer className="bg-[#0A0C0F] text-[#ECEFF4] border-t border-[#252932] font-mono pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#252932]">
          {/* Company Brief */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#F59E0B] text-black font-extrabold flex items-center justify-center rounded-xs">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white uppercase">TOMAS FLEET</span>
            </div>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Heavy equipment rentals and commercial plant logistics. Serving civil contractors, mining pits, and infrastructure projects across North America.
            </p>
            <div className="text-xs text-[#F59E0B] space-y-1">
              <p>24/7 Dispatch Desk: 1-800-TOMAS-FLEET</p>
              <p>logistics@tomasheavyplant.com</p>
            </div>
          </div>

          {/* Plant Categories */}
          <div className="space-y-3">
            <h4 className="text-xs text-[#F59E0B] font-bold uppercase tracking-wider">
              Fleet Equipment
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {['Excavators', 'Wheel Loaders', 'Bulldozers', 'Articulated Haulers', 'Aerial Boom Lifts', 'Compactors & Rollers'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="hover:text-[#F59E0B] transition-colors text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Logistics & Safety */}
          <div className="space-y-3">
            <h4 className="text-xs text-[#F59E0B] font-bold uppercase tracking-wider">
              Safety &amp; Compliance
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={onOpenSpecsTable} className="hover:text-[#F59E0B] transition-colors">
                  Engineering Spec Matrix
                </button>
              </li>
              <li>
                <button onClick={onOpenDispatchModal} className="hover:text-[#F59E0B] transition-colors">
                  Freight Delivery Estimator
                </button>
              </li>
              {onOpenDesignKit && (
                <li>
                  <button onClick={onOpenDesignKit} className="text-[#F59E0B] hover:underline transition-colors flex items-center gap-1">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Tomas Heavy Design Kit</span>
                  </button>
                </li>
              )}
              <li>
                <span className="text-gray-400">OSHA Subpart P Certified Operators</span>
              </li>
              <li>
                <span className="text-gray-400">EPA Tier 4 Final Emission Standard</span>
              </li>
              <li>
                <span className="text-gray-400">DOT Oversize Road Permits</span>
              </li>
            </ul>
          </div>

          {/* Depot Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs text-[#F59E0B] font-bold uppercase tracking-wider">
              Active Depots
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div>
                <strong className="text-gray-200 block">Depot Alpha (Midwest):</strong>
                <span>8800 Industrial Blvd, Chicago, IL</span>
              </div>
              <div>
                <strong className="text-gray-200 block">Depot Bravo (Gulf Coast):</strong>
                <span>420 Petrochem Corridor, Houston, TX</span>
              </div>
              <div>
                <strong className="text-gray-200 block">Depot Charlie (Mountain):</strong>
                <span>150 Quarry Access Rd, Denver, CO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} TOMAS HEAVY INDUSTRIAL EQUIPMENT HIRE LLC.</p>
          <div className="flex items-center gap-6">
            <span>MASTER RENTAL AGREEMENT</span>
            <span>OSHA SAFETY CERTIFICATION</span>
            <span>DOT OVERSIZE HAULING</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
