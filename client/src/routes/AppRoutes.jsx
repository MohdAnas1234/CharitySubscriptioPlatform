import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/public/HomePage'
import LoginPage from '../pages/auth/LoginPage'
import SignupPage from '../pages/auth/SignupPage'
import DashboardPage from '../pages/user/DashboardPage'
import ScoresPage from '../pages/user/ScoresPage'
import CharitiesPage from '../pages/public/CharitiesPage'
import DrawHistoryPage from '../pages/user/DrawHistoryPage'
import WinningsPage from '../pages/user/WinningsPage'
import SubscriptionPage from '../pages/user/SubscriptionPage'
import SettingsPage from '../pages/user/SettingsPage'

import AdminDashboardPage from '../pages/admin/AdminDashboardPage'
import ManageUsersPage from '../pages/admin/ManageUsersPage'
import ManageCharitiesPage from '../pages/admin/ManageCharitiesPage'
import ManageDrawsPage from '../pages/admin/ManageDrawsPage'
import ManageWinnersPage from '../pages/admin/ManageWinnersPage'
import ReportsPage from '../pages/admin/ReportsPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/scores" element={<ScoresPage />} />
        <Route path="/charities" element={<CharitiesPage />} />
        <Route path="/draw-history" element={<DrawHistoryPage />} />
        <Route path="/winnings" element={<WinningsPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/users" element={<ManageUsersPage />} />
        <Route path="/admin/charities" element={<ManageCharitiesPage />} />
        <Route path="/admin/draws" element={<ManageDrawsPage />} />
        <Route path="/admin/winners" element={<ManageWinnersPage />} />
        <Route path="/admin/reports" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  )
}