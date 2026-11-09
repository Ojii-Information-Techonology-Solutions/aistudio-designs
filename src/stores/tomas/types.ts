export interface MachineryItem {
  id: string;
  modelCode: string;
  name: string;
  manufacturer: string;
  category: 'Excavators' | 'Wheel Loaders' | 'Bulldozers' | 'Articulated Haulers' | 'Aerial Boom Lifts' | 'Compactors & Rollers' | 'Cranes';
  application: 'Heavy Earthmoving' | 'Quarry & Mining' | 'Highway & Civil' | 'Demolition' | 'High-Rise Construction' | 'Utility Trenching';
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  securityDeposit: number;
  images: string[];
  specs: {
    operatingWeight: string;
    enginePower: string;
    engineModel: string;
    bucketCapacity?: string;
    maxDigDepth?: string;
    maxReach?: string;
    fuelTankCapacity: string;
    hydraulicFlow: string;
    groundPressure: string;
  };
  keyFeatures: string[];
  telematics: {
    gpsTracking: boolean;
    fuelConsumptionRate: string;
    hoursMeter: number;
    emissionStandard: 'EPA Tier 4 Final / EU Stage V' | 'Tier 3' | 'Stage IV';
  };
  attachments: {
    name: string;
    ratePerDay: number;
    description: string;
  }[];
  availabilityStatus: 'In Yard - Ready for Dispatch' | 'On Rent - Available Soon' | 'Reserved';
  depotLocation: string;
  operatorAvailable: boolean;
  operatorRatePerDay: number;
  damageWaiverPercentage: number;
  description: string;
  rating: number;
  totalHires: number;
}

export interface TomasRentalBooking {
  id: string;
  machineryId: string;
  modelCode: string;
  name: string;
  image: string;
  dailyRate: number;
  durationDays: number;
  rentalStartDate: string;
  rentalEndDate: string;
  withCertifiedOperator: boolean;
  operatorRatePerDay: number;
  selectedAttachments: string[];
  attachmentsCost: number;
  withDamageWaiver: boolean;
  damageWaiverCost: number;
  transportDeliveryFee: number;
  siteAddress: string;
  subtotal: number;
}

export interface TomasFleetFilterState {
  category: string;
  application: string;
  manufacturer: string;
  minTonnage: number;
  maxTonnage: number;
  operatorRequiredOnly: boolean;
  inYardOnly: boolean;
  sortBy: 'featured' | 'rate-asc' | 'rate-desc' | 'weight-desc' | 'power-desc';
  searchQuery: string;
}
