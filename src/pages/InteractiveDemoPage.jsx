import { useState } from "react";
import RocketTuner from "../components/RocketTuner";
import ThermalChallenge from "../components/ThermalChallenge";
import SHPBTester from "../components/SHPBTester";
import "./InteractiveDemoPage.css";

const InteractiveDemoPage = () => {
  const [activeTab, setActiveTab] = useState("rocket");

  const tabs = [
    { id: "rocket", label: "🚀 Rocket Tuner", component: <RocketTuner /> },
    { id: "thermal", label: "🌡️ Thermal Challenge", component: <ThermalChallenge /> },
    { id: "shpb", label: "⚡ SHPB Tester", component: <SHPBTester /> },
  ];

  return (
    <div className="interactive-demo">
      <div className="interactive-demo__container">
        <div className="interactive-demo__header">
          <h1 className="interactive-demo__title">Interactive Engineering Demos</h1>
          <p className="interactive-demo__subtitle">
            Explore hands-on simulations of real engineering concepts from my work and research
          </p>
        </div>

        <div className="interactive-demo__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`interactive-demo__tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="interactive-demo__content">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemoPage;
