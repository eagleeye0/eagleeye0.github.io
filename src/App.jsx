import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";

export default function App() {


  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/" element={<Shop />} />
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