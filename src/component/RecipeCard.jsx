import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipeCard">
      <img
        src={`/assets/images/recettes/${recipe.name.toLowerCase()}.jpg`}
        alt={recipe.name}
      />
      <h1 className="recipeCard__name">{recipe.name}</h1>
      <span className="recipeCard__time"> (clock) 40 min</span>
      <div className="recipeCard__buttons">
        <div className="recipeCard__buttons-add"></div>
        <div className="recipeCard__buttons-favorite"></div>
      </div>
    </div>
  );
};

export default RecipeCard;
