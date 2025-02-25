import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/authSlice";
import Navbar from "../components/navbar";

export default function Login() {
  const { loading, error, user } = useSelector((state) => state.auth);

  return (
    <div>
      <Navbar />
      <h1>Brand Main Page</h1>
      Welcome {user.name}
    </div>
  );
}

