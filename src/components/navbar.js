import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Weatherly</h2>
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/forecast" className={({ isActive }) => isActive ? "active" : ""}>
            Forecast
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}>
            Settings
          </NavLink>
        </li>
      </ul>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #1E1E2E; /* Deep Navy */
          padding: 12px 24px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .logo {
          margin: 0;
          color: #00B8D4; /* Cyan */
        }
        .navbar ul {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
        }
        .navbar li {
          margin: 0;
        }
        .navbar a {
          text-decoration: none;
          color: #fff;
          font-weight: 500;
          transition: 0.3s;
        }
        .navbar a:hover {
          color: #00B8D4; /* Cyan hover */
        }
        .navbar a.active {
          color: #00B8D4;
          border-bottom: 2px solid #00B8D4;
          padding-bottom: 2px;
        }
      `}</style>
    </nav>
  );
}
