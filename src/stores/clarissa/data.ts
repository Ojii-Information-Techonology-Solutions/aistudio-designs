import { ClarissaProduct } from './types';

export const CLARISSA_PRODUCTS: ClarissaProduct[] = [
  {
    id: 'plate-01',
    name: 'Aurelia Rimmed Porcelain Dinner Plates (Set of 4)',
    frenchTitle: 'Assiettes de Table Porcelaine Aurelia',
    tagline: 'Hand-painted 24k gold filigree rim on translucent Limoges porcelain.',
    price: 160,
    originalPrice: 195,
    category: 'Dinnerware & Plates',
    material: 'Fine Limoges White Porcelain',
    origin: 'Limoges, France',
    piecesPerSet: 4,
    dishWasherSafe: true,
    description: 'Elegantly proportioned with a wide raised lip and subtle rim ribbing. Fired at 1400°C for exceptional chip resistance and luminous translucency.',
    specifications: {
      diameter: '10.75 inches (27.3 cm)',
      finish: 'High-Gloss Vitrified Glaze with 24k Gold Accents',
      weightPerPiece: '620 grams'
    },
    details: [
      'Authentic French kaolin clay formulation',
      'Stain-resistant scratch-proof surface glaze',
      'Oven-safe up to 250°C and microwave compatible'
    ],
    images: [
      'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.95,
    reviewCount: 118,
    isBestseller: true,
    colorGlazeOptions: [
      { name: 'Chantilly Pearl White', hex: '#FAF9F6' },
      { name: 'Onyx Mineral Matte', hex: '#232528' },
      { name: 'Celadon Sage Glaze', hex: '#8FA392' }
    ]
  },
  {
    id: 'glass-01',
    name: 'St. Germain Lead-Free Crystal Wine Goblets (Set of 6)',
    frenchTitle: 'Verres à Vin en Cristal Soufflé St. Germain',
    tagline: 'Hand-blown ultra-thin pulled stems for grand cru bouquet aeration.',
    price: 135,
    category: 'Crystal Glassware & Goblets',
    material: 'Barium-Titanium Lead-Free Ultra-Clear Crystal',
    origin: 'Kavalier Glassworks, Bohemia',
    piecesPerSet: 6,
    dishWasherSafe: true,
    description: 'Master glassblowers draw each seamless stem directly from the molten bowl. The laser-cut, fire-polished 0.8mm rim delivers wine effortlessly across the palate.',
    specifications: {
      capacity: '580 ml (19.6 oz)',
      finish: 'Optical Fire-Polished Brilliance',
      weightPerPiece: '145 grams (Featherlight balance)'
    },
    details: [
      'Resonant crystalline acoustic ring',
      'Wide aeration bowl tailored for Bordeaux, Cabernet, and Pinot Noir',
      'Reinforced stem junction for commercial durability'
    ],
    images: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 84,
    isBestseller: true
  },
  {
    id: 'cutlery-01',
    name: 'Verona Forged 18/10 Cutlery Service (24-Piece Set)',
    frenchTitle: 'Ménagère 24 Pièces Forgée Verona',
    tagline: 'Heavy gauge hot-forged stainless steel with mirror-satin dual finish.',
    price: 220,
    originalPrice: 260,
    category: 'Forged Cutlery & Silverware',
    material: '18/10 Surgical Grade Stainless Steel',
    origin: 'Solingen, Germany',
    piecesPerSet: 24,
    dishWasherSafe: true,
    description: 'Balanced with heft in hand. Includes 6 dinner forks, 6 serrated dinner knives, 6 soup spoons, and 6 dessert teaspoons in a presentation case.',
    specifications: {
      finish: 'Matte Champagne Gold or Mirror Polished Chrome',
      weightPerPiece: '85 grams (Dinner Knife: 110g)'
    },
    details: [
      'Hot forged from single ingot steel for lifetime rigidity',
      'Micro-serrated high-carbon blade cuts through steak effortlessly',
      'Includes wood-lined velvet storage canteen'
    ],
    images: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 5.0,
    reviewCount: 92,
    isBestseller: true,
    colorGlazeOptions: [
      { name: 'Champagne Gold PVD', hex: '#D4AF37' },
      { name: 'Mirror Silver Chrome', hex: '#E5E7EB' },
      { name: 'Brushed Charcoal PVD', hex: '#374151' }
    ]
  },
  {
    id: 'platter-01',
    name: 'Palais Fluted Oval Serving Platter (16")',
    frenchTitle: 'Grand Plat de Service Ovale Palais',
    tagline: 'Sculptural centerpiece platter for roast meats, seafood & canapés.',
    price: 95,
    category: 'Serving Platters & Bowls',
    material: 'Hand-Molded Vitrified Stoneware',
    origin: 'Porto, Portugal',
    piecesPerSet: 1,
    dishWasherSafe: true,
    description: 'Imparting Mediterranean grandeur to any banquet. The scalloped edges catch sauces naturally while offering generous plating surface.',
    specifications: {
      diameter: '16.5" Length x 11.5" Width',
      finish: 'Antiqued Chalk Glaze',
      weightPerPiece: '1.4 kg'
    },
    details: [
      'Hand-applied reactive glaze makes each piece subtly unique',
      'Thermal shock resistant from fridge directly to preheated oven',
      'Lead and cadmium free certified'
    ],
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 47,
    isNewArrival: true
  },
  {
    id: 'set-01',
    name: 'Clarissa Royal Banquet 16-Piece Tablescape Ensemble',
    frenchTitle: 'Service Complet de Table Royal Banquet',
    tagline: 'Complete 4-person setting: dinner plates, salad bowls, crystal tumblers & cutlery.',
    price: 380,
    originalPrice: 450,
    category: 'Curated Dining Sets',
    material: 'Limoges Porcelain, Bohemian Crystal & 18/10 Steel',
    origin: 'Multi-Atelier European Craft',
    piecesPerSet: 16,
    dishWasherSafe: true,
    description: 'Everything required to host an unforgettable 4-course dinner party. Harmoniously matched in texture, tone, and tactile luxury.',
    specifications: {
      finish: 'Curated Champagne & Pearl Monochrome Harmony'
    },
    details: [
      '4 Dinner Plates + 4 Pasta/Salad Bowls',
      '4 Crystal Water Goblets + 4 Four-Piece Verona Cutlery Sets',
      'Includes complimentary French linen napkin set (4x)'
    ],
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.98,
    reviewCount: 65,
    isBestseller: true
  },
  {
    id: 'glass-02',
    name: 'Biarritz Faceted Crystal Tumblers & Old Fashioned (Set of 4)',
    frenchTitle: 'Gobelets en Cristal Taillé Biarritz',
    tagline: 'Heavy base diamond-faceted crystal for whisky, cocktails & sparkling water.',
    price: 90,
    category: 'Crystal Glassware & Goblets',
    material: 'Heavyweight Bohemian Crystal',
    origin: 'Czech Republic',
    piecesPerSet: 4,
    dishWasherSafe: true,
    description: 'A tactile masterpiece with hand-cut diamond geometric facets that refract candlelight across your dining table.',
    specifications: {
      capacity: '340 ml (11.5 oz)',
      finish: 'Hand-Cut Diamond Brilliant',
      weightPerPiece: '390 grams (Solid Weighted Base)'
    },
    details: [
      'Substantial weight provides exceptional cocktail stability',
      'Laser-cut rim for clean sipping without drips',
      'Resistant to clouding over 500+ commercial wash cycles'
    ],
    images: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 53
  }
];
