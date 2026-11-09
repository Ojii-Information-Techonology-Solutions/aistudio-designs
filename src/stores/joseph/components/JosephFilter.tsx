import React from 'react';
import { JosephRoomType, JosephFilterState } from '../types';
import { Users, DollarSign } from 'lucide-react';

interface JosephFilterProps {
  filters: JosephFilterState;
  onFilterChange: (newFilters: Partial<JosephFilterState>) => void;
  roomTypes: JosephRoomType[];
  totalResults: number;
}

export const JosephFilter: React.FC<JosephFilterProps> = ({
  filters,
  onFilterChange,
  roomTypes,
  totalResults
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 mb-8 shadow-xs font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
        {/* Room Type Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {roomTypes.map((type) => {
            const isActive = filters.roomType === type;
            return (
              <button
                key={type}
                onClick={() => onFilterChange({ roomType: type })}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0B132B] text-[#D97706] shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-gray-500 font-bold">{totalResults} Suites Available</span>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
            className="bg-gray-50 border border-gray-300 text-[#0B132B] text-xs font-bold rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#D97706]"
          >
            <option value="featured">Featured Residences</option>
            <option value="price-asc">Nightly Rate: Low to High</option>
            <option value="price-desc">Nightly Rate: High to Low</option>
            <option value="rating">Highest Guest Rating</option>
          </select>
        </div>
      </div>

      {/* Range and guests */}
      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-medium">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Guests:</span>
          {[1, 2, 3, 4].map((g) => (
            <button
              key={g}
              onClick={() => onFilterChange({ guests: g })}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                filters.guests === g
                  ? 'bg-[#0B132B] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {g}+ {g === 1 ? 'Guest' : 'Guests'}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-500">Max Nightly Rate:</span>
          <span className="font-bold text-[#0B132B]">${filters.priceRange[1]}/nt</span>
          <input
            type="range"
            min="90"
            max="400"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange({ priceRange: [filters.priceRange[0], Number(e.target.value)] })}
            className="w-32 accent-[#D97706]"
          />
        </div>
      </div>
    </div>
  );
};
