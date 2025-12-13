import { useState } from 'react';
import { Bell, Mail, Smartphone, MessageSquare, Calendar, Trophy, DollarSign } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { DashboardSidebar } from '../components/DashboardSidebar';

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailBooking: true,
    emailPayment: true,
    emailTournaments: false,
    emailPromotions: true,
    smsBooking: true,
    smsPayment: false,
    smsReminders: true,
    pushBooking: true,
    pushPayment: true,
    pushTournaments: true,
    pushPromotions: false,
  });

  const handleToggle = (key: string) => {
    setSettings({ ...settings, [key]: !settings[key as keyof typeof settings] });
  };

  const notificationCategories = [
    {
      title: 'Booking Notifications',
      icon: Calendar,
      description: 'Get updates about your bookings',
      settings: [
        { key: 'emailBooking', label: 'Email', enabled: settings.emailBooking },
        { key: 'smsBooking', label: 'SMS', enabled: settings.smsBooking },
        { key: 'pushBooking', label: 'Push', enabled: settings.pushBooking },
      ],
    },
    {
      title: 'Payment Notifications',
      icon: DollarSign,
      description: 'Payment confirmations and receipts',
      settings: [
        { key: 'emailPayment', label: 'Email', enabled: settings.emailPayment },
        { key: 'smsPayment', label: 'SMS', enabled: settings.smsPayment },
        { key: 'pushPayment', label: 'Push', enabled: settings.pushPayment },
      ],
    },
    {
      title: 'Tournament Updates',
      icon: Trophy,
      description: 'News about tournaments and events',
      settings: [
        { key: 'emailTournaments', label: 'Email', enabled: settings.emailTournaments },
        { key: 'pushTournaments', label: 'Push', enabled: settings.pushTournaments },
      ],
    },
    {
      title: 'Promotions & Offers',
      icon: MessageSquare,
      description: 'Special deals and discounts',
      settings: [
        { key: 'emailPromotions', label: 'Email', enabled: settings.emailPromotions },
        { key: 'pushPromotions', label: 'Push', enabled: settings.pushPromotions },
      ],
    },
    {
      title: 'Reminders',
      icon: Bell,
      description: 'Booking reminders and alerts',
      settings: [
        { key: 'smsReminders', label: 'SMS', enabled: settings.smsReminders },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <DashboardSidebar userType="user" />

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 
                className="mb-2" 
                style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
              >
                Notification Settings
              </h1>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Manage how you receive updates and alerts
              </p>
            </div>

            {/* Channel Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <Mail className="w-10 h-10 text-[#0F7A33] mb-4" />
                <h3 
                  className="mb-2" 
                  style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  Email
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Detailed updates sent to your inbox
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <Smartphone className="w-10 h-10 text-[#0F7A33] mb-4" />
                <h3 
                  className="mb-2" 
                  style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  SMS
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Quick alerts via text message
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <Bell className="w-10 h-10 text-[#0F7A33] mb-4" />
                <h3 
                  className="mb-2" 
                  style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  Push Notifications
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Instant alerts on your device
                </p>
              </div>
            </div>

            {/* Notification Categories */}
            <div className="space-y-6">
              {notificationCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#0F7A33]" />
                      </div>
                      <div>
                        <h3 
                          className="mb-1" 
                          style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                        >
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {category.settings.map((setting) => (
                        <div 
                          key={setting.key}
                          className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-xl"
                        >
                          <span 
                            className="text-gray-700" 
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                          >
                            {setting.label}
                          </span>
                          <button
                            onClick={() => handleToggle(setting.key)}
                            className={`relative w-14 h-7 rounded-full transition-colors ${
                              setting.enabled ? 'bg-[#0F7A33]' : 'bg-gray-300'
                            }`}
                          >
                            <div
                              className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                                setting.enabled ? 'translate-x-8' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Save Button */}
            <div className="mt-8">
              <button
                className="w-full bg-[#0F7A33] text-white py-4 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
