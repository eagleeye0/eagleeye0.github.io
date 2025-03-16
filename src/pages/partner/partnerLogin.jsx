import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slices/brandAuthSlice";
import Navbar from "../../components/molecules/navbar";
import Loading from "../../components/atoms/loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/brand");
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <Navbar />
      {loading ? <Loading /> : (<>
        <h1>Partner Login/SignUp</h1>
        {user ? <p>Welcome, {user.name}!</p> : (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </>
      )}
    </div>
  );
}

