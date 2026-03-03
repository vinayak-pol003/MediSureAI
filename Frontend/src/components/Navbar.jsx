import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ParticleBackground from "../components/ParticleBackground";


export default function Home() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme();

  const handleMagnet = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetMagnet = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
  };

  return (
    <div className="home-container">
      <ParticleBackground darkMode={darkMode} />

      <nav className="navbar">
        <div className="logo"> MediSure AI</div>

        <div className="nav-buttons">
          <button
            className="toggle-btn magnetic"
            onMouseMove={handleMagnet}
            onMouseLeave={resetMagnet}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙 Dark" : "☀ Light"}
          </button>

          <button
            className="nav-btn magnetic"
            onMouseMove={handleMagnet}
            onMouseLeave={resetMagnet}
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="nav-btn primary magnetic"
            onMouseMove={handleMagnet}
            onMouseLeave={resetMagnet}
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
}