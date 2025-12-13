import { useNavigate } from 'react-router-dom';
import { Trophy, Calendar, MapPin, Users, Plus, Filter } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { DashboardSidebar } from '../components/DashboardSidebar';

export default function TournamentsPage() {
  const navigate = useNavigate();

  const tournaments = [
    {
      id: 1,
      title: 'Summer Football League 2024',
      sport: 'Football',
      date: '2024-12-25',
      location: 'Manchester City Academy',
      participants: 12,
      maxParticipants: 16,
      prize: '$500',
      status: 'open',
      image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjU0NzUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Cricket Championship',
      sport: 'Cricket',
      date: '2025-01-05',
      location: 'Barcelona Academy',
      participants: 8,
      maxParticipants: 12,
      prize: '$750',
      status: 'open',
      image: 'https://images.unsplash.com/photo-1730739628091-133de587ad14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGdyb3VuZHxlbnwxfHx8fDE3NjU0NzUwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Basketball 3v3 Tournament',
      sport: 'Basketball',
      date: '2024-12-30',
      location: 'Champions Basketball Arena',
      participants: 16,
      maxParticipants: 16,
      prize: '$400',
      status: 'full',
      image: 'https://images.unsplash.com/photo-1709552899537-8f0a171aaf40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBvdXRkb29yfGVufDF8fHx8MTc2NTQ2MTY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
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
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 
                  className="mb-2" 
                  style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
                >
                  Tournaments
                </h1>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Join exciting tournaments or create your own
                </p>
              </div>
              <button
                onClick={() => navigate('/tournaments/create')}
                className="bg-[#0F7A33] text-white px-6 py-3 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg flex items-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
              >
                <Plus className="w-5 h-5" />
                <span>Create Tournament</span>
              </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <select
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <option value="">All Sports</option>
                  <option value="football">Football</option>
                  <option value="cricket">Cricket</option>
                  <option value="basketball">Basketball</option>
                  <option value="badminton">Badminton</option>
                </select>
                <select
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <option value="">All Status</option>
                  <option value="open">Open</option>
                  <option value="full">Full</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
                <button
                  className="bg-[#E7F8ED] text-[#0F7A33] px-6 py-3 rounded-xl hover:bg-[#0F7A33] hover:text-white transition-colors flex items-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                >
                  <Filter className="w-5 h-5" />
                  <span>More Filters</span>
                </button>
              </div>
            </div>

            {/* Tournament Cards */}
            <div className="grid grid-cols-1 gap-6">
              {tournaments.map((tournament) => (
                <div 
                  key={tournament.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-80 h-56 relative overflow-hidden flex-shrink-0">
                      <img 
                        src={tournament.image} 
                        alt={tournament.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span 
                          className={`px-4 py-2 rounded-full text-white text-sm ${
                            tournament.status === 'open' ? 'bg-[#0F7A33]' : 'bg-red-500'
                          }`}
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                        >
                          {tournament.status === 'open' ? 'Open' : 'Full'}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span 
                              className="bg-[#E7F8ED] text-[#0F7A33] px-3 py-1 rounded-full text-sm"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                            >
                              {tournament.sport}
                            </span>
                          </div>
                          <h3 
                            className="mb-2" 
                            style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                          >
                            {tournament.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Prize Pool
                          </p>
                          <p 
                            className="text-[#0F7A33]" 
                            style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                          >
                            {tournament.prize}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#E7F8ED] rounded-xl flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-[#0F7A33]" />
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Date
                            </p>
                            <p 
                              className="text-gray-900" 
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                            >
                              {new Date(tournament.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#E7F8ED] rounded-xl flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-[#0F7A33]" />
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Location
                            </p>
                            <p 
                              className="text-gray-900" 
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                            >
                              {tournament.location.split(' ')[0]}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#E7F8ED] rounded-xl flex items-center justify-center">
                            <Users className="w-5 h-5 text-[#0F7A33]" />
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Participants
                            </p>
                            <p 
                              className="text-gray-900" 
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                            >
                              {tournament.participants}/{tournament.maxParticipants}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-[#0F7A33] h-full rounded-full"
                            style={{ width: `${(tournament.participants / tournament.maxParticipants) * 100}%` }}
                          />
                        </div>
                      </div>

                      <button
                        disabled={tournament.status === 'full'}
                        className={`w-full py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 ${
                          tournament.status === 'open'
                            ? 'bg-[#0F7A33] text-white hover:bg-[#07391A]'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                      >
                        <Trophy className="w-5 h-5" />
                        <span>{tournament.status === 'open' ? 'Join Tournament' : 'Tournament Full'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
