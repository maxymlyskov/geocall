import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import MapPage from "./MapPage/MapPage";

import "./LoginPage/LoginPage.css";
import "./MapPage/MapP";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/map" element={<MapPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
