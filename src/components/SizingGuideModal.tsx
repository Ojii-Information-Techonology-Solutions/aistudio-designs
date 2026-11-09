import React, { useState } from 'react';
import { X, Ruler, Sparkles, CheckCircle2, Info } from 'lucide-react';

interface SizingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizingGuideModal: React.FC<SizingGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [bust, setBust] = useState<number>(34);
  const [waist, setWaist] = useState<number>(26);
  const [hips, setHips] = useState<number>(37);

  // International size table
  const sizeTable = [
    { us: 'US 0 (XS)', uk: 'UK 4', fr: 'FR 32', it: 'IT 36', bustIn: '31.5 - 32.5', waistIn: '23.5 - 24.5', hipsIn: '34.5 - 35.5', bustCm: '80 - 83', waistCm: '60 - 62', hipsCm: '88 - 90' },
    { us: 'US 2 (S)', uk: 'UK 6', fr: 'FR 34', it: 'IT 38', bustIn: '32.5 - 33.5', waistIn: '24.5 - 25.5', hipsIn: '35.5 - 36.5', bustCm: '83 - 85', waistCm: '62 - 65', hipsCm: '90 - 93' },
    { us: 'US 4 (S/M)', uk: 'UK 8', fr: 'FR 36', it: 'IT 40', bustIn: '33.5 - 35.0', waistIn: '25.5 - 27.0', hipsIn: '36.5 - 38.0', bustCm: '85 - 89', waistCm: '65 - 69', hipsCm: '93 - 97' },
    { us: 'US 6 (M)', uk: 'UK 10', fr: 'FR 38', it: 'IT 42', bustIn: '35.0 - 36.5', waistIn: '27.0 - 28.5', hipsIn: '38.0 - 39.5', bustCm: '89 - 93', waistCm: '69 - 73', hipsCm: '97 - 101' },
    { us: 'US 8 (L)', uk: 'UK 12', fr: 'FR 40', it: 'IT 44', bustIn: '36.5 - 38.0', waistIn: '28.5 - 30.5', hipsIn: '39.5 - 41.5', bustCm: '93 - 97', waistCm: '73 - 78', hipsCm: '101 - 106' },
    { us: 'US 10 (XL)', uk: 'UK 14', fr: 'FR 42', it: 'IT 46', bustIn: '38.0 - 40.0', waistIn: '30.5 - 32.5', hipsIn: '41.5 - 43.5', bustCm: '97 - 102', waistCm: '78 - 83', hipsCm: '106 - 111' },
  ];

  // Calculate recommended size
  const calculateSize = () => {
    const bustInches = unit === 'cm' ? bust / 2.54 : bust;
    const waistInches = unit === 'cm' ? waist / 2.54 : waist;

    if (waistInches <= 24.5) return { size: 'US 0 (XS)', fr: 'FR 32', note: 'Petite contour, slim waist alignment' };
    if (waistInches <= 25.8) return { size: 'US 2 (S)', fr: 'FR 34', note: 'Standard runway proportion, fluid bias drape' };
    if (waistInches <= 27.5) return { size: 'US 4 (S/M)', fr: 'FR 36', note: 'Tailored fit at ribcage with graceful contour' };
    if (waistInches <= 29.0) return { size: 'US 6 (M)', fr: 'FR 38', note: 'Comfortable balance through bust and waist' };
    if (waistInches <= 31.0) return { size: 'US 8 (L)', fr: 'FR 40', note: 'Sculpted fit with supportive corsetry flexibility' };
    return { size: 'US 10 (XL)', fr: 'FR 42', note: 'Generous contour with room for bespoke atelier hemming' };
  };

  const recommendation = calculateSize();

  return (
    <div
      id="sizing-guide-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="sizing-guide-modal-container"
        className="relative bg-[#FDFCFB] w-full max-w-3xl border border-[#E5E1DA] p-6 sm:p-10 my-auto max-h-[90vh] overflow-y-auto text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-sizing-guide-btn"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 border border-[#E5E1DA] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] transition-colors"
          aria-label="Close sizing guide"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 text-[#C5A059] mb-2">
          <Ruler className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-medium">
            Maison Sizing & Fit Concierge
          </span>
        </div>

        <h2 id="sizing-guide-title" className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight">
          Size Guide & Fit Calculator
        </h2>
        <p className="text-xs text-gray-600 mt-2 font-sans leading-relaxed">
          Our evening dresses and silk gowns are patterned according to traditional French haute couture sizing standards.
        </p>

        {/* Interactive Fit Calculator Card */}
        <div className="mt-6 p-6 bg-[#F2F0ED] border border-[#E5E1DA] space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">
                Calculate Your Exact Atelier Size
              </h3>
            </div>

            <div className="flex border border-[#E5E1DA] bg-white">
              <button
                id="unit-inches-btn"
                onClick={() => setUnit('in')}
                className={`px-3 py-1 text-xs font-sans uppercase tracking-wider transition-colors ${
                  unit === 'in' ? 'bg-[#1A1A1A] text-white' : 'text-gray-600 hover:bg-[#F2F0ED]'
                }`}
              >
                Inches (in)
              </button>
              <button
                id="unit-cm-btn"
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 text-xs font-sans uppercase tracking-wider transition-colors ${
                  unit === 'cm' ? 'bg-[#1A1A1A] text-white' : 'text-gray-600 hover:bg-[#F2F0ED]'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 font-sans">
            <div>
              <label className="text-xs text-[#1A1A1A] font-medium block mb-1.5">
                Bust: {bust} {unit}
              </label>
              <input
                id="calc-bust-slider"
                type="range"
                min={unit === 'in' ? 30 : 76}
                max={unit === 'in' ? 44 : 112}
                value={bust}
                onChange={(e) => setBust(Number(e.target.value))}
                className="w-full accent-[#1A1A1A] cursor-pointer"
              />
              <span className="text-[10px] text-gray-500">Around fullest part of bust</span>
            </div>

            <div>
              <label className="text-xs text-[#1A1A1A] font-medium block mb-1.5">
                Waist: {waist} {unit}
              </label>
              <input
                id="calc-waist-slider"
                type="range"
                min={unit === 'in' ? 22 : 56}
                max={unit === 'in' ? 36 : 92}
                value={waist}
                onChange={(e) => setWaist(Number(e.target.value))}
                className="w-full accent-[#1A1A1A] cursor-pointer"
              />
              <span className="text-[10px] text-gray-500">Narrowest natural waist point</span>
            </div>

            <div>
              <label className="text-xs text-[#1A1A1A] font-medium block mb-1.5">
                Hips: {hips} {unit}
              </label>
              <input
                id="calc-hips-slider"
                type="range"
                min={unit === 'in' ? 32 : 82}
                max={unit === 'in' ? 48 : 122}
                value={hips}
                onChange={(e) => setHips(Number(e.target.value))}
                className="w-full accent-[#1A1A1A] cursor-pointer"
              />
              <span className="text-[10px] text-gray-500">Around fullest part of hips</span>
            </div>
          </div>

          {/* Calculator Result Banner */}
          <div className="p-4 bg-white border border-[#E5E1DA] flex items-center justify-between font-sans">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#165834]" />
              <div>
                <p className="text-xs font-sans text-[#1A1A1A]">
                  Recommended Atelier Fit: <strong className="font-semibold">{recommendation.size}</strong> ({recommendation.fr})
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">{recommendation.note}</p>
              </div>
            </div>
          </div>
        </div>

        {/* International Conversion Matrix Table */}
        <div className="mt-8 font-sans">
          <h3 className="font-serif text-xl font-light text-[#1A1A1A] mb-3">
            Haute Couture Size Matrix
          </h3>
          <div className="overflow-x-auto border border-[#E5E1DA]">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#F2F0ED] text-[#1A1A1A] border-b border-[#E5E1DA] uppercase text-[10px] tracking-widest font-normal">
                <tr>
                  <th className="py-3 px-4">US Size</th>
                  <th className="py-3 px-4">UK</th>
                  <th className="py-3 px-4">France</th>
                  <th className="py-3 px-4">Italy</th>
                  <th className="py-3 px-4">Bust ({unit})</th>
                  <th className="py-3 px-4">Waist ({unit})</th>
                  <th className="py-3 px-4">Hips ({unit})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E1DA] bg-[#FDFCFB]">
                {sizeTable.map((row) => (
                  <tr
                    key={row.us}
                    className={`hover:bg-[#F2F0ED] transition-colors ${
                      recommendation.size === row.us ? 'bg-[#F2F0ED] font-semibold text-[#1A1A1A]' : 'text-gray-600'
                    }`}
                  >
                    <td className="py-2.5 px-4 font-medium text-[#1A1A1A]">{row.us}</td>
                    <td className="py-2.5 px-4">{row.uk}</td>
                    <td className="py-2.5 px-4">{row.fr}</td>
                    <td className="py-2.5 px-4">{row.it}</td>
                    <td className="py-2.5 px-4">{unit === 'in' ? row.bustIn : row.bustCm}</td>
                    <td className="py-2.5 px-4">{unit === 'in' ? row.waistIn : row.waistCm}</td>
                    <td className="py-2.5 px-4">{unit === 'in' ? row.hipsIn : row.hipsCm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hemming and In-Between Size Tip */}
        <div className="mt-6 flex items-start gap-3 p-4 bg-[#F2F0ED] border border-[#E5E1DA] text-xs text-gray-600 font-sans leading-relaxed">
          <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#1A1A1A]">In Between Sizes?</strong> For bias-cut silk slip dresses, we recommend sizing down for a closer drape, or sizing up if you prefer a looser fluid silhouette. Our master seamstresses provide complimentary custom hemming on all gowns.
          </p>
        </div>
      </div>
    </div>
  );
};
