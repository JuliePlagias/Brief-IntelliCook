import React, { useState } from "react";
import Recipes from "./Recipes";

/**
 * Retourne toutes les recettes qui correspondent à la recherche.
 * @returns {JSX.Element} Toutes les recettes sont affichées si rien n'est entré dans l'input.
 */
const SearchRecipe = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Soupe de légumes, poireaux, etc..."
        onChange={(e) => setSearch(e.target.value)}
        className="searchRecipe"
      />
      <Recipes search={search} />
    </div>
  );
};

export default SearchRecipe;
