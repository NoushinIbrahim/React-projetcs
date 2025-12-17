import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    navigate("/login");
  };

  return (
    <div className="auth">
      <form className="auth-card" onSubmit={handleRegister}>
        <h2>Create Account 🚀</h2>
        <p className="subtitle">Join V-Shop today</p>

        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <button type="submit">Create Account</button>

        <p className="switch">
          Already have an account?
          <span onClick={() => navigate("/login")}> Login</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
