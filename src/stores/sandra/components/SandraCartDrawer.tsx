import React, { useState } from 'react';
import { SandraCartItem } from '../types';
import {
  X,
  Trash2,
  Gift,
  Heart,
  Smile,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  CreditCard,
  Printer,
  CheckCircle2
} from 'lucide-react';

interface SandraCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: SandraCartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const SandraCartDrawer: React.FC<SandraCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'bag' | 'shipping' | 'confirmed'>('bag');
  const [wonderCode, setWonderCode] = useState('');
  const [shippingData, setShippingData] = useState({
    fullName: 'Clara Oswald',
    email: 'clara.oswald@example.com',
    phone: '+1 (555) 412-9843',
    address: '124 Blossom Lane',
    city: 'Seattle',
    state: 'WA',
    postalCode: '98101',
    giftCardMessage: 'Happy birthday to the most radiant human!'
  });

  const subtotal = items.reduce((sum, i) => {
    let price = i.item.price;
    if (i.includeSurpriseGiftWrap) price += 6;
    return sum + price * i.quantity;
  }, 0);

  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 7.0;
  const grandTotal = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `WONDER-${Math.floor(100000 + Math.random() * 900000)}`;
    setWonderCode(code);
    setStep('confirmed');
    onClearCart();
  };

  const handleCloseAndReset = () => {
    setStep('bag');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={handleCloseAndReset} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-[#FFFDF5] border-l-3 border-[#1E1B2E] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 bg-[#8B5CF6] text-white flex items-center justify-between border-b-2 border-[#1E1B2E]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white text-[#8B5CF6] flex items-center justify-center border-2 border-[#1E1B2E] shadow-[2px_2px_0px_0px_#1E1B2E]">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-black tracking-tight">
                  {step === 'confirmed'
                    ? 'Joy is on the Way!'
                    : step === 'shipping'
                    ? 'Gift Parcel Shipping'
                    : 'Your Wonder Bag'}
                </h2>
                <p className="text-[10px] font-bold text-[#FBBF24]">
                  {items.reduce((s, i) => s + i.quantity, 0)} Assorted Curations
                </p>
              </div>
            </div>
            <button
              onClick={handleCloseAndReset}
              className="p-1.5 rounded-xl bg-white text-[#1E1B2E] border-2 border-[#1E1B2E] hover:bg-gray-100 transition-colors shadow-[2px_2px_0px_0px_#1E1B2E] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {step === 'bag' && (
              <div className="space-y-4">
                {items.length === 0 ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center text-gray-400 space-y-3">
                    <Gift className="w-12 h-12 text-gray-300" />
                    <p className="text-base font-bold text-gray-600">Your bag has room for wonders.</p>
                    <p className="text-xs text-gray-400">Add candles, incense burners, washi journals, or brass oddities.</p>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-[#8B5CF6] text-white text-xs font-black uppercase tracking-wider rounded-xl border-2 border-[#1E1B2E] shadow-[2px_2px_0px_0px_#1E1B2E] cursor-pointer"
                    >
                      Explore Wonders
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 p-3 bg-white border-2 border-[#1E1B2E] rounded-2xl shadow-[3px_3px_0px_0px_#1E1B2E]"
                      >
                        <img
                          src={item.item.images[0]}
                          alt={item.item.name}
                          className="w-16 h-16 rounded-xl object-cover border border-gray-200"
                        />
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs font-black text-[#1E1B2E] truncate">
                              {item.item.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {item.selectedColor && (
                            <p className="text-[10px] text-gray-500 font-mono">
                              Color: {item.selectedColor}
                            </p>
                          )}
                          {item.includeSurpriseGiftWrap && (
                            <p className="text-[10px] text-[#8B5CF6] font-bold">
                              + Washi Gift Wrapping ($6)
                            </p>
                          )}

                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-[#FFFDF5]">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-0.5 text-xs font-bold hover:bg-gray-200 cursor-pointer"
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-bold text-[#1E1B2E]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-0.5 text-xs font-bold hover:bg-gray-200 cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-black text-xs text-[#1E1B2E]">
                              ${(item.item.price + (item.includeSurpriseGiftWrap ? 6 : 0)) * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {step === 'shipping' && (
              <form id="sandra-shipping-form" onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
                <div className="p-3 bg-[#FEF08A] border-2 border-[#1E1B2E] rounded-2xl shadow-[2px_2px_0px_0px_#1E1B2E]">
                  <div className="flex justify-between font-black text-[#1E1B2E] mb-1">
                    <span>Wonder Bag Total ({items.length} items):</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-gray-700 font-medium">
                    Hand-wrapped in artisanal washi paper with dried botanical sprigs and surprise stickers.
                  </p>
                </div>

                <div className="space-y-3 bg-white p-4 border-2 border-[#1E1B2E] rounded-2xl shadow-[3px_3px_0px_0px_#1E1B2E]">
                  <span className="text-[11px] font-black text-[#1E1B2E] uppercase tracking-wider block">
                    Recipient &amp; Delivery Info
                  </span>

                  <div>
                    <label className="text-[10px] text-gray-700 uppercase font-bold block mb-1">Recipient Full Name</label>
                    <input
                      type="text"
                      required
                      value={shippingData.fullName}
                      onChange={(e) => setShippingData({ ...shippingData, fullName: e.target.value })}
                      className="w-full p-2.5 bg-[#FFFDF5] border-2 border-[#1E1B2E] rounded-xl text-gray-900 focus:outline-none focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-700 uppercase font-bold block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={shippingData.email}
                        onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                        className="w-full p-2.5 bg-[#FFFDF5] border-2 border-[#1E1B2E] rounded-xl text-gray-900 focus:outline-none focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-700 uppercase font-bold block mb-1">Mobile Phone</label>
                      <input
                        type="tel"
                        required
                        value={shippingData.phone}
                        onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                        className="w-full p-2.5 bg-[#FFFDF5] border-2 border-[#1E1B2E] rounded-xl text-gray-900 focus:outline-none focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-700 uppercase font-bold block mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={shippingData.address}
                      onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                      className="w-full p-2.5 bg-[#FFFDF5] border-2 border-[#1E1B2E] rounded-xl text-gray-900 focus:outline-none focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-700 uppercase font-bold block mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={shippingData.city}
                        onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                        className="w-full p-2.5 bg-[#FFFDF5] border-2 border-[#1E1B2E] rounded-xl text-gray-900 focus:outline-none focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-700 uppercase font-bold block mb-1">State</label>
                      <input
                        type="text"
                        required
                        value={shippingData.state}
                        onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })}
                        className="w-full p-2.5 bg-[#FFFDF5] border-2 border-[#1E1B2E] rounded-xl text-gray-900 focus:outline-none focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-700 uppercase font-bold block mb-1">Postal Code</label>
                      <input
                        type="text"
                        required
                        value={shippingData.postalCode}
                        onChange={(e) => setShippingData({ ...shippingData, postalCode: e.target.value })}
                        className="w-full p-2.5 bg-[#FFFDF5] border-2 border-[#1E1B2E] rounded-xl text-gray-900 focus:outline-none focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-700 uppercase font-bold block mb-1">Handwritten Card Message</label>
                    <textarea
                      rows={2}
                      value={shippingData.giftCardMessage}
                      onChange={(e) => setShippingData({ ...shippingData, giftCardMessage: e.target.value })}
                      className="w-full p-2.5 bg-[#FFFDF5] border-2 border-[#1E1B2E] rounded-xl text-gray-900 focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('bag')}
                    className="text-xs text-gray-600 hover:text-black font-black uppercase cursor-pointer"
                  >
                    Back to Bag
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-black text-xs uppercase tracking-wider rounded-2xl border-2 border-[#1E1B2E] shadow-[3px_3px_0px_0px_#1E1B2E] flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-[#FDE047]" />
                    <span>Send Wonder Parcel • ${grandTotal.toFixed(2)}</span>
                  </button>
                </div>
              </form>
            )}

            {step === 'confirmed' && (
              <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-3xl bg-[#FB923C] text-[#1E1B2E] flex items-center justify-center mx-auto border-2 border-[#1E1B2E] shadow-[4px_4px_0px_0px_#1E1B2E]">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#8B5CF6] font-black uppercase tracking-widest block">
                    Dispatched with Warmth
                  </span>
                  <h3 className="text-xl font-black text-[#1E1B2E]">
                    Yay, {shippingData.fullName}!
                  </h3>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                    Sandra and team are wrapping your assorted finds in washi paper with botanical sprigs and surprise stickers. Receipt sent to <strong>{shippingData.email}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-white border-2 border-[#1E1B2E] rounded-2xl text-left text-xs space-y-2.5 shadow-[3px_3px_0px_0px_#1E1B2E]">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-bold">Wonder Parcel Code:</span>
                    <span className="font-mono font-black text-[#8B5CF6]">{wonderCode}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-bold">Delivery Address:</span>
                    <span className="font-bold text-[#1E1B2E]">{shippingData.address}, {shippingData.city}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-bold">Gift Wrap:</span>
                    <span className="text-[#8B5CF6] font-bold">Custom Washi Paper &amp; Sprigs</span>
                  </div>
                  <div className="flex justify-between pt-1 font-black text-sm text-[#1E1B2E]">
                    <span>Total Amount Charged:</span>
                    <span className="text-[#8B5CF6]">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-4 py-2.5 bg-white border-2 border-[#1E1B2E] hover:bg-gray-50 text-[#1E1B2E] rounded-xl text-xs font-black uppercase flex items-center gap-2 cursor-pointer shadow-[2px_2px_0px_0px_#1E1B2E]"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Gift Receipt</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseAndReset}
                    className="px-5 py-2.5 bg-[#8B5CF6] text-white font-black text-xs uppercase tracking-wider rounded-xl border-2 border-[#1E1B2E] shadow-[2px_2px_0px_0px_#1E1B2E] cursor-pointer"
                  >
                    Return to Wonder Shop
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer in bag step */}
          {step === 'bag' && items.length > 0 && (
            <div className="p-5 bg-white border-t-2 border-[#1E1B2E] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600 font-bold">
                  <span>Curations Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-bold">
                  <span>Delight Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-emerald-600 font-black">FREE (Orders &gt;$50)</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between font-black text-sm text-[#1E1B2E] pt-2 border-t border-gray-200">
                  <span>Grand Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => setStep('shipping')}
                className="w-full py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-black text-xs uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 border-2 border-[#1E1B2E] shadow-[4px_4px_0px_0px_#1E1B2E] transition-all cursor-pointer"
              >
                <span>Checkout Wonder Bag • ${grandTotal.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-bold pt-1">
                <Smile className="w-3.5 h-3.5 text-[#FB923C]" />
                <span>100% Happiness &amp; Joy Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

