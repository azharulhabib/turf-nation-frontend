import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, MapPin, Calendar, DollarSign, SlidersHorizontal, Heart, Star, Wifi, Sun, Car } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';

export default function TurfSearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialState = location.state || {};

  const [filters, setFilters] = useState({
    sport: initialState.sport || '',
    location: initialState.location || '',
    date: initialState.date || '',
    price: initialState.price || '',
  });

  const [showFilters, setShowFilters] = useState(false);

  // Mock turf data
  const turfs = [
    {
      id: 1,
      name: 'Manchester City Academy',
      image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjU0NzUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$50/hr',
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team…',
      location: 'Manchester, UK',
      rating: '4.5/10',
      sports: ['Football', 'Cricket'],
    },
    {
      id: 2,
      name: 'Barcelona Academy',
      image: 'https://images.unsplash.com/photo-1730739628091-133de587ad14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGdyb3VuZHxlbnwxfHx8fDE3NjU0NzUwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$50/hr',
      description: 'Professional cricket ground with modern facilities and equipment',
      location: 'Barcelona, Spain',
      rating: '4.8/10',
      sports: ['Cricket', 'Football'],
    },
    {
      id: 3,
      name: 'Tennis Court Premium',
      image: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMG91dGRvb3J8ZW58MXx8fHwxNzY1NDIxNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$45/hr',
      description: 'Premium tennis courts with professional surface and lighting',
      location: 'London, UK',
      rating: '4.6/10',
      sports: ['Tennis'],
    },
    {
      id: 4,
      name: 'Elite Sports Center',
      image: 'https://images.unsplash.com/photo-1624024834874-2a1611305604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NjU0NTE3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$40/hr',
      description: 'Indoor badminton courts with AC and premium facilities',
      location: 'New York, USA',
      rating: '4.7/10',
      sports: ['Badminton', 'Basketball'],
    },
    {
      id: 5,
      name: 'Champions Basketball Arena',
      image: 'https://images.unsplash.com/photo-1709552899537-8f0a171aaf40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBvdXRkb29yfGVufDF8fHx8MTc2NTQ2MTY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$55/hr',
      description: 'Professional basketball court with modern facilities',
      location: 'Los Angeles, USA',
      rating: '4.9/10',
      sports: ['Basketball'],
    },
    {
      id: 6,
      name: 'Beach Volleyball Paradise',
      image: 'https://images.unsplash.com/photo-1628314200733-5f785cdc925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xsZXliYWxsJTIwY291cnQlMjBiZWFjaHxlbnwxfHx8fDE3NjU0MDEwODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$35/hr',
      description: 'Beach volleyball courts with ocean view',
      location: 'Miami, USA',
      rating: '4.4/10',
      sports: ['Volleyball'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <h1 
          className="mb-8" 
          style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
        >
          Find Your Perfect Turf
        </h1>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Sport Filter */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filters.sport}
                  onChange={(e) => setFilters({ ...filters, sport: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] bg-transparent"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <option value="">All Sports</option>
                  <option value="Football">Football</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Volleyball">Volleyball</option>
                </select>
              </div>
            </div>

            {/* Location Filter */}
            <div className="flex-1">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
            </div>

            {/* Date Filter */}
            <div className="flex-1">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={filters.date}
                  onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex-1">
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Max Price"
                  value={filters.price}
                  onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
            </div>

            {/* More Filters Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-[#0F7A33] text-white px-6 py-3 rounded-xl hover:bg-[#07391A] transition-colors flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden lg:inline">Filters</span>
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p 
            className="text-gray-600" 
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
          >
            Showing <span className="font-semibold text-[#0F7A33]">{turfs.length}</span> turfs available
          </p>
        </div>

        {/* Turf Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {turfs.map((turf) => (
            <div 
              key={turf.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(`/turf/${turf.id}`)}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={turf.image} 
                  alt={turf.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Heart Icon */}
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                {/* Sport Badges */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {turf.sports.map((sport) => (
                    <span 
                      key={sport}
                      className="bg-[#0F7A33] text-white px-3 py-1 rounded-full text-xs"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Price */}
                <div className="text-[#0F7A33] mb-2" style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
                  {turf.price}
                </div>

                {/* Turf Name */}
                <h3 className="mb-2" style={{ fontSize: '20px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                  {turf.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {turf.description}
                </p>

                {/* Location & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{turf.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#0F7A33] fill-[#0F7A33]" />
                    <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                      {turf.rating}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#E7F8ED] rounded-lg flex items-center justify-center">
                    <Wifi className="w-4 h-4 text-[#0F7A33]" />
                  </div>
                  <div className="w-8 h-8 bg-[#E7F8ED] rounded-lg flex items-center justify-center">
                    <Sun className="w-4 h-4 text-[#0F7A33]" />
                  </div>
                  <div className="w-8 h-8 bg-[#E7F8ED] rounded-lg flex items-center justify-center">
                    <Car className="w-4 h-4 text-[#0F7A33]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
