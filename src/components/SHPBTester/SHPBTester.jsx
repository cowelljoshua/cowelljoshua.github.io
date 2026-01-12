import { useState, useEffect, useRef } from "react";
import "./SHPBTester.css";

const SHPBTester = () => {
  const [material, setMaterial] = useState("aluminum");
  const [strikerVelocity, setStrikerVelocity] = useState(15); // m/s
  const [isRunning, setIsRunning] = useState(false);
  const [testPhase, setTestPhase] = useState("ready"); // ready, impact, analyzing, complete
  const [strikerPos, setStrikerPos] = useState(0);
  const [wavePos, setWavePos] = useState(0);
  const [stressData, setStressData] = useState([]);
  const [strainData, setStrainData] = useState([]);
  const [results, setResults] = useState(null);
  const [sampleDeformation, setSampleDeformation] = useState(0);
  const animationRef = useRef(null);

  const materials = {
    aluminum: {
      name: "Aluminum 6061-T6",
      density: 2700, // kg/m³
      yieldStrength: 276, // MPa
      ultimateStrength: 310, // MPa
      youngsModulus: 69, // GPa
      color: "#a8a8a8",
      failureStrain: 0.12,
    },
    steel: {
      name: "Steel 4340",
      density: 7850,
      yieldStrength: 470,
      ultimateStrength: 745,
      youngsModulus: 205,
      color: "#5a5a6e",
      failureStrain: 0.09,
    },
    titanium: {
      name: "Titanium Ti-6Al-4V",
      density: 4430,
      yieldStrength: 880,
      ultimateStrength: 950,
      youngsModulus: 114,
      color: "#7a8599",
      failureStrain: 0.10,
    },
    copper: {
      name: "Copper C11000",
      density: 8960,
      yieldStrength: 70,
      ultimateStrength: 220,
      youngsModulus: 117,
      color: "#b87333",
      failureStrain: 0.35,
    },
    composite: {
      name: "Carbon Fiber Composite",
      density: 1600,
      yieldStrength: 600,
      ultimateStrength: 900,
      youngsModulus: 70,
      color: "#2a2a2a",
      failureStrain: 0.015,
    },
  };

  const currentMaterial = materials[material];

  // Calculate stress-strain curve based on SHPB physics
  const generateStressStrainCurve = () => {
    const mat = currentMaterial;
    const strainRate = (strikerVelocity * 1000) / 20; // Approximate strain rate (1/s)
    
    // Johnson-Cook style strain rate sensitivity
    const strainRateFactor = 1 + 0.02 * Math.log(strainRate / 1000);
    
    const points = [];
    const maxStrain = Math.min(mat.failureStrain * 1.2, 0.4);
    const steps = 50;
    
    for (let i = 0; i <= steps; i++) {
      const strain = (i / steps) * maxStrain;
      let stress;
      
      if (strain < mat.yieldStrength / (mat.youngsModulus * 1000)) {
        // Elastic region
        stress = strain * mat.youngsModulus * 1000;
      } else if (strain < mat.failureStrain) {
        // Plastic region with hardening
        const plasticStrain = strain - mat.yieldStrength / (mat.youngsModulus * 1000);
        const hardeningExp = 0.3; // Typical hardening exponent
        stress = mat.yieldStrength + 
          (mat.ultimateStrength - mat.yieldStrength) * 
          Math.pow(plasticStrain / mat.failureStrain, hardeningExp);
        stress *= strainRateFactor;
      } else {
        // Failure region
        const failureProgress = (strain - mat.failureStrain) / 0.05;
        stress = mat.ultimateStrength * strainRateFactor * Math.max(0, 1 - failureProgress);
      }
      
      points.push({ strain: strain * 100, stress }); // strain in %
    }
    
    return points;
  };

  const runTest = () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setTestPhase("impact");
    setStrikerPos(0);
    setWavePos(0);
    setStressData([]);
    setStrainData([]);
    setResults(null);
    setSampleDeformation(0);

    const impactDuration = 800;
    const waveDuration = 600;
    const analyzeDuration = 1000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed < impactDuration) {
        // Striker approaching
        const progress = elapsed / impactDuration;
        const eased = 1 - Math.pow(1 - progress, 2);
        setStrikerPos(eased * 100);
      } else if (elapsed < impactDuration + waveDuration) {
        // Wave propagation
        setTestPhase("wave");
        const waveProgress = (elapsed - impactDuration) / waveDuration;
        setWavePos(waveProgress * 100);
        setSampleDeformation(Math.min(waveProgress * 15, 15));
        
        // Generate stress-strain data progressively
        const curve = generateStressStrainCurve();
        const dataPoints = Math.floor(waveProgress * curve.length);
        setStressData(curve.slice(0, dataPoints));
      } else if (elapsed < impactDuration + waveDuration + analyzeDuration) {
        // Analyzing
        setTestPhase("analyzing");
      } else {
        // Complete
        setTestPhase("complete");
        const curve = generateStressStrainCurve();
        setStressData(curve);
        
        const mat = currentMaterial;
        const strainRate = (strikerVelocity * 1000) / 20;
        const maxStress = Math.max(...curve.map(p => p.stress));
        const yieldPoint = curve.find(p => p.stress >= mat.yieldStrength);
        
        setResults({
          peakStress: maxStress,
          yieldStrain: yieldPoint ? yieldPoint.strain : 0,
          strainRate: strainRate.toFixed(0),
          energyAbsorbed: ((maxStress * mat.failureStrain) / 2).toFixed(1),
          failed: curve.some(p => p.strain > mat.failureStrain * 100),
        });
        
        setIsRunning(false);
        return;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Calculate SVG path for stress-strain curve
  const getCurvePath = () => {
    if (stressData.length < 2) return "";
    
    const width = 280;
    const height = 180;
    const maxStrain = 20; // 20%
    const maxStress = 1000; // MPa
    
    const points = stressData.map((p, i) => {
      const x = (p.strain / maxStrain) * width;
      const y = height - (p.stress / maxStress) * height;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    });
    
    return points.join(" ");
  };

  const getYieldPoint = () => {
    const mat = currentMaterial;
    const width = 280;
    const height = 180;
    const maxStrain = 20;
    const maxStress = 1000;
    
    const yieldStrain = mat.yieldStrength / (mat.youngsModulus * 1000) * 100;
    return {
      x: (yieldStrain / maxStrain) * width,
      y: height - (mat.yieldStrength / maxStress) * height,
    };
  };

  return (
    <div className="shpb-tester">
      <div className="shpb-tester__header">
        <h2 className="shpb-tester__title">Split-Hopkinson Pressure Bar Tester</h2>
        <p className="shpb-tester__subtitle">
          High strain-rate material characterization simulation
        </p>
      </div>

      <div className="shpb-tester__content">
        {/* SHPB Apparatus Visualization */}
        <div className="shpb-tester__apparatus">
          <div className="shpb-tester__apparatus-container">
            {/* Labels */}
            <div className="shpb-tester__apparatus-labels">
              <span>Striker Bar</span>
              <span>Incident Bar</span>
              <span>Sample</span>
              <span>Transmitted Bar</span>
            </div>

            {/* SHPB Setup */}
            <div className="shpb-tester__bars">
              {/* Striker Bar */}
              <div 
                className="shpb-tester__striker"
                style={{ 
                  transform: `translateX(${-100 + strikerPos}%)`,
                  transition: testPhase === "ready" ? "none" : "transform 0.05s linear"
                }}
              >
                <div className="shpb-tester__bar shpb-tester__bar--striker"></div>
              </div>

              {/* Incident Bar with wave */}
              <div className="shpb-tester__incident">
                <div className="shpb-tester__bar shpb-tester__bar--incident">
                  {(testPhase === "wave" || testPhase === "analyzing") && (
                    <div 
                      className="shpb-tester__wave shpb-tester__wave--incident"
                      style={{ 
                        left: `${wavePos}%`,
                        opacity: testPhase === "analyzing" ? 0.3 : 1
                      }}
                    />
                  )}
                  <div className="shpb-tester__strain-gauge shpb-tester__strain-gauge--1">
                    <span>SG1</span>
                  </div>
                </div>
              </div>

              {/* Sample */}
              <div className="shpb-tester__sample-container">
                <div 
                  className="shpb-tester__sample"
                  style={{ 
                    backgroundColor: currentMaterial.color,
                    transform: `scaleX(${1 - sampleDeformation / 100}) scaleY(${1 + sampleDeformation / 150})`,
                  }}
                >
                  <span className="shpb-tester__sample-label">{materials[material].name.split(" ")[0]}</span>
                </div>
              </div>

              {/* Transmitted Bar with wave */}
              <div className="shpb-tester__transmitted">
                <div className="shpb-tester__bar shpb-tester__bar--transmitted">
                  {testPhase === "analyzing" && (
                    <div 
                      className="shpb-tester__wave shpb-tester__wave--transmitted"
                      style={{ right: `${100 - wavePos}%` }}
                    />
                  )}
                  <div className="shpb-tester__strain-gauge shpb-tester__strain-gauge--2">
                    <span>SG2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact indicator */}
            {testPhase !== "ready" && testPhase !== "complete" && (
              <div className="shpb-tester__impact-flash" />
            )}
          </div>

          {/* Phase indicator */}
          <div className="shpb-tester__phase">
            <div className={`shpb-tester__phase-dot ${testPhase === "ready" ? "active" : ""}`} />
            <div className={`shpb-tester__phase-dot ${testPhase === "impact" ? "active" : ""}`} />
            <div className={`shpb-tester__phase-dot ${testPhase === "wave" ? "active" : ""}`} />
            <div className={`shpb-tester__phase-dot ${testPhase === "analyzing" ? "active" : ""}`} />
            <div className={`shpb-tester__phase-dot ${testPhase === "complete" ? "active" : ""}`} />
            <span className="shpb-tester__phase-label">
              {testPhase === "ready" && "Ready"}
              {testPhase === "impact" && "Impact..."}
              {testPhase === "wave" && "Wave Propagation"}
              {testPhase === "analyzing" && "Analyzing Data..."}
              {testPhase === "complete" && "Test Complete"}
            </span>
          </div>
        </div>

        <div className="shpb-tester__data-panel">
          {/* Stress-Strain Graph */}
          <div className="shpb-tester__graph">
            <div className="shpb-tester__graph-title">Stress-Strain Curve</div>
            <svg className="shpb-tester__graph-svg" viewBox="0 0 300 200">
              {/* Grid */}
              <defs>
                <pattern id="grid" width="28" height="18" patternUnits="userSpaceOnUse">
                  <path d="M 28 0 L 0 0 0 18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect x="10" y="10" width="280" height="180" fill="url(#grid)" />
              
              {/* Axes */}
              <line x1="10" y1="190" x2="290" y2="190" stroke="#6b7280" strokeWidth="1" />
              <line x1="10" y1="10" x2="10" y2="190" stroke="#6b7280" strokeWidth="1" />
              
              {/* Axis labels */}
              <text x="150" y="200" fill="#6b7280" fontSize="10" textAnchor="middle">Strain (%)</text>
              <text x="5" y="100" fill="#6b7280" fontSize="10" textAnchor="middle" transform="rotate(-90, 5, 100)">Stress (MPa)</text>
              
              {/* Scale markers */}
              <text x="10" y="200" fill="#6b7280" fontSize="8">0</text>
              <text x="150" y="200" fill="#6b7280" fontSize="8">10%</text>
              <text x="285" y="200" fill="#6b7280" fontSize="8">20%</text>
              <text x="3" y="190" fill="#6b7280" fontSize="8">0</text>
              <text x="3" y="100" fill="#6b7280" fontSize="8">500</text>
              <text x="3" y="15" fill="#6b7280" fontSize="8">1000</text>

              {/* Yield point marker */}
              {stressData.length > 5 && (
                <g transform={`translate(${10 + getYieldPoint().x}, ${getYieldPoint().y})`}>
                  <circle r="4" fill="none" stroke="#f39c12" strokeWidth="2" />
                  <text x="8" y="4" fill="#f39c12" fontSize="8">Yield</text>
                </g>
              )}
              
              {/* Stress-strain curve */}
              <path
                d={getCurvePath()}
                fill="none"
                stroke="#4a90d9"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(10, 10)"
                style={{ filter: "drop-shadow(0 0 4px rgba(74, 144, 217, 0.5))" }}
              />
            </svg>
          </div>

          {/* Controls */}
          <div className="shpb-tester__controls">
            <div className="shpb-tester__control">
              <label>Material</label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="shpb-tester__select"
                disabled={isRunning}
              >
                {Object.entries(materials).map(([key, mat]) => (
                  <option key={key} value={key}>{mat.name}</option>
                ))}
              </select>
            </div>

            <div className="shpb-tester__control">
              <div className="shpb-tester__control-header">
                <label>Striker Velocity</label>
                <span className="shpb-tester__value">{strikerVelocity} m/s</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                value={strikerVelocity}
                onChange={(e) => setStrikerVelocity(parseInt(e.target.value))}
                className="shpb-tester__slider"
                disabled={isRunning}
              />
            </div>

            <button
              className={`shpb-tester__run-btn ${isRunning ? "running" : ""}`}
              onClick={runTest}
              disabled={isRunning}
            >
              {isRunning ? (
                <>
                  <span className="shpb-tester__spinner"></span>
                  Testing...
                </>
              ) : (
                <>
                  <span className="shpb-tester__btn-icon">⚡</span>
                  Run SHPB Test
                </>
              )}
            </button>
          </div>

          {/* Results */}
          {results && (
            <div className={`shpb-tester__results ${results.failed ? "shpb-tester__results--failed" : ""}`}>
              <div className="shpb-tester__results-title">
                {results.failed ? "⚠️ Material Failed" : "✅ Test Complete"}
              </div>
              <div className="shpb-tester__results-grid">
                <div className="shpb-tester__result-item">
                  <span>Peak Stress</span>
                  <strong>{results.peakStress.toFixed(0)} MPa</strong>
                </div>
                <div className="shpb-tester__result-item">
                  <span>Strain Rate</span>
                  <strong>{results.strainRate} /s</strong>
                </div>
                <div className="shpb-tester__result-item">
                  <span>Yield Strain</span>
                  <strong>{results.yieldStrain.toFixed(2)}%</strong>
                </div>
                <div className="shpb-tester__result-item">
                  <span>Energy Absorbed</span>
                  <strong>{results.energyAbsorbed} MJ/m³</strong>
                </div>
              </div>
              <div className="shpb-tester__material-props">
                <span>Material: {currentMaterial.name}</span>
                <span>ρ = {currentMaterial.density} kg/m³ | E = {currentMaterial.youngsModulus} GPa</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SHPBTester;
