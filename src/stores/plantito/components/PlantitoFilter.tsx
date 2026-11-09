import React from 'react';
import { PlantitoCategory, PlantitoFilterState } from '../types';
import { Filter, SlidersHorizontal, Sun, Droplets, Heart } from 'lucide-react';

interface PlantitoFilterProps {
  filters: PlantitoFilterState;
  onFilterChange: (newFilters: Partial<PlantitoFilterState>) => void;
  categories: PlantitoCategory[];
  totalResults: number;
}

export const PlantitoFilter: React.FC<PlantitoFilterProps> = ({
  filters,
  onFilterChange,
  categories,
  totalResults
}) => {
  return (
    <div className="bg-white border border-[#D5CCC1] rounded-2xl p-4 sm:p-6 mb-8 shadow-xs font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E5DFD7]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = filters.category === cat;
            return (
              <button
                key={cat}
                onClick={() => onFilterChange({ category: cat })}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1E392A] text-white shadow-xs'
                    : 'bg-[#F4EFEA] text-[#2C302E] hover:bg-[#E5DFD7]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Sort by */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-gray-500">{totalResults} Products</span>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
            className="bg-[#F4EFEA] border border-[#D5CCC1] text-[#2C302E] text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#1E392A]"
          >
            <option value="featured">Featured Nursery Picks</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Vitality Rating</option>
          </select>
        </div>
      </div>

      {/* Secondary filter attributes */}
      <div className="pt-4 flex flex-wrap items-center gap-4 text-xs">
        <label className="flex items-center gap-2 cursor-pointer text-[#2C302E]">
          <input
            type="checkbox"
            checked={filters.petFriendlyOnly}
            onChange={(e) => onFilterChange({ petFriendlyOnly: e.target.checked })}
            className="rounded text-[#1E392A] focus:ring-[#1E392A]"
          />
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-[#C86D51]" />
            Pet-Friendly Only (Cats &amp; Dogs)
          </span>
        </label>

        <div className="flex items-center gap-2 ml-auto">
          <span className="text-gray-500">Max Price:</span>
          <span className="font-bold text-[#1E392A]">${filters.priceRange[1]}</span>
          <input
            type="range"
            min="10"
            max="120"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange({ priceRange: [filters.priceRange[0], Number(e.target.value)] })}
            className="w-28 accent-[#1E392A]"
          />
        </div>
      </div>
    </div>
  );
};
