import { SandraItem } from './types';

export const SANDRA_ITEMS: SandraItem[] = [
  {
    id: 'sandra-01',
    name: 'Wabi-Sabi Stoneware Cloud Incense Burner',
    tagline: 'Hand-pinched ceramic cloud basin catching ash like soft morning fog.',
    price: 38,
    originalPrice: 48,
    category: 'Handmade Ceramics & Trinkets',
    description: 'Each cloud burner is individually pinched from speckled ironstone clay and finished in a creamy unglazed raw texture. Includes brass incense needle.',
    makerOrigin: 'Kyoto Studio Craft',
    vibes: ['Slow Living', 'Calm Morning', 'Zen'],
    dimensions: '5.2" x 3.8" x 1.5"',
    materials: 'Speckled Ironstone Ceramic & Solid Brass Insert',
    images: [
      'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.95,
    reviewCount: 146,
    isBestseller: true,
    colorOptions: [
      { name: 'Oatmeal Speckle', hex: '#E6DFC8' },
      { name: 'Smoked Charcoal', hex: '#343837' },
      { name: 'Dusty Petal', hex: '#D6A2A8' }
    ]
  },
  {
    id: 'sandra-02',
    name: 'Hinoki Wood & Wild Fig Hand-Poured Soy Candle',
    tagline: 'Forest bathing aroma in a heavy amber glass vessel with crackling wooden wick.',
    price: 32,
    category: 'Artisan Candles & Scents',
    description: 'Clean burning non-GMO soy wax infused with pure Japanese Hinoki cypress, crushed fig leaves, and warm cedarwood. Burns clean for 55+ hours.',
    makerOrigin: 'Portland Artisan Lab',
    vibes: ['Cozy Sanctuary', 'Autumn Rain', 'Warm Ember'],
    dimensions: '8 oz Glass Jar • 55 hr burn',
    materials: '100% American Soy Wax & FSC Certified Cedar Wick',
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 210,
    isBestseller: true
  },
  {
    id: 'sandra-03',
    name: 'Solid Brass Geometric Desk Ruler & Paperweight',
    tagline: 'Heavy machined tactile brass that patinas gracefully with daily touch.',
    price: 45,
    category: 'Playful Desk Oddities',
    description: 'Precision milled from a solid billet of architectural brass. Deep etched metric and imperial markings with a chamfered ergonomic drafting edge.',
    makerOrigin: 'Tokyo Tooling Guild',
    vibes: ['Tactile Desk', 'Maker Spirit', 'Heirloom Tool'],
    dimensions: '15 cm length • 240 grams weight',
    materials: 'Solid C360 Brass (Unlacquered raw finish)',
    images: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.85,
    reviewCount: 78,
    isNewArrival: true
  },
  {
    id: 'sandra-04',
    name: 'Washi Grid Lay-Flat Journal • 180GSM',
    tagline: 'Fountain pen friendly smooth bleedproof pages with hand-bound linen spine.',
    price: 26,
    category: 'Japanese Paper & Stationery',
    description: 'Designed for thinkers and sketchers. Subtle 5mm dot-grid layout on archival fountain-pen friendly Japanese paper that opens 180 degrees completely flat.',
    makerOrigin: 'Osaka Paper Mill',
    vibes: ['Quiet Thought', 'Journaling', 'Creative Flow'],
    dimensions: 'A5 Format (148 x 210 mm) • 192 Pages',
    materials: '180 GSM Bamboo Pulp Paper & French Woven Linen Spine',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 5.0,
    reviewCount: 89,
    isBestseller: true,
    colorOptions: [
      { name: 'Sage Linen', hex: '#879782' },
      { name: 'Terra Cotta Cloth', hex: '#B86550' },
      { name: 'Midnight Indigo', hex: '#1C2541' }
    ]
  },
  {
    id: 'sandra-05',
    name: 'Amber Glass Oil Cruet & Fluted Stopper',
    tagline: 'Mouth-blown laboratory grade borosilicate for olive oils or bath oils.',
    price: 29,
    category: 'Daily Life Essentials',
    description: 'Add vintage apothecary warmth to your kitchen countertop or vanity. The precision ground fluted glass stopper prevents drips without synthetic plastics.',
    makerOrigin: 'Stockholm Glassworks',
    vibes: ['Apothecary', 'Pantry Beauty', 'Nordic Light'],
    dimensions: '350 ml Capacity • 7.5" Height',
    materials: 'Borosilicate Glass & Ground Seal Stopper',
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 62
  },
  {
    id: 'sandra-06',
    name: 'Sandra "Mystery Wonder Box" • 5 Curated Assorted Objects',
    tagline: 'A thrilling blind curation of handpicked candles, stationery, ceramics & desk joys.',
    price: 75,
    originalPrice: 110,
    category: 'Curated Home Accents',
    description: 'Our most beloved offering. Sandra herself hand-packs a whimsical collection of 5 artisan surprise goods wrapped with Japanese paper strings and wax seals.',
    makerOrigin: 'Sandra Studio Collective',
    vibes: ['Delight', 'Gift of Joy', 'Eclectic Wonder'],
    materials: 'Assorted artisan made creations',
    images: [
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 5.0,
    reviewCount: 312,
    isBestseller: true
  }
];
