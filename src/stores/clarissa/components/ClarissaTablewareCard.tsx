import React from 'react';
import { ClarissaProduct } from '../types';
import { Sparkles, UtensilsCrossed, Star, Plus } from 'lucide-react';

interface ClarissaTablewareCardProps {
  product: ClarissaProduct;
  onSelect: (product: ClarissaProduct) => void;
  onQuickAdd: (product: ClarissaProduct) => void;
}

export const ClarissaTablewareCard: React.FC<ClarissaTablewareCardProps> = ({
  product,
  onSelect,
  onQuickAdd
}) => {
  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-white border border-[#EBE5DC] rounded-2xl overflow-hidden hover:border-[#CBA153] hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-[#FAF8F5]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isBestseller && (
            <span className="px-2.5 py-1 bg-[#161B26] text-[#CBA153] text-[10px] font-serif font-bold rounded-full uppercase tracking-wider">
              Atelier Pick
            </span>
          )}
        </div>

        {/* Origin */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-serif rounded-full">
            {product.origin}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="italic font-serif truncate text-[#CBA153]">
              {product.frenchTitle || product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold shrink-0">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 className="font-serif font-bold text-[#161B26] text-base group-hover:text-[#CBA153] transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-gray-600 line-clamp-2 mt-1 font-sans leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Specs tag */}
        <div className="pt-2 border-t border-[#EBE5DC] text-[11px] text-gray-500 flex items-center justify-between font-serif">
          <span>{product.material}</span>
          <span className="text-[#161B26] font-bold">{product.piecesPerSet} {product.piecesPerSet === 1 ? 'Piece' : 'Pieces'}</span>
        </div>

        {/* Bottom Price */}
        <div className="flex items-center justify-between pt-2 border-t border-[#EBE5DC]">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif font-bold text-lg text-[#161B26]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through font-serif">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(product);
            }}
            className="px-3.5 py-1.5 bg-[#161B26] hover:bg-[#CBA153] hover:text-black text-white rounded-xl text-xs font-serif font-bold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
