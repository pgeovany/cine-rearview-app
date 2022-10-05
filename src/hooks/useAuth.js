import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function useAuth() {
  const { login, isAuthenticated } = useContext(UserContext);
  return { login, isAuthenticated };
}
