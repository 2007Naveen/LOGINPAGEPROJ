import { useState } from "react";
import axios from "axios";
import "../styles/auth.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      alert("Registration successful");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <>
      <div className="header">CGPA PORTAL – SIGNUP</div>

      <div className="auth-page">
        <div className="left-panel">
          <h1>Student Registration</h1>
          <p>
            Register using your institutional email ID. Only authorized students
            can access the CGPA calculator portal.
          </p>
        </div>

        <div className="right-panel">
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Signup</h2>

            <label>Full Name</label>
            <input name="name" onChange={handleChange} required />

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

            <button type="submit">Register</button>

            <p>
              Already registered? <a href="/">Login</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
