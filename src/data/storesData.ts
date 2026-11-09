import { StoreDefinition } from '../types/storeTypes';
import { DRESS_CATALOG } from './dresses';

export const STORES: StoreDefinition[] = [
  // 1. CHARLÈNE HAUTE COUTURE
  {
    id: 'charlene',
    name: 'CHARLÈNE',
    shortName: 'Haute Couture',
    tagline: 'Atelier Haute Couture & Eveningwear',
    categoryLabel: 'Silhouette',
    businessModel: 'ecommerce',
    iconName: 'Sparkles',
    theme: {
      primaryColor: '#C5A059',
      primaryHover: '#B08D47',
      accentBg: '#F7F5F0',
      heroBgGradient: 'from-[#FDFCFB] via-[#F8F6F2] to-[#ECE7DF]',
      badgeBg: '#1A1A1A',
      badgeText: '#FDFCFB',
      cardBorder: '#E5E1DA',
      fontFamily: 'serif',
      headingClass: 'font-serif tracking-tight',
      subheadingClass: 'font-sans tracking-[0.25em] uppercase text-xs',
      accentIconColor: '#C5A059',
      headerBrandLogo: 'CHARLÈNE',
      headerSubtitle: 'Haute Couture Atelier • Paris',
      heroEyebrow: 'Spring / Summer 2026 Collection',
      heroTitle: 'Architectural Silhouettes &',
      heroTitleHighlight: 'Como Silk Drapery',
      heroDescription: 'Hand-sculpted in our Parisian atelier. Each gown is tailored from single-origin Italian silk crepe, French Calais lace, and architectural inner corsetry.',
      heroCtaPrimary: 'Explore Collection',
      heroCtaSecondary: 'Atelier Lookbook',
      heroImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'Crafting Hours', value: '48h+' },
        { label: 'Como Silk Purity', value: '100%' },
        { label: 'Client Satisfaction', value: '99.4%' }
      ],
      valueProps: [
        { icon: 'Scissors', title: 'Bespoke Alterations', desc: 'Complimentary custom hemming & tailoring on all orders.' },
        { icon: 'ShieldCheck', title: 'Atelier Authenticity', desc: 'Hand-numbered wax seal certificate with every gown.' },
        { icon: 'Truck', title: 'White-Glove Delivery', desc: 'Delivered in silk garment bags with wooden travel hangers.' }
      ]
    },
    categories: ['All', 'Evening Gowns', 'Silk & Satin Slips', 'Cocktail & Soirée', 'Gala & Black Tie', 'Resort Elegance'],
    filterOptions: {
      categoryLabel: 'Occasion & Silhouette',
      subFilterLabel: 'Silhouette',
      subFilterOptions: ['All', 'Column', 'Mermaid', 'A-Line', 'Bias-Cut Slip', 'Sculptural Drapery'],
      priceRange: [400, 2500]
    },
    products: DRESS_CATALOG.map((d) => ({
      id: d.id,
      shopId: 'charlene',
      name: d.name,
      frenchTitle: d.frenchTitle,
      tagLine: d.tagLine,
      price: d.price,
      originalPrice: d.originalPrice,
      pricingUnit: 'piece',
      category: d.category,
      subCategory: d.silhouette,
      rating: d.rating,
      reviewCount: d.reviewCount,
      images: d.images,
      description: d.description,
      details: d.details,
      specifications: {
        'Fabric': d.fabric,
        'Origin': d.fabricOrigin,
        'Neckline': d.neckline,
        'Length': d.length,
        'Care': d.careInstructions
      },
      optionsLabel: 'Select French Size',
      options: d.sizes.map((s) => ({
        id: s.size,
        label: s.size,
        inStock: s.inStock,
        remaining: s.remaining
      })),
      colors: d.colors,
      isBestseller: d.isBestseller,
      isNewArrival: d.isNewArrival,
      inStock: true,
      careOrNotes: d.atelierNotes
    }))
  },

  // 2. VERRE & TERRE (Plates, Ceramics, Dinnerware & Glassware)
  {
    id: 'plates-glasses',
    name: 'VERRE & TERRE',
    shortName: 'Ceramics & Glass',
    tagline: 'Artisanal Stoneware, Dinnerware & Hand-Blown Glass',
    categoryLabel: 'Tableware Type',
    businessModel: 'ecommerce',
    iconName: 'Utensils',
    theme: {
      primaryColor: '#A05A32', // Terracotta clay
      primaryHover: '#874724',
      accentBg: '#FAF5EE',
      heroBgGradient: 'from-[#FBF8F3] via-[#F4EFE6] to-[#E9DFD0]',
      badgeBg: '#4A3B32',
      badgeText: '#FAF5EE',
      cardBorder: '#E6DCCF',
      fontFamily: 'serif',
      headingClass: 'font-serif tracking-normal text-[#2E241E]',
      subheadingClass: 'font-sans tracking-[0.2em] uppercase text-xs text-[#8C6D58]',
      accentIconColor: '#A05A32',
      headerBrandLogo: 'VERRE & TERRE',
      headerSubtitle: 'Artisanal Dinnerware & Studio Glass • Kyoto & Provence',
      heroEyebrow: 'The Autumn Table Collection',
      heroTitle: 'Tactile Stoneware &',
      heroTitleHighlight: 'Hand-Blown Crystal',
      heroDescription: 'Crafted for slow gatherings. High-fired volcanic clay glazes paired with featherweight mouth-blown borosilicate wine vessels, made to be cherished daily.',
      heroCtaPrimary: 'Explore Dinner Sets',
      heroCtaSecondary: 'View Glassware',
      heroImage: 'https://images.unsplash.com/photo-1615865417491-9941019fbc00?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'Kiln Temp', value: '1,280°C' },
        { label: 'Natural Glazes', value: '100% Lead-Free' },
        { label: 'Durability', value: 'Dishwasher Safe' }
      ],
      valueProps: [
        { icon: 'ShieldCheck', title: 'High-Fire Stoneware', desc: 'Resistant to chipping, thermal shock, microwave and oven safe up to 230°C.' },
        { icon: 'Sparkles', title: 'Studio Hand-Glazed', desc: 'Every piece features organic reactive glaze variations making each plate 1-of-1.' },
        { icon: 'Truck', title: 'Break-Free Shipping', desc: 'Packed in eco-friendly molded pulp cushion boxes with zero breakage guarantee.' }
      ]
    },
    categories: ['All', 'Dinner Plates & Sets', 'Bowls & Ramen Vessels', 'Stemware & Goblets', 'Tumblers & Carafes', 'Serving Platters'],
    filterOptions: {
      categoryLabel: 'Table Category',
      subFilterLabel: 'Clay & Glaze',
      subFilterOptions: ['All', 'Raw Speckled Sand', 'Matte Terracotta', 'Smoked Obsidian', 'Fluted Crystal', 'Celadon Sage'],
      priceRange: [35, 420]
    },
    products: [
      {
        id: 'vt-01',
        shopId: 'plates-glasses',
        name: 'The Dune Matte Stoneware Dinner Set',
        subTitle: '16-Piece Service for 4',
        tagLine: 'Raw rimmed organic ceramic plates with satin sandstone glaze',
        price: 260,
        originalPrice: 310,
        pricingUnit: '16-pc set',
        category: 'Dinner Plates & Sets',
        subCategory: 'Raw Speckled Sand',
        rating: 4.9,
        reviewCount: 74,
        images: [
          'https://images.unsplash.com/photo-1615865417491-9941019fbc00?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Our signature dining service drafted with low-profile lips and subtle organic curvature. Fired from iron-rich stoneware in small batches, featuring an unglazed earthy base and smooth food-safe satin interior.',
        details: [
          'Includes 4 Dinner Plates (10.5"), 4 Salad Plates (8"), 4 Pasta Bowls (8.5"), 4 Cereal Bowls (6")',
          'High-fired stoneware at 1,280°C for lifetime chip resistance',
          'Microwave, dishwasher, and oven safe up to 450°F (230°C)',
          'Stackable nesting geometry for compact cupboard storage',
          'Zero-toxic, lead-free and cadmium-free natural minerals'
        ],
        specifications: {
          'Material': 'High-Fire Mineral Stoneware',
          'Glaze Finish': 'Satin Matte Sand with Raw Bisque Rim',
          'Set Count': '16 Pieces (Service for 4)',
          'Weight': '9.4 kg total',
          'Care': 'Dishwasher & Microwave Safe'
        },
        optionsLabel: 'Select Dinner Set Bundle',
        options: [
          { id: 'set-4', label: 'Service for 4 (16 Pieces)', priceModifier: 0, inStock: true },
          { id: 'set-8', label: 'Service for 8 (32 Pieces)', priceModifier: 220, inStock: true },
          { id: 'plates-only', label: 'Dinner Plates Only (Set of 4)', priceModifier: -170, inStock: true }
        ],
        colors: [
          { name: 'Sandstone Dune', hex: '#D9C8B4', label: 'Warm Sand' },
          { name: 'Obsidian Charcoal', hex: '#33302E', label: 'Smoked Charcoal' },
          { name: 'Terracotta Ochre', hex: '#A85D3B', label: 'Rust Clay' }
        ],
        isBestseller: true,
        inStock: true,
        careOrNotes: 'Stack plates with cloth separators if storing for extended periods. Microwave safe.'
      },
      {
        id: 'vt-02',
        shopId: 'plates-glasses',
        name: 'The Ripple Fluted Crystal Wine Goblets',
        subTitle: 'Set of 4 Hand-Blown Stemware',
        tagLine: 'Vertical fluted borosilicate crystal with slender pulled stems',
        price: 110,
        originalPrice: 135,
        pricingUnit: 'set of 4',
        category: 'Stemware & Goblets',
        subCategory: 'Fluted Crystal',
        rating: 5.0,
        reviewCount: 49,
        images: [
          'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Mouth-blown by master glassblowers, these crystal goblets feature delicate optical ribbing that catches candlelight across your dinner setting. Engineered with a tapered bowl that concentrates bouquet aromatics.',
        details: [
          'Set of 4 mouth-blown lead-free crystal goblets (480ml capacity)',
          'Featherweight 1.1mm laser-cut polished rim for optimal tasting contact',
          'Ribbed vertical fluting creates mesmerizing shadows under ambient light',
          'Reinforced titanium crystal stem for enhanced shatter resistance'
        ],
        specifications: {
          'Capacity': '480 ml / 16.2 fl oz',
          'Material': 'Lead-Free Titanium Crystal',
          'Height': '22.5 cm',
          'Craft': 'Mouth-Blown & Flame-Polished'
        },
        optionsLabel: 'Select Glass Set',
        options: [
          { id: 'set-4', label: 'Set of 4 Goblets', priceModifier: 0, inStock: true },
          { id: 'set-8', label: 'Set of 8 Goblets', priceModifier: 95, inStock: true }
        ],
        colors: [
          { name: 'Pure Clear', hex: '#F0F4F8', label: 'Ultra-Clear Crystal' },
          { name: 'Smoky Amber', hex: '#C29B64', label: 'Warm Amber Hue' }
        ],
        isNewArrival: true,
        inStock: true
      },
      {
        id: 'vt-03',
        shopId: 'plates-glasses',
        name: 'The Kyoto Shallow Pasta & Risotto Bowl',
        subTitle: 'Set of 4 Ceramic Bowls',
        tagLine: 'Wide architectural rim with deep culinary center well',
        price: 98,
        pricingUnit: 'set of 4',
        category: 'Bowls & Ramen Vessels',
        subCategory: 'Raw Speckled Sand',
        rating: 4.8,
        reviewCount: 32,
        images: [
          'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Inspired by traditional Kaiseki plating vessels, this shallow wide-lipped bowl frames saucy pastas, broths, and roasted grain salads like a canvas.',
        details: [
          'Set of 4 wide-lip pasta bowls (8.5" diameter, 32 oz capacity)',
          'Subtle iron speckling naturally emerges during reduction kiln firing',
          'Thick ceramic base retains meal heat throughout dining'
        ],
        specifications: {
          'Diameter': '21.5 cm / 8.5 in',
          'Depth': '4.8 cm',
          'Weight': '620 g per bowl',
          'Material': 'Speckled Japanese Stoneware'
        },
        options: [
          { id: 'set-4', label: 'Set of 4 Bowls', priceModifier: 0, inStock: true },
          { id: 'set-6', label: 'Set of 6 Bowls', priceModifier: 45, inStock: true }
        ],
        inStock: true
      },
      {
        id: 'vt-04',
        shopId: 'plates-glasses',
        name: 'The Monolith Oval Serving Platter',
        subTitle: 'Sculpted Ceramic Centerpiece',
        tagLine: '16-inch roasted meats and harvest vegetable showpiece platter',
        price: 85,
        pricingUnit: 'piece',
        category: 'Serving Platters',
        subCategory: 'Matte Terracotta',
        rating: 4.9,
        reviewCount: 21,
        images: [
          'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'A striking tabletop anchor with textured side handles and gentle organic asymmetry. Perfect for family-style banquets, artisan bread loaves, and whole grilled fish.',
        details: [
          '16" x 11" wide footprint',
          'Oven safe for direct table serving',
          'Thermal retention keeps dishes warm at the table'
        ],
        specifications: {
          'Dimensions': '40.6 x 28.0 cm',
          'Weight': '1.8 kg',
          'Origin': 'Provence Studio Kiln'
        },
        options: [
          { id: 'platter-16', label: 'Large 16" Platter', priceModifier: 0, inStock: true },
          { id: 'platter-20', label: 'Grand 20" Platter', priceModifier: 35, inStock: true }
        ],
        inStock: true
      },
      {
        id: 'vt-05',
        shopId: 'plates-glasses',
        name: 'The Solstice Ribbed Tumbler & Carafe Set',
        subTitle: '1 Carafe + 4 Stackable Tumblers',
        tagLine: 'Everyday sparkling water & cocktail service with optic ribbing',
        price: 88,
        pricingUnit: '5-pc set',
        category: 'Tumblers & Carafes',
        subCategory: 'Fluted Crystal',
        rating: 4.7,
        reviewCount: 41,
        images: [
          'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'A functional, sculptural bedside and dining carafe that nests its matching tumbler over the spout to keep water fresh overnight.',
        details: [
          '1L Carafe with ergonomic pour spout + 4 x 320ml lowball tumblers',
          'Thermal shock resistant borosilicate crystal',
          'Fits easily in standard refrigerator door shelves'
        ],
        specifications: {
          'Carafe Volume': '1,000 ml',
          'Tumbler Volume': '320 ml each',
          'Glass Type': 'Borosilicate Glass'
        },
        options: [
          { id: 'full-set', label: 'Carafe + 4 Tumblers', priceModifier: 0, inStock: true },
          { id: 'tumblers-only', label: '4 Tumblers Only', priceModifier: -35, inStock: true }
        ],
        inStock: true
      }
    ]
  },

  // 3. BOTANICA & FOLIA (Plants & Living Greenery)
  {
    id: 'plants',
    name: 'BOTANICA & FOLIA',
    shortName: 'Botanical Nursery',
    tagline: 'Rare Indoor Foliage, Specimen Trees & Architectural Planters',
    categoryLabel: 'Plant Category',
    businessModel: 'ecommerce',
    iconName: 'Leaf',
    theme: {
      primaryColor: '#2D5A27', // Forest deep green
      primaryHover: '#20421C',
      accentBg: '#F3F7F2',
      heroBgGradient: 'from-[#F4F8F3] via-[#EAF2E9] to-[#DDEADE]',
      badgeBg: '#1B3B17',
      badgeText: '#F3F7F2',
      cardBorder: '#D2E2D0',
      fontFamily: 'serif',
      headingClass: 'font-serif tracking-tight text-[#163013]',
      subheadingClass: 'font-sans tracking-[0.2em] uppercase text-xs text-[#4E7A47]',
      accentIconColor: '#2D5A27',
      headerBrandLogo: 'BOTANICA & FOLIA',
      headerSubtitle: 'Living Architecture & Rare Botanicals • Nursery Greenhouse',
      heroEyebrow: 'Spring Greenhouse Curation',
      heroTitle: 'Living Sculptures for',
      heroTitleHighlight: 'Mindful Interiors',
      heroDescription: 'Acclimated, nursery-grown specimen houseplants paired with breathable raw terracotta vessels. Delivered straight from our botanical glasshouses to your living room.',
      heroCtaPrimary: 'Shop Rare Plants',
      heroCtaSecondary: 'Care & Plant Doctor',
      heroImage: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'Greenhouse Acclimated', value: '14 Days' },
        { label: 'Live Plant Guarantee', value: '30 Days' },
        { label: 'Organic Soil Mix', value: 'Microbe Rich' }
      ],
      valueProps: [
        { icon: 'ShieldCheck', title: '30-Day Plant Guarantee', desc: 'If your plant struggles within 30 days, we replace it or our horticulturists troubleshoot free.' },
        { icon: 'Sparkles', title: 'Potted & Root-Established', desc: 'Arrives in our signature aeration soil blend with optional drainage planter pot.' },
        { icon: 'Truck', title: 'Climate-Controlled Transit', desc: 'Packaged with root heat packs in winter and breathable shock-cushioning sleeves.' }
      ]
    },
    categories: ['All', 'Specimen Floor Trees', 'Rare & Variegated', 'Low-Light Forgiving', 'Trailing & Vines', 'Terracotta Planters'],
    filterOptions: {
      categoryLabel: 'Light & Environment',
      subFilterLabel: 'Light Level',
      subFilterOptions: ['All', 'Bright Indirect', 'Low Light Tolerant', 'Direct Sun', 'Pet Friendly'],
      priceRange: [28, 380]
    },
    products: [
      {
        id: 'pl-01',
        shopId: 'plants',
        name: 'The Architectural Fiddle Leaf Fig',
        subTitle: 'Ficus Lyrata • 5-6ft Mature Specimen',
        tagLine: 'Broad violin-shaped sculptural leaves with thick single trunk',
        price: 185,
        originalPrice: 220,
        pricingUnit: 'mature tree',
        category: 'Specimen Floor Trees',
        subCategory: 'Bright Indirect',
        rating: 4.9,
        reviewCount: 118,
        images: [
          'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'An iconic botanical anchor for bright living rooms and studies. Grown for 4 years in our tropical nursery, each tree features vigorous root networks and deep glossy jade foliage.',
        details: [
          'Stands 5.5 to 6.2 feet tall including pot',
          'Prefers bright, filtered indirect sunlight near east or south facing windows',
          'Water approximately every 10–14 days when top 2 inches of soil dry',
          'Nursery-grown in porous chunky aroid soil (bark, perlite, worm castings)'
        ],
        specifications: {
          'Botanical Name': 'Ficus lyrata',
          'Height': '5.5 - 6.0 ft',
          'Pot Diameter': '12" Nursery Pot included',
          'Light Need': 'Bright Indirect Light',
          'Pet Toxicity': 'Mildly toxic if ingested'
        },
        optionsLabel: 'Choose Planter Vessel',
        options: [
          { id: 'nursery', label: '12" Grower Nursery Pot', priceModifier: 0, inStock: true },
          { id: 'terracotta', label: '12" Natural Tuscan Terracotta Pot + Saucer', priceModifier: 45, inStock: true },
          { id: 'matte-white', label: '12" Matte White Ceramic Cylinder + Stand', priceModifier: 65, inStock: true }
        ],
        colors: [
          { name: 'Natural Jade', hex: '#2E5A27', label: 'Deep Forest Jade' }
        ],
        isBestseller: true,
        inStock: true,
        extraMeta: {
          lightRequirement: 'Bright Indirect',
          wateringFrequency: 'Every 10-12 Days',
          petFriendly: false
        }
      },
      {
        id: 'pl-02',
        shopId: 'plants',
        name: 'The Variegated Monstera Albo Borsigiana',
        subTitle: 'Rare 5-Leaf Specimen with Heavy Marble Fenestrations',
        tagLine: 'Spectacular stark white and emerald half-moon variegation',
        price: 290,
        originalPrice: 350,
        pricingUnit: 'collector specimen',
        category: 'Rare & Variegated',
        subCategory: 'Bright Indirect',
        rating: 5.0,
        reviewCount: 38,
        images: [
          'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'A prized collector cultivar featuring high-contrast white sectoral and marbling genetics. Fully rooted in a clear orchid pot with visible, healthy active root tips.',
        details: [
          'Guaranteed genetic stability with distinct chimera variegation on stem',
          'Comes with moss pole anchor for climbing node support',
          'Ships with 48h express climate-insulated packaging'
        ],
        specifications: {
          'Botanical Name': 'Monstera deliciosa var. borsigiana albo',
          'Leaf Count': '5-6 Mature Leaves',
          'Pot Size': '8" Aeration Pot',
          'Light Need': 'Bright Indirect (Requires good light for white sectors)'
        },
        optionsLabel: 'Choose Climbing Support',
        options: [
          { id: 'coco-pole', label: 'Natural Coco Coir Pole (Included)', priceModifier: 0, inStock: true },
          { id: 'sphagnum-pole', label: 'Extendable Sphagnum Moss Pole', priceModifier: 25, inStock: true }
        ],
        isNewArrival: true,
        inStock: true,
        extraMeta: {
          lightRequirement: 'Bright Indirect',
          wateringFrequency: 'Weekly',
          petFriendly: false
        }
      },
      {
        id: 'pl-03',
        shopId: 'plants',
        name: 'The Velvet Black Raven ZZ Plant',
        subTitle: 'Zamioculcas zamiifolia • Ultra Hardy & Low-Light Master',
        tagLine: 'Nearly black lustrous foliage that thrives in dim apartments',
        price: 64,
        pricingUnit: 'potted plant',
        category: 'Low-Light Forgiving',
        subCategory: 'Low Light Tolerant',
        rating: 4.9,
        reviewCount: 89,
        images: [
          'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Virtually indestructible. Features rich ebony-purple foliage emerging lime green before darkening. Stores water in subterranean tubers, forgiving weeks of neglect.',
        details: [
          'Thrives under fluorescent office lights or north-facing bedrooms',
          'Requires watering only once every 3 to 4 weeks',
          'Air-purifying properties recognized by NASA clean air studies'
        ],
        specifications: {
          'Botanical Name': 'Zamioculcas zamiifolia "Raven"',
          'Height': '24-28 inches',
          'Pot Size': '8" Planter',
          'Water Needs': 'Very Low (Monthly)'
        },
        options: [
          { id: 'potted-8', label: '8" Charcoal Ceramic Pot', priceModifier: 0, inStock: true },
          { id: 'potted-10', label: '10" Floor Pot Upgrade', priceModifier: 30, inStock: true }
        ],
        inStock: true,
        extraMeta: {
          lightRequirement: 'Low Light',
          wateringFrequency: 'Every 3-4 Weeks',
          petFriendly: false
        }
      },
      {
        id: 'pl-04',
        shopId: 'plants',
        name: 'The Cascading Satin Pothos Trellis',
        subTitle: 'Scindapsus pictus • Silvery Shimmering Heart Foliage',
        tagLine: 'Fast growing trailing vine with metallic silver brushstrokes',
        price: 48,
        pricingUnit: 'hanging basket',
        category: 'Trailing & Vines',
        subCategory: 'Low Light Tolerant',
        rating: 4.8,
        reviewCount: 63,
        images: [
          'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Velvety matte green leaves dusted in reflective silver specks. Looks enchanting spilling from a bookshelf ledge or hanging macramé basket.',
        details: [
          'Vines already trail 18-24 inches',
          'Easy propagation from stem cuttings in water',
          'Leaves curl slightly to signal when it wants water'
        ],
        specifications: {
          'Botanical Name': 'Scindapsus pictus "Exotica"',
          'Trail Length': '2 ft cascades',
          'Pot Type': 'Hanging Planter with Detachable Hook'
        },
        options: [
          { id: 'hanging-6', label: '6" Hanging Ceramic Bowl', priceModifier: 0, inStock: true },
          { id: 'tabletop-6', label: '6" Tabletop Terrazzo Pot', priceModifier: 15, inStock: true }
        ],
        inStock: true,
        extraMeta: {
          lightRequirement: 'Low Light',
          wateringFrequency: 'Weekly',
          petFriendly: false
        }
      },
      {
        id: 'pl-05',
        shopId: 'plants',
        name: 'Artisan Tuscan Fluted Terracotta Pot',
        subTitle: 'Hand-Thrown Breathable Clay Planter & Matching Saucer',
        tagLine: 'Natural porous Italian clay for superior root aeration & moisture balance',
        price: 42,
        pricingUnit: 'pot & saucer',
        category: 'Terracotta Planters',
        subCategory: 'Pet Friendly',
        rating: 5.0,
        reviewCount: 47,
        images: [
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Formed from natural Impruneta terracotta. Porous walls naturally wick away excess root moisture, preventing root rot and developing a gorgeous chalky patina over the years.',
        details: [
          'Equipped with central drainage hole and matching deep drip saucer',
          'Frost proof and UV stable for indoor and patio gardens'
        ],
        specifications: {
          'Diameter': '10 inch interior',
          'Material': '100% Raw Tuscan Clay',
          'Drainage': 'Pre-drilled central drainage'
        },
        options: [
          { id: 'pot-8', label: '8" Diameter', priceModifier: -10, inStock: true },
          { id: 'pot-10', label: '10" Diameter', priceModifier: 0, inStock: true },
          { id: 'pot-12', label: '12" Diameter Large', priceModifier: 22, inStock: true }
        ],
        inStock: true
      }
    ]
  },

  // 4. TITAN HEAVY MACHINERY (Industrial Equipment Sales)
  {
    id: 'machinery-sales',
    name: 'TITAN MACHINERY',
    shortName: 'Machinery Sales',
    tagline: 'Heavy Earthmoving, Excavators, Cranes & Industrial Fleet Sales',
    categoryLabel: 'Equipment Class',
    businessModel: 'industrial-sales',
    iconName: 'Truck',
    theme: {
      primaryColor: '#D9531E', // Construction Safety Orange
      primaryHover: '#B83F11',
      accentBg: '#F8F6F4',
      heroBgGradient: 'from-[#1E232A] via-[#2A303C] to-[#12161C]',
      badgeBg: '#D9531E',
      badgeText: '#FFFFFF',
      cardBorder: '#DCDFE4',
      fontFamily: 'sans',
      headingClass: 'font-sans font-black tracking-tight uppercase text-slate-900',
      subheadingClass: 'font-mono tracking-widest uppercase text-xs text-orange-600 font-bold',
      accentIconColor: '#D9531E',
      headerBrandLogo: 'TITAN INDUSTRIAL',
      headerSubtitle: 'Heavy Earthmoving & Construction Equipment Sales • Global Fleet',
      heroEyebrow: 'Tier 4 Final Fleet Inventory',
      heroTitle: 'Heavy Machinery & Earthmoving',
      heroTitleHighlight: 'Industrial Fleet Sales',
      heroDescription: 'Commercial-grade hydraulic excavators, articulated wheel loaders, and track bulldozers. Certified with OEM 5-year powertrain warranties, telematics tracking, and flexible commercial leasing.',
      heroCtaPrimary: 'Inspect Available Fleet',
      heroCtaSecondary: 'Commercial Financing',
      heroImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'Fleet Certified', value: '100% OEM' },
        { label: 'Powertrain Warranty', value: '5 Years' },
        { label: 'Nationwide Delivery', value: '72 Hours' }
      ],
      valueProps: [
        { icon: 'ShieldCheck', title: '5-Year OEM Warranty', desc: 'Comprehensive hydraulic, powertrain and undercarriage factory-backed warranty.' },
        { icon: 'Truck', title: 'Heavy Lowboy Hauling', desc: 'Direct job site delivery with certified heavy-haul transport permits included.' },
        { icon: 'Sparkles', title: 'GPS Telematics Fleet Link', desc: 'Integrated 4G satellite diagnostics, fuel consumption logs, and geofencing.' }
      ]
    },
    categories: ['All', 'Hydraulic Excavators', 'Track Bulldozers', 'Wheel Loaders', 'Articulated Dumpers', 'Mobile Cranes'],
    filterOptions: {
      categoryLabel: 'Machine Class',
      subFilterLabel: 'Operating Tonnage',
      subFilterOptions: ['All', 'Compact (3-8 Ton)', 'Medium (14-25 Ton)', 'Heavy Duty (30-50 Ton)', 'Mining (50+ Ton)'],
      priceRange: [45000, 380000]
    },
    products: [
      {
        id: 'mach-01',
        shopId: 'machinery-sales',
        name: 'TITAN TX-360LC Heavy Hydraulic Excavator',
        subTitle: '36-Ton Class • 275 HP Cummins QSL9 Turbo Engine',
        tagLine: 'Heavy civil earthmoving excavator with high-pressure dual-pump hydraulics',
        price: 248000,
        originalPrice: 265000,
        pricingUnit: 'unit (brand new)',
        category: 'Hydraulic Excavators',
        subCategory: 'Heavy Duty (30-50 Ton)',
        rating: 4.9,
        reviewCount: 26,
        images: [
          'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Engineered for extreme quarrying, mass excavation, and civil infrastructure. Features heavy-duty reinforced X-frame undercarriage, pressurized ROPS/FOPS luxury operator cabin with 360° bird-eye cameras, and Tier 4 Final fuel efficiency.',
        details: [
          'Cummins 8.9L Tier 4 Final turbocharged diesel generating 275 HP (205 kW)',
          'Heavy-duty 2.1 m³ (2.75 yd³) reinforced rock bucket with ESCO teeth',
          'Maximum digging depth: 7.52 m (24.7 ft) / Max reach: 11.1 m',
          'Intelligent Electro-Hydraulic Flow Sharing System (320 L/min dual pumps)',
          'Air-suspension heated leather operator seat with low-effort joystick pilot controls'
        ],
        specifications: {
          'Operating Weight': '36,400 kg (80,250 lbs)',
          'Engine Power': '275 HP @ 1,900 RPM',
          'Bucket Capacity': '2.10 m³',
          'Max Dig Depth': '7.52 meters',
          'Hydraulic Pressure': '34.3 MPa',
          'Warranty': '5-Year / 5,000-Hour Powertrain'
        },
        optionsLabel: 'Select Hydraulic Attachment Package',
        options: [
          { id: 'std-bucket', label: 'Heavy Duty Rock Bucket (Included)', priceModifier: 0, inStock: true },
          { id: 'quick-coupler', label: '+ Hydraulic Quick Coupler + Thumb Bracket', priceModifier: 12500, inStock: true },
          { id: 'breaker-pack', label: '+ 35-Ton Hydraulic Concrete Breaker Attachment', priceModifier: 28000, inStock: true }
        ],
        isBestseller: true,
        inStock: true,
        extraMeta: {
          tonnage: '36.4 Tons',
          horsepower: '275 HP'
        }
      },
      {
        id: 'mach-02',
        shopId: 'machinery-sales',
        name: 'TITAN TD-180 Hydrostatic Track Bulldozer',
        subTitle: '22-Ton • 215 HP • Semi-U Blade with 3-Shank Ripper',
        tagLine: 'Precision grading and heavy bulk pushing with dual-path hydrostatic drive',
        price: 195000,
        pricingUnit: 'unit',
        category: 'Track Bulldozers',
        subCategory: 'Medium (14-25 Ton)',
        rating: 4.8,
        reviewCount: 19,
        images: [
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Smooth stepless speed changes under load with independent track speed control for zero-radius turning on slopes. 3D GPS Grade Control ready from factory.',
        details: [
          'Semi-U Dozing Blade capacity: 5.6 m³ with hydraulic pitch adjustment',
          'Multi-shank rear parallelogram ripper with replaceable wear tips',
          'Sealed & lubricated track (SALT) pin assembly for 5,000h wear life'
        ],
        specifications: {
          'Operating Weight': '22,100 kg (48,720 lbs)',
          'Engine': 'Cat C7.1 ACERT Tier 4F',
          'Blade Capacity': '5.6 m³',
          'Ground Pressure': '48.2 kPa'
        },
        optionsLabel: 'Grade Control Technology',
        options: [
          { id: 'manual', label: 'Standard Pilot Hydraulics', priceModifier: 0, inStock: true },
          { id: '3d-gps', label: 'Integrated 3D Dual-GNSS Auto-Grade Kit', priceModifier: 18500, inStock: true }
        ],
        inStock: true
      },
      {
        id: 'mach-03',
        shopId: 'machinery-sales',
        name: 'TITAN WL-550 High-Lift Wheel Loader',
        subTitle: '18-Ton • 3.5 m³ Material Bucket • Powershift Transmission',
        tagLine: 'Rapid cycle times for aggregate quarries, asphalt plants & batching',
        price: 168000,
        pricingUnit: 'unit',
        category: 'Wheel Loaders',
        subCategory: 'Medium (14-25 Ton)',
        rating: 4.9,
        reviewCount: 14,
        images: [
          'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'High breakout forces and z-bar linkage optimize bucket fill factors. Automatic kickout sensors and ride control dampens boom bounce on rough terrain.',
        details: [
          'Dump clearance at full lift: 3.12 meters',
          'ZF 4-speed automatic powershift transmission with torque converter lockup',
          'Limited-slip front and rear planetary drive axles'
        ],
        specifications: {
          'Operating Weight': '18,500 kg',
          'Bucket Capacity': '3.50 m³',
          'Breakout Force': '178 kN',
          'Tire Size': '23.5R25 L3 Radial'
        },
        options: [
          { id: 'std-bucket', label: '3.5 m³ General Purpose Bucket', priceModifier: 0, inStock: true },
          { id: 'high-dump', label: '4.2 m³ Light Material High-Dump Bucket', priceModifier: 8500, inStock: true }
        ],
        inStock: true
      },
      {
        id: 'mach-04',
        shopId: 'machinery-sales',
        name: 'TITAN TC-55 All-Terrain Mobile Crane',
        subTitle: '55-Ton Capacity • 44m 5-Section Telescopic Boom',
        tagLine: 'Compact 3-axle carrier with crab-steering and rapid outrigger leveling',
        price: 345000,
        pricingUnit: 'unit',
        category: 'Mobile Cranes',
        subCategory: 'Heavy Duty (30-50 Ton)',
        rating: 5.0,
        reviewCount: 8,
        images: [
          'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Versatile crane capable of highway cruising at 85 km/h and rugged all-wheel drive off-road jobsite positioning. Equipped with smart load moment limiter computer.',
        details: [
          '5-section U-shaped main boom extending from 11.2m to 44.0m',
          'Optional 16m bi-fold lattice swingaway jib with 0°, 20°, 40° offset angles',
          'Full computerized wireless remote control for outrigger deployment'
        ],
        specifications: {
          'Max Lifting Capacity': '55,000 kg @ 3m radius',
          'Max Boom Length': '44.0 meters (60m with Jib)',
          'Engine': 'Mercedes-Benz OM470 6-Cylinder Diesel',
          'Axle Configuration': '6 x 6 x 6 Steer-Drive'
        },
        options: [
          { id: 'std-crane', label: 'Standard 44m Boom Package', priceModifier: 0, inStock: true },
          { id: 'with-jib', label: '+ 16m Lattice Jib & Extra 6-Ton Counterweight', priceModifier: 24000, inStock: true }
        ],
        inStock: true
      }
    ]
  },

  // 5. IRONHIRE RENTALS (Heavy Machinery & Equipment Rental)
  {
    id: 'machinery-rentals',
    name: 'IRONHIRE RENTAL',
    shortName: 'Machinery Hire',
    tagline: 'Heavy Equipment Plant Hire • Daily, Weekly & Monthly Rates',
    categoryLabel: 'Fleet Category',
    businessModel: 'rental-equipment',
    iconName: 'Wrench',
    theme: {
      primaryColor: '#EAB308', // High-Vis Industrial Yellow
      primaryHover: '#CA8A04',
      accentBg: '#FAF8F0',
      heroBgGradient: 'from-[#18181B] via-[#27272A] to-[#09090B]',
      badgeBg: '#EAB308',
      badgeText: '#18181B',
      cardBorder: '#E4E4E7',
      fontFamily: 'sans',
      headingClass: 'font-sans font-bold tracking-tight text-zinc-900',
      subheadingClass: 'font-mono tracking-wider uppercase text-xs text-yellow-600 font-bold',
      accentIconColor: '#CA8A04',
      headerBrandLogo: 'IRONHIRE RENTALS',
      headerSubtitle: 'Plant & Heavy Equipment Hire • Certified Operators Available',
      heroEyebrow: 'Immediate Jobsite Dispatch',
      heroTitle: 'Commercial Plant Hire &',
      heroTitleHighlight: 'Machinery Rentals',
      heroDescription: 'Rent excavators, skid steers, scissor lifts, and rollers by the day, week, or month. Optional OSHA-certified union operators and prompt job site lowboy delivery.',
      heroCtaPrimary: 'Browse Rental Fleet',
      heroCtaSecondary: 'Rental Rate Sheet',
      heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'Dispatch Window', value: '4 Hours' },
        { label: 'Operator Option', value: 'OSHA Certified' },
        { label: 'Fleet Age', value: '< 24 Months' }
      ],
      valueProps: [
        { icon: 'Truck', title: 'Guaranteed 4-Hour Dispatch', desc: 'Direct site mobilization on flatbeds with fuel full and inspected daily.' },
        { icon: 'ShieldCheck', title: 'Zero Maintenance Liability', desc: 'Full mechanical breakdown support with on-site technician response within 90 mins.' },
        { icon: 'Sparkles', title: 'Operator Included Options', desc: 'Add experienced, insured operators to accelerate your earthmoving project.' }
      ]
    },
    categories: ['All', 'Mini & Midi Excavators', 'Heavy Excavators (20T+)', 'Skid Steer & Track Loaders', 'Compaction Rollers', 'Boom & Scissor Lifts'],
    filterOptions: {
      categoryLabel: 'Rental Class',
      subFilterLabel: 'Hire Term Tier',
      subFilterOptions: ['All', 'Daily Hire', 'Weekly Discount (15% off)', 'Monthly Project Hire'],
      priceRange: [180, 1850]
    },
    products: [
      {
        id: 'rent-01',
        shopId: 'machinery-rentals',
        name: 'CAT 320 Hydraulic Excavator (22-Ton)',
        subTitle: 'Daily & Weekly Hire • Grade Assist & 1.3 m³ Bucket',
        tagLine: 'Heavy commercial excavator rental for deep utilities, basement digs & demolition',
        price: 850,
        pricingUnit: 'per day',
        category: 'Heavy Excavators (20T+)',
        subCategory: 'Daily Hire',
        rating: 4.9,
        reviewCount: 42,
        images: [
          'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Industry-standard 22-ton excavator equipped with CAT Payload scale system to prevent truck overloading and automatic 2D grade assist. Available dry (machine only) or wet (with union operator).',
        details: [
          'Daily Rate: $850/day • Weekly Rate: $3,600/week (Save 40%)',
          'Includes hydraulic thumb and digging bucket with clean-up grading edge',
          'Delivered on lowboy trailer with full 350L fuel tank (refuel charges apply if returned empty)'
        ],
        specifications: {
          'Daily Hire Rate': '$850 / day (8 engine hours)',
          'Weekly Rate': '$3,600 / week (40 engine hours)',
          'Operating Weight': '22,500 kg',
          'Max Digging Depth': '6.72 m',
          'Delivery Fee': '$250 flat site transport (within 50 miles)'
        },
        optionsLabel: 'Choose Rental Operator & Insurance',
        options: [
          { id: 'dry-hire', label: 'Dry Hire (Machine Only - You Supply Operator)', priceModifier: 0, inStock: true },
          { id: 'with-operator', label: '+ Certified OSHA Operator ($350/day)', priceModifier: 350, inStock: true },
          { id: 'damage-waiver', label: '+ Comprehensive Damage Waiver Insurance ($95/day)', priceModifier: 95, inStock: true }
        ],
        isBestseller: true,
        inStock: true,
        extraMeta: {
          dailyRate: 850,
          weeklyRate: 3600,
          operatorDailyRate: 350
        }
      },
      {
        id: 'rent-02',
        shopId: 'machinery-rentals',
        name: 'Bobcat T770 Compact Track Loader (Skid Steer)',
        subTitle: 'High-Flow Hydraulics • 92 HP • Rubber Tracks',
        tagLine: 'Extreme traction across soft mud, sandy soil, and landscaping sites',
        price: 395,
        pricingUnit: 'per day',
        category: 'Skid Steer & Track Loaders',
        subCategory: 'Daily Hire',
        rating: 5.0,
        reviewCount: 57,
        images: [
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Powerful rubber-tracked skid steer with enclosed heated/cooled cab. Features high-flow auxiliary hydraulics capable of driving heavy hydraulic brush cutters, trenchers, and augers.',
        details: [
          'Rated operating capacity: 3,475 lbs (1,575 kg)',
          'Non-marking turf rubber tracks protect asphalt and manicured grass',
          'Includes 84" heavy-duty material bucket'
        ],
        specifications: {
          'Daily Hire Rate': '$395 / day',
          'Weekly Rate': '$1,550 / week',
          'Rated Operating Capacity': '1,575 kg',
          'Engine': 'Tier 4 Turbocharged Diesel 92 HP'
        },
        options: [
          { id: 'dry-skid', label: 'Standard Bucket (Dry Hire)', priceModifier: 0, inStock: true },
          { id: 'hydraulic-breaker', label: '+ Hydraulic Breaker Hammer Attachment (+$120/day)', priceModifier: 120, inStock: true },
          { id: 'operator-skid', label: '+ Experienced Skid Steer Operator (+$280/day)', priceModifier: 280, inStock: true }
        ],
        inStock: true,
        extraMeta: {
          dailyRate: 395,
          weeklyRate: 1550,
          operatorDailyRate: 280
        }
      },
      {
        id: 'rent-03',
        shopId: 'machinery-rentals',
        name: 'Kubota KX040-4 Mini Excavator (4.2-Ton)',
        subTitle: 'Angle Blade • Zero Tail Swing • Rubber Tracks',
        tagLine: 'Compact excavator for tight residential yards, plumbing trenches & footings',
        price: 295,
        pricingUnit: 'per day',
        category: 'Mini & Midi Excavators',
        subCategory: 'Daily Hire',
        rating: 4.9,
        reviewCount: 68,
        images: [
          'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Compact enough to fit through standard gates and tight side alleys while offering serious 4.2-ton breakout power. The hydraulic 6-way angle blade speeds up backfilling trenches in half the passes.',
        details: [
          'Digging depth: 3.42 meters (11.2 ft)',
          'Zero tail swing prevents striking adjacent fences or building walls',
          'Easy towing on standard tandem axle equipment trailer'
        ],
        specifications: {
          'Daily Rate': '$295 / day',
          'Weekly Rate': '$1,150 / week',
          'Operating Weight': '4,200 kg (9,260 lbs)',
          'Bucket Included': '18" Tooth Bucket + 36" Cleanout'
        },
        options: [
          { id: 'dry-mini', label: 'Dry Hire Machine with 2 Buckets', priceModifier: 0, inStock: true },
          { id: 'mini-operator', label: '+ Mini Ex Operator (+$250/day)', priceModifier: 250, inStock: true }
        ],
        inStock: true,
        extraMeta: {
          dailyRate: 295,
          weeklyRate: 1150,
          operatorDailyRate: 250
        }
      },
      {
        id: 'rent-04',
        shopId: 'machinery-rentals',
        name: 'JLG 600AJ Articulating 60ft Rough Terrain Boom Lift',
        subTitle: '60ft Working Height • 4WD Diesel • 500 lb Platform Capacity',
        tagLine: 'High-reach access for structural roofing, painting, welding & tree trimming',
        price: 450,
        pricingUnit: 'per day',
        category: 'Boom & Scissor Lifts',
        subCategory: 'Daily Hire',
        rating: 4.8,
        reviewCount: 29,
        images: [
          'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Reaches up and over jobsite obstacles with a 6-foot articulating jib. Features rough-terrain foam-filled lug tires and oscillating axle for muddy construction grounds.',
        details: [
          'Platform Height: 60 ft 7 in (18.47 m) / Horizontal Outreach: 39 ft 9 in',
          '110V-AC power receptacle in platform with generator feed',
          'Driveable at full elevated working height'
        ],
        specifications: {
          'Daily Rate': '$450 / day',
          'Weekly Rate': '$1,650 / week',
          'Max Platform Height': '18.47 meters',
          'Drive Type': '4WD Diesel'
        },
        options: [
          { id: 'std-lift', label: 'Standard 60ft Boom Lift', priceModifier: 0, inStock: true },
          { id: 'onboard-gen', label: '+ Onboard 7500W Welder/Generator Package (+$60/day)', priceModifier: 60, inStock: true }
        ],
        inStock: true,
        extraMeta: {
          dailyRate: 450,
          weeklyRate: 1650
        }
      }
    ]
  },

  // 6. SANCTUARY STAYS (Airbnb / Boutique Room & Villa Rental)
  {
    id: 'room-rentals',
    name: 'SANCTUARY STAYS',
    shortName: 'Boutique Stays',
    tagline: 'Architectural Villas, Coastal Havens & Historic Retreats',
    categoryLabel: 'Property Type',
    businessModel: 'booking-stay',
    iconName: 'Home',
    theme: {
      primaryColor: '#0F766E', // Refined Coastal Teal
      primaryHover: '#0D625C',
      accentBg: '#F0FDFA',
      heroBgGradient: 'from-[#F0FDF4] via-[#F0FDFA] to-[#E0F2FE]',
      badgeBg: '#134E4A',
      badgeText: '#FFFFFF',
      cardBorder: '#CCFBF1',
      fontFamily: 'serif',
      headingClass: 'font-serif tracking-tight text-teal-950',
      subheadingClass: 'font-sans tracking-[0.25em] uppercase text-xs text-teal-700 font-semibold',
      accentIconColor: '#0F766E',
      headerBrandLogo: 'SANCTUARY STAYS',
      headerSubtitle: 'Curated Boutique Stays & Architectural Villas • Verified Hosts',
      heroEyebrow: 'Exclusive Retreat Escapes',
      heroTitle: 'Architectural Villas &',
      heroTitleHighlight: 'Private Stays',
      heroDescription: 'From cliffside Mediterranean sanctuaries to Kyoto cedar wood machiyas. Every stay is inspected for exceptional design, 500-thread Egyptian linens, and private chef amenities.',
      heroCtaPrimary: 'Discover Stays',
      heroCtaSecondary: 'Host Your Property',
      heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'Superhost Rating', value: '4.97 ★' },
        { label: 'Verified Stays', value: '100% Curated' },
        { label: 'Self Check-In', value: 'Keyless Smart' }
      ],
      valueProps: [
        { icon: 'ShieldCheck', title: 'Sanctuary Verification', desc: 'Every villa inspected for acoustic privacy, high-speed Wi-Fi, and luxury bedding.' },
        { icon: 'Sparkles', title: 'Concierge & Chef Services', desc: 'Book private airport yacht transfers, in-villa sommeliers, and grocery pre-stocking.' },
        { icon: 'Truck', title: 'Flexible Free Cancellation', desc: 'Cancel up to 14 days before check-in for a 100% full refund with zero fees.' }
      ]
    },
    categories: ['All', 'Cliffside Coastal Villas', 'Historic City Mansions', 'Alpine Design Chalets', 'Desert Glass Sanctuaries', 'Island Hideaways'],
    filterOptions: {
      categoryLabel: 'Stay Destination',
      subFilterLabel: 'Guest Capacity',
      subFilterOptions: ['All', 'Couples (1-2 Guests)', 'Small Family (3-5 Guests)', 'Grand Group (6-12 Guests)', 'Pet Welcomed'],
      priceRange: [180, 1450]
    },
    products: [
      {
        id: 'stay-01',
        shopId: 'room-rentals',
        name: 'Villa Terrazza Azure • Cliffside Infinity Pool',
        subTitle: 'Amalfi Coast, Italy • 4 Bedrooms • 4.5 Baths',
        tagLine: 'Private cliffhanging limestone villa with panoramic Mediterranean sunsets',
        price: 680,
        originalPrice: 820,
        pricingUnit: 'per night',
        category: 'Cliffside Coastal Villas',
        subCategory: 'Grand Group (6-12 Guests)',
        rating: 4.98,
        reviewCount: 94,
        images: [
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Carved directly into the limestone cliffs of Positano, this breathtaking villa features 300-degree sea vistas, a heated saltwater infinity pool, private lemon grove gardens, and a commercial outdoor pizza oven.',
        details: [
          'Accommodates up to 8 guests across 4 master king suites with private en-suites',
          'Direct staircase access to private secluded rocky swimming cove below',
          'Complimentary daily Italian breakfast prepared by in-villa house chef',
          'Starlink 350 Mbps high-speed Wi-Fi, Sonos sound system in every room',
          'Secure gated private parking for 2 vehicles'
        ],
        specifications: {
          'Location': 'Positano, Amalfi Coast, Italy',
          'Property Size': '420 m² (4,500 sq ft)',
          'Bedrooms': '4 King Suites',
          'Bathrooms': '4.5 Luxury Marble Baths',
          'Pool': 'Heated Saltwater Infinity Pool',
          'Check-in': '3:00 PM • Keyless Smart Lock'
        },
        optionsLabel: 'Select Villa Add-On Services',
        options: [
          { id: 'standard-stay', label: 'Standard Villa Reservation', priceModifier: 0, inStock: true },
          { id: 'private-chef', label: '+ Private 4-Course Seafood Chef Dinner ($140/guest)', priceModifier: 140, inStock: true },
          { id: 'yacht-day', label: '+ Private Capri Sunset Yacht Excursion ($650)', priceModifier: 650, inStock: true }
        ],
        isBestseller: true,
        inStock: true,
        extraMeta: {
          location: 'Positano, Italy',
          maxGuests: 8,
          bedrooms: 4,
          beds: 4,
          baths: 4.5,
          cleaningFee: 150,
          hostName: 'Giulia & Matteo (Superhost 7 yrs)',
          hostBadge: 'Top 1% Global Stay',
          amenities: ['Heated Infinity Pool', 'Sea View', 'Chef Kitchen', 'Fast Wi-Fi', 'Free Parking', 'Air Conditioning', 'Espresso Bar']
        }
      },
      {
        id: 'stay-02',
        shopId: 'room-rentals',
        name: 'The Kyoto Cedar Machiya & Zen Garden',
        subTitle: 'Gion District, Kyoto, Japan • 2 Bedrooms • 2 Baths',
        tagLine: 'Restored 120-year-old traditional townhouse with private hinoki cypress onsen bath',
        price: 340,
        originalPrice: 395,
        pricingUnit: 'per night',
        category: 'Historic City Mansions',
        subCategory: 'Small Family (3-5 Guests)',
        rating: 4.99,
        reviewCount: 142,
        images: [
          'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'An architectural sanctuary balancing authentic Japanese shoji craftsmanship with modern underfloor radiant heating and Western luxury mattresses. Overlooks an illuminated moss garden with bamboo fountain.',
        details: [
          'Fragrant Hinoki wood soaking tub overlooking private illuminated moss rock garden',
          'Tatami tea room with complimentary ceremonial Uji matcha set',
          'Steps from historic Shirakawa canal and historic temple gates'
        ],
        specifications: {
          'Location': 'Gion, Kyoto, Japan',
          'Property Size': '110 m²',
          'Bedrooms': '2 (1 King Bed + 2 Authentic Futons)',
          'Bathrooms': '2 Full Baths with Hinoki Cedar Onsen Tub',
          'Capacity': 'Up to 4 Guests'
        },
        optionsLabel: 'Tea & Cultural Package',
        options: [
          { id: 'stay-only', label: 'Machiya Stay Only', priceModifier: 0, inStock: true },
          { id: 'tea-ceremony', label: '+ Private In-House Tea Master Ceremony ($90)', priceModifier: 90, inStock: true }
        ],
        isNewArrival: true,
        inStock: true,
        extraMeta: {
          location: 'Kyoto, Japan',
          maxGuests: 4,
          bedrooms: 2,
          beds: 3,
          baths: 2,
          cleaningFee: 80,
          hostName: 'Kenzo (Superhost)',
          amenities: ['Hinoki Wood Bath', 'Private Zen Garden', 'Tatami Room', 'Radiant Heated Floors', 'High-Speed Wi-Fi']
        }
      },
      {
        id: 'stay-03',
        shopId: 'room-rentals',
        name: 'The Glass Monolith Chalet • Alpine Panorama',
        subTitle: 'Zermatt, Switzerland • 3 Bedrooms • 3 Baths • Matterhorn View',
        tagLine: 'Floor-to-ceiling glass alpine chalet with outdoor cedar hot tub & fireplace',
        price: 890,
        pricingUnit: 'per night',
        category: 'Alpine Design Chalets',
        subCategory: 'Grand Group (6-12 Guests)',
        rating: 5.0,
        reviewCount: 67,
        images: [
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Ski-in / ski-out luxury chalet featuring a suspended black steel fireplace, Finnish pine sauna, and private heated outdoor jacuzzi gazing directly at the Matterhorn peak.',
        details: [
          'Direct ski slope access to Sunnegga express lift',
          'Custom oak wine cellar stocked with local Swiss Valais vintages',
          'Heated boot room with ski tuning workbench'
        ],
        specifications: {
          'Location': 'Zermatt, Swiss Alps',
          'Capacity': '6 Guests',
          'Bedrooms': '3 King Suites',
          'Amenities': 'Outdoor Hot Tub, Private Sauna, Suspended Fireplace'
        },
        options: [
          { id: 'chalet-base', label: 'Chalet Reservation', priceModifier: 0, inStock: true },
          { id: 'ski-passes', label: '+ 3-Day International Zermatt Ski Passes ($280/person)', priceModifier: 280, inStock: true }
        ],
        inStock: true,
        extraMeta: {
          location: 'Zermatt, Switzerland',
          maxGuests: 6,
          bedrooms: 3,
          beds: 3,
          baths: 3,
          cleaningFee: 180,
          amenities: ['Ski-In/Ski-Out', 'Matterhorn View', 'Outdoor Hot Tub', 'Finnish Sauna', 'Fireplace']
        }
      },
      {
        id: 'stay-04',
        shopId: 'room-rentals',
        name: 'The Joshua Tree Mirrored Glass Pavilion',
        subTitle: 'Joshua Tree, California • 1 Bedroom • 1 Bath Desert Loft',
        tagLine: 'Mirrored exterior architectural icon reflecting desert boulders and dark starlit skies',
        price: 460,
        pricingUnit: 'per night',
        category: 'Desert Glass Sanctuaries',
        subCategory: 'Couples (1-2 Guests)',
        rating: 4.96,
        reviewCount: 178,
        images: [
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Set on 20 private desert acres. Features a 100-foot indoor swimming pool running through the open-plan living pavilion, stargazing skylights, and zero light pollution.',
        details: [
          'Architectural masterpiece featured in Architectural Digest',
          'Equipped with solar power and deep well artisan spring water'
        ],
        specifications: {
          'Location': 'Joshua Tree, CA',
          'Land': '20 Private Acres',
          'Capacity': '2 Guests (Couples Retreat)'
        },
        options: [
          { id: 'pavilion-stay', label: 'Standard Desert Stay', priceModifier: 0, inStock: true }
        ],
        inStock: true,
        extraMeta: {
          location: 'Joshua Tree, CA',
          maxGuests: 2,
          bedrooms: 1,
          beds: 1,
          baths: 1,
          cleaningFee: 120,
          amenities: ['Indoor Pool', 'Desert Views', 'Stargazing Telescope', 'Firepit', 'Starlink Wi-Fi']
        }
      }
    ]
  },

  // 7. GALERIE ÉLYSÉE (Paintings, Fine Art & Sculptures)
  {
    id: 'paintings-art',
    name: 'GALERIE ÉLYSÉE',
    shortName: 'Fine Art Gallery',
    tagline: 'Original Oil Paintings, Sculptures & Museum Archival Editions',
    categoryLabel: 'Art Medium',
    businessModel: 'art-gallery',
    iconName: 'Palette',
    theme: {
      primaryColor: '#6B21A8', // Gallery Deep Velvet Purple
      primaryHover: '#581C87',
      accentBg: '#FAF5FF',
      heroBgGradient: 'from-[#FAF5FF] via-[#F3E8FF] to-[#E9D5FF]',
      badgeBg: '#3B0764',
      badgeText: '#FAF5FF',
      cardBorder: '#E9D5FF',
      fontFamily: 'serif',
      headingClass: 'font-serif tracking-tight text-purple-950',
      subheadingClass: 'font-sans tracking-[0.25em] uppercase text-xs text-purple-800 font-semibold',
      accentIconColor: '#6B21A8',
      headerBrandLogo: 'GALERIE ÉLYSÉE',
      headerSubtitle: 'Contemporary Fine Art & Original Oils • Paris & New York',
      heroEyebrow: 'Spring Salon Exhibition',
      heroTitle: 'Original Oil Paintings &',
      heroTitleHighlight: 'Curated Sculptures',
      heroDescription: '1-of-1 original fine art canvases and signed limited editions. Delivered in museum-grade timber art crates with verified Certificates of Authenticity signed by the artist.',
      heroCtaPrimary: 'Explore Originals',
      heroCtaSecondary: 'Exhibition Catalog',
      heroImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'Authenticity Guarantee', value: '100% Verified' },
        { label: 'Archival Canvas Pigment', value: '150+ Years' },
        { label: 'Museum Framing', value: 'Solid Hardwood' }
      ],
      valueProps: [
        { icon: 'ShieldCheck', title: 'Certificate of Authenticity', desc: 'Includes signed and stamped gallery deed of provenance registered in international art registry.' },
        { icon: 'Sparkles', title: 'Custom Floating Frames', desc: 'Museum-grade American Walnut and gilded gold floating frames crafted by master framers.' },
        { icon: 'Truck', title: 'Insured Art Crate Shipping', desc: 'Secured in climate-resistant, shock-isolated timber crates with full value transit insurance.' }
      ]
    },
    categories: ['All', 'Original Oil on Canvas', 'Abstract Acrylics', 'Bronze & Marble Sculptures', 'Limited Archival Prints', 'Textured Mixed Media'],
    filterOptions: {
      categoryLabel: 'Exhibition Medium',
      subFilterLabel: 'Canvas Format',
      subFilterOptions: ['All', 'Large Statement (40" x 60"+)', 'Medium Canvas (24" x 36")', 'Small Salon (12" x 16")', 'Sculptural 3D'],
      priceRange: [180, 4800]
    },
    products: [
      {
        id: 'art-01',
        shopId: 'paintings-art',
        name: 'The Golden Hour on the Seine • Original Oil',
        subTitle: 'By Claire Delacroix (2025) • Oil on Linen Canvas',
        tagLine: 'Luminous impressionistic Parisian river twilight with thick impasto brushwork',
        price: 2400,
        originalPrice: 2800,
        pricingUnit: 'original 1-of-1',
        category: 'Original Oil on Canvas',
        subCategory: 'Large Statement (40" x 60"+)',
        rating: 5.0,
        reviewCount: 16,
        images: [
          'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'An evocative original masterpiece capturing the amber reflections of Parisian streetlamps on misted river waters. Claire Delacroix builds layers of pure Dutch oil pigment with palette knife impasto, yielding depth that shifts dynamically with room lighting.',
        details: [
          'Unique 1-of-1 Original Artwork (Signed & dated on lower right canvas and verso)',
          'Dimensions: 48 × 36 inches (122 × 91.5 cm)',
          'Heavyweight 450 gsm Belgian primed linen stretched over kiln-dried pine chassis',
          'Varnished with non-yellowing satin Dammar archival protective coating'
        ],
        specifications: {
          'Artist': 'Claire Delacroix (b. 1984, Lyon)',
          'Medium': 'Oil on Belgian Linen',
          'Dimensions': '48" H × 36" W × 1.5" D',
          'Year': '2025',
          'Provenance': 'Direct from Artist Studio via Galerie Élysée'
        },
        optionsLabel: 'Select Custom Framing',
        options: [
          { id: 'raw-canvas', label: 'Unframed Stretched Gallery Wrap (Ready to Hang)', priceModifier: 0, inStock: true },
          { id: 'walnut-frame', label: '+ Custom Solid American Walnut Floating Frame', priceModifier: 280, inStock: true },
          { id: 'gold-leaf-frame', label: '+ Hand-Gilded 22k Gold Leaf Floating Frame', priceModifier: 420, inStock: true }
        ],
        isBestseller: true,
        inStock: true,
        extraMeta: {
          artist: 'Claire Delacroix',
          dimensions: '48 × 36 in',
          medium: 'Oil on Belgian Linen',
          year: '2025',
          certificateOfAuthenticity: true
        }
      },
      {
        id: 'art-02',
        shopId: 'paintings-art',
        name: 'The Monolith in Cobalt & Ochre • Abstract Canvas',
        subTitle: 'By Marcus Vane • Acrylic & Sand on Heavy Raw Canvas',
        tagLine: 'Architectural minimalist abstraction with tactile volcanic sand texturing',
        price: 1850,
        pricingUnit: 'original artwork',
        category: 'Abstract Acrylics',
        subCategory: 'Large Statement (40" x 60"+)',
        rating: 4.9,
        reviewCount: 11,
        images: [
          'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Deep Yves Klein cobalt fields contrasted against raw earthen ochre textures. Marcus Vane incorporates fine volcanic pumice sand into the polymer emulsion to create a monolithic presence.',
        details: [
          '54 × 42 inches (137 × 106 cm)',
          'Heavy textured relief surface up to 12mm depth',
          'Signed on reverse with gallery seal'
        ],
        specifications: {
          'Artist': 'Marcus Vane (New York)',
          'Medium': 'Acrylic, Pumice Sand & Mineral Pigment on Raw Canvas',
          'Dimensions': '54" × 42"'
        },
        options: [
          { id: 'unframed', label: 'Gallery Canvas Wrap', priceModifier: 0, inStock: true },
          { id: 'black-oak', label: '+ Matte Black Ebonized Oak Floating Frame', priceModifier: 240, inStock: true }
        ],
        inStock: true,
        extraMeta: {
          artist: 'Marcus Vane',
          dimensions: '54 × 42 in',
          medium: 'Acrylic on Canvas',
          certificateOfAuthenticity: true
        }
      },
      {
        id: 'art-03',
        shopId: 'paintings-art',
        name: 'Torso of the Dawn • Cast Bronze Sculpture',
        subTitle: 'By Elena Rostova • Lost-Wax Cast Bronze • Edition of 8',
        tagLine: 'Fluid neoclassical female torso with hand-rubbed verdigris patina',
        price: 3200,
        pricingUnit: 'bronze edition',
        category: 'Bronze & Marble Sculptures',
        subCategory: 'Sculptural 3D',
        rating: 5.0,
        reviewCount: 7,
        images: [
          'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Cast in a foundry in Pietrasanta, Italy using traditional lost-wax methods. Mounted on a solid honed Nero Marquina black marble plinth.',
        details: [
          'Numbered Edition 3 of 8 (Stamped with foundry mark and artist cipher)',
          'Total height: 22 inches (56 cm) including marble base / Weight: 14.5 kg'
        ],
        specifications: {
          'Sculptor': 'Elena Rostova',
          'Material': 'Lost-Wax Bronze & Honed Nero Marquina Marble',
          'Height': '22 inches (56 cm)',
          'Weight': '14.5 kg'
        },
        options: [
          { id: 'edition-3', label: 'Edition #3/8 (Available for immediate dispatch)', priceModifier: 0, inStock: true }
        ],
        inStock: true,
        extraMeta: {
          artist: 'Elena Rostova',
          dimensions: '22" H × 9" W × 8" D',
          medium: 'Cast Bronze & Marble',
          certificateOfAuthenticity: true
        }
      },
      {
        id: 'art-04',
        shopId: 'paintings-art',
        name: 'The Mist Over Montmartre • Archival Giclée Print',
        subTitle: 'Limited Museum Edition of 50 • Signed & Numbered',
        tagLine: 'Hahnemühle 308 gsm 100% cotton rag archival print with deckled edges',
        price: 220,
        pricingUnit: 'museum print',
        category: 'Limited Archival Prints',
        subCategory: 'Medium Canvas (24" x 36")',
        rating: 4.9,
        reviewCount: 34,
        images: [
          'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Ultra-high-resolution 12-color pigment reproduction printed on pure acid-free cotton rag. Rated for 150+ years of lightfastness without color degradation.',
        details: [
          'Hand-deckled edges with embossed gallery seal',
          'Dimensions: 24 × 36 inches (61 × 91 cm)'
        ],
        specifications: {
          'Paper': 'Hahnemühle Photo Rag 308 gsm',
          'Ink': 'UltraChrome PRO 12-Color Pigment',
          'Edition Size': '50 Prints Worldwide'
        },
        options: [
          { id: 'print-only', label: 'Archival Print in Heavy Protective Tube', priceModifier: 0, inStock: true },
          { id: 'framed-acrylic', label: '+ Solid Oak Frame with UV70 Museum Glass', priceModifier: 160, inStock: true }
        ],
        inStock: true,
        extraMeta: {
          artist: 'Claire Delacroix',
          dimensions: '24 × 36 in',
          medium: 'Archival Giclée on Cotton Rag',
          certificateOfAuthenticity: true
        }
      }
    ]
  },

  // 8. MAISON ARCHIVE (Assorted Curated Department Store & Lifestyle Goods)
  {
    id: 'assorted-goods',
    name: 'MAISON ARCHIVE',
    shortName: 'Curated Goods',
    tagline: 'Curated Objects, Leather Goods, Scents & Design Artifacts',
    categoryLabel: 'Curated Department',
    businessModel: 'ecommerce',
    iconName: 'Package',
    theme: {
      primaryColor: '#3F3F46', // Architectural Zinc
      primaryHover: '#27272A',
      accentBg: '#F4F4F5',
      heroBgGradient: 'from-[#FAFAFA] via-[#F4F4F5] to-[#E4E4E7]',
      badgeBg: '#18181B',
      badgeText: '#FAFAFA',
      cardBorder: '#E4E4E7',
      fontFamily: 'sans',
      headingClass: 'font-sans tracking-tight text-zinc-900 font-semibold',
      subheadingClass: 'font-mono tracking-widest uppercase text-xs text-zinc-600',
      accentIconColor: '#3F3F46',
      headerBrandLogo: 'MAISON ARCHIVE',
      headerSubtitle: 'A Curated Department of Objects, Leather & Fragrance • Copenhagen',
      heroEyebrow: 'Curated Selection 08',
      heroTitle: 'Refined Everyday Artifacts &',
      heroTitleHighlight: 'Design Essentials',
      heroDescription: 'From full-grain vegetable-tanned Italian leather weekender bags to cast brass desk instruments and cedarwood incense burners. Thoughtfully designed objects made to age with grace.',
      heroCtaPrimary: 'Explore Archive',
      heroCtaSecondary: 'Design Objects',
      heroImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'Artisan Makers', value: '42 Studios' },
        { label: 'Materials', value: '100% Natural' },
        { label: 'Plastic Free', value: 'Zero Plastic' }
      ],
      valueProps: [
        { icon: 'ShieldCheck', title: 'Lifetime Heirloom Warranty', desc: 'Crafted with traditional saddle-stitching and solid hardware meant to last decades.' },
        { icon: 'Sparkles', title: 'Gift Wrap & Monogramming', desc: 'Complimentary heat-stamped blind monogramming and waxed Japanese tissue wrapping.' },
        { icon: 'Truck', title: 'Carbon-Neutral Delivery', desc: '100% recycled paper packaging and verified carbon offsets on every dispatch.' }
      ]
    },
    categories: ['All', 'Leather Goods & Bags', 'Home Fragrance & Incense', 'Desk Artifacts & Brass', 'Organic Wool Throws', 'Minimalist Lighting'],
    filterOptions: {
      categoryLabel: 'Archive Category',
      subFilterLabel: 'Material Craft',
      subFilterOptions: ['All', 'Full-Grain Vachetta Leather', 'Solid Cast Brass', 'Merino Wool & Cashmere', 'Smoked Glass'],
      priceRange: [38, 560]
    },
    products: [
      {
        id: 'ma-01',
        shopId: 'assorted-goods',
        name: 'The Nomad Vegetable-Tanned Leather Weekender',
        subTitle: 'Hand-Stitched Italian Vachetta Leather Travel Holdall',
        tagLine: 'Heavyweight brass YKK Excella zippers with removable padded shoulder strap',
        price: 460,
        originalPrice: 520,
        pricingUnit: 'piece',
        category: 'Leather Goods & Bags',
        subCategory: 'Full-Grain Vachetta Leather',
        rating: 4.9,
        reviewCount: 52,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Tanned in Tuscany using chestnut and mimosa barks without toxic chromium. Will develop a deep golden caramel patina with age and adventure.',
        details: [
          'Cabin approved luggage size: 52 × 28 × 26 cm (42L volume)',
          'Reinforced base with 6 solid brass protective feet',
          'Dedicated interior padded 16" laptop sleeve and zipped passport organizer'
        ],
        specifications: {
          'Leather': 'Full-Grain Tuscan Vegetable Tanned Vachetta',
          'Hardware': 'Solid Brushed Japanese Brass',
          'Lining': '100% Heavy Cotton Herringbone Twill'
        },
        optionsLabel: 'Select Leather Colorway',
        options: [
          { id: 'cognac', label: 'Cognac Saddle Brown', priceModifier: 0, inStock: true },
          { id: 'obsidian', label: 'Obsidian Black Box Calf', priceModifier: 20, inStock: true },
          { id: 'olive', label: 'Vintage Forest Olive', priceModifier: 20, inStock: true }
        ],
        isBestseller: true,
        inStock: true
      },
      {
        id: 'ma-02',
        shopId: 'assorted-goods',
        name: 'The Haptic Solid Brass Desk Instrument Set',
        subTitle: 'Heavyweight Ruler, Pen Tray & Weighted Tape Dispenser',
        tagLine: 'Precision-milled raw brass desk objects that patina gracefully',
        price: 135,
        pricingUnit: '3-pc set',
        category: 'Desk Artifacts & Brass',
        subCategory: 'Solid Cast Brass',
        rating: 5.0,
        reviewCount: 31,
        images: [
          'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'CNC-machined from solid brass billets with cork acoustic dampeners on the bottom. Weighted to anchor your creative workspace.',
        details: [
          'Includes 30cm Laser-Etched Metric/Imperial Ruler (220g)',
          'Ergonomic scalloped pen tray for fountain pens',
          'Solid 1.2kg tape dispenser for one-handed operation'
        ],
        specifications: {
          'Material': '100% Solid Naval Brass',
          'Finish': 'Untreated Raw Satin (develops natural patina)',
          'Total Weight': '1.8 kg'
        },
        options: [
          { id: 'full-set', label: 'Complete 3-Piece Desk Suite', priceModifier: 0, inStock: true },
          { id: 'tray-only', label: 'Pen Tray Only', priceModifier: -75, inStock: true }
        ],
        inStock: true
      },
      {
        id: 'ma-03',
        shopId: 'assorted-goods',
        name: 'The Hinoki Cedar & Smoked Vetiver Candle',
        subTitle: '100% Organic Soy & Coconut Wax in Hand-Cast Concrete Vessel',
        tagLine: 'Notes of Japanese cypress, smoked birch, black amber & damp forest floor',
        price: 48,
        pricingUnit: '300g candle',
        category: 'Home Fragrance & Incense',
        subCategory: 'Merino Wool & Cashmere',
        rating: 4.8,
        reviewCount: 88,
        images: [
          'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Poured in small batches in Grasse, France. Uses dual FSC-certified crackling wooden wicks that sound like a gentle fireplace.',
        details: [
          '65-hour clean soot-free burn time',
          'Vessel can be repurposed as a succulent planter or desk cup after burning'
        ],
        specifications: {
          'Wax': 'Soy & Coconut Botanical Blend',
          'Fragrance': 'IFRA-certified natural essential oils',
          'Weight': '300 g / 10.5 oz'
        },
        options: [
          { id: 'single', label: 'Single 300g Candle', priceModifier: 0, inStock: true },
          { id: 'trio', label: 'Trio Gift Set (Hinoki + Santal + Fig)', priceModifier: 75, inStock: true }
        ],
        inStock: true
      }
    ]
  },

  // 9. CHRONO LUXE (Fine Swiss Watches & Haute Horlogerie)
  {
    id: 'watches',
    name: 'CHRONO LUXE',
    shortName: 'Swiss Horology',
    tagline: 'Haute Horlogerie, Automatic Chronographs & Complications',
    categoryLabel: 'Movement & Style',
    businessModel: 'ecommerce',
    iconName: 'Watch',
    theme: {
      primaryColor: '#1E3A8A', // Midnight Navy Blue
      primaryHover: '#172554',
      accentBg: '#EFF6FF',
      heroBgGradient: 'from-[#0F172A] via-[#1E293B] to-[#020617]',
      badgeBg: '#1E3A8A',
      badgeText: '#EFF6FF',
      cardBorder: '#CBD5E1',
      fontFamily: 'sans',
      headingClass: 'font-sans tracking-tight text-slate-900 font-bold',
      subheadingClass: 'font-mono tracking-widest uppercase text-xs text-blue-700 font-bold',
      accentIconColor: '#1E3A8A',
      headerBrandLogo: 'CHRONO LUXE',
      headerSubtitle: 'Swiss Haute Horlogerie & Chronometer Atelier • Geneva',
      heroEyebrow: 'Geneva Calibre 2026 Collection',
      heroTitle: 'Precision Complications &',
      heroTitleHighlight: 'Mechanical Artistry',
      heroDescription: 'COSC-certified Swiss chronometers with automatic column-wheel movements, hand-beveled sapphire casebacks, and marine-grade surgical 904L stainless steel.',
      heroCtaPrimary: 'Explore Timepieces',
      heroCtaSecondary: 'Manufacture Story',
      heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'COSC Chronometer', value: '+2/-2 sec/day' },
        { label: 'Power Reserve', value: '72 Hours' },
        { label: 'Water Resistance', value: '300 Meters' }
      ],
      valueProps: [
        { icon: 'ShieldCheck', title: '5-Year International Warranty', desc: 'Full mechanical warranty backed by authorized Swiss service centers globally.' },
        { icon: 'Sparkles', title: 'COSC Certificate Included', desc: 'Each timepiece individually tested for 15 days across 5 positions and 3 temperatures.' },
        { icon: 'Truck', title: 'Armored Vault Courier Delivery', desc: 'Dispatched via signature-required armored transport with real-time GPS tracking.' }
      ]
    },
    categories: ['All', 'Automatic Chronographs', 'Grand Complications & Tourbillons', 'Diver 300M Professional', 'Ultra-Thin Dress Watches', 'GMT Worldtimer'],
    filterOptions: {
      categoryLabel: 'Horology Family',
      subFilterLabel: 'Case Diameter',
      subFilterOptions: ['All', '38mm Classic Dress', '40mm Contemporary', '42mm Sport Chrono', '44mm Deep Diver'],
      priceRange: [1800, 14500]
    },
    products: [
      {
        id: 'watch-01',
        shopId: 'watches',
        name: 'The Nautique Chronometer 300M Diver',
        subTitle: 'Calibre CL-8200 Automatic • 40mm 904L Steel • Sunburst Blue Dial',
        tagLine: 'Professional dive watch with ceramic unidirectional bezel & 72h power reserve',
        price: 3850,
        originalPrice: 4200,
        pricingUnit: 'timepiece',
        category: 'Diver 300M Professional',
        subCategory: '40mm Contemporary',
        rating: 4.98,
        reviewCount: 41,
        images: [
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Engineered for the abyss. Features Grade 5 titanium helium escape valve, Super-LumiNova BGW9 blue luminous markers, double anti-reflective sapphire crystal, and an integrated micro-adjusting diver extension clasp.',
        details: [
          'In-House Calibre CL-8200 Automatic Movement (28,800 vph / 4Hz)',
          '72-Hour Power Reserve with bidirectional rotor winding',
          'Water resistance: 300 meters / 1,000 feet with screw-down crown',
          'Scratchproof mirror-polished zirconium oxide ceramic bezel'
        ],
        specifications: {
          'Case Diameter': '40.0 mm',
          'Thickness': '12.2 mm',
          'Movement': 'Automatic Calibre CL-8200 (COSC Certified)',
          'Glass': 'Domed Sapphire with Anti-Reflective Coating',
          'Bracelet': 'Solid 904L Steel Oyster with Glidelock Clasp'
        },
        optionsLabel: 'Choose Bracelet & Strap Bundle',
        options: [
          { id: 'steel-bracelet', label: 'Solid 904L Brushed Steel Bracelet', priceModifier: 0, inStock: true },
          { id: 'rubber-strap', label: '+ Quick-Release FKM Vulcanized Rubber Dive Strap', priceModifier: 150, inStock: true },
          { id: 'leather-alligator', label: '+ Hand-Stitched Louisiana Alligator Leather Strap', priceModifier: 280, inStock: true }
        ],
        isBestseller: true,
        inStock: true
      },
      {
        id: 'watch-02',
        shopId: 'watches',
        name: 'The Heritage Chronograph Flyback 1948',
        subTitle: 'Column-Wheel Manual Wind • 18k Rose Gold • Lacquered Enamel Dial',
        tagLine: 'Vintage bicompax chronograph with blued steel hands & pulsometer scale',
        price: 7400,
        pricingUnit: 'timepiece',
        category: 'Automatic Chronographs',
        subCategory: '38mm Classic Dress',
        rating: 5.0,
        reviewCount: 22,
        images: [
          'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'A tribute to Golden Era motorsport timing. Features a hand-finished column-wheel flyback mechanism visible through the exhibition caseback.',
        details: [
          'Solid 18k 5N Rose Gold 38.5mm Case',
          'Grand Feu white enamel dial with heat-blued Breguet hands'
        ],
        specifications: {
          'Case': '18k Rose Gold (38.5mm)',
          'Movement': 'Calibre CL-1948 Manual Wind Column Wheel',
          'Power Reserve': '55 Hours'
        },
        options: [
          { id: 'alligator-brown', label: 'Cognac Alligator Leather Strap', priceModifier: 0, inStock: true }
        ],
        inStock: true
      }
    ]
  },

  // 10. TERROIR ARTISAN COFFEE (Specialty Coffee Roasters & Gear)
  {
    id: 'coffee',
    name: 'TERROIR ROASTERS',
    shortName: 'Specialty Coffee',
    tagline: 'Direct-Trade Single Origins, Light Roasts & Pour-Over Gear',
    categoryLabel: 'Coffee Profile',
    businessModel: 'ecommerce',
    iconName: 'Coffee',
    theme: {
      primaryColor: '#92400E', // Rich Amber Espresso
      primaryHover: '#78350F',
      accentBg: '#FFFBEB',
      heroBgGradient: 'from-[#FFFBEB] via-[#FEF3C7] to-[#FDE68A]',
      badgeBg: '#451A03',
      badgeText: '#FFFBEB',
      cardBorder: '#FDE68A',
      fontFamily: 'sans',
      headingClass: 'font-sans tracking-tight text-amber-950 font-bold',
      subheadingClass: 'font-mono tracking-wider uppercase text-xs text-amber-700 font-bold',
      accentIconColor: '#92400E',
      headerBrandLogo: 'TERROIR COFFEE',
      headerSubtitle: 'Artisan Micro-Roastery & Direct-Trade Single Origins • Melbourne',
      heroEyebrow: 'Fresh Weekly Roast Batches',
      heroTitle: 'Micro-Lot Single Origins &',
      heroTitleHighlight: 'Precision Roasts',
      heroDescription: 'Sourced directly from high-elevation farm cooperatives in Ethiopia, Panama, and Colombia. Light Nordic roast curves roasted weekly to preserve floral aromatics and fruit acidity.',
      heroCtaPrimary: 'Explore Roasts',
      heroCtaSecondary: 'Brewing Guides',
      heroImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'Cupping Score', value: '88+ SCA' },
        { label: 'Roast Freshness', value: '< 48 Hours' },
        { label: 'Farmer Premium', value: '+140% Fair Trade' }
      ],
      valueProps: [
        { icon: 'ShieldCheck', title: 'Roasted Fresh to Order', desc: 'Stamped with exact roast date, roaster signature, and farm elevation details.' },
        { icon: 'Sparkles', title: 'Direct-Trade Transparency', desc: '100% farm gate price transparency ensuring sustainable farming livelihoods.' },
        { icon: 'Truck', title: 'Aromaseal Nitrogen Valve', desc: 'Recyclable aluminum-free pouches with one-way degas valves locking in crema.' }
      ]
    },
    categories: ['All', 'Single-Origin Geisha & Rare', 'Espresso Blends', 'Filter & Pour-Over Lots', 'Cold Brew & Concentrates', 'Barista Precision Gear'],
    filterOptions: {
      categoryLabel: 'Origin & Roast',
      subFilterLabel: 'Roast Profile',
      subFilterOptions: ['All', 'Light Nordic Roast', 'Medium Caramel Roast', 'Natural Process (Fruity)', 'Washed Process (Clean)'],
      priceRange: [18, 140]
    },
    products: [
      {
        id: 'cof-01',
        shopId: 'coffee',
        name: 'Panama Boquete Geisha • Natural Lot #4',
        subTitle: 'Hacienda La Esmeralda • Elevation 1,850m • SCA 92.5',
        tagLine: 'Explosive jasmine florals, bergamot tea, white peach & Meyer lemon sweetness',
        price: 48,
        originalPrice: 55,
        pricingUnit: '250g tin',
        category: 'Single-Origin Geisha & Rare',
        subCategory: 'Light Nordic Roast',
        rating: 5.0,
        reviewCount: 68,
        images: [
          'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'The pinnacle of specialty coffee. Hand-picked on the volcanic slopes of Volcán Barú in Boquete. Slowly dried on raised African beds for 28 days to concentrate intense stone fruit and floral aromatics.',
        details: [
          'Cupping Notes: Jasmine Flower, Bergamot, White Nectarine, Honeycomb',
          'Varietal: 100% Green Tip Geisha (Natural Anaerobic Process)',
          'Roasted light on Loring S35 Kestrel convection roaster for clean filter clarity'
        ],
        specifications: {
          'Origin': 'Boquete, Chiriquí, Panama',
          'Altitude': '1,800 - 1,950 MASL',
          'Process': 'Slow Natural on Raised Beds',
          'Roast Level': 'Light Filter Roast'
        },
        optionsLabel: 'Choose Grind Selection',
        options: [
          { id: 'whole-bean', label: 'Whole Bean (Recommended for Freshness)', priceModifier: 0, inStock: true },
          { id: 'grind-pourover', label: 'Medium-Fine Grind (V60 / Chemex / Kalita)', priceModifier: 0, inStock: true },
          { id: 'grind-espresso', label: 'Fine Grind (Espresso Machine)', priceModifier: 0, inStock: true }
        ],
        isBestseller: true,
        inStock: true,
        extraMeta: {
          roastLevel: 'Light',
          origin: 'Panama Boquete',
          flavorNotes: ['Jasmine Florals', 'Bergamot', 'White Peach', 'Honey']
        }
      },
      {
        id: 'cof-02',
        shopId: 'coffee',
        name: 'Ethiopia Yirgacheffe Chelchele • Washed',
        subTitle: 'Gedeo Zone • Elevation 2,100m • Heirloom Varietals',
        tagLine: 'Vibrant Earl Grey tea notes, Meyer lemon candy, and silky lemongrass finish',
        price: 24,
        pricingUnit: '250g bag',
        category: 'Filter & Pour-Over Lots',
        subCategory: 'Washed Process (Clean)',
        rating: 4.9,
        reviewCount: 94,
        images: [
          'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Classic, crisp Yirgacheffe washed lot with pristine clarity. Washed in mountain spring water and dried under shade cloths.',
        details: [
          'Notes of candied lemon peel, lavender, and sparkling black tea',
          'Ideal for morning V60 or iced Japanese flash brew'
        ],
        specifications: {
          'Origin': 'Gedeo Zone, Yirgacheffe, Ethiopia',
          'Altitude': '2,000 - 2,200 MASL',
          'Process': 'Fully Washed'
        },
        options: [
          { id: 'bag-250', label: '250g Bag', priceModifier: 0, inStock: true },
          { id: 'bag-1kg', label: '1kg Bulk Barista Bag (Save 20%)', priceModifier: 52, inStock: true }
        ],
        inStock: true
      }
    ]
  },

  // 11. VALVE & ACOUSTICS (Audiophile Sound, Tube Amps & Hi-Fi)
  {
    id: 'audiophile',
    name: 'VALVE & SOUND',
    shortName: 'Audiophile Hi-Fi',
    tagline: 'Vacuum Tube Amplifiers, Turntables & Reference Planar Audio',
    categoryLabel: 'Audio Component',
    businessModel: 'ecommerce',
    iconName: 'Headphones',
    theme: {
      primaryColor: '#D97706', // Warm Glowing Vacuum Tube Amber
      primaryHover: '#B45309',
      accentBg: '#FFFBEB',
      heroBgGradient: 'from-[#0C0A09] via-[#1C1917] to-[#09090B]',
      badgeBg: '#D97706',
      badgeText: '#0C0A09',
      cardBorder: '#44403C',
      fontFamily: 'mono',
      headingClass: 'font-sans tracking-tight text-zinc-900 font-bold',
      subheadingClass: 'font-mono tracking-widest uppercase text-xs text-amber-500 font-bold',
      accentIconColor: '#D97706',
      headerBrandLogo: 'VALVE & SOUND',
      headerSubtitle: 'Audiophile Vacuum Tube Amplification & Analog Turntables • Berlin',
      heroEyebrow: 'Analog Acoustic Engineering',
      heroTitle: 'Vacuum Tube Warmth &',
      heroTitleHighlight: 'Planar Magnetic Fidelity',
      heroDescription: 'Class-A triode vacuum tube amplifiers, solid walnut belt-drive turntables with carbon fiber tonearms, and open-back planar magnetic studio headphones.',
      heroCtaPrimary: 'Explore Audio Gear',
      heroCtaSecondary: 'Acoustic Lab',
      heroImage: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop',
      stats: [
        { label: 'THD Distortion', value: '< 0.002%' },
        { label: 'Frequency Range', value: '5Hz - 50kHz' },
        { label: 'Tubes Matched', value: 'Within 1%' }
      ],
      valueProps: [
        { icon: 'ShieldCheck', title: 'Precision Hand-Matched Tubes', desc: 'KT88 and 300B triode tubes burned in for 100 hours and matched within 1% curve tolerance.' },
        { icon: 'Sparkles', title: 'Point-to-Point Silver Wiring', desc: 'Zero circuit board compromise. Hand-soldered with audiophile Mundorf silver solder.' },
        { icon: 'Truck', title: 'Flight Case Transport Packaging', desc: 'Shipped in custom shock-absorbing hard-shell aluminum flight cases.' }
      ]
    },
    categories: ['All', 'Tube Amplifiers & Preamps', 'Belt-Drive Vinyl Turntables', 'Planar Magnetic Headphones', 'Floorstanding Monitors', 'Silver Interconnect Cables'],
    filterOptions: {
      categoryLabel: 'Acoustic Component',
      subFilterLabel: 'Amplifier Topology',
      subFilterOptions: ['All', 'Single-Ended Triode (300B)', 'Push-Pull KT88 Class-A', 'Belt-Drive Analog', 'Planar Magnetic Open-Back'],
      priceRange: [320, 4800]
    },
    products: [
      {
        id: 'aud-01',
        shopId: 'audiophile',
        name: 'The Monolith 300B Single-Ended Tube Amplifier',
        subTitle: 'Class-A Pure Triode • 8W + 8W RMS • Hand-Wound Toroidal Transformers',
        tagLine: 'Enchanting holographic soundstage and lush vocal liquidity with zero negative feedback',
        price: 2650,
        originalPrice: 2980,
        pricingUnit: 'amplifier unit',
        category: 'Tube Amplifiers & Preamps',
        subCategory: 'Single-Ended Triode (300B)',
        rating: 5.0,
        reviewCount: 29,
        images: [
          'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'Built around the legendary 300B direct-heated power triodes. Handcrafted chassis milled from a solid 20mm aircraft aluminum billet with solid walnut side cheeks and glowing retro analog VU meters.',
        details: [
          'Tubes: 2 x Matched Psvane 300B + 2 x 6SN7 Driver Tubes + 1 x 5AR4 Tube Rectifier',
          'Point-to-point wiring using 99.999% pure OCC monocrystalline silver wire',
          'ALPS motorized Japanese volume potentiometer with solid milled remote control',
          'Switchable 4-Ohm and 8-Ohm gold-plated binding posts for high-efficiency speakers'
        ],
        specifications: {
          'Topology': 'Class-A Single-Ended Triode',
          'Output Power': '8W + 8W RMS (8 Ohms)',
          'Frequency Response': '10 Hz - 42,000 Hz (±1 dB)',
          'Total Harmonic Distortion': '0.3% @ 1W 1kHz',
          'Weight': '21.5 kg (47.4 lbs)'
        },
        optionsLabel: 'Choose Vacuum Tube Package',
        options: [
          { id: 'standard-tubes', label: 'Matched Psvane Hi-Fi Tubes (Included)', priceModifier: 0, inStock: true },
          { id: 'nos-tubes', label: '+ Premium NOS Western Electric 300B Tube Upgrade', priceModifier: 850, inStock: true }
        ],
        isBestseller: true,
        inStock: true
      },
      {
        id: 'aud-02',
        shopId: 'audiophile',
        name: 'The Artisan Walnut Belt-Drive Turntable',
        subTitle: '9" Carbon Fiber Tonearm • Ortofon 2M Bronze Cartridge • Acrylic Platter',
        tagLine: 'Resonance-free decoupled synchronous motor with electronic 33/45 RPM speed control',
        price: 1450,
        pricingUnit: 'turntable system',
        category: 'Belt-Drive Vinyl Turntables',
        subCategory: 'Belt-Drive Analog',
        rating: 4.9,
        reviewCount: 38,
        images: [
          'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop'
        ],
        description: 'High-mass 30mm frosted acrylic platter floating on inverted ceramic ball bearing. Isolates micro-vibrations to extract every layer of vinyl groove warmth.',
        details: [
          'Solid American Walnut plinth with TPE-damped adjustable aluminum cone feet',
          'Pre-calibrated Ortofon Nude Fine Line diamond stylus'
        ],
        specifications: {
          'Plinth': 'Solid CNC Solid Walnut',
          'Speeds': '33.3 & 45.0 RPM (Electronic Switching)',
          'Wow & Flutter': '< 0.08%'
        },
        options: [
          { id: 'ortofon-bronze', label: 'Ortofon 2M Bronze Cartridge (Factory Mounted)', priceModifier: 0, inStock: true },
          { id: 'ortofon-black', label: '+ Upgrade to Ortofon 2M Black Shibata Stylus', priceModifier: 280, inStock: true }
        ],
        inStock: true
      }
    ]
  }
];
