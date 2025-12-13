import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export function PageFooter() {
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
              <button className="hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Privacy Policy
              </button>
              <span>|</span>
              <button className="hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Terms of use
              </button>
              <span>|</span>
              <button className="hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                FAQs
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
