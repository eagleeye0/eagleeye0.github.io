import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/brandAuthSlice";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); // Check if user is logged in

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Brandfluence</Link>
        <Link to="/brand-login">Brand Login</Link>
        <Link to="/brand-signup">Brand Sign Up</Link>
        <Link to="/brand">Brand Home Page</Link>
        <Link to="/influencer-login">Influencer Login</Link>
      </div>
      {user && (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}
