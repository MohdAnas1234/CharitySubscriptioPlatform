export default function SubscriptionPage() {
  const plans = [
    {
      name: 'Monthly Plan',
      price: '₹999',
      duration: 'per month',
      features: [
        'Access to monthly draw',
        'Add latest 5 golf scores',
        'Choose your charity',
        'Win rewards every month',
      ],
    },
    {
      name: 'Yearly Plan',
      price: '₹9,999',
      duration: 'per year',
      features: [
        'Everything in monthly plan',
        '2 months free',
        'Priority support',
        'Exclusive yearly rewards',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#070B18] p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Subscription Plans</h1>
          <p className="mt-3 text-slate-400">
            Choose the membership plan that fits your goals.
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-slate-400">Current Plan</p>
            <h2 className="mt-4 text-3xl font-bold text-purple-400">
              Monthly Plan
            </h2>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-slate-400">Renewal Date</p>
            <h2 className="mt-4 text-3xl font-bold">25 Apr 2026</h2>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-slate-400">Subscription Status</p>
            <h2 className="mt-4 text-3xl font-bold text-green-400">
              Active
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold">{plan.name}</h2>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-bold text-purple-400">
                  {plan.price}
                </span>
                <span className="pb-2 text-slate-400">{plan.duration}</span>
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 py-4 font-semibold shadow-lg shadow-purple-900/30">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}