import React, { useState } from 'react';
import { JosephRoom, JosephBooking } from '../types';
import {
  X,
  Star,
  Users,
  BedDouble,
  Bath,
  Maximize2,
  Check,
  Calendar,
  KeyRound,
  ShieldCheck,
  Sparkles,
  Car
} from 'lucide-react';

interface JosephRoomModalProps {
  room: JosephRoom | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirmBooking: (booking: JosephBooking) => void;
}

export const JosephRoomModal: React.FC<JosephRoomModalProps> = ({
  room,
  isOpen,
  onClose,
  onConfirmBooking
}) => {
  if (!isOpen || !room) return null;

  const [selectedImage, setSelectedImage] = useState(0);
  const [nights, setNights] = useState(3);
  const [guests, setGuests] = useState(2);
  const [includeAirportTransfer, setIncludeAirportTransfer] = useState(false);
  const [includeDailyBreakfast, setIncludeDailyBreakfast] = useState(true);
  const [specialRequests, setSpecialRequests] = useState('');

  // Dates
  const today = new Date();
  const checkIn = new Date(today);
  checkIn.setDate(today.getDate() + 3);
  const checkOut = new Date(checkIn);
  checkOut.setDate(checkIn.getDate() + nights);

  const formatDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // Rate calculations
  const baseNightly = room.pricePerNight * nights;
  const cleaningFee = 65;
  const transferFee = includeAirportTransfer ? 80 : 0;
  const breakfastFee = includeDailyBreakfast ? 25 * nights * guests : 0;
  const serviceFee = Math.round(baseNightly * 0.08);

  const totalCost = baseNightly + cleaningFee + transferFee + breakfastFee + serviceFee;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl border border-gray-200 my-auto max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl p-6 sm:p-8 text-[#0B132B]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-200">
              <img
                src={room.images[selectedImage] || room.images[0]}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>
            {room.images.length > 1 && (
              <div className="flex gap-2">
                {room.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-[#D97706]' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Room Features */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-2 text-xs">
              <span className="font-bold text-[#0B132B] uppercase tracking-wider text-[10px] block">
                Included Boutique Amenities
              </span>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                {room.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                    <span className="truncate">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details & Booking Panel */}
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold">
                {room.roomType} • {room.location}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B] mt-1">
                {room.name}
              </h2>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{room.rating}</span>
                </div>
                <span className="text-xs text-gray-500">({room.reviewCount} verified guest reviews)</span>
              </div>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed">
              {room.description}
            </p>

            {/* Stay Customizer */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-3">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Duration (Nights):</label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => setNights(Math.max(1, nights - 1))}
                      className="px-3 py-1 font-bold hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 font-bold text-center flex-1">{nights} Nights</span>
                    <button
                      onClick={() => setNights(nights + 1)}
                      className="px-3 py-1 font-bold hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-gray-600 block mb-1">Guests:</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full py-1.5 px-2 bg-white border border-gray-300 rounded-lg text-xs font-bold"
                  >
                    {Array.from({ length: room.maxGuests }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date simulation readout */}
              <div className="text-[11px] text-gray-500 flex items-center justify-between border-t border-gray-200 pt-2 font-mono">
                <span>Check-in: <strong>{formatDate(checkIn)}</strong></span>
                <span>Check-out: <strong>{formatDate(checkOut)}</strong></span>
              </div>
            </div>

            {/* Concierge Addons */}
            <div className="space-y-2 pt-1 text-xs">
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 hover:border-[#D97706] cursor-pointer bg-white">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeDailyBreakfast}
                    onChange={(e) => setIncludeDailyBreakfast(e.target.checked)}
                    className="rounded text-[#D97706]"
                  />
                  <span>Artisan French Pastry &amp; Cold-Press Breakfast Delivery</span>
                </span>
                <span className="font-bold text-[#0B132B]">+$25/guest/day</span>
              </label>

              <label className="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 hover:border-[#D97706] cursor-pointer bg-white">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeAirportTransfer}
                    onChange={(e) => setIncludeAirportTransfer(e.target.checked)}
                    className="rounded text-[#D97706]"
                  />
                  <span>Private Chauffeur Airport Pickup / Drop-off</span>
                </span>
                <span className="font-bold text-[#0B132B]">+$80</span>
              </label>
            </div>

            {/* Total and Reserve button */}
            <div className="pt-3 border-t border-gray-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-gray-500 uppercase block font-bold">Total Estimated ({nights} Nights)</span>
                <span className="font-black text-2xl text-[#0B132B]">
                  ${totalCost}
                </span>
              </div>

              <button
                onClick={() => {
                  onConfirmBooking({
                    id: `booking-${Date.now()}`,
                    room,
                    checkInDate: formatDate(checkIn),
                    checkOutDate: formatDate(checkOut),
                    guests,
                    totalNights: nights,
                    totalCost,
                    specialRequests,
                    includeAirportTransfer,
                    includeDailyBreakfast
                  });
                  onClose();
                }}
                className="px-6 py-3 bg-[#0B132B] hover:bg-[#D97706] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md cursor-pointer"
              >
                <KeyRound className="w-4 h-4 text-[#D97706]" />
                <span>Confirm Reservation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
