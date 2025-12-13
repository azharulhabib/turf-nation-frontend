import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, QrCode, X, RefreshCw, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { DashboardSidebar } from '../components/DashboardSidebar';

export default function UserDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingBookings = [
    {
      id: 'TRF001',
      turfName: 'Manchester City Academy',
      location: 'Manchester, UK',
      date: '2024-12-20',
      slots: ['06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM'],
      price: 100,
      image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjU0NzUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'TRF002',
      turfName: 'Barcelona Academy',
      location: 'Barcelona, Spain',
      date: '2024-12-22',
      slots: ['05:00 PM - 06:00 PM'],
      price: 50,
      image: 'https://images.unsplash.com/photo-1730739628091-133de587ad14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGdyb3VuZHxlbnwxfHx8fDE3NjU0NzUwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const pastBookings = [
    {
      id: 'TRF003',
      turfName: 'Tennis Court Premium',
      location: 'London, UK',
      date: '2024-12-10',
      slots: ['10:00 AM - 11:00 AM'],
      price: 45,
      image: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMG91dGRvb3J8ZW58MXx8fHwxNzY1NDIxNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'completed',
    },
  ];

  const stats = [
    { label: 'Total Bookings', value: '12', color: 'bg-[#0F7A33]' },
    { label: 'Hours Played', value: '24', color: 'bg-[#07391A]' },
    { label: 'Upcoming', value: '2', color: 'bg-[#0F7A33]' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <DashboardSidebar userType="user" />

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 
                className="mb-2" 
                style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
              >
                My Dashboard
              </h1>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Manage your bookings and track your activity
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </p>
                  <p 
                    className="text-gray-900" 
                    style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Bookings Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* Tabs */}
              <div className="flex gap-4 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`pb-4 px-4 transition-all ${
                    activeTab === 'upcoming'
                      ? 'border-b-2 border-[#0F7A33] text-[#0F7A33]'
                      : 'text-gray-600 hover:text-[#0F7A33]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
                >
                  Upcoming Bookings
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`pb-4 px-4 transition-all ${
                    activeTab === 'past'
                      ? 'border-b-2 border-[#0F7A33] text-[#0F7A33]'
                      : 'text-gray-600 hover:text-[#0F7A33]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
                >
                  Past Bookings
                </button>
              </div>

              {/* Upcoming Bookings */}
              {activeTab === 'upcoming' && (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div 
                      key={booking.id} 
                      className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Image */}
                        <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                          <img 
                            src={booking.image} 
                            alt={booking.turfName}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 
                                className="mb-1" 
                                style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                              >
                                {booking.turfName}
                              </h3>
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                                  {booking.location}
                                </span>
                              </div>
                            </div>
                            <span 
                              className="bg-[#E7F8ED] text-[#0F7A33] px-4 py-1 rounded-full text-sm"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                            >
                              {booking.id}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-gray-700">
                              <Calendar className="w-5 h-5 text-[#0F7A33]" />
                              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                                {new Date(booking.date).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric', 
                                  year: 'numeric' 
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <Clock className="w-5 h-5 text-[#0F7A33]" />
                              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                                {booking.slots.length} slot{booking.slots.length > 1 ? 's' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            <button
                              onClick={() => navigate(`/qr/${booking.id}`)}
                              className="bg-[#0F7A33] text-white px-6 py-2 rounded-xl hover:bg-[#07391A] transition-colors flex items-center gap-2"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                            >
                              <QrCode className="w-4 h-4" />
                              <span>View QR</span>
                            </button>
                            <button
                              className="bg-white text-[#0F7A33] border-2 border-[#0F7A33] px-6 py-2 rounded-xl hover:bg-[#E7F8ED] transition-colors flex items-center gap-2"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                            >
                              <RefreshCw className="w-4 h-4" />
                              <span>Reschedule</span>
                            </button>
                            <button
                              className="bg-white text-red-600 border-2 border-red-600 px-6 py-2 rounded-xl hover:bg-red-50 transition-colors flex items-center gap-2"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                            >
                              <X className="w-4 h-4" />
                              <span>Cancel</span>
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Total
                          </p>
                          <p 
                            className="text-[#0F7A33]" 
                            style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                          >
                            ${booking.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Past Bookings */}
              {activeTab === 'past' && (
                <div className="space-y-4">
                  {pastBookings.map((booking) => (
                    <div 
                      key={booking.id} 
                      className="border border-gray-200 rounded-2xl p-6 opacity-75"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                          <img 
                            src={booking.image} 
                            alt={booking.turfName}
                            className="w-full h-full object-cover grayscale"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 
                                className="mb-1" 
                                style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                              >
                                {booking.turfName}
                              </h3>
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                                  {booking.location}
                                </span>
                              </div>
                            </div>
                            <span 
                              className="bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                            >
                              Completed
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-gray-700 mb-4">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                              {new Date(booking.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric', 
                                year: 'numeric' 
                              })}
                            </span>
                          </div>

                          <button
                            className="text-[#0F7A33] hover:text-[#07391A] transition-colors flex items-center gap-2"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                          >
                            <span>Book Again</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
