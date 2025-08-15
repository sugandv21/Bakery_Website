import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.setItem("isLoggedIn", "false");
    }
  }, []);

  const login = (userData) => {
    const fullUser = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    };
    setUser(fullUser);
    localStorage.setItem("loggedInUser", JSON.stringify(fullUser));
    localStorage.setItem("isLoggedIn", "true");
  };

  const register = (userData) => {
    const fullUser = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    };
    setUser(fullUser);
    localStorage.setItem("loggedInUser", JSON.stringify(fullUser));
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("expectedDelivery"); 
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
