export interface Dress {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  category: 'Gowns' | 'Silk Slips' | 'Cocktail' | 'Couture' | 'Bridal' | 'Accessories';
  silhouette: 'Column' | 'A-Line' | 'Mermaid' | 'Slip' | 'Empire' | 'Ballgown';
  occasion: 'Gala & Black Tie' | 'Cocktail Soirée' | 'Bridal & Reception' | 'Evening Dining' | 'Red Carpet';
  fabric: '100% Mulberry Silk' | 'Silk Velvet' | 'Duchess Satin' | 'French Lace' | 'Silk Chiffon' | 'Taffeta';
  colors: {
    name: string;
    hex: string;
    imageIndex?: number;
  }[];
  sizes: ('US 0 (XS)' | 'US 2 (S)' | 'US 4 (S)' | 'US 6 (M)' | 'US 8 (M)' | 'US 10 (L)' | 'US 12 (XL)' | 'Custom Tailored')[];
  images: string[];
  description: string;
  story: string;
  craftsmanship: string[];
  specs: {
    length: string;
    lining: string;
    closure: string;
    care: string;
    origin: string;
  };
  modelStats: {
    height: string;
    bustWaistHips: string;
    wearingSize: string;
  };
  inStock: boolean;
  isMadeToOrder: boolean;
  leadTimeWeeks?: number;
  isFeatured?: boolean;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  rating: number;
  reviewCount: number;
}

export interface CharleneCartItem {
  id: string;
  dressId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
  customHemmingLength?: string;
  bespokeEmbroidery?: string;
  complimentaryGiftPackaging: boolean;
  specialInstructions?: string;
}

export interface CharleneFilterState {
  category: string;
  silhouette: string;
  occasion: string;
  color: string;
  fabric: string;
  priceRange: [number, number];
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
  searchQuery: string;
  onlyInStock: boolean;
  onlyMadeToOrder: boolean;
}
