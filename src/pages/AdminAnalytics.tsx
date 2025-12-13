import { TrendingUp, DollarSign, Users, Calendar, ArrowUp, ArrowDown } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';

export default function AdminAnalytics() {
  const stats = [
    { 
      label: 'Total Revenue', 
      value: '$45,280', 
      change: '+12.5%', 
      trend: 'up',
      icon: DollarSign, 
      color: 'bg-[#0F7A33]' 
    },
    { 
      label: 'Total Bookings', 
      value: '1,248', 
      change: '+8.2%', 
      trend: 'up',
      icon: Calendar, 
      color: 'bg-[#07391A]' 
    },
    { 
      label: 'Active Users', 
      value: '856', 
      change: '+15.3%', 
      trend: 'up',
      icon: Users, 
      color: 'bg-[#0F7A33]' 
    },
    { 
      label: 'Turf Owners', 
      value: '42', 
      change: '-2.1%', 
      trend: 'down',
      icon: TrendingUp, 
      color: 'bg-[#07391A]' 
    },
  ];

  const topTurfs = [
    { name: 'Manchester City Academy', bookings: 145, revenue: '$7,250' },
    { name: 'Barcelona Academy', bookings: 132, revenue: '$6,600' },
    { name: 'Champions Basketball Arena', bookings: 98, revenue: '$5,390' },
    { name: 'Elite Sports Center', bookings: 87, revenue: '$3,480' },
    { name: 'Tennis Court Premium', bookings: 76, revenue: '$3,420' },
  ];

  const monthlyData = [
    { month: 'Jan', revenue: 4200, bookings: 120 },
    { month: 'Feb', revenue: 3800, bookings: 95 },
    { month: 'Mar', revenue: 5100, bookings: 150 },
    { month: 'Apr', revenue: 4600, bookings: 135 },
    { month: 'May', revenue: 6200, bookings: 180 },
    { month: 'Jun', revenue: 5800, bookings: 165 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 
            className="mb-2" 
            style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
          >
            Analytics Dashboard
          </h1>
          <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            Monitor platform performance and user activity
          </p>
        </div>

        {/* Stats Overview */}
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
                  <div className={`flex items-center gap-1 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    <span 
                      className="text-sm"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <h2 
              className="mb-6" 
              style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
            >
              Revenue & Bookings Trend
            </h2>
            <div className="h-80 bg-gradient-to-t from-[#E7F8ED] to-white rounded-xl flex items-end justify-between p-6">
              {monthlyData.map((data, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full flex flex-col items-center gap-1">
                    <div 
                      className="w-full bg-[#0F7A33] rounded-t-lg hover:bg-[#07391A] transition-colors cursor-pointer"
                      style={{ height: `${(data.revenue / 6200) * 240}px` }}
                    />
                    <p className="text-gray-600 text-xs mt-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                      {data.month}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#0F7A33] rounded"></div>
                <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Revenue</span>
              </div>
            </div>
          </div>

          {/* Top Performing Turfs */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 
              className="mb-6" 
              style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
            >
              Top Performing Turfs
            </h2>
            <div className="space-y-4">
              {topTurfs.map((turf, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-[#E7F8ED] rounded-xl hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#0F7A33] rounded-lg flex items-center justify-center">
                        <span className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
                          {idx + 1}
                        </span>
                      </div>
                      <span 
                        className="text-gray-900 text-sm" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                      >
                        {turf.name.split(' ')[0]}...
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {turf.bookings} bookings
                    </span>
                    <span className="text-[#0F7A33]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
                      {turf.revenue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 
              className="mb-4" 
              style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
            >
              User Growth
            </h3>
            <div className="h-32 bg-gradient-to-r from-[#E7F8ED] to-[#0F7A33] rounded-xl flex items-end p-4">
              <div className="flex items-end gap-1 w-full">
                {[40, 55, 48, 65, 72, 68, 80, 75, 85, 90].map((height, idx) => (
                  <div 
                    key={idx}
                    className="flex-1 bg-white rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 
              className="mb-4" 
              style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
            >
              Average Booking Value
            </h3>
            <p 
              className="text-[#0F7A33] mb-2" 
              style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
            >
              $58.50
            </p>
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              +$4.20 from last month
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 
              className="mb-4" 
              style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
            >
              Turf Utilization
            </h3>
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#E7F8ED"
                  strokeWidth="12"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#0F7A33"
                  strokeWidth="12"
                  strokeDasharray={`${2 * Math.PI * 40 * 0.73} ${2 * Math.PI * 40}`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className="text-[#0F7A33]" 
                  style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  73%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
