import React from 'react';
import { SandraCategory, SandraFilterState } from '../types';
import { Gift, Sparkles } from 'lucide-react';

interface SandraFilterProps {
  filters: SandraFilterState;
  onFilterChange: (newFilters: Partial<SandraFilterState>) => void;
  categories: SandraCategory[];
  totalResults: number;
}

export const SandraFilter: React.FC<SandraFilterProps> = ({
  filters,
  onFilterChange,
  categories,
  totalResults
}) => {
  return (
    <div className="bg-white border-2 border-[#1E1B2E] rounded-3xl p-4 sm:p-6 mb-8 shadow-[4px_4px_0px_0px_#1E1B2E] font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b-2 border-gray-100">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = filters.category === cat;
            return (
              <button
                key={cat}
                onClick={() => onFilterChange({ category: cat })}
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#8B5CF6] text-white border-[#1E1B2E] shadow-[2px_2px_0px_0px_#1E1B2E]'
                    : 'bg-[#FFFDF5] text-[#1E1B2E] border-transparent hover:border-[#1E1B2E]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-bold text-gray-500">{totalResults} Objects</span>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
            className="bg-[#FFFDF5] border-2 border-[#1E1B2E] text-[#1E1B2E] text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          >
            <option value="featured">Featured Curations</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Delight Rating</option>
          </select>
        </div>
      </div>

      <div className="pt-4 flex items-center justify-between text-xs font-bold">
        <span className="text-gray-500 font-mono">Assorted stationery, scented goods &amp; ceramic wonders</span>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Max Price:</span>
          <span className="text-[#8B5CF6]">${filters.priceRange[1]}</span>
          <input
            type="range"
            min="10"
            max="120"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange({ priceRange: [filters.priceRange[0], Number(e.target.value)] })}
            className="w-32 accent-[#8B5CF6]"
          />
        </div>
      </div>
    </div>
  );
};
