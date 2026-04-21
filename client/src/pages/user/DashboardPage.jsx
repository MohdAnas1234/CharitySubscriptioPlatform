import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'

export default function DashboardPage() {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#070B18] text-white">
        <div className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-slate-400">
                Welcome back, {user?.name || 'User'}
              </p>
            </div>

            <button
              onClick={() => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                window.location.href = '/login'
              }}
              className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-red-500 hover:text-red-400"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-slate-400">Subscription Status</p>
              <h2 className="mt-4 text-3xl font-bold text-green-400">
                Active
              </h2>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-slate-400">Renewal Date</p>
              <h2 className="mt-4 text-3xl font-bold">25 Apr 2026</h2>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-slate-400">Selected Charity</p>
              <h2 className="mt-4 text-2xl font-bold">
                {user?.charity || 'Cancer Care Foundation'}
              </h2>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-slate-400">Role</p>
              <h2 className="mt-4 text-2xl font-bold text-purple-400">
                {user?.role === 'admin' ? 'Administrator' : 'User'}
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <h2 className="mb-6 text-2xl font-bold">Recent Scores</h2>

              <div className="space-y-4">
                {[38, 34, 29, 42, 31].map((score, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4"
                  >
                    <div>
                      <h3 className="text-xl font-semibold">{score} Points</h3>
                      <p className="text-sm text-slate-400">12 Apr 2026</p>
                    </div>

                    <span className="rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
                      Stableford
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <h2 className="mb-6 text-2xl font-bold">Quick Actions</h2>

              <div className="grid gap-4">
                <Link
                  to="/scores"
                  className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-4 text-left font-semibold"
                >
                  Add New Score
                </Link>

                <Link
                  to="/draw-history"
                  className="rounded-2xl border border-white/10 bg-[#0B1225] px-6 py-4 text-left font-semibold"
                >
                  View Draw History
                </Link>

                <Link
                  to="/charities"
                  className="rounded-2xl border border-white/10 bg-[#0B1225] px-6 py-4 text-left font-semibold"
                >
                  Manage Charity
                </Link>

                <Link
                  to="/winnings"
                  className="rounded-2xl border border-white/10 bg-[#0B1225] px-6 py-4 text-left font-semibold"
                >
                  View Winnings
                </Link>

                {user?.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-4 text-left font-semibold"
                  >
                    Go To Admin Panel
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}