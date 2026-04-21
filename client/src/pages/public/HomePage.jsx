import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#070B18] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 backdrop-blur-md">
                Charity-driven rewards platform
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl">
                Play Better.
                <br />
                Win Bigger.
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Support Real Causes.
                </span>
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
                Join a premium golf subscription platform where your scores unlock monthly rewards while supporting charities you care about.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/signup"
                  className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 text-center text-lg font-semibold shadow-lg shadow-purple-900/40 transition hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/charities"
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center text-lg font-semibold backdrop-blur-md transition hover:border-purple-400/50 hover:bg-white/10"
                >
                  Explore Charities
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-400">
                <div>
                  <p className="text-3xl font-bold text-white">10K+</p>
                  <p>Subscribers</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">₹50L+</p>
                  <p>Raised for Charity</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p>Monthly Winners</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Current Prize Pool</p>
                    <h3 className="mt-2 text-4xl font-bold">₹2,45,000</h3>
                  </div>

                  <div className="rounded-2xl bg-purple-500/20 px-4 py-2 text-sm text-purple-200">
                    Jackpot Live
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-slate-400">5 Match Winner</span>
                      <span className="text-green-400">40%</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-800">
                      <div className="h-3 w-[40%] rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-slate-400">4 Match Winner</span>
                      <span className="text-blue-400">35%</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-800">
                      <div className="h-3 w-[35%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-slate-400">3 Match Winner</span>
                      <span className="text-purple-300">25%</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-800">
                      <div className="h-3 w-[25%] rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
            How It Works
          </p>
          <h2 className="text-4xl font-bold">Simple, rewarding and impactful</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Subscribe',
              description: 'Choose a monthly or yearly membership plan.',
            },
            {
              title: 'Enter Scores',
              description: 'Add your last 5 golf scores in Stableford format.',
            },
            {
              title: 'Join Draws',
              description: 'Participate in monthly draws and win rewards.',
            },
            {
              title: 'Support Charity',
              description: 'A portion of your subscription helps real causes.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-purple-500/30"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
              <p className="leading-7 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-24 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-14 flex items-center justify-between">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                Featured Charities
              </p>
              <h2 className="text-4xl font-bold">Make every subscription count</h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              'Children Education Fund',
              'Cancer Care Foundation',
              'Clean Water Mission',
            ].map((charity, index) => (
              <div
                key={index}
                className="rounded-[30px] border border-white/10 bg-[#0B1225] p-8 transition hover:border-blue-500/40"
              >
                <div className="mb-6 h-52 rounded-3xl bg-gradient-to-br from-purple-700/40 to-blue-700/40" />

                <h3 className="mb-4 text-2xl font-semibold">{charity}</h3>

                <p className="mb-6 leading-7 text-slate-400">
                  Support impactful community initiatives and make a difference with every subscription.
                </p>

                <Link
                  to="/charities"
                  className="font-semibold text-purple-400 hover:text-purple-300"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

