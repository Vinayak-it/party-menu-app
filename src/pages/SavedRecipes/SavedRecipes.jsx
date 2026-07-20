import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SavedRecipeCard from "../../components/SavedRecipeCard/SavedRecipeCard";
import "./SavedRecipes.css";



function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState(() => {
    return JSON.parse(localStorage.getItem("savedRecipes")) || [];
    });
  const navigate = useNavigate();


  const removeRecipe = (id) => {
    const updatedRecipes = savedRecipes.filter(
      (recipe) => recipe.id !== id
    );

    localStorage.setItem(
      "savedRecipes",
      JSON.stringify(updatedRecipes)
    );

    setSavedRecipes(updatedRecipes);
  };

  return (
  <div className="container">

    <div className="saved-header">

        <div>

            <h1>Saved Recipes</h1>

            <p className="saved-count">
            {savedRecipes.length} recipe
            {savedRecipes.length !== 1 ? "s" : ""} saved
            </p>

        </div>

        <button
            className="back-btn"
            onClick={() => navigate("/")}
        >
            Back to Menu
        </button>

        </div>

    {savedRecipes.length === 0 ? (
        <div className="empty-state">
            <p className="empty-title">
            No saved recipes yet.
            </p>

            <button
            className="browse-btn"
            onClick={() => navigate("/")}
            >
            Browse the menu
            </button>
        </div>
        ) : (
      <div className="food-grid">
        {savedRecipes.map((recipe) => (
          <SavedRecipeCard
            key={recipe.id}
            recipe={recipe}
            onRemove={removeRecipe}
          />
        ))}
      </div>
    )}
  </div>
);
}

export default SavedRecipes;