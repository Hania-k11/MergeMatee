import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext(null);

export const UserProvider = (props) => {


    const [userDetails, setUserDetails] = useState(() => {
        return localStorage.getItem('userDetails') || '';
  });
  
 


  const clearUserDetails = () => {
    setUserDetails(null);
    localStorage.removeItem('userDetails');
  };

  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);