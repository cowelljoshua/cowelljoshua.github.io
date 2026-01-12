import { useState, useEffect, useRef } from "react";
import "./ThermalChallenge.css";

const ThermalChallenge = () => {
  const [rodPosition, setRodPosition] = useState(70); // % inserted (100 = fully in = low power)
  const [coreTemp, setCoreTemp] = useState(300);
  const [power, setPower] = useState(0);
  const [gameState, setGameState] = useState("idle"); // idle, running, meltdown, success
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef(null);
  const gameRef = useRef(null);

  const TARGET_POWER = 100; // Target power level (%)
  const MAX_TEMP = 850; // Meltdown temperature
  const SAFE_TEMP = 750; // Warning threshold

  // Physics simulation
  useEffect(() => {
    if (gameState !== "running") return;

    intervalRef.current = setInterval(() => {
      // Power output based on rod position (less inserted = more power)
      const targetPower = 100 - rodPosition;
      
      // Temperature changes based on power
      setCoreTemp(prev => {
        const heatGeneration = targetPower * 6;
        const cooling = 200 + (100 - targetPower) * 3;
        const newTemp = prev + (heatGeneration - cooling) * 0.02;
        
        if (newTemp >= MAX_TEMP) {
          setGameState("meltdown");
          return MAX_TEMP;
        }
        
        return Math.max(200, Math.min(MAX_TEMP, newTemp));
      });

      // Power ramps toward target
      setPower(prev => prev + (targetPower - prev) * 0.1);

      // Score for maintaining high power safely
      setScore(prev => {
        const powerBonus = power > 80 ? Math.round(power / 10) : 0;
        return prev + powerBonus;
      });

      // Timer
      setTimeLeft(prev => {
        if (prev <= 0.1) {
          setGameState("success");
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [gameState, rodPosition, power]);

  const startGame = () => {
    setGameState("running");
    setCoreTemp(300);
    setPower(0);
    setScore(0);
    setTimeLeft(30);
    setRodPosition(70);
  };

  const resetGame = () => {
    clearInterval(intervalRef.current);
    setGameState("idle");
    setCoreTemp(300);
    setPower(0);
    setRodPosition(70);
  };

  // Handle rod dragging
  const handleMouseDown = () => {
    if (gameState === "running") setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || gameState !== "running") return;
    
    const rect = gameRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percent = Math.max(0, Math.min(100, (y / rect.height) * 100));
    setRodPosition(percent);
  };

  const handleMouseUp = () => setIsDragging(false);

  // Visual calculations
  const tempPercent = ((coreTemp - 200) / (MAX_TEMP - 200)) * 100;
  const coreColor = coreTemp < 500 ? '#3a7bd5' : 
                    coreTemp < 650 ? '#f39c12' : 
                    coreTemp < 750 ? '#e74c3c' : '#ff0000';
  const glowIntensity = Math.min(30, (tempPercent / 100) * 30);

  return (
    <div className="thermal-game">
      <div className="thermal-game__header">
        <h2>☢️ Reactor Control</h2>
        <p>Drag control rods to maximize power without melting down!</p>
      </div>

      {gameState === "idle" && (
        <div className="thermal-game__intro">
          <p>
            Pull control rods <strong>UP</strong> to increase power output.<br/>
            Push them <strong>DOWN</strong> to cool the reactor.<br/>
            Stay under {SAFE_TEMP}°C or face a meltdown!
          </p>
          <button className="thermal-game__btn thermal-game__btn--start" onClick={startGame}>
            ⚡ Start Reactor
          </button>
        </div>
      )}

      {(gameState === "running" || gameState === "meltdown" || gameState === "success") && (
        <>
          <div className="thermal-game__hud">
            <div className="thermal-game__stat">
              <span>Power</span>
              <strong style={{ color: power > 80 ? '#2ecc71' : '#fff' }}>{Math.round(power)}%</strong>
            </div>
            <div className="thermal-game__stat">
              <span>Core Temp</span>
              <strong style={{ color: coreColor }}>{Math.round(coreTemp)}°C</strong>
            </div>
            <div className="thermal-game__stat">
              <span>Time</span>
              <strong>{timeLeft.toFixed(1)}s</strong>
            </div>
            <div className="thermal-game__stat">
              <span>Score</span>
              <strong className="thermal-game__score">{score}</strong>
            </div>
          </div>

          <div 
            className="thermal-game__reactor"
            ref={gameRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Reactor vessel */}
            <div className="thermal-game__vessel">
              {/* Core glow */}
              <div 
                className="thermal-game__core"
                style={{
                  background: `radial-gradient(circle, ${coreColor} 0%, transparent 70%)`,
                  boxShadow: `0 0 ${glowIntensity}px ${glowIntensity}px ${coreColor}`,
                  opacity: 0.5 + tempPercent / 200
                }}
              />
              
              {/* Fuel rods */}
              <div className="thermal-game__fuel-rods">
                {[0, 1, 2, 3, 4].map(i => (
                  <div 
                    key={i} 
                    className="thermal-game__fuel-rod"
                    style={{ background: coreColor }}
                  />
                ))}
              </div>

              {/* Control rods (draggable) */}
              <div 
                className={`thermal-game__control-rods ${isDragging ? 'dragging' : ''}`}
                style={{ top: `${rodPosition}%` }}
                onMouseDown={handleMouseDown}
              >
                {[0, 1, 2].map(i => (
                  <div key={i} className="thermal-game__control-rod">
                    <div className="thermal-game__rod-handle">⬇</div>
                  </div>
                ))}
              </div>

              {/* Water coolant */}
              <div 
                className="thermal-game__coolant"
                style={{
                  background: `linear-gradient(180deg, 
                    rgba(58,123,213,${0.3 - tempPercent/500}) 0%, 
                    rgba(58,123,213,${0.5 - tempPercent/400}) 100%)`
                }}
              />
            </div>

            {/* Temperature gauge */}
            <div className="thermal-game__gauge">
              <div className="thermal-game__gauge-label">TEMP</div>
              <div className="thermal-game__gauge-bar">
                <div 
                  className="thermal-game__gauge-fill"
                  style={{ 
                    height: `${tempPercent}%`,
                    background: coreColor
                  }}
                />
                <div className="thermal-game__danger-zone" />
              </div>
              <div className="thermal-game__gauge-max">{MAX_TEMP}°</div>
            </div>
          </div>

          {/* Result overlays */}
          {gameState === "meltdown" && (
            <div className="thermal-game__overlay thermal-game__overlay--fail">
              <div className="thermal-game__overlay-icon">💥</div>
              <div className="thermal-game__overlay-title">MELTDOWN!</div>
              <div className="thermal-game__overlay-score">Final Score: {score}</div>
              <button className="thermal-game__btn" onClick={resetGame}>Try Again</button>
            </div>
          )}

          {gameState === "success" && (
            <div className="thermal-game__overlay thermal-game__overlay--success">
              <div className="thermal-game__overlay-icon">✅</div>
              <div className="thermal-game__overlay-title">Reactor Stable!</div>
              <div className="thermal-game__overlay-score">Score: {score}</div>
              <button className="thermal-game__btn" onClick={resetGame}>Play Again</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ThermalChallenge;
