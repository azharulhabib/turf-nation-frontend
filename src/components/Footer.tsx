import { MapPin, Mail, Phone, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0a1f0a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white">T</span>
              </div>
              <span className="text-xl">TurfNation</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your best turf booking platform to explore and book turfs for various sports and discover exciting tournaments.
            </p>
            <p className="text-gray-400 text-sm">
              Manage your turf with ease
            </p>
          </div>

          <div>
            <h3 className="mb-4">Contact us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Contact number</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>turfnation@mail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>Turfi, Bangladesh</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4">Follow us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link to="/support" className="hover:text-white transition-colors">
                Support
              </Link>
            </div>
            <p>&copy; 2024 TurfNation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
