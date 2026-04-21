export default function ManageDrawsPage() {
  const drawHistory = [
    {
      month: 'April 2026',
      numbers: [5, 12, 17, 28, 41],
      jackpot: '₹2,45,000',
      winners: 3,
    },
    {
      month: 'March 2026',
      numbers: [3, 9, 14, 22, 40],
      jackpot: '₹1,80,000',
      winners: 1,
    },
  ]

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">Manage Draws</h1>
            <p className="mt-2 text-slate-400">
              Run and manage monthly draw results.
            </p>
          </div>

          <button className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 font-semibold">
            Run New Draw
          </button>
        </div>

        <div className="mb-8 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-6 text-2xl font-bold">Current Draw Numbers</h2>

          <div className="mb-8 flex flex-wrap gap-4">
            {[7, 14, 21, 32, 45].map((number) => (
              <div
                key={number}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-2xl font-bold"
              >
                {number}
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0B1225] p-5">
              <p className="text-slate-400">Current Jackpot</p>
              <h3 className="mt-3 text-3xl font-bold text-purple-400">
                ₹3,10,000
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0B1225] p-5">
              <p className="text-slate-400">Participants</p>
              <h3 className="mt-3 text-3xl font-bold">1,240</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0B1225] p-5">
              <p className="text-slate-400">Expected Winners</p>
              <h3 className="mt-3 text-3xl font-bold">8</h3>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {drawHistory.map((draw, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{draw.month}</h2>
                  <p className="text-slate-400">
                    {draw.winners} winners declared
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Jackpot</p>
                  <h3 className="text-2xl font-bold">{draw.jackpot}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {draw.numbers.map((number) => (
                  <div
                    key={number}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-xl font-bold"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}