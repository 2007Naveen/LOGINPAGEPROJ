import "../styles/auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha] = useState("32q9J"); // demo

  const handleOTPRequest = () => {
    if (!userId) {
      alert("Please enter Mobile No.");
      return;
    }

    if (captchaInput !== captcha) {
      alert("Invalid Captcha");
      return;
    }

    // TEMP OTP (frontend demo)
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP:", otp);

    // store OTP temporarily
    sessionStorage.setItem("otp", otp);
    sessionStorage.setItem("userId", userId);

    navigate("/otp");
  };

  return (
    
    <div className="login-page eci-layout">
            <header className="eci-header">
        <h1>NK-EDCNT</h1>
        <div className="nav-btns">
          <a href="/">Login</a>
          <a href="/signup" className="active">Sign-Up</a>
        </div>
      </header>
      <div className="eci-body">
        <div className="eci-card">

          <h2>Login</h2>

          <label>
            Registered Mobile No.<span>*</span>
          </label>
          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter registered Mobile No."
          />

          <div className="captcha-wrapper">
            <div className="captcha-box">{captcha}</div>
          </div>

          <label>
            Captcha <span>*</span>
          </label>
          <input
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            placeholder="Enter Captcha"
          />

          <button className="primary-btn" onClick={handleOTPRequest}>
            Request OTP
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
