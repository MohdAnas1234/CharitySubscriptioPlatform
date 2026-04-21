export default function ManageWinnersPage() {
  const winners = [
    {
      id: 1,
      name: 'John Doe',
      month: 'April 2026',
      amount: '₹2,500',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      month: 'March 2026',
      amount: '₹12,000',
      status: 'Approved',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      month: 'February 2026',
      amount: '₹5,000',
      status: 'Rejected',
    },
  ]

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Manage Winners</h1>
          <p className="mt-2 text-slate-400">
            Approve, reject, and review payout requests.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <table className="w-full text-left">
            <thead className="border-b border-white/10 bg-white/5 text-slate-400">
              <tr>
                <th className="px-6 py-5">Name</th>
                <th className="px-6 py-5">Month</th>
                <th className="px-6 py-5">Prize</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Action</th>
              </tr>
            </thead>

            <tbody>
              {winners.map((winner) => (
                <tr key={winner.id} className="border-b border-white/10">
                  <td className="px-6 py-5">{winner.name}</td>
                  <td className="px-6 py-5">{winner.month}</td>
                  <td className="px-6 py-5">{winner.amount}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        winner.status === 'Approved'
                          ? 'bg-green-500/20 text-green-300'
                          : winner.status === 'Pending'
                          ? 'bg-yellow-500/20 text-yellow-300'
                          : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      {winner.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-3">
                      <button className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold">
                        Approve
                      </button>

                      <button className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}