import React from 'react';
import { JosephRoom } from '../types';
import { Users, BedDouble, Bath, Maximize2, Star, KeyRound, MapPin } from 'lucide-react';

interface JosephRoomCardProps {
  room: JosephRoom;
  onSelect: (room: JosephRoom) => void;
  onQuickBook: (room: JosephRoom) => void;
}

export const JosephRoomCard: React.FC<JosephRoomCardProps> = ({
  room,
  onSelect,
  onQuickBook
}) => {
  return (
    <div
      onClick={() => onSelect(room)}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#D97706] hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {room.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-[#0B132B] text-[#D97706] text-[10px] font-bold rounded-full uppercase tracking-wider shadow-xs">
              Staff Pick
            </span>
          </div>
        )}

        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 bg-black/70 backdrop-blur-xs text-white text-[10px] font-medium rounded-full flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#D97706]" />
            <span>{room.neighborhood}</span>
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="font-bold text-[#D97706] uppercase tracking-wider text-[10px]">
              {room.roomType}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold shrink-0">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{room.rating}</span>
            </div>
          </div>

          <h3 className="font-bold text-[#0B132B] text-lg group-hover:text-[#D97706] transition-colors line-clamp-1">
            {room.name}
          </h3>

          <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed">
            {room.tagline}
          </p>
        </div>

        {/* Capacity Badges */}
        <div className="grid grid-cols-4 gap-1 py-2 border-y border-gray-100 text-[11px] text-gray-600 text-center font-medium">
          <div className="flex flex-col items-center justify-center">
            <Users className="w-3.5 h-3.5 text-gray-400 mb-0.5" />
            <span>{room.maxGuests} Guests</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BedDouble className="w-3.5 h-3.5 text-gray-400 mb-0.5" />
            <span>{room.bedrooms} {room.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Bath className="w-3.5 h-3.5 text-gray-400 mb-0.5" />
            <span>{room.bathrooms} Bath</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Maximize2 className="w-3.5 h-3.5 text-gray-400 mb-0.5" />
            <span>{room.sqft} sqft</span>
          </div>
        </div>

        {/* Bottom Price & Reserve */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-1">
            <span className="font-black text-xl text-[#0B132B]">
              ${room.pricePerNight}
            </span>
            <span className="text-xs text-gray-500 font-medium">/ night</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickBook(room);
            }}
            className="px-4 py-2 bg-[#0B132B] hover:bg-[#D97706] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <KeyRound className="w-3.5 h-3.5 text-[#D97706] group-hover:text-white" />
            <span>Reserve</span>
          </button>
        </div>
      </div>
    </div>
  );
};
