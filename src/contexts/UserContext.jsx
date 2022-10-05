import { createContext, useMemo, useState } from 'react';

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  const value = useMemo(() => ({ userInfo, setUserInfo }), [userInfo]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
