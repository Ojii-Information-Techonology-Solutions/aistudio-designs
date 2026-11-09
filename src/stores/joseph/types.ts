export type JosephRoomType =
  | 'All'
  | 'Penthouse Studio'
  | 'Boutique Loft'
  | 'Creative Artist Suite'
  | 'Minimalist Pod Room'
  | 'Executive Master Suite';

export interface JosephRoom {
  id: string;
  name: string;
  roomType: JosephRoomType;
  tagline: string;
  pricePerNight: number;
  originalPricePerNight?: number;
  location: string;
  neighborhood: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  amenities: string[];
  description: string;
  highlights: string[];
  images: string[];
  isAvailable: boolean;
  rating: number;
  reviewCount: number;
  featured?: boolean;
}

export interface JosephBooking {
  id: string;
  room: JosephRoom;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  totalNights: number;
  totalCost: number;
  specialRequests?: string;
  includeAirportTransfer?: boolean;
  includeDailyBreakfast?: boolean;
}

export interface JosephFilterState {
  roomType: JosephRoomType;
  priceRange: [number, number];
  guests: number;
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
}
