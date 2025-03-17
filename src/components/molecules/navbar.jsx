import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/brandAuthSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../static/img/logo.png"
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
        <Link to="/">
        <img src={logo} height={"23px"}></img></Link>
        <Link to="/login">Partner Login</Link>
        <Link to="/dashboard">Partner Dashboard</Link>
      </div>
      {user && (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}
