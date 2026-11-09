import React from 'react';
import { StoreDefinition } from '../types/storeTypes';
import { RotateCcw, Search, SlidersHorizontal } from 'lucide-react';

export interface DynamicFilterState {
  category: string;
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
  onlyInStock: boolean;
  minRating: number;
}

interface FilterBarProps {
  store: StoreDefinition;
  filters: DynamicFilterState;
  onFilterChange: (updater: Partial<DynamicFilterState>) => void;
  onResetFilters: () => void;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  store,
  filters,
  onFilterChange,
  onResetFilters,
  totalCount
}) => {
  const hasActiveFilters =
    filters.category !== 'All' ||
    filters.searchQuery !== '' ||
    filters.onlyInStock ||
    filters.minRating > 0 ||
    filters.sortBy !== 'featured';

  const categories = Array.from(new Set(['All', ...store.categories]));

  return (
    <div id="dynamic-filter-toolbar" className="bg-[#FDFCFB] border-y border-[#E5E1DA] py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-3.5">
        {/* Row 1: Category Filter Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Categories Pill Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 no-scrollbar">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold whitespace-nowrap mr-2 font-sans">
              {store.categoryLabel}:
            </span>
            {categories.map((cat) => {
              const isActive = filters.category === cat;
              return (
                <button
                  key={cat}
                  id={`filter-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => onFilterChange({ category: cat })}
                  className={`px-3 py-1.5 text-[10px] font-sans uppercase tracking-[0.18em] whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold shadow-sm'
                      : 'bg-[#F2F0ED] text-gray-700 border-[#E5E1DA] hover:bg-[#1A1A1A] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Search, In-Stock, Sort */}
          <div className="flex flex-wrap items-center gap-3 justify-between lg:justify-end">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder={`Search ${store.shortName}...`}
                value={filters.searchQuery}
                onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                className="text-[11px] bg-[#F2F0ED] border border-[#E5E1DA] pl-7 pr-3 py-1.5 text-[#1A1A1A] font-sans focus:outline-none focus:border-[#1A1A1A] w-36 sm:w-44"
              />
              <Search className="w-3 h-3 text-gray-400 absolute left-2 top-2.5" />
            </div>

            {/* In-Stock / Available Toggle */}
            <label className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-[0.15em] text-gray-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={filters.onlyInStock}
                onChange={(e) => onFilterChange({ onlyInStock: e.target.checked })}
                className="w-3.5 h-3.5 accent-[#1A1A1A] cursor-pointer"
              />
              <span>Available Now</span>
            </label>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold font-sans">
                Sort:
              </span>
              <select
                id="filter-sort-select"
                value={filters.sortBy}
                onChange={(e) => onFilterChange({ sortBy: e.target.value as DynamicFilterState['sortBy'] })}
                className="text-[10px] uppercase tracking-wider bg-[#F2F0ED] border border-[#E5E1DA] px-2.5 py-1.5 text-[#1A1A1A] font-sans focus:outline-none focus:border-[#1A1A1A] cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>
        </div>

        {/* Row 2: Status & Reset */}
        <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-wider pt-2 border-t border-[#E5E1DA]">
          <span className="text-gray-500">
            Showing <strong className="text-[#1A1A1A] font-bold">{totalCount}</strong> items in{' '}
            <strong className="text-[#1A1A1A]">{store.name}</strong>
          </span>

          {hasActiveFilters && (
            <button
              id="reset-filters-btn"
              onClick={onResetFilters}
              className="flex items-center gap-1 text-[#1A1A1A] hover:text-[#C5A059] font-semibold transition-colors"
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
