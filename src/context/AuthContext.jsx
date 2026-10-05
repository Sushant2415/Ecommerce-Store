import React from "react";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const registerUser = (userData) => {
    const newUser = {
      name: userData.name,
      email: userData.email,
    };
    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        ...newUser,
        password: userData.password,
      }),
    );
    setUser(newUser);
    return newUser;
  };
  return (
    <AuthContext.Provider value={{ user, setUser, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
