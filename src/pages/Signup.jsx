import "../styles/auth.css";
import { useState } from "react";

const Signup = () => {
  const [tab, setTab] = useState("resident");

  return (
    <>
      <div className="eci-header">
        <h1>EDUCONNECT-STUDENT EDUCATION</h1>
        <div className="nav-btns">
          <a href="/">Login</a>
          <a href="/signup">Sign-Up</a>
        </div>
      </div>

      <div className="eci-container">
        <div className="eci-card">
          <h2>Sign-Up</h2>
          <p>
            Already have an account? <a href="/">Login</a>
          </p>

          <div className="tabs">
            <div
              className={`tab ${tab === "resident" ? "active" : ""}`}
              onClick={() => setTab("resident")}
            >
              EDU CONNECT-PLUGIN
            </div>
          </div>
          
          <label>Mobile Number *</label>
          <input placeholder="Enter Mobile Number" />

          <label>Email address (optional)</label>
          <input placeholder="Enter email address (optional)" />

          <div className="captcha-box">
            <div className="captcha-img">7 a n g</div>
            <span>↻</span>
          </div>

          <label>Captcha *</label>
          <input placeholder="Enter Captcha" />

          <button>Continue</button>
        </div>
      </div>

      <div className="footer">
        Copyright © K.S.R College of Engineering, T.gode,. 2025 | Privacy Policy
      </div>
    </>
  );
};

export default Signup;
