import React from 'react';
import { Filter, RotateCcw, Wrench, HardHat, Check } from 'lucide-react';
import { TomasFleetFilterState } from '../types';

interface TomasFleetFilterProps {
  filters: TomasFleetFilterState;
  onFilterChange: (updater: Partial<TomasFleetFilterState>) => void;
  onResetFilters: () => void;
  totalCount: number;
}

export const TomasFleetFilter: React.FC<TomasFleetFilterProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalCount
}) => {
  const categories = [
    'All Fleet',
    'Excavators',
    'Wheel Loaders',
    'Bulldozers',
    'Articulated Haulers',
    'Aerial Boom Lifts',
    'Compactors & Rollers'
  ];

  const applications = [
    'All Applications',
    'Heavy Earthmoving',
    'Quarry & Mining',
    'Highway & Civil',
    'High-Rise Construction'
  ];

  const manufacturers = ['All OEMs', 'Caterpillar', 'Komatsu', 'Volvo CE', 'Genie', 'Bomag'];

  const hasActiveFilters =
    filters.category !== 'All Fleet' ||
    filters.application !== 'All Applications' ||
    filters.manufacturer !== 'All OEMs' ||
    filters.operatorRequiredOnly ||
    filters.inYardOnly ||
    filters.sortBy !== 'featured';

  return (
    <div className="bg-[#12151C] border-y border-[#252932] py-4 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Top Category Buttons */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onFilterChange({ category: cat })}
                className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-all rounded-xs border ${
                  filters.category === cat
                    ? 'bg-[#F59E0B] text-black font-extrabold border-[#F59E0B] shadow-sm'
                    : 'bg-[#1C2028] text-gray-300 border-[#2D333F] hover:border-gray-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort & Count */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-gray-400 font-bold">
              {totalCount} Fleet Units Available
            </span>

            <div className="flex items-center gap-2">
              <label htmlFor="tomas-sort-select" className="text-gray-400 text-[11px] uppercase">
                Sort:
              </label>
              <select
                id="tomas-sort-select"
                value={filters.sortBy}
                onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
                className="bg-[#1C2028] border border-[#2D333F] text-xs py-1.5 px-2 text-white focus:outline-none focus:border-[#F59E0B] rounded-xs font-mono"
              >
                <option value="featured">Featured Units</option>
                <option value="rate-asc">Hire Rate: Low to High</option>
                <option value="rate-desc">Hire Rate: High to Low</option>
                <option value="weight-desc">Operating Tonnage: Max</option>
                <option value="power-desc">Engine Horsepower: Max</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sub-Row for Application & OEM Filter */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-[#252932] text-xs font-mono">
          <div className="flex flex-wrap items-center gap-3">
            {/* Application */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-gray-400">Application:</span>
              <select
                value={filters.application}
                onChange={(e) => onFilterChange({ application: e.target.value })}
                className="bg-[#1C2028] border border-[#2D333F] text-xs py-1 px-2 text-gray-200 rounded-xs focus:outline-none"
              >
                {applications.map((app) => (
                  <option key={app} value={app}>
                    {app}
                  </option>
                ))}
              </select>
            </div>

            {/* Manufacturer */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-gray-400">OEM:</span>
              <select
                value={filters.manufacturer}
                onChange={(e) => onFilterChange({ manufacturer: e.target.value })}
                className="bg-[#1C2028] border border-[#2D333F] text-xs py-1 px-2 text-gray-200 rounded-xs focus:outline-none"
              >
                {manufacturers.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Operator Available Checkbox */}
            <label className="flex items-center gap-1.5 cursor-pointer text-gray-300 text-[11px] select-none">
              <input
                type="checkbox"
                checked={filters.operatorRequiredOnly}
                onChange={(e) => onFilterChange({ operatorRequiredOnly: e.target.checked })}
                className="accent-[#F59E0B]"
              />
              <span>Certified Operator Available</span>
            </label>

            {/* In Yard Only */}
            <label className="flex items-center gap-1.5 cursor-pointer text-gray-300 text-[11px] select-none">
              <input
                type="checkbox"
                checked={filters.inYardOnly}
                onChange={(e) => onFilterChange({ inYardOnly: e.target.checked })}
                className="accent-[#F59E0B]"
              />
              <span>Immediate Yard Dispatch Only</span>
            </label>
          </div>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="text-xs text-[#F59E0B] hover:text-white flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Fleet Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
