import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MapPin, Star, Calendar, Clock, Wifi, Sun, Car, Users, Phone, Mail, Share2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';

export default function TurfDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('2024-12-15');

  // Mock turf data
  const turf = {
    id: id || '1',
    name: 'Manchester City Academy',
    image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjU0NzUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '$50',
    location: 'Manchester, UK',
    rating: '4.5',
    reviews: 128,
    description: 'Premier football turf with professional-grade synthetic grass. Perfect for practice sessions, friendly matches, and tournaments. Features modern changing rooms, shower facilities, and ample parking space.',
    sports: ['Football', 'Cricket'],
    features: [
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Sun, label: 'Floodlights' },
      { icon: Car, label: 'Parking' },
      { icon: Users, label: 'Changing Rooms' },
    ],
    contact: {
      phone: '+44 123 456 7890',
      email: 'info@manchestercity.com',
    },
    images: [
      'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjU0NzUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1730739628091-133de587ad14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGdyb3VuZHxlbnwxfHx8fDE3NjU0NzUwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  };

  const availableSlots = [
    { time: '06:00 AM - 07:00 AM', available: true },
    { time: '07:00 AM - 08:00 AM', available: true },
    { time: '08:00 AM - 09:00 AM', available: false },
    { time: '09:00 AM - 10:00 AM', available: true },
    { time: '10:00 AM - 11:00 AM', available: true },
    { time: '11:00 AM - 12:00 PM', available: false },
    { time: '12:00 PM - 01:00 PM', available: true },
    { time: '01:00 PM - 02:00 PM', available: true },
    { time: '02:00 PM - 03:00 PM', available: true },
    { time: '03:00 PM - 04:00 PM', available: false },
    { time: '04:00 PM - 05:00 PM', available: true },
    { time: '05:00 PM - 06:00 PM', available: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img 
              src={turf.images[0]} 
              alt={turf.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {turf.images.slice(1).map((img, idx) => (
              <div key={idx} className="relative h-44 rounded-2xl overflow-hidden">
                <img 
                  src={img} 
                  alt={`${turf.name} ${idx + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Basic Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 
                    className="mb-2" 
                    style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
                  >
                    {turf.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>{turf.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-[#0F7A33] fill-[#0F7A33]" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                        {turf.rating} <span className="text-gray-500">({turf.reviews} reviews)</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bg-[#E7F8ED] text-[#0F7A33] p-3 rounded-xl hover:bg-[#0F7A33] hover:text-white transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Sports Available */}
              <div className="flex gap-3 mb-6">
                {turf.sports.map((sport) => (
                  <span 
                    key={sport}
                    className="bg-[#0F7A33] text-white px-4 py-2 rounded-full"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                  >
                    {sport}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p 
                className="text-gray-700 leading-relaxed" 
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
              >
                {turf.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 
                className="mb-6" 
                style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
              >
                Facilities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {turf.features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-[#E7F8ED] rounded-xl p-4 text-center"
                    >
                      <Icon className="w-8 h-8 text-[#0F7A33] mx-auto mb-2" />
                      <span 
                        className="text-gray-700 text-sm" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                      >
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 
                className="mb-6" 
                style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
              >
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#0F7A33]" />
                  </div>
                  <span 
                    className="text-gray-700" 
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
                  >
                    {turf.contact.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#0F7A33]" />
                  </div>
                  <span 
                    className="text-gray-700" 
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
                  >
                    {turf.contact.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-6">
              <div className="text-center mb-6">
                <div 
                  className="text-[#0F7A33] mb-2" 
                  style={{ fontSize: '48px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  {turf.price}
                  <span className="text-gray-500 text-2xl">/hr</span>
                </div>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Best price guaranteed
                </p>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <label 
                  className="block text-gray-700 mb-3" 
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                >
                  Select Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              {/* Available Slots Preview */}
              <div className="mb-6">
                <label 
                  className="block text-gray-700 mb-3" 
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                >
                  Available Slots
                </label>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {availableSlots.slice(0, 4).map((slot, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl flex items-center justify-between ${
                        slot.available 
                          ? 'bg-[#E7F8ED] text-[#0F7A33]' 
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600' }}>
                          {slot.time}
                        </span>
                      </div>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>
                        {slot.available ? 'Available' : 'Booked'}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-2 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  +{availableSlots.length - 4} more slots
                </p>
              </div>

              {/* Book Now Button */}
              <button
                onClick={() => navigate(`/turf/${id}/slots`)}
                className="w-full bg-[#0F7A33] text-white py-4 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
              >
                View All Slots & Book
              </button>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
