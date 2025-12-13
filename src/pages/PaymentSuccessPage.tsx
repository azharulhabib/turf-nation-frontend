import { useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Calendar, MapPin, Clock, QrCode } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { useBooking } from '../context/BookingContext';

export default function PaymentSuccessPage() {
  const navigate = useNavigate();
  const { bookingData } = useBooking();

  const bookingId = 'TRF' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen flex flex-col bg-[#E7F8ED]">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#0F7A33] rounded-full mb-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <h1 
              className="mb-4" 
              style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
            >
              Booking Confirmed!
            </h1>
            <p 
              className="text-gray-600 text-lg" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Your payment was successful. We've sent a confirmation email to your inbox.
            </p>
          </div>

          {/* Booking Details Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
              <div>
                <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Booking ID</p>
                <p 
                  className="text-gray-900" 
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '20px' }}
                >
                  {bookingId}
                </p>
              </div>
              <div className="w-16 h-16 bg-[#E7F8ED] rounded-xl flex items-center justify-center">
                <QrCode className="w-10 h-10 text-[#0F7A33]" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#0F7A33]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Turf Location</p>
                  <p className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}>
                    {bookingData.turfName || 'Manchester City Academy'}
                  </p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {bookingData.location || 'Manchester, UK'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#0F7A33]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Date</p>
                  <p className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}>
                    {bookingData.date 
                      ? new Date(bookingData.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })
                      : 'December 15, 2024'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#0F7A33]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Time Slots</p>
                  <div className="space-y-1">
                    {(bookingData.slots && bookingData.slots.length > 0 
                      ? bookingData.slots 
                      : ['06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM']
                    ).map((slot, idx) => (
                      <p key={idx} className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                        {slot}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#E7F8ED] rounded-xl p-4 mt-6">
                <div className="flex justify-between items-center">
                  <span 
                    className="text-[#0F7A33]" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '16px' }}
                  >
                    Total Paid
                  </span>
                  <span 
                    className="text-[#0F7A33]" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '24px' }}
                  >
                    ${(bookingData.totalPrice || 100) + 13}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate(`/qr/${bookingId}`)}
              className="bg-[#0F7A33] text-white py-4 px-6 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
            >
              <QrCode className="w-5 h-5" />
              <span>View QR Code</span>
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-white text-[#0F7A33] border-2 border-[#0F7A33] py-4 px-6 rounded-xl hover:bg-[#E7F8ED] transition-colors flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
            >
              <Calendar className="w-5 h-5" />
              <span>Go to Dashboard</span>
            </button>
          </div>

          {/* Download Receipt */}
          <div className="text-center mt-6">
            <button
              className="text-[#0F7A33] hover:text-[#07391A] transition-colors flex items-center gap-2 mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            >
              <Download className="w-5 h-5" />
              <span>Download Receipt</span>
            </button>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
