import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/authService'

export default function LoginPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      if (
        formData.email === 'admin@golfcharity.com' &&
        formData.password === 'Admin@123'
      ) {
        const adminUser = {
          _id: '661f2d8a6c8b4d1f9c654321',
          name: 'Admin User',
          email: 'admin@golfcharity.com',
          role: 'admin',
          charity: 'Cancer Care Foundation',
        }

        localStorage.setItem('token', 'admin-demo-token')
        localStorage.setItem('user', JSON.stringify(adminUser))

        navigate('/admin')
        return
      }

      const response = await login(formData)

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))

      navigate('/dashboard')
    } catch (error) {
      alert(error.response?.data?.message || 'Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070B18] px-6">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-slate-400">
            Login to continue your charity journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none transition focus:border-purple-500"
              required
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
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 py-4 font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-slate-400">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-purple-400">
            Signup
          </Link>
        </p>
      </div>
    </div>
  )
}