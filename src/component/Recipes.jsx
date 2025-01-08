import React from "react";
import recettes from "../data/recipes.json";
import RecipeCard from "./RecipeCard";

const Recipes = ({ search }) => {
  const findRecipe = (recipeName) => {
    return recettes.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(recipeName.toLowerCase())
    );
  };

  console.log(findRecipe("Salade composée"));

  return (
    <div className="recipes">
      {findRecipe(search) &&
        findRecipe(search).map((recipe, i) => {
          if (i < 12) {
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          }
        })}
    </div>
  );
};

export default Recipes;
