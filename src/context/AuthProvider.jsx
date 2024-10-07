import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { login as loginService } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(Cookies.get('token') || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetchUserData(token); 
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const data = await loginService({ email, password });
      const { token: jwtToken, user: userData } = data;

      Cookies.set('token', jwtToken, { expires: 7 });
      setToken(jwtToken);
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setToken(null);
    setUser(null);
    navigate('/');
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
