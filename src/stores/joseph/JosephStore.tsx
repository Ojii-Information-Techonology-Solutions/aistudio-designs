import React, { useState, useMemo } from 'react';
import { JosephRoom, JosephBooking, JosephFilterState, JosephRoomType } from './types';
import { JOSEPH_ROOMS } from './data';
import { JosephNavbar } from './components/JosephNavbar';
import { JosephHero } from './components/JosephHero';
import { JosephFilter } from './components/JosephFilter';
import { JosephRoomCard } from './components/JosephRoomCard';
import { JosephRoomModal } from './components/JosephRoomModal';
import { JosephBookingDrawer } from './components/JosephBookingDrawer';
import { JosephStayEstimator } from './components/JosephStayEstimator';
import { JosephDesignKit } from './components/JosephDesignKit';
import { JosephFooter } from './components/JosephFooter';

interface JosephStoreProps {
  currency?: string;
  onChangeCurrency?: (curr: any) => void;
}

const ROOM_TYPES: JosephRoomType[] = [
  'All',
  'Penthouse Studio',
  'Boutique Loft',
  'Creative Artist Suite',
  'Minimalist Pod Room',
  'Executive Master Suite'
];

export const JosephStore: React.FC<JosephStoreProps> = () => {
  const [selectedRoom, setSelectedRoom] = useState<JosephRoom | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isDesignKitOpen, setIsDesignKitOpen] = useState(false);

  // Bookings state with an initial sample reservation
  const [bookings, setBookings] = useState<JosephBooking[]>([
    {
      id: 'init-booking-1',
      room: JOSEPH_ROOMS[0],
      checkInDate: 'Sep 12, 2026',
      checkOutDate: 'Sep 15, 2026',
      guests: 2,
      totalNights: 3,
      totalCost: 994,
      includeDailyBreakfast: true,
      includeAirportTransfer: false,
      specialRequests: 'High floor preferred, late keyless arrival around 10 PM.'
    }
  ]);

  // Filters state
  const [filters, setFilters] = useState<JosephFilterState>({
    roomType: 'All',
    priceRange: [90, 400],
    guests: 1,
    searchQuery: '',
    sortBy: 'featured'
  });

  const handleFilterChange = (updater: Partial<JosephFilterState>) => {
    setFilters((prev) => ({ ...prev, ...updater }));
  };

  // Filter and sort rooms
  const filteredRooms = useMemo(() => {
    return JOSEPH_ROOMS.filter((room) => {
      if (filters.roomType !== 'All' && room.roomType !== filters.roomType) return false;
      if (room.pricePerNight > filters.priceRange[1]) return false;
      if (room.maxGuests < filters.guests) return false;

      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = room.name.toLowerCase().includes(q);
        const matchesType = room.roomType.toLowerCase().includes(q);
        const matchesLoc = room.location.toLowerCase().includes(q);
        const matchesNeigh = room.neighborhood.toLowerCase().includes(q);
        if (!matchesName && !matchesType && !matchesLoc && !matchesNeigh) return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.pricePerNight - b.pricePerNight;
      if (filters.sortBy === 'price-desc') return b.pricePerNight - a.pricePerNight;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [filters]);

  const handleOpenRoomDetail = (room: JosephRoom) => {
    setSelectedRoom(room);
    setIsDetailModalOpen(true);
  };

  const handleConfirmBooking = (newBooking: JosephBooking) => {
    setBookings((prev) => [...prev, newBooking]);
    setIsBookingsOpen(true);
  };

  const handleCancelBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const handleClearBookings = () => {
    setBookings([]);
  };

  const handleSelectRoomAndDays = (room: JosephRoom, days: number) => {
    setSelectedRoom(room);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0B132B] flex flex-col font-sans selection:bg-[#D97706] selection:text-white">
      {/* Joseph Boutique Navbar */}
      <JosephNavbar
        bookingCount={bookings.length}
        onOpenBookings={() => setIsBookingsOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => handleFilterChange({ searchQuery: q })}
        allRooms={JOSEPH_ROOMS}
        onSelectRoom={handleOpenRoomDetail}
      />

      {/* Hero Banner */}
      <JosephHero
        onExploreClick={() => {
          const el = document.getElementById('joseph-catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Catalog & Filter Section */}
      <main
        id="joseph-catalog"
        className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full"
      >
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-300 pb-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold">
              Urban Suites &amp; Studio Pods
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight mt-0.5">
              Available Rentable Residences
            </h2>
          </div>
          <p className="text-xs text-gray-500 max-w-md">
            Direct host booking with guaranteed contactless keyless entry, gigabit mesh wifi, and flexible lease terms.
          </p>
        </div>

        {/* Filter Toolbar */}
        <JosephFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          roomTypes={ROOM_TYPES}
          totalResults={filteredRooms.length}
        />

        {/* Room Grid */}
        {filteredRooms.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-200 rounded-3xl p-8 space-y-3 shadow-xs">
            <h3 className="text-lg font-bold text-[#0B132B]">No suites match your filter criteria</h3>
            <p className="text-xs text-gray-500">
              Try adjusting your guest count, price ceiling, or room category to view available residences.
            </p>
            <button
              onClick={() =>
                setFilters({
                  roomType: 'All',
                  priceRange: [90, 400],
                  guests: 1,
                  searchQuery: '',
                  sortBy: 'featured'
                })
              }
              className="px-5 py-2.5 bg-[#0B132B] text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredRooms.map((room) => (
              <JosephRoomCard
                key={room.id}
                room={room}
                onSelect={handleOpenRoomDetail}
                onQuickBook={handleOpenRoomDetail}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <JosephFooter
        onSelectType={(type) => {
          handleFilterChange({ roomType: type });
          const el = document.getElementById('joseph-catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenDesignKit={() => setIsDesignKitOpen(true)}
      />

      {/* Modals & Drawers */}
      <JosephRoomModal
        room={selectedRoom}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onConfirmBooking={handleConfirmBooking}
      />

      <JosephBookingDrawer
        isOpen={isBookingsOpen}
        onClose={() => setIsBookingsOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
        onClearBookings={handleClearBookings}
      />

      <JosephStayEstimator
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        allRooms={JOSEPH_ROOMS}
        onSelectRoomAndDays={handleSelectRoomAndDays}
      />

      <JosephDesignKit
        isOpen={isDesignKitOpen}
        onClose={() => setIsDesignKitOpen(false)}
      />
    </div>
  );
};
