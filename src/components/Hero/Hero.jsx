import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./Hero.css";

/**
 * Hero Section Component
 * Minimalist design showcasing background image
 */
const Hero = () => {
  const navigate = useNavigate();

  const handleViewProjects = (e) => {
    e.preventDefault();
    navigate("/projects");
  };

  const handleContactMe = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  return (
    <section className="hero" id="hero">
      {/* Mobile background image */}
      <img 
        src="/verticalhomepage.png" 
        alt="" 
        className="hero__mobile-bg"
        aria-hidden="true"
      />
      {/* Minimalist content at bottom */}
      <div className="hero__footer">
        <div className="hero__info">
          <h1 className="hero__name">
            Joshua <span className="hero__highlight">Cowell</span>
          </h1>
          <p className="hero__tagline">
            Liberty University Mechanical Engineering 2027
          </p>
        </div>

        <div className="hero__actions">
          <Button
            variant="light"
            size="lg"
            onClick={handleViewProjects}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            }
          >
            View Projects
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={handleContactMe}
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
