import React from "react";
import recettes from "../data/recipes.json";
import Recipe from "./Recipe";

const Recipes = ({ search }) => {
  const findRecipe = (recipeName) => {
    return recettes.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(recipeName.toLowerCase())
    );
  };

  console.log(findRecipe("Salade composée"));

  return (
    <div>
      {findRecipe(search) &&
        findRecipe(search).map((recipe, i) => {
          if (i < 6) {
            return <Recipe key={recipe.id} recipe={recipe} />;
          }
        })}
    </div>
  );
};

export default Recipes;
