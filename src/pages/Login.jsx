import "../styles/auth.css";
import { useState } from "react";

const Login = () => {
  const [tab, setTab] = useState("resident");

  return (
    <>
      <div className="eci-header">
        <h1>NAVEENKUMAR R</h1>
        <div className="nav-btns">
          <a href="/">Login</a>
          <a href="/signup">Sign-Up</a>
        </div>
      </div>

      <div className="eci-container">
        <div className="eci-card">
          <h2>Login</h2>
          <p>
            Do not have an account? <a href="/signup">Sign-Up</a>
          </p>

          <div className="tabs">
            <div
              className={`tab ${tab === "resident" ? "active" : ""}`}
              onClick={() => setTab("resident")}
            >
             EDUCONNECT-STUDENT EDUCATION
            </div>
          </div>

          <label>Registered Mobile No./Email ID/EPIC No.*</label>
          <input placeholder="Enter registered Mobile No./Email ID" />

          <div className="captcha-box">
            <div className="captcha-img">9 g 7 s</div>
            <span>↻</span>
          </div>

          <label>Captcha *</label>
          <input placeholder="Enter Captcha" />

          <button>Request OTP</button>
        </div>
      </div>

      <div className="footer">
        Copyright © K.S.R College of Engineering, T.gode,. 2025 | Privacy Policy
      </div>
    </>
  );
};

export default Login;

