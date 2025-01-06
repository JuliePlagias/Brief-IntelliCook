import React from "react";
import Ingredient from "./Ingredient";

export default function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <h1>{recipe.name}</h1>
      <h2>Ingrédients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, i) => (
          <li key={i}>
            <Ingredient
              name={ingredient.name}
              quantity={ingredient.quantity}
              unit={ingredient.unit}
            />
          </li>
        ))}
      </ul>
      <h2>Etapes</h2>
      <ul>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </div>
  );
}
