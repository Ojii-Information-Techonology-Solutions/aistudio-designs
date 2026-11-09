import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Lock,
  CreditCard,
  Truck,
  Gift,
  ArrowRight,
  Printer,
  Calendar,
  Wrench
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CurrencyCode } from '../types';
import { UnifiedCartItem } from '../types/storeTypes';
import { formatPrice, calculateEstimatedDeliveryDate } from '../utils/formatters';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: UnifiedCartItem[];
  currency: CurrencyCode;
  discountPercentage: number;
  onOrderSuccess: () => void;
  storeName?: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  discountPercentage,
  onOrderSuccess,
  storeName = 'Charlène'
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@charlene.com',
    phone: '+1 (555) 234-5678',
    address: '742 Evergreen Terrace, Apt 4B',
    city: 'New York',
    state: 'NY',
    postalCode: '10021',
    country: 'United States',
    shippingMethod: 'white-glove',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '888',
    giftMessage: 'With appreciation and highest regards.',
    recipientName: 'Eleanor'
  });

  const [orderNumber, setOrderNumber] = useState<string>('');

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

  const subtotal = items.reduce((sum, item) => sum + calculateItemTotal(item), 0);
  const discountAmount = (subtotal * discountPercentage) / 100;
  const isFreeShipping = subtotal >= 500;
  const shippingFee = formData.shippingMethod === 'express' ? 65 : isFreeShipping ? 0 : 45;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrderNum);
    setStep(3);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#EADBCE', '#181615', '#FAF6F0']
      });
    } catch {
      // ignore
    }

    onOrderSuccess();
  };

  return (
    <div
      id="checkout-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="checkout-modal-container"
        className="relative bg-[#FDFCFB] w-full max-w-4xl border border-[#E5E1DA] p-6 sm:p-10 my-auto max-h-[92vh] overflow-y-auto text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {step !== 3 && (
          <button
            id="close-checkout-modal-btn"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 border border-[#E5E1DA] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Header Branding */}
        <div className="text-center pb-5 border-b border-[#E5E1DA]">
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] text-[#1A1A1A] uppercase font-light">
            {storeName}
          </span>
          <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-gray-500 mt-1">
            Secure Commerce & Booking Checkout
          </p>
        </div>

        {/* Steps Flow */}
        {step !== 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step indicator */}
              <div className="flex items-center gap-3 text-xs font-sans">
                <button
                  id="checkout-step1-tab"
                  onClick={() => setStep(1)}
                  className={`pb-1 uppercase tracking-wider text-[11px] font-medium transition-colors ${
                    step === 1 ? 'border-b border-[#1A1A1A] text-[#1A1A1A]' : 'text-gray-400'
                  }`}
                >
                  1. Delivery & Contact Details
                </button>
                <span className="text-gray-300">•</span>
                <button
                  id="checkout-step2-tab"
                  onClick={() => setStep(2)}
                  className={`pb-1 uppercase tracking-wider text-[11px] font-medium transition-colors ${
                    step === 2 ? 'border-b border-[#1A1A1A] text-[#1A1A1A]' : 'text-gray-400'
                  }`}
                >
                  2. Payment & Confirmation
                </button>
              </div>

              {step === 1 ? (
                <div className="space-y-4 animate-in fade-in duration-200 font-sans">
                  <h3 className="font-serif text-xl font-light text-[#1A1A1A]">
                    Customer & Logistics Info
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                        First Name
                      </label>
                      <input
                        id="checkout-first-name-input"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full text-xs p-2.5 bg-[#F2F0ED] border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                        Last Name
                      </label>
                      <input
                        id="checkout-last-name-input"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full text-xs p-2.5 bg-[#F2F0ED] border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                        Email Address
                      </label>
                      <input
                        id="checkout-email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs p-2.5 bg-[#F2F0ED] border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                        Phone (Dispatch Updates)
                      </label>
                      <input
                        id="checkout-phone-input"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs p-2.5 bg-[#F2F0ED] border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                      Street Address
                    </label>
                    <input
                      id="checkout-address-input"
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full text-xs p-2.5 bg-[#F2F0ED] border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                        City
                      </label>
                      <input
                        id="checkout-city-input"
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full text-xs p-2.5 bg-[#F2F0ED] border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                        State / Region
                      </label>
                      <input
                        id="checkout-state-input"
                        type="text"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full text-xs p-2.5 bg-[#F2F0ED] border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                        Postal Code
                      </label>
                      <input
                        id="checkout-postal-input"
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="w-full text-xs p-2.5 bg-[#F2F0ED] border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                        required
                      />
                    </div>
                  </div>

                  {/* Delivery Tier Options */}
                  <div className="pt-2 space-y-2">
                    <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block">
                      Logistics Tier:
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center justify-between p-3.5 border border-[#E5E1DA] bg-[#F2F0ED] cursor-pointer hover:border-[#1A1A1A] transition-colors">
                        <div className="flex items-center gap-3">
                          <input
                            id="checkout-shipping-standard"
                            type="radio"
                            name="shippingMethod"
                            value="white-glove"
                            checked={formData.shippingMethod === 'white-glove'}
                            onChange={(e) => setFormData({ ...formData, shippingMethod: e.target.value })}
                            className="accent-[#1A1A1A]"
                          />
                          <div>
                            <p className="font-serif text-sm font-normal text-[#1A1A1A]">
                              Standard Insured Transport & Dispatch
                            </p>
                            <p className="text-[10px] text-gray-500">
                              Secure transit and digital dispatch confirmation (3-4 Business Days)
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-[#165834] uppercase tracking-wider">
                          {isFreeShipping ? 'FREE' : formatPrice(45, currency)}
                        </span>
                      </label>

                      <label className="flex items-center justify-between p-3.5 border border-[#E5E1DA] bg-[#F2F0ED] cursor-pointer hover:border-[#1A1A1A] transition-colors">
                        <div className="flex items-center gap-3">
                          <input
                            id="checkout-shipping-express"
                            type="radio"
                            name="shippingMethod"
                            value="express"
                            checked={formData.shippingMethod === 'express'}
                            onChange={(e) => setFormData({ ...formData, shippingMethod: e.target.value })}
                            className="accent-[#1A1A1A]"
                          />
                          <div>
                            <p className="font-serif text-sm font-normal text-[#1A1A1A]">
                              VIP Priority Express Freight / Courier
                            </p>
                            <p className="text-[10px] text-gray-500">
                              Guaranteed 48h expedited dispatch
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-normal text-[#1A1A1A]">
                          {formatPrice(65, currency)}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      id="checkout-proceed-step2-btn"
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-7 py-3.5 bg-[#1A1A1A] text-[#FDFCFB] text-[10px] font-sans uppercase tracking-[0.25em] font-medium hover:bg-black transition-colors flex items-center gap-2"
                    >
                      <span>Proceed to Payment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Step 2: Payment & Gift Note */
                <form onSubmit={handleCompleteOrder} className="space-y-4 animate-in fade-in duration-200 font-sans">
                  <h3 className="font-serif text-xl font-light text-[#1A1A1A]">
                    Payment & Special Instructions
                  </h3>

                  <div className="p-4 bg-[#F2F0ED] border border-[#E5E1DA] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#1A1A1A]">
                      <Gift className="w-4 h-4 text-[#C5A059]" />
                      <span className="uppercase tracking-wider text-[11px]">
                        Order Note or Site Dispatch Instructions:
                      </span>
                    </div>
                    <textarea
                      id="checkout-gift-note-input"
                      rows={2}
                      value={formData.giftMessage}
                      onChange={(e) => setFormData({ ...formData, giftMessage: e.target.value })}
                      placeholder="Special instructions, gate codes, or gift message..."
                      className="w-full text-xs p-2.5 bg-white border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>

                  {/* Payment Card Inputs */}
                  <div className="p-5 bg-[#F2F0ED] border border-[#E5E1DA] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-[#1A1A1A]" />
                        <span className="font-serif text-sm font-normal text-[#1A1A1A]">
                          Credit Card or Corporate Billing
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-wider">
                        <Lock className="w-3 h-3 text-[#165834]" />
                        <span>256-Bit Encrypted</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                        Card Number
                      </label>
                      <input
                        id="checkout-card-num-input"
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full text-xs p-2.5 bg-white border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                          Expiration Date
                        </label>
                        <input
                          id="checkout-card-exp-input"
                          type="text"
                          value={formData.cardExp}
                          onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                          className="w-full text-xs p-2.5 bg-white border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-gray-600 font-medium block mb-1">
                          Security Code (CVC)
                        </label>
                        <input
                          id="checkout-card-cvc-input"
                          type="text"
                          value={formData.cardCvc}
                          onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                          className="w-full text-xs p-2.5 bg-white border border-[#E5E1DA] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button
                      id="checkout-back-to-step1-btn"
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs uppercase tracking-wider text-gray-600 hover:text-[#1A1A1A]"
                    >
                      Back to Details
                    </button>

                    <button
                      id="checkout-place-order-btn"
                      type="submit"
                      className="px-8 py-3.5 bg-[#1A1A1A] hover:bg-black text-[#FDFCFB] text-[10px] font-sans uppercase tracking-[0.25em] font-medium transition-colors flex items-center gap-2"
                    >
                      <Lock className="w-3.5 h-3.5 text-[#FDFCFB]" />
                      <span>Authorize & Place Order • {formatPrice(total, currency)}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Order Summary Right */}
            <div className="lg:col-span-5 bg-[#F2F0ED] p-5 border border-[#E5E1DA] flex flex-col justify-between space-y-4 font-sans">
              <div>
                <h3 className="font-serif text-lg font-light text-[#1A1A1A] border-b border-[#E5E1DA] pb-2">
                  Order Summary ({items.length} Entries)
                </h3>

                <div className="divide-y divide-[#E5E1DA] max-h-64 overflow-y-auto py-2 space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="pt-2 flex gap-3 text-xs">
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        className="w-12 h-14 object-cover border border-[#E5E1DA]"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-serif font-normal text-[#1A1A1A] truncate">
                          {item.productName}
                        </p>
                        {item.stayBooking && (
                          <p className="text-[10px] text-teal-800 font-medium">
                            {item.stayBooking.nights} Nights ({item.stayBooking.checkInDate})
                          </p>
                        )}
                        {item.machineryRental && (
                          <p className="text-[10px] text-amber-900 font-medium">
                            {item.machineryRental.rentalDays} Days Hire
                          </p>
                        )}
                        {!item.stayBooking && !item.machineryRental && (
                          <p className="text-[10px] uppercase tracking-wider text-gray-500">
                            {item.selectedOption} • Qty {item.quantity}
                          </p>
                        )}
                        <p className="font-sans font-medium text-[#1A1A1A] mt-0.5">
                          {formatPrice(calculateItemTotal(item), currency)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price calculations */}
              <div className="space-y-1.5 text-xs text-gray-600 border-t border-[#E5E1DA] pt-3">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-[#1A1A1A] font-normal">{formatPrice(subtotal, currency)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#165834]">
                    <span>Discount ({discountPercentage}%):</span>
                    <span>-{formatPrice(discountAmount, currency)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Logistics & Freight:</span>
                  <span>{shippingFee === 0 ? 'Complimentary' : formatPrice(shippingFee, currency)}</span>
                </div>
                <div className="flex justify-between text-base font-sans font-light text-[#1A1A1A] border-t border-[#E5E1DA] pt-2">
                  <span>Grand Total:</span>
                  <span className="font-bold">{formatPrice(total, currency)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Order Confirmation Screen */}
        {step === 3 && (
          <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300 font-sans">
            <div className="w-16 h-16 mx-auto bg-[#F2F0ED] text-[#1A1A1A] flex items-center justify-center border border-[#E5E1DA]">
              <CheckCircle2 className="w-8 h-8 text-[#165834]" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Order Confirmed & Processed
              </span>
              <h2 id="order-confirmed-heading" className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]">
                Thank you, {formData.firstName}
              </h2>
              <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                Your order and reservations with {storeName} have been recorded. Confirmation and tracking details have been dispatched to <strong>{formData.email}</strong>.
              </p>
            </div>

            {/* Order Details Receipt Box */}
            <div className="max-w-md mx-auto p-5 bg-[#F2F0ED] border border-[#E5E1DA] text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-[#E5E1DA] pb-2">
                <span className="text-gray-500">Order Reference:</span>
                <strong className="font-sans text-[#1A1A1A]">{orderNumber}</strong>
              </div>

              <div className="flex justify-between border-b border-[#E5E1DA] pb-2">
                <span className="text-gray-500">Estimated Delivery / Dispatch:</span>
                <strong className="font-sans text-[#165834]">
                  {calculateEstimatedDeliveryDate(formData.shippingMethod === 'express' ? 2 : 4)}
                </strong>
              </div>

              <div className="flex justify-between border-b border-[#E5E1DA] pb-2">
                <span className="text-gray-500">Client Address:</span>
                <span className="text-right text-[#1A1A1A]">
                  {formData.address}, {formData.city}, {formData.state} {formData.postalCode}
                </span>
              </div>

              <div className="flex justify-between pt-1 font-normal text-sm text-[#1A1A1A]">
                <span>Total Charged:</span>
                <span className="font-bold">{formatPrice(total, currency)}</span>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                id="print-receipt-btn"
                onClick={() => window.print()}
                className="px-5 py-3 border border-[#E5E1DA] bg-white hover:bg-[#F2F0ED] text-[#1A1A1A] text-[10px] font-sans uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Invoice</span>
              </button>

              <button
                id="close-confirmation-btn"
                onClick={onClose}
                className="px-7 py-3 bg-[#1A1A1A] text-[#FDFCFB] text-[10px] font-sans uppercase tracking-[0.25em] font-medium hover:bg-black transition-colors"
              >
                Return to Store
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
