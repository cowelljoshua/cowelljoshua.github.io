import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

/**
 * Navigation Component
 * Modern defense-oriented navbar with animated elements
 */
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Dynamic island nav doesn't need scroll state
  }, []);

  const navLinks = [
    { to: "/about", label: "About", num: "01" },
    { to: "/experience", label: "Experience", num: "02" },
    { to: "/projects", label: "Projects", num: "03" },
    { to: "/resume", label: "Resume", num: "04" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-bracket nav__logo-bracket--left">[</span>
          <span className="nav__logo-text">JC</span>
          <span className="nav__logo-bracket nav__logo-bracket--right">]</span>
        </Link>

        <button
          className={`nav__mobile-toggle ${
            isMobileMenuOpen ? "nav__mobile-toggle--open" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`nav__menu ${isMobileMenuOpen ? "nav__menu--open" : ""}`}
        >
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`nav__link ${
                    location.pathname === link.to ? "nav__link--active" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  <span className="nav__link-num">{link.num}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
