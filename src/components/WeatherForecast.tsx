import { Sun, Cloud, CloudRain } from 'lucide-react';

interface ForecastDay {
  day: string;
  date: string;
  condition: 'sunny' | 'cloudy' | 'rainy';
  high: number;
  low: number;
}

interface WeatherForecastProps {
  days?: number;
  location?: string;
}

export function WeatherForecast({ days = 7, location }: WeatherForecastProps) {
  // Generate forecast data
  const generateForecast = (): ForecastDay[] => {
    const conditions: ('sunny' | 'cloudy' | 'rainy')[] = ['sunny', 'cloudy', 'rainy'];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    
    return Array.from({ length: days }, (_, i) => {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      const condition = conditions[Math.floor(Math.random() * conditions.length)];
      
      return {
        day: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : dayNames[date.getDay()],
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        condition,
        high: Math.floor(Math.random() * 10) + 25,
        low: Math.floor(Math.random() * 10) + 18,
      };
    });
  };

  const forecast = generateForecast();

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return Sun;
      case 'cloudy':
        return Cloud;
      case 'rainy':
        return CloudRain;
      default:
        return Cloud;
    }
  };

  const getWeatherColor = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return 'text-yellow-500';
      case 'cloudy':
        return 'text-gray-500';
      case 'rainy':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="mb-1">{days}-Day Forecast</h3>
          {location && <p className="text-sm text-gray-600">{location}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
        {forecast.map((day, index) => {
          const WeatherIcon = getWeatherIcon(day.condition);
          const colorClass = getWeatherColor(day.condition);

          return (
            <div
              key={index}
              className={`p-4 rounded-lg text-center transition-all ${
                index === 0 ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className={`text-sm mb-2 ${index === 0 ? 'text-blue-600' : 'text-gray-600'}`}>
                {day.day}
              </div>
              <div className="text-xs text-gray-500 mb-3">{day.date}</div>
              <WeatherIcon className={`w-8 h-8 mx-auto mb-3 ${colorClass}`} />
              <div className="flex items-center justify-center gap-2 text-sm">
                <span>{day.high}°</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-500">{day.low}°</span>
              </div>
              {day.condition === 'rainy' && (
                <div className="mt-2 text-xs text-red-600">Rain</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
