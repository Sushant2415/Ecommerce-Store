import React from "react";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("loggedInUser");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const regitsteredUser = (userData) => {
    const savedUsers = localStorage.getItem("registeredUsers");
    let users = [];

    try {
      users = savedUsers ? JSON.parse(savedUsers) : [];

      if (!Array.isArray(users)) users = [];
    } catch {
      users = [];
    }
    const normalizedEmail = userData.email.trim().toLowerCase();

    const existingUser = users.find((user) => user.email === normalizedEmail);

    if (existingUser) {
      throw new Error("Email already registered");
    }

    const newUser = {
      name: userData.name,
      email: normalizedEmail,
      password: userData.password,
    };

    users.push(newUser);

    localStorage.setItem("registeredUsers", JSON.stringify(users));

    return {
      name: newUser.name,
      email: newUser.email,
    };
  };

  const loginUser = (email, password) => {
    const savedUsers = localStorage.getItem("registeredUsers");

    let users = [];

    try {
      users = savedUsers ? JSON.parse(savedUsers) : [];
      if (!Array.isArray(users)) users = [];
    } catch {
      users = [];
    }

    const normalizedEmail = email.trim().toLowerCase();

    const registeredUser = users.find(
      (user) => user.email === normalizedEmail && user.password === password,
    );

    if (!registeredUser) {
      throw new Error("Invalid email or password");
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
      value={{ user, setUser, regitsteredUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
