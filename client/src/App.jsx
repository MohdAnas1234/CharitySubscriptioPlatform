import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-midnight text-slate-100">
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;


