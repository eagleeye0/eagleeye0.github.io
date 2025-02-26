import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Shop from "./pages/shop";
import BrandLogin from "./pages/brand/brandLogin";
import Brand from "./pages/brand/brand";
import BrandSignup from "./pages/brand/brandSignup";
import InfluencerLogin from "./pages/influencer/influencerLogin";
import RequireAuth from "./loginRouters";

export default function App() {


  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brand-login/" element={<BrandLogin />} />
      <Route path="/brand-signup" element={<BrandSignup />} />
      <Route element={<RequireAuth redirectTo="/brand-login" />}>
        <Route path="/brand" element={<Brand />} />
      </Route>
      <Route path="/influencer-login/" element={<InfluencerLogin />} />
    </Routes>
  </Router>
}
