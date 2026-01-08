import { useState } from "react";
import axios from "axios";
import "../styles/auth.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login", form);
      alert("Login successful");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div className="header">CGPA PORTAL – LOGIN</div>

      <div className="auth-page">
        <div className="left-panel">
          <h1>Welcome to CGPA Portal</h1>
          <p>
            This portal allows students to securely login using their registered
            institutional email and ID card number to access academic details.
          </p>
        </div>

        <div className="right-panel">
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <label>Email ID</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              required
            />

            <button type="submit">Login</button>

            <p>
              New user? <a href="/signup">Register here</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
