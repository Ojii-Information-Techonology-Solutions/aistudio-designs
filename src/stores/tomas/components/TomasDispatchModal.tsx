import React, { useState } from 'react';
import { X, Truck, MapPin, Calculator, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CurrencyCode } from '../../../types';
import { formatPrice } from '../../../utils/formatters';

interface TomasDispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
}

export const TomasDispatchModal: React.FC<TomasDispatchModalProps> = ({
  isOpen,
  onClose,
  currency
}) => {
  if (!isOpen) return null;

  const [siteAddress, setSiteAddress] = useState('Highway 101 Expansion Milemarker 42');
  const [siteType, setSiteType] = useState('Infrastructure & Highway');
  const [miles, setMiles] = useState(35);
  const [trailerType, setTrailerType] = useState<'Standard Lowboy' | 'Multi-Axle Heavy Haul' | 'Hotshot Deck'>('Standard Lowboy');
  const [pilotEscortRequired, setPilotEscortRequired] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

  const baseMobilization = trailerType === 'Multi-Axle Heavy Haul' ? 650 : trailerType === 'Hotshot Deck' ? 180 : 350;
  const mileageCost = miles * (trailerType === 'Multi-Axle Heavy Haul' ? 6.5 : 4.0);
  const pilotCost = pilotEscortRequired ? 400 : 0;
  const totalFreight = baseMobilization + mileageCost + pilotCost;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#14171E] w-full max-w-2xl border border-[#2F3542] my-auto p-6 sm:p-8 text-gray-100 font-mono shadow-2xl rounded-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#252932]">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="text-base font-bold text-white uppercase">
              Heavy Freight &amp; Site Dispatch Estimator
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 pt-4 text-xs">
          <div>
            <label className="text-gray-400 block mb-1">Jobsite Delivery Address / Sector:</label>
            <input
              type="text"
              value={siteAddress}
              onChange={(e) => setSiteAddress(e.target.value)}
              className="w-full p-2.5 bg-[#0F1115] border border-[#333842] text-white focus:outline-none focus:border-[#F59E0B]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 block mb-1">Distance from Nearest Depot (Miles):</label>
              <input
                type="number"
                value={miles}
                onChange={(e) => setMiles(Math.max(1, Number(e.target.value)))}
                className="w-full p-2 bg-[#0F1115] border border-[#333842] text-white focus:outline-none focus:border-[#F59E0B]"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-1">Trailer Transport Configuration:</label>
              <select
                value={trailerType}
                onChange={(e) => setTrailerType(e.target.value as any)}
                className="w-full p-2 bg-[#0F1115] border border-[#333842] text-white focus:outline-none focus:border-[#F59E0B]"
              >
                <option value="Standard Lowboy">Standard Tri-Axle Lowboy (Under 35T)</option>
                <option value="Multi-Axle Heavy Haul">Multi-Axle Heavy Hauler (35T - 75T)</option>
                <option value="Hotshot Deck">Hotshot Tilt-Deck (Attachments &amp; Skid Steers)</option>
              </select>
            </div>
          </div>

          <div className="p-3 bg-[#0F1115] border border-[#252932] space-y-2">
            <label className="flex items-center gap-2 cursor-pointer text-gray-300">
              <input
                type="checkbox"
                checked={pilotEscortRequired}
                onChange={(e) => setPilotEscortRequired(e.target.checked)}
                className="accent-[#F59E0B]"
              />
              <span>Wide-Load DOT Pilot Car Escort Required (+$400)</span>
            </label>
          </div>

          {/* Calculated Total */}
          <div className="p-4 bg-[#1C2028] border border-[#333842] space-y-2 rounded-xs">
            <div className="flex justify-between text-gray-300">
              <span>Base Yard Rig-Up &amp; Tie Down:</span>
              <span>{formatPrice(baseMobilization, currency)}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Transit Mileage ({miles} miles):</span>
              <span>{formatPrice(mileageCost, currency)}</span>
            </div>
            {pilotEscortRequired && (
              <div className="flex justify-between text-[#F59E0B]">
                <span>DOT Pilot Car Escort:</span>
                <span>+{formatPrice(pilotCost, currency)}</span>
              </div>
            )}
            <div className="flex justify-between text-base font-black text-white pt-2 border-t border-[#252932]">
              <span>Estimated One-Way Freight:</span>
              <span className="text-[#F59E0B]">{formatPrice(totalFreight, currency)}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setIsCalculated(true);
              setTimeout(() => {
                onClose();
              }, 1200);
            }}
            className="w-full py-3 bg-[#F59E0B] hover:bg-[#E58E0B] text-black font-extrabold uppercase rounded-xs transition-colors"
          >
            {isCalculated ? 'Freight Route Locked!' : 'Save Freight Estimate to Quote'}
          </button>
        </div>
      </div>
    </div>
  );
};
