import { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      const { VITE_API_URL } = import.meta.env;
      const response = await axios.post(`${VITE_API_URL}/auth/sign-in`, body);

      setUserInfo(response.data);
      setIsAuthenticated(true);
      navigate('/search', { replace: true });
    } catch (error) {
      disableInput(false);
      alert(error?.response?.data);
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
