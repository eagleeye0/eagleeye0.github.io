import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Shop from "./pages/shop";
import BrandLogin from "./pages/brandLogin";
import InfluencerLogin from "./pages/influencerLogin";

export default function App() {


  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/shop/" element={<Shop />} /> */}
      <Route path="/brand-login/" element={<BrandLogin />} />
      <Route path="/influencer-login/" element={<InfluencerLogin />} />
      {/* <Route
        path="/dashboard"
        element={
          <RequireAuth redirectTo="/login">
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/checkout"
        element={
          <RequireAuth redirectTo="/login">
            <Checkout />
          </RequireAuth>
        } 
      /> */}
    </Routes>
  </Router>
}