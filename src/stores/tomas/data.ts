import { MachineryItem } from './types';

export const TOMAS_FLEET: MachineryItem[] = [
  {
    id: 'tomas-exc-336',
    modelCode: 'CAT 336-07',
    name: 'CAT 336 Heavy Hydraulic Excavator (36-Ton)',
    manufacturer: 'Caterpillar',
    category: 'Excavators',
    application: 'Heavy Earthmoving',
    dailyRate: 1450,
    weeklyRate: 5800,
    monthlyRate: 17500,
    securityDeposit: 3000,
    images: [
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=85'
    ],
    specs: {
      operatingWeight: '37,200 kg (82,000 lbs)',
      enginePower: '314 HP (234 kW) @ 1,800 RPM',
      engineModel: 'Cat C9.3B Twin Turbo Diesel',
      bucketCapacity: '2.41 m³ (3.15 yd³)',
      maxDigDepth: '8.21 m (26 ft 11 in)',
      maxReach: '11.74 m (38 ft 6 in)',
      fuelTankCapacity: '600 L (158.5 gal)',
      hydraulicFlow: '558 L/min (147 gpm)',
      groundPressure: '66.8 kPa (9.7 psi)'
    },
    keyFeatures: [
      'Factory-integrated Cat Grade 2D assist & payload scale',
      'Electro-hydraulic pilot system with programmable joystick curves',
      'High-ambient cooling package rated up to 52°C (125°F)',
      '360° Bird-Eye HD camera system with ultrasonic radar warning'
    ],
    telematics: {
      gpsTracking: true,
      fuelConsumptionRate: '22-28 L/hr on heavy trenching',
      hoursMeter: 1240,
      emissionStandard: 'EPA Tier 4 Final / EU Stage V'
    },
    attachments: [
      { name: 'Cat H160Es Hydraulic Rock Breaker', ratePerDay: 350, description: '4,500 ft-lb impact energy class' },
      { name: '1800mm Tilting Heavy Batter Bucket', ratePerDay: 120, description: 'Dual 45° tilt cylinders for slope shaping' },
      { name: 'Hydraulic Demolition Shear', ratePerDay: 420, description: 'High-tensile steel cutting jaws' }
    ],
    availabilityStatus: 'In Yard - Ready for Dispatch',
    depotLocation: 'Depot Alpha - Chicago Logistics Hub',
    operatorAvailable: true,
    operatorRatePerDay: 480,
    damageWaiverPercentage: 12,
    description: 'High-production heavy excavator engineered for mass earthmoving, deep sewer trenches, and quarry overburden stripping. Equipped with automated grade control for zero-rework grade precision.',
    rating: 4.95,
    totalHires: 68
  },
  {
    id: 'tomas-wld-wa470',
    name: 'Komatsu WA470-8 High-Lift Wheel Loader (24-Ton)',
    modelCode: 'KOM-WA470-8',
    manufacturer: 'Komatsu',
    category: 'Wheel Loaders',
    application: 'Quarry & Mining',
    dailyRate: 1280,
    weeklyRate: 5100,
    monthlyRate: 15400,
    securityDeposit: 2500,
    images: [
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85'
    ],
    specs: {
      operatingWeight: '24,610 kg (54,255 lbs)',
      enginePower: '272 HP (203 kW) @ 2,000 RPM',
      engineModel: 'Komatsu SAA6D125E-7 Turbocharged',
      bucketCapacity: '4.2 m³ (5.5 yd³)',
      maxDigDepth: 'N/A (Loader)',
      maxReach: 'Dumping Clearance: 3,185 mm',
      fuelTankCapacity: '380 L (100.4 gal)',
      hydraulicFlow: '360 L/min (95 gpm)',
      groundPressure: 'N/A - Michelin 26.5R25 XHA2 Radial Tires'
    },
    keyFeatures: [
      'SmartLoader Logic for automatic engine torque optimization',
      'Lockup torque converter providing maximum rim pull on steep inclines',
      'Automatic kick-out bucket positioning with return-to-dig preset',
      'Air suspension heated operator cab with pressurized HEPA filter'
    ],
    telematics: {
      gpsTracking: true,
      fuelConsumptionRate: '18-23 L/hr in stockpile loading',
      hoursMeter: 890,
      emissionStandard: 'EPA Tier 4 Final / EU Stage V'
    },
    attachments: [
      { name: '4.8 m³ High-Capacity Coal/Aggregate Bucket', ratePerDay: 180, description: 'Lightweight high-volume hopper' },
      { name: 'Heavy Duty Rock Pallet & Pipe Forks (12-Ton)', ratePerDay: 140, description: '2400mm forged tines' }
    ],
    availabilityStatus: 'In Yard - Ready for Dispatch',
    depotLocation: 'Depot Bravo - Houston Gulf Terminus',
    operatorAvailable: true,
    operatorRatePerDay: 450,
    damageWaiverPercentage: 12,
    description: 'Premier wheel loader engineered for high-cycle aggregate loading, mining re-handling, and municipal civil works. Combines industry-leading breakout force with ultra-low fuel burn.',
    rating: 4.9,
    totalHires: 52
  },
  {
    id: 'tomas-doz-d8t',
    name: 'CAT D8T Waste & Heavy Earth Dozer (40-Ton)',
    modelCode: 'CAT-D8T-WXR',
    manufacturer: 'Caterpillar',
    category: 'Bulldozers',
    application: 'Highway & Civil',
    dailyRate: 1850,
    weeklyRate: 7400,
    monthlyRate: 22000,
    securityDeposit: 4000,
    images: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb18086f7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85'
    ],
    specs: {
      operatingWeight: '39,750 kg (87,600 lbs)',
      enginePower: '354 HP (264 kW) @ 1,900 RPM',
      engineModel: 'Cat C15 ACERT Heavy Diesel',
      bucketCapacity: 'Blade Capacity: 8.7 m³ (11.4 yd³) Semi-U',
      maxDigDepth: 'Ripper Penetration: 1,240 mm',
      maxReach: 'Ground Clearance: 613 mm',
      fuelTankCapacity: '643 L (170 gal)',
      hydraulicFlow: '405 L/min (107 gpm)',
      groundPressure: '89.6 kPa (13.0 psi)'
    },
    keyFeatures: [
      'Single-shank heavy adjustable parallelogram ripper',
      'Cat Grade 3D auto-blade tracking with Dual GNSS antennas',
      'Differential steering maintaining uninterrupted power to both tracks',
      'Heavy-duty sealed and lubricated elevated sprocket track design'
    ],
    telematics: {
      gpsTracking: true,
      fuelConsumptionRate: '32-40 L/hr under max ripper draft',
      hoursMeter: 2150,
      emissionStandard: 'EPA Tier 4 Final / EU Stage V'
    },
    attachments: [
      { name: 'Multi-Shank 3-Tooth Deep Ripper Beam', ratePerDay: 220, description: 'Triple shank for shale fracture' },
      { name: '10.3 m³ Full Universal Landfill Blade', ratePerDay: 190, description: 'High-wing trash push extension' }
    ],
    availabilityStatus: 'In Yard - Ready for Dispatch',
    depotLocation: 'Depot Alpha - Chicago Logistics Hub',
    operatorAvailable: true,
    operatorRatePerDay: 520,
    damageWaiverPercentage: 14,
    description: 'Heavy track-type tractor built for highway rough grading, overburden rip & push, and mass site leveling. Delivers unmatched power transmission and precision 3D blade response.',
    rating: 5.0,
    totalHires: 41
  },
  {
    id: 'tomas-adt-a40g',
    name: 'Volvo A40G 6x6 Articulated Dump Truck (40-Ton)',
    modelCode: 'VOLVO-A40G',
    manufacturer: 'Volvo CE',
    category: 'Articulated Haulers',
    application: 'Heavy Earthmoving',
    dailyRate: 1390,
    weeklyRate: 5560,
    monthlyRate: 16800,
    securityDeposit: 3000,
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=85'
    ],
    specs: {
      operatingWeight: '30,700 kg (Payload: 39,000 kg)',
      enginePower: '476 HP (350 kW) @ 1,900 RPM',
      engineModel: 'Volvo D13J Tier 4F 12.8L Diesel',
      bucketCapacity: 'Body Volume: 24.0 m³ (31.4 yd³)',
      maxDigDepth: 'Dumping Angle: 70°',
      maxReach: 'Top Speed: 57 km/h (35.4 mph)',
      fuelTankCapacity: '480 L (127 gal)',
      hydraulicFlow: '344 L/min (91 gpm)',
      groundPressure: '120 kPa loaded'
    },
    keyFeatures: [
      'Automatic Traction Control (ATC) with 100% locking dog clutches',
      'Hydro-mechanical self-compensating articulated steering',
      'On-Board Weighing (OBW) system with external load indicator lights',
      'Exhaust heated body for clean sticky clay discharge'
    ],
    telematics: {
      gpsTracking: true,
      fuelConsumptionRate: '21-27 L/hr cycle average',
      hoursMeter: 1640,
      emissionStandard: 'EPA Tier 4 Final / EU Stage V'
    },
    attachments: [
      { name: 'Hardox 450 Heavy Bed Liner Plate Kit', ratePerDay: 90, description: 'Extra wear protection for sharp shot rock' },
      { name: 'Cantilever Tailgate Kit', ratePerDay: 75, description: 'Prevents spillage on steep incline hauls' }
    ],
    availabilityStatus: 'In Yard - Ready for Dispatch',
    depotLocation: 'Depot Charlie - Denver Mountain Depot',
    operatorAvailable: true,
    operatorRatePerDay: 420,
    damageWaiverPercentage: 12,
    description: 'The industry benchmark articulated hauler for steep gradients, unpaved muddy haul roads, and quarry load-and-carry operations. 100% differential locks ensure unyielding traction.',
    rating: 4.88,
    totalHires: 79
  },
  {
    id: 'tomas-boom-sx180',
    name: 'Genie SX-180 Ultra-Boom Telescopic Lift (186-Ft)',
    modelCode: 'GENIE-SX180',
    manufacturer: 'Genie',
    category: 'Aerial Boom Lifts',
    application: 'High-Rise Construction',
    dailyRate: 1650,
    weeklyRate: 6600,
    monthlyRate: 19800,
    securityDeposit: 3500,
    images: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb18086f7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85'
    ],
    specs: {
      operatingWeight: '24,948 kg (55,000 lbs)',
      enginePower: '74 HP (55 kW) Deutz Turbo Diesel',
      engineModel: 'Deutz TD2.9L4 Tier 4F',
      bucketCapacity: 'Platform Capacity: 340 kg (750 lbs)',
      maxDigDepth: 'Working Height: 56.86 m (186 ft)',
      maxReach: 'Horizontal Reach: 24.38 m (80 ft)',
      fuelTankCapacity: '151 L (40 gal)',
      hydraulicFlow: '132 L/min (35 gpm)',
      groundPressure: 'Rotating Jib: 3.05 m 135° vertical / 60° horizontal'
    },
    keyFeatures: [
      'XChassis expanding axle system for rapid jobsite transport and stability',
      'Full envelope productivity with 340 kg unrestricted dual-capacity',
      'Drive enabled at full working height on level concrete slabs',
      'Secondary guarding contact alarm & anemometer wind speed cutoff'
    ],
    telematics: {
      gpsTracking: true,
      fuelConsumptionRate: '8-12 L/hr continuous engine run',
      hoursMeter: 740,
      emissionStandard: 'EPA Tier 4 Final / EU Stage V'
    },
    attachments: [
      { name: '12kW On-Board Welder-Ready Hydraulic Generator', ratePerDay: 110, description: 'Provides 240V/120V power to platform basket' },
      { name: 'Glazier Package (Heavy Glass Panel Suction Cups)', ratePerDay: 160, description: 'Safe facade curtain wall glass handling' }
    ],
    availabilityStatus: 'In Yard - Ready for Dispatch',
    depotLocation: 'Depot Alpha - Chicago Logistics Hub',
    operatorAvailable: true,
    operatorRatePerDay: 550,
    damageWaiverPercentage: 15,
    description: 'One of the tallest self-propelled telescopic boom lifts in the world. Ideal for bridge maintenance, industrial petrochem refineries, stadium construction, and exterior high-rise glazing.',
    rating: 4.96,
    totalHires: 34
  },
  {
    id: 'tomas-comp-bw213',
    name: 'Bomag BW 213 DH-5 Heavy Soil Compactor (13-Ton)',
    modelCode: 'BOMAG-BW213',
    manufacturer: 'Bomag',
    category: 'Compactors & Rollers',
    application: 'Highway & Civil',
    dailyRate: 720,
    weeklyRate: 2880,
    monthlyRate: 8600,
    securityDeposit: 1500,
    images: [
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85'
    ],
    specs: {
      operatingWeight: '12,720 kg (28,040 lbs)',
      enginePower: '129 HP (95 kW) @ 2,200 RPM',
      engineModel: 'Deutz TCD 3.6 L4 Tier 4F',
      bucketCapacity: 'Drum Width: 2,130 mm (83.9 in)',
      maxDigDepth: 'Drum Diameter: 1,500 mm',
      maxReach: 'Gradeability: 60% with dual traction drive',
      fuelTankCapacity: '250 L (66 gal)',
      hydraulicFlow: 'Dual amplitude vibration system (1.90 / 0.95 mm)',
      groundPressure: 'Centrifugal Force: 285 / 196 kN'
    },
    keyFeatures: [
      'TERRAMETER continuous compaction measuring with EVIB printout',
      'Anti-slip dual-circuit drive pumps conquering 60% steep embankment grades',
      'Maintenance-free articulated steering joint with self-aligning bearings',
      'Vibration isolated operator platform with ROPS/FOPS enclosed cab'
    ],
    telematics: {
      gpsTracking: true,
      fuelConsumptionRate: '11-15 L/hr at maximum vibration output',
      hoursMeter: 980,
      emissionStandard: 'EPA Tier 4 Final / EU Stage V'
    },
    attachments: [
      { name: 'Padfoot Segment Shell Kit (for High Plasticity Clay)', ratePerDay: 85, description: '3-piece clamp-on padfoot drum shell' },
      { name: 'Hydraulic Dozer Leveling Blade', ratePerDay: 70, description: 'Backfill and pre-strike off blade' }
    ],
    availabilityStatus: 'In Yard - Ready for Dispatch',
    depotLocation: 'Depot Bravo - Houston Gulf Terminus',
    operatorAvailable: true,
    operatorRatePerDay: 380,
    damageWaiverPercentage: 10,
    description: 'Heavy duty single drum vibratory roller for highway subbases, dam embankments, railway earthworks, and structural building pads. Features real-time soil stiffness measurement.',
    rating: 4.92,
    totalHires: 88
  }
];
