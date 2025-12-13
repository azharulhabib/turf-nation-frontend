export interface Turf {
  id: string;
  name: string;
  location: string;
  city: string;
  sports: string[];
  rating: number;
  price: number;
  image: string;
  featured: boolean;
  description: string;
  facilities: string[];
  openTime: string;
  closeTime: string;
}

export const mockTurfs: Turf[] = [
  {
    id: '1',
    name: 'Elite Sports Complex',
    location: 'Sector 15, Chandigarh',
    city: 'Chandigarh',
    sports: ['Football', 'Cricket'],
    rating: 4.8,
    price: 500,
    image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjUyMTQxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    description: 'Premium turf with excellent facilities and lighting',
    facilities: ['Parking', 'Changing Rooms', 'Drinking Water', 'First Aid'],
    openTime: '06:00',
    closeTime: '23:00',
  },
  {
    id: '2',
    name: 'Green Valley Cricket Ground',
    location: 'Phase 7, Mohali',
    city: 'Mohali',
    sports: ['Cricket'],
    rating: 4.5,
    price: 600,
    image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kfGVufDF8fHx8MTc2NTIyMjU5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    description: 'Professional cricket ground with quality pitch',
    facilities: ['Parking', 'Restrooms', 'Seating Area', 'Scoreboard'],
    openTime: '06:00',
    closeTime: '22:00',
  },
  {
    id: '3',
    name: 'City Basketball Arena',
    location: 'Sector 22, Chandigarh',
    city: 'Chandigarh',
    sports: ['Basketball'],
    rating: 4.7,
    price: 400,
    image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnR8ZW58MXx8fHwxNzY1MTI5NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    description: 'Indoor basketball court with professional flooring',
    facilities: ['AC', 'Lockers', 'Showers', 'Parking'],
    openTime: '07:00',
    closeTime: '22:00',
  },
  {
    id: '4',
    name: 'Ace Badminton Courts',
    location: 'Industrial Area, Panchkula',
    city: 'Panchkula',
    sports: ['Badminton'],
    rating: 4.6,
    price: 350,
    image: 'https://images.unsplash.com/photo-1626926938421-90124a4b83fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBjb3VydHxlbnwxfHx8fDE3NjUxODMwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
    description: 'Well-maintained badminton courts with proper lighting',
    facilities: ['Parking', 'Restrooms', 'Equipment Rental'],
    openTime: '06:00',
    closeTime: '23:00',
  },
  {
    id: '5',
    name: 'Champions Football Turf',
    location: 'Sector 34, Chandigarh',
    city: 'Chandigarh',
    sports: ['Football'],
    rating: 4.9,
    price: 550,
    image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjUyMTQxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
    description: 'Top-rated football turf with FIFA-approved grass',
    facilities: ['Parking', 'Changing Rooms', 'Refreshments', 'Night Lights'],
    openTime: '05:00',
    closeTime: '23:00',
  },
  {
    id: '6',
    name: 'Multi-Sport Arena',
    location: 'Zirakpur',
    city: 'Zirakpur',
    sports: ['Football', 'Cricket', 'Badminton'],
    rating: 4.4,
    price: 450,
    image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjUyMTQxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
    description: 'Versatile sports facility for multiple sports',
    facilities: ['Parking', 'Cafe', 'Restrooms'],
    openTime: '06:00',
    closeTime: '22:00',
  },
];

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  price: number;
}

export const generateTimeSlots = (basePrice: number): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const times = [
    '06:00 - 07:00',
    '07:00 - 08:00',
    '08:00 - 09:00',
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
    '18:00 - 19:00',
    '19:00 - 20:00',
    '20:00 - 21:00',
    '21:00 - 22:00',
    '22:00 - 23:00',
  ];

  times.forEach((time, index) => {
    const isPeakHour = index >= 12; // After 6 PM
    slots.push({
      id: `slot-${index}`,
      time,
      available: Math.random() > 0.3,
      price: isPeakHour ? basePrice + 100 : basePrice,
    });
  });

  return slots;
};

export interface Tournament {
  id: string;
  name: string;
  sport: string;
  date: string;
  location: string;
  teams: number;
  maxTeams: number;
  prize: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  image: string;
}

export const mockTournaments: Tournament[] = [
  {
    id: 't1',
    name: 'Championship Cup 2024',
    sport: 'Football',
    date: '2024-12-20',
    location: 'Elite Sports Complex',
    teams: 12,
    maxTeams: 16,
    prize: '₹50,000',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjUyMTQxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 't2',
    name: 'Cricket Premier League',
    sport: 'Cricket',
    date: '2024-12-25',
    location: 'Green Valley Cricket Ground',
    teams: 6,
    maxTeams: 8,
    prize: '₹75,000',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kfGVufDF8fHx8MTc2NTIyMjU5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];
