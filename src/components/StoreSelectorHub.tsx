import React from 'react';
import {
  Sparkles,
  Wrench,
  Palmtree,
  Palette,
  Coffee,
  Watch,
  Flame,
  ArrowRight,
  Layers,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Compass
} from 'lucide-react';

export interface StoreArchetype {
  id: string;
  name: string;
  industry: string;
  tagline: string;
  layoutStyle: string;
  themeColors: {
    bg: string;
    text: string;
    accent: string;
    badge: string;
  };
  keyFeatures: string[];
  image: string;
  stats: string;
  isReady: boolean;
}

export const STORE_ARCHETYPES: StoreArchetype[] = [
  {
    id: 'charlene',
    name: 'Charlène Paris',
    industry: 'Haute Couture & Evening Gowns',
    tagline: 'Pure 100% Mulberry silk drapes, bespoke tailoring, and Parisian editorial aesthetic.',
    layoutStyle: 'High-Fashion Editorial • Neutral Cream & Champagne • Serif Typography',
    themeColors: {
      bg: '#FDFCFB',
      text: '#181615',
      accent: '#C5A059',
      badge: 'bg-[#181615] text-[#FAF6F0]'
    },
    keyFeatures: [
      'Bespoke heel-height hemming customizer',
      'Atelier bust/waist/hip sizing converter',
      'Silk colorway swatches & bias-cut descriptions',
      'Paris editorial lookbook gallery series',
      'AI Atelier Occasion Stylist'
    ],
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
    stats: '6 Couture Silhouettes • $680–$3,400',
    isReady: true
  },
  {
    id: 'tomas',
    name: 'Tomas Heavy Machinery',
    industry: 'Heavy Industrial Plant & Equipment Rental',
    tagline: 'Tier-1 commercial excavators, wheel loaders, bulldozers, and high-reach boom lifts.',
    layoutStyle: 'Rugged Industrial • Carbon Slate & Amber Safety Yellow • Monospace Telemetry',
    themeColors: {
      bg: '#0F1115',
      text: '#ECEFF4',
      accent: '#F59E0B',
      badge: 'bg-[#F59E0B] text-black'
    },
    keyFeatures: [
      'Live rental duration rate calculator (Days/Weeks/Months)',
      'Certified OSHA plant operator add-on (+$480/day)',
      'Work tool attachment selectors (Rock breakers, shears)',
      'Heavy haul lowboy freight dispatch estimator',
      'Side-by-side engineering spec matrix'
    ],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85',
    stats: '6 Heavy Plant Units • 13T–40T Tonnage',
    isReady: true
  },
  {
    id: 'joseph',
    name: 'Joseph Rentable Rooms',
    industry: 'Boutique Urban Stays & Lofts',
    tagline: 'High-altitude penthouses with plunge pools, artist timber lofts, and cedar study pods.',
    layoutStyle: 'Architectural Hospitality • Midnight Blue & Cognac Amber • Nightly Stays',
    themeColors: {
      bg: '#F3F4F6',
      text: '#0B132B',
      accent: '#D97706',
      badge: 'bg-[#0B132B] text-[#D97706]'
    },
    keyFeatures: [
      'Nightly & extended stay rate estimator (15% weekly / 30% monthly)',
      'Instant encrypted smart-lock keycard & PIN issuance',
      'Private chauffeur & artisan pastry breakfast add-ons',
      'Acoustic ratings, gigabit wifi speeds, and square-footage telemetry',
      'Joseph boutique architectural design system kit'
    ],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85',
    stats: '5 Curated Residences • $95–$350 / Night',
    isReady: true
  },
  {
    id: 'clarissa',
    name: 'Clarissa Fine Dining & Tablescapes',
    industry: 'Porcelain Dinnerware & Crystal Glassware',
    tagline: 'Hand-thrown Limoges porcelain, lead-free Austrian crystal stemware, and forged cutlery.',
    layoutStyle: 'Fine Dining Aristocracy • Warm Alabaster & Burgundy • Interactive Tablescape Builder',
    themeColors: {
      bg: '#FDFBF7',
      text: '#2C1810',
      accent: '#8B1E3F',
      badge: 'bg-[#8B1E3F] text-white'
    },
    keyFeatures: [
      'Interactive 5-piece tablescape visualizer & place setting builder',
      'Guest seating count customizer with instant bundle calculation',
      'Monogram engraving preview for fine forged flatware',
      'Clarissa design tokens & dining style guide'
    ],
    image: 'https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&w=1200&q=85',
    stats: '6 Luxury Tableware Sets • $65–$680',
    isReady: true
  },
  {
    id: 'plantito',
    name: 'Plantito Urban Botanical',
    industry: 'Rare Flora & Handcrafted Planters',
    tagline: 'Variegated monsteras, architectural fiddle leaf figs, and hand-thrown terracotta.',
    layoutStyle: 'Botanical Sanctuary • Deep Forest Emerald & Terracotta Clay • Pot Matcher',
    themeColors: {
      bg: '#FAF8F5',
      text: '#1C2E24',
      accent: '#C85A32',
      badge: 'bg-[#1C2E24] text-[#E8F5E9]'
    },
    keyFeatures: [
      'Botanical care telemetry (Light, watering, pet safety ratings)',
      'Custom artisan pot & planter pairing engine',
      'Repotting substrate & organic fertilizer add-ons',
      'Winter climate heat pack packing guarantee'
    ],
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=85',
    stats: '6 Rare Flora Specimens • $24–$220',
    isReady: true
  },
  {
    id: 'sandra',
    name: 'Sandra Lifestyle & Curiosities',
    industry: 'Artisan Objects, Scents & Stationery',
    tagline: 'Japanese washi paper, cast brass desk sculptures, and small-batch beeswax candles.',
    layoutStyle: 'Playful Minimalist • Warm Oatmeal & Soft Periwinkle • Mystery Bundle Box',
    themeColors: {
      bg: '#FAF9F6',
      text: '#242220',
      accent: '#5A67D8',
      badge: 'bg-[#5A67D8] text-white'
    },
    keyFeatures: [
      'Interactive 3-tier mystery surprise box builder',
      'Artisan maker origin tags and material provenance',
      'Custom gift wrap & handwritten wax-sealed notes',
      'Sandra design kit with tactile lifestyle palette'
    ],
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85',
    stats: '6 Curated Goods • $18–$115',
    isReady: true
  }
];

