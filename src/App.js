import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import Forecast from "./components/forecast";
import Settings from "./components/settings";


function App() {
  return (
    
      <Routes>       
      {/* Redirect from / to /home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Home page */}
      <Route path="/home" element={<Home />} />

      {/* Forecast page */}
      <Route path="/forecast" element={<Forecast />} />

      {/* Settings page */}
      <Route path="/settings" element={<Settings />} />
    </Routes>
    
  );
}

export default App;


