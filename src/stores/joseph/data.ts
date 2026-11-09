import { JosephRoom } from './types';

export const JOSEPH_ROOMS: JosephRoom[] = [
  {
    id: 'joseph-01',
    name: 'The Glasshouse Skyline Penthouse',
    roomType: 'Penthouse Studio',
    tagline: 'Panoramic 270-degree floor-to-ceiling city views with private rooftop plunge tub.',
    pricePerNight: 280,
    originalPricePerNight: 340,
    location: 'Downtown Arts District, Level 42',
    neighborhood: 'Metropolitan Core',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1450,
    amenities: [
      'Private Heated Plunge Pool',
      'Ultra High-Speed Gigabit WiFi',
      'Sonos Arc Sound System',
      'King Organic Latex Mattress',
      'Espresso Bar & Wine Cooler',
      'Floor-to-Ceiling Motorized Shades'
    ],
    description: 'Elevated urban sanctuary perched high above the metropolitan skyline. Flooded with natural light, featuring Italian leather furnishings, exposed architectural concrete, and an expansive private cedar deck.',
    highlights: [
      '270° Skyline View',
      'Private Keycard Elevator Access',
      '24/7 Concierge Support'
    ],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80'
    ],
    isAvailable: true,
    rating: 4.98,
    reviewCount: 184,
    featured: true
  },
  {
    id: 'joseph-02',
    name: 'Industrial Foundry Brick Loft',
    roomType: 'Boutique Loft',
    tagline: 'Authentic 1910 timber beams, restored brick arches, and double-height artist windows.',
    pricePerNight: 165,
    location: 'Old Foundry Quarter, Gate 4',
    neighborhood: 'Historic Warehouse Row',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 980,
    amenities: [
      'High-Speed Mesh WiFi (500Mbps)',
      'Acoustically Treated Studio Space',
      'Cast Iron Soaking Tub',
      'Vitra Ergonomic Desk & Herman Miller Chair',
      'Record Player with 100+ Vinyls',
      'Pour-Over Coffee Station'
    ],
    description: 'A magnetic space curated for writers, designers, and creators. Soaring 16-foot ceilings with original Douglas fir beams and warm raw iron fixtures.',
    highlights: [
      '16ft Exposed Timber Ceilings',
      'Vinyl Record Lounge',
      'Sunlit Mezzanine Bedroom'
    ],
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
    ],
    isAvailable: true,
    rating: 4.92,
    reviewCount: 96,
    featured: true
  },
  {
    id: 'joseph-03',
    name: 'Atelier Botanical Garden Suite',
    roomType: 'Creative Artist Suite',
    tagline: 'Private lush courtyard with Monstera greenery, skylights, and ceramic artist workspace.',
    pricePerNight: 140,
    location: 'Canal Lane Gardens, Unit 3B',
    neighborhood: 'Greenway District',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 720,
    amenities: [
      'Private Courtyard Patio',
      'Natural Linen Bedding',
      'Artist Easel & Drawing Supplies',
      'Rainfall Walk-In Shower',
      'Bespoke Herb Tea Selection',
      'Bicycle Rentals Included'
    ],
    description: 'An oasis of botanical tranquility in the city center. Step out from French doors directly into an enclosed ivy courtyard with stone seating.',
    highlights: [
      'Private Sunlit Ivy Garden',
      'Complimentary City Cruisers',
      'Quiet Residential Mews'
    ],
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80'
    ],
    isAvailable: true,
    rating: 4.95,
    reviewCount: 112
  },
  {
    id: 'joseph-04',
    name: 'Nordic Minimalist Cedar Pod',
    roomType: 'Minimalist Pod Room',
    tagline: 'Streamlined micro-luxury room engineered with soundproofing and smart circadian lighting.',
    pricePerNight: 95,
    originalPricePerNight: 120,
    location: 'Innovation Corridor, Hub 2',
    neighborhood: 'Tech District',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 420,
    amenities: [
      'Full Sound Isolation (STC 65)',
      'Circadian Wakeup Lighting System',
      'Standing Electric Desk (4K Monitor Ready)',
      'Organic Cotton Linens',
      'Smart Thermostat & HEPA Filtration',
      'Keyless Mobile Entry'
    ],
    description: 'Precision-engineered for deep sleep, remote work sprints, and digital nomads. Every inch is optimized with warm Japanese cedar joinery and acoustic felt.',
    highlights: [
      'Quiet-Zone Certified Sleep Lab',
      'Built-in 4K Monitor Workstation',
      'Self-Service Espresso Bar'
    ],
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80'
    ],
    isAvailable: true,
    rating: 4.88,
    reviewCount: 230
  },
  {
    id: 'joseph-05',
    name: 'The Sovereign Master Suite',
    roomType: 'Executive Master Suite',
    tagline: 'Palatial suite featuring a walk-in dressing salon, marble fireplace, and dual spa shower.',
    pricePerNight: 350,
    location: 'Embassy Boulevard, Suite 801',
    neighborhood: 'Diplomatic Enclave',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2.5,
    sqft: 1850,
    amenities: [
      'Carrara Marble Dual Spa Bath',
      'Working Wood-Burning Fireplace',
      'Dedicated Butler Service on Call',
      'Walk-In Cedar Dressing Room',
      'Chauffeured Airport Transfer',
      'Private Wine Cellar & Bar'
    ],
    description: 'Old-world grandeur meets modern discreet hospitality. Mahogany paneling, hand-knotted Persian runners, and an expansive dining salon for entertaining.',
    highlights: [
      'Working Marble Fireplace',
      'Private Valet & Concierge',
      'Dual Rainfall Spa Bath'
    ],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80'
    ],
    isAvailable: true,
    rating: 4.99,
    reviewCount: 64,
    featured: true
  }
];
