import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/slices/brandAuthSlice";
import Navbar from "../../components/molecules/navbar";

export default function SignUp() {
  const [name, setName] = useState("");
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

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div>
      <Navbar />
      <h1>Brand Sign Up</h1>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
