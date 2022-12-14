import { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import errorAlert from '../utils/CustomAlerts/errorAlert';

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  async function login(e, email, password, disableInput) {
    e.preventDefault();
    disableInput(true);
    const body = { email, password };

    try {
      const response = await api.post('/auth/sign-in', body);

      setUserInfo(response.data);
      setIsAuthenticated(true);
      navigate('/my-list', { replace: true });
    } catch (error) {
      disableInput(false);
      errorAlert(error?.response?.data);
    }
  }

  const value = useMemo(
    () => ({
      userInfo,
      setUserInfo,
      isAuthenticated,
      setIsAuthenticated,
      login,
    }),
    [userInfo, isAuthenticated]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
