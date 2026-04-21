import { createContext, useEffect, useState } from 'react'
import {
  login as loginRequest,
  signup as registerRequest,
} from '../services/authService'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')

    if (!token || !savedUser) {
      setLoading(false)
      return
    }

    setUser(JSON.parse(savedUser))
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    const response = await loginRequest(credentials)

    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))

    setUser(response.data.user)
    return response
  }

  const signup = async (values) => {
    const response = await registerRequest(values)

    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))

    setUser(response.data.user)
    return response
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext