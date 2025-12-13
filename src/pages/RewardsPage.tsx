import { useState } from 'react';
import { Trophy, Star, Target, Award, Plus, TrendingUp } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PageFooter } from '../components/PageFooter';
import { DashboardSidebar } from '../components/DashboardSidebar';

export default function RewardsPage() {
  const [showAddGoal, setShowAddGoal] = useState(false);

  const stats = {
    totalHours: 24,
    totalBookings: 12,
    points: 850,
    level: 'Gold',
  };

  const achievements = [
    { 
      id: 1, 
      icon: Trophy, 
      title: 'First Booking', 
      description: 'Complete your first turf booking',
      unlocked: true,
      color: 'bg-[#0F7A33]'
    },
    { 
      id: 2, 
      icon: Star, 
      title: '10 Hours Played', 
      description: 'Play for 10 hours total',
      unlocked: true,
      color: 'bg-[#0F7A33]'
    },
    { 
      id: 3, 
      icon: Award, 
      title: 'Regular Player', 
      description: 'Book 5 times in a month',
      unlocked: true,
      color: 'bg-[#0F7A33]'
    },
    { 
      id: 4, 
      icon: Target, 
      title: '50 Hours Legend', 
      description: 'Play for 50 hours total',
      unlocked: false,
      color: 'bg-gray-300'
    },
  ];

  const goals = [
    { id: 1, title: 'Play 5 hours this week', current: 3, target: 5, unit: 'hours' },
    { id: 2, title: 'Book 3 different turfs', current: 2, target: 3, unit: 'turfs' },
    { id: 3, title: 'Reach 1000 points', current: 850, target: 1000, unit: 'points' },
  ];

  const levelProgress = (stats.points % 1000) / 1000 * 100;

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
                Rewards & Achievements
              </h1>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Track your progress and unlock achievements
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#0F7A33] to-[#07391A] rounded-2xl shadow-lg p-6 text-white">
                <TrendingUp className="w-8 h-8 mb-3 opacity-80" />
                <p className="text-white opacity-90 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Total Hours
                </p>
                <p style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
                  {stats.totalHours}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center mb-3">
                  <Trophy className="w-6 h-6 text-[#0F7A33]" />
                </div>
                <p className="text-gray-600 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Total Bookings
                </p>
                <p 
                  className="text-gray-900" 
                  style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  {stats.totalBookings}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center mb-3">
                  <Star className="w-6 h-6 text-[#0F7A33]" />
                </div>
                <p className="text-gray-600 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Reward Points
                </p>
                <p 
                  className="text-gray-900" 
                  style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  {stats.points}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="w-12 h-12 bg-[#E7F8ED] rounded-xl flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-[#0F7A33]" />
                </div>
                <p className="text-gray-600 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Current Level
                </p>
                <p 
                  className="text-[#0F7A33]" 
                  style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  {stats.level}
                </p>
              </div>
            </div>

            {/* Level Progress */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 
                    className="mb-1" 
                    style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                  >
                    Level Progress
                  </h2>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stats.points} / 1000 points to next level
                  </p>
                </div>
                <div className="text-[#0F7A33]" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
                  {Math.floor(levelProgress)}%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#0F7A33] to-[#07391A] h-full rounded-full transition-all duration-500"
                  style={{ width: `${levelProgress}%` }}
                />
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 
                className="mb-6" 
                style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
              >
                Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={achievement.id}
                      className={`p-6 rounded-2xl border-2 transition-all ${
                        achievement.unlocked
                          ? 'bg-[#E7F8ED] border-[#0F7A33]'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 ${achievement.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 
                            className="mb-1" 
                            style={{ fontSize: '16px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                          >
                            {achievement.title}
                          </h3>
                          <p 
                            className={`text-sm ${achievement.unlocked ? 'text-gray-700' : 'text-gray-500'}`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {achievement.description}
                          </p>
                          {achievement.unlocked && (
                            <span 
                              className="inline-block mt-2 text-[#0F7A33] text-sm"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                            >
                              ✓ Unlocked
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Personal Goals */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 
                  style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}
                >
                  Personal Goals
                </h2>
                <button
                  onClick={() => setShowAddGoal(!showAddGoal)}
                  className="bg-[#0F7A33] text-white px-4 py-2 rounded-xl hover:bg-[#07391A] transition-colors flex items-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Goal</span>
                </button>
              </div>

              <div className="space-y-4">
                {goals.map((goal) => {
                  const progress = (goal.current / goal.target) * 100;
                  return (
                    <div key={goal.id} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <h3 
                          style={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}
                        >
                          {goal.title}
                        </h3>
                        <span 
                          className="text-[#0F7A33]" 
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700' }}
                        >
                          {goal.current}/{goal.target} {goal.unit}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-[#0F7A33] h-full rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
