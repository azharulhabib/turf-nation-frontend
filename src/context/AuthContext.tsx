import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'owner' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'user' | 'owner') => Promise<void>;
  register: (name: string, email: string, password: string, role: 'user' | 'owner') => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: 'user' | 'owner') => {
    // Mock JWT login
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0],
      email,
      role,
    });
  };

  const register = async (name: string, email: string, password: string, role: 'user' | 'owner') => {
    // Mock registration
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
