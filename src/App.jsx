import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Shop from "./pages/shop";
import Login from "./pages/partner/partnerLogin";
export default function App() {


  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/" element={<Login />} />
    </Routes>
  </Router>
}
