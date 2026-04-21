import { useState } from 'react'

export default function CharitiesPage() {
  const [search, setSearch] = useState('')

  const charities = [
    {
      id: 1,
      name: 'Children Education Fund',
      category: 'Education',
      description:
        'Providing quality education and scholarships to underprivileged children.',
    },
    {
      id: 2,
      name: 'Cancer Care Foundation',
      category: 'Healthcare',
      description:
        'Supporting cancer treatment, awareness programs, and patient care.',
    },
    {
      id: 3,
      name: 'Clean Water Mission',
      category: 'Environment',
      description:
        'Delivering clean drinking water and sanitation facilities to communities.',
    },
    {
      id: 4,
      name: 'Food For All',
      category: 'Food Support',
      description:
        'Helping families with meals and food supply during difficult times.',
    },
  ]

  const filteredCharities = charities.filter((charity) =>
    charity.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold">Charities</h1>
            <p className="mt-2 text-slate-400">
              Choose the charity you want to support through your subscription.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search charities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none md:w-80"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCharities.map((charity) => (
            <div
              key={charity.id}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-purple-500/40"
            >
              <div className="mb-5 h-48 rounded-3xl bg-gradient-to-br from-purple-700/30 to-blue-700/30" />

              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">{charity.name}</h2>

                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
                  {charity.category}
                </span>
              </div>

              <p className="mb-6 leading-7 text-slate-400">
                {charity.description}
              </p>

              <button className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 py-4 font-semibold text-white shadow-lg shadow-purple-900/30">
                Select Charity
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}