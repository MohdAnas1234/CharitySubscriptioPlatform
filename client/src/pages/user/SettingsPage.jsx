export default function SettingsPage() {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Settings</h1>
          <p className="mt-2 text-slate-400">
            Manage your profile, password, and charity preferences.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-6 text-2xl font-bold">Profile Information</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.name || 'John Doe'}
                  className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email || 'john@example.com'}
                  className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Selected Charity
                </label>
                <select
                  defaultValue={user?.charity || 'Cancer Care Foundation'}
                  className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none"
                >
                  <option>Cancer Care Foundation</option>
                  <option>Children Education Fund</option>
                  <option>Clean Water Mission</option>
                </select>
              </div>

              <button className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 py-4 font-semibold shadow-lg shadow-purple-900/30">
                Save Changes
              </button>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-6 text-2xl font-bold">Security</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none"
                />
              </div>

              <button className="w-full rounded-2xl border border-red-500/30 bg-red-500/10 py-4 font-semibold text-red-300">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}