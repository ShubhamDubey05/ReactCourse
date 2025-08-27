import React, { createContext, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useState } from "react";

// Create context outside the component
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);
   useEffect(() => {
      setLocalStorage();
     const { employees, admin } = getLocalStorage();
     setUserdata({ employees, admin });
   }, []);

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
