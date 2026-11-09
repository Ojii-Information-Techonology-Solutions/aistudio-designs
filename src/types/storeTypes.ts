import { CurrencyCode } from '../types';

export type ShopId =
  | 'charlene'
  | 'plates-glasses'
  | 'plants'
  | 'machinery-sales'
  | 'machinery-rentals'
  | 'room-rentals'
  | 'paintings-art'
  | 'assorted-goods'
  | 'watches'
  | 'coffee'
  | 'audiophile';

export type BusinessModel =
  | 'ecommerce'
  | 'rental-equipment'
  | 'booking-stay'
  | 'art-gallery'
  | 'industrial-sales';

export interface ProductOption {
  id: string;
  label: string;
  subLabel?: string;
  priceModifier?: number;
  inStock?: boolean;
  remaining?: number;
}

export interface StoreProduct {
  id: string;
  shopId: ShopId;
  name: string;
  subTitle?: string;
  frenchTitle?: string;
  tagLine: string;
  price: number;
  originalPrice?: number;
  pricingUnit?: string; // e.g. "per night", "per day", "set of 4", "each", "250g bag"
  category: string;
  subCategory?: string;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  details: string[];
  specifications: Record<string, string>;
  optionsLabel?: string;
  options: ProductOption[];
  colors?: Array<{ name: string; hex: string; label: string }>;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  badge?: string;
  inStock: boolean;
  careOrNotes?: string;
  extraMeta?: {
    // Room rentals
    location?: string;
    maxGuests?: number;
    bedrooms?: number;
    beds?: number;
    baths?: number;
    amenities?: string[];
    hostName?: string;
    hostBadge?: string;
    cleaningFee?: number;
    // Machinery & Rentals
    dailyRate?: number;
    weeklyRate?: number;
    monthlyRate?: number;
    operatorDailyRate?: number;
    depositAmount?: number;
    tonnage?: string;
    horsepower?: string;
    // Plants
    lightRequirement?: 'Low Light' | 'Bright Indirect' | 'Full Sun';
    wateringFrequency?: string;
    petFriendly?: boolean;
    // Art
    artist?: string;
    dimensions?: string;
    medium?: string;
    year?: string;
    framed?: boolean;
    certificateOfAuthenticity?: boolean;
    // Coffee
    roastLevel?: 'Light' | 'Medium-Light' | 'Medium' | 'Medium-Dark' | 'Dark';
    flavorNotes?: string[];
    origin?: string;
    process?: string;
    elevation?: string;
  };
}

export interface StoreTheme {
  primaryColor: string;
  primaryHover: string;
  accentBg: string;
  heroBgGradient: string;
  badgeBg: string;
  badgeText: string;
  cardBorder: string;
  fontFamily: 'serif' | 'sans' | 'mono';
  headingClass: string;
  subheadingClass: string;
  accentIconColor: string;
  headerBrandLogo: string;
  headerSubtitle: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDescription: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroImage: string;
  stats: Array<{ label: string; value: string }>;
  valueProps: Array<{ title: string; desc: string; icon: string }>;
}

export interface StoreDefinition {
  id: ShopId;
  name: string;
  tagline: string;
  shortName: string;
  categoryLabel: string;
  businessModel: BusinessModel;
  iconName: string;
  theme: StoreTheme;
  categories: string[];
  filterOptions: {
    categoryLabel: string;
    subFilterLabel?: string;
    subFilterOptions?: string[];
    priceRange: [number, number];
  };
  products: StoreProduct[];
}

export interface UnifiedCartItem {
  id: string; // unique item uuid
  productId: string;
  shopId: ShopId;
  productName: string;
  productImage: string;
  category: string;
  unitPrice: number;
  pricingUnit?: string;
  selectedOption?: string;
  selectedColor?: { name: string; hex: string; label: string };
  quantity: number;
  specialInstructions?: string;
  // Specialized booking data
  stayBooking?: {
    checkInDate: string;
    checkOutDate: string;
    nights: number;
    guests: number;
    cleaningFee: number;
    serviceFee: number;
  };
  machineryRental?: {
    startDate: string;
    rentalDays: number;
    includeOperator: boolean;
    operatorDailyRate: number;
    siteDeliveryAddress: string;
    damageWaiver: boolean;
  };
  artPurchase?: {
    selectedFraming: string;
    includeCertificate: boolean;
  };
}
