import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Check, Layers } from 'lucide-react';
import { StoreDefinition } from '../types/storeTypes';

interface FooterProps {
  store: StoreDefinition;
  onSelectCategory: (cat: string) => void;
  onOpenAdvisor: () => void;
  onOpenSizingGuide: () => void;
  onOpenLookbook: () => void;
  onOpenDesignKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  store,
  onSelectCategory,
  onOpenAdvisor,
  onOpenSizingGuide,
  onOpenLookbook,
  onOpenDesignKit
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setEmailInput('');
  };

  return (
    <footer id="store-footer" className="bg-[#1A1A1A] text-[#FDFCFB] border-t border-[#333] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Newsletter & Membership Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-10 border-b border-[#333]">
          <div className="lg:col-span-6 space-y-2.5">
            <span
              className="text-[9px] uppercase tracking-[0.35em] font-sans font-semibold block"
              style={{ color: store.theme.primaryColor }}
            >
              {store.name} VIP Dispatch
            </span>
            <h3 id="footer-newsletter-title" className="font-serif text-2xl sm:text-3xl text-[#FDFCFB] font-light tracking-tight">
              Exclusive Inquiries & <span className="italic font-normal">Private Releases</span>
            </h3>
            <p className="text-xs text-gray-400 max-w-md font-sans font-normal leading-relaxed">
              Subscribe to receive preview catalogs, priority dispatch notices, and seasonal curation advisories for {store.name}.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-3.5 bg-[#262626] border border-[#C5A059]/40 flex items-center gap-3 text-xs text-[#FDFCFB]">
                <Check className="w-4 h-4 text-[#C5A059]" />
                <span>Merci. Your registration for {store.name} private dispatch is confirmed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  id="footer-newsletter-input"
                  type="email"
                  placeholder="Enter your professional or personal email..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-3 bg-[#262626] border border-[#444] text-xs text-[#FDFCFB] placeholder-gray-500 focus:outline-none focus:border-white font-sans"
                  required
                />
                <button
                  id="footer-newsletter-submit-btn"
                  type="submit"
                  className="px-6 py-3 bg-[#FDFCFB] hover:bg-white text-[#1A1A1A] text-[10px] uppercase tracking-[0.25em] font-sans font-semibold transition-colors flex items-center gap-2 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation & Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <span className="font-serif text-2xl tracking-[0.2em] text-[#FDFCFB] uppercase font-light">
              {store.name}
            </span>
            <p className="text-[11px] text-gray-400 leading-relaxed font-sans font-normal">
              {store.tagline}. Focused on uncompromising craftsmanship, authentic materials, and transparent logistics.
            </p>
            <div
              className="text-[10px] uppercase tracking-[0.2em] pt-1 font-sans"
              style={{ color: store.theme.primaryColor }}
            >
              Certified Storefront Architecture
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FDFCFB] font-sans">
              {store.categoryLabel}
            </p>
            <ul className="space-y-2 text-gray-400 font-sans text-[11px]">
              {Array.from(new Set(store.categories)).map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="hover:text-[#FDFCFB] transition-colors text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Services & Tools */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FDFCFB] font-sans">
              Client Concierge & Tools
            </p>
            <ul className="space-y-2 text-gray-400 font-sans text-[11px]">
              <li>
                <button onClick={onOpenAdvisor} className="hover:text-[#FDFCFB] transition-colors text-left">
                  Interactive Selection Advisor
                </button>
              </li>
              <li>
                <button onClick={onOpenSizingGuide} className="hover:text-[#FDFCFB] transition-colors text-left">
                  Specification & Sizing Guide
                </button>
              </li>
              <li>
                <button onClick={onOpenLookbook} className="hover:text-[#FDFCFB] transition-colors text-left">
                  Curated Lookbook 2026
                </button>
              </li>
              <li>
                <button
                  id="footer-design-kit-btn"
                  onClick={onOpenDesignKit}
                  className="hover:text-[#C5A059] transition-colors text-left font-medium text-[#FDFCFB] flex items-center gap-1.5"
                >
                  <Layers className="w-3 h-3 text-[#C5A059]" />
                  <span>Design Kit & UI Component System</span>
                </button>
              </li>
              <li>
                <span className="text-gray-500">Insured Dispatch & Tracking</span>
              </li>
            </ul>
          </div>

          {/* Standards & Guarantee */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FDFCFB] font-sans">
              Quality Assurance
            </p>
            <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
              Every catalog item is rigorously tested, certified for quality, and backed by comprehensive guarantees.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-emerald-400 pt-1 uppercase tracking-wider font-sans">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Authenticity Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#333] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-sans">
          <p>© 2026 {store.name}. All concept rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Commercial Terms</span>
            <span>Security Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
