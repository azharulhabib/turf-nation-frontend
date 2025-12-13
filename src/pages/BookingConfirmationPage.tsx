import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Wallet, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { useBooking } from '../context/BookingContext';

export default function BookingConfirmationPage() {
  const navigate = useNavigate();
  const { bookingData } = useBooking();
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleConfirmPayment = () => {
    // Mock payment processing
    navigate('/payment/success');
  };

  const paymentMethods = [
    { id: 'card', icon: CreditCard, label: 'Credit/Debit Card', description: 'Pay with Visa, Mastercard, or Amex' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile Payment', description: 'Apple Pay, Google Pay, Samsung Pay' },
    { id: 'wallet', icon: Wallet, label: 'Digital Wallet', description: 'PayPal, Stripe, etc.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 
            className="mb-8" 
            style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
          >
            Confirm Your Booking
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Payment Method */}
            <div className="lg:col-span-2 space-y-6">
              {/* Booking Details Summary */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 
                  className="mb-6" 
                  style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  Booking Details
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0F7A33]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Turf</p>
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
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 
                  className="mb-6" 
                  style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  Payment Method
                </h2>

                <div className="space-y-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                          paymentMethod === method.id
                            ? 'border-[#0F7A33] bg-[#E7F8ED]'
                            : 'border-gray-200 hover:border-[#0F7A33]'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            paymentMethod === method.id ? 'bg-[#0F7A33]' : 'bg-gray-100'
                          }`}>
                            <Icon className={`w-6 h-6 ${
                              paymentMethod === method.id ? 'text-white' : 'text-gray-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <p 
                              className="text-gray-900 mb-1" 
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                            >
                              {method.label}
                            </p>
                            <p 
                              className="text-gray-500 text-sm" 
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {method.description}
                            </p>
                          </div>
                          {paymentMethod === method.id && (
                            <div className="w-6 h-6 bg-[#0F7A33] rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Mock Payment Form */}
                {paymentMethod === 'card' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label 
                        className="block text-gray-700 mb-2" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label 
                          className="block text-gray-700 mb-2" 
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                        >
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                      <div>
                        <label 
                          className="block text-gray-700 mb-2" 
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                        >
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33]"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right - Price Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
                <h3 
                  className="mb-6" 
                  style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  Price Summary
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Subtotal</span>
                    <span className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                      ${bookingData.totalPrice || 100}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Service Fee</span>
                    <span className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                      $5
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Tax</span>
                    <span className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                      $8
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span 
                        className="text-gray-900" 
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '18px' }}
                      >
                        Total
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

                <button
                  onClick={handleConfirmPayment}
                  className="w-full bg-[#0F7A33] text-white py-4 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
                >
                  <span>Confirm & Pay</span>
                  <ChevronRight className="w-5 h-5" />
                </button>

                <p className="text-gray-500 text-xs text-center mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
