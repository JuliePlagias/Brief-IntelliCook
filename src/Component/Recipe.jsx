import React from "react";

export default function Recipe({ recipe }) {
  const writeGoodDeOrD = (ingredient) => {
    const d = ["a", "e", "i", "o", "u", "y", "h"];
    return d.find((l) => l === ingredient[0]) ? " d'" : " de ";
  };

  return (
    <div>
      <h1>{recipe.nom}</h1>
      <h2>Ingrédients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, i) => (
          <li key={i}>
            {ingredient.quantite +
              (ingredient.unite
                ? " " + ingredient.unite + writeGoodDeOrD(ingredient.ingredient)
                : " ") +
              ingredient.ingredient}
          </li>
        ))}
      </ul>
      <h2>Etapes</h2>
      <ul>
        {recipe.etapes.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </div>
  );
}
