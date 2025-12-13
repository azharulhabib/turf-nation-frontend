import { useState } from 'react';
import { Plus, Edit, Trash2, MapPin, DollarSign, Upload, Image as ImageIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { DashboardSidebar } from '../components/DashboardSidebar';

export default function TurfManagementPage() {
  const [showAddTurf, setShowAddTurf] = useState(false);

  const turfs = [
    {
      id: 1,
      name: 'Manchester City Academy',
      location: 'Manchester, UK',
      pricePerHour: 50,
      sports: ['Football', 'Cricket'],
      status: 'active',
      image: 'https://images.unsplash.com/photo-1713815713124-362af0201f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHR1cmYlMjBmaWVsZHxlbnwxfHx8fDE3NjU0NzUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Barcelona Academy',
      location: 'Barcelona, Spain',
      pricePerHour: 50,
      sports: ['Cricket', 'Football'],
      status: 'active',
      image: 'https://images.unsplash.com/photo-1730739628091-133de587ad14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGdyb3VuZHxlbnwxfHx8fDE3NjU0NzUwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

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
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 
                  className="mb-2" 
                  style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
                >
                  Turf Management
                </h1>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Manage your turf listings, pricing, and availability
                </p>
              </div>
              <button
                onClick={() => setShowAddTurf(!showAddTurf)}
                className="bg-[#0F7A33] text-white px-6 py-3 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg flex items-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
              >
                <Plus className="w-5 h-5" />
                <span>Add New Turf</span>
              </button>
            </div>

            {/* Add Turf Form */}
            {showAddTurf && (
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 
                  className="mb-6" 
                  style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  Add New Turf
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        className="block text-gray-700 mb-2" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                      >
                        Turf Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter turf name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>

                    <div>
                      <label 
                        className="block text-gray-700 mb-2" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                      >
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="City, Country"
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label 
                        className="block text-gray-700 mb-2" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                      >
                        Price Per Hour ($)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          placeholder="50"
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label 
                        className="block text-gray-700 mb-2" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                      >
                        Sports Available
                      </label>
                      <select
                        multiple
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <option value="Football">Football</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Tennis">Tennis</option>
                      </select>
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label 
                      className="block text-gray-700 mb-2" 
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                    >
                      Turf Images
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#0F7A33] transition-colors cursor-pointer">
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Click to upload or drag and drop
                      </p>
                      <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-[#0F7A33] text-white py-3 rounded-xl hover:bg-[#07391A] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                    >
                      Add Turf
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddTurf(false)}
                      className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-300 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Turf List */}
            <div className="grid grid-cols-1 gap-6">
              {turfs.map((turf) => (
                <div 
                  key={turf.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-80 h-56 relative overflow-hidden flex-shrink-0">
                      <img 
                        src={turf.image} 
                        alt={turf.name}
                        className="w-full h-full object-cover"
                      />
                      <span 
                        className="absolute top-4 right-4 bg-[#0F7A33] text-white px-4 py-2 rounded-full text-sm"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                      >
                        {turf.status}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <h3 
                        className="mb-2" 
                        style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                      >
                        {turf.name}
                      </h3>

                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <MapPin className="w-5 h-5" />
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>{turf.location}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <DollarSign className="w-5 h-5 text-[#0F7A33]" />
                        <span 
                          className="text-[#0F7A33]" 
                          style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                        >
                          ${turf.pricePerHour}
                          <span className="text-gray-600 text-base">/hour</span>
                        </span>
                      </div>

                      <div className="flex gap-2 mb-6">
                        {turf.sports.map((sport) => (
                          <span 
                            key={sport}
                            className="bg-[#E7F8ED] text-[#0F7A33] px-3 py-1 rounded-full text-sm"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                          >
                            {sport}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <button
                          className="bg-[#0F7A33] text-white px-6 py-2 rounded-xl hover:bg-[#07391A] transition-colors flex items-center gap-2"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                        >
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                        <button
                          className="bg-white text-red-600 border-2 border-red-600 px-6 py-2 rounded-xl hover:bg-red-50 transition-colors flex items-center gap-2"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                        </button>
                      </div>
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
