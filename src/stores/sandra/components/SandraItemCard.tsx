import React from 'react';
import { SandraItem } from '../types';
import { Sparkles, Heart, Star, Plus } from 'lucide-react';

interface SandraItemCardProps {
  item: SandraItem;
  onSelect: (item: SandraItem) => void;
  onQuickAdd: (item: SandraItem) => void;
}

export const SandraItemCard: React.FC<SandraItemCardProps> = ({
  item,
  onSelect,
  onQuickAdd
}) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="bg-white border-2 border-[#1E1B2E] rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_#1E1B2E] transition-all duration-300 flex flex-col group cursor-pointer shadow-[3px_3px_0px_0px_#1E1B2E]"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#FFFDF5] border-b-2 border-[#1E1B2E]">
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {item.isBestseller && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-[#FBBF24] text-[#1E1B2E] text-[10px] font-black rounded-full uppercase tracking-wider border-2 border-[#1E1B2E]">
              Joy Favorite
            </span>
          </div>
        )}

        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold rounded-full">
            {item.makerOrigin}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="font-bold text-[#8B5CF6] truncate">{item.category}</span>
            <div className="flex items-center gap-1 text-amber-500 font-bold shrink-0">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{item.rating}</span>
            </div>
          </div>

          <h3 className="font-extrabold text-[#1E1B2E] text-base group-hover:text-[#8B5CF6] transition-colors line-clamp-1">
            {item.name}
          </h3>

          <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed">
            {item.tagline}
          </p>
        </div>

        {/* Vibe Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.vibes.map((v) => (
            <span key={v} className="px-2 py-0.5 bg-[#FFFDF5] border border-[#1E1B2E] rounded-md text-[10px] font-bold text-gray-700">
              #{v}
            </span>
          ))}
        </div>

        {/* Bottom Price & Add */}
        <div className="flex items-center justify-between pt-2 border-t-2 border-gray-100">
          <div className="flex items-baseline gap-1.5">
            <span className="font-black text-xl text-[#1E1B2E]">
              ${item.price}
            </span>
            {item.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${item.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(item);
            }}
            className="px-3.5 py-1.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 border-2 border-[#1E1B2E] shadow-[2px_2px_0px_0px_#1E1B2E] transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
