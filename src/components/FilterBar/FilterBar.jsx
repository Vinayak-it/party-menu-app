import { PiLeafFill } from "react-icons/pi";
import { GiMeat } from "react-icons/gi";
import "./FilterBar.css";

const categories = [
  { label: "All", value: "All" },
  { label: "Starter", value: "starter" },
  { label: "Main", value: "main" },
  { label: "Sides", value: "sides" },
  { label: "Dessert", value: "desert" },
];
const diets = ["All", "Veg", "Non-Veg"];

const FilterBar = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  selectedDiet,
  setSelectedDiet,
}) => {
  return (
    <div className="filter-box">
      <div className="filter-group">
        <p className="filter-title">CATEGORY</p>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
                key={category.value}
                className={
                selectedCategory === category.value
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => setSelectedCategory(category.value)}
            >
                {category.label}
            </button>
            ))}
        </div>
      </div>

      <div className="filter-group">
        <p className="filter-title">DIET</p>

        <div className="filter-buttons">
          {diets.map((diet) => (
            <button
                key={diet}
                className={
                selectedDiet === diet
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => setSelectedDiet(diet)}
            >
                {diet === "Veg" && <PiLeafFill className="diet-icon" />}
                {diet === "Non-Veg" && <GiMeat className="diet-icon" />}
                {diet}
            </button>
            ))}
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="search-btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBar;