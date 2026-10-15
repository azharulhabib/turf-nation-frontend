import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, ArrowRight, Trophy, Users, Dumbbell, Shield, ChevronDown, Heart, Star, Wifi, Sun, Car, ChevronRight, Phone, Mail, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import heroImage from 'figma:asset/71e4abbd02d75b1872e364ad070d436fa7f31156.png';

export default function LandingPage() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    type: 'Football',
    location: 'Gulsan',
    date: '2024-05-24',
    price: '2000',
  });

  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search', { 
      state: { 
        sport: searchData.type, 
        type: searchData.type,
        location: searchData.location,
        date: searchData.date,
        price: searchData.price
      } 
    });
  };

  // Featured turfs with realistic data
  const featuredTurfs = [
    {
      id: 1,
      name: 'Manchester City Academy',
      image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjU0NzUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$50/hr',
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team…',
      location: 'Manchester, UK',
      rating: '4.5/10',
      features: ['wifi', 'lighting', 'parking'],
    },
    {
      id: 2,
      name: 'Barcelona Academy',
      image: 'https://images.unsplash.com/photo-1730739628091-133de587ad14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGdyb3VuZHxlbnwxfHx8fDE3NjU0NzUwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$50/hr',
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team…',
      location: 'Barcelona, Spain',
      rating: '4.5/10',
      features: ['wifi', 'lighting', 'parking'],
    },
    {
      id: 3,
      name: 'Tennis Court Premium',
      image: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMG91dGRvb3J8ZW58MXx8fHwxNzY1NDIxNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$50/hr',
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team…',
      location: 'London, UK',
      rating: '4.5/10',
      features: ['wifi', 'lighting', 'parking'],
    },
    {
      id: 4,
      name: 'Elite Sports Center',
      image: 'https://images.unsplash.com/photo-1624024834874-2a1611305604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NjU0NTE3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$50/hr',
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team…',
      location: 'New York, USA',
      rating: '4.5/10',
      features: ['wifi', 'lighting', 'parking'],
    },
    {
      id: 5,
      name: 'Champions Basketball Arena',
      image: 'https://images.unsplash.com/photo-1709552899537-8f0a171aaf40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBvdXRkb29yfGVufDF8fHx8MTc2NTQ2MTY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$50/hr',
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team…',
      location: 'Los Angeles, USA',
      rating: '4.5/10',
      features: ['wifi', 'lighting', 'parking'],
    },
    {
      id: 6,
      name: 'Beach Volleyball Paradise',
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1080&q=80',
      price: '$50/hr',
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team…',
      location: 'Miami, USA',
      rating: '4.5/10',
      features: ['wifi', 'lighting', 'parking'],
    },
  ];

  const categories = [
    { 
      name: 'Football', 
      image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjU0NzUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Cricket', 
      image: 'https://images.unsplash.com/photo-1730739628091-133de587ad14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGdyb3VuZHxlbnwxfHx8fDE3NjU0NzUwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Volleyball', 
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1080&q=80' 
    },
    { 
      name: 'Badminton', 
      image: 'https://images.unsplash.com/photo-1624024834874-2a1611305604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NjU0NTE3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080' 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* HERO SECTION WITH NAVBAR */}
      <section
        className="relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Navigation Bar - Using Navbar component */}
        <div className="relative z-10">
          <Navbar transparent={true} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 120px)' }}>
          <div className="text-center max-w-5xl">
            {/* Hero Title */}
            <h1 
              className="text-white mb-6 tracking-tight leading-tight" 
              style={{ fontSize: '64px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
            >
              BEST TURF BOOKING<br />PLATFORM IN YOUR AREA
            </h1>
            
            {/* Hero Subtitle */}
            <p 
              className="text-white mb-12 max-w-3xl mx-auto leading-relaxed" 
              style={{ fontSize: '18px', opacity: '0.95', fontFamily: 'Inter, sans-serif' }}
            >
              You can choose from a variety of sports, such as cricket, football, badminton, tennis, and more, and book your preferred time slot and location.
            </p>

            {/* Search Filter Bar */}
            <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row gap-3 max-w-5xl mx-auto items-center">
              <div className="flex-1 px-4 py-2">
                <label className="block text-gray-500 text-xs mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Type</label>
                <select
                  value={searchData.type}
                  onChange={(e) => setSearchData({ ...searchData, type: e.target.value })}
                  className="w-full outline-none text-gray-900 bg-transparent"
                  style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
                >
                  <option value="Football">Football</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Tennis">Tennis</option>
                </select>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gray-200" />
              
              <div className="flex-1 px-4 py-2">
                <label className="block text-gray-500 text-xs mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Location</label>
                <input
                  type="text"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="w-full outline-none text-gray-900 bg-transparent"
                  style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gray-200" />
              
              <div className="flex-1 px-4 py-2">
                <label className="block text-gray-500 text-xs mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Date</label>
                <input
                  type="date"
                  value={searchData.date}
                  onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                  className="w-full outline-none text-gray-900 bg-transparent"
                  style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gray-200" />
              
              <div className="flex-1 px-4 py-2">
                <label className="block text-gray-500 text-xs mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Price</label>
                <input
                  type="text"
                  value={searchData.price}
                  onChange={(e) => setSearchData({ ...searchData, price: e.target.value })}
                  placeholder="2000 TK"
                  className="w-full outline-none text-gray-900 bg-transparent"
                  style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              
              <button
                type="submit"
                className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center shadow-lg"
              >
                <Search className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* EXPLORE BEST TURF SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
              Explore best turf nearby you
            </h2>
            <button
              onClick={() => navigate('/search')}
              className="text-green-600 hover:text-green-700 flex items-center gap-2 group"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            >
              <span>See all</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTurfs.map((turf) => (
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
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Price */}
                  <div className="text-green-600 mb-2" style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
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
                      <Star className="w-4 h-4 text-green-600 fill-green-600" />
                      <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                        {turf.rating}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Wifi className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Sun className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Car className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TURF CATEGORY SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-center mb-12" style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
            Turf category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => navigate('/search', { state: { sport: category.name } })}
                className="relative h-64 rounded-3xl overflow-hidden hover:scale-105 transition-transform shadow-lg group cursor-pointer text-center"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07391A]/90 via-[#0F7A33]/30 to-transparent group-hover:from-[#07391A] transition-colors" />
                <div className="absolute bottom-6 left-4 right-4 text-center">
                  <h3 className="text-white" style={{ fontSize: '20px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                    {category.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-green-900/80" />
            
            <div className="relative z-10 py-24 text-center">
              <h2 
                className="text-white mb-8" 
                style={{ fontSize: '48px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
              >
                Register your Turf with us
              </h2>
              
              <button
                onClick={() => navigate('/register')}
                className="bg-green-600 text-white px-12 py-4 rounded-full hover:bg-green-700 transition-colors shadow-lg text-lg"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <PageFooter />
    </div>
  );
}