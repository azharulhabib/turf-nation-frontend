import { useParams, useNavigate } from 'react-router-dom';
import { Download, Share2, Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';

export default function QRCodePage() {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const booking = {
    id: bookingId || 'TRF001',
    turfName: 'Manchester City Academy',
    location: 'Manchester, UK',
    date: '2024-12-20',
    slots: ['06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM'],
    price: 113,
  };

  // Mock QR Code (in a real app, this would be generated from the booking ID)
  const qrCodeData = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(
    JSON.stringify({ bookingId: booking.id, turf: booking.turfName, date: booking.date })
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-[#0F7A33] hover:text-[#07391A] mb-6 transition-colors"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </button>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 
              className="mb-2" 
              style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
            >
              Your Entry Pass
            </h1>
            <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Show this QR code at the turf entrance
            </p>
          </div>

          {/* QR Code Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            {/* QR Code */}
            <div className="bg-gradient-to-br from-[#E7F8ED] to-white p-8 rounded-2xl mb-6">
              <div className="bg-white p-6 rounded-xl shadow-lg mx-auto w-fit">
                <img 
                  src={qrCodeData} 
                  alt="QR Code"
                  className="w-64 h-64 mx-auto"
                />
              </div>
            </div>

            {/* Booking ID */}
            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                Booking ID
              </p>
              <p 
                className="text-gray-900" 
                style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'Inter, sans-serif', letterSpacing: '2px' }}
              >
                {booking.id}
              </p>
            </div>

            {/* Booking Details */}
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#0F7A33]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Turf Location
                  </p>
                  <p className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}>
                    {booking.turfName}
                  </p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {booking.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#0F7A33]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Date
                  </p>
                  <p className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}>
                    {new Date(booking.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#0F7A33]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Time Slots
                  </p>
                  <div className="space-y-1">
                    {booking.slots.map((slot, idx) => (
                      <p key={idx} className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                        {slot}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => window.print()}
              className="bg-[#0F7A33] text-white py-4 px-6 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
            >
              <Download className="w-5 h-5" />
              <span>Download QR Code</span>
            </button>
            <button
              className="bg-white text-[#0F7A33] border-2 border-[#0F7A33] py-4 px-6 rounded-xl hover:bg-[#E7F8ED] transition-colors flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
            >
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-[#E7F8ED] rounded-2xl p-6 mt-6">
            <h3 
              className="mb-4" 
              style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
            >
              Important Instructions
            </h3>
            <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start gap-2">
                <span className="text-[#0F7A33]">•</span>
                <span>Arrive at least 10 minutes before your scheduled time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F7A33]">•</span>
                <span>Show this QR code at the reception for verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F7A33]">•</span>
                <span>Bring valid ID proof for security purposes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F7A33]">•</span>
                <span>Follow turf guidelines and safety regulations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
