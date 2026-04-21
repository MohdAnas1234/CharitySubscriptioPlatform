export default function DrawHistoryPage() {
  const draws = [
    {
      month: 'April 2026',
      numbers: [5, 12, 17, 28, 41],
      matched: 3,
      prize: '₹2,500',
      status: 'Won',
    },
    {
      month: 'March 2026',
      numbers: [3, 9, 14, 22, 40],
      matched: 1,
      prize: 'No Prize',
      status: 'Lost',
    },
    {
      month: 'February 2026',
      numbers: [8, 15, 19, 31, 44],
      matched: 4,
      prize: '₹12,000',
      status: 'Won',
    },
  ]

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Draw History</h1>
          <p className="mt-2 text-slate-400">
            View your past draw participation and winnings.
          </p>
        </div>

        <div className="space-y-6">
          {draws.map((draw, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="text-2xl font-bold">{draw.month}</h2>
                  <p className="text-slate-400">
                    Matched {draw.matched} numbers
                  </p>
                </div>

                <div
                  className={`rounded-full px-5 py-2 text-sm font-semibold ${
                    draw.status === 'Won'
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-red-500/20 text-red-300'
                  }`}
                >
                  {draw.status}
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-4">
                {draw.numbers.map((number) => (
                  <div
                    key={number}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-xl font-bold"
                  >
                    {number}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="text-sm text-slate-400">Prize Amount</p>
                  <h3 className="mt-2 text-2xl font-bold">{draw.prize}</h3>
                </div>

                <button className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-purple-500 hover:text-purple-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}