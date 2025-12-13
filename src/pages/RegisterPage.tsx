import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, MapPin, Building } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [registerType, setRegisterType] = useState<'user' | 'owner'>('user');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
    turfName: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E7F8ED]">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          {/* Register Type Toggle */}
          <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2 mb-6">
            <button
              onClick={() => setRegisterType('user')}
              className={`flex-1 py-3 rounded-xl transition-all ${
                registerType === 'user'
                  ? 'bg-[#0F7A33] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            >
              User Registration
            </button>
            <button
              onClick={() => setRegisterType('owner')}
              className={`flex-1 py-3 rounded-xl transition-all ${
                registerType === 'owner'
                  ? 'bg-[#0F7A33] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            >
              Turf Owner Registration
            </button>
          </div>

          {/* Registration Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 
              className="text-center mb-2" 
              style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
            >
              Create Account
            </h1>
            <p 
              className="text-center text-gray-600 mb-8" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {registerType === 'owner' ? 'Register your turf and start earning' : 'Join and book your favorite turfs'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name Field */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Location Field */}
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
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="City, Country"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Turf Name (Only for owners) */}
                {registerType === 'owner' && (
                  <div className="md:col-span-2">
                    <label 
                      className="block text-gray-700 mb-2" 
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                    >
                      Turf Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.turfName}
                        onChange={(e) => setFormData({ ...formData, turfName: e.target.value })}
                        placeholder="Enter turf name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] focus:border-transparent"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                  </div>
                )}

                {/* Password Field */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Create password"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Confirm password"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full bg-[#0F7A33] text-white py-3 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg mt-6"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <p 
              className="text-center mt-6 text-gray-600" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-[#0F7A33] hover:text-[#07391A] transition-colors"
                style={{ fontWeight: '600' }}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
