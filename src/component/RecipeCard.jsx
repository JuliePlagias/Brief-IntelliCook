import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipeCard">
      <div className="container">
        <img
          src={`/assets/images/recettes/${recipe.name.toLowerCase()}.jpg`}
          alt={recipe.name}
        />
        <h1>{recipe.name}</h1>
      </div>
    </div>
  );
};

export default RecipeCard;
