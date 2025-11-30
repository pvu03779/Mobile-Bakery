import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('bonpas_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Get stored users from localStorage
    const storedUsers = localStorage.getItem('bonpas_users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // Find user with matching credentials
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      const user: User = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      };
      setUser(user);
      localStorage.setItem('bonpas_user', JSON.stringify(user));
      return true;
    }

    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Get stored users from localStorage
    const storedUsers = localStorage.getItem('bonpas_users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // Check if user already exists
    const existingUser = users.find((u: any) => u.email === email);
    if (existingUser) {
      return false;
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
    };

    users.push(newUser);
    localStorage.setItem('bonpas_users', JSON.stringify(users));

    const user: User = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };
    setUser(user);
    localStorage.setItem('bonpas_user', JSON.stringify(user));

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bonpas_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
