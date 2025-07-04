import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('freshstart_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const mockUser = {
      id: '1',
      name: 'John Doe',
      email,
      branch: 'Computer Science Engineering',
      semester: 1,
      rollNumber: '21CSE001',
      hostel: 'Block A',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    };

    setUser(mockUser);
    localStorage.setItem('freshstart_user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const register = async (userData) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newUser = {
      id: Date.now().toString(),
      name: userData.name || '',
      email: userData.email || '',
      branch: userData.branch || '',
      semester: userData.semester || 1,
      rollNumber: userData.rollNumber || '',
      hostel: userData.hostel,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    };

    setUser(newUser);
    localStorage.setItem('freshstart_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('freshstart_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
