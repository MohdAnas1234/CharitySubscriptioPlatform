export default function ReportsPage() {
  const reports = [
    {
      title: 'Total Revenue',
      value: '₹12,40,000',
    },
    {
      title: 'Total Donations',
      value: '₹4,80,000',
    },
    {
      title: 'Total Subscribers',
      value: '1,240',
    },
    {
      title: 'Monthly Winners',
      value: '38',
    },
  ]

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Reports & Analytics</h1>
          <p className="mt-2 text-slate-400">
            Monitor revenue, subscribers, and charity performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reports.map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-slate-400">{item.title}</p>
              <h2 className="mt-4 text-4xl font-bold">{item.value}</h2>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-6 text-2xl font-bold">Top Charities</h2>

            <div className="space-y-4">
              {[
                'Cancer Care Foundation',
                'Children Education Fund',
                'Clean Water Mission',
              ].map((charity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4"
                >
                  <span>{charity}</span>
                  <span className="text-purple-400">
                    ₹{(index + 1) * 120000}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-6 text-2xl font-bold">Subscription Overview</h2>

            <div className="space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-slate-400">Active Users</span>
                  <span>82%</span>
                </div>
                <div className="h-3 rounded-full bg-[#0B1225]">
                  <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-slate-400">Inactive Users</span>
                  <span>18%</span>
                </div>
                <div className="h-3 rounded-full bg-[#0B1225]">
                  <div className="h-3 w-[18%] rounded-full bg-gradient-to-r from-red-500 to-pink-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-slate-400">Monthly Subscribers</span>
                  <span>65%</span>
                </div>
                <div className="h-3 rounded-full bg-[#0B1225]">
                  <div className="h-3 w-[65%] rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}