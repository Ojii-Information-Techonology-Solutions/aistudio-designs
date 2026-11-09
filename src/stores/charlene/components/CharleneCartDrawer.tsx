import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, ShieldCheck, Gift, Sparkles } from 'lucide-react';
import { CharleneCartItem } from '../types';
import { CurrencyCode } from '../../../types';
import { formatPrice } from '../../../utils/formatters';

interface CharleneCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CharleneCartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  currency: CurrencyCode;
}

export const CharleneCartDrawer: React.FC<CharleneCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  currency
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFCFB] border-l border-[#E5E1DA] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#E5E1DA] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
              <h2 className="font-serif text-lg tracking-[0.1em] text-[#181615] uppercase font-light">
                Atelier Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E5E1DA]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-500">
                <ShoppingBag className="w-12 h-12 text-[#E5E1DA] stroke-[1]" />
                <p className="font-serif text-base text-[#181615]">Your shopping bag is empty</p>
                <p className="text-xs font-sans max-w-xs">
                  Discover our timeless Parisian silks and bespoke evening gowns.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#181615] text-[#FAF6F0] text-xs uppercase tracking-widest font-sans"
                >
                  Explore Atelier
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-26 object-cover border border-[#E5E1DA]"
                  />
                  <div className="flex-1 flex flex-col justify-between space-y-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm text-[#181615] font-normal leading-snug line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-400 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-gray-500 font-sans space-y-0.5 mt-1">
                        <p>Color: <span className="text-[#181615] font-medium">{item.selectedColor}</span></p>
                        <p>Size: <span className="text-[#181615] font-medium">{item.selectedSize}</span></p>
                        {item.customHemmingLength && (
                          <p className="text-[#C5A059] italic">
                            Hemming: {item.customHemmingLength}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#E5E1DA]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-[#F2F0ED]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-sans font-medium">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-[#F2F0ED]"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-serif text-sm text-[#181615]">
                        {formatPrice(item.price * item.quantity, currency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E5E1DA] bg-[#F2F0ED]/50 space-y-4">
              <div className="space-y-2 text-xs font-sans">
                <div className="flex justify-between text-gray-600">
                  <span>Atelier Subtotal</span>
                  <span className="font-serif text-sm text-[#181615] font-medium">
                    {formatPrice(subtotal, currency)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>White-Glove Archival Shipping</span>
                  <span className="text-[#C5A059] uppercase tracking-wider text-[10px] font-medium">
                    Complimentary
                  </span>
                </div>
                <div className="flex justify-between text-[#181615] font-medium text-sm pt-2 border-t border-[#E5E1DA]">
                  <span>Total</span>
                  <span className="font-serif text-base">{formatPrice(subtotal, currency)}</span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full py-4 bg-[#181615] hover:bg-black text-[#FAF6F0] text-xs font-sans uppercase tracking-[0.25em] font-medium transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider text-gray-500 font-sans">
                <ShieldCheck className="w-3 h-3 text-[#181615]" />
                <span>Paris Atelier Direct Dispatch</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
