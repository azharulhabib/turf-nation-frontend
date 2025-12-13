import { createContext, useContext, useState, ReactNode } from 'react';

export interface Booking {
  id: string;
  turfId: string;
  turfName: string;
  date: string;
  slot: string;
  sport: string;
  price: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  qrCode: string;
}

interface BookingContextType {
  bookings: Booking[];
  currentBooking: Partial<Booking> | null;
  setCurrentBooking: (booking: Partial<Booking> | null) => void;
  addBooking: (booking: Booking) => void;
  cancelBooking: (id: string) => void;
  getUserBookings: () => Booking[];
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentBooking, setCurrentBooking] = useState<Partial<Booking> | null>(null);

  const addBooking = (booking: Booking) => {
    setBookings(prev => [...prev, booking]);
  };

  const cancelBooking = (id: string) => {
    setBookings(prev =>
      prev.map(booking =>
        booking.id === id ? { ...booking, status: 'cancelled' as const } : booking
      )
    );
  };

  const getUserBookings = () => {
    return bookings;
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        currentBooking,
        setCurrentBooking,
        addBooking,
        cancelBooking,
        getUserBookings,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
