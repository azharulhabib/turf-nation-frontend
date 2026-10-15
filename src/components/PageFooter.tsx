import { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export function PageFooter() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'faqs' | null>(null);
  return (
    <footer className="bg-[#0a3d0a] text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Logo & Description */}
          <div>
            <div 
              className="text-white uppercase tracking-wider mb-4" 
              style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
            >
              TurfNation
            </div>
            <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              An online turf booking platform is a service that allows users to find, reserve, and pay for sports venues near them.
            </p>
          </div>

          {/* Center Column - Contact Us */}
          <div>
            <h3 
              className="mb-6" 
              style={{ fontSize: '20px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
            >
              Contact us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>+8801712345678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>info@turfnation.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right Column - Follow Us */}
          <div>
            <h3 
              className="mb-6" 
              style={{ fontSize: '20px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
            >
              Follow us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Line */}
        <div className="border-t border-green-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p style={{ fontFamily: 'Inter, sans-serif' }}>
              All rights ©turfnation 2024
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => setActiveModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Privacy Policy
              </button>
              <span>|</span>
              <button 
                onClick={() => setActiveModal('terms')}
                className="hover:text-white transition-colors cursor-pointer" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Terms of use
              </button>
              <span>|</span>
              <button 
                onClick={() => setActiveModal('faqs')}
                className="hover:text-white transition-colors cursor-pointer" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                FAQs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white text-gray-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold cursor-pointer"
            >
              &times;
            </button>
            {activeModal === 'privacy' && (
              <div>
                <h3 className="text-xl font-bold text-[#0F7A33] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Privacy Policy</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  At TurfNation, your privacy is our priority. We collect only necessary details to facilitate seamless turf reservations, booking confirmations, and secure payment handling.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We do not share your private data with third parties without explicit consent.
                </p>
              </div>
            )}
            {activeModal === 'terms' && (
              <div>
                <h3 className="text-xl font-bold text-[#0F7A33] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Terms of Use</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  By booking through TurfNation, users agree to arrive on time for scheduled slots, respect turf rules and equipment, and adhere to venue safety protocols.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Cancellations are subject to individual turf venue policies.
                </p>
              </div>
            )}
            {activeModal === 'faqs' && (
              <div>
                <h3 className="text-xl font-bold text-[#0F7A33] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Frequently Asked Questions</h3>
                <div className="space-y-3 text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div>
                    <h4 className="font-semibold text-gray-800">How do I receive my booking ticket?</h4>
                    <p>After booking, a QR code digital ticket is instantly generated on your dashboard.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Can I list my sports venue?</h4>
                    <p>Yes! Click "List your turf" in the navigation bar to access the Owner Dashboard.</p>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-6 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#0F7A33] text-white px-5 py-2 rounded-xl hover:bg-[#07391A] transition-colors cursor-pointer text-sm font-semibold"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
