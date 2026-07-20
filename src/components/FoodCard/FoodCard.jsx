import { Link } from "react-router-dom";
import "./FoodCard.css";

const FoodCard = ({ recipe }) => {
  return (
    <Link
      to={`/menu/${recipe.id}`}
      className="food-card-link"
    >
      <div className="food-card">

        <div className="food-image-wrapper">

          <img
            src={recipe.image}
            alt={recipe.name}
            className="food-image"
          />

          <span
            className={recipe.isVeg ? "veg-badge" : "nonveg-badge"}
          >
            {recipe.isVeg ? "VEG" : "NON VEG"}
          </span>

        </div>

        <div className="food-content">

          <div className="badges">
            <span className="category-badge">
              {recipe.category === "desert"
                ? "DESSERT"
                : recipe.category.toUpperCase()}
            </span>
          </div>

          <h3>{recipe.name}</h3>

          <p>{recipe.description}</p>

          <small>{recipe.servings}</small>

        </div>

      </div>
    </Link>
  );
};

export default FoodCard;