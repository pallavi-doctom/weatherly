import React, { useState } from "react";
import Navbar from "./navbar";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

export default function ForecastPage() {
  const [view, setView] = useState("daily"); // daily | hourly

  // Sample daily forecast data
  const dailyData = [
    { day: "Mon", high: 32, low: 22, rain: 20, wind: 12, humidity: 60, condition: "sunny" },
    { day: "Tue", high: 28, low: 19, rain: 70, wind: 20, humidity: 80, condition: "rainy" },
    { day: "Wed", high: 25, low: 18, rain: 10, wind: 15, humidity: 55, condition: "cloudy" },
    { day: "Thu", high: 34, low: 24, rain: 5, wind: 18, humidity: 45, condition: "sunny" },
    { day: "Fri", high: 36, low: 26, rain: 15, wind: 22, humidity: 40, condition: "sunny" },
    { day: "Sat", high: 29, low: 21, rain: 50, wind: 17, humidity: 70, condition: "storm" },
    { day: "Sun", high: 27, low: 20, rain: 30, wind: 14, humidity: 65, condition: "rainy" },
  ];

  // Sample hourly forecast data
  const hourlyData = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    temp: 20 + Math.round(Math.sin(i / 3) * 5),
    feels: 19 + Math.round(Math.sin(i / 2) * 4),
    rain: Math.round(Math.random() * 60),
    wind: 5 + Math.round(Math.random() * 15),
  }));

  return (
    <div className="forecast-page">
      {/* ✅ Use imported Navbar component */}
      <Navbar />

      {/* Forecast Toggle */}
      <div className="toggle-buttons">
        <button
          className={view === "daily" ? "active" : ""}
          onClick={() => setView("daily")}
        >
          Daily Forecast
        </button>
        <button
          className={view === "hourly" ? "active" : ""}
          onClick={() => setView("hourly")}
        >
          Hourly Forecast
        </button>
      </div>

      {/* Forecast Section */}
      {view === "daily" ? (
        <div className="forecast-cards">
          {dailyData.map((d, idx) => (
            <div
              key={idx}
              className={`forecast-card ${d.condition}`}
              style={{
                borderLeft: d.condition === "storm" ? "4px solid #FF7043" : "none",
              }}
            >
              <h3>{d.day}</h3>
              <p>
                <span className="high">{d.high}°</span> /{" "}
                <span className="low">{d.low}°</span>
              </p>
              <p>🌦 {d.rain}%</p>
              <p>💨 {d.wind} km/h</p>
              <p>💧 {d.humidity}%</p>
              <p>☀️ {d.condition}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="hourly-scroll">
          {hourlyData.map((h, idx) => (
            <div key={idx} className="hour-card">
              <p>{h.time}</p>
              <p>{h.temp}° / feels {h.feels}°</p>
              <p>🌧 {h.rain}%</p>
              <p>💨 {h.wind} km/h</p>
            </div>
          ))}
        </div>
      )}

      {/* Charts Section */}
      <div className="charts">
        <h3>Temperature Trend</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={dailyData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="high" stroke="#00B8D4" />
            <Line type="monotone" dataKey="low" stroke="#FF7043" />
          </LineChart>
        </ResponsiveContainer>

        <h3>Rainfall Probability</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dailyData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="rain" fill="#00B8D4" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Internal CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #121212;
          color: #fff;
        }
        .forecast-page {
          padding: 10px 20px;
        }
        /* Navbar styles can still be handled inside Navbar component itself */
        
        .toggle-buttons {
          display: flex;
          gap: 10px;
          margin: 20px 0;
        }
        .toggle-buttons button {
          padding: 8px 14px;
          border: none;
          border-radius: 8px;
          background: #1E1E2E;
          color: #fff;
          cursor: pointer;
          transition: 0.3s;
        }
        .toggle-buttons button.active {
          background: #00B8D4;
          color: #121212;
        }
        .forecast-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }
        .forecast-card {
          background: #1E1E2E;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          transition: transform 0.2s;
        }
        .forecast-card:hover {
          transform: translateY(-5px);
        }
        .forecast-card .high {
          color: #FF7043;
        }
        .forecast-card .low {
          color: #00B8D4;
        }
        .hourly-scroll {
          display: flex;
          overflow-x: auto;
          gap: 12px;
          padding-bottom: 15px;
        }
        .hour-card {
          min-width: 120px;
          background: #1E1E2E;
          padding: 12px;
          border-radius: 10px;
          text-align: center;
        }
        .charts {
          margin-top: 30px;
        }
        h3 {
          margin: 15px 0;
          color: #00B8D4;
        }
      `}</style>
    </div>
  );
}
