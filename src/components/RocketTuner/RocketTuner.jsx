import { useState, useRef, useEffect } from "react";
import "./RocketTuner.css";

const RocketTuner = () => {
  const [gameState, setGameState] = useState("ready"); // ready, flying, landed
  const [motor, setMotor] = useState(1);
  const [ballast, setBallast] = useState(0.5); // kg
  const [rocketPos, setRocketPos] = useState(0);
  const [currentAlt, setCurrentAlt] = useState(0);
  const [maxAlt, setMaxAlt] = useState(0);
  const [result, setResult] = useState(null);
  const animationRef = useRef(null);

  const TARGET = 10000; // feet

  const motors = [
    { name: "I280", impulse: 320, thrust: 280, color: "#3498db" },
    { name: "J350", impulse: 640, thrust: 350, color: "#9b59b6" },
    { name: "K550", impulse: 1280, thrust: 550, color: "#e74c3c" },
    { name: "L1000", impulse: 2560, thrust: 1000, color: "#f39c12" },
  ];

  const currentMotor = motors[motor];

  // Simple altitude calculation based on motor and ballast
  const calculateApogee = () => {
    const baseAlt = currentMotor.impulse * 12; // Base altitude from impulse
    const massEffect = 1 - (ballast * 0.25); // More ballast = lower altitude
    const variation = 0.95 + Math.random() * 0.1; // Slight randomness
    return Math.round(baseAlt * massEffect * variation);
  };

  const launch = () => {
    if (gameState === "flying") return;
    
    setGameState("flying");
    setResult(null);
    setMaxAlt(0);
    setCurrentAlt(0);
    
    const apogee = calculateApogee();
    const flightTime = 4000; // 4 seconds total animation
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / flightTime;
      
      if (progress >= 1) {
        setGameState("landed");
        setRocketPos(0);
        setCurrentAlt(0);
        
        const error = Math.abs(TARGET - apogee);
        setResult({
          altitude: apogee,
          error,
          rating: error < 200 ? "perfect" : error < 500 ? "great" : error < 1000 ? "good" : "miss"
        });
        return;
      }
      
      // Parabolic flight path
      const altProgress = progress < 0.5 
        ? 4 * progress * progress  // Accelerating up
        : 1 - Math.pow(-2 * progress + 2, 2) / 4; // Decelerating down
      
      const alt = apogee * Math.sin(progress * Math.PI);
      setCurrentAlt(Math.round(alt));
      setMaxAlt(prev => Math.max(prev, alt));
      setRocketPos(altProgress * 100);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    cancelAnimationFrame(animationRef.current);
    setGameState("ready");
    setRocketPos(0);
    setCurrentAlt(0);
    setMaxAlt(0);
    setResult(null);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Predicted altitude for display
  const predictedAlt = currentMotor.impulse * 12 * (1 - ballast * 0.25);

  return (
    <div className="rocket-game">
      <div className="rocket-game__header">
        <h2>🚀 10K Altitude Challenge</h2>
        <p>Select motor & ballast to hit exactly 10,000 ft</p>
      </div>

      <div className="rocket-game__main">
        {/* Flight visualization */}
        <div className="rocket-game__flight">
          {/* Altitude scale */}
          <div className="rocket-game__scale">
            {[0, 5000, 10000, 15000].map(alt => (
              <div key={alt} className="rocket-game__tick" style={{ bottom: `${(alt / 16000) * 100}%` }}>
                <span>{(alt / 1000)}k</span>
              </div>
            ))}
          </div>

          {/* Target line */}
          <div className="rocket-game__target" style={{ bottom: `${(TARGET / 16000) * 100}%` }}>
            <span>🎯 10,000 ft</span>
          </div>

          {/* Rocket */}
          <div 
            className={`rocket-game__rocket ${gameState === "flying" ? "flying" : ""}`}
            style={{ bottom: `${(rocketPos / 100) * 60 + 5}%` }}
          >
            <svg viewBox="0 0 30 80" className="rocket-game__svg">
              <polygon points="15,0 22,15 8,15" fill="#e63946" />
              <rect x="8" y="15" width="14" height="40" fill="#f1faee" rx="2" />
              <polygon points="4,50 8,35 8,50" fill="#1d3557" />
              <polygon points="26,50 22,35 22,50" fill="#1d3557" />
              <rect x="11" y="55" width="8" height="8" fill={currentMotor.color} />
              {gameState === "flying" && rocketPos < 50 && (
                <>
                  <ellipse cx="15" cy="72" rx="6" ry="12" fill="#ff6b35" />
                  <ellipse cx="15" cy="70" rx="4" ry="8" fill="#ffd166" />
                </>
              )}
            </svg>
          </div>

          {/* Altimeter */}
          {gameState === "flying" && (
            <div className="rocket-game__altimeter">
              {currentAlt.toLocaleString()} ft
            </div>
          )}

          {/* Ground */}
          <div className="rocket-game__ground" />

          {/* Result overlay */}
          {result && (
            <div className={`rocket-game__result rocket-game__result--${result.rating}`}>
              <div className="rocket-game__result-icon">
                {result.rating === "perfect" ? "🎯" : result.rating === "great" ? "🔥" : result.rating === "good" ? "👍" : "💨"}
              </div>
              <div className="rocket-game__result-alt">{result.altitude.toLocaleString()} ft</div>
              <div className="rocket-game__result-msg">
                {result.rating === "perfect" ? "PERFECT!" :
                 result.rating === "great" ? `Only ${result.error} ft off!` :
                 result.rating === "good" ? `${result.error} ft off` :
                 `Missed by ${result.error} ft`}
              </div>
            </div>
          )}
        </div>

        {/* Controls panel */}
        <div className="rocket-game__controls">
          <div className="rocket-game__panel-title">Configuration</div>

          {/* Motor selection */}
          <div className="rocket-game__control-group">
            <label>Motor</label>
            <div className="rocket-game__motors">
              {motors.map((m, i) => (
                <button
                  key={m.name}
                  className={`rocket-game__motor-btn ${motor === i ? "active" : ""}`}
                  onClick={() => setMotor(i)}
                  disabled={gameState === "flying"}
                  style={{ "--motor-color": m.color }}
                >
                  <span className="rocket-game__motor-name">{m.name}</span>
                  <span className="rocket-game__motor-impulse">{m.impulse} Ns</span>
                </button>
              ))}
            </div>
          </div>

          {/* Ballast */}
          <div className="rocket-game__control-group">
            <label>Ballast Weight: <strong>{ballast.toFixed(1)} kg</strong></label>
            <div className="rocket-game__ballast">
              <button 
                onClick={() => setBallast(b => Math.max(0, b - 0.1))}
                disabled={gameState === "flying"}
              >−</button>
              <div className="rocket-game__ballast-bar">
                <div 
                  className="rocket-game__ballast-fill"
                  style={{ width: `${(ballast / 2) * 100}%` }}
                />
              </div>
              <button 
                onClick={() => setBallast(b => Math.min(2, b + 0.1))}
                disabled={gameState === "flying"}
              >+</button>
            </div>
          </div>

          {/* Predicted altitude */}
          <div className="rocket-game__prediction">
            <span>Est. Altitude:</span>
            <strong style={{ color: Math.abs(predictedAlt - TARGET) < 500 ? "#2ecc71" : "#f39c12" }}>
              ~{Math.round(predictedAlt).toLocaleString()} ft
            </strong>
          </div>

          {/* Launch button */}
          {gameState === "ready" && (
            <button className="rocket-game__launch" onClick={launch}>
              🚀 LAUNCH
            </button>
          )}
          {gameState === "landed" && (
            <button className="rocket-game__retry" onClick={reset}>
              Try Again
            </button>
          )}
          {gameState === "flying" && (
            <div className="rocket-game__status">🔥 In Flight...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RocketTuner;
