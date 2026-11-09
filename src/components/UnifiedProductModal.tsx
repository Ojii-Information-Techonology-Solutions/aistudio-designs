import React, { useState } from 'react';
import { StoreProduct, StoreDefinition, UnifiedCartItem } from '../types/storeTypes';
import { CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';
import {
  X,
  Star,
  ShieldCheck,
  Truck,
  Heart,
  Calendar,
  Users,
  MapPin,
  Check,
  Wrench,
  Sparkles,
  Info,
  ChevronRight,
  Clock,
  Award
} from 'lucide-react';

interface UnifiedProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: StoreProduct | null;
  store: StoreDefinition;
  currency: CurrencyCode;
  isWishlisted: boolean;
  onToggleWishlist: (product: StoreProduct) => void;
  onAddToCart: (item: UnifiedCartItem) => void;
  onOpenSizingGuide?: () => void;
}

export const UnifiedProductModal: React.FC<UnifiedProductModalProps> = ({
  isOpen,
  onClose,
  product,
  store,
  currency,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onOpenSizingGuide
}) => {
  if (!isOpen || !product) return null;

  // Generic selected option
  const [selectedOptionId, setSelectedOptionId] = useState<string>(
    product.options[0]?.id || ''
  );
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || undefined
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Specialized states: Room Rentals / Airbnb
  const [checkInDate, setCheckInDate] = useState('2026-09-12');
  const [checkOutDate, setCheckOutDate] = useState('2026-09-16');
  const [guestsCount, setGuestsCount] = useState<number>(2);

  // Specialized states: Machinery Rentals
  const [rentalDays, setRentalDays] = useState<number>(3);
  const [includeOperator, setIncludeOperator] = useState<boolean>(false);
  const [includeDamageWaiver, setIncludeDamageWaiver] = useState<boolean>(true);
  const [siteAddress, setSiteAddress] = useState<string>('742 Evergreen Site, Sector 4');

  // Specialized states: Art
  const [selectedFraming, setSelectedFraming] = useState<string>('Unframed Gallery Wrap');

  const isStay = store.businessModel === 'booking-stay';
  const isRental = store.businessModel === 'rental-equipment';
  const isMachinerySales = store.businessModel === 'industrial-sales';
  const isArt = store.businessModel === 'art-gallery';

  // Calculate pricing based on options and specialized domain models
  const selectedOptionObj = product.options.find((o) => o.id === selectedOptionId);
  const optionModifier = selectedOptionObj?.priceModifier || 0;

  // Nights calculation for stays
  const calculateNights = () => {
    const d1 = new Date(checkInDate);
    const d2 = new Date(checkOutDate);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return isNaN(diffDays) || diffDays < 1 ? 1 : diffDays;
  };

  const nights = isStay ? calculateNights() : 1;
  const cleaningFee = product.extraMeta?.cleaningFee || 0;
  const operatorFeePerDay = product.extraMeta?.operatorDailyRate || 350;
  const damageWaiverPerDay = 65;

  let calculatedTotalPrice = (product.price + optionModifier) * quantity;

  if (isStay) {
    calculatedTotalPrice = (product.price + optionModifier) * nights + cleaningFee;
  } else if (isRental) {
    const dailyBase = product.price;
    const operatorTotal = includeOperator ? operatorFeePerDay * rentalDays : 0;
    const waiverTotal = includeDamageWaiver ? damageWaiverPerDay * rentalDays : 0;
    calculatedTotalPrice = (dailyBase + optionModifier) * rentalDays + operatorTotal + waiverTotal;
  }

  const handleAction = () => {
    const cartItem: UnifiedCartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      shopId: store.id,
      productName: product.name,
      productImage: product.images[0],
      category: product.category,
      unitPrice: product.price + optionModifier,
      pricingUnit: product.pricingUnit,
      selectedOption: selectedOptionObj?.label || selectedOptionId,
      selectedColor: selectedColor,
      quantity: quantity,
      stayBooking: isStay
        ? {
            checkInDate,
            checkOutDate,
            nights,
            guests: guestsCount,
            cleaningFee,
            serviceFee: Math.round(calculatedTotalPrice * 0.08)
          }
        : undefined,
      machineryRental: isRental
        ? {
            startDate: checkInDate,
            rentalDays,
            includeOperator,
            operatorDailyRate: operatorFeePerDay,
            siteDeliveryAddress: siteAddress,
            damageWaiver: includeDamageWaiver
          }
        : undefined,
      artPurchase: isArt
        ? {
            selectedFraming,
            includeCertificate: true
          }
        : undefined
    };

    onAddToCart(cartItem);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 900);
  };

  return (
    <div
      id="unified-product-modal-root"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6"
    >
      <div
        className="relative bg-[#FDFCFB] text-[#1A1A1A] w-full max-w-5xl rounded-none shadow-2xl border border-[#E5E1DA] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-unified-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-black hover:text-white rounded-full shadow-md transition-all text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 bg-[#F5F2EC] p-4 sm:p-6 flex flex-col justify-between">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 text-white font-medium shadow-md"
                  style={{ backgroundColor: store.theme.primaryColor }}
                >
                  {product.category}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-16 shrink-0 overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-black scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Interactive Configuration & Booking Engine */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            <div>
              {/* Header Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500 font-sans uppercase tracking-[0.2em] mb-2">
                <span>{store.name} • {store.shortName}</span>
                <div className="flex items-center gap-1 text-amber-500 font-medium">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{product.rating.toFixed(1)}</span>
                  <span className="text-gray-400">({product.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-gray-500 font-sans mt-1 font-medium">
                {product.subTitle || product.tagLine}
              </p>

              {/* Price Banner */}
              <div className="mt-4 p-3.5 bg-[#F8F6F2] border border-[#EBE7DF] flex items-baseline justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-sans block">
                    {isStay ? 'Nightly Rate' : isRental ? 'Base Daily Hire' : 'Catalog Price'}
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-serif text-2xl font-medium text-[#1A1A1A]">
                      {formatPrice(product.price, currency)}
                    </span>
                    {product.pricingUnit && (
                      <span className="text-xs text-gray-500 font-sans">
                        / {product.pricingUnit}
                      </span>
                    )}
                  </div>
                </div>

                {isStay && product.extraMeta?.hostBadge && (
                  <div className="text-right">
                    <span className="text-[10px] bg-teal-800 text-white px-2 py-0.5 uppercase tracking-wider font-sans">
                      {product.extraMeta.hostBadge}
                    </span>
                    <p className="text-[11px] text-gray-500 mt-0.5 font-sans">
                      {product.extraMeta.hostName}
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-4">
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {product.description}
                </p>
              </div>

              {/* ----------------- DOMAIN-SPECIFIC CONTROLS ----------------- */}

              {/* 1. ROOM RENTAL (Airbnb) INTERACTION MODULE */}
              {isStay && (
                <div className="mt-5 p-4 border border-[#CCFBF1] bg-[#F0FDFA] space-y-4">
                  <div className="flex items-center gap-2 text-teal-900 font-semibold text-xs uppercase tracking-wider">
                    <Calendar className="w-4 h-4 text-teal-700" />
                    <span>Select Reservation Dates & Guests</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-600 tracking-wider block mb-1">
                        Check-In Date
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full bg-white border border-[#B2F5EA] text-xs p-2 rounded-none focus:outline-none focus:border-teal-700"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-600 tracking-wider block mb-1">
                        Check-Out Date
                      </label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full bg-white border border-[#B2F5EA] text-xs p-2 rounded-none focus:outline-none focus:border-teal-700"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#CCFBF1]">
                    <span className="text-xs font-medium text-teal-950 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> Number of Guests
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                        className="w-6 h-6 border border-teal-700 text-teal-900 flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold w-6 text-center">{guestsCount}</span>
                      <button
                        type="button"
                        onClick={() => setGuestsCount(Math.min(product.extraMeta?.maxGuests || 10, guestsCount + 1))}
                        className="w-6 h-6 border border-teal-700 text-teal-900 flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Stay Price Breakdown Calculation */}
                  <div className="text-[11px] text-teal-900 space-y-1 pt-2 border-t border-[#CCFBF1] font-mono">
                    <div className="flex justify-between">
                      <span>{formatPrice(product.price, currency)} × {nights} nights</span>
                      <span>{formatPrice(product.price * nights, currency)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning & Turnover Fee</span>
                      <span>{formatPrice(cleaningFee, currency)}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-1 border-t border-teal-200">
                      <span>Stay Total (Excl. Tax)</span>
                      <span>{formatPrice(calculatedTotalPrice, currency)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. HEAVY MACHINERY RENTAL INTERACTION MODULE */}
              {isRental && (
                <div className="mt-5 p-4 border border-amber-300 bg-amber-50/70 space-y-4">
                  <div className="flex items-center gap-2 text-amber-950 font-bold text-xs uppercase tracking-wider">
                    <Wrench className="w-4 h-4 text-amber-700" />
                    <span>Configure Hire Duration & Operator</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-700 tracking-wider block mb-1">
                        Hire Duration (Days)
                      </label>
                      <div className="flex items-center gap-2 bg-white border border-amber-300 p-1">
                        <button
                          type="button"
                          onClick={() => setRentalDays(Math.max(1, rentalDays - 1))}
                          className="px-2 py-0.5 bg-gray-100 font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold flex-1 text-center font-mono">{rentalDays} Days</span>
                        <button
                          type="button"
                          onClick={() => setRentalDays(rentalDays + 1)}
                          className="px-2 py-0.5 bg-gray-100 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-700 tracking-wider block mb-1">
                        Start Dispatch Date
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full bg-white border border-amber-300 text-xs p-1.5 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Operator & Insurance Toggles */}
                  <div className="space-y-2 pt-2 border-t border-amber-200">
                    <label className="flex items-center justify-between cursor-pointer text-xs text-amber-950 font-medium">
                      <span>Include Certified OSHA Operator (+${operatorFeePerDay}/day)</span>
                      <input
                        type="checkbox"
                        checked={includeOperator}
                        onChange={(e) => setIncludeOperator(e.target.checked)}
                        className="w-4 h-4 accent-amber-600"
                      />
                    </label>

                    <label className="flex items-center justify-between cursor-pointer text-xs text-amber-950 font-medium">
                      <span>Comprehensive Damage Waiver (+${damageWaiverPerDay}/day)</span>
                      <input
                        type="checkbox"
                        checked={includeDamageWaiver}
                        onChange={(e) => setIncludeDamageWaiver(e.target.checked)}
                        className="w-4 h-4 accent-amber-600"
                      />
                    </label>
                  </div>

                  {/* Delivery Location */}
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-700 tracking-wider block mb-1">
                      Job Site Delivery Address
                    </label>
                    <input
                      type="text"
                      value={siteAddress}
                      onChange={(e) => setSiteAddress(e.target.value)}
                      placeholder="Enter construction site address / ZIP"
                      className="w-full bg-white border border-amber-300 text-xs p-1.5"
                    />
                  </div>
                </div>
              )}

              {/* 3. STANDARD PRODUCT OPTIONS (Sizes, Sets, Finishes, Specs) */}
              {product.options.length > 0 && (
                <div className="mt-5 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-gray-700 block">
                    {product.optionsLabel || 'Select Option / Specification'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.options.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedOptionId(opt.id)}
                        className={`p-2.5 text-left border text-xs font-sans transition-all flex items-center justify-between ${
                          selectedOptionId === opt.id
                            ? 'border-black bg-[#1A1A1A] text-white font-medium'
                            : 'border-[#E5E1DA] bg-white text-gray-800 hover:border-gray-400'
                        }`}
                      >
                        <span className="line-clamp-1">{opt.label}</span>
                        {opt.priceModifier ? (
                          <span className="font-mono text-[11px] opacity-80 shrink-0 ml-1">
                            {opt.priceModifier > 0 ? `+${formatPrice(opt.priceModifier, currency)}` : formatPrice(opt.priceModifier, currency)}
                          </span>
                        ) : null}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. COLORWAYS / FINISHES */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-4 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-gray-700 block">
                    Select Material / Finish: <span className="font-normal text-gray-500">{selectedColor?.label}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`w-7 h-7 rounded-full border-2 transition-transform ${
                          selectedColor?.name === c.name ? 'border-black scale-110' : 'border-transparent hover:scale-105'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.label}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications Table */}
              {Object.keys(product.specifications).length > 0 && (
                <div className="mt-5 pt-4 border-t border-[#E5E1DA]">
                  <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-gray-500 block mb-2">
                    Technical Specifications & Craft
                  </span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-sans">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-gray-400 text-[10px] uppercase tracking-wider">{key}</span>
                        <span className="text-[#1A1A1A] font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Banner */}
            <div className="mt-6 pt-4 border-t border-[#E5E1DA] space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity for physical items */}
                {!isStay && (
                  <div className="flex items-center border border-[#1A1A1A] bg-white h-12">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 text-sm hover:bg-gray-100 h-full font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-bold font-mono">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 text-sm hover:bg-gray-100 h-full font-bold"
                    >
                      +
                    </button>
                  </div>
                )}

                {/* Main CTA Button */}
                <button
                  id="confirm-unified-cart-action-btn"
                  onClick={handleAction}
                  disabled={addedAnimation}
                  className="flex-1 h-12 bg-[#1A1A1A] hover:bg-black text-[#FDFCFB] font-sans text-xs font-medium uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-2 shadow-lg disabled:bg-emerald-700"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>{isStay ? 'Stay Reserved!' : isRental ? 'Rental Booked!' : 'Added to Bag!'}</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {isStay
                          ? `Reserve Stay • ${formatPrice(calculatedTotalPrice, currency)}`
                          : isRental
                          ? `Book Machinery Hire • ${formatPrice(calculatedTotalPrice, currency)}`
                          : isMachinerySales
                          ? `Request Order Spec • ${formatPrice(calculatedTotalPrice, currency)}`
                          : isArt
                          ? `Acquire Artwork • ${formatPrice(calculatedTotalPrice, currency)}`
                          : `Add to Bag • ${formatPrice(calculatedTotalPrice, currency)}`}
                      </span>
                    </>
                  )}
                </button>

                {/* Wishlist Icon */}
                <button
                  id="modal-toggle-wishlist-btn"
                  onClick={() => onToggleWishlist(product)}
                  className={`w-12 h-12 border flex items-center justify-center transition-colors ${
                    isWishlisted
                      ? 'border-[#E07A5F] bg-[#E07A5F] text-white'
                      : 'border-[#1A1A1A] text-gray-700 hover:bg-gray-100'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Assurance strip */}
              <div className="flex items-center justify-between text-[10px] text-gray-500 font-sans uppercase tracking-wider pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gray-700" /> Verified Authenticity
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-gray-700" /> Secure Insured Transit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
