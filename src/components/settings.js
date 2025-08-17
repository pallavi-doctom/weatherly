import React, { useState } from "react";
import Navbar from "./navbar";

const SettingsPage = () => {
  const [autoDetect, setAutoDetect] = useState(true);
  const [unitTemp, setUnitTemp] = useState("Celsius");
  const [unitWind, setUnitWind] = useState("km/h");
  const [alerts, setAlerts] = useState({
    severe: true,
    dailySummary: false,
    rainSnowStorm: true,
  });
  const [refreshInterval, setRefreshInterval] = useState(30);
  const [theme, setTheme] = useState("dark");
  const [fontSize, setFontSize] = useState("Medium");

  return (
    <div className="settings-page">
      {/* Render Navbar here */}
      <Navbar />

      <h1>Settings</h1>

      {/* Core Settings: Location */}
      <div className="card">
        <h2>Location Settings</h2>
        <div className="setting">
          <label>Default location:</label>
          <input type="text" placeholder="Enter city or ZIP" />
        </div>
        <div className="setting toggle">
          <label>Auto-detect current location:</label>
          <input
            type="checkbox"
            checked={autoDetect}
            onChange={() => setAutoDetect(!autoDetect)}
          />
        </div>
        <div className="setting">
          <button>Manage saved locations</button>
        </div>
      </div>

      {/* Units & Measurement */}
      <div className="card">
        <h2>Units & Measurement</h2>
        <div className="setting">
          <label>Temperature:</label>
          <select value={unitTemp} onChange={(e) => setUnitTemp(e.target.value)}>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
        </div>
        <div className="setting">
          <label>Wind Speed:</label>
          <select value={unitWind} onChange={(e) => setUnitWind(e.target.value)}>
            <option value="km/h">km/h</option>
            <option value="mph">mph</option>
          </select>
        </div>
        <div className="setting">
          <label>Pressure:</label>
          <select>
            <option value="hPa">hPa</option>
            <option value="inHg">inHg</option>
          </select>
        </div>
      </div>

      {/* Notifications & Alerts */}
      <div className="card">
        <h2>Notifications & Alerts</h2>
        <div className="setting toggle">
          <label>Severe weather alerts:</label>
          <input
            type="checkbox"
            checked={alerts.severe}
            onChange={() => setAlerts({ ...alerts, severe: !alerts.severe })}
          />
        </div>
        <div className="setting toggle">
          <label>Daily weather summary:</label>
          <input
            type="checkbox"
            checked={alerts.dailySummary}
            onChange={() => setAlerts({ ...alerts, dailySummary: !alerts.dailySummary })}
          />
        </div>
        <div className="setting toggle">
          <label>Rain / Snow / Storm alerts:</label>
          <input
            type="checkbox"
            checked={alerts.rainSnowStorm}
            onChange={() => setAlerts({ ...alerts, rainSnowStorm: !alerts.rainSnowStorm })}
          />
        </div>
      </div>

      {/* Update Frequency */}
      <div className="card">
        <h2>Update Frequency</h2>
        <div className="setting">
          <label>Refresh weather data every (minutes):</label>
          <input
            type="number"
            value={refreshInterval}
            min={5}
            max={120}
            onChange={(e) => setRefreshInterval(e.target.value)}
          />
        </div>
      </div>

      {/* UI / UX Preferences */}
      <div className="card">
        <h2>UI / UX Preferences</h2>
        <div className="setting toggle">
          <label>Dark / Light Mode:</label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
        <div className="setting">
          <label>Font Size:</label>
          <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
      </div>

      <style>{`
        .settings-page {
          background-color: #121212;
          color: #fff;
          padding: 2rem;
          font-family: Arial, sans-serif;
          min-height: 100vh;
        }
        h1 {
          text-align: center;
          color: #00B8D4;
          margin-bottom: 2rem;
        }
        .card {
          background-color: #1E1E2E;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        h2 {
          color: #00B8D4;
          margin-bottom: 1rem;
        }
        .setting {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .setting label {
          margin-right: 1rem;
          flex: 1;
        }
        .setting input[type="text"],
        .setting input[type="number"],
        .setting select {
          padding: 0.5rem;
          border-radius: 8px;
          border: none;
          background-color: #121212;
          color: #fff;
          text-align: right;
          flex: 1;
        }
        .setting button {
          background-color: #00B8D4;
          color: #121212;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }
        .setting button:hover {
          background-color: #FF7043;
        }
        .toggle input[type="checkbox"] {
          width: 40px;
          height: 20px;
          accent-color: #00B8D4;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default SettingsPage;
