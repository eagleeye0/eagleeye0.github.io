import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Shop from "./pages/shop";
import BrandLogin from "./pages/brand/brandLogin";
import Brand from "./pages/brand/brand";
import CreateCampaign from "./pages/brand/createCampaign";
import FindCreator from "./pages/brand/findCreator";
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
        <Route path="/create-campaign/" element={<CreateCampaign />} />
        <Route path="/creator-search/" element={<FindCreator />} />
      </Route>
      <Route path="/influencer-login/" element={<InfluencerLogin />} />
    </Routes>
  </Router>
}
