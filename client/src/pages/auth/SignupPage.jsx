import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../services/authService'

export default function SignupPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    charity: 'Cancer Care Foundation',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await signup(formData)

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))

      navigate('/dashboard')
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070B18] px-6 py-12">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">
            Create Account
          </h1>
          <p className="text-slate-400">
            Join and start supporting charities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none transition focus:border-purple-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none transition focus:border-purple-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none transition focus:border-purple-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">
              Select Charity
            </label>
            <select
              name="charity"
              value={formData.charity}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none transition focus:border-purple-500"
            >
              <option>Children Education Fund</option>
              <option>Cancer Care Foundation</option>
              <option>Clean Water Mission</option>
            </select>
          </div>

          <button
            type="submit"
            className="col-span-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 py-4 font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:scale-[1.02]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-purple-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}