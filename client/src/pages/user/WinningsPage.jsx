export default function WinningsPage() {
  const winnings = [
    {
      month: 'April 2026',
      amount: '₹2,500',
      status: 'Pending',
      matched: '3 Match Winner',
    },
    {
      month: 'February 2026',
      amount: '₹12,000',
      status: 'Paid',
      matched: '4 Match Winner',
    },
  ]

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">My Winnings</h1>
          <p className="mt-2 text-slate-400">
            Track your rewards, payout status, and upload proof if required.
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-slate-400">Total Winnings</p>
            <h2 className="mt-4 text-4xl font-bold text-purple-400">
              ₹14,500
            </h2>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-slate-400">Pending Payouts</p>
            <h2 className="mt-4 text-4xl font-bold text-yellow-400">₹2,500</h2>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-slate-400">Paid Amount</p>
            <h2 className="mt-4 text-4xl font-bold text-green-400">
              ₹12,000
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {winnings.map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{item.month}</h2>
                  <p className="mt-2 text-slate-400">{item.matched}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Prize Amount</p>
                  <h3 className="mt-2 text-3xl font-bold">{item.amount}</h3>
                </div>

                <div
                  className={`rounded-full px-5 py-3 text-sm font-semibold ${
                    item.status === 'Paid'
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}
                >
                  {item.status}
                </div>

                <button className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 font-semibold">
                  Upload Proof
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}