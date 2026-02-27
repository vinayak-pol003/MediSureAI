import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ParticleBackground from "../components/ParticleBackground";
import "./Auth.css";

export default function Register() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  return (
    <div className="auth-page">
      <ParticleBackground darkMode={darkMode} />

      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <input
          className="auth-input"
          type="text"
          placeholder="Full Name"
        />

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
            onClick={() => navigate("/dashboard")}
          >
            Register
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
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}