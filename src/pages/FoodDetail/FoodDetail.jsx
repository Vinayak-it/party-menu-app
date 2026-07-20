import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import menuData from "../../data/menuData";
import "./FoodDetail.css";

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = menuData.find(
    (item) => item.id === Number(id)
    );


  const [savedRecipes, setSavedRecipes] = useState(() => {
    return JSON.parse(localStorage.getItem("savedRecipes")) || [];
    });

    const isSaved =
        recipe &&
        savedRecipes.some(
            (item) => item.id === recipe.id
        );


  

    const handleSaveRecipe = () => {
        if (!recipe || isSaved) return;

        const updatedRecipes = [...savedRecipes, recipe];

        setSavedRecipes(updatedRecipes);

        localStorage.setItem(
            "savedRecipes",
            JSON.stringify(updatedRecipes)
        );
        };


  if (!recipe) {
    return (
      <div className="food-detail-container">
        <h2>Recipe not found</h2>
      </div>
    );
  }

  return (
    <div className="food-detail-container">

      <div className="detail-topbar">

        <button
            className="back-btn"
            onClick={() => navigate(-1)}
        >
            ← Back to Menu
        </button>

        <div className="action-buttons">

            <Link
            to="/saved-recipes"
            className="saved-recipes-btn"
            >
            Saved Recipes
            </Link>

            <button
            className="save-btn"
            onClick={handleSaveRecipe}
            disabled={isSaved}
            >
            {isSaved ? "✓ Saved" : "Save Recipe"}
            </button>

        </div>

      </div>

      <div className="detail-food-card">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="detail-food-image"
        />

        <div className="detail-food-content">

          <div className="badge-row">
            <span className={recipe.isVeg ? "veg" : "nonveg"}>
              {recipe.isVeg ? "Veg" : "Non Veg"}
            </span>

            <span className="category">
              {recipe.category}
            </span>
          </div>
          


          <div className="detail-header">
            <div>

                <h1>{recipe.name}</h1>


                <p className="servings">
                    {recipe.servings}
                </p>
            </div>

            
          </div>

          <p className="full-description">
            {recipe.fullDescription}
          </p>


        </div>

      </div>

      
      <div className="ingredients-card">
        <h3>Ingredients</h3>

        <ul className="ingredients-list">
            {recipe.ingredients.map((item, index) => (
            <li key={index}>
                <span>{item.name}</span>

                <span>{item.quantity}</span>
            </li>
            ))}
        </ul>
      </div>

    </div>
  );
};

export default FoodDetail;