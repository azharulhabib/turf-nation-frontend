import { Sun, Cloud, CloudRain, Wind, Droplets, AlertTriangle } from 'lucide-react';

interface WeatherData {
  condition: 'sunny' | 'cloudy' | 'rainy';
  temp: number;
  humidity: number;
  wind: number;
  description?: string;
}

interface WeatherWidgetProps {
  location?: string;
  date?: string;
  compact?: boolean;
  showAlert?: boolean;
}

// Mock weather data - in production, this would come from an API
const weatherConditions: WeatherData[] = [
  { condition: 'sunny', temp: 28, humidity: 45, wind: 12, description: 'Clear skies' },
  { condition: 'cloudy', temp: 24, humidity: 60, wind: 15, description: 'Partly cloudy' },
  { condition: 'rainy', temp: 22, humidity: 85, wind: 20, description: 'Light rain' },
];

export function WeatherWidget({ location = 'Your Location', date, compact = false, showAlert = false }: WeatherWidgetProps) {
  const weather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  const WeatherIcon = weather.condition === 'sunny' ? Sun : weather.condition === 'cloudy' ? Cloud : CloudRain;
  const isGoodCondition = weather.condition !== 'rainy';

  if (compact) {
    return (
      <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
        <WeatherIcon className={`w-8 h-8 ${
          weather.condition === 'sunny' ? 'text-yellow-500' : 
          weather.condition === 'cloudy' ? 'text-gray-500' : 'text-blue-500'
        }`} />
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl">{weather.temp}°C</span>
            <span className="text-xs text-gray-600">{weather.description}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
            <div className="flex items-center gap-1">
              <Droplets className="w-3 h-3" />
              <span>{weather.humidity}%</span>
            </div>
            <div className="flex items-center gap-1">
              <Wind className="w-3 h-3" />
              <span>{weather.wind} km/h</span>
            </div>
          </div>
        </div>
        <div className={`ml-auto px-3 py-1 rounded-full text-xs ${
          isGoodCondition ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {isGoodCondition ? 'Perfect' : 'Check forecast'}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
      {showAlert && !isGoodCondition && (
        <div className="bg-yellow-500/20 border border-yellow-300/50 rounded-lg p-3 mb-4 flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <div className="font-semibold mb-1">Weather Alert</div>
            <div className="opacity-90">Rain expected. Consider indoor options or rescheduling.</div>
          </div>
        </div>
      )}

      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="text-sm opacity-80 mb-1">{location}</div>
          <div className="text-4xl mb-1">{weather.temp}°C</div>
          <div className="opacity-90">{weather.description}</div>
          {date && (
            <div className="text-sm opacity-80 mt-2">
              {new Date(date).toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
          )}
        </div>
        <WeatherIcon className="w-20 h-20 opacity-90" />
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
        <div>
          <div className="text-xs opacity-70 mb-1">Humidity</div>
          <div className="flex items-center gap-1">
            <Droplets className="w-4 h-4" />
            <span className="text-lg">{weather.humidity}%</span>
          </div>
        </div>
        <div>
          <div className="text-xs opacity-70 mb-1">Wind Speed</div>
          <div className="flex items-center gap-1">
            <Wind className="w-4 h-4" />
            <span className="text-lg">{weather.wind} km/h</span>
          </div>
        </div>
        <div>
          <div className="text-xs opacity-70 mb-1">Condition</div>
          <div className={`px-2 py-1 rounded text-xs ${
            isGoodCondition ? 'bg-green-500' : 'bg-red-500'
          }`}>
            {isGoodCondition ? 'Good' : 'Poor'}
          </div>
        </div>
      </div>
    </div>
  );
}
