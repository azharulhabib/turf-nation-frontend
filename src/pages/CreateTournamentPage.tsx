import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Calendar, MapPin, Users, DollarSign, FileText, ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';

export default function CreateTournamentPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    sport: '',
    turf: '',
    date: '',
    startTime: '',
    endTime: '',
    maxParticipants: '',
    entryFee: '',
    prizePool: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock tournament creation
    navigate('/tournaments');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/tournaments')}
          className="flex items-center gap-2 text-[#0F7A33] hover:text-[#07391A] mb-6 transition-colors"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Tournaments</span>
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0F7A33] rounded-2xl mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 
              className="mb-2" 
              style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
            >
              Create Tournament
            </h1>
            <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Set up your tournament and invite players to join
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {/* Tournament Title */}
              <div>
                <label 
                  className="block text-gray-700 mb-2" 
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                >
                  Tournament Title
                </label>
                <div className="relative">
                  <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Summer Football League 2024"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sport */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Sport
                  </label>
                  <select
                    required
                    value={formData.sport}
                    onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="">Select Sport</option>
                    <option value="Football">Football</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Volleyball">Volleyball</option>
                  </select>
                </div>

                {/* Turf Selection */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Turf Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      required
                      value={formData.turf}
                      onChange={(e) => setFormData({ ...formData, turf: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <option value="">Select Turf</option>
                      <option value="1">Manchester City Academy</option>
                      <option value="2">Barcelona Academy</option>
                      <option value="3">Champions Basketball Arena</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Tournament Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Max Participants */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Max Participants
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      required
                      value={formData.maxParticipants}
                      onChange={(e) => setFormData({ ...formData, maxParticipants: e.target.value })}
                      placeholder="e.g., 16"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Start Time */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Start Time
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                {/* End Time */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    End Time
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                {/* Entry Fee */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Entry Fee
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      required
                      value={formData.entryFee}
                      onChange={(e) => setFormData({ ...formData, entryFee: e.target.value })}
                      placeholder="e.g., 25"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Prize Pool */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Prize Pool
                  </label>
                  <div className="relative">
                    <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      required
                      value={formData.prizePool}
                      onChange={(e) => setFormData({ ...formData, prizePool: e.target.value })}
                      placeholder="e.g., 500"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label 
                  className="block text-gray-700 mb-2" 
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                >
                  Tournament Description
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your tournament, rules, and any special requirements..."
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] resize-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0F7A33] text-white py-4 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
              >
                Create Tournament
              </button>
            </div>
          </form>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
