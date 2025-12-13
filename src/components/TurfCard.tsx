import { MapPin, Star, Users, Sun, Cloud, CloudRain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Turf } from '../data/mockData';

interface TurfCardProps {
  turf: Turf;
}

export function TurfCard({ turf }: TurfCardProps) {
  // Generate random weather for each turf
  const weatherConditions = ['sunny', 'cloudy', 'rainy'] as const;
  const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  const randomTemp = Math.floor(Math.random() * 10) + 22;
  
  const WeatherIcon = randomWeather === 'sunny' ? Sun : 
                       randomWeather === 'cloudy' ? Cloud : CloudRain;
  const weatherColor = randomWeather === 'sunny' ? 'text-yellow-500' : 
                       randomWeather === 'cloudy' ? 'text-gray-500' : 'text-blue-500';

  return (
    <Link to={`/turf/${turf.id}`} className="block">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="relative">
          <img
            src={turf.image}
            alt={turf.name}
            className="w-full h-48 object-cover"
          />
          {turf.featured && (
            <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs">
              Featured
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{turf.rating}</span>
          </div>
          {/* Weather Badge */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <WeatherIcon className={`w-3 h-3 ${weatherColor}`} />
            <span>{randomTemp}°C</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="mb-2">{turf.name}</h3>
          <div className="flex items-center gap-1 text-gray-600 text-sm mb-3">
            <MapPin className="w-4 h-4" />
            <span>{turf.location}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {turf.sports.map((sport) => (
              <span
                key={sport}
                className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs"
              >
                {sport}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <div>
              <span className="text-green-600">₹{turf.price}</span>
              <span className="text-gray-500 text-sm">/hour</span>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}