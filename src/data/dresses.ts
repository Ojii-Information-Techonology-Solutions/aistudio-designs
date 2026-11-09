import { DressProduct, LookbookLook } from '../types';

export const DRESS_CATALOG: DressProduct[] = [
  {
    id: 'aura-01',
    name: 'The Céline Silk Charmeuse Gown',
    frenchTitle: 'Robe du Soir Céline',
    tagLine: 'Pure 22-Momme Mulberry Silk with a cascading fluid cowl back',
    price: 890,
    originalPrice: 1100,
    category: 'Silk & Satin Slips',
    silhouette: 'Bias-Cut Slip',
    neckline: 'Gentle Bateau Neckline & Low Cowl Back',
    length: 'Floor Length with 20cm Sweep Train',
    fabric: '100% Organic Mulberry Silk Charmeuse (22-Momme)',
    fabricOrigin: 'Como, Italy',
    occasions: ['Gala & Red Carpet', 'Romantic Opera Night', 'Black-Tie Wedding'],
    description:
      'Cut on the true bias to drape seamlessly across the feminine contour, the Céline Gown epitomizes effortless French Riviera sophistication. It features an architectural cowl draped low at the spine and a fluid floor-skimming train that moves like liquid mercury.',
    atelierNotes:
      'Hand-finished by master seamstresses with rolled baby hems and French interior seams. Requires 14 hours of artisanal cut and precision draping.',
    details: [
      'Pure 22-Momme Mulberry Silk with luminous pearlescent sheen',
      'True bias cut ensures fluid drape without clinging',
      'Sculptural low cowl back with internal modesty anchor',
      'Hand-rolled double silk georgette lining for opaque perfection',
      'Concealed Swiss-engineered side zip closure'
    ],
    careInstructions: 'Dry clean only by luxury silk specialist. Cool iron on reverse with pressing cloth.',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Champagne Pearl', hex: '#EADBCE', label: 'Champagne' },
      { name: 'Midnight Noir', hex: '#161618', label: 'Noir' },
      { name: 'Deep Emerald', hex: '#173629', label: 'Emerald' }
    ],
    sizes: [
      { size: 'US 0 (XS)', inStock: true, remaining: 3 },
      { size: 'US 2 (S)', inStock: true },
      { size: 'US 4 (S/M)', inStock: true },
      { size: 'US 6 (M)', inStock: true },
      { size: 'US 8 (L)', inStock: true, remaining: 2 },
      { size: 'US 10 (XL)', inStock: false },
      { size: 'US 12 (Custom Atelier)', inStock: true }
    ],
    modelInfo: {
      height: "5'10\" (178cm)",
      wearingSize: 'US 2 (S)',
      bust: '33" (84cm)',
      waist: '24.5" (62cm)',
      hips: '35.5" (90cm)'
    },
    rating: 4.95,
    reviewCount: 38,
    isBestseller: true,
    isNewArrival: false,
    isMadeToOrder: false,
    reviews: [
      {
        id: 'rev-01',
        author: 'Eleanor Vance',
        location: 'Geneva, Switzerland',
        rating: 5,
        title: 'Wore this to the Vienna Opera Ball — pure perfection',
        comment:
          'The weight of the silk is extraordinary. It feels cooling against the skin and does not crease easily. Received compliments all evening.',
        date: 'October 14, 2025',
        verified: true,
        fitFeedback: 'True to Size',
        sizePurchased: 'US 4'
      },
      {
        id: 'rev-02',
        author: 'Camille Dupont',
        location: 'Paris, France',
        rating: 5,
        title: 'The cowl back is breathtakingly tailored',
        comment:
          'Often backless dresses slip off the shoulder, but the internal anchors keep this perfectly positioned. Worth every cent.',
        date: 'November 2, 2025',
        verified: true,
        fitFeedback: 'True to Size',
        sizePurchased: 'US 2'
      }
    ]
  },
  {
    id: 'aura-02',
    name: 'The Vivienne Sculptural Velvet Column',
    frenchTitle: 'Fourreau de Velours Vivienne',
    tagLine: 'Heavyweight Italian silk velvet with micro-boned corset structure',
    price: 1250,
    category: 'Gala & Black Tie',
    silhouette: 'Column',
    neckline: 'Architectural Sweetheart Off-Shoulder',
    length: 'Floor Length with Subtle Slit',
    fabric: 'Rich Italian Silk Velvet (82% Rayon, 18% Silk)',
    fabricOrigin: 'Florence, Italy',
    occasions: ['Gala & Red Carpet', 'Romantic Opera Night', 'Bespoke Celebration'],
    description:
      'A masterpiece of modern evening tailoring. The Vivienne dress sculpts the torso using internal spiraled boning, while plush Italian silk velvet absorbs and reflects ambient candlelight for an aura of regal poise.',
    atelierNotes:
      'Constructed with an integrated waist stay (grosgrain ribbon corset belt) to distribute the weight of the dense velvet effortlessly.',
    details: [
      'Lustrous Italian silk velvet with deep dimensional pile',
      'Hand-crafted internal corset with 12 flexible steel bones',
      'Folded off-shoulder cuffs with concealed elastic retention',
      'High discreet back-slit lined in silk habotai for graceful walking',
      'Full silk blend breathable lining'
    ],
    careInstructions: 'Specialist dry clean only. Steam with velvet brush from reverse side.',
    images: [
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Obsidian Noir', hex: '#111112', label: 'Noir' },
      { name: 'Royal Bordeaux', hex: '#4A1521', label: 'Bordeaux' },
      { name: 'Imperial Sapphire', hex: '#122038', label: 'Sapphire' }
    ],
    sizes: [
      { size: 'US 0 (XS)', inStock: true },
      { size: 'US 2 (S)', inStock: true, remaining: 1 },
      { size: 'US 4 (S/M)', inStock: true },
      { size: 'US 6 (M)', inStock: true },
      { size: 'US 8 (L)', inStock: false },
      { size: 'US 10 (XL)', inStock: true }
    ],
    modelInfo: {
      height: "5'11\" (180cm)",
      wearingSize: 'US 4 (S/M)',
      bust: '34" (86cm)',
      waist: '25" (64cm)',
      hips: '36" (91cm)'
    },
    rating: 4.98,
    reviewCount: 24,
    isBestseller: false,
    isNewArrival: true,
    isLimitedEdition: true,
    reviews: [
      {
        id: 'rev-03',
        author: 'Julianna K.',
        location: 'New York, USA',
        rating: 5,
        title: 'The corsetry feels like couture fashion house quality',
        comment:
          'Structured yet comfortable enough to sit through a three-hour charity banquet. The Bordeaux shade is luminous under ballroom chandeliers.',
        date: 'January 18, 2026',
        verified: true,
        fitFeedback: 'Runs Slightly Small',
        sizePurchased: 'US 4'
      }
    ]
  },
  {
    id: 'aura-03',
    name: 'The Geneviève Pleated Chiffon Gown',
    frenchTitle: 'Robe Volante Geneviève',
    tagLine: 'Ethereal plissé accordion pleating with floating Grecian capelet',
    price: 940,
    originalPrice: 1080,
    category: 'Evening Gowns',
    silhouette: 'A-Line',
    neckline: 'Deep Plunge Halter with Gold Hardware Ring',
    length: 'Floor Length Flared Hem',
    fabric: 'Hand-Pleated Silk Chiffon with Lurex Micro-Threads',
    fabricOrigin: 'Lyon, France',
    occasions: ['Summer Soirée', 'Black-Tie Wedding', 'Gala & Red Carpet'],
    description:
      'Inspired by antique Hellenic statues, the Geneviève Gown floats with airy ease. Master artisans in Lyon pleat the diaphanous silk chiffon by hand in custom molds to preserve sharp, permanent accordion micro-folds.',
    atelierNotes:
      'Features 18 meters of finely pleated fabric that opens dramatically with every step and breeze.',
    details: [
      'Permanent accordion micro-plissé chiffon with subtle golden luster',
      'Handcrafted brushed 24k gold-plated atelier collar ring',
      'Open cross-back with self-tie silk ribbons',
      'Triple-layered soft nude georgette lining prevents sheer exposure',
      'Hand-stitched reinforced hemline'
    ],
    careInstructions: 'Specialist dry clean only. Store flat or in provided breathable cotton garment bag.',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Champagne Gold', hex: '#DBC39E', label: 'Gold' },
      { name: 'Dusty Rose Petal', hex: '#DCAEB0', label: 'Rose' },
      { name: 'Alabaster Ivory', hex: '#F4EFEA', label: 'Ivory' }
    ],
    sizes: [
      { size: 'US 0 (XS)', inStock: true },
      { size: 'US 2 (S)', inStock: true },
      { size: 'US 4 (S/M)', inStock: true },
      { size: 'US 6 (M)', inStock: true },
      { size: 'US 8 (L)', inStock: true }
    ],
    modelInfo: {
      height: "5'9\" (175cm)",
      wearingSize: 'US 2 (S)',
      bust: '32.5" (83cm)',
      waist: '24" (61cm)',
      hips: '35" (89cm)'
    },
    rating: 4.88,
    reviewCount: 19,
    isBestseller: true,
    isNewArrival: false,
    reviews: [
      {
        id: 'rev-04',
        author: 'Lady Sophia H.',
        location: 'London, UK',
        rating: 5,
        title: 'Light as a cloud yet so commanding',
        comment:
          'Wore this for a garden gala in the Cotswolds. The movement when walking is mesmerizing in photos and in motion.',
        date: 'December 12, 2025',
        verified: true,
        fitFeedback: 'True to Size',
        sizePurchased: 'US 2'
      }
    ]
  },
  {
    id: 'aura-04',
    name: 'The Charlène Backless Mermaid Gown',
    frenchTitle: 'Robe Sirène Charlène',
    tagLine: 'Sculpted double-faced crepe with hand-sewn freshwater pearl strands',
    price: 1480,
    category: 'Gala & Black Tie',
    silhouette: 'Mermaid',
    neckline: 'High Illusion Boatneck & Dramatic Plunge Back',
    length: 'Floor Length with Flared Trumpet Hem',
    fabric: 'Heavyweight Italian Double-Faced Silk Crepe',
    fabricOrigin: 'Milan, Italy',
    occasions: ['Gala & Red Carpet', 'Black-Tie Wedding', 'Bespoke Celebration'],
    description:
      'A study in dramatic contrast: austere high-neck tailoring at the front gives way to a breathtaking low back framed by cascading natural baroque pearl strands that sway gently with every motion.',
    atelierNotes:
      'Each strand features genuine cultivated Japanese Akoya seed pearls and freshwater baroque pearls, individually knotted on silk thread.',
    details: [
      'Heavy stretch double-crepe holds shape and smooths figure',
      'Removable back pearl drape with miniature 18k gold clasps',
      'Hidden internal bra cup support and silicone shoulder grip',
      'Dramatic mermaid trumpet flare with horsehair hemline',
      'Invisible center-back zipper with decorative silk-covered buttons'
    ],
    careInstructions: 'Detach pearl strands prior to specialist dry clean. Store in custom felt jewelry pouch.',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Pure White Tie Ivory', hex: '#FAF7F2', label: 'Ivory' },
      { name: 'Onyx Black', hex: '#141414', label: 'Onyx' },
      { name: 'Scarlet Vermillon', hex: '#9E1C27', label: 'Scarlet' }
    ],
    sizes: [
      { size: 'US 0 (XS)', inStock: true, remaining: 1 },
      { size: 'US 2 (S)', inStock: true },
      { size: 'US 4 (S/M)', inStock: true },
      { size: 'US 6 (M)', inStock: true },
      { size: 'US 8 (L)', inStock: false },
      { size: 'US 10 (XL)', inStock: true }
    ],
    modelInfo: {
      height: "5'10.5\" (179cm)",
      wearingSize: 'US 2 (S)',
      bust: '33" (84cm)',
      waist: '24" (61cm)',
      hips: '36" (91cm)'
    },
    rating: 4.97,
    reviewCount: 42,
    isBestseller: true,
    isMadeToOrder: true,
    reviews: [
      {
        id: 'rev-05',
        author: 'Valerie M.',
        location: 'Monaco',
        rating: 5,
        title: 'The pearls are pure luxury',
        comment:
          'The weight of the crepe creates the most flattering hourglass line without feeling tight. The pearls can be detached for a more minimalist look.',
        date: 'January 28, 2026',
        verified: true,
        fitFeedback: 'True to Size',
        sizePurchased: 'US 2'
      }
    ]
  },
  {
    id: 'aura-05',
    name: 'The Madeleine Cocktail Corset Midi',
    frenchTitle: 'Robe Cocktail Madeleine',
    tagLine: 'Structured French jacquard with sweetheart bustier and pocket detailing',
    price: 760,
    category: 'Cocktail & Soirée',
    silhouette: 'A-Line',
    neckline: 'Sculpted Sweetheart with Detachable Straps',
    length: 'Tea-Length / Midi',
    fabric: 'Bespoke Floral Fil-Coupé Jacquard',
    fabricOrigin: 'Lyon, France',
    occasions: ['Cocktail Party', 'Summer Soirée', 'Romantic Opera Night'],
    description:
      'The quintessential modern cocktail dress. Rich French jacquard woven with subtle metallic threads creates a structured flared skirt with hidden side seam pockets, paired with an impeccably supportive boned bustier.',
    atelierNotes:
      'Features discreet side pockets and convertible straps for strapless or delicate spaghetti-strap styling.',
    details: [
      'Bespoke French jacquard fabric with raised botanical weave',
      'Structural crinoline hem band for voluminous swing',
      'Functional deep side-seam velvet-lined pockets',
      'Internal underwire and silicone non-slip band',
      'Includes detachable matching silk spaghetti straps'
    ],
    careInstructions: 'Dry clean only. Cool iron on reverse with press cloth.',
    images: [
      'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Midnight Botanical Jacquard', hex: '#1A2130', label: 'Midnight' },
      { name: 'Blush Gold Tapestry', hex: '#D6BEB1', label: 'Blush Gold' },
      { name: 'Forest Noir', hex: '#162822', label: 'Forest' }
    ],
    sizes: [
      { size: 'US 0 (XS)', inStock: true },
      { size: 'US 2 (S)', inStock: true },
      { size: 'US 4 (S/M)', inStock: true },
      { size: 'US 6 (M)', inStock: true },
      { size: 'US 8 (L)', inStock: true },
      { size: 'US 10 (XL)', inStock: true }
    ],
    modelInfo: {
      height: "5'9\" (175cm)",
      wearingSize: 'US 2 (S)',
      bust: '33" (84cm)',
      waist: '25" (63cm)',
      hips: '35" (89cm)'
    },
    rating: 4.91,
    reviewCount: 31,
    isBestseller: false,
    isNewArrival: true,
    reviews: [
      {
        id: 'rev-06',
        author: 'Chloe Saint-Clair',
        location: 'Cannes, France',
        rating: 5,
        title: 'And it has pockets! Absolutely sublime',
        comment:
          'The pockets are discreetly built into the pleats so they don’t distort the silhouette. The bodice stays up without any adjusting all night.',
        date: 'February 4, 2026',
        verified: true,
        fitFeedback: 'True to Size',
        sizePurchased: 'US 2'
      }
    ]
  },
  {
    id: 'aura-06',
    name: 'The Isadora Draped Halter Column',
    frenchTitle: 'Fourreau Drapé Isadora',
    tagLine: 'Fluid liquid lamé jersey with molten gold back chain brooch',
    price: 980,
    originalPrice: 1150,
    category: 'Resort Elegance',
    silhouette: 'Column',
    neckline: 'Draped High Cowl Halter',
    length: 'Floor Length with Thigh-High Draped Slit',
    fabric: 'Liquid Silk-Touch Micro-Modal Lamé',
    fabricOrigin: 'Vienna, Austria',
    occasions: ['Summer Soirée', 'Cocktail Party', 'Gala & Red Carpet'],
    description:
      'Evoking vintage studio 54 glamor and modern Mediterranean sunsets, the Isadora cascades around the body in liquid metallic folds. An integrated 24k gold-dipped back chain holds the halter drape with sculptural precision.',
    atelierNotes:
      'Completely wrinkle-resistant and travel-ready; designed for destination galas and yacht soirées.',
    details: [
      'Liquid high-luster jersey with 4-way mechanical stretch',
      'Removable handcrafted gold chain spine accent',
      'Graceful draped side-slit reveals leg when in motion',
      'Built-in smoothing body contour lining',
      'Weighted hem keeps drape perfectly vertical'
    ],
    careInstructions: 'Hand wash cold or gentle specialist dry clean. No iron needed.',
    images: [
      'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Liquid Champagne', hex: '#E0CCA7', label: 'Champagne' },
      { name: 'Bronze Copper', hex: '#8C5E47', label: 'Bronze' },
      { name: 'Gloss Carbon', hex: '#1E1E22', label: 'Carbon' }
    ],
    sizes: [
      { size: 'US 0 (XS)', inStock: true },
      { size: 'US 2 (S)', inStock: true },
      { size: 'US 4 (S/M)', inStock: true },
      { size: 'US 6 (M)', inStock: true },
      { size: 'US 8 (L)', inStock: true }
    ],
    modelInfo: {
      height: "5'10\" (178cm)",
      wearingSize: 'US 2 (S)',
      bust: '33" (84cm)',
      waist: '24.5" (62cm)',
      hips: '35.5" (90cm)'
    },
    rating: 4.93,
    reviewCount: 27,
    isBestseller: true,
    reviews: []
  },
  {
    id: 'aura-07',
    name: 'The Juliette French Lace Ballgown',
    frenchTitle: 'Grand Bal Juliette',
    tagLine: 'Hand-beaded Chantilly lace with grand silk organza sweeping skirt',
    price: 2100,
    category: 'Bridal & White Tie',
    silhouette: 'Ballgown',
    neckline: 'Illusion Off-Shoulder Sweetheart',
    length: 'Floor Length with Royal Cathedral Train',
    fabric: 'Authentic French Chantilly Lace & Mulberry Silk Organza',
    fabricOrigin: 'Calais, France',
    occasions: ['Black-Tie Wedding', 'Bespoke Celebration', 'Gala & Red Carpet'],
    description:
      'The pinnacle of romantic grand couture. Thousands of micro-seed glass beads and iridescent crystals are hand-embroidered onto historic Calais lace, blooming into a grand voluminous organza skirt that commands attention.',
    atelierNotes:
      'Each gown takes 45 hours of hand embroidery in our Paris atelier. Limited to 12 pieces per calendar quarter.',
    details: [
      'Original Calais-Caudry French Chantilly lace',
      'Over 4,000 hand-sewn micro crystals and glass seed beads',
      'Multi-tiered gossamer silk organza and tulle foundation',
      'Master corsetry with satin cord lacing or concealed zipper',
      'Includes complimentary atelier bridal travel trunk'
    ],
    careInstructions: 'Atelier preservation dry clean only. Archival storage box included.',
    images: [
      'https://images.unsplash.com/photo-1546804784-896d0d517245?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Bridal Ivory Mist', hex: '#FAF8F5', label: 'Ivory Mist' },
      { name: 'Vintage Pearl Blush', hex: '#F3E8E2', label: 'Blush Pearl' },
      { name: 'Midnight Ballgown Noir', hex: '#111317', label: 'Ballroom Noir' }
    ],
    sizes: [
      { size: 'US 0 (XS)', inStock: true },
      { size: 'US 2 (S)', inStock: true, remaining: 1 },
      { size: 'US 4 (S/M)', inStock: true },
      { size: 'US 6 (M)', inStock: true },
      { size: 'US 8 (L)', inStock: false },
      { size: 'Custom Bespoke Measurement', inStock: true }
    ],
    modelInfo: {
      height: "5'11\" (180cm)",
      wearingSize: 'US 2 (S)',
      bust: '33" (84cm)',
      waist: '24" (61cm)',
      hips: '35" (89cm)'
    },
    rating: 5.0,
    reviewCount: 15,
    isMadeToOrder: true,
    isLimitedEdition: true,
    reviews: [
      {
        id: 'rev-07',
        author: 'Lady Charlotte W.',
        location: 'Edinburgh, Scotland',
        rating: 5,
        title: 'An heirloom piece to cherish for generations',
        comment:
          'The detail on the lace is breathtaking up close. The volume of the skirt holds its majestic shape without feeling burdensome.',
        date: 'November 29, 2025',
        verified: true,
        fitFeedback: 'True to Size',
        sizePurchased: 'Custom Bespoke'
      }
    ]
  },
  {
    id: 'aura-08',
    name: 'The Seraphina Architectural Plunge Gown',
    frenchTitle: 'Robe Sculpture Seraphina',
    tagLine: 'Crisp Italian silk gazar with structural origami waist drapery',
    price: 1320,
    originalPrice: 1500,
    category: 'Evening Gowns',
    silhouette: 'Architectural Plunge',
    neckline: 'Geometric Wire-Supported Deep V-Plunge',
    length: 'Floor Length with High Center-Front Inverted Pleat',
    fabric: 'Crisp Silk-Wool Gazar',
    fabricOrigin: 'Biella, Italy',
    occasions: ['Gala & Red Carpet', 'Romantic Opera Night', 'Bespoke Celebration'],
    description:
      'Bold, modern minimalism with haute couture architectural rigor. Crafted from structured silk-wool gazar, this gown holds its razor-sharp pleats and geometric neckline while framing the collarbone and decolletage.',
    atelierNotes:
      'The neckline is stabilized with an invisible titanium micro-wire so the plunge maintains its architectural symmetry through dancing and movement.',
    details: [
      'Crisp Italian silk-wool gazar with luminous matte sheen',
      'Patented micro-wire internal neckline stabilization',
      'Origami-inspired fan pleating at the asymmetric waistline',
      'Dual concealed side pockets lined in pure silk crepe',
      'Fully lined in 100% cupro silk touch'
    ],
    careInstructions: 'Specialist dry clean only. Steam using low temperature.',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Monochrome Onyx', hex: '#121214', label: 'Onyx' },
      { name: 'Venetian Crimson', hex: '#801524', label: 'Crimson' },
      { name: 'Champagne Taupe', hex: '#D2C3B4', label: 'Taupe' }
    ],
    sizes: [
      { size: 'US 0 (XS)', inStock: true },
      { size: 'US 2 (S)', inStock: true },
      { size: 'US 4 (S/M)', inStock: true },
      { size: 'US 6 (M)', inStock: true },
      { size: 'US 8 (L)', inStock: true }
    ],
    modelInfo: {
      height: "5'10\" (178cm)",
      wearingSize: 'US 2 (S)',
      bust: '33" (84cm)',
      waist: '24.5" (62cm)',
      hips: '36" (91cm)'
    },
    rating: 4.96,
    reviewCount: 22,
    isBestseller: true,
    reviews: []
  }
];

export const LOOKBOOK_COLLECTIONS: LookbookLook[] = [
  {
    id: 'look-1',
    title: 'Soirée à la Villa Ephrussi',
    tagline: 'Evening gowns designed for Mediterranean sea breezes and midnight galas',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85',
    location: 'Saint-Jean-Cap-Ferrat, French Riviera',
    featuredProductIds: ['aura-01', 'aura-06']
  },
  {
    id: 'look-2',
    title: 'Opéra de Paris: The Midnight Hour',
    tagline: 'Sculptural velvet, dramatic low backs, and heirloom seed pearl embellishments',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1400&q=85',
    location: 'Palais Garnier, Paris',
    featuredProductIds: ['aura-02', 'aura-04']
  },
  {
    id: 'look-3',
    title: 'Grecian Light & Plissé Motion',
    tagline: 'Airy silk chiffon accordion pleats that catch golden hour twilight',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85',
    location: 'Lake Como, Italy',
    featuredProductIds: ['aura-03', 'aura-05', 'aura-08']
  }
];

export const CURRENCY_MAP: Record<string, { symbol: string; rate: number; name: string }> = {
  USD: { symbol: '$', rate: 1, name: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, name: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, name: 'GBP (£)' }
};
