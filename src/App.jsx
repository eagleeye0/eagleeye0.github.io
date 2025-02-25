import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Shop from "./pages/shop";
import BrandLogin from "./pages/brandLogin";
import Brand from "./pages/brand";
import InfluencerLogin from "./pages/influencerLogin";
import RequireAuth from "./loginRouters";

export default function App() {


  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brand-login/" element={<BrandLogin />} />
      <Route element={<RequireAuth redirectTo="/brand-login" />}>
        <Route path="/brand" element={<Brand />} />
      </Route>
      <Route path="/influencer-login/" element={<InfluencerLogin />} />
    </Routes>
  </Router>
}