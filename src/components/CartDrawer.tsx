import React, { useState } from 'react';
import {
  X,
  Trash2,
  ShoppingBag,
  Sparkles,
  Truck,
  ArrowRight,
  ShieldCheck,
  Tag,
  Calendar,
  Wrench,
  Palette,
  Users
} from 'lucide-react';
import { UnifiedCartItem } from '../types/storeTypes';
import { CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: UnifiedCartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  currency: CurrencyCode;
  onProceedToCheckout: () => void;
  appliedPromoCode: string | null;
  discountPercentage: number;
  onApplyPromoCode: (code: string) => { success: boolean; message: string };
  onRemovePromoCode: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  currency,
  onProceedToCheckout,
  appliedPromoCode,
  discountPercentage,
  onApplyPromoCode,
  onRemovePromoCode
}) => {
  if (!isOpen) return null;

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Subtotal calculation supporting stays, equipment hires, and physical goods
  const calculateItemTotal = (item: UnifiedCartItem) => {
    if (item.stayBooking) {
      return item.unitPrice * item.stayBooking.nights + item.stayBooking.cleaningFee;
    }
    if (item.machineryRental) {
      const operatorCost = item.machineryRental.includeOperator
        ? item.machineryRental.operatorDailyRate * item.machineryRental.rentalDays
        : 0;
      const waiverCost = item.machineryRental.damageWaiver ? 65 * item.machineryRental.rentalDays : 0;
      return item.unitPrice * item.machineryRental.rentalDays + operatorCost + waiverCost;
    }
    return item.unitPrice * item.quantity;
  };

  const subtotal = items.reduce((acc, item) => acc + calculateItemTotal(item), 0);
  const discountAmount = (subtotal * discountPercentage) / 100;
  const freeShippingThreshold = 500;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCost = isFreeShipping || items.length === 0 ? 0 : 45;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = onApplyPromoCode(promoInput.trim());
    if (res.success) {
      setPromoMessage({ type: 'success', text: res.message });
      setPromoInput('');
    } else {
      setPromoMessage({ type: 'error', text: res.message });
    }
  };

  return (
    <div
      id="cart-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end transition-opacity"
      onClick={onClose}
    >
      <div
        id="cart-drawer-panel"
        className="w-full max-w-md bg-[#FDFCFB] h-full shadow-2xl flex flex-col border-l border-[#E5E1DA] animate-in slide-in-from-right duration-300 text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E5E1DA] flex items-center justify-between bg-[#F2F0ED]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#1A1A1A]" />
            <h2 id="cart-drawer-title" className="font-serif text-lg font-normal text-[#1A1A1A] tracking-tight">
              Active Orders & Bookings
            </h2>
            <span className="text-[10px] bg-[#1A1A1A] text-white px-2 py-0.5 font-sans font-bold rounded-full">
              {items.length}
            </span>
          </div>

          <button
            id="close-cart-drawer-btn"
            onClick={onClose}
            className="p-1.5 border border-[#E5E1DA] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Shipping / Booking Dispatch Banner */}
        <div className="p-3.5 bg-[#F2F0ED]/60 border-b border-[#E5E1DA] text-xs">
          <div className="flex items-center justify-between mb-1.5 font-sans">
            <span className="flex items-center gap-1.5 text-[#1A1A1A] font-normal text-[11px]">
              <Truck className="w-3.5 h-3.5 text-[#C5A059]" />
              {isFreeShipping ? (
                <span className="text-[#165834] font-medium uppercase tracking-wider text-[10px]">
                  Priority Insured Transit Unlocked
                </span>
              ) : (
                <span className="uppercase tracking-wide text-[10px] text-gray-600">
                  Add {formatPrice(remainingForFreeShipping, currency)} for Complimentary Logistics
                </span>
              )}
            </span>
            <span className="text-[10px] text-gray-500 font-bold">
              {Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))}%
            </span>
          </div>
          <div className="w-full h-1 bg-[#E5E1DA] overflow-hidden">
            <div
              className="h-full bg-[#1A1A1A] transition-all duration-500"
              style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3 font-sans">
              <div className="w-12 h-12 mx-auto bg-[#F2F0ED] flex items-center justify-center text-gray-500 border border-[#E5E1DA]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <p className="font-serif text-2xl text-[#1A1A1A] font-light">Your Bag is Empty</p>
              <p className="text-xs text-gray-500 max-w-xs mx-auto font-sans leading-relaxed">
                Explore any of our 11 webshops to reserve stays, hire industrial machinery, or collect fine items.
              </p>
              <button
                id="cart-continue-shopping-empty-btn"
                onClick={onClose}
                className="mt-3 px-6 py-3 bg-[#1A1A1A] text-[#FDFCFB] text-[10px] font-sans uppercase tracking-[0.25em] font-medium hover:bg-black transition-colors"
              >
                Browse Concept Stores
              </button>
            </div>
          ) : (
            items.map((item) => {
              const itemTotal = calculateItemTotal(item);
              return (
                <div
                  id={`cart-item-${item.id}`}
                  key={item.id}
                  className="flex gap-3.5 p-3 bg-[#F2F0ED] border border-[#E5E1DA] relative group font-sans"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-16 h-20 object-cover border border-[#E5E1DA] shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm font-normal text-[#1A1A1A] truncate pr-2">
                          {item.productName}
                        </h4>
                        <button
                          id={`cart-remove-item-${item.id}`}
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-400 hover:text-red-700 transition-colors p-0.5"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Specialized summary labels */}
                      {item.stayBooking && (
                        <div className="text-[10px] text-teal-800 bg-[#E6FFFA] p-1.5 mt-1 border border-[#B2F5EA] space-y-0.5">
                          <div className="flex items-center gap-1 font-semibold">
                            <Calendar className="w-3 h-3" />
                            <span>{item.stayBooking.checkInDate} to {item.stayBooking.checkOutDate}</span>
                          </div>
                          <div>{item.stayBooking.nights} Nights • {item.stayBooking.guests} Guests</div>
                        </div>
                      )}

                      {item.machineryRental && (
                        <div className="text-[10px] text-amber-900 bg-amber-100/60 p-1.5 mt-1 border border-amber-200 space-y-0.5">
                          <div className="flex items-center gap-1 font-semibold">
                            <Wrench className="w-3 h-3" />
                            <span>{item.machineryRental.rentalDays} Days Rental</span>
                          </div>
                          <div>
                            {item.machineryRental.includeOperator ? '✓ Certified Operator' : 'Self-Operate'} • {item.machineryRental.damageWaiver ? '✓ Insured' : 'Basic'}
                          </div>
                        </div>
                      )}

                      {item.artPurchase && (
                        <div className="text-[10px] text-purple-900 bg-purple-50 p-1.5 mt-1 border border-purple-200">
                          <div className="flex items-center gap-1">
                            <Palette className="w-3 h-3" />
                            <span>{item.artPurchase.selectedFraming} • Certificate Included</span>
                          </div>
                        </div>
                      )}

                      {/* Standard Options / Colors */}
                      {!item.stayBooking && !item.machineryRental && (
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-gray-500 mt-1">
                          {item.selectedColor && (
                            <span className="flex items-center gap-1">
                              <span
                                className="w-2.5 h-2.5 rounded-full border border-black/20"
                                style={{ backgroundColor: item.selectedColor.hex }}
                              />
                              <span>{item.selectedColor.name}</span>
                            </span>
                          )}
                          {item.selectedOption && (
                            <span>• Spec: <strong className="text-[#1A1A1A]">{item.selectedOption}</strong></span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Quantity & Price */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E5E1DA]">
                      {!item.stayBooking && !item.machineryRental ? (
                        <div className="flex items-center border border-[#E5E1DA] bg-white">
                          <button
                            id={`cart-qty-dec-${item.id}`}
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-[#1A1A1A] hover:bg-[#E5E1DA] transition-colors font-bold"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                          <button
                            id={`cart-qty-inc-${item.id}`}
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-[#1A1A1A] hover:bg-[#E5E1DA] transition-colors font-bold"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] uppercase font-mono text-gray-600 bg-white px-2 py-0.5 border border-[#E5E1DA]">
                          {item.stayBooking ? '1 Reservation' : '1 Equipment Lease'}
                        </span>
                      )}

                      <span className="text-xs font-sans font-semibold text-[#1A1A1A]">
                        {formatPrice(itemTotal, currency)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#E5E1DA] bg-[#FDFCFB] space-y-3.5">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="space-y-1 font-sans">
              {appliedPromoCode ? (
                <div className="flex items-center justify-between p-2 bg-[#E5E1DA] text-xs text-[#1A1A1A]">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Promo: <strong>{appliedPromoCode}</strong> ({discountPercentage}% OFF)</span>
                  </span>
                  <button
                    type="button"
                    onClick={onRemovePromoCode}
                    className="text-[10px] text-red-700 hover:underline uppercase tracking-wider font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    id="cart-promo-code-input"
                    type="text"
                    placeholder="Promo code (e.g. VIP10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                    className="flex-1 px-3 py-1.5 text-xs bg-[#F2F0ED] border border-[#E5E1DA] uppercase tracking-wider focus:outline-none focus:border-[#1A1A1A]"
                  />
                  <button
                    id="cart-apply-promo-btn"
                    type="submit"
                    className="px-3 py-1.5 bg-[#1A1A1A] text-[#FDFCFB] text-[10px] uppercase font-sans font-semibold tracking-widest hover:bg-black transition-colors"
                  >
                    Apply
                  </button>
                </div>
              )}
              {promoMessage && (
                <p className={`text-[10px] ${promoMessage.type === 'success' ? 'text-[#165834]' : 'text-red-700'}`}>
                  {promoMessage.text}
                </p>
              )}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-gray-600 border-t border-[#E5E1DA] pt-2.5 font-sans">
              <div className="flex justify-between">
                <span>Total Items & Bookings:</span>
                <span className="text-[#1A1A1A] font-medium">{formatPrice(subtotal, currency)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#165834]">
                  <span>Applied Discount:</span>
                  <span>-{formatPrice(discountAmount, currency)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping & Dispatch Logistics:</span>
                <span>{shippingCost === 0 ? 'Complimentary' : formatPrice(shippingCost, currency)}</span>
              </div>
              <div className="flex justify-between text-base font-sans font-light text-[#1A1A1A] border-t border-[#E5E1DA] pt-2">
                <span className="font-medium">Grand Total:</span>
                <span className="font-bold">{formatPrice(finalTotal, currency)}</span>
              </div>
            </div>

            {/* Proceed to Checkout CTA */}
            <button
              id="proceed-to-checkout-btn"
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-3.5 bg-[#1A1A1A] hover:bg-black text-[#FDFCFB] text-[10px] font-sans uppercase tracking-[0.3em] font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FDFCFB]" />
            </button>

            <div className="text-center">
              <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-sans">
                🔒 Verified 256-Bit Encrypted Commerce
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
