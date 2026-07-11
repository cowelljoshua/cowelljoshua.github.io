import { useState, useEffect, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Nav";
import RocketTuner from "../RocketTuner";
import useKonamiCode from "../../hooks/useKonamiCode";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";

  // Key forces React to remount when switching between home/non-home
  // This ensures Safari properly repaints the background
  const layoutKey = isHomePage ? 'home' : 'other';

  // Easter egg: the Konami code launches an interactive rocket sim.
  const [showRocketGame, setShowRocketGame] = useState(false);
  const unlockGame = useCallback(() => setShowRocketGame(true), []);
  useKonamiCode(unlockGame);

  // One-time console breadcrumb for the curious.
  useEffect(() => {
    console.log(
      "%c🚀 Psst... there's a hidden rocket sim. Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A",
      "color:#e63946;font-weight:700;font-size:12px;"
    );
  }, []);

  // Close on Escape + lock body scroll while the game modal is open.
  useEffect(() => {
    if (!showRocketGame) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") setShowRocketGame(false);
    };
    window.addEventListener("keydown", handleEscape);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = prevOverflow;
    };
  }, [showRocketGame]);

  return (
    <div
      key={layoutKey}
      className={`layout ${isHomePage ? 'layout--home' : ''}`}
    >
      <Nav />
      <main className={`layout__main ${isHomePage ? 'layout__main--home' : ''}`}>
        <Outlet />
      </main>

      {showRocketGame && (
        <div
          className="easter-egg-overlay"
          onClick={() => setShowRocketGame(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Hidden rocket sim"
        >
          <div className="easter-egg-modal" onClick={(e) => e.stopPropagation()}>
            <div className="easter-egg-modal__bar">
              <span className="easter-egg-modal__badge">🕹️ You found the easter egg</span>
              <button
                className="easter-egg-modal__close"
                onClick={() => setShowRocketGame(false)}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <RocketTuner />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
