import React, { useState } from 'react';
import { JosephBooking } from '../types';
import {
  X,
  Trash2,
  Building2,
  Calendar,
  KeyRound,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  User,
  Mail,
  Phone,
  Printer,
  Sparkles,
  CreditCard
} from 'lucide-react';

interface JosephBookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: JosephBooking[];
  onCancelBooking: (id: string) => void;
  onClearBookings: () => void;
}

export const JosephBookingDrawer: React.FC<JosephBookingDrawerProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
  onClearBookings
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'queue' | 'guest' | 'confirmed'>('queue');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [keypadPin, setKeypadPin] = useState('');

  const [guestData, setGuestData] = useState({
    fullName: 'Julian Hayes',
    email: 'julian.hayes@example.com',
    phone: '+1 (555) 392-8172',
    estimatedArrivalTime: '3:00 PM - 5:00 PM',
    specialRequests: 'Quiet room with city view, extra feather pillows.'
  });

  const grandTotal = bookings.reduce((sum, b) => sum + b.totalCost, 0);

  const handleFinalizeBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `JSP-STAY-${Math.floor(100000 + Math.random() * 900000)}`;
    const pin = `${Math.floor(1000 + Math.random() * 9000)}#`;
    setConfirmationCode(code);
    setKeypadPin(pin);
    setStep('confirmed');
    onClearBookings();
  };

  const handleCloseAndReset = () => {
    setStep('queue');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={handleCloseAndReset} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-white border-l border-gray-300 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 bg-[#0B132B] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1C2541] flex items-center justify-center text-[#D97706]">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold">
                  {step === 'confirmed'
                    ? 'Stay Confirmed & PIN Issued'
                    : step === 'guest'
                    ? 'Guest Details & Check-In'
                    : `Your Reserved Suites (${bookings.length})`}
                </h2>
                <p className="text-[10px] text-[#D97706]">
                  Joseph Boutique Hotel Collection
                </p>
              </div>
            </div>
            <button
              onClick={handleCloseAndReset}
              className="p-1.5 rounded-lg bg-[#1C2541] hover:bg-gray-800 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {step === 'queue' && (
              <div className="space-y-4">
                {bookings.length === 0 ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center text-gray-400 space-y-3">
                    <Building2 className="w-12 h-12 text-gray-300" />
                    <p className="text-base font-bold text-gray-600">No rooms reserved yet.</p>
                    <p className="text-xs text-gray-400">Choose a penthouse, artist loft, or cedar pod to reserve.</p>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-[#0B132B] text-[#D97706] text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                    >
                      Explore Rooms
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {bookings.map((b) => (
                      <div
                        key={b.id}
                        className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-2 shadow-xs"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[9px] uppercase font-mono font-bold text-[#D97706] block">
                              {b.room.roomType}
                            </span>
                            <h4 className="text-sm font-bold text-[#0B132B]">
                              {b.room.name}
                            </h4>
                          </div>
                          <button
                            onClick={() => onCancelBooking(b.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-[11px] text-gray-600 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          <span>{b.room.location}</span>
                        </div>

                        <div className="p-2.5 bg-white rounded-xl border border-gray-200 text-xs space-y-1 font-mono">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Dates:</span>
                            <span className="font-bold text-[#0B132B]">{b.checkInDate} — {b.checkOutDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Stay Duration:</span>
                            <span>{b.totalNights} Nights ({b.guests} Guests)</span>
                          </div>
                          {b.includeDailyBreakfast && (
                            <div className="flex justify-between text-emerald-700 font-semibold">
                              <span>Breakfast Delivery:</span>
                              <span>Included</span>
                            </div>
                          )}
                          {b.includeAirportTransfer && (
                            <div className="flex justify-between text-[#D97706] font-semibold">
                              <span>Airport Chauffeur:</span>
                              <span>Included</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs text-gray-500">Total Stay Price:</span>
                          <span className="font-black text-sm text-[#0B132B]">
                            ${b.totalCost}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {step === 'guest' && (
              <form id="joseph-guest-form" onSubmit={handleFinalizeBooking} className="space-y-4 text-xs">
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex justify-between font-bold text-[#0B132B] mb-1">
                    <span>Stay Total ({bookings.length} Reservation{bookings.length > 1 ? 's' : ''}):</span>
                    <span className="text-[#D97706]">${grandTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-gray-600">
                    Includes digital keycard dispatch, boutique breakfast access, and on-demand concierge.
                  </p>
                </div>

                <div className="space-y-3 bg-gray-50 p-4 border border-gray-200 rounded-2xl">
                  <span className="text-[11px] font-bold text-[#0B132B] uppercase tracking-wider block">
                    Guest &amp; Arrival Information
                  </span>

                  <div>
                    <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Primary Guest Full Name</label>
                    <input
                      type="text"
                      required
                      value={guestData.fullName}
                      onChange={(e) => setGuestData({ ...guestData, fullName: e.target.value })}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-[#D97706]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={guestData.email}
                        onChange={(e) => setGuestData({ ...guestData, email: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-[#D97706]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Mobile Phone (PIN SMS)</label>
                      <input
                        type="tel"
                        required
                        value={guestData.phone}
                        onChange={(e) => setGuestData({ ...guestData, phone: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-[#D97706]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Estimated Arrival Window</label>
                    <select
                      value={guestData.estimatedArrivalTime}
                      onChange={(e) => setGuestData({ ...guestData, estimatedArrivalTime: e.target.value })}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-[#D97706]"
                    >
                      <option value="1:00 PM - 3:00 PM">Early Check-in (1:00 PM - 3:00 PM)</option>
                      <option value="3:00 PM - 5:00 PM">Standard Check-in (3:00 PM - 5:00 PM)</option>
                      <option value="5:00 PM - 8:00 PM">Evening Arrival (5:00 PM - 8:00 PM)</option>
                      <option value="8:00 PM - Late">Late Night Keyless Access (8:00 PM - Late)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Special Concierge Requests</label>
                    <textarea
                      rows={2}
                      value={guestData.specialRequests}
                      onChange={(e) => setGuestData({ ...guestData, specialRequests: e.target.value })}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-[#D97706]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('queue')}
                    className="text-xs text-gray-500 hover:text-black font-bold uppercase cursor-pointer"
                  >
                    Back to Suites
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#0B132B] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-colors"
                  >
                    <KeyRound className="w-4 h-4 text-[#D97706]" />
                    <span>Authorize &amp; Issue Key (${grandTotal.toFixed(2)})</span>
                  </button>
                </div>
              </form>
            )}

            {step === 'confirmed' && (
              <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#D97706] font-bold uppercase tracking-widest block">
                    Reservation Confirmed
                  </span>
                  <h3 className="text-xl font-black text-[#0B132B]">
                    Welcome, {guestData.fullName}
                  </h3>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto">
                    Your keyless smart-lock PIN code and digital suite credentials have been dispatched to <strong>{guestData.email}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl text-left text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Booking Reference:</span>
                    <span className="font-mono font-bold text-[#0B132B]">{confirmationCode}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2 items-center">
                    <span className="text-gray-500">Smart Lock Entry PIN:</span>
                    <span className="font-mono font-black text-sm text-[#D97706] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {keypadPin}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Guest Name:</span>
                    <span className="font-bold text-[#0B132B]">{guestData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Expected Arrival:</span>
                    <span className="text-gray-800">{guestData.estimatedArrivalTime}</span>
                  </div>
                  <div className="flex justify-between pt-1 font-bold text-[#0B132B]">
                    <span>Total Paid:</span>
                    <span className="text-[#D97706] font-black">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Voucher</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseAndReset}
                    className="px-5 py-2.5 bg-[#0B132B] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Return to Rooms
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer in queue step */}
          {step === 'queue' && bookings.length > 0 && (
            <div className="p-5 bg-gray-50 border-t border-gray-200 space-y-3">
              <div className="flex justify-between font-black text-base text-[#0B132B]">
                <span>Total Stay Cost</span>
                <span className="text-[#D97706]">${grandTotal.toFixed(2)}</span>
              </div>

              <button
                onClick={() => setStep('guest')}
                className="w-full py-3.5 bg-[#0B132B] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <span>Proceed to Guest Check-In (${grandTotal.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-medium pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Free cancellation up to 48 hours prior to check-in</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

