import React from 'react';
import { PlantitoProduct } from '../types';
import { Sprout, Sun, Droplets, Heart, Plus, Star } from 'lucide-react';

interface PlantitoProductCardProps {
  product: PlantitoProduct;
  onSelect: (product: PlantitoProduct) => void;
  onQuickAdd: (product: PlantitoProduct) => void;
}

export const PlantitoProductCard: React.FC<PlantitoProductCardProps> = ({
  product,
  onSelect,
  onQuickAdd
}) => {
  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-white border border-[#D5CCC1] rounded-2xl overflow-hidden hover:border-[#1E392A] hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-[#F4EFEA]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isBestseller && (
            <span className="px-2.5 py-1 bg-[#1E392A] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
              Nursery Bestseller
            </span>
          )}
          {product.careGuide?.petFriendly && (
            <span className="px-2.5 py-1 bg-[#84CC16] text-[#14271D] text-[10px] font-bold rounded-full uppercase tracking-wider">
              Pet Safe
            </span>
          )}
        </div>

        {/* Category tag */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="italic font-serif truncate text-[#4A6B53]">
              {product.botanicalName || product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold shrink-0">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 className="font-serif font-bold text-[#1E392A] text-base group-hover:text-[#C86D51] transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-gray-600 line-clamp-2 mt-1 font-sans leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Spec / Care mini bar */}
        {product.careGuide && (
          <div className="flex items-center gap-3 pt-2 border-t border-[#E5DFD7] text-[11px] text-[#4A6B53]">
            <span className="flex items-center gap-1">
              <Sun className="w-3 h-3 text-[#F59E0B]" />
              {product.careGuide.light}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Droplets className="w-3 h-3 text-[#38BDF8]" />
              {product.careGuide.difficulty}
            </span>
          </div>
        )}

        {/* Fertilizer NPK or Pot Spec */}
        {product.specifications.npkRatio && (
          <div className="pt-2 border-t border-[#E5DFD7] text-[11px] font-mono text-[#C86D51] font-bold">
            NPK Ratio: {product.specifications.npkRatio}
          </div>
        )}

        {/* Bottom Price & Action */}
        <div className="flex items-center justify-between pt-2 border-t border-[#E5DFD7]">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif font-bold text-lg text-[#1E392A]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(product);
            }}
            className="px-3.5 py-1.5 bg-[#1E392A] hover:bg-[#C86D51] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
