import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, DollarSign, TrendingUp, Users, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { DashboardSidebar } from '../components/DashboardSidebar';

export default function OwnerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing' | 'past'>('upcoming');

  const stats = [
    { label: 'Total Revenue', value: '$12,450', icon: DollarSign, color: 'bg-[#0F7A33]', change: '+12.5%' },
    { label: 'Total Bookings', value: '248', icon: Calendar, color: 'bg-[#07391A]', change: '+8.2%' },
    { label: 'Active Turfs', value: '3', icon: TrendingUp, color: 'bg-[#0F7A33]', change: '0%' },
    { label: 'Today\'s Bookings', value: '12', icon: Users, color: 'bg-[#07391A]', change: '+3' },
  ];

  const upcomingBookings = [
    {
      id: 'BK001',
      customerName: 'John Doe',
      turf: 'Manchester City Academy',
      date: '2024-12-20',
      time: '06:00 AM - 08:00 AM',
      amount: 100,
      status: 'confirmed',
    },
    {
      id: 'BK002',
      customerName: 'Jane Smith',
      turf: 'Barcelona Academy',
      date: '2024-12-20',
      time: '10:00 AM - 11:00 AM',
      amount: 50,
      status: 'confirmed',
    },
  ];

  const ongoingBookings = [
    {
      id: 'BK003',
      customerName: 'Mike Johnson',
      turf: 'Manchester City Academy',
      date: '2024-12-15',
      time: '02:00 PM - 03:00 PM',
      amount: 50,
      status: 'in-progress',
    },
  ];

  const pastBookings = [
    {
      id: 'BK004',
      customerName: 'Sarah Williams',
      turf: 'Barcelona Academy',
      date: '2024-12-10',
      time: '05:00 PM - 06:00 PM',
      amount: 50,
      status: 'completed',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return { bg: 'bg-blue-100', text: 'text-blue-700', icon: AlertCircle };
      case 'in-progress':
        return { bg: 'bg-green-100', text: 'text-green-700', icon: Clock };
      case 'completed':
        return { bg: 'bg-gray-100', text: 'text-gray-700', icon: CheckCircle };
      case 'cancelled':
        return { bg: 'bg-red-100', text: 'text-red-700', icon: XCircle };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', icon: AlertCircle };
    }
  };

  const renderBookings = (bookings: typeof upcomingBookings) => (
    <div className="space-y-4">
      {bookings.map((booking) => {
        const statusBadge = getStatusBadge(booking.status);
        const StatusIcon = statusBadge.icon;
        
        return (
          <div 
            key={booking.id}
            className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 
                    style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                  >
                    {booking.customerName}
                  </h3>
                  <span 
                    className={`${statusBadge.bg} ${statusBadge.text} px-3 py-1 rounded-full text-xs flex items-center gap-1`}
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                  >
                    <StatusIcon className="w-3 h-3" />
                    {booking.status.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Booking ID: <span className="font-semibold">{booking.id}</span>
                </p>
                <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                  {booking.turf}
                </p>
              </div>
              <div className="text-right">
                <p 
                  className="text-[#0F7A33] mb-1" 
                  style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  ${booking.amount}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-5 h-5 text-[#0F7A33]" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}>
                  {new Date(booking.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5 text-[#0F7A33]" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}>
                  {booking.time}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <DashboardSidebar userType="owner" />

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 
                className="mb-2" 
                style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
              >
                Owner Dashboard
              </h1>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Manage your turfs and track performance
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-600 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {stat.label}
                    </p>
                    <div className="flex items-end justify-between">
                      <p 
                        className="text-gray-900" 
                        style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                      >
                        {stat.value}
                      </p>
                      <span 
                        className="text-[#0F7A33] text-sm"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Revenue Chart Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 
                className="mb-6" 
                style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
              >
                Revenue Overview
              </h2>
              <div className="h-64 bg-gradient-to-t from-[#E7F8ED] to-white rounded-xl flex items-end justify-center p-6">
                <div className="flex items-end gap-3 h-full w-full max-w-2xl">
                  {[65, 45, 80, 55, 90, 70, 85].map((height, idx) => (
                    <div 
                      key={idx} 
                      className="flex-1 bg-[#0F7A33] rounded-t-lg hover:bg-[#07391A] transition-colors cursor-pointer"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
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
                  onClick={() => setActiveTab('ongoing')}
                  className={`pb-4 px-4 transition-all ${
                    activeTab === 'ongoing'
                      ? 'border-b-2 border-[#0F7A33] text-[#0F7A33]'
                      : 'text-gray-600 hover:text-[#0F7A33]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
                >
                  Ongoing
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

              {activeTab === 'upcoming' && renderBookings(upcomingBookings)}
              {activeTab === 'ongoing' && renderBookings(ongoingBookings)}
              {activeTab === 'past' && renderBookings(pastBookings)}
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
