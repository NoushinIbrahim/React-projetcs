import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/checkout");
  };

  return (
    <div className="auth">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login to continue shopping</p>

        <input
          type="email"
          placeholder="Email address"
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

        <button type="submit">Login</button>

        <p className="switch">
          Don’t have an account?
          <span onClick={() => navigate("/register")}> Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
