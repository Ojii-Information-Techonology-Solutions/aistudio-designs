import { Dress } from './types';

export const CHARLENE_DRESSES: Dress[] = [
  {
    id: 'charlene-01',
    name: 'The Ethereal Backless Silk Column Gown',
    subtitle: 'Pure Mulberry Silk Charmeuse • Hand-Rolled Hem',
    price: 1250,
    originalPrice: 1450,
    category: 'Gowns',
    silhouette: 'Column',
    occasion: 'Gala & Black Tie',
    fabric: '100% Mulberry Silk',
    colors: [
      { name: 'Champagne Pearl', hex: '#EADBCE' },
      { name: 'Midnight Onyx', hex: '#181615' },
      { name: 'Bordeaux Noir', hex: '#4A1521' }
    ],
    sizes: ['US 0 (XS)', 'US 2 (S)', 'US 4 (S)', 'US 6 (M)', 'US 8 (M)', 'US 10 (L)', 'Custom Tailored'],
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An iconic silhouette defined by fluid lines and an architectural low back. Cut on the bias from heavyweight 30-momme Mulberry silk charmeuse that gently cascades with an effortless liquid drape.',
    story: 'Designed in our Paris atelier on Rue Saint-Honoré, this gown takes inspiration from 1930s Parisian salon evenings where ease of movement merged with uncompromising luxury.',
    craftsmanship: [
      'Individually bias-cut by master tailors in Lyon',
      'French seam finishing with 100% silk thread',
      'Weighted hem inserts for sculptural silhouette drape',
      'Concealed French silk covered side zip'
    ],
    specs: {
      length: 'Floor length (61 in / 155 cm from shoulder)',
      lining: 'Double-lined bodice in 100% silk habotai',
      closure: 'Concealed side zipper with hook-and-eye',
      care: 'Dry clean only with specialist luxury silk cleaner',
      origin: 'Crafted by hand in Paris, France'
    },
    modelStats: {
      height: '5\'10" (178 cm)',
      bustWaistHips: '33" - 24" - 35"',
      wearingSize: 'US 2 (S)'
    },
    inStock: true,
    isMadeToOrder: false,
    isFeatured: true,
    isBestseller: true,
    rating: 4.95,
    reviewCount: 42
  },
  {
    id: 'charlene-02',
    name: 'The L’Ombre Sculpted Silk Velvet Robe Gown',
    subtitle: 'Deep Lyon Velvet • Hand-Pleated Bodice',
    price: 1680,
    category: 'Gowns',
    silhouette: 'A-Line',
    occasion: 'Gala & Black Tie',
    fabric: 'Silk Velvet',
    colors: [
      { name: 'Nocturne Black', hex: '#111111' },
      { name: 'Emerald Imperial', hex: '#133527' },
      { name: 'Ruby Deep', hex: '#58111A' }
    ],
    sizes: ['US 0 (XS)', 'US 2 (S)', 'US 4 (S)', 'US 6 (M)', 'US 8 (M)', 'Custom Tailored'],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Sumptuous French silk-blend velvet with a subtle luminous sheen. Structured internal corset with soft boning supports an off-the-shoulder neckline, cascading into a sweeping A-line skirt.',
    story: 'Conceived for winter galas and historic opera houses, this piece captures the interplay of candlelight across hand-brushed velvet.',
    craftsmanship: [
      'Hand-molded silk-satin internal corset',
      'French silk velvet sourced from heritage mills in Lyon',
      'Invisible reinforcement along the off-shoulder neckline'
    ],
    specs: {
      length: 'Floor length with subtle 12-inch puddle train',
      lining: '100% Cupro breathable lining',
      closure: 'Hand-covered velvet buttons over concealed back zipper',
      care: 'Specialist dry clean only; steam gently from reverse',
      origin: 'Handmade in Lyon, France'
    },
    modelStats: {
      height: '5\'11" (180 cm)',
      bustWaistHips: '34" - 25" - 36"',
      wearingSize: 'US 4 (S)'
    },
    inStock: true,
    isMadeToOrder: true,
    leadTimeWeeks: 3,
    isFeatured: true,
    isNewArrival: true,
    rating: 5.0,
    reviewCount: 19
  },
  {
    id: 'charlene-03',
    name: 'The Riviera Bias Slip Dress in Golden Sand',
    subtitle: 'Effortless 22-Momme Sandwashed Silk',
    price: 680,
    originalPrice: 780,
    category: 'Silk Slips',
    silhouette: 'Slip',
    occasion: 'Cocktail Soirée',
    fabric: '100% Mulberry Silk',
    colors: [
      { name: 'Golden Sand', hex: '#D4AF37' },
      { name: 'Oyster Ivory', hex: '#F4F0EA' },
      { name: 'Sage Celadon', hex: '#8A9A86' }
    ],
    sizes: ['US 0 (XS)', 'US 2 (S)', 'US 4 (S)', 'US 6 (M)', 'US 8 (M)', 'US 10 (L)', 'US 12 (XL)'],
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'The quintessential minimalist luxury slip. Featuring delicate adjustable spaghetti straps, a soft cowl neckline, and a subtle side slit for unconstrained elegance.',
    story: 'Inspired by lazy afternoons on the French Riviera, transitioning seamlessly from terrace lunches to candlelit coastal dining.',
    craftsmanship: [
      'Sandwashed silk finish for a suede-like soft touch',
      'Precision diagonal bias cut preventing puckering',
      'Double layered neckline for clean lines'
    ],
    specs: {
      length: 'Midi length (48 in / 122 cm from shoulder)',
      lining: 'Unlined for maximum breathability and drape',
      closure: 'Slip-on style with bias natural stretch',
      care: 'Hand wash cold with silk detergent or dry clean',
      origin: 'Paris, France'
    },
    modelStats: {
      height: '5\'9" (175 cm)',
      bustWaistHips: '32" - 24" - 34"',
      wearingSize: 'US 2 (S)'
    },
    inStock: true,
    isMadeToOrder: false,
    isBestseller: true,
    rating: 4.88,
    reviewCount: 64
  },
  {
    id: 'charlene-04',
    name: 'The Celestia Chantilly Lace Couture Gown',
    subtitle: 'Hand-Appliquéd French Lace • Illusion Neckline',
    price: 2450,
    category: 'Couture',
    silhouette: 'Mermaid',
    occasion: 'Red Carpet',
    fabric: 'French Lace',
    colors: [
      { name: 'Ivory Chantilly', hex: '#FFFBF5' },
      { name: 'Noir Mystique', hex: '#1C1A19' }
    ],
    sizes: ['US 0 (XS)', 'US 2 (S)', 'US 4 (S)', 'US 6 (M)', 'Custom Tailored'],
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An exceptional haute couture masterpiece featuring delicate Chantilly lace sourced from Caudry, painstakingly hand-placed and embroidered with micro-beads onto sheer silk tulle.',
    story: 'Requires over 85 hours of dedicated hand embroidery by our senior Parisian couturiers.',
    craftsmanship: [
      'Caudry French Chantilly lace with floral motifs',
      'Individual glass micro-beads applied by hand',
      'Hand-stitched silk organza base'
    ],
    specs: {
      length: 'Floor length with 20-inch chapel train',
      lining: 'Silk georgette inner slip',
      closure: 'Fabric-covered loop buttons extending down the spine',
      care: 'Haute couture archival dry clean only',
      origin: 'Paris Atelier, France'
    },
    modelStats: {
      height: '5\'11" (180 cm)',
      bustWaistHips: '34" - 24" - 35"',
      wearingSize: 'US 2 (S)'
    },
    inStock: false,
    isMadeToOrder: true,
    leadTimeWeeks: 6,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 8
  },
  {
    id: 'charlene-05',
    name: 'The Belladonna Duchess Satin Cocktail Mini',
    subtitle: 'Architectural Pleats • Structured Basque Waist',
    price: 890,
    category: 'Cocktail',
    silhouette: 'A-Line',
    occasion: 'Cocktail Soirée',
    fabric: 'Duchess Satin',
    colors: [
      { name: 'Rouge Scarlet', hex: '#800B1B' },
      { name: 'Onyx Black', hex: '#111111' },
      { name: 'Pearl Blush', hex: '#F0DCD8' }
    ],
    sizes: ['US 0 (XS)', 'US 2 (S)', 'US 4 (S)', 'US 6 (M)', 'US 8 (M)', 'US 10 (L)'],
    images: [
      'https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Crisp, structured Italian Duchess silk-satin shaped into a contemporary sculptural mini dress. The angular basque waist and knife pleats create dynamic architectural volume.',
    story: 'A playful tribute to classic 1950s haute couture tailoring reimagined for modern evening galas.',
    craftsmanship: [
      'Double-bonded Italian duchess satin for crisp structure',
      'Horsehair reinforced hem for lasting sculptural flare',
      'Discreet in-seam pockets'
    ],
    specs: {
      length: 'Mini length (34 in / 86 cm from shoulder)',
      lining: '100% Silk Habotai lining',
      closure: 'Exposed luxury gold-tone back zip',
      care: 'Dry clean only',
      origin: 'Florence & Paris'
    },
    modelStats: {
      height: '5\'10" (178 cm)',
      bustWaistHips: '33" - 24" - 35"',
      wearingSize: 'US 2 (S)'
    },
    inStock: true,
    isMadeToOrder: false,
    isNewArrival: true,
    rating: 4.92,
    reviewCount: 31
  },
  {
    id: 'charlene-06',
    name: 'The Vendôme Bridal Silk Organza Ballgown',
    subtitle: 'Tiered Floating Organza • Sweetheart Corsetry',
    price: 3400,
    category: 'Bridal',
    silhouette: 'Ballgown',
    occasion: 'Bridal & Reception',
    fabric: 'Silk Chiffon',
    colors: [
      { name: 'Pure Alabaster', hex: '#FDFBF7' },
      { name: 'Soft Champagne', hex: '#F2E8DC' }
    ],
    sizes: ['US 0 (XS)', 'US 2 (S)', 'US 4 (S)', 'US 6 (M)', 'US 8 (M)', 'Custom Tailored'],
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An otherworldly bridal gown featuring 40 meters of lightweight silk organza layered in undulating tiers, floating atop an internal French silk couturier corset.',
    story: 'Created for grand ceremonies, combining monumental visual presence with surprising featherlight comfort.',
    craftsmanship: [
      'Hand-draped sweetheart bodice with internal bone structuring',
      'Over 40 meters of French silk organza cut on circular flounces',
      'Custom cathedral veil matching available upon request'
    ],
    specs: {
      length: 'Cathedral length with 36-inch dramatic train',
      lining: 'Triple silk lining for absolute opacity and comfort',
      closure: 'Traditional corset lacing beneath covered buttons',
      care: 'Specialist bridal preservation cleaning',
      origin: 'Paris Atelier, France'
    },
    modelStats: {
      height: '5\'10" (178 cm)',
      bustWaistHips: '33" - 24" - 35"',
      wearingSize: 'US 2 (S)'
    },
    inStock: false,
    isMadeToOrder: true,
    leadTimeWeeks: 8,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 14
  }
];
