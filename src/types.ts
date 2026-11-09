export type DressCategory =
  | 'All'
  | 'Evening Gowns'
  | 'Silk & Satin Slips'
  | 'Cocktail & Soirée'
  | 'Gala & Black Tie'
  | 'Resort Elegance'
  | 'Bridal & White Tie';

export type DressSilhouette =
  | 'All'
  | 'Column'
  | 'Mermaid'
  | 'A-Line'
  | 'Bias-Cut Slip'
  | 'Sculptural Drapery'
  | 'Ballgown'
  | 'Architectural Plunge';

export type DressOccasion =
  | 'All'
  | 'Gala & Red Carpet'
  | 'Black-Tie Wedding'
  | 'Cocktail Party'
  | 'Romantic Opera Night'
  | 'Summer Soirée'
  | 'Bespoke Celebration';

export interface DressReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  fitFeedback: 'True to Size' | 'Runs Slightly Small' | 'Runs Slightly Large';
  sizePurchased: string;
}

export interface DressColorOption {
  name: string;
  hex: string;
  label: string;
}

export interface DressProduct {
  id: string;
  name: string;
  frenchTitle: string;
  tagLine: string;
  price: number;
  originalPrice?: number;
  category: DressCategory;
  silhouette: DressSilhouette;
  neckline: string;
  length: string;
  fabric: string;
  fabricOrigin: string;
  occasions: DressOccasion[];
  description: string;
  atelierNotes: string;
  details: string[];
  careInstructions: string;
  images: string[];
  colors: DressColorOption[];
  sizes: Array<{
    size: string;
    inStock: boolean;
    remaining?: number;
  }>;
  modelInfo: {
    height: string;
    wearingSize: string;
    bust: string;
    waist: string;
    hips: string;
  };
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isMadeToOrder?: boolean;
  isLimitedEdition?: boolean;
  reviews: DressReview[];
}

export interface CartItem {
  id: string; // unique item id (productId + color + size)
  product: DressProduct;
  selectedColor: DressColorOption;
  selectedSize: string;
  quantity: number;
  complimentaryGiftPackaging: boolean;
  atelierAlterationNote?: string;
}

export interface FilterState {
  category: DressCategory;
  silhouette: DressSilhouette;
  occasion: DressOccasion;
  color: string;
  priceRange: [number, number];
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating';
  searchQuery: string;
  onlyInStock: boolean;
  onlyMadeToOrder: boolean;
}

export type CurrencyCode = 'USD' | 'EUR' | 'GBP';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number; // multiplier against USD
}

export interface LookbookLook {
  id: string;
  title: string;
  tagline: string;
  image: string;
  location: string;
  featuredProductIds: string[];
}
