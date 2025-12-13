import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Calendar } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { DashboardSidebar } from '../components/DashboardSidebar';

export default function WeatherPage() {
  const currentWeather = {
    temperature: 22,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    precipitation: 20,
  };

  const forecast = [
    { day: 'Mon', temp: 24, condition: 'Sunny', icon: Sun, precipitation: 10 },
    { day: 'Tue', temp: 23, condition: 'Partly Cloudy', icon: Cloud, precipitation: 20 },
    { day: 'Wed', temp: 20, condition: 'Rainy', icon: CloudRain, precipitation: 80 },
    { day: 'Thu', temp: 21, condition: 'Cloudy', icon: Cloud, precipitation: 40 },
    { day: 'Fri', temp: 25, condition: 'Sunny', icon: Sun, precipitation: 5 },
    { day: 'Sat', temp: 26, condition: 'Sunny', icon: Sun, precipitation: 5 },
    { day: 'Sun', temp: 24, condition: 'Partly Cloudy', icon: Cloud, precipitation: 15 },
  ];

  const upcomingBookings = [
    { 
      date: '2024-12-20',
      turf: 'Manchester City Academy',
      time: '06:00 AM - 08:00 AM',
      weather: { temp: 23, condition: 'Partly Cloudy', precipitation: 20, suitable: true }
    },
    { 
      date: '2024-12-22',
      turf: 'Barcelona Academy',
      time: '05:00 PM - 06:00 PM',
      weather: { temp: 20, condition: 'Rainy', precipitation: 80, suitable: false }
    },
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
                Weather & Turf Conditions
              </h1>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Plan your bookings with weather forecasts
              </p>
            </div>

            {/* Current Weather */}
            <div className="bg-gradient-to-br from-[#0F7A33] to-[#07391A] rounded-2xl shadow-xl p-8 mb-8 text-white">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-white opacity-90 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Current Weather
                  </p>
                  <h2 
                    className="text-white mb-2" 
                    style={{ fontSize: '64px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                  >
                    {currentWeather.temperature}°C
                  </h2>
                  <p className="text-white opacity-90 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {currentWeather.condition}
                  </p>
                </div>
                <Cloud className="w-24 h-24 text-white opacity-80" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white border-opacity-30">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-5 h-5 text-white opacity-80" />
                    <span className="text-white opacity-90 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Humidity
                    </span>
                  </div>
                  <p className="text-white" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
                    {currentWeather.humidity}%
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-5 h-5 text-white opacity-80" />
                    <span className="text-white opacity-90 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Wind Speed
                    </span>
                  </div>
                  <p className="text-white" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
                    {currentWeather.windSpeed} km/h
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-white opacity-80" />
                    <span className="text-white opacity-90 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Visibility
                    </span>
                  </div>
                  <p className="text-white" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
                    {currentWeather.visibility} km
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CloudRain className="w-5 h-5 text-white opacity-80" />
                    <span className="text-white opacity-90 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Rain Chance
                    </span>
                  </div>
                  <p className="text-white" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
                    {currentWeather.precipitation}%
                  </p>
                </div>
              </div>
            </div>

            {/* 7-Day Forecast */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 
                className="mb-6" 
                style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
              >
                7-Day Forecast
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                {forecast.map((day, idx) => {
                  const Icon = day.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-[#E7F8ED] rounded-xl p-4 text-center hover:shadow-lg transition-all"
                    >
                      <p 
                        className="text-gray-700 mb-3" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                      >
                        {day.day}
                      </p>
                      <Icon className="w-12 h-12 text-[#0F7A33] mx-auto mb-3" />
                      <p 
                        className="text-gray-900 mb-2" 
                        style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                      >
                        {day.temp}°
                      </p>
                      <p className="text-gray-600 text-xs mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {day.condition}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-[#0F7A33]">
                        <CloudRain className="w-3 h-3" />
                        <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                          {day.precipitation}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Weather for Upcoming Bookings */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 
                className="mb-6" 
                style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
              >
                Weather for Your Bookings
              </h2>
              <div className="space-y-4">
                {upcomingBookings.map((booking, idx) => (
                  <div 
                    key={idx}
                    className={`border-2 rounded-xl p-6 ${
                      booking.weather.suitable 
                        ? 'border-[#0F7A33] bg-[#E7F8ED]' 
                        : 'border-red-300 bg-red-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="w-5 h-5 text-[#0F7A33]" />
                          <h3 
                            style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                          >
                            {booking.turf}
                          </h3>
                        </div>
                        <p className="text-gray-700 mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                          {new Date(booking.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                        <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {booking.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <p 
                          className="text-gray-900 mb-1" 
                          style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                        >
                          {booking.weather.temp}°C
                        </p>
                        <p className="text-gray-700 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {booking.weather.condition}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                      <div className="flex items-center gap-2">
                        <CloudRain className="w-5 h-5 text-[#0F7A33]" />
                        <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                          Rain: {booking.weather.precipitation}%
                        </span>
                      </div>
                      {booking.weather.suitable ? (
                        <span 
                          className="bg-[#0F7A33] text-white px-4 py-2 rounded-full text-sm"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                        >
                          ✓ Good Conditions
                        </span>
                      ) : (
                        <span 
                          className="bg-red-500 text-white px-4 py-2 rounded-full text-sm"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                        >
                          ⚠ Weather Alert
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
