import React, { useState } from 'react';
import { PlantitoCartItem } from '../types';
import {
  X,
  Trash2,
  Sprout,
  ShieldCheck,
  Truck,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  CreditCard,
  Printer,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';

interface PlantitoCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: PlantitoCartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const PlantitoCartDrawer: React.FC<PlantitoCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'cart' | 'shipping' | 'confirmed'>('cart');
  const [adoptionRef, setAdoptionRef] = useState('');
  const [shippingData, setShippingData] = useState({
    fullName: 'Maya Lin',
    email: 'maya.lin@example.com',
    phone: '+1 (555) 624-9182',
    address: '742 Evergreen Terrace, Apt 4B',
    city: 'Portland',
    state: 'OR',
    postalCode: '97201',
    deliveryInstructions: 'Leave in shaded porch area away from direct sunlight.'
  });

  const subtotal = items.reduce((sum, item) => {
    let price = item.product.price;
    if (item.includeFertilizerBooster) price += 12;
    if (item.includeSoilRepottingKit) price += 15;
    return sum + price * item.quantity;
  }, 0);

  const shipping = subtotal >= 60 || subtotal === 0 ? 0 : 9.5;
  const grandTotal = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `PLNT-ADOPT-${Math.floor(100000 + Math.random() * 900000)}`;
    setAdoptionRef(code);
    setStep('confirmed');
    onClearCart();
  };

  const handleCloseAndReset = () => {
    setStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={handleCloseAndReset} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-white border-l border-[#D5CCC1] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 bg-[#1E392A] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#284C38] flex items-center justify-center text-[#84CC16]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-base font-bold">
                  {step === 'confirmed'
                    ? 'Plant Adoption Confirmed'
                    : step === 'shipping'
                    ? 'Insulated Botanical Dispatch'
                    : 'Greenhouse Basket'}
                </h2>
                <p className="text-[10px] font-mono text-[#A3BFAB]">
                  {items.reduce((s, i) => s + i.quantity, 0)} Living Items &amp; Pottery
                </p>
              </div>
            </div>
            <button
              onClick={handleCloseAndReset}
              className="p-1.5 rounded-lg bg-[#284C38] hover:bg-[#346149] text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {step === 'cart' && (
              <div className="space-y-4">
                {items.length === 0 ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center text-gray-400 space-y-3">
                    <Sprout className="w-12 h-12 text-[#D5CCC1]" />
                    <p className="font-serif text-base text-gray-600">Your basket is currently empty.</p>
                    <p className="text-xs text-gray-400">Discover houseplants, breathable clay pots, and bio-nutrients.</p>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-[#1E392A] text-[#84CC16] text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                    >
                      Browse Nursery
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 p-3 bg-[#F4EFEA] border border-[#D5CCC1] rounded-2xl"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif text-xs font-bold text-[#1E392A] truncate">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {item.selectedPotColor && (
                            <p className="text-[10px] text-gray-500 font-mono">
                              Pot: {item.selectedPotColor}
                            </p>
                          )}
                          {item.includeFertilizerBooster && (
                            <p className="text-[10px] text-[#4A6B53] font-mono">
                              + Seaweed Elixir ($12)
                            </p>
                          )}
                          {item.includeSoilRepottingKit && (
                            <p className="text-[10px] text-[#4A6B53] font-mono">
                              + Chunky Aroid Soil ($15)
                            </p>
                          )}

                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center border border-[#D5CCC1] bg-white rounded-lg overflow-hidden">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-0.5 text-xs hover:bg-gray-100 cursor-pointer"
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-bold text-[#1E392A]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-0.5 text-xs hover:bg-gray-100 cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-serif font-bold text-xs text-[#1E392A]">
                              ${(item.product.price + (item.includeFertilizerBooster ? 12 : 0) + (item.includeSoilRepottingKit ? 15 : 0)) * item.quantity}
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
              <form id="plantito-shipping-form" onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
                <div className="p-3 bg-[#F4EFEA] border border-[#D5CCC1] rounded-xl font-serif">
                  <div className="flex justify-between font-bold text-[#1E392A] mb-1">
                    <span>Basket Total ({items.length} plants/accessories):</span>
                    <span className="text-[#1E392A] font-black">${grandTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 font-sans">
                    Includes temperature-regulated insulation, damp root wraps, and breathable plant sleeves.
                  </p>
                </div>

                <div className="space-y-3 bg-[#F4EFEA]/60 p-4 border border-[#D5CCC1] rounded-2xl">
                  <span className="text-[11px] font-bold text-[#1E392A] uppercase tracking-wider block">
                    Botanical Delivery Information
                  </span>

                  <div>
                    <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Caretaker Full Name</label>
                    <input
                      type="text"
                      required
                      value={shippingData.fullName}
                      onChange={(e) => setShippingData({ ...shippingData, fullName: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#D5CCC1] rounded-xl text-gray-900 focus:outline-none focus:border-[#1E392A]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Email (Care Guide)</label>
                      <input
                        type="email"
                        required
                        value={shippingData.email}
                        onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                        className="w-full p-2.5 bg-white border border-[#D5CCC1] rounded-xl text-gray-900 focus:outline-none focus:border-[#1E392A]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Phone (Delivery Alerts)</label>
                      <input
                        type="tel"
                        required
                        value={shippingData.phone}
                        onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                        className="w-full p-2.5 bg-white border border-[#D5CCC1] rounded-xl text-gray-900 focus:outline-none focus:border-[#1E392A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={shippingData.address}
                      onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#D5CCC1] rounded-xl text-gray-900 focus:outline-none focus:border-[#1E392A]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={shippingData.city}
                        onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                        className="w-full p-2.5 bg-white border border-[#D5CCC1] rounded-xl text-gray-900 focus:outline-none focus:border-[#1E392A]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">State</label>
                      <input
                        type="text"
                        required
                        value={shippingData.state}
                        onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })}
                        className="w-full p-2.5 bg-white border border-[#D5CCC1] rounded-xl text-gray-900 focus:outline-none focus:border-[#1E392A]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Postal Code</label>
                      <input
                        type="text"
                        required
                        value={shippingData.postalCode}
                        onChange={(e) => setShippingData({ ...shippingData, postalCode: e.target.value })}
                        className="w-full p-2.5 bg-white border border-[#D5CCC1] rounded-xl text-gray-900 focus:outline-none focus:border-[#1E392A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-600 uppercase font-bold block mb-1">Shaded Delivery Notes</label>
                    <textarea
                      rows={2}
                      value={shippingData.deliveryInstructions}
                      onChange={(e) => setShippingData({ ...shippingData, deliveryInstructions: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#D5CCC1] rounded-xl text-gray-900 focus:outline-none focus:border-[#1E392A]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="text-xs text-gray-500 hover:text-black font-bold uppercase cursor-pointer"
                  >
                    Back to Basket
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#1E392A] hover:bg-[#C86D51] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-colors"
                  >
                    <Sprout className="w-4 h-4 text-[#84CC16]" />
                    <span>Adopt &amp; Dispatch Plants • ${grandTotal.toFixed(2)}</span>
                  </button>
                </div>
              </form>
            )}

            {step === 'confirmed' && (
              <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#1E392A] text-[#84CC16] flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#4A6B53] font-bold uppercase tracking-widest block">
                    Plant Adoption Finalized
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1E392A]">
                    Welcome Home, {shippingData.fullName}
                  </h3>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                    Your plant babies are being carefully insulated in bio-degradable cocoon wraps with wet sphagnum root hydration. Care guide sent to <strong>{shippingData.email}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-[#F4EFEA] border border-[#D5CCC1] rounded-2xl text-left text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-[#D5CCC1] pb-2 font-mono">
                    <span className="text-gray-500">Adoption Number:</span>
                    <span className="font-bold text-[#1E392A]">{adoptionRef}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#D5CCC1] pb-2">
                    <span className="text-gray-500">Destination:</span>
                    <span className="font-bold text-[#1E392A]">{shippingData.address}, {shippingData.city}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#D5CCC1] pb-2">
                    <span className="text-gray-500">Guarantee Policy:</span>
                    <span className="text-[#284C38] font-bold">30-Day Healthy Leaf Promise</span>
                  </div>
                  <div className="flex justify-between pt-1 font-serif font-bold text-sm text-[#1E392A]">
                    <span>Total Charged:</span>
                    <span className="text-[#1E392A]">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-4 py-2.5 bg-white border border-[#D5CCC1] hover:bg-gray-50 text-gray-800 rounded-xl text-xs font-bold uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Care Guide</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseAndReset}
                    className="px-5 py-2.5 bg-[#1E392A] text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Return to Nursery
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer in cart step */}
          {step === 'cart' && items.length > 0 && (
            <div className="p-5 bg-[#F4EFEA] border-t border-[#D5CCC1] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Nursery Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Insulated Botanical Transit</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-[#84CC16] font-bold">FREE (Orders &gt;$60)</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#1E392A] pt-2 border-t border-[#D5CCC1]">
                  <span>Grand Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => setStep('shipping')}
                className="w-full py-3.5 bg-[#1E392A] hover:bg-[#C86D51] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <span>Proceed to Plantito Checkout • ${grandTotal.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>30-Day Guaranteed Healthy Arrival</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

