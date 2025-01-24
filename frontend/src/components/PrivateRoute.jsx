import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === 'publisher' && !location.pathname.startsWith('/publisher')) {
    return <Navigate to="/publisher" />;
  }

  if (user.role === 'user' && location.pathname.startsWith('/publisher')) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;