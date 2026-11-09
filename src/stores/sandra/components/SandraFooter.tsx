import React from 'react';
import { Gift, Heart, Smile, Sparkles } from 'lucide-react';
import { SandraCategory } from '../types';

interface SandraFooterProps {
  onSelectCategory: (cat: SandraCategory) => void;
  onOpenMysteryBox: () => void;
  onOpenDesignKit?: () => void;
}

export const SandraFooter: React.FC<SandraFooterProps> = ({
  onSelectCategory,
  onOpenMysteryBox,
  onOpenDesignKit
}) => {
  return (
    <footer className="bg-[#1E1B2E] text-white font-sans pt-16 pb-12 border-t-2 border-[#1E1B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-700">
          {/* Col 1 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#8B5CF6] flex items-center justify-center text-white border-2 border-white">
                <Gift className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                SANDRA
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              An independent studio dedicated to the tactile beauty of assorted wonders, slow mornings, wabi-sabi clay, and sensory desk delights.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#FBBF24] font-bold">
              <Heart className="w-4 h-4 fill-current" />
              <span>Small-Batch Artisan Sourced &amp; Carbon Neutral Shipping</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FBBF24] font-bold">
              Assorted Goods
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onSelectCategory('Handmade Ceramics & Trinkets')}
                  className="hover:text-white transition-colors"
                >
                  Ceramics &amp; Incense
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Artisan Candles & Scents')}
                  className="hover:text-white transition-colors"
                >
                  Wood Wick Soy Candles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Japanese Paper & Stationery')}
                  className="hover:text-white transition-colors"
                >
                  Washi Paper Journals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Playful Desk Oddities')}
                  className="hover:text-white transition-colors"
                >
                  Brass Desk Companions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FBBF24] font-bold">
              Studio Fun
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={onOpenMysteryBox}
                  className="text-[#FB923C] hover:underline font-bold"
                >
                  Curate Mystery Box ($75)
                </button>
              </li>
              {onOpenDesignKit && (
                <li>
                  <button
                    onClick={onOpenDesignKit}
                    className="hover:text-white transition-colors"
                  >
                    Sandra Design Kit
                  </button>
                </li>
              )}
              <li>
                <span className="text-gray-400">Gift Subscriptions</span>
              </li>
              <li>
                <span className="text-gray-400">Custom Washi Wrapping</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FBBF24] font-bold">
              Wonder Dispatch
            </h4>
            <p className="text-xs text-gray-300">
              Bi-weekly notes with studio playlists, newly discovered makers, and drop dates.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="hello@wonder.com"
                className="w-full px-3 py-2 bg-[#2D2942] border border-gray-600 rounded-xl text-xs text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button className="px-3 py-2 bg-[#8B5CF6] text-white font-bold text-xs rounded-xl hover:bg-[#7C3AED]">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <span>&copy; {new Date().getFullYear()} Sandra Assorted Objects Studio. Handcrafted joy.</span>
          <span className="flex items-center gap-1">
            Made with <Smile className="w-4 h-4 text-[#FBBF24]" /> for curious humans.
          </span>
        </div>
      </div>
    </footer>
  );
};
