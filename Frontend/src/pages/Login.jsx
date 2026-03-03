import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ParticleBackground from "../components/ParticleBackground";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const handleLogin = () => {
    // Just simulate login
    localStorage.setItem("user", "true");

    // Notify navbar
    window.dispatchEvent(new Event("storage"));

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <ParticleBackground darkMode={darkMode} />

      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>

        <input
          className="auth-input"
          type="email"
          placeholder="Email"
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
        />

        <div className="auth-buttons">
          <button
            className="auth-button"
            onClick={handleLogin}
          >
            Login
          </button>

          <button
            className="auth-button cancel"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>

        <p
          className="auth-link"
          onClick={() => alert("Forgot Password coming soon 🚀")}
        >
          Forgot Password?
        </p>

        <p
          className="auth-link"
          onClick={() => navigate("/register")}
        >
          Don’t have an account? Register
        </p>
      </div>
    </div>
  );
}