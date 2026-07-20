import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateSavedCount = () => {
        const savedRecipes =
        JSON.parse(localStorage.getItem("savedRecipes")) || [];

        setSavedCount(savedRecipes.length);
    };

    updateSavedCount();

    window.addEventListener(
        "savedRecipesUpdated",
        updateSavedCount
    );

    window.addEventListener(
        "storage",
        updateSavedCount
    );

    return () => {
        window.removeEventListener(
        "savedRecipesUpdated",
        updateSavedCount
        );

        window.removeEventListener(
        "storage",
        updateSavedCount
        );
    };
    }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/signin");
  };

  return (
    <header className="header">
      <div>
        <h1>Party Menu</h1>

        <p className="welcome-text">
          Welcome, {user?.name || "Guest"}
        </p>
      </div>

      <div className="header-buttons">
        <Link
            to="/saved-recipes"
            className="saved-btn"
            >
            Saved Recipes

            <span className="badge">
                {savedCount}
            </span>
        </Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;