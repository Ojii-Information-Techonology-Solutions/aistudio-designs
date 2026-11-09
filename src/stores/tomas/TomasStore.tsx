import React, { useState, useMemo } from 'react';
import { CurrencyCode } from '../../types';
import { MachineryItem, TomasRentalBooking, TomasFleetFilterState } from './types';
import { TOMAS_FLEET } from './data';
import { TomasNavbar } from './components/TomasNavbar';
import { TomasHero } from './components/TomasHero';
import { TomasFleetFilter } from './components/TomasFleetFilter';
import { TomasMachineryCard } from './components/TomasMachineryCard';
import { TomasMachineryModal } from './components/TomasMachineryModal';
import { TomasRentalCartModal } from './components/TomasRentalCartModal';
import { TomasFleetSpecsTable } from './components/TomasFleetSpecsTable';
import { TomasDispatchModal } from './components/TomasDispatchModal';
import { TomasDesignKit } from './components/TomasDesignKit';
import { TomasFooter } from './components/TomasFooter';

interface TomasStoreProps {
  currency: CurrencyCode;
  onChangeCurrency: (curr: CurrencyCode) => void;
}

export const TomasStore: React.FC<TomasStoreProps> = ({
  currency,
  onChangeCurrency
}) => {
  // Store states
  const [selectedMachinery, setSelectedMachinery] = useState<MachineryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [isSpecsTableOpen, setIsSpecsTableOpen] = useState(false);
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false);
  const [isDesignKitOpen, setIsDesignKitOpen] = useState(false);
  const [selectedDepot, setSelectedDepot] = useState('Depot Alpha - Chicago Logistics Hub');

  // Active bookings queue
  const [bookings, setBookings] = useState<TomasRentalBooking[]>([
    {
      id: 'init-hire-1',
      machineryId: 'tomas-exc-336',
      modelCode: 'CAT 336-07',
      name: 'CAT 336 Heavy Hydraulic Excavator (36-Ton)',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85',
      dailyRate: 1450,
      durationDays: 7,
      rentalStartDate: new Date().toISOString().split('T')[0],
      rentalEndDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      withCertifiedOperator: true,
      operatorRatePerDay: 480,
      selectedAttachments: ['Cat H160Es Hydraulic Rock Breaker'],
      attachmentsCost: 2450,
      withDamageWaiver: true,
      damageWaiverCost: 696,
      transportDeliveryFee: 350,
      siteAddress: 'Metro Highway Project, Sector 9',
      subtotal: 12656
    }
  ]);

  // Filters
  const [filters, setFilters] = useState<TomasFleetFilterState>({
    category: 'All Fleet',
    application: 'All Applications',
    manufacturer: 'All OEMs',
    minTonnage: 0,
    maxTonnage: 100,
    operatorRequiredOnly: false,
    inYardOnly: false,
    sortBy: 'featured',
    searchQuery: ''
  });

  const handleFilterChange = (updater: Partial<TomasFleetFilterState>) => {
    setFilters((prev) => ({ ...prev, ...updater }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'All Fleet',
      application: 'All Applications',
      manufacturer: 'All OEMs',
      minTonnage: 0,
      maxTonnage: 100,
      operatorRequiredOnly: false,
      inYardOnly: false,
      sortBy: 'featured',
      searchQuery: ''
    });
  };

  // Filter and sort fleet items
  const filteredFleet = useMemo(() => {
    return TOMAS_FLEET.filter((m) => {
      if (filters.category !== 'All Fleet' && m.category !== filters.category) return false;
      if (filters.application !== 'All Applications' && m.application !== filters.application) return false;
      if (filters.manufacturer !== 'All OEMs' && m.manufacturer !== filters.manufacturer) return false;
      if (filters.operatorRequiredOnly && !m.operatorAvailable) return false;
      if (filters.inYardOnly && !m.availabilityStatus.includes('In Yard')) return false;

      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = m.name.toLowerCase().includes(q);
        const matchesCode = m.modelCode.toLowerCase().includes(q);
        const matchesCat = m.category.toLowerCase().includes(q);
        const matchesOem = m.manufacturer.toLowerCase().includes(q);
        if (!matchesName && !matchesCode && !matchesCat && !matchesOem) return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'rate-asc') return a.dailyRate - b.dailyRate;
      if (filters.sortBy === 'rate-desc') return b.dailyRate - a.dailyRate;
      return 0;
    });
  }, [filters]);

  const handleOpenDetail = (machinery: MachineryItem) => {
    setSelectedMachinery(machinery);
    setIsModalOpen(true);
  };

  const handleAddBooking = (booking: TomasRentalBooking) => {
    setBookings((prev) => [...prev, booking]);
    setIsBookingsOpen(true);
  };

  const handleRemoveBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-gray-100 flex flex-col font-sans selection:bg-[#F59E0B] selection:text-black">
      {/* Heavy Machinery Top Command Navbar */}
      <TomasNavbar
        currentCategory={filters.category}
        onSelectCategory={(cat) => handleFilterChange({ category: cat })}
        currency={currency}
        onChangeCurrency={onChangeCurrency}
        bookingCount={bookings.length}
        onOpenBookings={() => setIsBookingsOpen(true)}
        onOpenSpecsTable={() => setIsSpecsTableOpen(true)}
        onOpenDispatchModal={() => setIsDispatchModalOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => handleFilterChange({ searchQuery: q })}
        allMachinery={TOMAS_FLEET}
        onSelectMachinery={handleOpenDetail}
        selectedDepot={selectedDepot}
        onSelectDepot={setSelectedDepot}
      />

      {/* Industrial Hero Banner */}
      <TomasHero
        onExploreFleet={() => {
          const el = document.getElementById('tomas-fleet-grid');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenSpecsTable={() => setIsSpecsTableOpen(true)}
        onOpenDispatchModal={() => setIsDispatchModalOpen(true)}
      />

      {/* Filter Toolbar */}
      <div id="tomas-fleet-grid">
        <TomasFleetFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          totalCount={filteredFleet.length}
        />
      </div>

      {/* Main Fleet Catalog Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {filteredFleet.length === 0 ? (
          <div className="text-center py-20 space-y-4 bg-[#14171E] border border-[#252932] rounded-xs font-mono">
            <p className="text-xl font-bold text-white">No machinery units match your criteria</p>
            <p className="text-xs text-gray-400">
              Try expanding your category or OEM search filters to view available plant.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#F59E0B] text-black font-extrabold text-xs uppercase"
            >
              Reset Fleet Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredFleet.map((machine) => (
              <TomasMachineryCard
                key={machine.id}
                machinery={machine}
                currency={currency}
                onOpenDetail={handleOpenDetail}
                onQuickBook={handleOpenDetail}
              />
            ))}
          </div>
        )}
      </main>

      {/* Industrial Footer */}
      <TomasFooter
        onSelectCategory={(cat) => handleFilterChange({ category: cat })}
        onOpenSpecsTable={() => setIsSpecsTableOpen(true)}
        onOpenDispatchModal={() => setIsDispatchModalOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
      />

      {/* Interactive Modals */}
      <TomasDesignKit
        isOpen={isDesignKitOpen}
        onClose={() => setIsDesignKitOpen(false)}
      />
      <TomasMachineryModal
        machinery={selectedMachinery}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currency={currency}
        onAddBooking={handleAddBooking}
      />

      <TomasRentalCartModal
        isOpen={isBookingsOpen}
        onClose={() => setIsBookingsOpen(false)}
        bookings={bookings}
        onRemoveBooking={handleRemoveBooking}
        onConfirmOrder={() => {
          setBookings([]);
        }}
        currency={currency}
      />

      <TomasFleetSpecsTable
        isOpen={isSpecsTableOpen}
        onClose={() => setIsSpecsTableOpen(false)}
        onSelectMachinery={handleOpenDetail}
      />

      <TomasDispatchModal
        isOpen={isDispatchModalOpen}
        onClose={() => setIsDispatchModalOpen(false)}
        currency={currency}
      />
    </div>
  );
};
