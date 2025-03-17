import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/molecules/navbar";
import Loading from "../../components/atoms/loading";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/brand");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      {loading ? <Loading /> : (
        <>
          <h1 style={{ textAlign: "center" }}>Dashboard</h1>
          {user && <p style={{ textAlign: "center" }}>Welcome, {user.name}!</p>}
          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        </>
      )}
    </div>
  );
}
