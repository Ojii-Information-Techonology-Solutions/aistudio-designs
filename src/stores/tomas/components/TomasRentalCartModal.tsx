import React, { useState } from 'react';
import { X, Trash2, Truck, ShieldCheck, HardHat, ArrowRight, CheckCircle2, FileText, Printer, Building, User, Phone, MapPin } from 'lucide-react';
import { TomasRentalBooking } from '../types';
import { CurrencyCode } from '../../../types';
import { formatPrice } from '../../../utils/formatters';

interface TomasRentalCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: TomasRentalBooking[];
  onRemoveBooking: (id: string) => void;
  onConfirmOrder: () => void;
  currency: CurrencyCode;
}

export const TomasRentalCartModal: React.FC<TomasRentalCartModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onRemoveBooking,
  onConfirmOrder,
  currency
}) => {
  if (!isOpen) return null;

  const [checkoutStep, setCheckoutStep] = useState<'queue' | 'logistics' | 'confirmed'>('queue');
  const [docketNumber, setDocketNumber] = useState('');
  const [jobsiteData, setJobsiteData] = useState({
    companyName: 'Apex Infrastructure & Groundworks',
    projectManager: 'Marcus Vance',
    phone: '+1 (555) 839-2041',
    jobsiteAddress: 'Industrial Zone 4, Berth 12, Pierhead Road',
    city: 'Houston',
    state: 'TX',
    postalCode: '77001',
    poNumber: 'PO-2026-8842',
    gateAccessNotes: 'Gate 3 access for lowboy trailers over 40 tons. Direct contact with yard foreman on arrival.'
  });

  const grandTotal = bookings.reduce((sum, b) => sum + b.subtotal, 0);

  const handleFinalizeDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedDocket = `TOMAS-DISPATCH-${Math.floor(100000 + Math.random() * 900000)}`;
    setDocketNumber(generatedDocket);
    setCheckoutStep('confirmed');
    onConfirmOrder();
  };

  const handleCloseAndReset = () => {
    setCheckoutStep('queue');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-xs" onClick={handleCloseAndReset} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-[#14171E] border-l border-[#2F3542] shadow-2xl flex flex-col text-gray-100 font-mono">
          {/* Header */}
          <div className="p-5 border-b border-[#252932] flex items-center justify-between bg-[#0F1115]">
            <div className="flex items-center gap-2">
              <HardHat className="w-5 h-5 text-[#F59E0B]" />
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  {checkoutStep === 'confirmed'
                    ? 'Rental Dispatch Lodged'
                    : checkoutStep === 'logistics'
                    ? 'Jobsite Mobilization Details'
                    : `Fleet Hire Queue (${bookings.length})`}
                </h2>
                <span className="text-[10px] text-gray-400">
                  Tomas Heavy Machinery Dispatch Center
                </span>
              </div>
            </div>
            <button onClick={handleCloseAndReset} className="text-gray-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {checkoutStep === 'queue' && (
              <div className="space-y-4">
                {bookings.length === 0 ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 text-gray-500">
                    <Truck className="w-12 h-12 text-[#252932]" />
                    <p className="text-sm text-gray-300 font-bold">No machinery units in hire queue</p>
                    <p className="text-xs max-w-xs text-gray-400">
                      Select excavators, wheel loaders, or cranes to configure site mobilization.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 bg-[#F59E0B] text-black font-extrabold text-xs uppercase cursor-pointer"
                    >
                      Browse Fleet
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-[#252932]">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="py-4 first:pt-0 last:pb-0 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] text-[#F59E0B] font-bold uppercase">
                              {booking.modelCode}
                            </span>
                            <h4 className="text-xs font-bold text-white">{booking.name}</h4>
                          </div>
                          <button
                            onClick={() => onRemoveBooking(booking.id)}
                            className="text-gray-400 hover:text-red-400 p-1 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-[11px] text-gray-400 space-y-0.5 bg-[#0F1115] p-2.5 border border-[#252932] rounded-xs">
                          <p>Duration: <span className="text-white font-bold">{booking.durationDays} Days</span></p>
                          <p>Certified Operator: <span className={booking.withCertifiedOperator ? 'text-[#F59E0B]' : 'text-gray-400'}>
                            {booking.withCertifiedOperator ? 'Yes (OSHA Included)' : 'Dry Hire (Client Operator)'}
                          </span></p>
                          {booking.selectedAttachments.length > 0 && (
                            <p>Attachments: <span className="text-gray-200">{booking.selectedAttachments.join(', ')}</span></p>
                          )}
                          <p>Damage Waiver: <span className={booking.withDamageWaiver ? 'text-emerald-400' : 'text-gray-400'}>
                            {booking.withDamageWaiver ? 'Active Protection' : 'Standard Contractor Liability'}
                          </span></p>
                        </div>

                        <div className="flex justify-between items-center pt-1">
                          <span className="text-xs text-gray-400">Unit Subtotal:</span>
                          <span className="text-sm font-bold text-[#F59E0B]">
                            {formatPrice(booking.subtotal, currency)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {checkoutStep === 'logistics' && (
              <form id="tomas-dispatch-form" onSubmit={handleFinalizeDispatch} className="space-y-4 text-xs">
                <div className="p-3 bg-[#0F1115] border border-[#252932] rounded-xs">
                  <div className="flex justify-between font-bold text-gray-200 mb-1">
                    <span>Total Machinery Hire ({bookings.length} Units):</span>
                    <span className="text-[#F59E0B]">{formatPrice(grandTotal, currency)}</span>
                  </div>
                  <p className="text-[10px] text-gray-400">
                    Includes heavy transit lowboy, tie-downs, fuel topping, and on-site operator briefing.
                  </p>
                </div>

                <div className="space-y-3 bg-[#0F1115] p-4 border border-[#252932] rounded-xs">
                  <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider block">
                    1. Site & Contractor Information
                  </span>

                  <div>
                    <label className="text-[10px] text-gray-400 uppercase block mb-1">Company / Contractor Name</label>
                    <input
                      type="text"
                      required
                      value={jobsiteData.companyName}
                      onChange={(e) => setJobsiteData({ ...jobsiteData, companyName: e.target.value })}
                      className="w-full p-2 bg-[#1A1D24] border border-[#2F3542] text-white focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase block mb-1">Project Engineer / Manager</label>
                      <input
                        type="text"
                        required
                        value={jobsiteData.projectManager}
                        onChange={(e) => setJobsiteData({ ...jobsiteData, projectManager: e.target.value })}
                        className="w-full p-2 bg-[#1A1D24] border border-[#2F3542] text-white focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase block mb-1">Contact Phone</label>
                      <input
                        type="tel"
                        required
                        value={jobsiteData.phone}
                        onChange={(e) => setJobsiteData({ ...jobsiteData, phone: e.target.value })}
                        className="w-full p-2 bg-[#1A1D24] border border-[#2F3542] text-white focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 uppercase block mb-1">Jobsite Delivery Address</label>
                    <input
                      type="text"
                      required
                      value={jobsiteData.jobsiteAddress}
                      onChange={(e) => setJobsiteData({ ...jobsiteData, jobsiteAddress: e.target.value })}
                      className="w-full p-2 bg-[#1A1D24] border border-[#2F3542] text-white focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase block mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={jobsiteData.city}
                        onChange={(e) => setJobsiteData({ ...jobsiteData, city: e.target.value })}
                        className="w-full p-2 bg-[#1A1D24] border border-[#2F3542] text-white focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase block mb-1">State</label>
                      <input
                        type="text"
                        required
                        value={jobsiteData.state}
                        onChange={(e) => setJobsiteData({ ...jobsiteData, state: e.target.value })}
                        className="w-full p-2 bg-[#1A1D24] border border-[#2F3542] text-white focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase block mb-1">PO / Account #</label>
                      <input
                        type="text"
                        required
                        value={jobsiteData.poNumber}
                        onChange={(e) => setJobsiteData({ ...jobsiteData, poNumber: e.target.value })}
                        className="w-full p-2 bg-[#1A1D24] border border-[#2F3542] text-white focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 uppercase block mb-1">Gate / Staging Instructions</label>
                    <textarea
                      rows={2}
                      value={jobsiteData.gateAccessNotes}
                      onChange={(e) => setJobsiteData({ ...jobsiteData, gateAccessNotes: e.target.value })}
                      className="w-full p-2 bg-[#1A1D24] border border-[#2F3542] text-white focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('queue')}
                    className="text-xs text-gray-400 hover:text-white uppercase cursor-pointer"
                  >
                    Back to Queue
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#F59E0B] hover:bg-[#E58E0B] text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Truck className="w-4 h-4" />
                    <span>Authorize Dispatch ({formatPrice(grandTotal, currency)})</span>
                  </button>
                </div>
              </form>
            )}

            {checkoutStep === 'confirmed' && (
              <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#F59E0B]/20 border border-[#F59E0B] mx-auto rounded-full flex items-center justify-center text-[#F59E0B]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#F59E0B] font-bold uppercase tracking-widest block">
                    Mobilization Scheduled
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase">
                    Dispatch Docket Confirmed
                  </h3>
                  <p className="text-xs text-gray-400 max-w-xs mx-auto">
                    Lowboy trailers and certified operators have been allocated for {jobsiteData.companyName}.
                  </p>
                </div>

                <div className="p-4 bg-[#0F1115] border border-[#252932] rounded-xs text-left text-xs space-y-2 text-gray-300">
                  <div className="flex justify-between border-b border-[#252932] pb-1.5">
                    <span className="text-gray-500">Docket Reference:</span>
                    <span className="font-bold text-[#F59E0B]">{docketNumber}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#252932] pb-1.5">
                    <span className="text-gray-500">PO Number:</span>
                    <span className="font-bold text-white">{jobsiteData.poNumber}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#252932] pb-1.5">
                    <span className="text-gray-500">Site Contact:</span>
                    <span className="text-white">{jobsiteData.projectManager} ({jobsiteData.phone})</span>
                  </div>
                  <div className="flex justify-between border-b border-[#252932] pb-1.5">
                    <span className="text-gray-500">Delivery Site:</span>
                    <span className="text-white text-right max-w-[200px] truncate">{jobsiteData.jobsiteAddress}</span>
                  </div>
                  <div className="flex justify-between pt-1 font-bold text-white">
                    <span>Total Authorization:</span>
                    <span className="text-[#F59E0B]">{formatPrice(grandTotal, currency)}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-4 py-2.5 bg-[#1A1D24] hover:bg-[#252932] text-gray-300 border border-[#2F3542] text-xs font-bold uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Docket</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseAndReset}
                    className="px-5 py-2.5 bg-[#F59E0B] text-black font-extrabold text-xs uppercase cursor-pointer"
                  >
                    Return to Fleet
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer for Queue stage */}
          {checkoutStep === 'queue' && bookings.length > 0 && (
            <div className="p-5 border-t border-[#252932] bg-[#0F1115] space-y-3">
              <div className="space-y-1 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Total Mobilization &amp; Hire:</span>
                  <span className="text-base font-black text-[#F59E0B]">
                    {formatPrice(grandTotal, currency)}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400">
                  Includes lowboy heavy transport, tie-downs, and GPS dispatch confirmation.
                </p>
              </div>

              <button
                onClick={() => setCheckoutStep('logistics')}
                className="w-full py-3.5 bg-[#F59E0B] hover:bg-[#E58E0B] text-black font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Proceed to Jobsite Mobilization</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Cancellation Fee Prior to Yard Mobilization</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

