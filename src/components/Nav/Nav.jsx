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
    { to: "/demos", label: "Demos", num: "05" },
    { to: "/contact", label: "Contact", num: "06" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/" className="nav__logo" title="Go to Home">
          <svg className="nav__logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
          <span className="nav__logo-text">JC</span>
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
