import React from "react";
import Navbar from "./navbar";

export default function HomePage() {
  return (
    <div className="app">
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #121212; /* Charcoal Black */
          color: #E0E0E0;
        }
        .container {
          padding: 2rem;
        }
        .card {
          background-color: #1E1E2E;
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }
        .current-weather {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .current-weather h2 {
          margin: 0;
          font-size: 2.5rem;
          color: #00B8D4;
        }
        .weather-icon {
          font-size: 3rem;
        }
        .forecast-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
        }
        .forecast-item {
          background-color: #2A2A3D;
          border-radius: 0.8rem;
          padding: 1rem;
          text-align: center;
        }
        .forecast-item h4 {
          margin: 0.5rem 0;
          color: #00B8D4;
        }
        .details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }
        .detail-box {
          background-color: #2A2A3D;
          border-radius: 0.8rem;
          padding: 1rem;
          text-align: center;
        }
        .alert {
          background-color: #FF7043; /* Orange */
          color: #fff;
          padding: 1rem;
          border-radius: 0.8rem;
          text-align: center;
          font-weight: bold;
        }
      `}</style>

      {/* Navbar */}
      <Navbar />

      <div className="container">
        {/* Current Weather */}
        <div className="card current-weather">
          <div>
            <h2>28°C</h2>
            <p>Feels like 30°C</p>
            <p>📍 New Delhi</p>
          </div>
          <div className="weather-icon">☀️</div>
        </div>

        {/* Hourly Forecast */}
        <div className="card">
          <h3>Hourly Forecast</h3>
          <div className="forecast-grid">
            <div className="forecast-item"><h4>1 PM</h4><p>☀️</p><p>29°C</p></div>
            <div className="forecast-item"><h4>2 PM</h4><p>⛅</p><p>28°C</p></div>
            <div className="forecast-item"><h4>3 PM</h4><p>🌧️</p><p>27°C</p></div>
            <div className="forecast-item"><h4>4 PM</h4><p>☁️</p><p>26°C</p></div>
          </div>
        </div>

        {/* Daily Forecast */}
        <div className="card">
          <h3>5-Day Forecast</h3>
          <div className="forecast-grid">
            <div className="forecast-item"><h4>Mon</h4><p>☀️</p><p>32°/25°</p></div>
            <div className="forecast-item"><h4>Tue</h4><p>🌧️</p><p>30°/24°</p></div>
            <div className="forecast-item"><h4>Wed</h4><p>☁️</p><p>29°/23°</p></div>
            <div className="forecast-item"><h4>Thu</h4><p>☀️</p><p>33°/26°</p></div>
            <div className="forecast-item"><h4>Fri</h4><p>⛅</p><p>31°/25°</p></div>
          </div>
        </div>

        {/* Details Panel */}
        <div className="card">
          <h3>Details</h3>
          <div className="details">
            <div className="detail-box">🌬️ Wind: 10 km/h</div>
            <div className="detail-box">💧 Humidity: 65%</div>
            <div className="detail-box">☀️ UV Index: 7 (High)</div>
            <div className="detail-box">🌅 Sunrise: 6:12 AM</div>
            <div className="detail-box">🌇 Sunset: 6:45 PM</div>
            <div className="detail-box">🌫️ AQI: 120 (Moderate)</div>
          </div>
        </div>

        {/* Alerts */}
        <div className="alert">⚠️ Heatwave Warning: Stay Hydrated!</div>
      </div>
    </div>
  );
}
