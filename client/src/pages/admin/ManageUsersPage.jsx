export default function ManageUsersPage() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      charity: 'Cancer Care Foundation',
      subscription: 'Active',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      charity: 'Children Education Fund',
      subscription: 'Inactive',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael@example.com',
      charity: 'Clean Water Mission',
      subscription: 'Active',
    },
  ]

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Manage Users</h1>
          <p className="mt-2 text-slate-400">
            View user details, subscriptions, and selected charities.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <table className="w-full text-left">
            <thead className="border-b border-white/10 bg-white/5 text-slate-400">
              <tr>
                <th className="px-6 py-5">Name</th>
                <th className="px-6 py-5">Email</th>
                <th className="px-6 py-5">Charity</th>
                <th className="px-6 py-5">Subscription</th>
                <th className="px-6 py-5">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-white/10">
                  <td className="px-6 py-5">{user.name}</td>
                  <td className="px-6 py-5 text-slate-300">{user.email}</td>
                  <td className="px-6 py-5">{user.charity}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        user.subscription === 'Active'
                          ? 'bg-green-500/20 text-green-300'
                          : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      {user.subscription}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <button className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold">
                      View
                    </button>
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