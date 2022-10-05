import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function RequireAuth({ children }) {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
