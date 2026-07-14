import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'shift-prototype-user';
const defaults = {
  userName: '',
  routineAnswer: '',
  freeMomentsAnswer: '',
  isGuest: false,
  isAuthenticated: false,
  streak: 4,
  shiftPoints: 25,
};

const UserContext = createContext(null);

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
  } catch {
    return defaults;
  }
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const updateUser = (updates) => setUser((current) => ({ ...current, ...updates }));
  const resetUser = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(defaults);
  };

  const value = useMemo(() => ({ user, updateUser, resetUser }), [user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
}
