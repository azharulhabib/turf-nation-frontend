import { Clock, Check } from 'lucide-react';
import { TimeSlot } from '../data/mockData';

interface SlotCardProps {
  slot: TimeSlot;
  selected?: boolean;
  onSelect: (slot: TimeSlot) => void;
}

export function SlotCard({ slot, selected, onSelect }: SlotCardProps) {
  return (
    <button
      onClick={() => slot.available && onSelect(slot)}
      disabled={!slot.available}
      className={`
        relative p-4 rounded-lg border-2 transition-all
        ${
          slot.available
            ? selected
              ? 'border-green-600 bg-green-50'
              : 'border-gray-200 hover:border-green-400 bg-white'
            : 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed'
        }
      `}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-600" />
          <span className="text-sm">{slot.time}</span>
        </div>
        {selected && (
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
      <div className="text-left">
        <span className="text-green-600">₹{slot.price}</span>
      </div>
      {!slot.available && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm text-gray-500">Booked</span>
        </div>
      )}
    </button>
  );
}
