import React, { useState } from 'react';
import { ClarissaCartItem } from '../types';
import {
  X,
  Trash2,
  UtensilsCrossed,
  ShieldCheck,
  Wine,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  CreditCard,
  Printer,
  CheckCircle2,
  Gift
} from 'lucide-react';

interface ClarissaCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ClarissaCartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const ClarissaCartDrawer: React.FC<ClarissaCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'cart' | 'shipping' | 'confirmed'>('cart');
  const [orderRef, setOrderRef] = useState('');
  const [shippingData, setShippingData] = useState({
    fullName: 'Lady Genevieve Sterling',
    email: 'genevieve.sterling@clarissatable.com',
    phone: '+1 (555) 781-9920',
    address: '450 Sutton Place, Penthouse 18',
    city: 'New York',
    state: 'NY',
    postalCode: '10022',
    giftMessage: 'With deepest appreciation for the magnificent banquet.'
  });

  const subtotal = items.reduce((sum, item) => {
    let price = item.product.price;
    if (item.includeBespokeGiftBox) price += 18;
    if (item.engravedMonogram) price += 25;
    return sum + price * item.quantity;
  }, 0);

  const shipping = subtotal >= 200 || subtotal === 0 ? 0 : 25;
  const grandTotal = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `CLARISSA-ATELIER-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(code);
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
        <div className="w-screen max-w-lg bg-[#FAF8F5] border-l border-[#EBE5DC] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 bg-[#161B26] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#2A303C] flex items-center justify-center text-[#CBA153]">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-base font-bold">
                  {step === 'confirmed'
                    ? 'Order Entrusted to the Atelier'
                    : step === 'shipping'
                    ? 'White-Glove Courier & Dispatch'
                    : 'Arts de la Table Canteen'}
                </h2>
                <p className="text-[10px] font-mono text-[#CBA153]">
                  {items.reduce((s, i) => s + i.quantity, 0)} Curated Services Selected
                </p>
              </div>
            </div>
            <button
              onClick={handleCloseAndReset}
              className="p-1.5 rounded-lg bg-[#2A303C] hover:bg-[#373F4E] text-white transition-colors cursor-pointer"
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
                    <UtensilsCrossed className="w-12 h-12 text-[#EBE5DC]" />
                    <p className="font-serif text-base text-gray-600">Your table setting is waiting.</p>
                    <p className="text-xs text-gray-400">Add Limoges porcelain, crystal goblets, or forged cutlery.</p>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-[#161B26] text-[#CBA153] text-xs font-serif font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                    >
                      Browse Tableware
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 p-3 bg-white border border-[#EBE5DC] rounded-2xl shadow-xs"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif text-xs font-bold text-[#161B26] truncate">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {item.selectedGlaze && (
                            <p className="text-[10px] text-gray-500 font-mono">
                              Finish: {item.selectedGlaze}
                            </p>
                          )}
                          {item.includeBespokeGiftBox && (
                            <p className="text-[10px] text-[#CBA153] font-mono">
                              + Velvet Canteen ($18)
                            </p>
                          )}
                          {item.engravedMonogram && (
                            <p className="text-[10px] text-[#161B26] font-mono">
                              + Monogram: [{item.engravedMonogram}] ($25)
                            </p>
                          )}

                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center border border-[#EBE5DC] bg-[#FAF8F5] rounded-lg overflow-hidden">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-0.5 text-xs hover:bg-gray-200 cursor-pointer"
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-serif font-bold text-[#161B26]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-0.5 text-xs hover:bg-gray-200 cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-serif font-bold text-xs text-[#161B26]">
                              ${(item.product.price + (item.includeBespokeGiftBox ? 18 : 0) + (item.engravedMonogram ? 25 : 0)) * item.quantity}
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
              <form id="clarissa-shipping-form" onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
                <div className="p-3 bg-white border border-[#EBE5DC] rounded-xl font-serif">
                  <div className="flex justify-between font-bold text-[#161B26] mb-1">
                    <span>Order Total ({items.length} items):</span>
                    <span className="text-[#CBA153]">${grandTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 font-sans">
                    Includes break-proof custom fitted packaging and insured courier transport.
                  </p>
                </div>

                <div className="space-y-3 bg-white p-4 border border-[#EBE5DC] rounded-2xl">
                  <span className="text-[11px] font-serif font-bold text-[#161B26] uppercase tracking-wider block">
                    White-Glove Courier Address
                  </span>

                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">Recipient Full Name</label>
                    <input
                      type="text"
                      required
                      value={shippingData.fullName}
                      onChange={(e) => setShippingData({ ...shippingData, fullName: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-[#EBE5DC] rounded-xl text-gray-900 focus:outline-none focus:border-[#CBA153]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={shippingData.email}
                        onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-[#EBE5DC] rounded-xl text-gray-900 focus:outline-none focus:border-[#CBA153]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={shippingData.phone}
                        onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-[#EBE5DC] rounded-xl text-gray-900 focus:outline-none focus:border-[#CBA153]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">Delivery Street Address</label>
                    <input
                      type="text"
                      required
                      value={shippingData.address}
                      onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-[#EBE5DC] rounded-xl text-gray-900 focus:outline-none focus:border-[#CBA153]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={shippingData.city}
                        onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-[#EBE5DC] rounded-xl text-gray-900 focus:outline-none focus:border-[#CBA153]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">State</label>
                      <input
                        type="text"
                        required
                        value={shippingData.state}
                        onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-[#EBE5DC] rounded-xl text-gray-900 focus:outline-none focus:border-[#CBA153]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">Postal Code</label>
                      <input
                        type="text"
                        required
                        value={shippingData.postalCode}
                        onChange={(e) => setShippingData({ ...shippingData, postalCode: e.target.value })}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-[#EBE5DC] rounded-xl text-gray-900 focus:outline-none focus:border-[#CBA153]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">Banquet / Gift Inscription</label>
                    <textarea
                      rows={2}
                      value={shippingData.giftMessage}
                      onChange={(e) => setShippingData({ ...shippingData, giftMessage: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-[#EBE5DC] rounded-xl text-gray-900 focus:outline-none focus:border-[#CBA153]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="text-xs text-gray-500 hover:text-black font-serif font-bold uppercase cursor-pointer"
                  >
                    Back to Canteen
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#161B26] hover:bg-[#CBA153] hover:text-black text-white font-serif font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-colors"
                  >
                    <CreditCard className="w-4 h-4 text-[#CBA153]" />
                    <span>Authorize Atelier Order • ${grandTotal.toFixed(2)}</span>
                  </button>
                </div>
              </form>
            )}

            {step === 'confirmed' && (
              <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#161B26] text-[#CBA153] flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#CBA153] font-serif font-bold uppercase tracking-widest block">
                    Order Entrusted
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#161B26]">
                    Thank you, {shippingData.fullName}
                  </h3>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                    Your tableware pieces are being individually inspected under studio light, wrapped in archival tissue, and placed in velvet-lined canteens. Confirmation dispatched to <strong>{shippingData.email}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#EBE5DC] rounded-2xl text-left text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-[#EBE5DC] pb-2 font-serif">
                    <span className="text-gray-500">Atelier Reference:</span>
                    <span className="font-mono font-bold text-[#161B26]">{orderRef}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EBE5DC] pb-2">
                    <span className="text-gray-500">Shipping To:</span>
                    <span className="font-bold text-[#161B26]">{shippingData.address}, {shippingData.city}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EBE5DC] pb-2">
                    <span className="text-gray-500">Logistics Tier:</span>
                    <span className="text-[#CBA153] font-bold">Insured White-Glove Courier</span>
                  </div>
                  <div className="flex justify-between pt-1 font-serif font-bold text-sm text-[#161B26]">
                    <span>Total Amount Charged:</span>
                    <span className="text-[#CBA153]">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-4 py-2.5 bg-white border border-[#EBE5DC] hover:bg-[#FAF8F5] text-gray-800 rounded-xl text-xs font-serif font-bold uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Invoice</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseAndReset}
                    className="px-5 py-2.5 bg-[#161B26] text-[#CBA153] font-serif font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Return to Collection
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer in cart step */}
          {step === 'cart' && items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#EBE5DC] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600 font-serif">
                  <span>Service Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-serif">
                  <span>Insulated Freight Courier</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-[#CBA153] font-bold">COMPLIMENTARY (&gt;$200)</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between font-serif font-bold text-sm text-[#161B26] pt-2 border-t border-[#EBE5DC]">
                  <span>Grand Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => setStep('shipping')}
                className="w-full py-3.5 bg-[#161B26] hover:bg-[#CBA153] hover:text-black text-white font-serif font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <span>Proceed To Secure Checkout • ${grandTotal.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-serif pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#CBA153]" />
                <span>Breakage-Proof Transit &amp; 10-Year Guild Warranty</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

