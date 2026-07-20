import { Link } from "react-router-dom";
import "./SavedRecipeCard.css";

const SavedRecipeCard = ({ recipe, onRemove }) => {
  return (
    <div className="saved-card">

      <Link
        to={`/menu/${recipe.id}`}
        className="saved-card-link"
      >
        <div className="saved-image-wrapper">

            <img
                src={recipe.image}
                alt={recipe.name}
                className="saved-image"
            />

            <span
                className={recipe.isVeg ? "saved-veg" : "saved-nonveg"}
            >
                {recipe.isVeg ? "VEG" : "NON-VEG"}
            </span>

        </div>

        <div className="saved-content">

          <span className="saved-category">
            {recipe.category.toUpperCase()}
          </span>

          <h3 className="saved-title">
            {recipe.name}
          </h3>

          <p className="saved-description">
            {recipe.description}
          </p>

          <p className="saved-servings">
            {recipe.servings}
          </p>

        </div>
      </Link>

      <button
        className="remove-btn"
        onClick={() => onRemove(recipe.id)}
      >
        Remove
      </button>

    </div>
  );
};

export default SavedRecipeCard;