import React from 'react';
import { X, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { Dress } from '../types';

interface CharleneLookbookProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDress: (dressId: string) => void;
}

export const CharleneLookbook: React.FC<CharleneLookbookProps> = ({
  isOpen,
  onClose,
  onSelectDress
}) => {
  if (!isOpen) return null;

  const LOOKBOOK_ITEMS = [
    {
      title: 'Automne au Grand Palais',
      location: 'Paris VIII • 18:30',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
      caption: 'The Ethereal Backless Silk Column Gown under crystal chandeliers.',
      dressId: 'charlene-01'
    },
    {
      title: 'Nocturne à l’Opéra Garnier',
      location: 'Place de l’Opéra • 21:00',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85',
      caption: 'The L’Ombre Sculpted Silk Velvet Robe capturing midnight shadows.',
      dressId: 'charlene-02'
    },
    {
      title: 'Soirée à Saint-Tropez',
      location: 'Cap Camarat • 19:45',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85',
      caption: 'The Riviera Bias Slip Dress floating on coastal Mediterranean breeze.',
      dressId: 'charlene-03'
    },
    {
      title: 'Haute Nuit de Venise',
      location: 'Grand Canal • 23:15',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85',
      caption: 'The Celestia Chantilly Lace Couture Gown reflecting historical palazzo lights.',
      dressId: 'charlene-04'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
      <div className="relative bg-[#FDFCFB] w-full max-w-5xl border border-[#E5E1DA] my-auto max-h-[92vh] overflow-y-auto p-6 sm:p-12 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-[#F2F0ED] hover:bg-[#181615] hover:text-white transition-colors border border-[#E5E1DA]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] font-sans font-medium text-[#C5A059]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Editorial Photography Series</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181615] uppercase font-light tracking-[0.15em]">
            Charlène Paris Lookbook
          </h2>
          <p className="text-xs text-gray-500 font-sans max-w-lg mx-auto">
            A visual retrospective exploring Parisian architectural light and tactile silk drapes across Europe’s most revered evening salons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOOKBOOK_ITEMS.map((item, idx) => (
            <div key={idx} className="group flex flex-col space-y-3">
              <div className="relative aspect-[4/5] bg-[#F2F0ED] border border-[#E5E1DA] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[9px] uppercase tracking-[0.2em] font-sans px-2.5 py-1">
                  {item.location}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-lg text-[#181615] font-normal">{item.title}</h3>
                <p className="text-xs text-gray-600 font-sans font-light">{item.caption}</p>
                <button
                  onClick={() => {
                    onSelectDress(item.dressId);
                    onClose();
                  }}
                  className="pt-2 text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-[#C5A059] hover:text-[#181615] flex items-center gap-1.5 transition-colors"
                >
                  <span>Inspect Gown Detail</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
