export type PlantitoCategory =
  | 'All'
  | 'Indoor Plants'
  | 'Outdoor Foliage'
  | 'Ceramic & Terracotta Pots'
  | 'Hanging & Standing Planters'
  | 'Organic Fertilizers & Feeds'
  | 'Specialty Soils & Substrates';

export type LightRequirement = 'Low Light' | 'Bright Indirect' | 'Direct Sunlight' | 'Any Light';
export type CareDifficulty = 'Easy (Indestructible)' | 'Moderate' | 'Green Thumb (Expert)';

export interface PlantitoProduct {
  id: string;
  name: string;
  botanicalName?: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: PlantitoCategory;
  description: string;
  careGuide?: {
    watering: string;
    light: LightRequirement;
    humidity: string;
    petFriendly: boolean;
    difficulty: CareDifficulty;
  };
  specifications: {
    potDiameter?: string;
    height?: string;
    soilType?: string;
    npkRatio?: string; // for fertilizers e.g. 5-5-5
    volumeWeight?: string;
    material?: string;
    drainageHoles?: boolean;
  };
  features: string[];
  images: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  potColorOptions?: Array<{ name: string; hex: string }>;
}

export interface PlantitoCartItem {
  id: string;
  product: PlantitoProduct;
  quantity: number;
  selectedPotColor?: string;
  includeFertilizerBooster?: boolean;
  includeSoilRepottingKit?: boolean;
}

export interface PlantitoFilterState {
  category: PlantitoCategory;
  light: string;
  difficulty: string;
  petFriendlyOnly: boolean;
  priceRange: [number, number];
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
}
