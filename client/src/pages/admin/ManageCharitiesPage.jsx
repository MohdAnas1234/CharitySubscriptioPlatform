export default function ManageCharitiesPage() {
  const charities = [
    {
      id: 1,
      name: 'Cancer Care Foundation',
      category: 'Healthcare',
      members: 420,
    },
    {
      id: 2,
      name: 'Children Education Fund',
      category: 'Education',
      members: 315,
    },
    {
      id: 3,
      name: 'Clean Water Mission',
      category: 'Environment',
      members: 280,
    },
  ]

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Manage Charities</h1>
            <p className="mt-2 text-slate-400">
              Add, edit, and manage supported charities.
            </p>
          </div>

          <button className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 font-semibold">
            Add Charity
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {charities.map((charity) => (
            <div
              key={charity.id}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-5 h-40 rounded-3xl bg-gradient-to-br from-purple-700/30 to-blue-700/30" />

              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">{charity.name}</h2>

                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
                  {charity.category}
                </span>
              </div>

              <p className="mb-6 text-slate-400">
                {charity.members} members currently support this charity.
              </p>

              <div className="flex gap-3">
                <button className="flex-1 rounded-2xl bg-purple-600 py-3 font-semibold">
                  Edit
                </button>

                <button className="flex-1 rounded-2xl border border-red-500/30 py-3 font-semibold text-red-300">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}