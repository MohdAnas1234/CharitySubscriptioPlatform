import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem('user'))

  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Scores', path: '/scores' },
    { name: 'Draw History', path: '/draw-history' },
    { name: 'Winnings', path: '/winnings' },
    { name: 'Charities', path: '/charities' },
    { name: 'Subscription', path: '/subscription' },
    { name: 'Settings', path: '/settings' },
  ]

  const adminLinks = [
    { name: 'Admin Dashboard', path: '/admin' },
    { name: 'Manage Users', path: '/admin/users' },
    { name: 'Manage Charities', path: '/admin/charities' },
    { name: 'Manage Draws', path: '/admin/draws' },
    { name: 'Manage Winners', path: '/admin/winners' },
    { name: 'Reports', path: '/admin/reports' },
  ]

  return (
    <div className="min-h-screen w-72 border-r border-white/10 bg-[#0B1225] p-6 text-white">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Golf Charity</h1>
        <p className="mt-2 text-sm text-slate-400">
          Premium rewards platform
        </p>
      </div>

      <div className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block rounded-2xl px-5 py-4 font-medium transition ${
              location.pathname === link.path
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {user?.role === 'admin' && (
        <div className="mt-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
            Admin
          </h2>

          <div className="space-y-3">
            {adminLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block rounded-2xl px-5 py-4 font-medium transition ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          window.location.href = '/login'
        }}
        className="mt-10 w-full rounded-2xl border border-red-500/30 bg-red-500/10 py-4 font-semibold text-red-300 transition hover:bg-red-500/20"
      >
        Logout
      </button>
    </div>
  )
}