import React from 'react';
import { ClarissaCategory, ClarissaFilterState } from '../types';
import { Sparkles, UtensilsCrossed, Wine } from 'lucide-react';

interface ClarissaFilterProps {
  filters: ClarissaFilterState;
  onFilterChange: (newFilters: Partial<ClarissaFilterState>) => void;
  categories: ClarissaCategory[];
  totalResults: number;
}

export const ClarissaFilter: React.FC<ClarissaFilterProps> = ({
  filters,
  onFilterChange,
  categories,
  totalResults
}) => {
  return (
    <div className="bg-white border border-[#EBE5DC] rounded-2xl p-4 sm:p-6 mb-8 shadow-xs font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#EBE5DC]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = filters.category === cat;
            return (
              <button
                key={cat}
                onClick={() => onFilterChange({ category: cat })}
                className={`px-3.5 py-1.5 rounded-full text-xs font-serif font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#161B26] text-[#CBA153] shadow-xs'
                    : 'bg-[#FAF8F5] text-gray-700 hover:bg-[#EBE5DC]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Sort by */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-gray-500 font-serif">{totalResults} Fine Articles</span>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
            className="bg-[#FAF8F5] border border-[#EBE5DC] text-[#161B26] text-xs font-serif rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#CBA153]"
          >
            <option value="featured">Featured Atelier Pieces</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Guild Rating</option>
          </select>
        </div>
      </div>

      {/* Filter price bar */}
      <div className="pt-4 flex items-center justify-between text-xs">
        <span className="text-gray-500 font-serif italic">French Porcelain, Bohemian Crystal &amp; Stainless Service</span>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 font-serif">Max Price:</span>
          <span className="font-serif font-bold text-[#161B26]">${filters.priceRange[1]}</span>
          <input
            type="range"
            min="50"
            max="500"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange({ priceRange: [filters.priceRange[0], Number(e.target.value)] })}
            className="w-32 accent-[#CBA153]"
          />
        </div>
      </div>
    </div>
  );
};
