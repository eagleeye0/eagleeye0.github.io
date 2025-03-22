import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">Solutions</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </div>
      </nav>

      {/* Split Content */}
      <div className="main-content">
        {/* Left Side - Welcome */}
        <div className="left-side">
          <div className="welcome-section">
            <h1>Welcome Back!</h1>
            <p className="subtitle">
              Log in to manage your shipments and<br />
              deliveries seamlessly.
            </p>
          </div>
        </div>

        {/* Right Side - Login */}
        <div className="right-side">
          <div className="login-box">
            <h2 className="login-title">Login</h2>
            <form className="login-form">
              <div className="form-group">
                <label>Phone no./Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                />
              </div>

              <a href="#" className="forgot-password">
                Forgot your password?
              </a>

              <button type="submit" className="signin-btn">
                Sign in
              </button>

              <div className="signup-link">
                Don't have an account? <a href="#">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// CSS Styles
const styles = `
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  min-height: 100vh;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: white;
  border-bottom: 1px solid #eee;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #444;
  font-size: 16px;
}

/* Split Layout */
.main-content {
  display: flex;
  height: calc(100vh - 72px);
}

.left-side {
  flex: 1;
  background: #f8f9fa;
  padding: 6rem 5% 4rem 15%;
  display: flex;
  align-items: flex-start;
}

.welcome-section {
  max-width: 500px;
  margin-left: 40px;
}

.welcome-section h1 {
  font-size: 3.2rem;
  color: #1a202c;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.subtitle {
  color: #718096;
  font-size: 1.2rem;
  line-height: 1.6;
}

/* Login Box */
.right-side {
  flex: 1;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8%;
}

.login-box {
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 420px;
  margin-left: -30px;
}

.login-title {
  font-size: 2rem;
  color: #1a202c;
  margin-bottom: 2rem;
  font-weight: 600;
}

.form-group {
  margin-bottom: 1.8rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.8rem;
  color: #4a5568;
  font-size: 15px;
}

.input-field {
  width: 100%;
  padding: 14px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 16px;
}

.forgot-password {
  display: block;
  text-align: left;
  color: #4299e1;
  text-decoration: none;
  margin: 1rem 0;
  font-size: 15px;
}

.signin-btn {
  width: 100%;
  padding: 14px;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1rem;
}

.signup-link {
  text-align: center;
  margin-top: 2rem;
  color: #718096;
  font-size: 15px;
}

.signup-link a {
  color: #4299e1;
  text-decoration: none;
  font-weight: 500;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);