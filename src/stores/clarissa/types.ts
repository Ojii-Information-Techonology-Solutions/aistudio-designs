export type ClarissaCategory =
  | 'All'
  | 'Dinnerware & Plates'
  | 'Crystal Glassware & Goblets'
  | 'Forged Cutlery & Silverware'
  | 'Serving Platters & Bowls'
  | 'Curated Dining Sets';

export interface ClarissaProduct {
  id: string;
  name: string;
  frenchTitle?: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: ClarissaCategory;
  material: string;
  origin: string;
  piecesPerSet: number;
  dishWasherSafe: boolean;
  description: string;
  specifications: {
    diameter?: string;
    capacity?: string;
    finish?: string;
    weightPerPiece?: string;
  };
  details: string[];
  images: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  colorGlazeOptions?: Array<{ name: string; hex: string }>;
}

export interface ClarissaCartItem {
  id: string;
  product: ClarissaProduct;
  quantity: number;
  selectedGlaze?: string;
  includeBespokeGiftBox?: boolean;
  engravedMonogram?: string;
}

export interface ClarissaFilterState {
  category: ClarissaCategory;
  material: string;
  priceRange: [number, number];
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
}
