// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

// export default function ProtectedRoute() {
//   const { user, loading } = useAuth();
//   if (loading) return <div className="min-h-screen grid place-items-center">Loading...</div>;
//   return user ? <Outlet /> : <Navigate to="/login" replace />;
// }


import { Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  return <Outlet />
}