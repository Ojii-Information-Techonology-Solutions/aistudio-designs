import React from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';
import { CharleneFilterState } from '../types';

interface CharleneFilterProps {
  filters: CharleneFilterState;
  onFilterChange: (updater: Partial<CharleneFilterState>) => void;
  onResetFilters: () => void;
  totalCount: number;
}

export const CharleneFilter: React.FC<CharleneFilterProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalCount
}) => {
  const categories = ['All', 'Gowns', 'Silk Slips', 'Cocktail', 'Couture', 'Bridal'];
  const silhouettes = ['All', 'Column', 'A-Line', 'Mermaid', 'Slip', 'Ballgown'];
  const occasions = ['All', 'Gala & Black Tie', 'Cocktail Soirée', 'Bridal & Reception', 'Evening Dining', 'Red Carpet'];

  const hasActiveFilters =
    filters.category !== 'All' ||
    filters.silhouette !== 'All' ||
    filters.occasion !== 'All' ||
    filters.onlyInStock ||
    filters.onlyMadeToOrder ||
    filters.sortBy !== 'featured';

  return (
    <div className="bg-[#FDFCFB] border-y border-[#E5E1DA] py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Top Category Buttons */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onFilterChange({ category: cat })}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.15em] transition-all border ${
                  filters.category === cat
                    ? 'bg-[#181615] text-[#FAF6F0] border-[#181615] font-medium'
                    : 'bg-[#F2F0ED] text-[#181615] border-[#E5E1DA] hover:border-[#181615]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort & Count */}
          <div className="flex items-center gap-4 text-xs font-sans">
            <span className="text-gray-500 uppercase tracking-wider text-[11px]">
              {totalCount} Silhouettes
            </span>

            <div className="flex items-center gap-2">
              <label htmlFor="charlene-sort-select" className="text-gray-500 uppercase tracking-wider text-[10px]">
                Sort:
              </label>
              <select
                id="charlene-sort-select"
                value={filters.sortBy}
                onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
                className="bg-[#F2F0ED] border border-[#E5E1DA] text-xs py-1.5 px-2.5 text-[#181615] focus:outline-none focus:border-[#181615] uppercase tracking-wider"
              >
                <option value="featured">Featured Atelier</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>
        </div>

        {/* Secondary Filter Sub-Row */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-[#E5E1DA]/60 text-xs font-sans">
          <div className="flex flex-wrap items-center gap-3">
            {/* Silhouette Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-gray-500">Cut:</span>
              <select
                value={filters.silhouette}
                onChange={(e) => onFilterChange({ silhouette: e.target.value })}
                className="bg-[#F2F0ED] border border-[#E5E1DA] text-[11px] py-1 px-2 text-[#181615] focus:outline-none"
              >
                {silhouettes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Occasion Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-gray-500">Occasion:</span>
              <select
                value={filters.occasion}
                onChange={(e) => onFilterChange({ occasion: e.target.value })}
                className="bg-[#F2F0ED] border border-[#E5E1DA] text-[11px] py-1 px-2 text-[#181615] focus:outline-none"
              >
                {occasions.map((occ) => (
                  <option key={occ} value={occ}>
                    {occ}
                  </option>
                ))}
              </select>
            </div>

            {/* In Stock Toggle */}
            <label className="flex items-center gap-1.5 cursor-pointer select-none text-[11px] uppercase tracking-wider text-gray-700">
              <input
                type="checkbox"
                checked={filters.onlyInStock}
                onChange={(e) => onFilterChange({ onlyInStock: e.target.checked })}
                className="accent-[#181615]"
              />
              <span>Ready to Ship</span>
            </label>
          </div>

          {/* Reset button */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#181615] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
