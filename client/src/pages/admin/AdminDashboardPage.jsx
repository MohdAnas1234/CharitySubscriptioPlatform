import { Link } from 'react-router-dom'

export default function AdminDashboardPage() {
  const cards = [
    {
      title: 'Total Users',
      value: '1,240',
    },
    {
      title: 'Total Charities',
      value: '12',
    },
    {
      title: 'Monthly Prize Pool',
      value: '₹2,45,000',
    },
    {
      title: 'Pending Winners',
      value: '8',
    },
  ]

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-slate-400">
            Manage users, charities, draws, winners, and reports.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-slate-400">{card.title}</p>
              <h2 className="mt-4 text-4xl font-bold">{card.value}</h2>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Link
            to="/admin/users"
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/40"
          >
            <h2 className="text-2xl font-bold">Manage Users</h2>
            <p className="mt-3 text-slate-400">
              View and manage registered users.
            </p>
          </Link>

          <Link
            to="/admin/charities"
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/40"
          >
            <h2 className="text-2xl font-bold">Manage Charities</h2>
            <p className="mt-3 text-slate-400">
              Add and update charity organizations.
            </p>
          </Link>

          <Link
            to="/admin/draws"
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/40"
          >
            <h2 className="text-2xl font-bold">Manage Draws</h2>
            <p className="mt-3 text-slate-400">
              Run monthly draws and publish results.
            </p>
          </Link>

          <Link
            to="/admin/winners"
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/40"
          >
            <h2 className="text-2xl font-bold">Manage Winners</h2>
            <p className="mt-3 text-slate-400">
              Approve winnings and payout requests.
            </p>
          </Link>

          <Link
            to="/admin/reports"
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/40"
          >
            <h2 className="text-2xl font-bold">Reports</h2>
            <p className="mt-3 text-slate-400">
              View revenue, charity donations, and statistics.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}