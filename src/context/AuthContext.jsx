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

  const loginUser = (email, password) => {
    const storedUser = localStorage.getItem("registeredUser");

    if (!storedUser) {
      throw new Error("No registered user found.");
    }
    const registeredUser = JSON.parse(storedUser);

    if (registeredUser.email !== email || registeredUser.password !== password) {
      throw new Error("Invalid email or password.");
    }

    const loggedInUser = {
      name: registerUser.name,
      email: registerUser.email,
    };
    setUser(loggedInUser);

    return loggedInUser;
  };
  return (
    <AuthContext.Provider value={{ user, setUser, registerUser,loginUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
