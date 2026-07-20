import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import logo from "../../assets/icons/logo.svg";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
        setError("Email and password are required");
        return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await loginUser(email, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-card">
      <div className="logo">
        <img src={logo} alt="Party Menu" className="logo-image" />
      </div>

      <h1>Party Menu</h1>

      <p className="subtitle">
        Sign in to explore our delicious menu
      </p>

      {error && (
        <div className="error-box">
            {error}
        </div>
        )}

      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>

        <input
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        

        <button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;