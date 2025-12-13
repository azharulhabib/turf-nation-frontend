import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Sun, Cloud, CloudRain } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [currentWeather, setCurrentWeather] = useState({
    temp: 26,
    condition: 'sunny' as 'sunny' | 'cloudy' | 'rainy',
  });

  // Simulate weather updates
  useEffect(() => {
    const conditions: ('sunny' | 'cloudy' | 'rainy')[] = ['sunny', 'cloudy', 'rainy'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const randomTemp = Math.floor(Math.random() * 10) + 22;
    setCurrentWeather({ temp: randomTemp, condition: randomCondition });
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const WeatherIcon = currentWeather.condition === 'sunny' ? Sun : 
                       currentWeather.condition === 'cloudy' ? Cloud : CloudRain;

  return (
    <header className="bg-[#1a3a1a] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white">TurfNation</span>
            </div>
            <span className="text-xl">TurfNation</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link to="/search" className="hover:text-green-400 transition-colors">
              Search
            </Link>
            {isAuthenticated && (
              <>
                {user?.role === 'user' && (
                  <>
                    <Link to="/dashboard" className="hover:text-green-400 transition-colors">
                      Dashboard
                    </Link>
                    <Link to="/tournaments" className="hover:text-green-400 transition-colors">
                      Tournaments
                    </Link>
                    <Link to="/rewards" className="hover:text-green-400 transition-colors">
                      Rewards
                    </Link>
                  </>
                )}
                {user?.role === 'owner' && (
                  <>
                    <Link to="/owner/dashboard" className="hover:text-green-400 transition-colors">
                      Dashboard
                    </Link>
                    <Link to="/owner/manage" className="hover:text-green-400 transition-colors">
                      Manage
                    </Link>
                  </>
                )}
              </>
            )}
          </nav>

          <div className="flex items-center gap-3">
            {/* Weather Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-green-700/50 rounded-lg">
              <WeatherIcon className="w-4 h-4" />
              <span className="text-sm">{currentWeather.temp}°C</span>
            </div>

            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 px-3 py-2 bg-green-700 rounded-lg">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 hover:bg-green-700 rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-white text-green-900 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}