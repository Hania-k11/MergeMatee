import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the User Context
export const AuthContext = createContext(); // Export AuthContext

// Provider Component
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(() => {
    const storedDetails = localStorage.getItem('userDetails');
    return storedDetails ? JSON.parse(storedDetails) : null;
  });

  const updateUserDetails = (details) => {
    setUserDetails(details);
    localStorage.setItem('userDetails', JSON.stringify(details));
  };

  const clearUserDetails = () => {
    setUserDetails(null);
    localStorage.removeItem('userDetails');
  };

  return (
    <AuthContext.Provider value={{ userDetails, updateUserDetails, clearUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
