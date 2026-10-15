import { useState } from 'react';
import { Send, Megaphone, Calendar } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { DashboardSidebar } from '../components/DashboardSidebar';

export default function AnnouncementPage() {
  const [announcement, setAnnouncement] = useState('');
  const [targetAudience, setTargetAudience] = useState('all');

  const pastAnnouncements = [
    {
      id: 1,
      title: 'New Year Special Discount',
      message: 'Get 20% off on all bookings for the next week! Book now and save big.',
      date: '2024-12-10',
      recipients: 'All Users',
    },
    {
      id: 2,
      title: 'Maintenance Schedule',
      message: 'The turf will be under maintenance on December 18th from 6 AM to 12 PM.',
      date: '2024-12-08',
      recipients: 'Manchester City Academy Users',
    },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock announcement sending
    setAnnouncement('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <DashboardSidebar userType="owner" />

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 
                className="mb-2" 
                style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#07391A' }}
              >
                Announcements
              </h1>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Send updates and notifications to your customers
              </p>
            </div>

            {/* Compose Announcement */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0F7A33] rounded-xl flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-white" />
                </div>
                <h2 
                  style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  Create Announcement
                </h2>
              </div>

              <form onSubmit={handleSend} className="space-y-6">
                {/* Target Audience */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Send To
                  </label>
                  <select
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] bg-white cursor-pointer"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="all">All Users</option>
                    <option value="upcoming">Upcoming Bookings</option>
                    <option value="past">Past Customers</option>
                    <option value="specific">Specific Turf Users</option>
                  </select>
                </div>

                {/* Announcement Message */}
                <div>
                  <label 
                    className="block text-gray-700 mb-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px' }}
                  >
                    Announcement Message
                  </label>
                  <textarea
                    required
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}
                    placeholder="Type your announcement here... Share important updates, offers, or maintenance schedules."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7A33] resize-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {announcement.length} / 500 characters
                  </p>
                </div>

                {/* Preview */}
                {announcement && (
                  <div className="bg-[#E7F8ED] border-2 border-[#0F7A33] rounded-xl p-6">
                    <p className="text-gray-600 text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                      Preview:
                    </p>
                    <p className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {announcement}
                    </p>
                  </div>
                )}

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0F7A33] text-white py-4 rounded-xl hover:bg-[#07391A] transition-colors shadow-lg flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px' }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Announcement</span>
                </button>
              </form>
            </div>

            {/* Past Announcements */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 
                className="mb-6" 
                style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
              >
                Sent Announcements
              </h2>

              <div className="space-y-4">
                {pastAnnouncements.map((item) => (
                  <div 
                    key={item.id}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 
                        style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>
                          {new Date(item.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.message}
                    </p>

                    <div className="flex items-center gap-2">
                      <span 
                        className="bg-[#E7F8ED] text-[#0F7A33] px-3 py-1 rounded-full text-xs"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                      >
                        Sent to: {item.recipients}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
