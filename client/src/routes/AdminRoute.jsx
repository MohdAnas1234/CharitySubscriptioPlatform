import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function AdminRoute() {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen grid place-items-center">Loading...</div>;
  return user?.role === 'admin' ? <Outlet /> : <Navigate to="/unauthorized" replace />;
}
