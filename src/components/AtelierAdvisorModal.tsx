import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, Heart, ShoppingBag, Eye } from 'lucide-react';
import { DressProduct, CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';

interface AtelierAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  allDresses: DressProduct[];
  onSelectDress: (dress: DressProduct) => void;
  currency: CurrencyCode;
}

export const AtelierAdvisorModal: React.FC<AtelierAdvisorModalProps> = ({
  isOpen,
  onClose,
  allDresses,
  onSelectDress,
  currency
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedOccasion, setSelectedOccasion] = useState<string>('Gala & Red Carpet');
  const [selectedVibe, setSelectedVibe] = useState<string>('fluid');
  const [selectedPalette, setSelectedPalette] = useState<string>('champagne');

  const handleReset = () => {
    setStep(1);
    setSelectedOccasion('Gala & Red Carpet');
    setSelectedVibe('fluid');
    setSelectedPalette('champagne');
  };

  // Find best match algorithm based on choices
  const getMatchedDress = (): { dress: DressProduct; stylingAdvice: any } => {
    let matched = allDresses[0];

    if (selectedVibe === 'velvet' || selectedOccasion === 'Romantic Opera Night') {
      matched = allDresses.find((d) => d.id === 'aura-02') || allDresses[0];
    } else if (selectedVibe === 'pleats' || selectedOccasion === 'Summer Soirée') {
      matched = allDresses.find((d) => d.id === 'aura-03') || allDresses[0];
    } else if (selectedVibe === 'sculptural' || selectedPalette === 'noir') {
      matched = allDresses.find((d) => d.id === 'aura-04') || allDresses.find((d) => d.id === 'aura-08') || allDresses[0];
    } else if (selectedOccasion === 'Cocktail Party') {
      matched = allDresses.find((d) => d.id === 'aura-05') || allDresses[0];
    } else if (selectedOccasion === 'Black-Tie Wedding' && selectedPalette === 'ivory') {
      matched = allDresses.find((d) => d.id === 'aura-07') || allDresses.find((d) => d.id === 'aura-04') || allDresses[0];
    } else {
      matched = allDresses.find((d) => d.id === 'aura-01') || allDresses[0];
    }

    const adviceMap: Record<string, any> = {
      'aura-01': {
        earrings: 'Delicate freshwater baroque drop earrings in 18k yellow gold',
        shoes: 'Barely-there 85mm strappy silk metallic sandals',
        hair: 'Swept-up French twist or side-swept waves to reveal the deep cowl back',
        bag: 'Vintage satin minaudière or brushed gold box clutch'
      },
      'aura-02': {
        earrings: 'Statement emerald or diamond cluster studs',
        shoes: 'Pointed-toe velvet stilettos with crystal buckle',
        hair: 'Sleek center-part chignon at the nape of the neck',
        bag: 'Structured black lacquer hard-shell clutch'
      },
      'aura-03': {
        earrings: 'Hammered gold architectural hoops or cuffs',
        shoes: 'Ankle-wrap metallic leather block heels',
        hair: 'Voluminous textured waves with subtle golden hairpins',
        bag: 'Woven metallic mesh evening pouch'
      },
      'aura-04': {
        earrings: 'Single pearl ear-cuff to complement the back pearl drapery',
        shoes: 'Classic d’Orsay silk pumps with 90mm heel',
        hair: 'High architectural bun to showcase the illusion boatneck and back plunge',
        bag: 'Sculptural mother-of-pearl clutch'
      },
      'aura-05': {
        earrings: 'Chandelier crystal drop earrings',
        shoes: 'Slingback satin kitten heels or bold 100mm platform pumps',
        hair: 'Soft retro Hollywood brushed-out waves',
        bag: 'Beaded micro tote with delicate chain strap'
      },
      'aura-06': {
        earrings: 'Bold gold ear cuffs (avoid necklaces to let the halter breathe)',
        shoes: 'Metallic gold open-toe stiletto heels',
        hair: 'Wet-look sleek combed-back hair or effortless high ponytail',
        bag: 'Molten gold sculptural sphere clutch'
      },
      'aura-07': {
        earrings: 'Art Deco diamond heirloom drop earrings',
        shoes: 'Custom silk ivory pumps with concealed platform comfort',
        hair: 'Romantic royal bridal updo with hand-sewn lace pins',
        bag: 'Embroidered silk heirloom keepsake envelope'
      },
      'aura-08': {
        earrings: 'Modernist geometric gold huggies',
        shoes: 'Sharp patent leather pointed-toe pumps',
        hair: 'Ultra-clean glass hair bob or sleek ponytail',
        bag: 'Architectural prism brass clutch'
      }
    };

    return {
      dress: matched,
      stylingAdvice: adviceMap[matched.id] || adviceMap['aura-01']
    };
  };

  const { dress: matchedDress, stylingAdvice } = getMatchedDress();

  return (
    <div
      id="advisor-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="advisor-modal-container"
        className="relative bg-[#FDFCFB] w-full max-w-3xl border border-[#E5E1DA] p-6 sm:p-10 my-auto max-h-[90vh] overflow-y-auto text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-advisor-modal-btn"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 border border-[#E5E1DA] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] transition-colors"
          aria-label="Close stylist"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-[#C5A059] mb-2">
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-medium">
            Maison Concierge & Virtual Stylist
          </span>
        </div>

        <h2 id="advisor-modal-title" className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight">
          Find Your Couture Silhouette
        </h2>
        <p className="text-xs text-gray-600 mt-2 font-sans leading-relaxed">
          Answer 3 quick questions about your upcoming soirée, and our atelier styling engine will recommend the ultimate dress and accessory pairing.
        </p>

        {/* Step Progress */}
        <div className="flex items-center justify-between my-6 border-b border-[#E5E1DA] pb-4 text-xs font-sans">
          {[
            { num: 1, label: '1. The Occasion' },
            { num: 2, label: '2. Silhouette Mood' },
            { num: 3, label: '3. Color Palette' },
            { num: 4, label: '4. Curated Match' }
          ].map((s) => (
            <div
              key={s.num}
              className={`flex items-center gap-2 ${
                step === s.num
                  ? 'text-[#1A1A1A] font-semibold'
                  : step > s.num
                  ? 'text-gray-900 font-normal'
                  : 'text-gray-400'
              }`}
            >
              <span
                className={`w-5 h-5 flex items-center justify-center text-[10px] ${
                  step === s.num
                    ? 'bg-[#1A1A1A] text-white'
                    : step > s.num
                    ? 'bg-[#E5E1DA] text-[#1A1A1A]'
                    : 'border border-[#E5E1DA] text-gray-400'
                }`}
              >
                {step > s.num ? '✓' : s.num}
              </span>
              <span className="hidden sm:inline uppercase tracking-wider text-[11px]">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Step 1: Occasion */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="font-serif text-xl font-light text-[#1A1A1A]">
              What event are you attending?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
              {[
                { title: 'Gala & Red Carpet', desc: 'High glamour, dramatic floor-length sweep, maximum prestige.' },
                { title: 'Black-Tie Wedding', desc: 'Formal elegance, respectful luxury, photogenic movement.' },
                { title: 'Cocktail Party & Soirée', desc: 'Chic knee to midi silhouettes with playful structural volume.' },
                { title: 'Romantic Opera Night', desc: 'Plush velvet, low cowl back, candlelight radiance.' },
                { title: 'Summer Soirée', desc: 'Airy pleated chiffon, effortless liquid drape in warm breezes.' }
              ].map((occ) => (
                <button
                  id={`advisor-occ-btn-${occ.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  key={occ.title}
                  onClick={() => setSelectedOccasion(occ.title)}
                  className={`p-4 border text-left transition-all ${
                    selectedOccasion === occ.title
                      ? 'border-[#1A1A1A] bg-[#F2F0ED]'
                      : 'border-[#E5E1DA] bg-[#FDFCFB] hover:border-[#1A1A1A]'
                  }`}
                >
                  <p className="font-serif text-base text-[#1A1A1A]">{occ.title}</p>
                  <p className="text-[11px] text-gray-500 mt-1 font-sans leading-relaxed">{occ.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <button
                id="advisor-step1-next-btn"
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-[#1A1A1A] text-[#FDFCFB] text-[10px] font-sans uppercase tracking-[0.25em] font-medium hover:bg-black transition-colors flex items-center gap-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Silhouette Mood */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="font-serif text-xl font-light text-[#1A1A1A]">
              Which tactile mood & silhouette calls to you?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
              {[
                { id: 'fluid', title: 'Liquid Silk & Low Cowl Back', desc: 'Sensual 22-Momme bias-cut silk that glides effortlessly over curves.' },
                { id: 'velvet', title: 'Corseted Sculptural Velvet', desc: 'Rich candlelight velvet with structured boning for regal poise.' },
                { id: 'pleats', title: 'Ethereal Accordion Plissé', desc: 'Gossamer French chiffon that blooms with every breeze and dance.' },
                { id: 'sculptural', title: 'Architectural Column & Pearls', desc: 'Clean geometric lines accented with heirloom freshwater pearls.' }
              ].map((vibe) => (
                <button
                  id={`advisor-vibe-btn-${vibe.id}`}
                  key={vibe.id}
                  onClick={() => setSelectedVibe(vibe.id)}
                  className={`p-4 border text-left transition-all ${
                    selectedVibe === vibe.id
                      ? 'border-[#1A1A1A] bg-[#F2F0ED]'
                      : 'border-[#E5E1DA] bg-[#FDFCFB] hover:border-[#1A1A1A]'
                  }`}
                >
                  <p className="font-serif text-base text-[#1A1A1A]">{vibe.title}</p>
                  <p className="text-[11px] text-gray-500 mt-1 font-sans leading-relaxed">{vibe.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex justify-between pt-4 font-sans">
              <button
                id="advisor-step2-back-btn"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs uppercase tracking-wider text-gray-600 hover:text-[#1A1A1A]"
              >
                Back
              </button>
              <button
                id="advisor-step2-next-btn"
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-[#1A1A1A] text-[#FDFCFB] text-[10px] font-sans uppercase tracking-[0.25em] font-medium hover:bg-black transition-colors flex items-center gap-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Color Palette */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="font-serif text-xl font-light text-[#1A1A1A]">
              Select your ideal evening color palette:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-sans">
              {[
                { id: 'champagne', title: 'Champagne & Gold', hex: '#EADBCE', desc: 'Luminous & Warm' },
                { id: 'noir', title: 'Obsidian Noir', hex: '#161618', desc: 'Timeless & Dramatic' },
                { id: 'jewel', title: 'Bordeaux & Emerald', hex: '#4A1521', desc: 'Rich & Regal' },
                { id: 'ivory', title: 'Alabaster Ivory', hex: '#FAF7F2', desc: 'Pure & Sculptural' }
              ].map((pal) => (
                <button
                  id={`advisor-palette-btn-${pal.id}`}
                  key={pal.id}
                  onClick={() => setSelectedPalette(pal.id)}
                  className={`p-4 border text-center transition-all ${
                    selectedPalette === pal.id
                      ? 'border-[#1A1A1A] bg-[#F2F0ED]'
                      : 'border-[#E5E1DA] bg-[#FDFCFB] hover:border-[#1A1A1A]'
                  }`}
                >
                  <div
                    className="w-7 h-7 mx-auto border border-black/20 mb-2.5"
                    style={{ backgroundColor: pal.hex }}
                  />
                  <p className="font-serif text-sm text-[#1A1A1A]">{pal.title}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wider">{pal.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex justify-between pt-4 font-sans">
              <button
                id="advisor-step3-back-btn"
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs uppercase tracking-wider text-gray-600 hover:text-[#1A1A1A]"
              >
                Back
              </button>
              <button
                id="advisor-step3-reveal-btn"
                onClick={() => setStep(4)}
                className="px-7 py-3 bg-[#1A1A1A] hover:bg-black text-[#FDFCFB] text-[10px] font-sans uppercase tracking-[0.25em] font-medium transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Reveal Couture Match</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Matched Result */}
        {step === 4 && (
          <div className="space-y-6 animate-in zoom-in-95 duration-200">
            {/* Top Match Banner */}
            <div className="p-4 bg-[#F2F0ED] border border-[#E5E1DA] flex items-center justify-between font-sans">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
                <span className="font-serif text-base font-light text-[#1A1A1A]">
                  99% Silhouette Alignment Found
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] font-sans bg-[#1A1A1A] text-[#FDFCFB] px-2.5 py-1">
                Concierge Selection
              </span>
            </div>

            {/* Matched Dress Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 aspect-3/4 overflow-hidden border border-[#E5E1DA]">
                <img
                  src={matchedDress.images[0]}
                  alt={matchedDress.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-sans block">
                    {matchedDress.category} • {matchedDress.silhouette}
                  </span>
                  <h3 className="font-serif text-3xl font-light text-[#1A1A1A] mt-1 tracking-tight">
                    {matchedDress.name}
                  </h3>
                  <p className="text-xs italic text-gray-500 font-serif">{matchedDress.frenchTitle}</p>
                  <p className="text-sm font-sans font-normal text-[#1A1A1A] mt-2">
                    {formatPrice(matchedDress.price, currency)}
                  </p>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {matchedDress.description}
                </p>

                {/* Haute Couture Complete Styling Blueprint */}
                <div className="p-4 bg-[#F2F0ED] border border-[#E5E1DA] space-y-2 text-xs font-sans">
                  <p className="font-serif text-sm font-normal text-[#1A1A1A] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Styling Blueprint:</span>
                  </p>
                  <div className="space-y-1.5 text-[11px] text-gray-600 leading-relaxed">
                    <p>✨ <strong className="text-[#1A1A1A]">Jewelry:</strong> {stylingAdvice.earrings}</p>
                    <p>👠 <strong className="text-[#1A1A1A]">Footwear:</strong> {stylingAdvice.shoes}</p>
                    <p>💄 <strong className="text-[#1A1A1A]">Hair & Makeup:</strong> {stylingAdvice.hair}</p>
                    <p>👜 <strong className="text-[#1A1A1A]">Clutch:</strong> {stylingAdvice.bag}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2 font-sans">
                  <button
                    id="advisor-view-matched-dress-btn"
                    onClick={() => {
                      onClose();
                      onSelectDress(matchedDress);
                    }}
                    className="flex-1 py-3.5 px-5 bg-[#1A1A1A] hover:bg-black text-[#FDFCFB] text-[10px] font-sans uppercase tracking-[0.25em] font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#FDFCFB]" />
                    <span>View & Custom Tailor</span>
                  </button>

                  <button
                    id="advisor-retake-quiz-btn"
                    onClick={handleReset}
                    className="px-4 py-3.5 border border-[#E5E1DA] hover:bg-[#F2F0ED] text-[#1A1A1A] text-[10px] font-sans uppercase tracking-widest transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Start Over</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
