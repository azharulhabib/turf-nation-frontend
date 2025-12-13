import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<'user' | 'owner'>('user');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect based on user type
    if (loginType === 'owner') {
      navigate('/owner/dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E7F8ED]">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Login Type Toggle */}
          <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2 mb-6">
            <button
              onClick={() => setLoginType('user')}
              className={`flex-1 py-3 rounded-xl transition-all ${
                loginType === 'user'
                  ? 'bg-[#0F7A33] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            >
              User Login
            </button>
            <button
              onClick={() => setLoginType('owner')}
              className={`flex-1 py-3 rounded-xl transition-all ${
                loginType === 'owner'
                  ? 'bg-[#0F7A33] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            >
              Turf Owner Login
            </button>
          </div>

          {/* Login Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 
              className="text-center mb-2" 
              style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
            >
              Welcome Back
            </h1>
            <p 
              className="text-center text-gray-600 mb-8" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {loginType === 'owner' ? 'Manage your turfs and bookings' : 'Book your favorite turf'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] focus:border-transparent"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-[#0F7A33] hover:text-[#07391A] transition-colors text-sm"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#0F7A33] text-white py-3 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
              >
                Login
              </button>
            </form>

            {/* Sign Up Link */}
            <p 
              className="text-center mt-6 text-gray-600" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-[#0F7A33] hover:text-[#07391A] transition-colors"
                style={{ fontWeight: '600' }}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
