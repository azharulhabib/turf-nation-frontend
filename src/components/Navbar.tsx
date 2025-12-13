import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <nav className={`container mx-auto px-6 py-6 ${transparent ? '' : 'relative z-10'}`}>
      <div className={`${transparent ? 'bg-white/10 backdrop-blur-md' : 'bg-white shadow-md'} rounded-2xl px-8 py-4 flex items-center justify-between`}>
        {/* Logo */}
        <button 
          onClick={() => navigate('/')}
          className={`${transparent ? 'text-white' : 'text-[#0F7A33]'} uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity`}
          style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
        >
          TurfNation
        </button>
        
        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => navigate('/search')}
            className={`${transparent ? 'text-white' : 'text-gray-700'} flex items-center gap-2 hover:opacity-80 transition-opacity`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>Turf list</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button 
            className={`${transparent ? 'text-white' : 'text-gray-700'} hover:opacity-80 transition-opacity`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            About us
          </button>
          <button 
            onClick={() => navigate('/owner/dashboard')}
            className={`${transparent ? 'text-white border-white hover:bg-white hover:text-black' : 'text-[#0F7A33] border-[#0F7A33] hover:bg-[#0F7A33] hover:text-white'} px-6 py-2.5 rounded-full border-2 transition-all`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            List your turf
          </button>
          <button 
            onClick={() => navigate('/register')}
            className="bg-[#0F7A33] text-white px-6 py-2.5 rounded-full hover:bg-[#07391A] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
