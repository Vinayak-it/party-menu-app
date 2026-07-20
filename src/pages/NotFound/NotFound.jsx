import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">

      <h1 className="error-code">404</h1>

      <h2 className="error-title">
        Page Not Found
      </h2>

      <p className="error-description">
        The page you are looking for does not exist or has been moved.
      </p>

      <button
        className="back-menu-btn"
        onClick={() => {
            const token = localStorage.getItem("token");

            navigate(token ? "/" : "/signin");
            }}
      >
        Back to Menu
      </button>

    </div>
  );
}

export default NotFound;