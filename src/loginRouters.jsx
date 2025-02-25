import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function RequireAuth({ redirectTo = "/brand-login" }) {
  const user = useSelector((state) => state.auth.user); // Fix: Use state.auth.user

  return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
}
