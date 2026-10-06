import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { loginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    try {
      loginUser(formData.email.trim(), formData.password);

      alert("Login Successful!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
            />
          </div>
          {error && <p className="form-error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
