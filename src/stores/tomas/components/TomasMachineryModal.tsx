import React, { useState } from 'react';
import {
  X,
  Wrench,
  Truck,
  HardHat,
  ShieldCheck,
  Zap,
  Gauge,
  Calendar,
  Layers,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';
import { MachineryItem, TomasRentalBooking } from '../types';
import { CurrencyCode } from '../../../types';
import { formatPrice } from '../../../utils/formatters';

interface TomasMachineryModalProps {
  machinery: MachineryItem | null;
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  onAddBooking: (booking: TomasRentalBooking) => void;
}

export const TomasMachineryModal: React.FC<TomasMachineryModalProps> = ({
  machinery,
  isOpen,
  onClose,
  currency,
  onAddBooking
}) => {
  if (!isOpen || !machinery) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [durationDays, setDurationDays] = useState(3);
  const [withOperator, setWithOperator] = useState(false);
  const [withDamageWaiver, setWithDamageWaiver] = useState(true);
  const [selectedAttachments, setSelectedAttachments] = useState<string[]>([]);
  const [siteAddress, setSiteAddress] = useState('Metro Construction Jobsite, Sector 4');
  const [deliveryDistanceMiles, setDeliveryDistanceMiles] = useState(25);
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'telematics' | 'attachments'>('specs');

  // Calculation logic
  const dailyBase = machinery.dailyRate;
  const machineryRentalCost =
    durationDays >= 28
      ? (machinery.monthlyRate / 28) * durationDays
      : durationDays >= 7
      ? (machinery.weeklyRate / 7) * durationDays
      : dailyBase * durationDays;

  const operatorCost = withOperator ? machinery.operatorRatePerDay * durationDays : 0;

  const attachmentsCost = selectedAttachments.reduce((sum, attName) => {
    const att = machinery.attachments.find((a) => a.name === attName);
    return sum + (att ? att.ratePerDay * durationDays : 0);
  }, 0);

  const damageWaiverCost = withDamageWaiver
    ? (machineryRentalCost * machinery.damageWaiverPercentage) / 100
    : 0;

  // Transport fee: Flat $250 mobilization + $4/mile
  const transportDeliveryFee = 250 + deliveryDistanceMiles * 4;

  const grandSubtotal =
    machineryRentalCost + operatorCost + attachmentsCost + damageWaiverCost + transportDeliveryFee;

  const handleToggleAttachment = (attName: string) => {
    setSelectedAttachments((prev) =>
      prev.includes(attName) ? prev.filter((a) => a !== attName) : [...prev, attName]
    );
  };

  const handleConfirmHire = () => {
    const today = new Date();
    const end = new Date();
    end.setDate(today.getDate() + durationDays);

    const booking: TomasRentalBooking = {
      id: `booking-${machinery.id}-${Date.now()}`,
      machineryId: machinery.id,
      modelCode: machinery.modelCode,
      name: machinery.name,
      image: machinery.images[activeImageIndex] || machinery.images[0],
      dailyRate: machinery.dailyRate,
      durationDays,
      rentalStartDate: today.toISOString().split('T')[0],
      rentalEndDate: end.toISOString().split('T')[0],
      withCertifiedOperator: withOperator,
      operatorRatePerDay: machinery.operatorRatePerDay,
      selectedAttachments,
      attachmentsCost,
      withDamageWaiver,
      damageWaiverCost,
      transportDeliveryFee,
      siteAddress,
      subtotal: grandSubtotal
    };

    onAddBooking(booking);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#14171E] w-full max-w-5xl border border-[#2F3542] my-auto max-h-[92vh] overflow-y-auto text-gray-100 shadow-2xl rounded-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 bg-[#1C2028] border border-[#333842] hover:bg-[#F59E0B] hover:text-black text-gray-300 z-20 transition-colors rounded-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
          {/* Left Column: Visual & Engineering Blueprint */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] bg-[#0A0C0F] border border-[#252932] overflow-hidden rounded-xs">
              <img
                src={machinery.images[activeImageIndex] || machinery.images[0]}
                alt={machinery.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#F59E0B] text-black font-mono font-bold text-xs px-2.5 py-1 rounded-xs">
                {machinery.modelCode}
              </div>
              <div className="absolute bottom-3 left-3 bg-black/80 font-mono text-[10px] text-emerald-400 px-2 py-0.5 border border-emerald-500/30">
                {machinery.depotLocation}
              </div>
            </div>

            {/* Spec Tabs Navigation */}
            <div className="border border-[#252932] bg-[#0F1115] p-1 rounded-xs">
              <div className="grid grid-cols-4 gap-1 text-[11px] font-mono uppercase">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`py-2 text-center rounded-xs transition-colors ${
                    activeTab === 'specs'
                      ? 'bg-[#F59E0B] text-black font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Specs
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`py-2 text-center rounded-xs transition-colors ${
                    activeTab === 'features'
                      ? 'bg-[#F59E0B] text-black font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('telematics')}
                  className={`py-2 text-center rounded-xs transition-colors ${
                    activeTab === 'telematics'
                      ? 'bg-[#F59E0B] text-black font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Telematics
                </button>
                <button
                  onClick={() => setActiveTab('attachments')}
                  className={`py-2 text-center rounded-xs transition-colors ${
                    activeTab === 'attachments'
                      ? 'bg-[#F59E0B] text-black font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Attachments
                </button>
              </div>

              <div className="p-4 text-xs font-mono text-gray-300 min-h-[140px] leading-relaxed">
                {activeTab === 'specs' && (
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    <div>
                      <span className="text-gray-500 text-[10px] block">OPERATING WEIGHT</span>
                      <strong>{machinery.specs.operatingWeight}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 text-[10px] block">ENGINE POWER</span>
                      <strong>{machinery.specs.enginePower}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 text-[10px] block">ENGINE MODEL</span>
                      <strong>{machinery.specs.engineModel}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 text-[10px] block">HYDRAULIC FLOW</span>
                      <strong>{machinery.specs.hydraulicFlow}</strong>
                    </div>
                    {machinery.specs.bucketCapacity && (
                      <div>
                        <span className="text-gray-500 text-[10px] block">BUCKET / CAPACITY</span>
                        <strong>{machinery.specs.bucketCapacity}</strong>
                      </div>
                    )}
                    {machinery.specs.maxDigDepth && (
                      <div>
                        <span className="text-gray-500 text-[10px] block">MAX DIG DEPTH</span>
                        <strong>{machinery.specs.maxDigDepth}</strong>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'features' && (
                  <ul className="space-y-1.5 list-disc pl-4 text-gray-300">
                    {machinery.keyFeatures.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}

                {activeTab === 'telematics' && (
                  <div className="space-y-2">
                    <p>
                      <strong>GPS Real-time Tracking:</strong> Active 24/7 on Starlink &amp; 5G
                    </p>
                    <p>
                      <strong>Estimated Fuel Burn:</strong> {machinery.telematics.fuelConsumptionRate}
                    </p>
                    <p>
                      <strong>Current Machine Hours:</strong> {machinery.telematics.hoursMeter} Hours
                    </p>
                    <p>
                      <strong>Emissions Tier:</strong> {machinery.telematics.emissionStandard}
                    </p>
                  </div>
                )}

                {activeTab === 'attachments' && (
                  <div className="space-y-2">
                    {machinery.attachments.map((att) => (
                      <div
                        key={att.name}
                        onClick={() => handleToggleAttachment(att.name)}
                        className={`p-2 border cursor-pointer rounded-xs flex items-center justify-between transition-colors ${
                          selectedAttachments.includes(att.name)
                            ? 'border-[#F59E0B] bg-[#F59E0B]/10 text-white'
                            : 'border-[#252932] hover:border-gray-500 text-gray-400'
                        }`}
                      >
                        <div>
                          <p className="font-bold text-gray-200">{att.name}</p>
                          <p className="text-[10px] text-gray-400">{att.description}</p>
                        </div>
                        <span className="text-[#F59E0B] font-bold">
                          +{formatPrice(att.ratePerDay, currency)}/day
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Hire Duration & Dispatch Configuration */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 font-mono">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase text-[#F59E0B] font-bold">
                  {machinery.category} • {machinery.application}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {machinery.name}
                </h2>
                <p className="text-xs text-gray-400 mt-1 font-sans">
                  {machinery.description}
                </p>
              </div>

              {/* Duration Selector */}
              <div className="p-3.5 bg-[#0F1115] border border-[#252932] space-y-2 rounded-xs">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-300 font-bold uppercase">Rental Duration:</span>
                  <span className="text-[#F59E0B] font-bold">{durationDays} Calendar Days</span>
                </div>

                <div className="grid grid-cols-4 gap-1.5 text-xs">
                  {[1, 3, 7, 28].map((days) => (
                    <button
                      key={days}
                      onClick={() => setDurationDays(days)}
                      className={`py-2 text-center font-bold border rounded-xs transition-colors ${
                        durationDays === days
                          ? 'border-[#F59E0B] bg-[#F59E0B] text-black'
                          : 'border-[#2D333F] bg-[#1C2028] text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      {days === 1 ? '1 Day' : days === 7 ? '1 Week' : days === 28 ? '1 Month' : `${days} Days`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Certified Operator Option */}
              {machinery.operatorAvailable && (
                <div
                  onClick={() => setWithOperator(!withOperator)}
                  className={`p-3.5 border cursor-pointer rounded-xs flex items-center justify-between transition-colors ${
                    withOperator
                      ? 'border-[#F59E0B] bg-[#F59E0B]/10 text-white'
                      : 'border-[#252932] bg-[#0F1115] text-gray-400 hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <HardHat className={`w-5 h-5 ${withOperator ? 'text-[#F59E0B]' : 'text-gray-500'}`} />
                    <div>
                      <p className="text-xs font-bold text-gray-200">Include Certified Plant Operator</p>
                      <p className="text-[10px] text-gray-400">OSHA-compliant ticketed master operator</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#F59E0B]">
                    +{formatPrice(machinery.operatorRatePerDay, currency)} / Day
                  </span>
                </div>
              )}

              {/* Damage Waiver Option */}
              <div
                onClick={() => setWithDamageWaiver(!withDamageWaiver)}
                className={`p-3 border cursor-pointer rounded-xs flex items-center justify-between transition-colors ${
                  withDamageWaiver
                    ? 'border-emerald-500/60 bg-emerald-950/20 text-white'
                    : 'border-[#252932] bg-[#0F1115] text-gray-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className={`w-4 h-4 ${withDamageWaiver ? 'text-emerald-400' : 'text-gray-500'}`} />
                  <div>
                    <p className="text-xs font-bold text-gray-200">Equipment Damage Protection (CDW)</p>
                    <p className="text-[10px] text-gray-400">Caps accidental contractor liability at zero</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400">
                  {machinery.damageWaiverPercentage}% Rate
                </span>
              </div>

              {/* Cost Itemization */}
              <div className="space-y-1.5 text-xs text-gray-300 border-t border-[#252932] pt-3">
                <div className="flex justify-between">
                  <span>Plant Base Rental ({durationDays} Days):</span>
                  <span className="font-bold text-white">{formatPrice(machineryRentalCost, currency)}</span>
                </div>
                {withOperator && (
                  <div className="flex justify-between text-[#F59E0B]">
                    <span>Certified Operator Labor:</span>
                    <span>+{formatPrice(operatorCost, currency)}</span>
                  </div>
                )}
                {attachmentsCost > 0 && (
                  <div className="flex justify-between text-gray-300">
                    <span>Work Tool Attachments:</span>
                    <span>+{formatPrice(attachmentsCost, currency)}</span>
                  </div>
                )}
                {damageWaiverCost > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Damage Waiver Insurance:</span>
                    <span>+{formatPrice(damageWaiverCost, currency)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-400">
                  <span>Lowboy Heavy Transport Mobilization:</span>
                  <span>+{formatPrice(transportDeliveryFee, currency)}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-[#333842]">
                  <span>Total Estimated Hire:</span>
                  <span className="text-[#F59E0B] text-base">{formatPrice(grandSubtotal, currency)}</span>
                </div>
              </div>
            </div>

            {/* Direct Confirmation Action */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleConfirmHire}
                className="w-full py-4 bg-[#F59E0B] hover:bg-[#E58E0B] text-black font-black text-xs uppercase tracking-wider transition-colors rounded-xs shadow-lg flex items-center justify-center gap-2 font-mono"
              >
                <Truck className="w-4 h-4 stroke-[2.5]" />
                <span>Confirm Hire &amp; Schedule Jobsite Dispatch</span>
              </button>
              <p className="text-[10px] text-gray-400 text-center font-mono">
                No credit card charged immediately • Our fleet logistics manager verifies site clearance within 30 min.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
