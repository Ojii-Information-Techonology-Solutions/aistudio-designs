import { PlantitoProduct } from './types';

export const PLANTITO_PRODUCTS: PlantitoProduct[] = [
  {
    id: 'plant-01',
    name: 'Monstera Deliciosa "Swiss Cheese"',
    botanicalName: 'Monstera deliciosa',
    tagline: 'Iconic architectural split leaves for dramatic tropical living rooms.',
    price: 48,
    originalPrice: 60,
    category: 'Indoor Plants',
    description: 'The undisputed king of indoor jungles. Featuring large, glossy fenestrated leaves that thrive in warm, filtered light. Carefully acclimatized in our greenhouse.',
    careGuide: {
      watering: 'Every 7-10 days when top 2" of soil is dry',
      light: 'Bright Indirect',
      humidity: '60%+ (Loves misting)',
      petFriendly: false,
      difficulty: 'Easy (Indestructible)'
    },
    specifications: {
      potDiameter: '8 inches nursery pot',
      height: '24-28 inches tall',
      soilType: 'Chunky Aroid Blend (Coco coir, perlite, bark)',
      drainageHoles: true
    },
    features: [
      'Grown in organic nutrient-rich greenhouse peat',
      'Mature fenestrated foliage ready for moss pole staking',
      'Includes 30-day plant vitality guarantee'
    ],
    images: [
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599598425947-5202edd564c5?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 142,
    isBestseller: true,
    isNewArrival: false,
    potColorOptions: [
      { name: 'Terracotta Rust', hex: '#C86D51' },
      { name: 'Raw Sandstone', hex: '#D7C4B7' },
      { name: 'Forest Matte Green', hex: '#2D4B39' }
    ]
  },
  {
    id: 'plant-02',
    name: 'Fiddle Leaf Fig Tree (Multi-Stem)',
    botanicalName: 'Ficus lyrata',
    tagline: 'Statement sculptural violin foliage for sunlit foyers & reading nooks.',
    price: 85,
    category: 'Indoor Plants',
    description: 'A stately indoor specimen with broad violin-shaped leaves and deep vein texturing. Hand-trained in our nursery with a sturdy branching habit.',
    careGuide: {
      watering: 'Water thoroughly when top 50% dry; never let sit in standing water',
      light: 'Bright Indirect',
      humidity: '50-65%',
      petFriendly: false,
      difficulty: 'Moderate'
    },
    specifications: {
      potDiameter: '10 inches nursery pot',
      height: '36-42 inches tall',
      soilType: 'Well-draining premium potting mix',
      drainageHoles: true
    },
    features: [
      'Thick, hardened stems for upright stability',
      'Naturally glossy leaves treated with organic neem wash',
      'Air-purifying foliage verified by NASA clean-air standards'
    ],
    images: [
      'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 98,
    isBestseller: true,
    potColorOptions: [
      { name: 'Basalt Charcoal', hex: '#2B2E33' },
      { name: 'Chalk White', hex: '#EAE6DF' }
    ]
  },
  {
    id: 'pot-01',
    name: 'Artisan Terracotta Fluted Cylinder Pot',
    tagline: 'Hand-thrown high-fire porous clay with breathable roots protection.',
    price: 34,
    category: 'Ceramic & Terracotta Pots',
    description: 'Crafted from mineral-rich natural clay with architectural vertical fluting. Highly porous natural terracotta wicks excess moisture away from delicate roots to prevent root rot.',
    specifications: {
      potDiameter: '8.5 inches inner diameter',
      height: '9 inches',
      material: 'Authentic Italian High-Fire Terracotta',
      drainageHoles: true
    },
    features: [
      'Includes matching detached water saucer',
      'Handmade tactile ribbed exterior finish',
      'Optimal breathability for aroids, hoyas, and tropicals'
    ],
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 5.0,
    reviewCount: 76,
    isBestseller: true,
    potColorOptions: [
      { name: 'Warm Terracotta', hex: '#B85E43' },
      { name: 'Antique White Wash', hex: '#E6DEC9' },
      { name: 'Smoked Onyx Clay', hex: '#3B3632' }
    ]
  },
  {
    id: 'pot-02',
    name: 'Mid-Century Ceramic Planter with Teak Stand',
    tagline: 'Sleek matte glaze stoneware resting on sustainable hardwood timber.',
    price: 68,
    originalPrice: 80,
    category: 'Hanging & Standing Planters',
    description: 'Elevate your plant display with this seamless stoneware ceramic planter nestled inside an interlocking cross-brace solid teak hardwood stand.',
    specifications: {
      potDiameter: '10.5 inches interior',
      height: '16 inches total height with stand',
      material: 'Stoneware Ceramic & Kiln-Dried Teak Wood',
      drainageHoles: true
    },
    features: [
      'Dual orientation stand: flip for lower or higher elevation',
      'Removable rubber plug included for flexible drainage control',
      'Smooth matte satin glaze resistant to water stains'
    ],
    images: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 112,
    isNewArrival: true,
    potColorOptions: [
      { name: 'Matte Sage Green', hex: '#7A8B7B' },
      { name: 'Bone White', hex: '#EDE8DF' },
      { name: 'Nordic Slate', hex: '#4A5568' }
    ]
  },
  {
    id: 'fert-01',
    name: 'Plantito Botanical Elixir • Organic Bio-Fertilizer (500ml)',
    tagline: 'Cold-pressed Norwegian kelp & worm casting hydrolysate for vigorous foliage.',
    price: 24,
    category: 'Organic Fertilizers & Feeds',
    description: 'A 100% natural, odorless concentrated liquid plant food enriched with trace minerals, amino acids, and beneficial mycorrhizae for lush leaf growth and stress resilience.',
    specifications: {
      npkRatio: '4-2-4 Bio-Balanced',
      volumeWeight: '500 ml (Yields 100+ Liters of feeding solution)',
      material: 'Organic Cold-Processed Seaweed & Humic Acids'
    },
    features: [
      'Safe for household pets and beneficial micro-organisms',
      'Prevents fertilizer leaf burn with zero synthetic salts',
      'Includes calibrated glass dropper for precise dilution'
    ],
    images: [
      'https://images.unsplash.com/photo-1585336261026-7f5ae61129b0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.95,
    reviewCount: 230,
    isBestseller: true
  },
  {
    id: 'fert-02',
    name: 'Slow-Release Organic Plantito Pellets (1kg Tub)',
    tagline: '6-month continuous micronutrient release infused with mycorrhizal fungi.',
    price: 19,
    category: 'Organic Fertilizers & Feeds',
    description: 'Simply sprinkle around the base of your houseplant. Breaks down gently with every watering to deliver uniform nourishment to roots without leaching.',
    specifications: {
      npkRatio: '8-4-8 Sustained Release',
      volumeWeight: '1.0 kg Resealable Earth-Friendly Tub',
      material: 'Bone meal, alfalfa meal, volcanic rock dust, composted manure'
    },
    features: [
      'Zero odor, child and pet safe formula',
      'Feeds continuously for up to 180 days',
      'Builds soil biological activity and humus density'
    ],
    images: [
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 64
  },
  {
    id: 'soil-01',
    name: 'Artisan Chunky Aroid Super-Mix (5L Bag)',
    tagline: 'Custom formulated coarse blend for Monsteras, Philodendrons & Anthuriums.',
    price: 18,
    category: 'Specialty Soils & Substrates',
    description: 'Never worry about root rot again. Crafted with premium New Zealand pinus bark, coarse horticultural perlite, coconut husk chips, activated biochar, and worm humus.',
    specifications: {
      volumeWeight: '5 Liters (Approx 2.2 kg)',
      soilType: 'Aerated Chunky Aroid Substrate (pH 6.0 - 6.5)',
      material: 'Pine Bark, Perlite, Pumice, Coco Coir, Biochar, Worm Castings'
    },
    features: [
      'Instant drainage with optimal oxygen flow to root filaments',
      'Infused with activated horticultural charcoal to purify rootzone',
      'Pre-sterilized to guarantee zero fungus gnats or weed seeds'
    ],
    images: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 88,
    isBestseller: true
  },
  {
    id: 'plant-03',
    name: 'Sansevieria Moonshine (Silver Snake Plant)',
    botanicalName: 'Dracaena trifasciata "Moonshine"',
    tagline: 'Silvery-mint architectural sword blades that survive almost any condition.',
    price: 32,
    category: 'Indoor Plants',
    description: 'One of the most durable and visually captivating cultivars of the snake plant. Its soft pale green, nearly silvery leaves create striking contrast against dark ceramics.',
    careGuide: {
      watering: 'Every 2-3 weeks; drought tolerant',
      light: 'Any Light',
      humidity: 'Low to Average (30-50%)',
      petFriendly: false,
      difficulty: 'Easy (Indestructible)'
    },
    specifications: {
      potDiameter: '6 inches nursery pot',
      height: '14-18 inches',
      soilType: 'Cactus & Succulent fast-draining grit',
      drainageHoles: true
    },
    features: [
      'Thrives in dark bedrooms or bright window sills alike',
      'Produces clean oxygen through CAM photosynthesis overnight',
      'Very low maintenance for busy plant parents'
    ],
    images: [
      'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    rating: 4.85,
    reviewCount: 52,
    isNewArrival: true,
    potColorOptions: [
      { name: 'Onyx Black', hex: '#1E1E24' },
      { name: 'Terracotta', hex: '#C86D51' }
    ]
  }
];
