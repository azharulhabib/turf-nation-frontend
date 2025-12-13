import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Calendar, Trophy, Gift, Settings, Bell, LayoutDashboard, Megaphone, Building } from 'lucide-react';

interface SidebarProps {
  userType?: 'user' | 'owner';
}

export function DashboardSidebar({ userType = 'user' }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const userMenuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Calendar, label: 'My Bookings', path: '/dashboard' },
    { icon: Trophy, label: 'Tournaments', path: '/tournaments' },
    { icon: Gift, label: 'Rewards', path: '/rewards' },
    { icon: Bell, label: 'Notifications', path: '/settings/notifications' },
    { icon: Settings, label: 'Settings', path: '/settings/notifications' },
  ];

  const ownerMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/owner/dashboard' },
    { icon: Building, label: 'Manage Turfs', path: '/owner/manage' },
    { icon: Megaphone, label: 'Announcements', path: '/owner/announcements' },
    { icon: Calendar, label: 'Bookings', path: '/owner/dashboard' },
    { icon: Settings, label: 'Settings', path: '/settings/notifications' },
  ];

  const menuItems = userType === 'owner' ? ownerMenuItems : userMenuItems;

  return (
    <div className="w-64 bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-6">
      <div 
        className="text-[#0F7A33] uppercase tracking-wider mb-8" 
        style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
      >
        TurfNation
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${isActive 
                  ? 'bg-[#0F7A33] text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-[#E7F8ED]'
                }
              `}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
