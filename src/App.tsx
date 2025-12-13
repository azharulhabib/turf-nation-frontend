import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';

// General Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// User Pages
import TurfSearchPage from './pages/TurfSearchPage';
import TurfDetailsPage from './pages/TurfDetailsPage';
import SlotSelectionPage from './pages/SlotSelectionPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import UserDashboard from './pages/UserDashboard';
import QRCodePage from './pages/QRCodePage';
import WeatherPage from './pages/WeatherPage';
import RewardsPage from './pages/RewardsPage';
import TournamentsPage from './pages/TournamentsPage';
import CreateTournamentPage from './pages/CreateTournamentPage';

// Turf Owner Pages
import OwnerDashboard from './pages/OwnerDashboard';
import AnnouncementPage from './pages/AnnouncementPage';
import TurfManagementPage from './pages/TurfManagementPage';

// System Pages
import AdminAnalytics from './pages/AdminAnalytics';
import NotificationSettings from './pages/NotificationSettings';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <Routes>
            {/* General Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* User Pages */}
            <Route path="/search" element={<TurfSearchPage />} />
            <Route path="/turf/:id" element={<TurfDetailsPage />} />
            <Route path="/turf/:id/slots" element={<SlotSelectionPage />} />
            <Route path="/booking/confirm" element={<BookingConfirmationPage />} />
            <Route path="/payment/success" element={<PaymentSuccessPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/qr/:bookingId" element={<QRCodePage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/tournaments/create" element={<CreateTournamentPage />} />

            {/* Turf Owner Pages */}
            <Route path="/owner/dashboard" element={<OwnerDashboard />} />
            <Route path="/owner/announcements" element={<AnnouncementPage />} />
            <Route path="/owner/manage" element={<TurfManagementPage />} />

            {/* System Pages */}
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/settings/notifications" element={<NotificationSettings />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
}
