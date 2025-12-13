import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Check } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { useBooking } from '../context/BookingContext';

export default function SlotSelectionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setBookingData } = useBooking();
  const [selectedDate, setSelectedDate] = useState('2024-12-15');
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  const turf = {
    name: 'Manchester City Academy',
    location: 'Manchester, UK',
    pricePerHour: 50,
  };

  const slots = [
    { time: '06:00 AM - 07:00 AM', available: true },
    { time: '07:00 AM - 08:00 AM', available: true },
    { time: '08:00 AM - 09:00 AM', available: false },
    { time: '09:00 AM - 10:00 AM', available: true },
    { time: '10:00 AM - 11:00 AM', available: true },
    { time: '11:00 AM - 12:00 PM', available: false },
    { time: '12:00 PM - 01:00 PM', available: true },
    { time: '01:00 PM - 02:00 PM', available: true },
    { time: '02:00 PM - 03:00 PM', available: true },
    { time: '03:00 PM - 04:00 PM', available: false },
    { time: '04:00 PM - 05:00 PM', available: true },
    { time: '05:00 PM - 06:00 PM', available: true },
    { time: '06:00 PM - 07:00 PM', available: true },
    { time: '07:00 PM - 08:00 PM', available: true },
    { time: '08:00 PM - 09:00 PM', available: true },
    { time: '09:00 PM - 10:00 PM', available: false },
  ];

  const toggleSlot = (time: string) => {
    if (selectedSlots.includes(time)) {
      setSelectedSlots(selectedSlots.filter((s) => s !== time));
    } else {
      setSelectedSlots([...selectedSlots, time]);
    }
  };

  const totalPrice = selectedSlots.length * turf.pricePerHour;

  const handleConfirmBooking = () => {
    setBookingData({
      turfId: id || '',
      turfName: turf.name,
      location: turf.location,
      date: selectedDate,
      slots: selectedSlots,
      totalPrice,
    });
    navigate('/booking/confirm');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h1 
              className="mb-4" 
              style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
            >
              Select Your Time Slots
            </h1>
            <div className="flex flex-col md:flex-row gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>{turf.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ fontFamily: 'Inter, sans-serif' }}>{turf.location}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Slot Selection */}
            <div className="lg:col-span-2">
              {/* Date Picker */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <label 
                  className="block text-gray-700 mb-4" 
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '18px' }}
                >
                  Select Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
                  />
                </div>
              </div>

              {/* Slots Grid */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 
                  className="mb-6" 
                  style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  Available Time Slots
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {slots.map((slot, idx) => (
                    <button
                      key={idx}
                      onClick={() => slot.available && toggleSlot(slot.time)}
                      disabled={!slot.available}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedSlots.includes(slot.time)
                          ? 'bg-[#0F7A33] border-[#0F7A33] text-white shadow-lg'
                          : slot.available
                          ? 'bg-white border-gray-200 hover:border-[#0F7A33] hover:bg-[#E7F8ED]'
                          : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                            {slot.time}
                          </span>
                        </div>
                        {selectedSlots.includes(slot.time) && (
                          <Check className="w-5 h-5" />
                        )}
                      </div>
                      {!slot.available && (
                        <span 
                          className="text-xs mt-1 block" 
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          Already Booked
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex gap-6 mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#0F7A33] rounded"></div>
                    <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white border-2 border-gray-200 rounded"></div>
                    <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-50 rounded"></div>
                    <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Booked</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
                <h3 
                  className="mb-6" 
                  style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  Booking Summary
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Date</p>
                    <p className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Selected Slots</p>
                    <p className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                      {selectedSlots.length > 0 ? `${selectedSlots.length} slot${selectedSlots.length > 1 ? 's' : ''}` : 'None'}
                    </p>
                  </div>

                  {selectedSlots.length > 0 && (
                    <div className="bg-[#E7F8ED] rounded-xl p-3 max-h-32 overflow-y-auto">
                      {selectedSlots.map((slot, idx) => (
                        <p key={idx} className="text-[#0F7A33] text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                          • {slot}
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Price per hour
                      </span>
                      <span className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                        ${turf.pricePerHour}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Number of hours
                      </span>
                      <span className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                        {selectedSlots.length}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#0F7A33] bg-opacity-10 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span 
                        className="text-[#0F7A33]" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '18px' }}
                      >
                        Total Amount
                      </span>
                      <span 
                        className="text-[#0F7A33]" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '24px' }}
                      >
                        ${totalPrice}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleConfirmBooking}
                  disabled={selectedSlots.length === 0}
                  className={`w-full py-4 rounded-xl transition-colors shadow-lg ${
                    selectedSlots.length > 0
                      ? 'bg-[#0F7A33] text-white hover:bg-[#07391A]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
