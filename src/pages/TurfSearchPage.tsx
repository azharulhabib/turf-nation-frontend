import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, MapPin, Heart, Star, Wifi, Sun, Car } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';

export default function TurfSearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialState = location.state || {};

  const [filters, setFilters] = useState({
    sport: initialState.sport || initialState.type || '',
    location: initialState.location || '',
    date: initialState.date || '',
    price: initialState.price || '',
  });

  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    if (location.state?.sport || location.state?.type) {
      setFilters((prev) => ({
        ...prev,
        sport: location.state.sport || location.state.type || prev.sport,
        location: location.state.location !== undefined ? location.state.location : prev.location,
        date: location.state.date !== undefined ? location.state.date : prev.date,
        price: location.state.price !== undefined ? location.state.price : prev.price,
      }));
    }
  }, [location.state]);

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1080&q=80',
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
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8 flex flex-col md:flex-row gap-3 max-w-5xl items-center">
          {/* Sport Filter */}
          <div className="flex-1 px-4 py-2">
            <label className="block text-gray-500 text-xs mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Type</label>
            <select
              value={filters.sport}
              onChange={(e) => setFilters({ ...filters, sport: e.target.value })}
              className="w-full outline-none text-gray-900 bg-transparent cursor-pointer"
              style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
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

          <div className="hidden md:block w-px h-12 bg-gray-200" />

          {/* Location Filter */}
          <div className="flex-1 px-4 py-2">
            <label className="block text-gray-500 text-xs mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Location</label>
            <input
              type="text"
              placeholder="Location"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="w-full outline-none text-gray-900 bg-transparent"
              style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200" />

          {/* Date Filter */}
          <div className="flex-1 px-4 py-2">
            <label className="block text-gray-500 text-xs mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Date</label>
            <input
              type="date"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              className="w-full outline-none text-gray-900 bg-transparent cursor-pointer"
              style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200" />

          {/* Price Filter */}
          <div className="flex-1 px-4 py-2">
            <label className="block text-gray-500 text-xs mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Price</label>
            <input
              type="text"
              placeholder="Max Price"
              value={filters.price}
              onChange={(e) => setFilters({ ...filters, price: e.target.value })}
              className="w-full outline-none text-gray-900 bg-transparent"
              style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          <button
            type="button"
            className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center shadow-lg cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* Results Count */}
        {(() => {
          const filteredTurfs = turfs.filter((turf) => {
            if (filters.sport && !turf.sports.some((s) => s.toLowerCase() === filters.sport.toLowerCase())) {
              return false;
            }
            if (filters.location && !turf.location.toLowerCase().includes(filters.location.toLowerCase())) {
              return false;
            }
            if (filters.price) {
              const maxPrice = parseFloat(filters.price.replace(/[^0-9.]/g, ''));
              const turfPrice = parseFloat(turf.price.replace(/[^0-9.]/g, ''));
              if (!isNaN(maxPrice) && !isNaN(turfPrice) && turfPrice > maxPrice) {
                return false;
              }
            }
            return true;
          });

          return (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p 
                  className="text-gray-600" 
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
                >
                  Showing <span className="font-semibold text-[#0F7A33]">{filteredTurfs.length}</span> turfs available
                </p>
                {(filters.sport || filters.location || filters.price || filters.date) && (
                  <button
                    onClick={() => setFilters({ sport: '', location: '', date: '', price: '' })}
                    className="text-[#0F7A33] hover:underline text-sm font-semibold cursor-pointer"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              {filteredTurfs.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center my-6">
                  <p className="text-gray-600 text-lg mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    No turfs found matching your filter criteria.
                  </p>
                  <button
                    onClick={() => setFilters({ sport: '', location: '', date: '', price: '' })}
                    className="bg-[#0F7A33] text-white px-6 py-2.5 rounded-full hover:bg-[#07391A] transition-colors cursor-pointer"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                /* Turf Cards Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTurfs.map((turf) => (
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
                          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md cursor-pointer"
                          onClick={(e) => toggleFavorite(e, turf.id)}
                          aria-label="Save to favorites"
                        >
                          <Heart className={`w-5 h-5 transition-colors ${favorites.includes(turf.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
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
              )}
            </>
          );
        })()}
      </div>

      <PageFooter />
    </div>
  );
}
