import "../styles/auth.css";
import { useState } from "react";

const Signup = () => {
  const [captcha, setCaptcha] = useState("7f6Qc");

  const refreshCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let newCaptcha = "";
    for (let i = 0; i < 5; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(newCaptcha);
  };

  return (
    <div className="eci-layout">

      {/* HEADER */}
      <header className="eci-header">
        <h1>NK-EDCNT</h1>
        <div className="nav-btns">
          <a href="/">Login</a>
          <a href="/signup" className="active">Sign-Up</a>
        </div>
      </header>

      {/* BODY */}
      <main className="eci-body">
        <div className="eci-card">

          <h2>Sign-Up</h2>
          <p className="login-link">
            Already have an account? <a href="/">Login</a>
          </p>

          {/* TYPE */}
          <div className="elector-tabs">
            <center><span className="active"></span></center>
          </div>

          <label>Mobile Number <span>*</span></label>
          <input placeholder="Enter Mobile Number" />

          <label>Email address (optional)</label>
          <input placeholder="Enter email address (optional)" />

          {/* CAPTCHA */}
          <div className="captcha-wrapper">
            <div className="captcha-box">{captcha}</div>
            <button
              type="button"
              className="captcha-refresh"
              onClick={refreshCaptcha}
              title="Refresh Captcha"
            >
              ↻
            </button>
          </div>

          <label>Captcha <span>*</span></label>
          <input placeholder="Enter Captcha" />

          <button className="primary-btn">Continue</button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="eci-footer">
        Copyright © K.S.R College of Engineering, T.gode., 2025 | Privacy Policy
      </footer>

    </div>
  );
};

export default Signup;
