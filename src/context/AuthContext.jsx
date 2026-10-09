import React from "react";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

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
    
    return newUser;
  };

  const loginUser = (email, password) => {
    const storedUser = localStorage.getItem("registeredUser");

    if (!storedUser) {
      throw new Error("No registered user found.");
    }
    const registeredUser = JSON.parse(storedUser);

    if (
      registeredUser.email !== email ||
      registeredUser.password !== password
    ) {
      throw new Error("Invalid email or password.");
    }

    const loggedInUser = {
      name: registeredUser.name,
      email: registeredUser.email,
    };
    setUser(loggedInUser);

    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    return loggedInUser;
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };
  return (
    <AuthContext.Provider
      value={{ user, setUser, registerUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
