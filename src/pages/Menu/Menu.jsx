import { useState } from "react";

import Header from "../../components/Header/Header";
import FilterBar from "../../components/FilterBar/FilterBar";
import FoodCard from "../../components/FoodCard/FoodCard";

import menuData from "../../data/menuData";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDiet, setSelectedDiet] = useState("All");

  const filteredRecipes = menuData.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      recipe.category === selectedCategory;

    const matchesDiet =
      selectedDiet === "All" ||
      (selectedDiet === "Veg" && recipe.isVeg) ||
      (selectedDiet === "Non-Veg" && !recipe.isVeg);

    return matchesSearch && matchesCategory && matchesDiet;
  });

  return (
    <div className="container">
      <Header />

      <FilterBar
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDiet={selectedDiet}
        setSelectedDiet={setSelectedDiet}
      />

      <p
        style={{
          color: "#9ca3af",
          marginBottom: "20px",
        }}
      >
        {filteredRecipes.length} items found
      </p>

      <div className="food-grid">
        {filteredRecipes.map((recipe) => (
          <FoodCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;