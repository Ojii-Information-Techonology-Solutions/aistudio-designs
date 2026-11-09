export type SandraCategory =
  | 'All'
  | 'Curated Home Accents'
  | 'Artisan Candles & Scents'
  | 'Japanese Paper & Stationery'
  | 'Playful Desk Oddities'
  | 'Handmade Ceramics & Trinkets'
  | 'Daily Life Essentials';

export interface SandraItem {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: SandraCategory;
  description: string;
  makerOrigin: string;
  vibes: string[];
  dimensions?: string;
  materials?: string;
  images: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  colorOptions?: Array<{ name: string; hex: string }>;
}

export interface SandraCartItem {
  id: string;
  item: SandraItem;
  quantity: number;
  selectedColor?: string;
  includeSurpriseGiftWrap?: boolean;
  customHandwrittenCard?: string;
}

export interface SandraFilterState {
  category: SandraCategory;
  priceRange: [number, number];
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
}
