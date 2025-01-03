import React from "react";
import recettes from "../DATA/recipes.json";
import Recipe from "./Recipe";

const Recipes = () => {
  const findRecipe = (recipeName) => {
    return recettes.recipes.filter((recipe) =>
      recipe.nom.toLowerCase().includes(recipeName.toLowerCase())
    );
  };

  console.log(findRecipe("Rata"));

  return (
    <div>
      {findRecipe("rata") &&
        findRecipe("rata").map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
    </div>
  );
};

export default Recipes;