interface StoreSelectorHubProps {
  activeStoreId: string;
  onSelectStore: (storeId: string) => void;
}

export const StoreSelectorHub: React.FC<StoreSelectorHubProps> = ({
  activeStoreId,
  onSelectStore
}) => {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1A1A1A] font-sans">
      {/* Top Banner */}
      <header className="border-b border-[#E2DDD5] bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#181615] text-white rounded-md flex items-center justify-center font-serif text-lg font-bold">
              WS
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-[#181615]">
                Industry Webshop Architecture Hub
              </h1>
              <p className="text-xs text-gray-500 font-sans">
                Dedicated modular storefront engines tailored specifically to each industry
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-[#EFECE6] px-3 py-1.5 rounded-full font-mono text-gray-700 font-medium">
              Active Experience: <strong>{activeStoreId.toUpperCase()}</strong>
            </span>
          </div>
        </div>
      </header>

      {/* Main Hub Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Intro Manifesto */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] rounded-full text-xs font-medium text-gray-700 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Dedicated Modular Folder Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#181615] tracking-tight">
            Select an Industry Design Experience
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Rather than retrofitting a single dress store into other business models, each industry now has its own dedicated directory with custom typography, domain-specific features, data models, and interactive calculators.
          </p>
        </div>

        {/* Store Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {STORE_ARCHETYPES.map((arch) => {
            const isCurrentlySelected = activeStoreId === arch.id;

            return (
              <div
                key={arch.id}
                className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-300 flex flex-col justify-between ${
                  isCurrentlySelected
                    ? 'border-[#181615] ring-2 ring-[#181615]/20 shadow-xl'
                    : 'border-[#E2DDD5] hover:border-gray-400 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Visual Preview */}
                  <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden group">
                    <img
                      src={arch.image}
                      alt={arch.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${arch.themeColors.badge}`}>
                        {arch.industry}
                      </span>
                    </div>

                    {isCurrentlySelected && (
                      <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Currently Active</span>
                      </div>
                    )}

                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-xs">
                      {arch.stats}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-serif text-[#181615] font-normal">
                          {arch.name}
                        </h3>
                        <span className="text-xs font-mono text-gray-500 bg-[#F4F1EA] px-2 py-0.5 rounded-xs">
                          /src/stores/{arch.id}/
                        </span>
                      </div>
                      <p className="text-xs text-[#C5A059] font-medium mt-0.5">
                        {arch.layoutStyle}
                      </p>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        {arch.tagline}
                      </p>
                    </div>

                    {/* Distinctive Features */}
                    <div className="space-y-2 pt-2 border-t border-[#EAE6DF]">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Bespoke Industry Features:
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-gray-700">
                        {arch.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#181615] mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Launch Button */}
                <div className="p-6 pt-0 sm:p-8 sm:pt-0">
                  <button
                    onClick={() => onSelectStore(arch.id)}
                    className={`w-full py-4 rounded-lg font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm ${
                      isCurrentlySelected
                        ? 'bg-[#181615] text-white hover:bg-black'
                        : 'bg-[#F2EFE9] text-[#181615] hover:bg-[#181615] hover:text-white'
                    }`}
                  >
                    <span>Launch {arch.name} Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Directory Blueprint Explainer */}
        <div className="bg-white border border-[#E2DDD5] rounded-xl p-8 space-y-4">
          <h3 className="text-lg font-bold text-[#181615] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#C5A059]" />
            <span>Folder Architecture Blueprint</span>
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed max-w-3xl">
            Every store experience is fully decoupled into its own isolated module under <code>src/stores/&lt;store-name&gt;/</code>. They share no confusing retrofitted types or ugly cross-domain UI wrappers:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 font-mono text-xs text-gray-800">
            <div className="p-4 bg-[#F7F5F0] border border-[#E2DDD5] rounded-lg space-y-1">
              <strong className="text-[#181615] block font-bold">src/stores/charlene/ (Haute Couture)</strong>
              <p className="text-gray-500 text-[11px]">types.ts, data.ts, CharleneStore.tsx</p>
              <p className="text-gray-500 text-[11px]">components/ (CharleneDesignKit, CharleneNavbar, CharleneHero, CharleneDressCard, CharleneDressModal, CharleneFilter, CharleneLookbook, CharleneCartDrawer, CharleneFooter)</p>
            </div>

            <div className="p-4 bg-[#14171E] border border-[#2F3542] rounded-lg space-y-1 text-gray-200">
              <strong className="text-[#F59E0B] block font-bold">src/stores/tomas/ (Heavy Machinery Hire)</strong>
              <p className="text-gray-400 text-[11px]">types.ts, data.ts, TomasStore.tsx</p>
              <p className="text-gray-400 text-[11px]">components/ (TomasDesignKit, TomasNavbar, TomasHero, TomasFleetFilter, TomasMachineryCard, TomasMachineryModal, TomasRentalCartModal, TomasFleetSpecsTable, TomasDispatchModal, TomasFooter)</p>
            </div>

            <div className="p-4 bg-[#0B132B] border border-[#1C2541] rounded-lg space-y-1 text-gray-200">
              <strong className="text-[#D97706] block font-bold">src/stores/joseph/ (Rentable Rooms &amp; Suites)</strong>
              <p className="text-gray-400 text-[11px]">types.ts, data.ts, JosephStore.tsx</p>
              <p className="text-gray-400 text-[11px]">components/ (JosephDesignKit, JosephNavbar, JosephHero, JosephFilter, JosephRoomCard, JosephRoomModal, JosephBookingDrawer, JosephStayEstimator, JosephFooter)</p>
            </div>

            <div className="p-4 bg-[#FDFBF7] border border-[#E2DDD5] rounded-lg space-y-1 text-gray-800">
              <strong className="text-[#8B1E3F] block font-bold">src/stores/clarissa/ (Fine Dining &amp; Tablescapes)</strong>
              <p className="text-gray-500 text-[11px]">types.ts, data.ts, ClarissaStore.tsx</p>
              <p className="text-gray-500 text-[11px]">components/ (ClarissaDesignKit, ClarissaNavbar, ClarissaHero, ClarissaFilter, ClarissaTablewareCard, ClarissaProductModal, ClarissaCartDrawer, ClarissaTablescapeBuilder, ClarissaFooter)</p>
            </div>

            <div className="p-4 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg space-y-1 text-gray-800">
              <strong className="text-[#1C2E24] block font-bold">src/stores/plantito/ (Urban Botanical &amp; Flora)</strong>
              <p className="text-gray-500 text-[11px]">types.ts, data.ts, PlantitoStore.tsx</p>
              <p className="text-gray-500 text-[11px]">components/ (PlantitoDesignKit, PlantitoNavbar, PlantitoHero, PlantitoFilter, PlantitoProductCard, PlantitoProductModal, PlantitoCartDrawer, PlantitoPotPairingTool, PlantitoFooter)</p>
            </div>

            <div className="p-4 bg-[#FAF9F6] border border-[#E2DDD5] rounded-lg space-y-1 text-gray-800">
              <strong className="text-[#5A67D8] block font-bold">src/stores/sandra/ (Lifestyle &amp; Curiosities)</strong>
              <p className="text-gray-500 text-[11px]">types.ts, data.ts, SandraStore.tsx</p>
              <p className="text-gray-500 text-[11px]">components/ (SandraDesignKit, SandraNavbar, SandraHero, SandraFilter, SandraItemCard, SandraProductModal, SandraCartDrawer, SandraSurpriseBundleModal, SandraFooter)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
