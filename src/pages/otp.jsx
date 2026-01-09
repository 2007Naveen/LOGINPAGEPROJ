import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const DEFAULT_OTP = "123456";

const Otp = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // info | success | error

  const inputRefs = useRef([]);

  /* Mobile number */
  const mobileNumber = "+91 9098769999";
  const maskedNumber =
    mobileNumber.slice(0, 6) + "xxxx" + mobileNumber.slice(-4);

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  /* ---------------- OTP INPUT ---------------- */
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  /* ---------------- BACKSPACE ---------------- */
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  /* ---------------- VERIFY OTP ---------------- */
  const verifyOtp = () => {
    const enteredOtp = otp.join("");
    const storedOtp = sessionStorage.getItem("otp");

    if (enteredOtp.length !== 6) {
      setMessage("Please enter full OTP");
      setMessageType("info");
      return;
    }


    if (enteredOtp === storedOtp || enteredOtp === DEFAULT_OTP) {
  sessionStorage.setItem("isLoggedIn", "true"); // ✅ ADD THIS

  setMessage("Login successful");
  setMessageType("success");

  setTimeout(() => {
    navigate("/home");
  }, 1000);

    } else {
      setMessage("Invalid OTP");
      setMessageType("error");
    }
  };

  /* ---------------- RESEND OTP ---------------- */
  const resendOtp = () => {
    sessionStorage.setItem("otp", DEFAULT_OTP);
    setOtp(["", "", "", "", "", ""]);
    setTimer(30);
    setMessage("New OTP sent");
    setMessageType("info");
    inputRefs.current[0].focus();
  };

  return (
    <div className="otp-page">
      <div className="otp-body">
        <div
          className="otp-card"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* Back button - top left */}
          <div
            onClick={() => navigate("/login")}
            style={{
              alignSelf: "flex-start",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            ← Back
          </div>

          <h2 style={{ textAlign: "center" }}>Enter OTP</h2>

          {/* OTP text */}
          <p
            className="otp-sub"
            style={{
              textAlign: "center",
              marginBottom: "14px",
              fontSize: "14px",
            }}
          >
            OTP sent to your registered mobile number
            <br />
            <span style={{ color: "green", fontWeight: 600 }}>
              {maskedNumber}
            </span>
          </p>

          {/* OTP boxes */}
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                inputMode="numeric"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <button className="otp-btn" onClick={verifyOtp}>
            Verify OTP
          </button>

          {/* Status message (small font) */}
          {message && (
            <p
              style={{
                marginTop: "8px",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: 600,
                color:
                  messageType === "success"
                    ? "green"
                    : messageType === "error"
                    ? "red"
                    : "blue",
              }}
            >
              {message}
            </p>
          )}

          {/* Timer / Resend */}
          <div
            className="otp-timer"
            style={{ marginTop: "14px", fontSize: "13px" }}
          >
            {timer > 0 ? (
              <>
                Resend OTP in{" "}
                <span style={{ fontWeight: 600 }}>
                  00:{timer.toString().padStart(2, "0")}
                </span>
              </>
            ) : (
              <span
                onClick={resendOtp}
                style={{
                  color: "#1a73e8",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Resend OTP
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
