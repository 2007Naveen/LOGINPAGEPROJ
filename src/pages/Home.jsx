import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login"); // 🔒 Protect home page
    }
  }, [navigate]);

  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to EDUCONNECT - STUDENT EDUCATION</h1>

      <p style={{ marginTop: "12px" }}>
        You have successfully logged in 🎉
      </p>

      <button
        onClick={logout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#5a4fcf",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
